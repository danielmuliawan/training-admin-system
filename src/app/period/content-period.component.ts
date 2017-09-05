import {Component, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MdPaginator} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { Inject} from '@angular/core';
import {MdDialog, MD_DIALOG_DATA} from '@angular/material';
/**
 * @title Table with pagination
 */
@Component({
  selector: 'table-pagination',
  styleUrls: ['../app.component.css'],
  templateUrl: 'content-period.component.html',
})
export class ContentPeriodComponent {
  displayedColumns = ['name', 'active', 'course', 'start_date', 'end_date', 'created_by', 'updated_by', 'action'];
  exampleDatabase = new ExampleDatabase();
  dataSource: ExampleDataSource | null;

  @ViewChild(MdPaginator) paginator: MdPaginator;

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
  }
  constructor(public dialog: MdDialog) {}
  
    openDialog() {
      this.dialog.open(DialogDataExampleDialog, {

      });
    }
}
@Component({
    selector: 'dialog-data-example-dialog',
    templateUrl: 'delete-dialog.component.html',
  })
  export class DialogDataExampleDialog {
    constructor(@Inject(MD_DIALOG_DATA) public data: any) {}
  }
/** Constants used to fill up our data base. */
const COURSE_NAME = ['Scrum training', 'Software testing', 'Java Fundamental', 'Javascript', 'Angular 2', 'Node JS Fundamental', 'Agile Development',
  'Public Speaking', 'Software Development'];
const NAMES = ['Sopyan', 'Mulyana', 'Daniel', 'Muliawan', 'Wisesa', 'Fentika',
  'Wimba', 'Agra', 'Yuliawan', 'Syafaat', 'Inez', 'Ibnu',
  'Billy', 'Christy', 'Taufik', 'Adrian', 'Denny', 'Thomas', 'Elizabeth'];

export interface UserData {
  name: string;
  active: string;
  course: string;
  start_date: Date;
  end_date: Date;
  created_by: string;
  updated_by: string;
  action: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
  get data(): UserData[] { return this.dataChange.value; }

  constructor() {
    // Fill up the database with 100 users.
    for (let i = 0; i < 100; i++) { this.addUser(); }
  }

  /** Adds a new user to the database. */
  addUser() {
    const copiedData = this.data.slice();
    copiedData.push(this.createNewData());
    this.dataChange.next(copiedData);
  }

  /** Builds and returns a new User. */
  private createNewData() {
    const created_by =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    const updated_by =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    return {
      name: COURSE_NAME[Math.round(Math.random() * (COURSE_NAME.length - 1))],
      active: "No",
      course: "1 Course",
      start_date: new Date(12/12/12),
      end_date: new Date(12/12/13),
      created_by: created_by,
      updated_by: updated_by,
      action: "add"
    };
  }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MdPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<UserData[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this._exampleDatabase.data.slice();

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() {}
}
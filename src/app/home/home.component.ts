import {Component} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

/**
 * @title Basic table
 */
@Component({
  selector: 'table-app',
  styleUrls: ['../app.component.css'],
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  displayedColumns = ['course', 'main_trainer', 'backup_trainer', 'start_date', 'end_date', 'location'];
  dataSource = new ExampleDataSource();
}

export interface Element {
  course: string;
  main_trainer: string;
  backup_trainer: string;
  start_date: string;
  end_date: string;
  location: string;
}

const data: Element[] = [
  {course: 'English course', main_trainer: 'Hydrogen',  backup_trainer: 'Hydrogen' , start_date: '01-01-2017', end_date: '12-12-2017', location: 'Bali'},
  {course: 'English course', main_trainer: 'Helium',  backup_trainer: 'Hydrogen' , start_date: '01-01-2017', end_date: '12-12-2017', location: 'Bali'},
  {course: 'English course', main_trainer: 'Lithium',  backup_trainer: 'Hydrogen' , start_date: '01-01-2017', end_date: '12-12-2017', location: 'Bali' },
  {course: 'English course', main_trainer: 'Beryllium',  backup_trainer: 'Hydrogen' , start_date: '01-01-2017', end_date: '12-12-2017', location: 'Bali'},
  {course: 'English course', main_trainer: 'Boron',  backup_trainer: 'Hydrogen' , start_date: '01-01-2017', end_date: '12-12-2017', location: 'Bali'},
  {course: 'English course', main_trainer: 'Carbon',  backup_trainer: 'Hydrogen' , start_date: '01-01-2017', end_date: '12-12-2017', location: 'Bali'},

];

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }
  disconnect() {}
}
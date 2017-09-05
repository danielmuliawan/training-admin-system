import {Component} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

/**
 * @title Basic table
 */
@Component({
  selector: 'table-schedule',
  styleUrls: ['../app.component.css'],
  templateUrl: 'schedule.component.html',
})
export class ScheduleComponent {
  displayedColumns = ['trainer', 'mon', 'tue', 'wed', 'thu', 'fri'];
  dataSource = new ExampleDataSource();
}

export interface Element {
  trainer: string;
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
}

const data: Element[] = [
  {trainer: 'English trainer', mon: 'Hydrogen',  tue: 'Hydrogen' , wed: 'Communication', thu: 'Communication', fri: 'bebas'},
  {trainer: 'English trainer', mon: 'Helium',  tue: 'Hydrogen' , wed: 'Communication', thu: 'Communication', fri: 'bebas'},
  {trainer: 'English trainer', mon: 'Lithium',  tue: 'Hydrogen' , wed: 'Communication', thu: 'Communication', fri: 'bebas' },
  {trainer: 'English trainer', mon: 'Beryllium',  tue: 'Hydrogen' , wed: 'Communication', thu: 'Communication', fri: 'bebas'},
  {trainer: 'English trainer', mon: 'Boron',  tue: 'Hydrogen' , wed: 'Communication', thu: 'Communication', fri: 'bebas'},
  {trainer: 'English trainer', mon: 'Carbon',  tue: 'Hydrogen' , wed: 'Communication', thu: 'Communication', fri: 'bebas'},

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
import { Component } from '@angular/core';
import { Ng8DataTableDirective } from 'ng8-data-table/lib/directives/ng8-data-table.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng8DataTableDemo';
  myTable: Ng8DataTableDirective;
  data: any[] = [];

  constructor() {
    this.data = [
      { name: "John", age: 12, email: "john@gmail.com", city: "Los Angeles"},
      { name: "Jane", age: 44, email: "jane@gmail.com", city: "New York"},
      { name: "Michael", age: 61, email: "michael@gmail.com", city: "Miami"},
      { name: "Bob", age: 22, email: "bob@gmail.com", city: "Atlanta"},
      { name: "Rachel", age: 33, email: "johndoe@gmail.com", city: "Columbus"},
      { name: "John", age: 12, email: "john@gmail.com", city: "Los Angeles"},
      { name: "Jane", age: 44, email: "jane@gmail.com", city: "New York"},
      { name: "Michael", age: 61, email: "michael@gmail.com", city: "Miami"},
      { name: "Bob", age: 22, email: "bob@gmail.com", city: "Atlanta"},
      { name: "Rachel", age: 33, email: "johndoe@gmail.com", city: "Columbus"},
      { name: "John", age: 12, email: "john@gmail.com", city: "Los Angeles"},
      { name: "Jane", age: 44, email: "jane@gmail.com", city: "New York"},
      { name: "Michael", age: 61, email: "michael@gmail.com", city: "Miami"},
      { name: "Bob", age: 22, email: "bob@gmail.com", city: "Atlanta"},
      { name: "Rachel", age: 33, email: "johndoe@gmail.com", city: "Columbus"},
      { name: "John", age: 12, email: "john@gmail.com", city: "Los Angeles"},
      { name: "Jane", age: 44, email: "jane@gmail.com", city: "New York"},
      { name: "Michael", age: 61, email: "michael@gmail.com", city: "Miami"},
      { name: "Bob", age: 22, email: "bob@gmail.com", city: "Atlanta"},
      { name: "Rachel", age: 33, email: "johndoe@gmail.com", city: "Columbus"},
      { name: "John", age: 12, email: "john@gmail.com", city: "Los Angeles"},
      { name: "Jane", age: 44, email: "jane@gmail.com", city: "New York"},
      { name: "Michael", age: 61, email: "michael@gmail.com", city: "Miami"},
      { name: "Bob", age: 22, email: "bob@gmail.com", city: "Atlanta"},
      { name: "Rachel", age: 33, email: "johndoe@gmail.com", city: "Columbus"},
      { name: "John", age: 12, email: "john@gmail.com", city: "Los Angeles"},
      { name: "Jane", age: 44, email: "jane@gmail.com", city: "New York"},
      { name: "Michael", age: 61, email: "michael@gmail.com", city: "Miami"},
      { name: "Bob", age: 22, email: "bob@gmail.com", city: "Atlanta"},
      { name: "Rachel", age: 33, email: "johndoe@gmail.com", city: "Columbus"},
      { name: "John", age: 12, email: "john@gmail.com", city: "Los Angeles"},
      { name: "Jane", age: 44, email: "jane@gmail.com", city: "New York"},
      { name: "Michael", age: 61, email: "michael@gmail.com", city: "Miami"},
      { name: "Bob", age: 22, email: "bob@gmail.com", city: "Atlanta"},
      { name: "Rachel", age: 33, email: "johndoe@gmail.com", city: "Columbus"},
      { name: "John", age: 12, email: "john@gmail.com", city: "Los Angeles"},
      { name: "Jane", age: 44, email: "jane@gmail.com", city: "New York"},
      { name: "Michael", age: 61, email: "michael@gmail.com", city: "Miami"},
      { name: "Bob", age: 22, email: "bob@gmail.com", city: "Atlanta"},
      { name: "Rachel", age: 33, email: "johndoe@gmail.com", city: "Columbus"},
      { name: "John", age: 12, email: "john@gmail.com", city: "Los Angeles"},
      { name: "Jane", age: 44, email: "jane@gmail.com", city: "New York"},
      { name: "Michael", age: 61, email: "michael@gmail.com", city: "Miami"},
      { name: "Bob", age: 22, email: "bob@gmail.com", city: "Atlanta"},
      { name: "Rachel", age: 33, email: "johndoe@gmail.com", city: "Columbus"},
      { name: "John", age: 12, email: "john@gmail.com", city: "Los Angeles"},
      { name: "Jane", age: 44, email: "jane@gmail.com", city: "New York"},
      { name: "Michael", age: 61, email: "michael@gmail.com", city: "Miami"},
      { name: "Bob", age: 22, email: "bob@gmail.com", city: "Atlanta"},
      { name: "Rachel", age: 33, email: "johndoe@gmail.com", city: "Columbus"},
      { name: "John", age: 12, email: "john@gmail.com", city: "Los Angeles"},
      { name: "Jane", age: 44, email: "jane@gmail.com", city: "New York"},
      { name: "Michael", age: 61, email: "michael@gmail.com", city: "Miami"},
      { name: "Bob", age: 22, email: "bob@gmail.com", city: "Atlanta"},
      { name: "Rachel", age: 33, email: "johndoe@gmail.com", city: "Columbus"}
    ];
  }
}

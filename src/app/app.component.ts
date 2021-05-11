import { Component } from '@angular/core';
import { EnumListType, IListfy_options } from './components/jetfy-listfy/jetfy-listfy.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jetfy-portfolio';

  elements = [
    {value: 'Pessoa1', viewValue: 'Tim'},
    {value: 'Pessoa2', viewValue: 'Joe'},
    {value: 'Pessoa3', viewValue: 'Mark'},
    {value: 'Pessoa4', viewValue: 'Steve'},
    {value: 'Pessoa5', viewValue: 'Tim'},
    {value: 'Pessoa6', viewValue: 'Joe'},
    {value: 'Pessoa7', viewValue: 'Mark'}
  ];

  elements2 = [
    {value: 'Pessoa1', viewValue: 'Tim'},
    {value: 'Pessoa2', viewValue: 'Joe'},
    {value: 'Pessoa3', viewValue: 'Mark'},
    {value: 'Pessoa4', viewValue: 'Steve'},
    {value: 'Pessoa5', viewValue: 'Tim'},
    {value: 'Pessoa6', viewValue: 'Joe'},
    {value: 'Pessoa7', viewValue: 'Mark'}
  ];

  listfy_options:IListfy_options = 
  {array:this.elements,
    aditional:'nonsense',
    items_left_margin:15,
    items_right_margin:15,
    listType:EnumListType.Arrow,
    timed:false,
    interval:1000,
  }

  listfy_options2:IListfy_options = 
  {array:this.elements2,
    aditional:'nonsense',
    items_left_margin:15,
    items_right_margin:15,
    listType:EnumListType.Floater,
    timed:false,
    interval:1000,
  }

}

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
    {value: 'Pessoa7', viewValue: 'Mark'},
    {value: 'Pessoa8', viewValue: 'Tim'},
    {value: 'Pessoa9', viewValue: 'Joe'},
    {value: 'Pessoa10', viewValue: 'Mark'}
  ];
  elementsOneElement = [
    {value: 'Pessoa1', viewValue: 'Tim'},
  ];
  elementsTwoElements = [
    {value: 'Pessoa1', viewValue: 'Tim'},
    {value: 'Pessoa2', viewValue: 'Joe'},
  ];
  elementsThreeElements = [
    {value: 'Pessoa1', viewValue: 'Tim'},
    {value: 'Pessoa2', viewValue: 'Joe'},
    {value: 'Pessoa3', viewValue: 'Mark'},
  ];
  elementsFourElements = [
    {value: 'Pessoa1', viewValue: 'Tim'},
    {value: 'Pessoa2', viewValue: 'Joe'},
    {value: 'Pessoa3', viewValue: 'Mark'},
    {value: 'Pessoa4', viewValue: 'Steve'},
  ];
  elementsFiveElements = [
    {value: 'Pessoa1', viewValue: 'Tim'},
    {value: 'Pessoa2', viewValue: 'Joe'},
    {value: 'Pessoa3', viewValue: 'Mark'},
    {value: 'Pessoa4', viewValue: 'Steve'},
    {value: 'Pessoa5', viewValue: 'Steve'},
  ];

  listfy_options1:IListfy_options = 
  {array:this.elements,
    listType:EnumListType.Panner,
    timed:false,
    maximum_number_of_elements:1,
  }

  listfy_options2:IListfy_options = 
  {array:this.elements,
    listType:EnumListType.Panner,
    timed:false,
    maximum_number_of_elements:2,
  }

  listfy_options3:IListfy_options = 
  {array:this.elements,
    listType:EnumListType.Panner,
    timed:false,
    maximum_number_of_elements:3,
  }

  listfy_options4:IListfy_options = 
  {array:this.elements,
    listType:EnumListType.Panner,
    timed:false,
    maximum_number_of_elements:4,
  }

  listfy_options5:IListfy_options = 
  {array:this.elements,
    listType:EnumListType.Panner,
    timed:false,
    maximum_number_of_elements:5,
  }

}

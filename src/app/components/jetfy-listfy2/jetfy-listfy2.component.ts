import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { EnumListType, IListfy_options } from '../jetfy-listfy/jetfy-listfy.component';

@Component({
  selector: 'jetfy-listfy2',
  templateUrl: './jetfy-listfy2.component.html',
  styleUrls: ['./jetfy-listfy2.component.scss']
})
export class JetfyListfy2Component implements OnInit {

  @ContentChild(TemplateRef) templateRef: TemplateRef<any>;
  @Input() cName: Object[];

  loading;
  _properties: Object[];
  _items_left_margin = '10px';
  _items_right_margin = '10px';
  _number_of_elements = 3;
  contador = 0;
  transform = -100;
  transformTime = '0.5s';
  _internal_index = 0;
  _listType: EnumListType;
  _timerSubscription: Subscription;
  _timerInterval = interval(2000);

  nextElementSubscription: Subscription;
  nextElementInterval = interval(10);

  _options: IListfy_options;
  get options(): IListfy_options {
    return this._options;
  }

  @Input() set options(value: IListfy_options) {
    this._properties = value.array;
    this._options = value;
    this._items_left_margin = value.items_left_margin + "px";
    this._items_right_margin = value.items_right_margin + "px";
    this._listType = value.listType;
    let removedElement = this._properties.pop();
    this._properties.unshift(removedElement)
    if(value.timed){
      this._timerSubscription = this._timerInterval.subscribe(val => {
        this.onClickedArrowRight();
      });
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

  getStyle(value1) {

    let a = this._properties.length+this._internal_index
    if (a <= value1) {

      if (this._properties.length == -this._internal_index) {
        this._internal_index = 0;
        this.transform = -100;
        return {'transform': 'translate(' + this.transform + 'px, ' + 0 + 'px)' }
      }
      console.log("me enquadro: "+value1)
      let value = this.transform - (100 * this._properties.length)
      return { 'transform': 'translate(' + value + 'px, ' + 0 + 'px)' }
    }
    if (this._internal_index > value1) {
      if (this._properties.length == this._internal_index) {
        this._internal_index = 0;
        this.transform = -100;
        return {'transform': 'translate(' + this.transform + 'px, ' + 0 + 'px)' }
      }

      let value = this.transform + (100 * this._properties.length)
      return { 'transform': 'translate(' + value + 'px, ' + 0 + 'px)' }
    }

    return { 'transform': 'translate(' + this.transform + 'px, ' + 0 + 'px)' }
  }

  onClickedArrowLeft() {
    this.transform += 100;
    this._internal_index--;
  }

  onClickedArrowRight() {
    this.transform -= 100;
    this._internal_index++;
  }
}
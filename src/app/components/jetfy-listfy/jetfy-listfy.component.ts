import { NgStyle } from '@angular/common';
import { Component, ContentChild, HostListener, Input, OnInit, TemplateRef } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'jetfy-listfy',
  templateUrl: './jetfy-listfy.component.html',
  styleUrls: ['./jetfy-listfy.component.scss']
})
export class JetfyListfyComponent implements OnInit {

  @ContentChild(TemplateRef) templateRef: TemplateRef<any>;
  @Input() cName: Object[];

  loading;
  _properties: Object[];
  _items_left_margin = '10px';
  _items_right_margin = '10px';
  _number_of_elements = 3;
  contador = 0;
  transform = -100;
  list_transform = 0;
  adjuster_transform=0;

  adjuster_velocity=0;
  transformTime = '0.5s';
  _internal_index = 0;
  _listType: EnumListType;
  _timerSubscription: Subscription;
  _timerInterval = interval(2000);
  _screen_inner_width;
  _trippled_items;
  _generatedId;

  _component_width = 100;
  _maximum_number_of_elements = 5;
  _temp_write:boolean;
  _reseting:boolean;
  _remaining_right=0;
  _non_repeater = true;

  nextElementSubscription: Subscription;
  nextElementInterval = interval(10);

  _velocity = 0.5;
  _list_velocity = 0;

  _options: IListfy_options;
  get options(): IListfy_options {
    return this._options;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    //this._screen_inner_width = event.target.innerWidth;
    //this.rearrangeElements(this.numeroMaximoElementosTotal());
    //this.rearrangeElements(this.numeroMaximoElementosTotal());
  }

  @Input() set options(value: IListfy_options) {
    this._properties = value.array;
    this._options = value;
    this._items_left_margin = value.items_left_margin + "px";
    this._items_right_margin = value.items_right_margin + "px";
    this._listType = value.listType;
    this._maximum_number_of_elements = value.maximum_number_of_elements;
    if (value.timed) {
      this._timerSubscription = this._timerInterval.subscribe(val => {
        this.onClickedArrowRight();
      });
    }
  }

  constructor() {
    this._generatedId = Math.random().toString(36).substr(2, 9)
    let observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (!mutation.addedNodes) return
    
        let procurando = 'property_box_list_'+this._generatedId;
        let a = document.getElementById(procurando);
        let b = document.getElementById('property_box_0_'+this._generatedId).clientWidth;
        this._component_width = b;
        this.transform = -b;
        //let b = (document.querySelector('.property_box_list') as HTMLElement);
        if(a!=null){
          //console.log("existe !!!");
          //console.log(b);
          let value = (this._maximum_number_of_elements)*this._component_width;
          document.getElementById(procurando).style.width = value+'px';
          observer.disconnect()
        }
        else{
          console.log("n existe");
        }

        for (let i = 0; i < mutation.addedNodes.length; i++) {
          let node = mutation.addedNodes[i]
        }
      })
    })
    
    observer.observe(document.body, {
        childList: true
      , subtree: true
      , attributes: false
      , characterData: false
    })
    

    //observer.disconnect()
  }

  ngOnInit(): void {
    this._trippled_items = this._properties.slice(0,this._maximum_number_of_elements);
    this._trippled_items.push(this.getNext());
    this._trippled_items.unshift(this.getPrevious());
  }

  onMouseDown(event){
    event.preventDefault();
  }

  onPan(value) {
    if (value.additionalEvent == "panright") {
      this._velocity =0;
      let transition = (10 * value.velocityX);
      this.adjuster_velocity = 0;
      this.changePosition(transition);
    }
    if (value.additionalEvent == "panleft") {
      this._velocity =0;
      let transition = (10 * value.velocityX);
      this.adjuster_velocity = 0;
      this.changePosition(transition);
    }
  }

  getAdjusterStyle() {
    return { 'transition': this.adjuster_velocity+'s', 'transform': 'translate(' + this.adjuster_transform + 'px, ' + 0 + 'px)'}
  }

  getListStyle() {
    return { 'transition': this._list_velocity+'s', 'transform': 'translate(' + this.list_transform + 'px, ' + 0 + 'px)'}
  }

  getStyle(value1) {
    return { 'transition': this._velocity+'s', 'transform': 'translate(' + this.transform + 'px, ' + 0 + 'px)'}
  }

  onClickedArrowLeft() {
    this.adjuster_velocity = 0.5;
    this.changePosition(this._component_width);
  }

  onClickedArrowRight() {
    this.adjuster_velocity = 0.5;
    this.changePosition(-this._component_width);
  }
  changePosition(value) {
    if(this._non_repeater){
      this._non_repeater = false;
      this._remaining_right+=value;
      if(value>0){
        //esquerda
        //this._list_velocity = 0.5;
        this.adjuster_transform += value;
        if(this._remaining_right>=this._component_width){
          this._trippled_items.unshift(this.getPrevious());
          this._trippled_items.pop();
          this.list_transform -= this._component_width;
          this._remaining_right -=this._component_width;
        }
        //this.transform += value;
      }else{
        //direita
        if(this._remaining_right<=-this._component_width){
          this._trippled_items.push(this.getNext());
          this.list_transform +=this._component_width;
          this._trippled_items.shift();
          this._remaining_right+=this._component_width;
        }
        this.transform += value;
      }
      this._non_repeater = true;
    }
  }

  getNext(){
    let ultimo_tripples = this._trippled_items.slice().pop();
    let ultimo_properties = this._properties.slice().pop();
    let indexUltimo = this._properties.indexOf(ultimo_tripples);
    let proximo;
    if(ultimo_tripples == ultimo_properties){
      proximo = this._properties[0];
    }else{
      proximo = this._properties[indexUltimo+1];
    }
    return proximo; 
  }

  getPrevious(){
    let primeiro_tripples = this._trippled_items[0];
    let primeiro_properties = this._properties[0];
    let indexPrimeiro = this._properties.indexOf(primeiro_tripples);
    let previous;
    if(primeiro_tripples == primeiro_properties){
      previous = this._properties.slice().pop();
    }else{
      previous = this._properties[indexPrimeiro-1];
    }
    return previous; 
  }

  numeroMaximoElementosTotal(): number {
    let toReturn: number = 0;
    let actualElementWidth = this._screen_inner_width;
    toReturn = Math.ceil(actualElementWidth / this._component_width);
    if (toReturn > this._maximum_number_of_elements) {
      toReturn = this._maximum_number_of_elements
    }
    return toReturn;
  }

}

export interface IListfy_options {
  array: any[];
  items_left_margin?: number;
  items_right_margin?: number;
  listType?: EnumListType;
  timed?: boolean;
  interval?: number;
  maximum_number_of_elements?:number;
}

export enum EnumListType {
  Arrow,
  Floater,
  Panner,
  Other,
}

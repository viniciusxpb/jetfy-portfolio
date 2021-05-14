import { Directive, ElementRef, EventEmitter, Input, NgZone, OnDestroy, OnInit, Output } from '@angular/core';
import * as Hammer from 'hammerjs';

interface HammerManager {
  new(element: HTMLElement | SVGElement, options?: any): HammerManager;
  destroy(): void;
  add(recognizer: Recognizer): void;
  on(eventName: string, callback: Function): void;
}

interface Recognizer {
  new(options?: any): Recognizer;
  recognizeWith(otherRecognizer: Recognizer | string): Recognizer;
}

@Directive({
  selector: '[customTapGesture]',
})
export class customTapGesture implements OnInit, OnDestroy {
  constructor(private elementRef: ElementRef, private zone: NgZone) { }

  /**
   * Return the hammerjs library if it's available
   */
  private get hammerLib() {
    return typeof window !== 'undefined' ? (window as any).Hammer : undefined;
  }

  private manager?: HammerManager;

  /**
   * Event fired when the element is tapped
   */
  @Output() cTap = new EventEmitter<any>();

  @Output() cPan = new EventEmitter<any>();

  /**
   * Binds HammerJS Instances
   */
  ngOnInit() {
    if (this.hammerLib) {
      this.manager = this.bindHammer();
    }
  }

  /**
   * Unbinds HammerJS Instances
   */
  ngOnDestroy() {
    if (this.manager) {
      this.manager.destroy();
    }
  }

  protected bindHammer(): HammerManager {
    return this.zone.run(_ => {
      const hostElement = this.elementRef.nativeElement;
      const manager = new this.hammerLib.Manager(hostElement, {
        touchAction: 'panleft',
      });

      manager.add(new this.hammerLib.Tap({}));
      manager.add(new this.hammerLib.Pan({}));

      manager.on('swipeleft swiperight panleft panright tap press', (ev: any) => {
        this.cTap.emit(ev);
        ev.preventDefault();
      });

      manager.on('panleft panright', (ev: any) => {
        this.cPan.emit(ev);
        ev.preventDefault();
      });

      return manager;
    });
  }
}
import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
 selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

 constructor(private elRef: ElementRef, private renderer: Renderer2) {
 }

 ngOnInit(): void {
  const element = this.elRef.nativeElement;
  this.renderer.setStyle(element, 'background-color', 'blue');
 }

}

import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appCard]'
})
export class CardHoverDirective {
    constructor(private elem: ElementRef,
        private renderer: Renderer2) {
        const el = this.elem.nativeElement;
        // el.style.background = 'gray';
        renderer.setStyle(el, 'background', 'gray');
    }
}

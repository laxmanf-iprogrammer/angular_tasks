import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";



@Directive({
    selector: '[appBasicHighlight]'
})
export class HighLightDirecative {
    constructor(
        private elementref: ElementRef,
        private renderer: Renderer2
    ) {

    }

    ngOnInit() {
        this.renderer.setStyle( this.elementref.nativeElement, 'background-color', 'blue',)
       
    }

    @HostListener('mouseenter') mouseover(eventdata:any) {
        this.renderer.setStyle(this.elementref.nativeElement, 'background-color', 'red')
    }
}
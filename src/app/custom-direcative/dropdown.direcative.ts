import { Directive, HostBinding,} from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirecative  {

  @HostBinding('class.open') isOpen = false;

//   HostListener():any toggleOpen() {
//       this.isOpen = !this.isOpen;
//   }

}
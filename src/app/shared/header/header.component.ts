import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrl: 'header.component.css',
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    imports:[CommonModule],
    standalone:true
})

export class HeaderComponent {
  
  @ViewChild('navLinks') navLinks?: ElementRef;
  public showNavLink: boolean = false;
    
  constructor(private renderer: Renderer2) {}

  showNavLinks(){
    
    const myNav = this.navLinks?.nativeElement;
    if(this.showNavLink){
      this.renderer.setStyle(myNav,'display','none');
      this.showNavLink = false;
    }else{
      this.renderer.setStyle(myNav,'display','flex');
      this.showNavLink = true;

    }
    
  }
}
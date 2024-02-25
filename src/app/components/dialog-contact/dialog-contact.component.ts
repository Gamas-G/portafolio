import { Component } from '@angular/core';
import { InfoContactService } from '../../services/info-contact.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'dialog-contact',
    templateUrl: 'dialog-contact.component.html',
    styleUrl: 'dialog-contact.component.css',
    imports:[CommonModule],
    standalone:true
})

export class DialogContatComponent{
  constructor( public infoContacto: InfoContactService) {
    
    infoContacto.cargarInfoContact();
  
  }
}
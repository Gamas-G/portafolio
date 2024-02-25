import { Component } from '@angular/core';
import { InfoContactService } from '../../services/info-contact.service';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
    selector: 'dialog-contact',
    templateUrl: 'dialog-contact.component.html',
    styleUrl: 'dialog-contact.component.css',
    imports:[CommonModule, MatDialogModule],
    standalone:true
})

export class DialogContatComponent{
  constructor( public infoContacto: InfoContactService) {
    
    infoContacto.cargarInfoContact();
  
  }
}
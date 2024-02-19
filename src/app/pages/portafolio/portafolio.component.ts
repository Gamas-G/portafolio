import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { InfoPaginaService } from '../../services/info-pagina.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { IHabilidades } from '../../interfaces/proyecto-interface';

@Component({
    selector: 'app-portafolio',
    templateUrl: 'portafolio.component.html',
    styleUrl: 'portafolio.component.css',
    imports: [CommonModule, RouterModule], 
    schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
    standalone:true
})

export class PortafolioComponent{

  constructor( public infoPaginaService: InfoPaginaService, 
               public dialog: MatDialog) {}

  mostrarDialog(habilidades:IHabilidades){
    console.log(habilidades);
    
    this.dialog.open( DialogComponent, { 
      width : "80%",
      data: { 
        name: habilidades.name,
        lenguajes: habilidades.lenguajes,
        frameworks: habilidades.frameworks
      } 
    });
    
  }

}
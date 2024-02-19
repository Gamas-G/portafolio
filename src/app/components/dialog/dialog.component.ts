import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Framework, IHabilidades } from '../../interfaces/proyecto-interface';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'dialog',
    templateUrl: 'dialog.component.html',
    styleUrl: 'dialog.component.css',
    imports: [MatDialogModule, MatDialogActions, CommonModule],
    standalone: true
})

export class DialogComponent implements OnInit {

  public hablidades!: IHabilidades;
  public frameworks: Framework[] = [];


  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IHabilidades,) {
      this.hablidades = data

      this.frameworks = data.frameworks;

      console.log(this.data);
      console.log(this.hablidades);
      
      

    }

  ngOnInit() { }
}
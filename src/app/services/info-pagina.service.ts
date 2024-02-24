import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHabilidades, IProyecto } from '../interfaces/proyecto-interface';

@Injectable({providedIn: 'root'})
export class InfoPaginaService {
  
  
  public speetch: string = "";
  public cv: string = "";
  public proyectos:IProyecto[]= [];
  public habilidades: IHabilidades[] = [];
  public me: string = "";
    
  constructor( private http: HttpClient ) { 
    this.cargarPortafolio(); 
  }

  cargarPortafolio(){
    
    return new Promise( (resolve, reject) => {
    // this.http.get('assets/data/data.json')
    this.http.get('https://my-portafolio-1c347-default-rtdb.firebaseio.com/portafolio.json')
      .subscribe( (resp: any) => {
        console.log(resp);
        this.speetch   = resp.data.speetch;
        this.cv        = resp.data.cv;
        this.proyectos = resp.data.proyectos;
        this.habilidades = resp.data.habilidades;

        this.me = resp.data.me;
      });

    });
  }

    
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHabilidades, IProyecto } from '../interfaces/proyecto-interface';

@Injectable({providedIn: 'root'})
export class InfoPaginaService {
  
  
  public speetch: string = "";
  public cv: string = "";
  public me: string = "";
  public linkedin: string = "";
  public github: string = "";

  public whatsAppRedirect: string = "";
  public gmailRedirect: string    = "";
  public outlookRedirect: string  = "";
  
  public proyectos:IProyecto[]= [];
  public habilidades: IHabilidades[] = [];

    
  constructor( private http: HttpClient ) { 
    this.cargarPortafolio(); 
  }

  cargarPortafolio(){
    
    return new Promise( (resolve, reject) => {
    // this.http.get('assets/data/data.json')
    this.http.get('https://my-portafolio-1c347-default-rtdb.firebaseio.com/portafolio.json')
      .subscribe( (resp: any) => {
        
        console.log(resp);
        
        this.me       = resp.data.me;
        this.cv       = resp.data.cv;
        this.github   = resp.data.github;
        this.speetch  = resp.data.speetch;
        this.linkedin = resp.data.linkedin;

        this.gmailRedirect = resp.data.gmail;
        this.whatsAppRedirect = resp.data.whatsapp;
        this.outlookRedirect = resp.data.email;
        
        this.proyectos   = resp.data.proyectos;
        this.habilidades = resp.data.habilidades;

      });

    });
  }

    
}
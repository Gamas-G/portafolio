import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Contact, Correo, CorreoElement, RedSocial, Telefono } from '../interfaces/info-contact';

@Injectable({providedIn: 'root'})
export class InfoContactService {

  public tituloCorreo: string = "";
  public correos:      CorreoElement[] = [];

  public redesSociales: RedSocial[] = [];
  public telefonos:    Telefono[]  = [];


  constructor(private http: HttpClient) { }
    
  cargarInfoContact(): Promise<Contact>{
    return new Promise( (resolve, reject) => {
      // this.http.get('assets/data/data.json')
      this.http.get('https://my-portafolio-1c347-default-rtdb.firebaseio.com/contacto.json')
        .subscribe( (resp: any) => {

          this.telefonos = resp.telefono;

          this.redesSociales = resp.RedSocial;


          this.tituloCorreo = resp.Correo.name
          this.correos = resp.Correo.correos;
  
        });
  
      });
  }
}
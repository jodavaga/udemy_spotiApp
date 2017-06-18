import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  urlBusqueda: string = "https://api.spotify.com/v1/search";

  artistas:any[] = [];


  constructor( private http: Http ) { 

    console.log("servicio listo");

  }

  getArtistas( termino:string ){

    let headers = new Headers();
    headers.append ('authorization', 'Bearer BQCA5A0ihybOTo4821SRJZrXA72RFXZNx2JERxsh2cQ0NdECnqWRJ0tqEh0F9O7Xe8vkmrpq36RUyam3W2cMwA');

    let query: string = `?q=${ termino }&type=artist`;
    let url: string = this.urlBusqueda + query; 

    console.log("la URL: "+ url );

    return this.http.get( url, { headers } )
      .map( respuesta => {
        console.log(respuesta.json());
        this.artistas = respuesta.json().artists.items;
      });
      

  }

}

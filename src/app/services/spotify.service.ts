import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class SpotifyService {

  urlBusqueda: string = "https://api.spotify.com/v1/search?";

  artistas:any[] = [];


  constructor( private http: Http ) { 

    console.log("servicio listo");

  }

  getArtistas( termino:string ){

    let query: string = `q=${ termino }&type=artist`;
    let url: string = this.urlBusqueda + query; 

    console.log(url);

  }

}

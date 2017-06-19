import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  urlBusqueda: string = "https://api.spotify.com/v1/search";
  urlArtista: string = "https://api.spotify.com/v1/artists";

  artistas:any[] = [];
  artista:any;


  constructor( private http: Http ) { 

    console.log("servicio listo");

  }


  //obtengo arreglo de artistas buscados por el input de buscar
  getArtistas( termino:string ){

    //Parametros nuevos de API spotify para autorizacion
    let headers = new Headers();
    headers.append ('authorization', 'Bearer BQC7PWonHV1alidVUcEeI5OmljYpvx0EWlrnQeyz8NC6ZRSdOpW49vGqGh9zcdInarftxbaUSiybpFqa8IgLGA');

    let query: string = `?q=${ termino }&type=artist`;
    let url: string = this.urlBusqueda + query; 

    return this.http.get( url, { headers } )
      .map( respuesta => {
        this.artistas = respuesta.json().artists.items;
        //console.log(this.artistas);
        
        return this.artistas;
      });
      

  }

  //obtengo artista al cual le dio click
  getArtista( id:string ){

    //Parametros nuevos de API spotify para autorizacion
    let headers = new Headers();
    headers.append ('authorization', 'Bearer BQC7PWonHV1alidVUcEeI5OmljYpvx0EWlrnQeyz8NC6ZRSdOpW49vGqGh9zcdInarftxbaUSiybpFqa8IgLGA');

    let query: string = `/${ id }`;
    let url: string = this.urlArtista + query; 

    return this.http.get( url, { headers } )
      .map( respuesta => {
        //console.log(respuesta.json());
        
        return respuesta.json();
      });
  }

}

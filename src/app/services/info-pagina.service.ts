import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  team: any[] = [];

  constructor(private http: HttpClient) {
    this.loadInfo();
    this.loadTeam();
  }

  private loadInfo()
  {
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    });
  }

  private loadTeam()
  {
    this.http.get('https://anuglar-html.firebaseio.com/equipo.json')
    .subscribe( (resp: any) => {
      this.cargada = true;
      this.team = resp;
      console.log(resp);
    });
  }

}

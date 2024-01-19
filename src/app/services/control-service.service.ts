import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovimentListModel } from '../model/moviment-list';
import { Daterange } from '../model/daterange';

@Injectable({
  providedIn: 'root'
})
export class ControlServiceService {

  LC_API:string = "http://localhost:8080/costcontrol";

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<any[]>(`${this.LC_API}/all`);
  }

  getAllCostsByDirection(direction:string){
    return this.http.get(`${this.LC_API}/all/${direction}`);
  }

  postCost(item:MovimentListModel){
    return this.http.post(`${this.LC_API}/register`,item);
  }

  getAllByDate(date:Daterange){
    return this.http.post<any[]>(`${this.LC_API}/bydate`,date);
  }

}

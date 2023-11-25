import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlServiceService {

  LC_API:string = "http://localhost:8080/costcontrol/";

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${this.LC_API}/all`);
  }

  getAllCostsByDirection(direction:string){
    return this.http.get(`${this.LC_API}/all/${direction}`);
  }

}

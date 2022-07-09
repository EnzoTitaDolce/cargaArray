import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  
  constructor(private http:HttpClient) { }

emitirDatos():Observable <any>
{

 return this.http.get('../assets/datos2.json');

}

}

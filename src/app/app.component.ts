import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonService } from './json.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cargaArray';
  datos:any;

constructor(private servicio:JsonService){

}
  ngOnInit(): void {
    this.servicio.emitirDatos().subscribe(data=>{
        this.datos=data;
      })
  
    

  }
  
  

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
@Component({
  selector: 'app-curso-actual-screen',
  templateUrl: './curso-actual-screen.component.html',
  styleUrls: ['./curso-actual-screen.component.scss']
})
export class CursoActualScreenComponent implements OnInit {

  id_curso:number=99;
  nombre_curso:string='';
  constructor(private ruta:ActivatedRoute){
    this.ruta.params.subscribe(datos =>{
      this.nombre_curso=datos["nombre"];
      this.id_curso=datos["id"];
    });
  }

  ngOnInit(): void {
    
  }

}

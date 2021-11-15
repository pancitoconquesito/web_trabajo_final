import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import { Curso } from 'src/app/models/curso.model';
import { ModuloCurso } from 'src/app/models/modeloCurso.model';
import { CursoService } from 'src/app/services/curso/curso.service';
@Component({
  selector: 'app-curso-actual-screen',
  templateUrl: './curso-actual-screen.component.html',
  styleUrls: ['./curso-actual-screen.component.scss']
})
export class CursoActualScreenComponent implements OnInit {

  aaa:string="https://www.youtube.com/embed/sxgIKQEZIQI";
  id_curso:number=99;
  cursoActual:Curso={id:0,img:'', titulo:'',cantModulos:0,duracion:0,tematica:'',descripcionGeneral:'',modulos:[]};
  moduloActual:ModuloCurso={img:'', numeroModulo:0, titulo:'',descripcion:'',duracion:0,urlVideo:''};
  listaModulo:Array<ModuloCurso>=[];
  constructor(private ruta:ActivatedRoute, private s_curso:CursoService){
    this.ruta.params.subscribe(datos =>{
      this.id_curso=datos["idCurso"];
    });
  }

  ngOnInit(): void {
    this.cursoActual=this.s_curso.getCurso(this.id_curso);
    this.moduloActual=this.cursoActual.modulos[0];
    this.listaModulo=this.cursoActual.modulos;


  }
  cambiarModulo(nModulo:number){
    this.moduloActual=this.listaModulo[nModulo-1];
  }
  getUrl(){
    //return this.sanitizer.bypassSecuritytrustResourceurl
    // return "https://www.youtube.com/embed/sxgIKQEZIQI";
  }
}

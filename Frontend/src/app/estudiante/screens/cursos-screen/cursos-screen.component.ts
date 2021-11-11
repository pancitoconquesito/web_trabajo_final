import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/models/curso.model';
import { FiltroCurso } from 'src/app/models/filtroCurso.model';
import { CursoService } from 'src/app/services/curso/curso.service';
@Component({
  selector: 'app-cursos-screen',
  templateUrl: './cursos-screen.component.html',
  styleUrls: ['./cursos-screen.component.scss']
})
export class CursosScreenComponent implements OnInit {

  lista_cursos:Array<Curso>=[];
  filtro_cantModulos:number=0;
  filtro:FiltroCurso;

  textFiltro:string='...';
  temaProg:any;temaDiseno:any;temaHumanidades:any;
  mod2:any;mod3:any;mod4:any;modMas:any;
  constructor(private servicioCurso:CursoService) {
    this.filtro={
      duracion2:false,
      duracion3:false,
      duracion4:false,
      duracionMas:false,
      temaProg:false,
      temaDiseno:false,
      temaHumanidades:false
      }
   }

  ngOnInit(): void {
    this.lista_cursos=this.servicioCurso.getAllCursos();
    this.mod2=document.getElementById("dos_modulos");
    this.mod3=document.getElementById("tres_modulos");
    this.mod4=document.getElementById("cuatro_modulos");
    this.modMas=document.getElementById("mas_modulos");
    this.temaProg=document.getElementById("programacion");
    this.temaDiseno=document.getElementById("diseno");
    this.temaHumanidades=document.getElementById("humanidades");
  }
  updatefiltroTema(){
    this.filtro.temaProg=this.temaProg.checked;
    this.filtro.temaDiseno=this.temaDiseno.checked;
    this.filtro.temaHumanidades=this.temaHumanidades.checked;
  }
  changeDuracionModulo(){
    this.filtro.duracion2=this.mod2.checked;
    this.filtro.duracion3=this.mod3.checked;
    this.filtro.duracion4=this.mod4.checked;
    this.filtro.duracionMas=this.modMas.checked;
  }
}



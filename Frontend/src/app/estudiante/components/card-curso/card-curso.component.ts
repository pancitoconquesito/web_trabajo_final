import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso.model';
import { EstudianteService } from 'src/app/services/estudiante/estudiante.service';

@Component({
  selector: 'app-card-curso',
  templateUrl: './card-curso.component.html',
  styleUrls: ['./card-curso.component.scss']
})
export class CardCursoComponent implements OnInit {

  idEstudiante:number=-1;
  isEnColeccion:boolean=false;
  @Input() curso:Curso;
  constructor(private router:Router, private rutaparam:ActivatedRoute, private s_estudiante:EstudianteService){
    this.curso={
      id:0,img:'',titulo:'',cantModulos:0,duracion:0,tematica:'',descripcionGeneral:'',modulos:[]};
    let pivoteidEstudiante:string | null=this.s_estudiante.getLS_loginEstudiante();
      this.idEstudiante=Number(pivoteidEstudiante);
  }
  ngOnInit(): void {
  }
  verCurso(){
    if(this.s_estudiante.isLoginEstudiante()){
      if(this.s_estudiante.isCursoEnColeccion(Number(this.idEstudiante), this.curso.id)) 
        this.router.navigate(['/inicioEstudiante/cursos/'+this.curso.titulo+'/'+this.curso.id]);
      else
      this.router.navigate(['/inicioEstudiante/cursos/preview/'+this.curso.titulo+'/'+this.curso.id]);
    }else this.router.navigate(['/visitante']);
  }
}

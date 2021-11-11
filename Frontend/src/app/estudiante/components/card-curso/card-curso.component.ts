import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso.model';
import { ModuloCurso } from 'src/app/models/modeloCurso.model';

@Component({
  selector: 'app-card-curso',
  templateUrl: './card-curso.component.html',
  styleUrls: ['./card-curso.component.scss']
})
export class CardCursoComponent implements OnInit {

  @Input() curso:Curso;
  constructor(private router:Router){
    this.curso={
      id:0,img:'',titulo:'',cantModulos:0,
      duracion:0,tematica:'',modulos:[]};
  }

  ngOnInit(): void {
  }
  test_a(nombreCurso:string, idCurso:number){
    this.router.navigate(['/inicioEstudiante/cursos/'+nombreCurso+'/'+idCurso]);
  }
}

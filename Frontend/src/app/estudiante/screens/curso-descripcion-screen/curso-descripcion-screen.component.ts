import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkWithHref } from '@angular/router';
import { Curso } from 'src/app/models/curso.model';
import { ModuloCurso } from 'src/app/models/modeloCurso.model';
import { CursoService } from 'src/app/services/curso/curso.service';
import { EstudianteService } from 'src/app/services/estudiante/estudiante.service';

@Component({
  selector: 'app-curso-descripcion-screen',
  templateUrl: './curso-descripcion-screen.component.html',
  styleUrls: ['./curso-descripcion-screen.component.scss']
})
export class CursoDescripcionScreenComponent implements OnInit {

  idCurso:number=-1;
  listaModulos:Array<ModuloCurso>=[];
  cursoActual:Curso={id:0,img:'',titulo:'',cantModulos:0,duracion:0,tematica:'',descripcionGeneral:'',modulos:[]};
  constructor(private rutaSig:Router, private route:ActivatedRoute, private servicioCurso:CursoService, private s_estudiante:EstudianteService) {
    this.route.params.subscribe(param=>{
      this.idCurso=param['idCurso'];
    });
  }

  ngOnInit(): void {
    this.cursoActual=this.servicioCurso.getCurso(this.idCurso);
    this.listaModulos=this.cursoActual.modulos;
  }
  

  
  addCurso(){
    if(this.s_estudiante.isLoginEstudiante()){
      let pivoteIdEstudiante:any=this.s_estudiante.getLS_loginEstudiante();
      let idEstudiante=Number(pivoteIdEstudiante);
      this.s_estudiante.addCurso(idEstudiante, this.cursoActual.id);
      //redirigo a ruta para ver el curso full
      this.rutaSig.navigate(['/inicioEstudiante/cursos/'+this.cursoActual.titulo+'/'+this.cursoActual.id]);

    }//else login
  }

}

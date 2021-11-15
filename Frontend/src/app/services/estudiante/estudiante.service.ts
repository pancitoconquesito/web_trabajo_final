import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { listaCursos, listaEstudiante } from 'src/app/FAKE_BD';
import { Curso } from 'src/app/models/curso.model';
import { CursoInscrito, Estudiante } from 'src/app/models/estudiante.model';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  constructor() { }
  isCursoEnColeccion(idEstudiante:number, idCurso:number):boolean{
    let resultado:boolean=false;
    let usuarioActual:any=listaEstudiante.find(obj=>obj._id==idEstudiante);
    if(usuarioActual==undefined){
      console.log("ahhh");
    }
    let listaCursosInscritos:Array<CursoInscrito>=usuarioActual.cursosInscritos;
    listaCursosInscritos.forEach((valor)=>{
      if(valor.idCurso==idCurso)  resultado=true;
    });
    return resultado;
  }
  public isLoginEstudiante():boolean{
    let retorno:boolean=false;
    let idEstudianteS=localStorage.getItem('idEstudiante');
    if(idEstudianteS!=null){
      let idEstudiante=Number(idEstudianteS);
      idEstudiante=Number(idEstudiante);
      listaEstudiante.forEach((valor) => {
        if(valor._id==idEstudiante)
          retorno=true;
      });
    }
    return retorno;
  }
  public setLS_loginEstudiante(idLS:number){
		localStorage.setItem("idEstudiante", String(idLS));
	}
	public getLS_loginEstudiante(){
		return localStorage.getItem('idEstudiante');
	}
  public addCurso(idEstudiante:number, idCurso:number){
    listaEstudiante.forEach((valor)=>{
      if(valor._id==idEstudiante){
        let newModulo:CursoInscrito={
          idCurso:idCurso
        }
        valor.cursosInscritos.push(newModulo);
      }
    });
  }
  public getInfoEstudiante(idEstudiante:number){
    let estudianteRetono:Estudiante={_id:0,nombres:'',apellidos:'',email:'',contrasena:'',pais:'',ciudad:'',telefono:0,cc:'',cursosInscritos:[]};
    listaEstudiante.forEach((valor)=>{
      if(valor._id==idEstudiante){
        estudianteRetono=valor;
      }
    });
    return estudianteRetono;
  }

  public UpdateEstudiante(idEstudiante:number, nombres:string, apellidos:string, contrasena:string, cc_reg:string, telefono:number){
    listaEstudiante.forEach((valor)=>{
      if(valor._id==idEstudiante){
        valor.nombres=nombres;
        valor.apellidos=apellidos;
        valor.contrasena=contrasena;
        valor.cc=cc_reg;
        valor.telefono=telefono;
      }
    });
  }


}

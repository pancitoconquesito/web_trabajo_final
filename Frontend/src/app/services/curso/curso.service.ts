import { Injectable } from '@angular/core';
import { listaCursos, listaCursosID } from 'src/app/FAKE_BD';
import { Curso } from 'src/app/models/curso.model';
import { CursosID } from 'src/app/models/cursosID.models';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() { }
  private getAllListaIDCursos():Array<CursosID>{
    return listaCursosID;
  }
  public getAllCursos():Array<Curso>{
    let _listaIDCursos_real=this.getAllListaIDCursos();

    let listaCursos_real:Array<Curso>=listaCursos;
    let listaCursosRetorno:Array<Curso>=[];

    _listaIDCursos_real.forEach((valor, índice) => {
      //obtengo cada igual find, con id iguales
      let cursoEncontrado:any=listaCursos_real.find(obj=>obj.id==valor.idCurso);
      listaCursosRetorno.push(cursoEncontrado);
    });
    return listaCursosRetorno;
  }
}

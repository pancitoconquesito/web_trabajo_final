import { Pipe, PipeTransform } from '@angular/core';
import { Curso } from 'src/app/models/curso.model';
import { FiltroCurso } from 'src/app/models/filtroCurso.model';

@Pipe({
  name: 'filtroCursos'
})
export class FiltroCursosPipe implements PipeTransform {

  transform(listaCursos:Array<Curso>, mod2:boolean, mod3:boolean, mod4:boolean, modMas:boolean, temaProg:boolean, temaDiseno:boolean, temaHumanidades:boolean): Array<Curso> {


    let listaCursosRetorno:Array<Curso>=listaCursos.slice();
    
    if(mod2)  listaCursosRetorno=listaCursosRetorno.filter( x => x.cantModulos== 2);
    // if(mod3)  listaCursosRetorno=listaCursosRetorno.filter( x => x.cantModulos== 3);
    // if(mod4)  listaCursosRetorno=listaCursosRetorno.filter( x => x.cantModulos== 4);
    // if(modMas)  listaCursosRetorno=listaCursosRetorno.filter( x => x.cantModulos> 4);
    // if(filtroParam.duracionMas)  
    return listaCursosRetorno;
  }

}

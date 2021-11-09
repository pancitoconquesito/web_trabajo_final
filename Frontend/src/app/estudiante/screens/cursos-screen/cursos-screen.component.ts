import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos-screen',
  templateUrl: './cursos-screen.component.html',
  styleUrls: ['./cursos-screen.component.scss']
})
export class CursosScreenComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  test_a(nombreCurso:string, idCurso:number){
    //console.log("card!!!");
    this.router.navigate(['/inicioEstudiante/cursos/'+nombreCurso+'/'+idCurso]);
  }
}

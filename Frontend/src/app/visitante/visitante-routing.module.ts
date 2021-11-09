import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EstudianteComponent} from '../estudiante/estudiante.component'
import { CursosScreenComponent } from '../estudiante/screens/cursos-screen/cursos-screen.component';
import { InicioScreensComponent } from '../estudiante/screens/inicio-screens/inicio-screens.component';
import { OfertasScreenComponent } from '../estudiante/screens/ofertas-screen/ofertas-screen.component';
import {VisitanteComponent} from '../visitante/visitante.component';
import{CertificadosScreenComponent}from '../estudiante/screens/certificados-screen/certificados-screen.component';

const routes: Routes = [
  {path:'', redirectTo:"/login", pathMatch:'full'},
  {path:'login', component:VisitanteComponent},
  {path:'inicioEstudiante', component:EstudianteComponent
    ,children:[
        {path:'', redirectTo:"inicio", pathMatch:'full'},
        {path:'inicio', component:InicioScreensComponent},
        {path:'certificados', component:CertificadosScreenComponent},
        {path:'cursos', component:CursosScreenComponent},
        {path:'ofertas', component:OfertasScreenComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitanteRoutingModule { }

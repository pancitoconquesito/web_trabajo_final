import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteRoutingModule } from './estudiante-routing.module';
import { EstudianteComponent } from './estudiante.component';
// import { InicioComponent } from './screens/inicio/inicio.component';

// import {InicioScreensComponent} from './screens/inicio-screens/inicio-screens.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { InicioScreensComponent } from './screens/inicio-screens/inicio-screens.component';
import { CursosScreenComponent } from './screens/cursos-screen/cursos-screen.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { OfertasScreenComponent } from './screens/ofertas-screen/ofertas-screen.component';
import { OfertaActualScreenComponent } from './screens/oferta-actual-screen/oferta-actual-screen.component';
import { CursoActualScreenComponent } from './screens/curso-actual-screen/curso-actual-screen.component';
import { CertificadosScreenComponent } from './screens/certificados-screen/certificados-screen.component';
import { CardOfertaComponent } from './components/card-oferta/card-oferta.component';


@NgModule({
  declarations: [
    EstudianteComponent,
    // InicioComponent,
    NavbarComponent,
    InicioScreensComponent,
    CursosScreenComponent,
    OfertasScreenComponent,
    OfertaActualScreenComponent,
    CursoActualScreenComponent,
    CertificadosScreenComponent,
    CardOfertaComponent
  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule,
    SharedModule
  ]
})
export class EstudianteModule { }

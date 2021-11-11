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
import { OfertasScreenComponent } from './screens/ofertas-screen/ofertas-screen.component';
import { OfertaActualScreenComponent } from './screens/oferta-actual-screen/oferta-actual-screen.component';
import { CursoActualScreenComponent } from './screens/curso-actual-screen/curso-actual-screen.component';
import { CertificadosScreenComponent } from './screens/certificados-screen/certificados-screen.component';
import { CardOfertaComponent } from './components/card-oferta/card-oferta.component';
import { CardCursoComponent } from './components/card-curso/card-curso.component';
import { CantModulosCursoPipe } from '../pipes/cantModulosCurso/cant-modulos-curso.pipe';
import { MinutosParseHrMinPipe } from '../pipes/minutosParseHrMin/minutos-parse-hr-min.pipe';
import { FormsModule } from '@angular/forms';
import { FiltroCursosPipe } from '../pipes/filtroCursos/filtro-cursos.pipe';


const COMPONENTES=[
    EstudianteComponent,
    NavbarComponent,
    InicioScreensComponent,
    CursosScreenComponent,
    OfertasScreenComponent,
    OfertaActualScreenComponent,
    CursoActualScreenComponent,
    CertificadosScreenComponent,
    CardOfertaComponent,
    CardCursoComponent
];

@NgModule({
  declarations: [
    
    ...COMPONENTES,
    CantModulosCursoPipe,
    MinutosParseHrMinPipe,
    FiltroCursosPipe
    
  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule,
    SharedModule,
    FormsModule
    
  ]
})
export class EstudianteModule { }

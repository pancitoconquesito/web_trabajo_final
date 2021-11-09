import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-estudiante',
  templateUrl: './reg-estudiante.component.html',
  styleUrls: ['./reg-estudiante.component.scss']
})
export class RegEstudianteComponent implements OnInit {

  formulario:FormGroup;
  test:string='nada';

  constructor(private fb:FormBuilder, private router:Router) {
    this.formulario=this.fb.group({
      nombres:['',[Validators.required]],
      apellidos:['',[Validators.required]],
      email:['',[Validators.email, Validators.required]],
      pais:['0',[]],
      contrasena:['',[Validators.required]],
      ciudad:['0',[]],
      cc_reg:['',],
      telefono:['',]
    });
   }

  ngOnInit(): void {
    
  }

  validar(){

    this.router.navigate(['/inicioEstudiante']);
  }

  funcionTest(){
    console.log("ahhh");
    this.test=this.formulario.get('telefono')?.value;
  }
}

import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() register_event=new EventEmitter();

  formulario:FormGroup;
  constructor(private fb:FormBuilder, private router:Router){ 
    this.formulario=this.fb.group({
      email:['',[Validators.email, Validators.required]],
      clave:['',[Validators.required]]
    });
  
  }

  ngOnInit(): void {
  }
  validar():void{
    console.log("holo");
    //si es estudiante
    this.router.navigate(['/inicioEstudiante']);
    //si es publicador
  }
  btn_registrar():void{
    this.register_event.emit("1");
    console.log("emito 1");
  }
}

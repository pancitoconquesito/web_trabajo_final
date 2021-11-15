import { Injectable } from '@angular/core';
import { listaEstudiante, listaEmpresas_ } from 'src/app/FAKE_BD';
import { CursoInscrito, Estudiante } from 'src/app/models/estudiante.model';

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	constructor() { }
	public isEmailDisponible(email:string):boolean{
		let checkMail:boolean=true;
		listaEmpresas_.forEach((valor)=>{
			if(valor.correo===email)checkMail=false;
		});
		listaEstudiante.forEach((valor)=>{
			if(valor.email===email)checkMail=false;
		});
		return checkMail;
	}
	private isEmailEstudiante(email:string):boolean{
		listaEstudiante.forEach((valor)=>{
			if(valor.email===email) return true;
			else return false;
		});
		return false;
	}
	public checkLoginEstudiante(email:string, clave :string):boolean{
		let respuesta:boolean=false;
		listaEstudiante.forEach((valor)=>{
			if(valor.email===email){
				if(valor.contrasena===clave){
					respuesta= true;
				} 
			}
		});
		return respuesta;
	}
	public getIdEstudiante(email:string):number{
		let idRetorno:number=0;
		listaEstudiante.forEach((valor)=>{
			if(valor.email===email)	idRetorno=valor._id;
		});
		return idRetorno;
	}


	public addEstudiante(nombres:string,apellidos:string,email:string,pais:string,contrasena:string,ciudad:string,cc_reg:string,telefono:number):number{
		let newId=listaEstudiante[listaEstudiante.length-1]._id+1;
		let newCursosInscritos:Array<CursoInscrito>=[];
		let newEstudiante:Estudiante={
			_id:newId,
			nombres:nombres,
			apellidos:apellidos,
			email:email,
			pais:pais,
			contrasena:contrasena,
			ciudad:ciudad,
			telefono:telefono,
			cc:cc_reg,
			cursosInscritos:newCursosInscritos
		}
		listaEstudiante.push(newEstudiante);
		console.log(ciudad);
		return newId;
	}
	
}

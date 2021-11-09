import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dv_CardOferta } from 'src/app/models/dv_card_oferta.model';
import { nub_OfertaEmpresa } from 'src/app/models/nub_oferta_empresa_model';

// servicios
import { OfertaService} from '../../../services/oferta/oferta.service';
@Component({
  selector: 'app-ofertas-screen',
  templateUrl: './ofertas-screen.component.html',
  styleUrls: ['./ofertas-screen.component.scss']
})
export class OfertasScreenComponent implements OnInit {

  //public servicio_Oferta:OfertaService;

  inicioListaOfertas:number;
  finalListaOfertas:number;

  listaNub_OfertasEmpresa:Array<nub_OfertaEmpresa>=[];
  lista_dv_cardOferta:Array<dv_CardOferta>=[];

  constructor(private router:Router, private servicio_Oferta:OfertaService){
    //this.servicio_Oferta=new OfertaService();
    this.inicioListaOfertas=0;
    this.finalListaOfertas=4;
  }
  ngOnInit(): void {
    this.listaNub_OfertasEmpresa = this.servicio_Oferta.getNubOfertaEmpresa(this.inicioListaOfertas,this.finalListaOfertas);
    this.lista_dv_cardOferta=this.servicio_Oferta.get_ARRAY_DvOferta_ARRAYnubOfertaEmpresa(this.listaNub_OfertasEmpresa);
    // console.log(this.lista_dv_cardOferta);
  }
  // a futuro se podrian pedir todos las ofertas y con un pipe filtrarlos, luego acortarlos con slice y agregar quizas apginacion, TODO, FIXME
  //
  //


  
}

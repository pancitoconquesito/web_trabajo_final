import {CuentaEmpresa} from './models/cuenta_empresa.model';
import {OfertaLaboral} from './models/oferta_laboral.model';
import {nub_OfertaEmpresa} from './models/nub_oferta_empresa_model';
import {dv_CardOferta} from './models/dv_card_oferta.model';
import {dv_OfertaActual} from './models/dv_oferta_actual.model';

// lista de cuenta listaEmpresas_, dentro de cada una hay una lista de sus publicaciones
export let listaEmpresas_:Array<CuentaEmpresa>=[
    {
        _id:1,
        nombreEmpresa:'coca-cola',
        correo:'rrhh@cocacola.com',
        password:'123',
        telefono:123456789,
        descripcionEmpresa:'descripcion empresa coca-cola',
        imgEmpresa:'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/62/621aa443ed231fe8b6a50a05e3a82b8ffcfe6b0c_full.jpg',
        ofertasPublicadas:[
            {
                _id:1,
                titulo:'programador coca-cola para x cosa',
                descripcion:'se necesitan.. con 999 años de experiencia... en todas las tecnologias existentes.',
                pais:'Chile',
                ciudad:'Santiago',
                fechaPublicacion: '01-01-2000',
                tipoJornada:'Tiempo completo',
                fk_idEmpresa:1
            },
            {
                _id:2,
                titulo:'analista coca-cola para x cosa',
                descripcion:'se necesitan.. con 999 años de experiencia... en todas las tecnologias existentes.',
                pais:'Chile',
                ciudad:'Osorno',
                fechaPublicacion:'01-01-2000',
                tipoJornada:'Tiempo parcial',
                fk_idEmpresa:1
            },
        ]
    },
    {
        _id:2,
        nombreEmpresa:'nintendo',
        correo:'rrhh@nintendo.com',
        password:'123',
        telefono:123456789,
        descripcionEmpresa:'descripcion empresa nintendo',
        imgEmpresa:'https://i.ytimg.com/vi/9m1rM148Qsw/hqdefault.jpg',
        ofertasPublicadas:[
            {
                _id:3,
                titulo:'programador nintendo para x cosa',
                descripcion:'se necesitan.. con 999 años de experiencia... en todas las tecnologias existentes.',
                pais:'Colombia',
                ciudad:'Cali',
                fechaPublicacion:'01-01-2000',
                tipoJornada:'Por horas',
                fk_idEmpresa:2
            },
            {
                _id:4,
                titulo:'analista para x cosa',
                descripcion:'se necesitan.. con 999 años de experiencia... en todas las tecnologias existentes.',
                pais:'Chile',
                ciudad:'Arica',
                fechaPublicacion:'01-01-2000',
                tipoJornada:'Tiempo parcial',
                fk_idEmpresa:2
            },
        ]
    },   
];

export let listaNub_:Array<nub_OfertaEmpresa>=[
    {
        _idNub:0,
        _idOferta:1,
        _idEmpresa:1
    },
    {
        _idNub:1,
        _idOferta:2,
        _idEmpresa:1
    },
    {
        _idNub:2,
        _idOferta:4,
        _idEmpresa:2
    },
    {
        _idNub:3,
        _idOferta:3,
        _idEmpresa:2
    },
];
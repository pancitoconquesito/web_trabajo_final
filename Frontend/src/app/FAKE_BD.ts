import {CuentaEmpresa} from './models/cuenta_empresa.model';
import {OfertaLaboral} from './models/oferta_laboral.model';
import {nub_OfertaEmpresa} from './models/nub_oferta_empresa_model';
import {dv_CardOferta} from './models/dv_card_oferta.model';
import {dv_OfertaActual} from './models/dv_oferta_actual.model';
import { Curso } from './models/curso.model';
import { CursosID } from './models/cursosID.models';
import { Estudiante } from './models/estudiante.model';
import { Ciudad } from './models/ciudad.model';

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
                fk_idEmpresa:1,
                correo_contacto_reclutar:'contacto.cocacola@gmail.com',
                telefono_contacto_laboral:123456789
            },
            {
                _id:2,
                titulo:'analista coca-cola para x cosa',
                descripcion:'se necesitan.. con 999 años de experiencia... en todas las tecnologias existentes.',
                pais:'Chile',
                ciudad:'Osorno',
                fechaPublicacion:'01-01-2000',
                tipoJornada:'Tiempo parcial',
                fk_idEmpresa:1,
                correo_contacto_reclutar:'contacto.cocacola@gmail.com',
                telefono_contacto_laboral:123456789
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
                fk_idEmpresa:2,
                correo_contacto_reclutar:'contacto.nintendo@gmail.com',
                telefono_contacto_laboral:123456789
            },
            {
                _id:4,
                titulo:'analista para x cosa',
                descripcion:'se necesitan.. con 999 años de experiencia... en todas las tecnologias existentes.',
                pais:'Chile',
                ciudad:'Arica',
                fechaPublicacion:'01-01-2000',
                tipoJornada:'Tiempo parcial',
                fk_idEmpresa:2,
                correo_contacto_reclutar:'contacto.nintendo@gmail.com',
                telefono_contacto_laboral:123456789
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





//////////             CURSOS           /////////////////////

export let listaCursos:Array<Curso>=[
    {
        id:0,
        img:"https://i.imgur.com/iI8htRg.jpg",
        titulo:'C++',
        cantModulos:3,
        duracion:150,//o time?,
        tematica:'Programación',
        descripcionGeneral:'descripcion general de este curso',
        modulos:[
            {
                img:"data:image/jpeg;base64,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",
                numeroModulo:1,
                titulo:'Hola mundo',
                descripcion:'descripcion del hola mundo',
                duracion:50,
                urlVideo:"https://www.youtube.com/embed/sxgIKQEZIQI"
            },
            {
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZT_qPLC3_A1mUsiXplLbRD5g2EHOPIfTTFToeuCJQay0aJr3Uue8UKzRPmc8JHZfuJOQ&usqp=CAU',
                numeroModulo:2,
                titulo:'memoria dinamica',
                descripcion:'descripcion de memoria dinamica',
                duracion:100,
                urlVideo:"https://www.youtube.com/embed/sxgIKQEZIQI"
            },
            {
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyXl8zqCvmSzvAMJz_JkYNx-ErobI3sOoeG_yfFFOyfyIdQUesQ7wVJhgkMUojK76F0Qk&usqp=CAU',
                numeroModulo:3,
                titulo:'arboles binarios',
                descripcion:'descripcion de arboles binarios',
                duracion:100,
                urlVideo:"https://www.youtube.com/embed/sxgIKQEZIQI"
            }
        ]
    },
    {
        id:1,
        img:"https://besthqwallpapers.com/Uploads/26-1-2018/38416/thumb2-french-mastiff-4k-puppy-pets-dogs.jpg",
        titulo:'Unity',
        cantModulos:3,
        duracion:200,//o time?,
        tematica:'Diseño',
        descripcionGeneral:'descripcion general de este curso',
        modulos:[
            {
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpiFXplxk8ydBavi4pAgkgEveB85w69F5DfEKzMWJ3dXykxLPHlXfOjBrsKxEXJ5vvb5I&usqp=CAU',
                numeroModulo:1,
                titulo:'gameobjet y componentes',
                descripcion:'descripcion gameobjet y componentes',
                duracion:50,
                urlVideo:"https://www.youtube.com/embed/sxgIKQEZIQI"
            },
            {
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZlXHOqm7CthfSCYm44Bqk-hLkOmbB74isd3UbMmxSRhPLf4RMzPDJhdzw3poN4W4uw4I&usqp=CAU',
                numeroModulo:2,
                titulo:'memoria, scenes y camaras',
                descripcion:'descripcion memoria, scenes y camaras',
                duracion:100,
                urlVideo:"https://www.youtube.com/embed/sxgIKQEZIQI"
            },
            {
                img:'https://i.imgur.com/DRqD0gI.jpg',
                numeroModulo:3,
                titulo:'scriptable objets y arquitectura',
                descripcion:'descripcion de scriptable objets y arquitectura',
                duracion:50,
                urlVideo:"https://www.youtube.com/embed/sxgIKQEZIQI"
            }
        ]
    }
];

export let listaCursosID:Array<CursosID>=[
    {idCurso:1},
    { idCurso:0}
];




//////////////  ESTUDIANTE //////////////////////////

export let listaEstudiante:Array<Estudiante>=[
    {
        _id:0,
        nombres:'juan pablo',
        apellidos:'soto perez',
        email:'juan@gmail.com',
        contrasena:'123',
        pais:'Chile',
        ciudad:'Santiago',
        telefono:12345679,
        cc:'11111111-k',
        cursosInscritos:[
            {idCurso:1},
            {idCurso:0}
        ]
    }
];


//////////  CIUDAD //////////////////
export let listaCiudadChile:Array<string>=['Valparaíso','Rancagua','Santiago','Osorno'];
export let listaCiudadColombia:Array<string>=['Bogotá','medellin','Cali','Barranquilla'];


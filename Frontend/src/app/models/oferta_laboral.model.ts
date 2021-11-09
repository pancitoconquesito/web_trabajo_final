export interface OfertaLaboral{
    _id:number,
    titulo:string;
    descripcion:string;
    pais:string;
    ciudad:string;
    fechaPublicacion:string;
    tipoJornada:string;// si hay tiempo promover a number, TODO
    fk_idEmpresa:number;
}
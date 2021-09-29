export interface ListaProducto {
    productos: Producto[];
}

export interface Producto {
    id: number;
    nombre: string;
    descrip_xs:string;
    descripcion: string;
    precio: number;
    stock: number;
    img:string;

}


export interface ListaProductosCarrito {
    carrito: ProductoCarrito[];
}

export interface ProductoCarrito {
    id: number;
    nombre: string;
    precio: number;
    cantidad: number;
    img:string;


}
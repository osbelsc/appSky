
export interface IProduct {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    images:      string;
    creationAt:  string;
    updatedAt:   string;
    category:    Category;
}

export interface Category {
    id:         number;
    name:       string;
    image:      string;
    creationAt: string;
    updatedAt:  string;
}
export interface CreateProducto extends Omit<IProduct, 'id' | 'category'|'creationAt'|'updatedAt'> {
  idCategory: string;
}
export interface UpdateProducto extends Partial<CreateProducto> { }

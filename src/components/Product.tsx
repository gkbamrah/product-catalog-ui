export interface Category {
  id: number;
  name: string;
}

export interface Tag {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  post_date: string;
  price: string;
  description: string;
  category: Category | null;
  tags: Tag[];
}
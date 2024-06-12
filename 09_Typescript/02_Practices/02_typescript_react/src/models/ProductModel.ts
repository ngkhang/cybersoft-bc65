export interface Category {
  id: string;
  category: string;
}

export interface RelatedProduct {
  id: number;
  name: string;
  alias: string;
  price: number;
  feature: boolean;
  description: string;
  shortDescription: string;
  image: string;
}

export interface ProductDetailModelType extends RelatedProduct {
  size: string[];
  quantity: number;
  categories: Category[];
  relatedProducts: RelatedProduct[];
}

export default interface ProductModelType extends ProductDetailModelType {
  deleted: boolean;
  imgLink: null;
}

// Definition of types for the project
type CollectionType = {
  _id: string;
  title: string;
  produts: number;
  image: string;
};

type ProductType = {
  _id: string;
  title: string;
  description: string;
  media: [string];
  category: string;
  collections: [string];
  tags: [string];
  price: number;
  cost: number;
  colors: [string];
  createAt: string;
  updatedAt: string;
};

type UserType = {
  ClerkId: string;
  wishlist: [string];
  orders: [string];
  createAt: string;
  updatedAt: string;
};

type OrderType = {
  shippingAddress: Object;
  _id: string;
  customerClerkId: string;
  products: [OrderItemType];
  shippingRate: string;
  totalAmount: number;
};

type OrderItemType = {
  product: ProductType;
  color: string;
  quantity: number;
  _id: string;
};

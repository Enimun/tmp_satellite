export interface ProductCardProps {
  title: string;
  origin: string;
  price: number;
  currency: "USD" | "EUR" | "RUB";
  imageUrl: string;
}
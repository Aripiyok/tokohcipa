export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
  imageUrl: string;
};

export const demoProducts: Product[] = [
  { id: "p1", name: "Tas Ransel Harian", category: "Fashion", price: 189000, stock: 12, description: "Tas praktis untuk aktivitas sehari-hari.", imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900" },
  { id: "p2", name: "Botol Minum Stainless", category: "Aksesoris", price: 89000, stock: 25, description: "Botol minum tahan lama untuk dibawa bepergian.", imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=900" },
  { id: "p3", name: "Jam Tangan Minimalis", category: "Aksesoris", price: 249000, stock: 8, description: "Desain minimalis untuk gaya sehari-hari.", imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900" },
  { id: "p4", name: "Sepatu Kasual", category: "Fashion", price: 329000, stock: 7, description: "Sepatu kasual yang nyaman digunakan.", imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900" }
];

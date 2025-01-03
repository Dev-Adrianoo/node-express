export type Product = {
  name: string;
  amountInStock: number;
  unitValue: number;
  barCode?: string;
};

const product1: Product = {
  name: "Pair Socks",
  amountInStock: 100,
  unitValue: 5,
  barCode: "pocotom",
};

const product2: Product = {
  name: "Shirt",
  amountInStock: 150,
  unitValue: 70,
};

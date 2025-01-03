import { Product }  from './produto';

const productAllOptional: Partial<Product> = {
  unitValue: 20
} 

const productAllRequired: Required<Product> = {
  name: "Shirt",
  amountInStock: 20,
  unitValue: 100,
  barCode: 'a0f8e26f-e41d-4769-a64f-4e52cee63a2c',
}

const ProductOmitStockAndBarCode: Omit<Product, "amountInStock" |"barCode"> = {
 name: "Bermuda", 
 unitValue: 20,
}

const productOnlyNameAndValue: Pick<Product, "name" |"unitValue"> = {
  name: "Bermuda", 
  unitValue: 20,
 }
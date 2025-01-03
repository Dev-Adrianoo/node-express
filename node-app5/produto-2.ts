// Manipulando jason

// import  products  from './produtos.json'
import  fs  from "node:fs"
import path from "node:path"

const productJson = JSON.stringify([
    {
      "name": "Pair Socks",
      "amountInStock": 100,
      "unitValue": 5
    },
    
    {
      "amountInStock": 150,
      "name": "Shirt",
      "unitValue": 70
    }
], null, 2)

const fileOutPath = path.join(__dirname, 'generated-products.json')

const products = JSON.parse(productJson)

console.log(productJson)
//products.forEach(products => console.log(products))
fs.writeFileSync(fileOutPath, productJson)
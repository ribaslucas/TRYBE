// para inicializar o banco de dados 

use sample

// para inserir um documento dentro do banco de dados

db.products.insertOne({
  productName: "caixa",
  price: 20
})

// para inserir vários documentos no banco de dados

db.products.insertMany( [
    { "productName": "Lapis", "stock": 10, "price": 20,"status":"A"},
    { "productName": "Tesoura", "price": 5, "status": "B" },
    { "productName": "Borracha", "price": 15, "status": "A" },
])
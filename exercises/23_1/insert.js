// para inicializar o banco de dados 
use sample;

// para inserir vários documentos no banco de dados

db.products.insertMany([
  { "productName": "Lapis", "stock": 10, "price": 20, "status": "A" },
  { "productName": "Tesoura", "price": 5, "status": "B" },
  { "productName": "Borracha", "price": 15, "status": "A" },
]);

// procurando um documento na coleção

db.products.findOne(
  {"productName": "Tesoura"}
)

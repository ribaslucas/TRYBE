// Retorne apenas os campos name e birth do documento com _id igual a 8.

db.bios.find({ _id: 8 }, { name: 1, birth: true }).pretty();
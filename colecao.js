let map = new map()
map.set("nome", "Lucas")
map.set("idade", 19)
map.set("altura", 1.84)

console.log(map.get("nome"))
console.log(map.has(19))

console.log(map.size)

//remover um elemento
map.delete("idade");

map.forEach((valor,chave))=>{
    console.log(${chave}:${valor})
};
//remover todos os elementos
map.clear()
console.log(map.size)

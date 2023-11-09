let reciboString = 'nome-do-produto1/valor33.5=cupom5;nome-do-produto2/valor4.99=cupom0;nome-do-produto3/valor10=cupom0;'

const recibo = reciboString.split(';')
recibo.pop()

const listaDaVenda = []

for (let produto of recibo) {
    produto = produto.replace('/', ',').replace('=', ',').replace('valor', '').replace('cupom', '')
    const newProduto = produto.split(',')
    listaDaVenda.push({ produto: newProduto[0], valor: Number(newProduto[1]), cupom: Number(newProduto[2]), quantidade: Math.floor(Math.random() * 5) })
}
console.log(listaDaVenda)

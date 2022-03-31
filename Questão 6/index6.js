
let productCode = 100;
let quantity = 4;
let productPrice = 1.70;
let totalValue = productPrice * quantity;
let TotalValue = totalValue.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

switch(productCode){
  case 100:
   console.log(`
    <strong>
    Código do produto: ${productCode}<br>
    Quantidade: ${quantity}<br>
    Valor total: ${TotalValue}
    </strong>
    `)
  break
  case 101:
   console.log(`
    <strong>
    Código do produto: ${productCode}<br>
    Quantidade: ${quantity}<br>
    Valor total: ${TotalValue}
    </strong>
    `)
  break
  case 102:
   console.log(`
     <strong>
     Código do produto: ${productCode}<br>
     Quantidade: ${quantity}<br>
     Valor total: ${TotalValue}
     </strong>
      `)
  break
  case 103:
   console.log(`
     <strong>
     Código do produto: ${productCode}<br>
     Quantidade: ${quantity}<br>
     Valor total: ${TotalValue}
     </strong>
      `)
  break
  case 104:
   console.log(`
     <strong>
     Código do produto: ${productCode}<br>
     Quantidade: ${quantity}<br>
     Valor total: ${TotalValue}
     </strong>
      `)
  break
  case 105:
   console.log(`
     <strong>
     Código do produto: ${productCode}<br>
     Quantidade: ${quantity}<br>
     Valor total: ${TotalValue}
     </strong>
      `)
  break
  default: console.log("<strong>Digite o código de um produto</strong>");
}

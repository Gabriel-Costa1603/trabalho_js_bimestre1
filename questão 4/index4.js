

let productName = "Arroz";
let unitPrice = 3.00;
let quantityPurchased = 4;
let total = quantityPurchased * unitPrice;
let Total = total.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

//desconto
if(quantityPurchased <= 5){
  let discount = total * 0.02;
  let totalPrice = total - discount;
  let TotalPrice = totalPrice.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});
  
  console.log(`
  <strong>
  O cliente receberá um desconto de 2% pelo ${productName}.<br>
  valor da compra: ${Total}<br>
  total a pagar(com desconto): ${TotalPrice}
  </strong>
  `)
  
}else if(quantityPurchased > 5 && quantityPurchased <= 10){
  let discount = total * 0.03;
  let totalPrice = total - discount;
  let TotalPrice = totalPrice.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});
  
  console.log(`
  <strong>
  O cliente receberá um desconto de 3% pelo ${productName}.<br>
  valor da compra: ${Total}<br>
  total a pagar(com desconto): ${TotalPrice}
  </strong>
  `)
  
}else if(quantityPurchased > 10){
  let discount = total * 0.05;
  let totalPrice = total - discount;
  let TotalPrice = totalPrice.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});
  
  console.log(`
  <strong>
  O cliente receberá um desconto de 5% pelo ${productName}.<br>
  valor da compra: ${Total}<br>
  total a pagar(com desconto): ${TotalPrice}
  </strong>
  `)
  
}
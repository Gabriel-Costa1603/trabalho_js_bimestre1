let empregadoID= 00036
let nascimento= 1980
let anoAtual= 2022
let Datainicial= 2000
let idade= anoAtual - nascimento
let tempodetrabalho= anoAtual - Datainicial
if(idade>= 65 & tempodetrabalho >=30)
{
  document.write("--Informações do empregado--")
  document.write("<br>Código do empregado: " + empregadoID)
  document.write("<br>idade do empregado: " + idade)
  document.write("<br>O empregado pode se aposentar")
}
else if(idade < 65 & tempodetrabalho < 30){
  document.write("--Informações do empregado--")
  document.write("<br>Código do empregado: " + empregadoID)
  document.write("<br>idade do empregado: " + idade)
  document.write("<br>O empregado não pode se aposentar" )
}

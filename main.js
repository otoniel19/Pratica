var nome = String(prompt("Ola Qual Seu Nome?"))

if(nome.length === 0) {
  alert("Ola Anônimo(a)")
} else {
  alert(`Ola ${nome}`)
}

var dia_atual = new Date().getDate()
var mes_atual = new Date().getMonth() +1

  const dia_dos_pais = (dia) => {
    if(dia === 8 && mes_atual === 8) {
      document.write("Feliz Dia Dos Pais")
    } else {
      document.write("Não E Dia Dos Pais")
    }
  }
    dia_dos_pais(dia_atual)
    
    
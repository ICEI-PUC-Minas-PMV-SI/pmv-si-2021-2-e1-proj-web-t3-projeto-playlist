/*function inscricao(){
  var nomeUsuario = document.getElementById("nome");
  var emailUsuario = document.getElementById("email");
  
  var dados = JSON.parse(localStorage.getItem("dadosNewsletter"));

  if(dados == null){
    localStorage.setItem("dadosNewsletter", "[]");
    dados = [];
  }

  var auxRegister = {
    usuario: nomeUsuario.value,
    contato: emailUsuario.value
  }

  dados.push(auxRegister);
  localStorage.setItem("dadosNewsletter", JSON.stringify(dados));

}*/

  let nome = document.getElementById("nome");
  let validnome = false;

  let email = document.getElementById("email");
  let validemail = false;

  nome.addEventListener("keyup", () => {
  if(nome.value.length == 0){
    validnome = false;
  }
  else { 
    validnome = true;
  }
  });

  email.addEventListener("keyup", () => {
  if(email.value.length == 0){
    validemail = false;
  }
  else { 
    validemail = true
  }
  });
  
  
function inscricao() {
  validnome = false;
  validemail = false;
  
  if(nome.value.length > 0){
    validnome = true;
  }

  if(email.value.length > 0){
    validemail = true
  }
  

  if(validnome && validemail ){ 
    let listaNewsletter = JSON.parse(localStorage.getItem("listaNewsletter") || "[]");
   
    listaNewsletter.push(
      { 
          usuario: nome.value,
          contato: email.value
      }
    )
      
    localStorage.setItem("listaNewsletter", JSON.stringify(listaNewsletter));
    nome.value = '';
    email.value = '';
    alert( "Cadastrado com sucesso!")
   
   } else { 
      alert("Preencha os campos corretamente!")
   }

}
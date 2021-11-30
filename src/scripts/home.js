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
          email: email.value
      }
    )
      
    localStorage.setItem("listaNewsletter", JSON.stringify(listaNewsletter));
    alert( "Inscrito(a) com sucesso! Obrigado por nos acompanhar, a partir de agora receberá notícias exclusivas.")
   
   } else { 
      alert("Campo inválido!")
   }

}
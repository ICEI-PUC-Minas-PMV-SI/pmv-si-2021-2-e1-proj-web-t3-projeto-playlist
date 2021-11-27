
let nome = document.getElementById('nome');
let labelNome = document.getElementById('labelNome');
let validNome = false;

let registro = document.getElementById("registro");
let validRegistro = false

let motivacao = document.getElementById("motivacao");
let validMotivacao = false

let email = document.getElementById("email");
let labelEmail = document.getElementById('labelEmail');
let validEmail = false;

let password = document.getElementById("password");
let labelPassword = document.getElementById('labelPassword');
let validPassword = false

let confirmacao = document.getElementById("confirmacao");
let labelConfirmacao = document.getElementById('labelConfirmacao');
let validConfirmacao = false

let msgErro = document.getElementById("msgErro");

let msgSucesso = document.getElementById("msgSucesso");





nome.addEventListener("keyup", () => {
       if(nome.value.length <= 2)  {
        labelNome.setAttribute("style", "color: yellow");
		nome.setAttribute("style", "border-color: red;")
        labelNome.innerHTML = "Nome: *Mínimo 3 caracteres.";
        validNome = false;

    } else{
		labelNome.setAttribute("style", "color:white");
		labelNome.innerHTML = "Nome:"
		nome.setAttribute("style", "border-color: rgb(52, 7, 104)");
        validNome = true
        } 
       
    });

email.addEventListener("keyup", () => {
		if(email.value.length == 0)  {
		 labelEmail.setAttribute("style", "color: yellow");
		 email.setAttribute("style", "border-color: red");
		 labelEmail.innerHTML = "E-mail: *Campo obrigatório.";
		 validEmail = false;
 
	 } else{
		labelEmail.setAttribute("style", "color:white");
		labelEmail.innerHTML = "E-mail:"
		email.setAttribute("style", "border-color: rgb(52, 7, 104)");
		validEmail = true
		} 
	  });
	
 
password.addEventListener("keyup", () => {
       if(password.value.length <= 5)  {
        labelPassword.setAttribute("style", "color:yellow");
		password.setAttribute("style", "border-color: red;");
        labelPassword.innerHTML = "Definir senha: *6 caracteres.";
        validPassword = false

    } else{
		labelPassword.setAttribute("style", "color:white");
		labelPassword.innerHTML = "Definir Senha:";
		password.setAttribute("style", "border-color: rgb(52, 7, 104)");
        validPassword = true
        } 
     });
	 
confirmacao.addEventListener("keyup", () => {
       if(password.value != confirmacao.value)  {
       labelConfirmacao.setAttribute("style", "color:yellow");
	   confirmacao.setAttribute("style", "border-color: red;");
       labelConfirmacao.innerHTML = "Confirmar senha: *Senhas diferentes.";
       validConfirmacao = false;

    } else{
	   labelConfirmacao.setAttribute("style", "color:white");
	   labelConfirmacao.innerHTML = "Confirmar senha:";
	   confirmacao.setAttribute("style", "border-color: rgb(52, 7, 104)");
       validConfirmacao = true;
        } 
     });



function cadastrar(){
	
		if(nome.value.length <= 2)  {
		 labelNome.setAttribute("style", "color: yellow");
		 nome.setAttribute("style", "border-color: red;")
		 labelNome.innerHTML = "Nome: *Mínimo 3 caracteres.";
		 validNome = false;
 
	 } else{
		 labelNome.setAttribute("style", "color:white");
		 labelNome.innerHTML = "Nome:"
		 nome.setAttribute("style", "border-color: rgb(52, 7, 104)");
		 validNome = true
		 } 
		
	 
 
		 if(email.value.length == 0)  {
		  labelEmail.setAttribute("style", "color: yellow");
		  email.setAttribute("style", "border-color: red");
		  labelEmail.innerHTML = "E-mail: *Campo obrigatório.";
		  validEmail = false;
  
	  } else{
		 labelEmail.setAttribute("style", "color:white");
		 labelEmail.innerHTML = "E-mail:"
		 email.setAttribute("style", "border-color: rgb(52, 7, 104)");
		 validEmail = true
		 } 
	
	   
		if(password.value.length <= 5)  {
		 labelPassword.setAttribute("style", "color:yellow");
		 password.setAttribute("style", "border-color: red;");
		 labelPassword.innerHTML = "Definir senha: *6 caracteres.";
		 validPassword = false
 
	 } else{
		 labelPassword.setAttribute("style", "color:white");
		 labelPassword.innerHTML = "Definir Senha:";
		 password.setAttribute("style", "border-color: rgb(52, 7, 104)");
		 validPassword = true
		 } 
	  
	  
		if(password.value != confirmacao.value)  {
		labelConfirmacao.setAttribute("style", "color:yellow");
		confirmacao.setAttribute("style", "border-color: red;");
		labelConfirmacao.innerHTML = "Confirmar senha: *Senhas diferentes.";
		validConfirmacao = false;
 
	 } else{
		labelConfirmacao.setAttribute("style", "color:white");
		labelConfirmacao.innerHTML = "Confirmar senha:";
		confirmacao.setAttribute("style", "border-color: rgb(52, 7, 104)");
		validConfirmacao = true;
		 } 
 
	  if(validNome && validEmail && validPassword && validConfirmacao){
		let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]")
	  
	  	listaUser.push( 
		{  	 	 	
			nomeCad: nome.value,
			profissaoCad: profissao.value,
	    	registroCad: registro.value,
			motivacaoCad: motivacao.value,
			emailCad: email.value,
			passwordCad: password.value,
			confirmacaoCad: confirmacao.value,
		
	  	}
		)

	   
		localStorage.setItem("listaUser", JSON.stringify(listaUser));
        
			msgSucesso.setAttribute("style", "display: block");
			msgSucesso.innerHTML = "<strong>Cadastrando...</strong>";
			msgErro.setAttribute("style", "display: none");
			msgErro.innerHTML = "";
		
		setTimeout(()=>{
			 window.location.href ="../pages/login.html"
		}, 3000);
	   	    
		 
      }  else { 
		    msgErro.setAttribute("style", "display: block");
			msgErro.innerHTML = "<strong>Preencha todos os campos corretamente antes de se cadastrar.</strong>";
			msgSucesso.innerHTML = "";
			msgSucesso.setAttribute("style", "display: none");
    } 
}

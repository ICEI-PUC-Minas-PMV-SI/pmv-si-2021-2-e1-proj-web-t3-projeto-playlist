function entrar(){
    let usuario = document.querySelector('#email')
    let userLabel = document.querySelector('#emailLabel')
    
    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')
    
    let msgError = document.querySelector('#msgError')
    let listaUser = []
    
    let userValid = {
      user: '',
      senha: ''
    }
  
    
    
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    if(senha.value.length <=5){
      msgError.setAttribute('style', 'color: yellow', 'display: block')
      msgError.innerHTML = 'Preenchimento obrigatório!'
      userValid = {
      }
    }
    
    listaUser.forEach((item) => {
      if(usuario.value == item.emailCad && senha.value == item.passwordCad){
         
        userValid = {
           user: item.emailCad,
           senha: item.passwordCad
         }
      }
    })
     
    if(usuario.value == userValid.user && senha.value == userValid.senha){
      window.location.href ="../pages/perfil.html"
      
      let mathRandom = Math.random().toString(6).substr(2)
      let token = mathRandom
      
      localStorage.setItem('token', token)
      localStorage.setItem('userLogado', JSON.stringify(userValid))
    } else {
      userLabel.setAttribute('style', 'color: red')
      usuario.setAttribute('style', 'border-color: red')
      senhaLabel.setAttribute('style', 'color: red')
      senha.setAttribute('style', 'border-color: red')
      msgError.setAttribute('style', 'color: yellow', 'display: block')
      msgError.innerHTML = 'Usuário ou senha incorretos'
      usuario.focus()
    }
    
  }
  
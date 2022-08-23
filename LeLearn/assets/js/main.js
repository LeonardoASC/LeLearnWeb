function login(){
   
   var loginUsuario = document.getElementById('loginID').value;
    var senhaUsuario = document.getElementById('senhaID').value;
    
    if(loginUsuario == "admin" && senhaUsuario == "admin"){
        
        alert('é o bixo');
        window.location.href = "home.html";
    }else{
        alert('nao é o bixo');
        window.location.href = "index.html";
    }
    window.location.href = "home.html";
    
}
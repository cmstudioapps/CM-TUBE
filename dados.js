var nome = localStorage.getItem("nome")
var acessando = window.location.href;
var data = new Date()
var mes = data.toLocaleString('pt-BR', { month: 'long' });
console.log(mes);
var hora = data.getHours()+":"+data.getMinutes()
var dia = data.getDate() +"/"+mes+"/"
+data.getFullYear()+" Hora: "+hora
var bruxa = document.getElementById("bruxa")
console.log(dia)
var id = localStorage.getItem("id")

if (!nome || nome == "abcdef"|| nome.includes("bunda") || nome.includes("rjfjfkjrgjr")|| nome.length < 4) {
  
  nome = prompt("Digite seu Nome (Não digite letras de maneira aleatória ou palavras inadequadas)")
  nome.toLowerCase()
  localStorage.setItem("nome",nome)
}
if (!id) {
  
  id = Math.floor(Math.random() * 90000) + 10000;
  localStorage.setItem("id",id)
  console.log(id);
  
}


const dados = () => {
  
  if (nome && id && acessando) {
  if (id !== "10937") {
    
  
  fetch('https://api.sheetmonkey.io/form/oNuYY9SZV3FyUy2cyxeHcD', {
    
    method: 'post',
    headers: {
      
      'Accept': 'application/json',
      'Content-type': 'application/json'
      
    },
    body: JSON.stringify({
      
      Usuário: nome,
      aceessando: acessando,
      Data: dia,
      ID: id
      
      
    })
    
    
  })
  
  }
  }
  
}

dados()

window.addEventListener("DOMContentLoaded", function() {



    (function(d, w, c) {
        w.ChatraID = 'LQnrWiXFxKmhKMTta';
        var s = d.createElement('script');
        w[c] = w[c] || function() {
            (w[c].q = w[c].q || []).push(arguments);
        };
        s.async = true;
        s.src = 'https://call.chatra.io/chatra.js';
        if (d.head) d.head.appendChild(s);
    })(document, window, 'Chatra');


    window.ChatraGroupID = 'TtkwJBL5XttBEYvZb';



})


bruxa.addEventListener("click",function() {
  
  setTimeout(function() {
    
  
  
  fetch('https://api.sheetmonkey.io/form/oNuYY9SZV3FyUy2cyxeHcD', {
    
    method: 'post',
    headers: {
      
      'Accept': 'application/json',
      'Content-type': 'application/json'
      
    },
    body: JSON.stringify({
      
      Usuário: nome,
      Data: dia,
      Adicionou: series,
  BruxaRespondeu: resultado,
      ID: id
      
      
    })
   
  })
  
  
  console.log(resultado, series)
  
  },2000)
  
})


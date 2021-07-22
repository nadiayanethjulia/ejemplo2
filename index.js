var xhr=new XMLHttpRequest();
xhr.open('GET', 'index.php');
xhr.onload= function(){
  if(xhr.status === 200){
    var json=JSON.parse(xhr.ResponseText);
    var template =``;
    json.map(function(data){
      template +=`
      <h2>${data.id}</h2>
       <strong>${data.nombre}</strong>
       <p>${data.edad}</p>
       <p>${data.sexo}</p><br>
      `;
      return template;
    });
  
    document.getElementById('lista').innerHTML=template;
  }else{
    
    
 
    console.log("Existe un error de tipo:"+xhr.status);
  }
}
xhr.send();

var xhr=new XMLHttpRequest();
xhr.open('GET', 'index.php');
xhr.onload= function(){
  if(xhr.status==200){
    var json=JSON.parse(xhr.ResponseText);
    var template=´´;
    json.map(function(){
      tempalte+´
      <h2>${data.id}</h2>
       <strong>${data.nombre}</strong>
       <p>${data.edad}</p>
       <h2>${data.sexo}</p><br>
      ´;
      return template;
    });
    console.log(template);
    document.getElementById('lista').innerHTML=template;
  }else{
    
    
  }else{
    console.log("Existe un error de tipo:"+xhr.status);
  }
}

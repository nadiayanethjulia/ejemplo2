var xhr=new XMLHttpRequest();
xhr.open('GET', 'index.php');
xhr.onload= function(){
  if(xhr.status==200){
    var json=JSON.parse(xhr.ResponseText);
    var template=´´;
    json.map(function(){
      tempalte+´
      <h2>${json.nombre}</h2>
      ´
    });
    
  }else{
    console.log("Existe un error de tipo:"+xhr.status);
  }
}

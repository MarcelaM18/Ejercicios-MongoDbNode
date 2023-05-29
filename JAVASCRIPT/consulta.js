
    function listarDatos(){
      let mensaje = '';
      mensaje = '<thead>'+
       '<tr> <th> Municipio </th>'+
      '<th> Razon social </th>'+
      '</tr>'+
      '</thead>';
      fetch('http://www.datos.gov.co/resource/pi36-fdpk.json')
      .then(response => response.json())
      //then(data => console.log(data))
  
      .then(data => {
          for(let i of data){
              console.log(i);
              mensaje = mensaje + 
              '<tr><td>'+i.nombre_municipio+'</td>'+
              '<td>'+i.raz_n_social_organizaci_n+
              '</td><tr>';
          }
          
          document.getElementById('resultado').innerHTML = mensaje;
      })
  }
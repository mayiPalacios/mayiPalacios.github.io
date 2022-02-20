
// declaraciones

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const inputid = document.getElementById("inpId");
const inputName = document.getElementById("inpNm");
const stcheck = document.getElementById("checkSta");
const assig = document.querySelectorAll("#myDropdown a");
const tBody = document.querySelector(".body-table");
const inputDelete = document.getElementById("inp-delete");
const inputSearch = document.getElementById("inp-search");
const assig2 = document.querySelectorAll("#myDropdown2 a");
const assig3 = document.querySelectorAll("#myDropdown3 a");
// dropdown de assigneed  tBody.innerHTML = '';

function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
    
}

function myFunction2(){
    document.getElementById("myDropdown2").classList.toggle("show");
    
}

function myFunction3(){
    document.getElementById("myDropdown3").classList.toggle("show");
    
}


window.onload = (valor)=>{
    valor="onload"
            llenartabla(valor);
}



// validar inputs


const validacionesForm = (e) =>{

switch(e.target.name){

case "namep":
    if(e.target.value.length >100){
        e.target.value = e.target.value.slice(0,100);
    }
break;

case "id" : 
if(e.target.value.length >100){
    e.target.value = e.target.value.slice(0,100);
}
break;


}



}


inputs.forEach((input)=>{
      
    input.addEventListener('keyup',validacionesForm);
    input.addEventListener('blur',validacionesForm);//comprobar cuando den click afuera del input
   
})
// obtener valor de dropdown

var assigValue;

const obtAssig= (e)=>{

    switch(e.target.id){
        case "frank":   assigValue = "frank";  break;
        case "john" : assigValue="john"; break;
        case "alice" : assigValue = "alice"; break;
        case "mary": assigValue = "mary"; break;
    }
 
 
 
 }




assig.forEach((a)=>{

 a.addEventListener('click',obtAssig);

})



/*      obtener fecha                         */
function fecha(){

let date = new Date();
let day = date.getDate() ;
let month =  date.getMonth() + 1;
let year = date.getFullYear();
let hora = date.getHours();
let minuto = date.getMinutes();

let uDates = day + "-" + month + "-" + year+"-"+hora+"-"+minuto;



return uDates;




}



document.getElementById('saveReg').addEventListener("click",function(){
    
   var permiso = 0;
   var estado;
   const date = fecha();
    if(inputid.value==""){
      document.querySelector('#grupo_id .alert_input_id').classList.add('formulario_input_activo');
    
    }else{
        document.querySelector('#grupo_id .alert_input_id').classList.remove('formulario_input_activo');
        permiso +=1;
    }
    if(inputName.value==""){
        document.querySelector('#grupo_name .alert_input_id').classList.add('formulario_input_activo');
      
      }else{
          document.querySelector('#grupo_name .alert_input_id').classList.remove('formulario_input_activo');
        permiso+=1;
      }
     
      if(stcheck.checked){
          estado = "Done";
      }else{
          estado = "Pending";
      }
      
         if(permiso==2){
           
              const usuario = {
                     Id: inputid.value,
                     Name:inputName.value,
                     State: estado,
                     Assignee: assigValue ,
                     Cdate: date  
              }
              document.querySelector('#grupo_id .alert_input').classList.remove('formulario_input_activo');
              const usuarioString = JSON.stringify(usuario);
                      if(usuario.Id in localStorage){
                                    console.log("ya existe")
                                    document.querySelector('#grupo_id .alert_input').classList.add('formulario_input_activo');
                      }
                      else{
                        const tBody = document.querySelector(".body-table");
                        localStorage.setItem(usuario.Id,usuarioString);
                       
                        var fila = document.createElement('tr'),
                        id = document.createElement('td'),
                        nombre = document.createElement('td'),
                       estado = document.createElement('td'),
                        assign = document.createElement('td'),
                        cdate = document.createElement('td');
                        fila.classList.add("table-tr");
                        id.appendChild(document.createTextNode(usuario.Id));
                        nombre.appendChild(document.createTextNode(usuario.Name));
                        estado.appendChild(document.createTextNode(usuario.State));
                        assign.appendChild(document.createTextNode(usuario.Assignee));
                        cdate.appendChild(document.createTextNode(usuario.Cdate));

                        fila.appendChild(id);
                        fila.appendChild(nombre);
                        fila.appendChild(estado);
                        fila.appendChild(assign);
                        fila.appendChild(cdate);
                        tBody.appendChild(fila);
                       
                     
                                
                      }
              //
           

         }
       
          
   
    
    })

 
// Llenamos la tabla con lo guardado en localstorage


function llenartabla(comprobar,userL){
                       
    switch(comprobar){
       
        case "onload":
            
            for(var i=0; i<localStorage.length;i++){

                var clave = localStorage.key(i);
                const usuarioT = JSON.parse(localStorage.getItem(clave));
                var fila = document.createElement('tr'),
                 id = document.createElement('td'),
                 nombre = document.createElement('td'),
                estado = document.createElement('td'),
                 assign = document.createElement('td'),
                 cdate = document.createElement('td');
                 fila.classList.add("table-tr");
               
               id.appendChild(document.createTextNode(usuarioT.Id));
               nombre.appendChild(document.createTextNode(usuarioT.Name));
               estado.appendChild(document.createTextNode(usuarioT.State));
               assign.appendChild(document.createTextNode(usuarioT.Assignee));
               cdate.appendChild(document.createTextNode(usuarioT.Cdate));
        
        
               fila.appendChild(id);
               fila.appendChild(nombre);
               fila.appendChild(estado);
               fila.appendChild(assign);
               fila.appendChild(cdate);
               tBody.appendChild(fila); 
               
        }
        
        break;

        case "search":
           
            var fila = document.createElement('tr'),
            id = document.createElement('td'),
            nombre = document.createElement('td'),
           estado = document.createElement('td'),
            assign = document.createElement('td'),
            cdate = document.createElement('td');
       
        fila.classList.add("table-tr");
        id.appendChild(document.createTextNode(userL.Id));
        nombre.appendChild(document.createTextNode(userL.Name));
        estado.appendChild(document.createTextNode(userL.State));
        assign.appendChild(document.createTextNode(userL.Assignee));
        cdate.appendChild(document.createTextNode(userL.Cdate));
 
 
        fila.appendChild(id);
        fila.appendChild(nombre);
        fila.appendChild(estado);
        fila.appendChild(assign);
        fila.appendChild(cdate);
        tBody.appendChild(fila);
        window.reload();
       
        
        
        
        break;

        case "statu": 
        
        var fila = document.createElement('tr'),
        id = document.createElement('td'),
        nombre = document.createElement('td'),
       estado = document.createElement('td'),
        assign = document.createElement('td'),
        cdate = document.createElement('td');
   
    fila.classList.add("table-tr");
        id.appendChild(document.createTextNode(userL.Id));
        nombre.appendChild(document.createTextNode(userL.Name));
        estado.appendChild(document.createTextNode(userL.State));
        assign.appendChild(document.createTextNode(userL.Assignee));
        cdate.appendChild(document.createTextNode(userL.Cdate));


    fila.appendChild(id);
    fila.appendChild(nombre);
    fila.appendChild(estado);
    fila.appendChild(assign);
    fila.appendChild(cdate);
    tBody.appendChild(fila);
   
  
        
        
        
        
        break;

        case "date": 
        
        
        
        
        
        
        break;
          





    }
      
      
    




         }






//inputs de tabla



//borrar usuario
document.getElementById('btn-deleteU').addEventListener("click",function(){

   
    if(inputDelete.value in localStorage){
        localStorage.removeItem(inputDelete.value);
        document.querySelector('#grupo-delete .alert_input').classList.remove('formulario_input_activo');
        location.reload();
    } else{
        document.querySelector('#grupo-delete .alert_input').classList.add('formulario_input_activo');
    }
     

})

//buscar usuario

document.getElementById('btn-searchU').addEventListener("click", function(e){
  
 




        if(inputSearch.value  in localStorage){
            for(var i=0;i<localStorage.length;i++){
                itemts = document.querySelector(".table-tr")
                document.querySelector(".body-table").removeChild(itemts);
            }
            
                document.querySelector('#grupo-search .alert_input').classList.remove('formulario_input_activo');
            const userSearch = JSON.parse(localStorage.getItem(inputSearch.value));
                 llenartabla("search",userSearch);               
             
        }else{
            document.querySelector('#grupo-search .alert_input').classList.add('formulario_input_activo');
        }

})

// status
const obtAssig2= (e)=>{

   
       

        switch(e.target.id){
            case "done":   
          
            for(var j=0;j<localStorage.length;j++){
                const bTr = document.querySelector('.table-tr');   
                document.querySelector('.body-table').removeChild(bTr); 
            }   
          
            for(var i=0;i<localStorage.length;i++){
                const llave = localStorage.key(i);
                const uState = JSON.parse(localStorage.getItem(llave));
               
            
                if(uState.State == "Done" ){
                  
                    llenartabla("statu",uState);
                         
                       
                }
        
        }
        
            
            
            break;

            case "pending" : 
         

            for(var j=0;j<localStorage.length;j++){
                const bTr = document.querySelector('.table-tr');   
                document.querySelector('.body-table').removeChild(bTr); 
            }   
           
            for(var i=0;i<localStorage.length;i++){
                const llave = localStorage.key(i);
                const uState = JSON.parse(localStorage.getItem(llave));
                
                if(uState.State == "Pending" ){
                      
                      llenartabla("statu",uState);
                       
                }
            
            }

            
            


             break;
        
        
        
        
        
        
      
    }
 
   
 
 }






assig2.forEach((e)=>{
   
    e.addEventListener('click',obtAssig2);
   
})

// date


const obtAssig3= (e)=>{

   
       

    switch(e.target.id){
        case "recent":   
        
         for(var j=0;j<localStorage.length;j++){
            const bTr = document.querySelector('.table-tr');   
            document.querySelector('.body-table').removeChild(bTr); 
        }   
        
        for(var i=localStorage.length-1;i>=0;i--){
            const llave = localStorage.key(i);
            const userS = JSON.parse(localStorage.getItem(llave));
            llenartabla("statu",userS);               
           
    }
    
      
        
        break;

        case "late" : 
        for(var j=0;j<localStorage.length;j++){
            const bTr = document.querySelector('.table-tr');   
            document.querySelector('.body-table').removeChild(bTr); 
        } 

       llenartabla("onload");

        
        


         break;
    
  
}



}


assig3.forEach((e)=>{

e.addEventListener('click',obtAssig3);

})





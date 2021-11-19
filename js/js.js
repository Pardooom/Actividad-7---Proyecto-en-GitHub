$(document).ready(function(){
    console.log("hola");
    
    $('#columna1').mouseover(function(){

        $(this).css("background", "rgb(170, 170, 162)").css("color","black");
    
    })
    
    $('#columna3').mouseover(function(){
    
        $(this).css("background", "rgb(170, 170, 162)").css("color","black");
    
    })
    
    
    $('#columna1').mouseout(function(){
    
        $(this).css("background", "white").css("color","Black");
    
    })
    
    $('#columna3').mouseout(function(){
    
        $(this).css("background", "white").css("color","Black");
    
    })
    
})
function mensajeformulario(){
    alert("PRONTO NOS COMUNICAREMOS CONTIGO");
}



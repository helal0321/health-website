let landing_images=document.querySelectorAll(".landing img")
let current_index=0;
let Header_icon=document.querySelector(".header .nav i")
let links=document.querySelector(".header .nav ul")





window.onclick=function(e){
 if(e.target!==links && e.target.parentElement!==links &&e.target!==Header_icon){
     links.classList.remove("active")
 }
}

Header_icon.onclick=function(){
    links.classList.toggle("active")
}
window.onload=function(){


    window.setInterval(function(){
      for(let i=0;i<landing_images.length;i++){
          landing_images[i].classList.remove("active")
      }
    
        if(current_index===landing_images.length-1){
            current_index=-1;
        }
        
        current_index++;
        landing_images[current_index].classList.add("active")
    
    },60000)
}




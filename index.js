
const panels=document.querySelectorAll(".panel");
panels.forEach(panel => {
    panel.addEventListener("click",()=>{
        removeActive()
        panel.classList.add("active");
        
    
    })
    
    })
function removeActive(){
    panels.forEach(panel=>{
        panel.classList.remove("active")
    })

}
const button=document.getElementById("toggle button");
button.addEventListener("click",()=>{
    const bdy=document.querySelector("body")
    if(bdy.classList.contains("dark-mode")){
        bdy.classList.remove("dark-mode")
        button.textContent="Dark"
        button.style.backgroundColor="black"
        button.style.color="white"

    
    }
    else{
        bdy.classList.add("dark-mode")
        button.textContent="Light"
        button.style.backgroundColor="white"
        button.style.color="blue"
    
       
    }

})

   
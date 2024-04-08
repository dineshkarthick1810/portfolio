document.addEventListener("DOMContentLoaded",()=>{
  alert("WELCOME TO MY PORTFOLIO")

})

    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  






const Hide=document.getElementById("hide");
const Formore=document.getElementById("formore");
Formore.addEventListener("click",(e)=>{
  Hide.style.display="flex";
  e.preventDefault();

})

const about=document.getElementById("about");
const More=document.getElementById("more");

More.addEventListener("click",(e)=>{
  about.style.display="flex";
  e.preventDefault();


});















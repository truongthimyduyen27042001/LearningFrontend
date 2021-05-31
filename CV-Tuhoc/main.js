const navbar=document.querySelector('.navbar')

// thuwjc hien active navbar
const changeActiveNav=()=>{
    console.log(window.scrollY)
}

window.addEventListener('scroll',()=>{
    if(window.scrollY>0){
        navbar.classList.add('active')
    }
    else{
        navbar.classList.remove('active')
    }
})
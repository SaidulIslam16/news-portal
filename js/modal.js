
const mainModal = document.getElementById('defaultModal');
const loadModal = ()=>{
    
    mainModal.classList.remove('hidden')
}

document.getElementById('btn-close').addEventListener('click', function(){
    mainModal.classList.add('hidden')
})
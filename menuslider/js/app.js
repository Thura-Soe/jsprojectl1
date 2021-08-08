// UI 
const togglebtn= document.getElementById('toggle');
const openbtn = document.getElementById('open');

const modal = document.getElementById('modal')
const closebtn = document.getElementById('close');

togglebtn.addEventListener('click', ()=>{
    // console.log('hay');
    document.body.classList.toggle('shownav')
});

openbtn.addEventListener('click', ()=>{
    // console.log('hey');
    modal.style.display = "block";
});

closebtn.addEventListener('click', ()=>{
    // console.log('hey');
    modal.style.display = "none";
});

window.addEventListener('click', (e)=> e.target === modal ? modal.style.display = 'none' : false);

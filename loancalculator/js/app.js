// UI 
const terms = document.getElementById('years');
const bubble = document.querySelector('.bubble');

const loanform = document.getElementById('loan-form');
const loader = document.getElementById('loading');

// Event Listener 
terms.addEventListener('input', function(){
    const val = terms.value;
    bubble.textContent = val > 1 ? `${val} Months` : `${val} Month`;
});

loanform.addEventListener('submit', function(e){
    // console.log('hay');

    // show loader 
    loader.style.display = 'block';

    setTimeout(()=>{
        loader.style.display = 'none';
        calculateresult();
    }, 1000);
    


    e.preventDefault();
});

function calculateresult(){
    console.log('Calculating');
}

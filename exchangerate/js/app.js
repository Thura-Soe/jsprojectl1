// UI 
const currencyoneel = document.getElementById('currency-one'),
    amountoneel = document.getElementById('amount-one');

const currencytwoel = document.getElementById('currency-two'),
    amounttwoel = document.getElementById('amount-two');

const swapel = document.getElementById('swap'),
    rateel = document.getElementById('rate');

function calculate(){
    // console.log('hay');

    const crcyone = currencyoneel.value;
    const crcytwo = currencytwoel.value;

    const amtone = amountoneel.value;
    const amttwo = amounttwoel.value;

    // console.log(amtone, amttwo);

    const apikey = '4e1150a7a14f71e65ac701a5';
    const url = `https://v6.exchangerate-api.com/v6/${apikey}/latest/${crcyone}`;

    // AJAX Request 
    fetch(url)
    .then(res=> res.json())
    .then(data=>{
        // console.log(data);

        // console.log(data.conversion_rates);
        // console.log(typeof data.conversion_rates);
        // console.log(data.conversion_rates[crcytwo]);

        const rate = data.conversion_rates[crcytwo];
        // console.log(rate);

        rateel.innerHTML = `1 ${crcyone} = ${rate} ${crcytwo}`

        amounttwoel.value = (amtone * rate).toFixed(2);
    });
}

// Event Listener 
currencyoneel.addEventListener('change', calculate);
amountoneel.addEventListener('input', calculate);

currencytwoel.addEventListener('change', calculate);
amounttwoel.addEventListener('input', calculate);

swapel.addEventListener('click', ()=>{
    // console.log('already swap');

    const tmp = currencyoneel.value;
    currencyoneel.value = currencytwoel.value;
    currencytwoel.value = tmp;
    amountoneel.value = 1;


    calculate();
})
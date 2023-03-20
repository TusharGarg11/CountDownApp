const givenBirthdayDate="20 March 2023 11:41 PM";
const inputs=document.querySelectorAll("input");


function clockCounter(){
    const givenDate=new Date(givenBirthdayDate);
    const currDate=new Date();
    const diff=(givenDate-currDate)/1000;
    inputs[0].value=Math.floor((diff/3600)/24);
    inputs[1].value=Math.floor((diff/3600)%24);
    inputs[2].value=Math.floor((diff/60)%60);
    inputs[3].value=Math.floor(diff%60);
    if(inputs[0].value==0 && inputs[1].value==0 && inputs[2].value==0 && inputs[3].value==0){
        document.getElementById("alertDisplayBox").style.display="block";
        clearInterval(CounterInterval);
    }
}

const CounterInterval=setInterval(() => {
    clockCounter();
}, 1000);

clockCounter();

function myFunction(){
    document.getElementById("modelId").style.display="block";
}

// Dom Manipulation
document.getElementById("printBirtdayDate").innerHTML=givenBirthdayDate;
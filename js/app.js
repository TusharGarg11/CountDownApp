const givenBirthdayDate="21 March 2023 11:15 PM";
const inputs=document.querySelectorAll("input");
var wishingQuotesData="";

// Functions 

function clockCounter(){
    const givenDate=new Date(givenBirthdayDate);
    const currDate=new Date();
    const diff=(givenDate-currDate)/1000;
    inputs[0].value=Math.floor((diff/3600)/24);
    inputs[1].value=Math.floor((diff/3600)%24);
    inputs[2].value=Math.floor((diff/60)%60);
    inputs[3].value=Math.floor(diff%60);
    if(inputs[0].value==0 && inputs[1].value==0 && inputs[2].value==0 && inputs[3].value==0){
        // document.getElementById("showBirtdayQuotes").innerHTML=wishingQuotesData;
        document.getElementById("alertDisplayBox").style.display="block";
        clearInterval(CounterInterval);
    }
}

// function updateWishesQuotes(){
//     // debugger;
//     wishingQuotesData=document.getElementById("formBirthdayQuotesInputBox").value;
//     console.log(wishingQuotesData);
// }

const CounterInterval=setInterval(() => {
    clockCounter();
}, 1000);

clockCounter();

function myFunction(){
    document.getElementById("modelId").style.display="block";
}

// Dom Manipulation
document.getElementById("printBirtdayDate").innerHTML=givenBirthdayDate;
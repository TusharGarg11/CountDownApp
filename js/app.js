const givenBirthdayDate="21 March 2023 10:00 PM";
const inputs=document.querySelectorAll("input");

function clockCounter(){
    const givenDate=new Date(givenBirthdayDate);
    const currDate=new Date();
    const diff=(givenDate-currDate)/1000;
    inputs[0].value=Math.floor((diff/3600)/24);
    inputs[1].value=Math.floor((diff/3600)%24);
    inputs[2].value=Math.floor((diff/60)%60);
    inputs[3].value=Math.floor(diff%60);

}

setInterval(() => {
    clockCounter();
}, 1000);

clockCounter();

// Dom Manipulation
document.getElementById("printBirtdayDate").innerHTML=givenBirthdayDate;
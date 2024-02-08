let ratingbuttons = document.querySelectorAll(".rating-btn");
let ratingmain = document.querySelector(".ratingmain");
let thankyoumain = document.querySelector(".thankyoumain");
let submitbtn = document.querySelector(".submitbtn");
let rvalue = document.querySelector("#rvalue");
let ratingvalue = 0;

ratingbuttons.forEach( (button) =>
{
    button.addEventListener( "click", () =>
    {
        console.log("box was clicked");
        button.style.backgroundColor = "hsl(25, 97%, 53%)";
        button.style.color = "white";
        disabledbtns(ratingbuttons);
    });
});

let disabledbtns = (btns) =>
{
    btns.forEach( (b) =>
    {
        b.disabled = true;
    });
}

function setrating(rating)
{
    ratingvalue = rating;
}

let eventaftersubmit = () =>
{
    submitbtn.addEventListener("click", () =>
    {
        if(ratingvalue === 0)
        {
            alert("please select a rating before submitting.... ");
        }
        else{
            console.log("submit button clicked");
            thankyoumain.style.display = "flex";
            ratingmain.style.display ="none";
            rvalue.innerText = ratingvalue;
        }
    });
}
eventaftersubmit();
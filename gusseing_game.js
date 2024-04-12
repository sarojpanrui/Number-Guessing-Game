const max=prompt("Enter the max number:");

const random=Math.floor(Math.random()*max)+1;
console.log(random);

let guess=prompt("guess a number:");

while(true){
    if(guess=="quit"){
        console.log("END");
        break;
    }
    if(guess==random){
        console.log("congractulations!!! the random number is:"+random);
        break;
    }
    else if(guess<random){
        guess=prompt("hint:too small!!!enter again:");
    }
    else{
        guess=prompt("hint:large!!!enter again:");
    }
}
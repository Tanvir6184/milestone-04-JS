

var myScore = 95;
var friendScore = 66;

if( myScore >= 80 ){
    if( friendScore >=80 ){
        console.log('go for a lunch')
    }
    else if( friendScore >=60 && friendScore <= 79){
        console.log('good luck next time')
    }
    else if( friendScore >= 40 && friendScore < 60){
        console.log('keep your friend message unseen')
    }
    else{
        console.log('block your friend')
    }
}
else{
    console.log('go to home and sleep and act sad');
}
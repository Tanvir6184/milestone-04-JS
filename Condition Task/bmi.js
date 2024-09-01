
const weight = 90;
const height = 1.75;
const bmi = weight / (height * height)

if(bmi < 18.5){
    console.log('underweight');
}
else if(bmi >= 18.5 && bmi <= 24.5){
    console.log('normal');
}
else if( bmi >= 25 && bmi <=29.5)
    console.log('overweight')
else{
    console.log('obese');
}


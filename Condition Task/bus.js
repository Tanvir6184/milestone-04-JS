var fare = 800;
var age = 20;
var isStudent = false 


if( age < 10 ){
    console.log('free')
}
else if( age >= 60){
    var discount = (fare * 15) / 100;
    var pay = fare - discount
    console.log(pay)
}
else if( isStudent ){
    var studentDiscount = (fare * 50) / 100;
    studentsPay = fare - studentDiscount
    console.log(studentsPay)
}
else{
    console.log(fare);
}



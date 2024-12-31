let num;
function checkDay(num){
    let day;
    switch (num) {
        case 1:day="Monday"
        console.log(day);
            break;
        case 2: day="Tuesday"
        console.log(day);
        break;
        case 3: day="Wednesday"
        console.log(day);
        break;
        case 4: day="Tuesday"
        console.log(day);
        break;
        case 5: day="Friday"
        console.log(day);
        break;
        case 6: day="Saturday"
        console.log(day);
        break;
        case 7: day="Sunday"
        console.log(day);
        break;
        default: console.log("No such number is assosiated with this date...")
            break;
    }
}
checkDay(7);
//if elseif elseif elseif else
//check temprature

let temp = Number(prompt("Enter The Temprature in your City!!"));

// if(temp < 0){
//     console.log("Too cold !!!");
// }
// else if(temp<15){
//     console.log("Weather is too cold outside");
// }
// else if(temp < 25){
//     console.log("Weather is normal outside");
// }
// else if(temp < 35){
//     console.log("Turn on AC");
// }
// else {
//     console.log("Too Hot!!");
// }

if (temp > 55) {
  console.log("Too hot!!!");
} else if (temp > 45) {
  console.log("Turn on AC");
} else if (temp > 35) {
  console.log("Turn on Fan");
} else if (temp > 25) {
  console.log("Normal weather");
} else if (temp > 15) {
  console.log("cold outside");
} else {
  console.log("Too cold");
}

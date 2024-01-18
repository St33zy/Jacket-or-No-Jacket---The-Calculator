// Write a program that uses the temperature outside to determine if you should wear a jacket.
// if temp >= x degree && not raining - log dont need jacket 
//else if temp < x degree || raining - log grab a jacket
//else if temp >= x degree

let currentTemp = 44;
let isRaining = true;
//   if (currentTemp <= 40) {
//     console.log(`It\'s ${currentTemp} degrees outside! Wear a heavy jacket.`);
// } else if (currentTemp <= 60){
//     console.log(`It\'s ${currentTemp} degrees outside. Wear a jacket.`);
// } else if (currentTemp <= 70){
//     console.log(`It\'s ${currentTemp} degrees outside. Wear a light jacket.`);
// } else {
//     console.log(`It\'s hot out today! No jacket needed!`);
// }
//   if (isRaining === true) {
//     console.log(`It\'s raining, too, so you should bring an umbrella!`);
// } else {
//     console.log(`No rain today, you can leave the umbrella at home!`);
// }
//  result = (isRaining === true) ? 'It\'s raining, I need an umbrella!' : 'It\'s not raining, so no umbrella needed!'
//  console.log(result);

 function temperature(currentTemp, isRaining) {
    if (currentTemp <= 40) {
        console.log(`It\'s ${currentTemp} degrees outside! Wear a heavy jacket.`);
    } else if (currentTemp <= 60){
        console.log(`It\'s ${currentTemp} degrees outside. Wear a jacket.`);
    } else if (currentTemp <= 70){
        console.log(`It\'s ${currentTemp} degrees outside. Wear a light jacket.`);
    } else {
        console.log(`It\'s hot out today! No jacket needed!`);
    }
    result = (isRaining === true) ? 'It\'s raining, I need an umbrella!' : 'It\'s not raining, so no umbrella needed!'
    console.log(result);
 }


 temperature(currentTemp, isRaining);
 temperature(currentTemp);
// Jacket or no Jacket done

// The Calculator started here
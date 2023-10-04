const car = {
    brand:  {
        name: "Xpeng",
        model: "G3",
        year: 2021
    },
    type: "electrical",
    rangekm: 440,
    battery: [
        {percentage: 0},
        {percentage: 25},
        {percentage: 50},
        {percentage: 75},
        {percentage: 100}],
    currentstatus: "Not charging",
    color: "black",
    charging: false,
} 

console.log(car);

var currentCarStatus = document.querySelector(".current-status");
currentCarStatus.innerHTML = car.currentstatus;

var changeChargingStatus = document.querySelector("#chargecar");
var chargeIcon = document.querySelector("i");
//let delay = 0;

changeChargingStatus.onclick = function() {
    chargeIcon.style.color = "lightgreen";
    changeChargingStatus.innerHTML = "Charging";
    changeChargingStatus.style.backgroundColor = "lightgreen";
    stopCharging.innerHTML = "Stop charging"
    stopCharging.style.backgroundColor = "";
    car.charging = true;
    currentCarStatus.innerHTML = "Charging...";
    
    if(car.charging){
        console.log("Car IS charging");
    } else {
        chargeIcon.style.color = "red";
        changeChargingStatus.style.backgroundColor = "red";
        changeChargingStatus.innerHTML = "Error: Car is NOT charging";
        currentCarStatus.innerHTML = "Error: Car is NOT charging";
        console.log("Error: Car is NOT charging")
    }
    
    /*car.battery.forEach(function (percentage) {
        setTimeout(function () {
            console.log(percentage);
        }, delay);
        delay += 1000;
    });*/
}

var stopCharging = document.querySelector("#stopcharge");

stopCharging.onclick = function() {
    chargeIcon.style.color = "red";
    changeChargingStatus.innerHTML = "Charge car";
    stopCharging.innerHTML = "Not charging";
    stopCharging.style.backgroundColor = "red";
    changeChargingStatus.style.backgroundColor = "";
    car.charging = false;
    currentCarStatus.innerHTML = "Charging stopped";
    
    if(!car.charging){
        console.log("Car is NOT charging");
    } else {
        chargeIcon.style.color = "lightgreen";
        stopCharging.innerHTML = "Error: Still charging";
        currentCarStatus.innerHTML = "Error: Still charging";
        console.log("Error: Car is still charging")
    }
}
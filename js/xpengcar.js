const car = {
    brand: "Xpeng",
    model: "G3",
    type: "electrical",
    rangekm: 440,
    color: "black",
    on: false,
    charging: false,
} 

var changeChargingStatus = document.querySelector("#chargecar");
var chargeIcon = document.querySelector("i");

changeChargingStatus.onclick = function() {
    chargeIcon.style.color = "lightgreen";
    changeChargingStatus.innerHTML = "Charging";
    changeChargingStatus.style.backgroundColor = "lightgreen";
    stopCharging.innerHTML = "Stop charging"
    stopCharging.style.backgroundColor = "";
    console.log("Car is charging");
}

var stopCharging = document.querySelector("#stopcharge");

stopCharging.onclick = function() {
    chargeIcon.style.color = "red";
    changeChargingStatus.innerHTML = "Charge car";
    stopCharging.innerHTML = "Not charging";
    stopCharging.style.backgroundColor = "red";
    changeChargingStatus.style.backgroundColor = "";
    console.log("Car is NOT charging")
}
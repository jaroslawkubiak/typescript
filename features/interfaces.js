var oldCivic = {
    name: "civic",
    year: 1996,
    broken: false,
};
var printVehicle = function (vehicle) {
    console.log("Name: ".concat(vehicle.name));
    console.log("Year: ".concat(vehicle.year));
    console.log("Broken? ".concat(vehicle.broken));
};
printVehicle(oldCivic);

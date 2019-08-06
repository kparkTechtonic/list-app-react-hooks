var VehicleFactory = (function() {
  var _vehicles = {
    car: Car,
    truck: Truck,
    motorcycle: Motorcycle,
    electricvehicle: ElectricVehicle
  };

  return {
    build: function (vehicleType, obj) {
      if (!vehicleType) {
        throw "vehicleType is a required parameter";
      }

      vehicleType = vehicleType.toLowerCase();

      if (_vehicles[vehicleType]) {
        return new _vehicles[vehicleType](obj);
      } else {
         throw vehicleType + " is not a valid vehicle";
      }
    }
  };
})();

document.addEventListener("DOMContentLoaded", function () {
  console.log("THE WINDOW OBJECT IS...", window);
  window.readyToShip = [];
  preInitSeedData()
});

function preInitSeedData() {
  fetch("./vehicleData.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let returnArr = scrub(data)
      processVehicles(returnArr);
    })
    .catch((error) => {
      console.log(error);
    });
}

function processVehicles(vehicleObjArr) {
  for (var i = 0; i < vehicleObjArr.length; i++) {
    let vehicle = vehicleObjArr[i];
    let maintenance = vehicle.maintenanceAndInsurance;
    if (typeof (maintenance) !== "object") {
      continue;
    }
    maintenance.lastServiced = new Date(maintenance.lastServiced);
    maintenance.lastInsured = new Date(maintenance.lastInsured);
    vehicle.costToDealership = Number((vehicle.price * 0.8).toFixed(2));

    if (typeof vehicle.type !== "string") {
      continue;
    }
    let type = vehicle.type.toLowerCase();

    if (!handle[type]) {
      continue;
    }
    vehicle = handle[type](vehicle);
    var newCarInstance = VehicleFactory.build(vehicle.type, vehicle);
    readyToShip.push(newCarInstance);
  }
}

var handle = {
  car: function (vehicleObj) {
    vehicleObj.mpg = getRandomNum(20, 30);
    return vehicleObj;
  },
  truck: function (vehicleObj) {
    vehicleObj.mpg = getRandomNum(15, 20);
    vehicleObj.towingCapacity = getRandomNum(5000, 40000);
    return vehicleObj;
  },
  electricvehicle: function (vehicleObj) {
    vehicleObj.mpc = getRandomNum(200, 300);
    return vehicleObj;
  },
  motorcycle: function (vehicleObj) {
    vehicleObj.mpg = getRandomNum(35, 50);
    return vehicleObj;
  }
};


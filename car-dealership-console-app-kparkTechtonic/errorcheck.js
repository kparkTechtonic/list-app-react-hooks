function validateTypeValue(obj) {
    let prop = new Map(Object.entries({
        "type": "string",
        "vin": "string",
        "make": "string",
        "mileage": "number",
        "model": "string",
        "color": "string",
        "year": "number",
        "price": "number",
        "fuel": "number",
        "clean": "boolean",
        "maintenanceAndInsurance": "object",
    }));

    let isValid = true;
    prop.forEach((value, key) => {
        if (!obj.hasOwnProperty(key) ||
            typeof (obj[key]) !== value) {
            isValid = false;
        }
    });
    return isValid;
};

function validateValues(obj) {
    let today = new Date();
    if (obj.type.toLowerCase() !== "car" &&
        obj.type.toLowerCase() !== "electricvehicle" &&
        obj.type.toLowerCase() !== "truck" &&
        obj.type.toLowerCase() !== "motorcycle" && //type must be of these 4 types
        obj.maintenanceAndInsurance.hasOwnProperty("lastServiced") !== true ||
        obj.maintenanceAndInsurance.hasOwnProperty("lastInsured") !== true || //must have these time properties
        typeof Date.parse(obj.maintenanceAndInsurance.lastInsured) !== "number" ||
        typeof Date.parse(obj.maintenanceAndInsurance.lastInsured) !== "number" ||
        dateDiff["inYears"](today, new Date(obj.maintenanceAndInsurance.lastInsured)) < -3 ||
        dateDiff["inYears"](today, new Date(obj.maintenanceAndInsurance.lastServiced)) < -3 ||
        dateDiff["inYears"](today, new Date(obj.maintenanceAndInsurance.lastServiced)) > 0 ||
        dateDiff["inYears"](today, new Date(obj.maintenanceAndInsurance.lastServiced)) > 0 ||//must have been insured or maintained in the past 3 years, cannot be insured or serviced in the future, this also checks validity of the string date input
        (obj.year - 2018) < -100 ||
        (2018 - obj.year) < -2 ||
        (obj.year - Math.floor(obj.year)) > 0 || //car cannot be 100 years or older(this is not a museum!), cannot be from the future, year cannot be a float.
        obj.vin.length !== 17 ||
        !(/[a-zA-Z0-9]{9}[a-zA-Z0-9-]{2}[0-9]{6}/.test(obj.vin)) //vin checks
    ) {
        return false;
    }
    return true;
}



function scrub(objArr) {
    if (!objArr) {
        return [];
    }
    var returnArr = [];
    for (i = 0; i < objArr.length; i++) {
        var obj = objArr[i]
        if (
            validateTypeValue(obj) === true &&
            validateValues(obj) === true) {
            returnArr.push(obj);
        } else {
            rejectedArr.push(obj);
        }
    }
    return returnArr;
}





// Code your solution in this file!
let drivers= []
 const returnFirstTwoDrivers= function(drivers){
    return drivers.slice(0,2);
 }

 //returnFirstTwoDrivers([1,2,3,4,5]);
 
 const returnLastTwoDrivers= function(drivers){
    return drivers.slice(-2);
 }

 let selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers];

 function createFareMultiplier(multiplier) {
    return function (fare) {
      return fare * multiplier;
    };
  }

  const fareDoubler= createFareMultiplier(2);
  
  const fareTripler= createFareMultiplier(3);

  function selectDifferentDrivers(drivers, awesomeDrivers){
    returnFirstTwoDrivers(drivers);
    returnLastTwoDrivers(drivers);
    
    return awesomeDrivers(drivers);
      
  }
  
    
  
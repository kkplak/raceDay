let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;

let runnerAge = 16;

if (registeredEarly && runnerAge > 18) 
  {console.log(raceNumber += 1000)}

if(registeredEarly && runnerAge > 18) 
  {console.log(`You will race at 9:30am. Your race number is: ${raceNumber}`)}

else if (!registeredEarly && runnerAge > 18)    
  {console.log(`You will race at 11:00am. Your race number is: ${raceNumber}`)}

else if (runnerAge < 18) 
  {console.log (`You will race at 12:30pm. Your race number is ${raceNumber}`)}

else  {console.log ('You will see the registration desk')}
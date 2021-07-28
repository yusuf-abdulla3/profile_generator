const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});





rl.question("What's your name? Nicknames are also acceptable :)", (name) => {
  rl.question("What's an activity you like doing?", (activity) => {
    rl.question("What do you listen to while doing that?", (music) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)?", (meal) => {
        rl.question("What's your favourite thing to eat for that meal?", (favouriteFood) => {
          rl.question("Which sport is your absolute favourite?", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (superPower) => {
              console.log(`${name} loves ${activity}! While ${activity}, ${name} enjoys listening to ${music}. ${name}'s favourite meal of the day is ${meal} and their favourite thing to eat during that meal is ${favouriteFood}! ${name}'s absolute favorite sport is ${sport}! ${name}'s superpower is ${superPower}!`);
              rl.close();
            })
          })
        
        })
      
      })
    
    })
  })
})


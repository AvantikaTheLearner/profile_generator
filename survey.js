const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profileArr = [];
rl.question('What is your name? Nicknames are also acceptable ', (answer) => {
  console.log(`Thank you for your answer: ${answer}`);
  profileArr.push(answer);

  rl.question('What is an activity you like doing? ', (answer) => {
    console.log(`Thank you for your answer: ${answer}`);
    profileArr.push(answer);

    rl.question('What do you listen to while doing that? ', (answer) => {
      console.log(`Thank you for your answer: ${answer}`);
      profileArr.push(answer);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        console.log(`Thank you for your answer: ${answer}`);
        profileArr.push(answer);

        rl.question('What is your favourite thing to eat for that meal? ', (answer) => {
          console.log(`Thank you for your answer: ${answer}`);
          profileArr.push(answer);

          rl.question('Which sport is your absolute favourite? ', (answer) => {
            console.log(`Thank you for your answer: ${answer}`);
            profileArr.push(answer);
        
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              console.log(`Thank you for your answer: ${answer}`);
              profileArr.push(answer);

              for (let elem of profileArr) {
                process.stdout.write(elem + " ");
              }
              process.stdout.write("." + '\n');
              
              rl.close();
            });
          });
        });
      });
    });
  });
});
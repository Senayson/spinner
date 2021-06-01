let array = ['|', '/', '-', '\\','|', '/', '-', '\\', '\n'];
let s = 100;
for(let item of array){

  setTimeout(() => {
    process.stdout.write(`\r${item} `);
  }, s);
  s += 200;
}


// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, s += 200);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, s += 200);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\ '); 
// }, s += 200);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, s += 200);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, s += 200);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, s += 200);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   \n'); 
// }, s += 200);



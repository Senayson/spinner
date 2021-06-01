process.stdout.write('hello from spinner1.js... \rheyyy\n');
let s = 100;
setTimeout(() => {
  process.stdout.write('\r|   ');
}, s);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, s += 200);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, s += 200);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\ '); 
}, s += 200);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, s += 200);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, s += 200);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, s += 200);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   \n'); 
}, s += 200);



let array = ['|', '/', '-', '\\','|', '/', '-', '\\'];
array.push('\n');
let s = 100;
for(let item of array){

  setTimeout(() => {
    process.stdout.write(`\r${item} `);
  }, s);
  s += 200;
}



const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
let count = document.querySelectorAll('.count');
let update = 1000;
async function increment(id,value,add){
for(let i=1000;i<=value;i+=update){
    count[id].textContent = i+add;
    await sleep(20);
}
console.log('loop terminated');
}
increment(0,89052,52);
increment(1,12199,199);
increment(2,833000,110);
increment(3,2509,509);

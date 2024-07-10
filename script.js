const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
let count = document.querySelectorAll('.count');

async function increment(id,value,add,sleepTime,update=1000){
for(let i=update;i<=value;i+=update){
    count[id].textContent = i+add;
    await sleep(sleepTime);
}
console.log('loop terminated');
}
increment(0,89052,52,60);
increment(1,12199,199,500);
increment(2,833000,110,1);
increment(3,2509,509,500,200);

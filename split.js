const left = document.querySelector('.left')

const right = document.querySelector('.right')
const cont = document.querySelector('.cont')
const btn = document.querySelector('.btn')


left.addEventListener('mouseenter',()=>{
    cont.classList.add('hoverL')
})
left.addEventListener('mouseleave',()=>{
    cont.classList.remove('hoverL')
})

right.addEventListener('mouseenter',()=>{
    cont.classList.add('hoverR')
})
right.addEventListener('mouseleave',()=>{
    cont.classList.remove('hoverR')
})
 

let a,b;
const getMax = (a, b) => Math.max(a, b);
console.log(a,b)

// callback is invoked for each element in the array starting at index 0
console.log([108, 100].reduce(getMax),0); // 100
[    50].reduce(getMax, 10); // 50
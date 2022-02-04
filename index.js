const stopB = document.getElementById('stopButton');
const stopL = document.getElementById('stopLight');
const slowB = document.getElementById('slowButton');
const slowL = document.getElementById('slowLight');
const goB = document.getElementById('goButton');
const goL = document.getElementById('goLight');
const controls  = document.querySelectorAll('.controls');


controls.forEach( () => controls.addEventListener('click', console.log(`${controls.innerText} bulb on`)))

stopB.addEventListener('click', () => stopL.classList.toggle('stop'))
stopB.addEventListener('mouseenter', () => console.log('Entered stop button'))
stopB.addEventListener('mouseleave', () => console.log('Left stop button'))

slowB.addEventListener('click', () => slowL.classList.toggle('slow'))
slowB.addEventListener('mouseenter', () => console.log('Entered slow button'))
slowB.addEventListener('mouseleave', () => console.log('Left slow button'))

goB.addEventListener('click', () => goL.classList.toggle('go'))
goB.addEventListener('mouseenter', () => console.log('Entered go button'))
goB.addEventListener('mouseleave', () => console.log('Left go button'))
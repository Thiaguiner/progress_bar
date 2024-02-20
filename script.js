const progressBar = document.querySelector(".progress");
const previousBtn = document.querySelector('#previous-btn')
const nextBtn = document.querySelector('#next-btn')

let progress = 0;

function updateBarProgress(){
  progressBar.style.width = progress + "%";
}

function nextStep(){
  progress +=10
  if(progress >100) progress =100
  updateBarProgress()
}
function previoussStep(){
  progress -=10
  if(progress >100) progress =100
  updateBarProgress()
}
nextBtn.addEventListener('click', nextStep)
previousBtn.addEventListener('click', previoussStep)
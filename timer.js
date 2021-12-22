let time = 1800

const timer = document.querySelector('.timer')

setInterval(reduceTime, 1000)

function reduceTime(){
  let mins = Math.floor(time / 60)
  let secs = time % 60
  if(secs < 10){
   secs = '0'+secs
  }if(mins < 10){
    mins = "0"+mins
  }
  if(time === 0){
    time = 1800
  }
  timer.innerHTML = `${mins}:${secs}`
  time--
}
const time = document.getElementById('time');

function findTime(){
  let currentTime = new Date();
  const hour = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  if (minutes < 10){
    minutes = '0' + minutes;
  }

  if (seconds < 10){
    seconds = '0' + seconds;
  }

  time.textContent = `${hour}:${minutes}:${seconds}`;
}

setInterval(findTime, 1000);

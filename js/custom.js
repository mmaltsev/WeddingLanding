function setCounter() {
  let wdDate = new Date('Sat Jan 20 2018 18:00:00 GMT+0300 (FET)')
  dayCalc(wdDate)
  setInterval(function() {
    dayCalc(wdDate)
  }, 30000)
  
  setInterval(function() {
    let colons = document.getElementsByClassName('colon')
    for (let i = 0; i < colons.length; i ++) {
      if (colons[i].innerHTML === ':') colons[i].innerHTML = ''
      else colons[i].innerHTML = ':'
    }
  }, 1000)
}

function dayCalc(wdDate) {
  let currDate = new Date()
  let timeDiff = Math.abs(wdDate.getTime() - currDate.getTime())
  let dateDiff = Math.floor(timeDiff / (1000 * 3600 * 24))
  let hourDiff = Math.floor(timeDiff / (1000 * 3600)) % 24
  let minDiff = Math.floor(timeDiff / (1000 * 60)) % 60
  HTMLUpdate(dateDiff, hourDiff, minDiff)
}

function HTMLUpdate(dateDiff, hourDiff, minDiff) {
  let dayDesc = document.getElementById('day-desc').innerHTML
  if (dateDiff % 10 > 4 || dateDiff % 10 === 0) dayDesc = 'Дней'
  else if (dateDiff % 10 > 1)                   dayDesc = 'Дня'
  else                                          dayDesc = 'День'

  let hourDesc = document.getElementById('hour-desc').innerHTML
  if (hourDiff % 10 > 4 || hourDiff % 10 === 0) hourDesc = 'Часов'
  else if (hourDiff % 10 > 1)                   hourDesc = 'Часа'
  else                                          hourDesc = 'Час'

  let minDesc = document.getElementById('min-desc').innerHTML
  if (minDiff % 10 > 4 || minDiff % 10 === 0) minDesc = 'Минут'
  else if (minDiff % 10 > 1)                  minDesc = 'Минуты'
  else                                        minDesc = 'Минута'

  document.getElementById('day').innerHTML = '' + dateDiff
  document.getElementById('hour').innerHTML = '' + hourDiff
  document.getElementById('min').innerHTML = '' + minDiff
}

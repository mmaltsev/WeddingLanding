function setGuests() {
  guestArr = [{
      names: ['Гости'],
      sex: 'p',
    }, {
      names: ['Мама', 'Папа'],
      sex: 'p',
    }, {
      names: ['Максим'],
      sex: 'm',
    }, {
      names: ['Леночка', 'Саша', 'Ваня'],
      sex: 'p',
    }, {
      names: ['Маша'],
      sex: 'f',
    }
  ]
  guestId = +window.location.search.substr(4)
  let guests = guestArr[guestId] || guestArr[0]
  let dearEl = document.getElementById('dear')
  let guestEl1 = document.getElementById('guest1')
  let guestEl2 = document.getElementById('guest2')
  let guestEl3 = document.getElementById('guest3')
  let delim1 = document.getElementById('delim1')
  let delim2 = document.getElementById('delim2')
  if (guests.names.length > 1 || guests.sex === 'p') {
    dearEl.textContent  = 'Дорогие'
    for (let j=0; j < guests.names.length; j++) {
      if (j == 0 && guests.names.length === 1) {
        guestEl1.textContent  = ''
        guestEl2.textContent  = ''
        guestEl3.textContent  = guests.names[j]
      } else if (j == 0 && guests.names.length === 2) {
        guestEl1.textContent  = ''
        guestEl2.textContent  = guests.names[j]
        delim2.textContent  = 'и'
      } else if (j == 0 && guests.names.length === 3) {
        guestEl1.textContent  = guests.names[j]
        delim1.textContent  = ','
      } else if (j === 1 && guests.names.length === 2) {
        guestEl3.textContent  = guests.names[j]
      } else if (j === 1 && guests.names.length === 3) {
        guestEl2.textContent  = guests.names[j]
        delim2.textContent  = 'и'
      } else if (j === 2) {
        guestEl3.textContent  = guests.names[j]
      }
    }
  } else {
    if (guests.sex == 'm') {
      dearEl.textContent  = 'Дорогой'
    } else {
      dearEl.textContent  = 'Дорогая'
    }
    guestEl1.textContent  = ''
    guestEl2.textContent  = ''
    guestEl3.textContent  = guests.names[0]
  }
}

function setCounter() {
  let wdDate = new Date('Sat Jan 20 2018 18:00:00 GMT+0300 (FET)')
  dayCalc(wdDate)
  setInterval(function() {
    dayCalc(wdDate)
  }, 30000)
  
  setInterval(function() {
    let colons = document.getElementsByClassName('colon')
    for (let i = 0; i < colons.length; i ++) {
      if (colons[i].text()  === ':') colons[i].text()  = ''
      else colons[i].text()  = ':'
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
  let dayDesc = document.getElementById('day-desc').textContent 
  if (dateDiff % 10 > 4 || dateDiff % 10 === 0) dayDesc = 'Дней'
  else if (dateDiff % 10 > 1)                   dayDesc = 'Дня'
  else                                          dayDesc = 'День'

  let hourDesc = document.getElementById('hour-desc').textContent 
  if (hourDiff % 10 > 4 || hourDiff % 10 === 0) hourDesc = 'Часов'
  else if (hourDiff % 10 > 1)                   hourDesc = 'Часа'
  else                                          hourDesc = 'Час'

  let minDesc = document.getElementById('min-desc').textContent 
  if (minDiff % 10 > 4 || minDiff % 10 === 0) minDesc = 'Минут'
  else if (minDiff % 10 > 1)                  minDesc = 'Минуты'
  else                                        minDesc = 'Минута'

  document.getElementById('day').textContent  = '' + dateDiff
  document.getElementById('hour').textContent  = '' + hourDiff
  document.getElementById('min').textContent  = '' + minDiff
}

const timeLeft = document.getElementById('time-left')

const endDate = new Date('07/13/2023/15:00:00')
const secound = 1000 // all in milisecounds
const minute = secound * 60
const hour = minute * 60
const day = hour * 24
let timerId


function countDown() {
    const today = new Date()
    const timeSpan = endDate - today

    if (timeSpan <= -day) {
        timeLeft.innerHTML = "Let´s get Party!!!"
        clearInterval(timerId)
        return
    }

    if (timeSpan <= 0) {
        timeLeft.innerHTML = 'Time is up!'
        clearInterval(timerId)
        return
    }

    const days = Math.floor(timeSpan / day)
    const hours = Math.floor((timeSpan % day) / hour)
    const minutes = Math.floor((timeSpan % hour) / minute)
    const secounds = Math.floor((timeSpan % minute) / secound)

    // timeLeft.innerHTML = days + "days" + "<br>" + hours + "hours" + "<br>" + minutes + "minutes" + "<br>" + secounds + "secounds"
    document.getElementById('days').innerHTML = days + " " + "Tage"
    document.getElementById('hours').innerHTML = hours + " " + "Std"
    document.getElementById('mins').innerHTML = minutes + " " + "Min"
    document.getElementById('secs').innerHTML = secounds + " " + "Sek"
}
timerId = setInterval(countDown, secound)

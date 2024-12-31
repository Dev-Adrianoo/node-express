const { DateTime, Interval } = require('luxon')

const agora = DateTime.now()
console.log(agora.day)
console.log(agora.month)

const birthday = DateTime.fromFormat('30/06/2005', 'dd/MM/yyyy')
console.log(birthday.day)
console.log(birthday.month)

const idade = Interval.fromDateTimes(birthday, agora).length('year')
console.log(Math.floor(idade))

const isoDate = "2020-119T21:22:00-0300";
const RFC = "Thu, 19 Nov 2020 21:22:00 -0300"

console.log(DateTime.fromISO(isoDate).toLocaleString())
console.log(DateTime.fromRFC2822(RFC).toLocaleString())

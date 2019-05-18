const moment = require('moment')

module.exports = {
  printRequest: (req, res, next) => {
    const now = moment().format('HH:mm:ss')
    const date = new Date()
    const today = `${date.getFullYear()}-${date.getMonth() +
      1}-${date.getDate()} ${now}`
    const method = req.method
    const url = req.url
    const timeStamps = `${today} | ${method} from ${url}`
    console.log(timeStamps)
    next()
    const respondTime = res.get('X-Response-Time')
    const result = `${timeStamps} | total time: ${respondTime}`
    return console.log(result)
  },
}

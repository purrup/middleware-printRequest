const express = require('express')
const app = express()
const port = 3000
const moment = require('moment')
const responseTime = require('response-time')

const printRequest = (req, res, next) => {
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
  console.log(result)
}

app.use(responseTime())
app.use(printRequest)

// 列出全部 Todo
app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

// 新增一筆 Todo 頁面
app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.delete('/:id/delete', (req, res) => {
  res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App is running on localhost:${port}`)
})

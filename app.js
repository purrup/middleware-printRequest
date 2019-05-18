const express = require('express')
const app = express()
const port = 3000
const { printRequest } = require('./config/printRequest')
const responseTime = require('response-time')

app.use(responseTime())

// 列出全部 Todo
app.get('/', printRequest, (req, res) => {
  res.send('列出全部 Todo')
})

// 新增一筆 Todo 頁面
app.get('/new', printRequest, (req, res) => {
  res.send('新增 Todo 頁面')
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', printRequest, (req, res) => {
  res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/', printRequest, (req, res) => {
  res.send('新增一筆  Todo')
})

app.delete('/:id/delete', printRequest, (req, res) => {
  res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App is running on localhost:${port}`)
})

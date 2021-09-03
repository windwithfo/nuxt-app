const express = require('express')
const app = express()

app.use(express.json())

app.all('/getJSON', (req, res) => {
  res.json({ data: 'data' })
})

app.get('/test', (req, res) => {
  res.json({
    "msg": "根据code值返回实际辅助提示信息",
    "count": 10
  })
})

module.exports = app

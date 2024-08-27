const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send({ version: '11.11' })
})

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  // if (true) throw 'error...  '
  res.send('ok')
})

app.get('/dummy', (req, res) => {
  res.send('Yet another dummy change')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})

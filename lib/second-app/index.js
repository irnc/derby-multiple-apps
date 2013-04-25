var derby = require('derby')
  , app = derby.createApp(module)

app.get('/', function (page, model, params) {
  page.render()
})

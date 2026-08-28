const epxress = require('express')

const app = epxress()
const PORT = 4000

app.listen(PORT, () => {
    console.log(`app is listening to http://localhost:${PORT}`)
})
const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

app.get("/api/:date", async (request, response) => {
  const { date } = request.params

  const convertedDate = isNaN(date) ? String(date) : Number(date)

  const unix = Math.floor(new Date(convertedDate).getTime())

  if (isNaN(unix)) {
    return response.json({
      error: "Invalid Date"
    })
  }

  return response.json({
    unix,
    utc: new Date(convertedDate).toUTCString()
  })
})

app.listen(process.env.PORT || 3333, () => {
  console.log("HTTP Server running")
})
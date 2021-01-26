/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */
/* eslint-disable semi */
const functions = require("firebase-functions")
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")(
  "sk_test_51ICT1lHXQWBqxKbRHAofiUOglujSdoNR4VPBgFFnCuiOgdv4mXFejB9V1wBgEoSCw8fmsxuJkmc3WRCHilIm5ulE00U4WkWF8h"
)

// API

// App config
const app = express()

// Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"))

app.post("/payments/create", async (request, response) => {
  const total = request.query.total

  console.log("Payment request recieved -> ", total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  })

  // OK -Created
  response.status(201).send({
    clientsSecret: paymentIntent.client_secret,
  })
})

// Listen command
exports.api = functions.https.onRequest(app)

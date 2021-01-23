import React, { useEffect } from "react"
import "./App.css"
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./Login"
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider"
import Payment from "./Payment"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe(
  "pk_test_51ICT1lHXQWBqxKbRKoU4FgRhbtMkzM2Hki83j9NaZPFVrsI5KFXJ1A7XTPvGtbOL6hypVHhhY5bvJkueHZ7CE1vF00no8bzUgS"
)

function App() {
  const [{}, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is: >", authUser)

      if (authUser) {
        // User logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        // User is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

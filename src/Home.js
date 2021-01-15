import React from "react"
import "./Home.css"
import Product from "./Product"

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
          className="home__image"
        />

        <div className="home__row">
          <Product
            id="12345678"
            title="Work: A History of How We Spend Our Time"
            image="https://images-na.ssl-images-amazon.com/images/I/51chA8BNdGL.jpg"
            price={11.69}
            rating={5}
          />
          <Product
            id="12345679"
            title="Eastpak Back To Work Rucksack, 43 cm, 27 L, Schwarz (Brize Leave Black)"
            image="https://images-na.ssl-images-amazon.com/images/I/818l-9jVtkL._AC_SL1500_.jpg"
            price={55.95}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="12345677"
            title="Microsoft Surface Pro 7, 12,3 Zoll 2-in-1 Tablet (Intel Core i5, 8GB RAM, 128GB SSD, Win 10 Home) Platin Grau"
            image="https://images-na.ssl-images-amazon.com/images/I/71KVXZCe0xL._AC_SL1500_.jpg"
            price={859.95}
            rating={5}
          />
          <Product
            id="12345676"
            title="Tasse mit Spruch - Machen! - beidseitig Bedruckt - Made in Germany"
            image="https://images-na.ssl-images-amazon.com/images/I/71PPCmIh6lL._AC_SL1500_.jpg"
            price={14.9}
            rating={5}
          />
          <Product
            id="12345675"
            title="Full-Stack React, TypeScript, and Node: Build cloud-ready web applications using React 17 with Hooks and GraphQL"
            image="https://images-na.ssl-images-amazon.com/images/I/71m7dhO56ZL.jpg"
            price={36.36}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="12345674"
            title="Hbada Bürostuhl Ergonomischer Schreibtischstuhl Arbeitsstuhl Drehstuhl mit klappbaren Armlehnen Mesh Computerstuhl leicht Stuhl Schwarz"
            image="https://images-na.ssl-images-amazon.com/images/I/51g8DNe8ulL._AC_SL1020_.jpg"
            price={119.99}
            rating={3}
          />
        </div>
      </div>
    </div>
  )
}

export default Home

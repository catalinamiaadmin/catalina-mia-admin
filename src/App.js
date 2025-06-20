// src/App.js
import React from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import Dashboard from "./Dashboard";
import Importador from "./Importador";
import Carrito from "./Carrito";
import { CarritoProvider } from "./CarritoContext";
import logo from "./logoCatalina.jpeg";
import "./App.css";

function App() {
  return (
    <CarritoProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CATALINA MÍA – Panel Admin</h1>
        </header>
        <div className="App-body">
          <div className="Form-container">
            <ProductForm />
            <Importador />
          </div>
          <div className="List-container">
            <ProductList />
            <Dashboard />
            <Carrito />
          </div>
        </div>
      </div>
    </CarritoProvider>
  );
}

export default App;

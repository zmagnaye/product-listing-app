import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'

function App() {
  const [products] = useState([
    {id: 1, name: 'House Coffee', price: '$5.45', description: 'Authentic Vietnamese Style Creamy Iced Coffee'},
    {id: 2, name: 'Strawberry Hibiscus Tea', price: '$5.00', description: 'Brewed with Real Fruits, Hibiscus Flowers, and Rooibos Teas'},
    {id: 3, name: 'Thai Tea', price: '$5.75', description: 'A Blend of Black Teas, Vanilla Bean, Cardamom, and Anise'}
  ])

  return (
    <>
      <div className='app'>
        <h1>7 Leaves Coffee Product Menu</h1>
        <ProductList products={products}/>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'

function App() {
  const [products] = useState([
    {id: 1, name: 'House Coffee', price: '$5.45', description: 'Authentic Vietnamese Style Creamy Iced Coffee'},
    {id: 2, name: 'Strawberry Hibiscus Tea', price: '$5.00', description: 'Brewed with Real Fruits, Hibiscus Flowers, and Rooibos Teas'},
    {id: 3, name: 'Thai Tea', price: '$5.75', description: 'A Blend of Black Teas, Vanilla Bean, Cardamom, and Anise'},
    {id: 4, name: 'Vietnamese Coffee', price: '$5.45', description: 'Traditional Vietnamese Iced Coffee'},
    {id: 5, name: 'Sunset Passion', price: '$5.75', description: 'Hand Squeezed Passion Fruit'},
    {id: 6, name: 'Mung Bean Milk Tea', price: '$5.60', description: 'Jasmine Tea with Mung Bean and Pandan Leaves'},
    {id: 7, name: 'Sea Cream Black Coffee', price: '$5.45', description: 'Sea Cream Black Coffee'},
    {id: 8, name: 'Summer Mint', price: '$5.75', description: 'Green Tea and Real Passion Fruit With Hints of Mint and Orange'},
    {id: 9, name: 'Oolong Bean Milk Tea', price: '$5.60', description: 'Full-Bodied and Creamy Milk Teas'},
    {id: 10, name: 'Mint Sereno', price: '$5.45', description: 'A Refreshing Sereno Blend'}
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

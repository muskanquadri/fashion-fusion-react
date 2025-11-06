import React, { useEffect, useState } from 'react'
import supabase from './supabaseClient.'
import './products.css'


function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')

      console.log('Data:', data)
      console.log('Error:', error)

      if (error) {
        console.error('Error fetching products:', error)
      } else {
        setProducts(data)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="products-page">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image_url} alt={item.name} />
            <div className="product-info">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <p>{item.description}</p>
            </div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
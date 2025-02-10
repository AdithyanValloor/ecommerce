import React from 'react'
import ProductCard from '../components/ProductCard'

function HomePage() {
    const product = [
        {
            name: "Brown Cali Trench Jacket Set",
            image: "https://www.stylemati.in/cdn/shop/files/mati-outfit-sets-xs-brown-cali-trench-jacket-set-3-pcs-brown-cali-trench-jacket-set-3-pcs-33281803976793.jpg?v=1732060169&width=1200",
            price: 1200
        },
        {
            name: "Brown Cali Trench Jacket Set",
            image: "https://www.stylemati.in/cdn/shop/files/mati-outfit-sets-xs-brown-cali-trench-jacket-set-3-pcs-brown-cali-trench-jacket-set-3-pcs-33281803976793.jpg?v=1732060169&width=1200",
            price: 1200
        },
        {
            name: "Brown Cali Trench Jacket Set",
            image: "https://www.stylemati.in/cdn/shop/files/mati-outfit-sets-xs-brown-cali-trench-jacket-set-3-pcs-brown-cali-trench-jacket-set-3-pcs-33281803976793.jpg?v=1732060169&width=1200",
            price: 1200
        },
        {
            name: "Brown Cali Trench Jacket Set",
            image: "https://www.stylemati.in/cdn/shop/files/mati-outfit-sets-xs-brown-cali-trench-jacket-set-3-pcs-brown-cali-trench-jacket-set-3-pcs-33281803976793.jpg?v=1732060169&width=1200",
            price: 1200
        },
        {
            name: "Brown Cali Trench Jacket Set",
            image: "https://www.stylemati.in/cdn/shop/files/mati-outfit-sets-xs-brown-cali-trench-jacket-set-3-pcs-brown-cali-trench-jacket-set-3-pcs-33281803976793.jpg?v=1732060169&width=1200",
            price: 1200
        },
    ]
  return (
    <div className="bg-white min-h-screen p-6 text-white flex justify-center">
        <div className="w-full max-w-6xl">
          <h1 className="text-2xl text-black mb-4 text-center">Trending</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
            {product.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
  )
}

export default HomePage

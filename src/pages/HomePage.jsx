import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";
import TextCarousel from "../components/TextCarousel";

function HomePage() {
  const product = [
    {
      name: "Brown Cali Trench Jacket Set",
      image:
        "https://www.stylemati.in/cdn/shop/files/mati-outfit-sets-xs-brown-cali-trench-jacket-set-3-pcs-brown-cali-trench-jacket-set-3-pcs-33281803976793.jpg?v=1732060169&width=1200",
      price: 1200,
    },
    {
      name: "Brown Cali Trench Jacket Set",
      image:
        "https://www.stylemati.in/cdn/shop/files/mati-outfit-sets-xs-brown-cali-trench-jacket-set-3-pcs-brown-cali-trench-jacket-set-3-pcs-33281803976793.jpg?v=1732060169&width=1200",
      price: 1200,
    },
    {
      name: "Brown Cali Trench Jacket Set",
      image:
        "https://www.stylemati.in/cdn/shop/files/mati-outfit-sets-xs-brown-cali-trench-jacket-set-3-pcs-brown-cali-trench-jacket-set-3-pcs-33281803976793.jpg?v=1732060169&width=1200",
      price: 1200,
    },
    {
      name: "Brown Cali Trench Jacket Set",
      image:
        "https://www.stylemati.in/cdn/shop/files/mati-outfit-sets-xs-brown-cali-trench-jacket-set-3-pcs-brown-cali-trench-jacket-set-3-pcs-33281803976793.jpg?v=1732060169&width=1200",
      price: 1200,
    },
    {
      name: "Brown Cali Trench Jacket Set",
      image:
        "https://www.stylemati.in/cdn/shop/files/mati-outfit-sets-xs-brown-cali-trench-jacket-set-3-pcs-brown-cali-trench-jacket-set-3-pcs-33281803976793.jpg?v=1732060169&width=1200",
      price: 1200,
    },
    {
      name: "Brown Cali Trench Jacket Set",
      image:
        "https://www.stylemati.in/cdn/shop/files/mati-outfit-sets-xs-brown-cali-trench-jacket-set-3-pcs-brown-cali-trench-jacket-set-3-pcs-33281803976793.jpg?v=1732060169&width=1200",
      price: 1200,
    },
    {
      name: "Brown Cali Trench Jacket Set",
      image:
        "https://www.stylemati.in/cdn/shop/files/mati-outfit-sets-xs-brown-cali-trench-jacket-set-3-pcs-brown-cali-trench-jacket-set-3-pcs-33281803976793.jpg?v=1732060169&width=1200",
      price: 1200,
    },
    {
      name: "Brown Cali Trench Jacket Set",
      image:
        "https://www.stylemati.in/cdn/shop/files/mati-outfit-sets-xs-brown-cali-trench-jacket-set-3-pcs-brown-cali-trench-jacket-set-3-pcs-33281803976793.jpg?v=1732060169&width=1200",
      price: 1200,
    },
  ];
  
  
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {

    const popupShown = sessionStorage.getItem("popupShown");

    if (!popupShown) {

      setShowPopup(true)

      sessionStorage.setItem("popupShown", "true")
      setTimeout(() => setShowPopup(false), 2000);
    }
  }, []);

  return (
    <div>
      <p className={`bg-white shadow-md rounded-full absolute z-20 my-4 right-1/2 translate-x-1/2 py-2 px-4 text-lg transition-all duration-500 ${showPopup ? "top-20 opacity-100" : "top-14 opacity-0 pointer-events-none"}`}>
        Welcome
      </p>
      <div className="bg-red-300 flex flex-col justify-between">
        <h1 className="font-silkscreen text-center py-2 bg-green-300 text-[9px] md:text-base">
          Trend. Tech. Timeless – Shop the Future of Fashion & Gadgets!
        </h1>
        <TextCarousel/>
        <div className="min-h-[300px] md:h-[400px] lg:h-[550px] h-[50vh]">
          <Carousel/>
        </div>
      </div>
      <div className=" pt-20 p-6 text-white flex justify-center border border-b-2">
        <div className="w-full max-w-6xl">
          <h1 className="text-2xl text-black mb-10 text-center font-light">Trending Fashion</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
            {product.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
      <div className="pt-20 p-6 text-white flex justify-center border border-b-2">
        <div className="w-full max-w-6xl">
          <h1 className="text-2xl text-black mb-10 text-center font-light">Trending Gadgets</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
            {product.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

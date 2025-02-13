import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";
import TextCarousel from "../components/TextCarousel";
import { getProducts } from "../components/ProductsCall";

function HomePage() {

  const [allProducts, setAllProducts] = useState([])
  const [clothes, setClothes] = useState([])
  const [electronics, setElectronics] = useState([])
  const [clothesMen, setClothesMen] = useState([])
  const [clothesWomen, setClothesWomen] = useState([])

  useEffect(() => {

    const getProductsFunction = async () => {

      const AllProductsRes = await getProducts()
      const clothesMen = await getProducts("men")
      const clothesWomen = await getProducts("women")
      const electronicsRes = await getProducts("electronics")

      setClothes(clothesMen.data,clothesWomen.data)
      setClothesMen(clothesMen.data)
      setClothesWomen(clothesWomen.data)
      setElectronics(electronicsRes.data)
      setAllProducts(AllProductsRes.data)

    }

    getProductsFunction()
    
  },[])
  
  const token = localStorage.getItem("token")
  let username = localStorage.getItem("username")

  if (username) {
    username = username.charAt(0).toUpperCase() + username.slice(1);
  }

  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {

    const popupShown = sessionStorage.getItem("popupShown");

    if (username && !popupShown) {

      setShowPopup(true)

      sessionStorage.setItem("popupShown", "true")
      setTimeout(() => setShowPopup(false), 2000);
    }
  }, []);

  return (
    <div>
      <p className={`bg-white shadow-md rounded-full absolute z-20 my-4 right-1/2 translate-x-1/2 py-2 px-4 text-lg transition-all duration-500 ${showPopup ? "top-20 opacity-100" : "top-14 opacity-0 pointer-events-none"}`}>
        Welcome, {username}
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
            {clothes.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
      <div className="pt-20 p-6 text-white flex justify-center border border-b-2">
        <div className="w-full max-w-6xl">
          <h1 className="text-2xl text-black mb-10 text-center font-light">Trending Gadgets</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
            {electronics.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

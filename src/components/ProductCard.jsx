import { ArrowLeftRight, Heart, ShoppingCart } from "lucide-react";
import React, { useState } from "react";

const ProductCard = ({ image, name, price }) => {
  const [showItems, setShowItems] = useState(false);
  const [showButtonIcon, setShowButtonIcon] = useState(false);
  const [isFilled, setIsFilled] = useState(false)

  return (
    <div 
      onMouseEnter={() => setShowItems(true)} 
      onMouseLeave={() => setShowItems(false)}
      className="relative aspect-[4/6] w-full cursor-pointer overflow-hidden"
    >
      <div className="aspect-[4/5] w-full overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          src={image}
          alt={name}
        />
      </div>

      <p className="text-black font-light text-xs sm:text-xs md:text-base lg:text-base xl:text-base hover:text-cyan-500">{name}</p>
      <p className="text-black font-light text-xs sm:text-xs md:text-base lg:text-base xl:text-base">₹ {price}</p>

      <button 
        onMouseEnter={() => setShowButtonIcon(true)} 
        onMouseLeave={() => setShowButtonIcon(false)}
        className={`overflow-hidden text-black ${
          showButtonIcon ? "bg-lime-700" : "bg-lime-600"
        } p-2 w-28 h-10 rounded-full flex flex-col items-center justify-center absolute left-1/2 transform -translate-x-1/2 ${
          showItems ? "opacity-100 bottom-24" : "opacity-0 bottom-16"
        } transition-all duration-[.280s]`}
      >
        <p
          className={`absolute text-sm text-white font-light transform ${
            showButtonIcon ? "-translate-y-10" : ""
          } transition-transform duration-300`}
        >
          Add to Cart
        </p>
        <ShoppingCart
          strokeWidth={1}
          className={`text-white absolute transform ${
            showButtonIcon ? "" : "translate-y-10"
          } transition-transform duration-300`}
        />
      </button>

      <button
        className={`absolute top-2 bg-white text-black hover:bg-black hover:text-white rounded-full p-2 ${
          showItems || isFilled ? "opacity-100 right-2" : "opacity-0 -right-2"
        } 
        ${isFilled ? 'bg-red-500 text-white' : 'bg-white'}
        transition-all duration-500`}
        onClick={() => setIsFilled(!isFilled)}
      >
        <Heart 
          fill={isFilled? 'white': 'none'}
          size={18}
          strokeWidth={1} 
        />

      </button>
      <button
        className={`absolute top-12 bg-white text-black hover:bg-black hover:text-white rounded-full p-2 ${
          showItems ? "opacity-100 right-2" : "opacity-0 -right-3"
        } transition-all duration-300`}
      >
        <ArrowLeftRight 
          size={18}
          strokeWidth={1} 
        />
      </button>
    </div>
  );
};

export default ProductCard
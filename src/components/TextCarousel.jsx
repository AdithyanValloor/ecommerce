export default function InfiniteTextLoop() {
    const textItems = [
      "UPGRADE YOUR LIFESTYLE – THE FUTURE IS NOW!",
      "FLASH DEALS EVERY HOUR – DON’T MISS OUT!",
      "LUXURY WITHIN REACH – ELEVATE YOUR EVERYDAY!",
      "SMART GADGETS, SMARTER LIVING – SHOP NOW!",
      "NEW ARRIVALS DROPPING DAILY – STAY AHEAD!",
      "PREMIUM QUALITY, UNBEATABLE PRICES – INDULGE YOURSELF!",
    ];
  
    return (
      <div className="relative w-full bg-black overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {textItems.concat(textItems).map((text, i) => (
            <span key={i} className="flex items-center">
                <p className="text-white md:text-sm text-[9px] py-2 font-extralight tracking-widest mx-3">{text}</p>
                <span className="text-gray-400 text-xl opacity-50 mx-3">|</span>
            </span>
          ))}
        </div>
      </div>
    );
  }
  
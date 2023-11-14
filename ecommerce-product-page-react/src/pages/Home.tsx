import { IconContext } from "react-icons";
import { LuPlus, LuMinus, LuShoppingCart } from "react-icons/lu";
import { Carousel } from "../components/Carousel";

export const Home = () => {
  return (
    <main className="grid grid-rows-2 lg:gap-8 lg:mx-auto lg:my-4 lg:max-w-7xl h-5/6 lg:grid-rows-1 lg:grid-cols-2 text-neutral-700">
      <Carousel></Carousel>
      <section className="grid gap-1 px-10 py-4 lg:my-28">
        <p className="mt-auto font-bold tracking-widest text-orange-400 uppercase">Sneaker Company</p>
        <h1 className="text-4xl font-bold text-neutral-800 lg:text-5xl">Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
          they'll withstand everything the weather can offer.
        </p>
        <div className="flex items-center justify-between font-bold lg:flex-col lg:justify-start lg:items-start">
          <p className="flex items-center text-2xl lg:text-3xl">
            $125.00 <span className="px-2 ml-2 text-base text-orange-600 rounded-lg bg-orange-200/50">50%</span>
          </p>
          <p className="line-through text-neutral-400 lg:text-xl">$250.00</p>
        </div>
        <div className="grid gap-2 lg:grid-cols-3 lg:self-start">
          <IconContext.Provider value={{ className: "text-orange-600", size: "1.4rem" }}>
            <div className="flex items-center justify-between px-4 py-2 text-lg font-bold rounded-md bg-neutral-100">
              <button>
                <LuPlus></LuPlus>
              </button>
              <span>0</span>
              <button>
                <LuMinus></LuMinus>
              </button>
            </div>
            <button className="inline-flex items-center justify-center gap-4 py-3 text-white bg-orange-500 shadow-2xl rounded-xl shadow-orange-300/90 lg:col-span-2">
              <IconContext.Provider value={{ className: "text-white", size: "1.4rem" }}>
                <LuShoppingCart></LuShoppingCart>
              </IconContext.Provider>
              <span className="text-lg font-bold">Add to cart</span>
            </button>
          </IconContext.Provider>
        </div>
      </section>
    </main>
  );
};

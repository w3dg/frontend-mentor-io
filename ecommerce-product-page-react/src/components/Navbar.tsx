import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuShoppingCart, LuTrash2 } from "react-icons/lu";

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(() => {
    return window.innerWidth <= 860;
  });

  const [cartOpen, setCartOpen] = useState(false);
  const item = {
    name: "Fall Limited Edition Sneakers",
    price: 125,
    quantity: 3,
  };
  const [cartItems, setCartItems] = useState([item]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 860);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <IconContext.Provider value={{ className: "text-neutral-500", size: "1.75rem" }}>
      <nav className={"flex relative items-center justify-between w-full px-4 py-6 mx-auto border-b max-w-7xl"}>
        <div className="flex items-center gap-5">
          {isMobile ? <GiHamburgerMenu></GiHamburgerMenu> : <></>}
          <a href="/">
            <img src="/images/logo.svg" alt="Sneakers Logo" />
          </a>

          {!isMobile && (
            <>
              <ul className="flex items-stretch gap-4 px-2 mt-1 text-neutral-500">
                {["Collections", "Men", "Women", "About", "Contact"].map((link) => {
                  return (
                    <li key={link}>
                      <a href="#" className=" hover:text-neutral-800 hover:border-b-4 hover:border-amber-500">
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>

        <div className="flex items-center gap-8 ">
          <button onClick={() => setCartOpen((prev) => !prev)}>
            <LuShoppingCart></LuShoppingCart>
          </button>
          {cartOpen && (
            <div className="absolute h-56 px-6 py-3 overflow-auto bg-white rounded-md shadow-2xl shadow-neutral-700 inset-x-3 lg:inset-x-auto lg:right-3 top-24">
              <h2 className="py-2 mb-2 text-xl font-bold border-b-2 text-neutral-500">Cart</h2>
              {cartItems.length == 0 ? (
                <p className="mx-auto my-12 font-bold text-center text-neutral-500 w-fit">Your cart is empty.</p>
              ) : (
                <IconContext.Provider value={{ className: "text-neutral-400 text-xl" }}>
                  <ul className="my-2">
                    {cartItems.map((item) => {
                      return (
                        <article className="my-2 grid grid-cols-[4rem_1fr_2rem] items-center gap-4 text-neutral-500">
                          <img
                            src="images/image-product-1-thumbnail.jpg"
                            alt="Image Thumbnail"
                            className="w-12 h-12 rounded-md"
                          />
                          <div>
                            <p>{item.name}</p>
                            {item.price}x{item.quantity}=
                            <span className="font-bold text-neutral-800">${item.price * item.quantity}</span>
                          </div>
                          <button>
                            <LuTrash2></LuTrash2>
                          </button>
                        </article>
                      );
                    })}
                    <button className="w-full p-3 my-4 text-white bg-orange-500 rounded-md">Checkout</button>
                  </ul>
                </IconContext.Provider>
              )}
            </div>
          )}
          <div className="w-10 h-10 border-2 rounded-full hover:border-amber-500 hover:cursor-pointer">
            <img src="/images/image-avatar.png" alt="Avatar" />
          </div>
        </div>
      </nav>
    </IconContext.Provider>
  );
};

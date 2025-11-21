import { useState, useEffect } from "react";
import Input from "./components/Input";
import useCurrencyExchanger from "./hooks/useCurrencyInfo";
import "./index.css";
import img1 from "./public/img1.jpg";
import img2 from "./public/img2.jpg";
import img3 from "./public/img3.jpg";
import img4 from "./public/img4.jpg";
import img5 from "./public/img5.jpg";
import img6 from "./public/img6.jpg";
import img7 from "./public/img7.jpg";
import img8 from "./public/img8.jpg";
import img9 from "./public/img9.jpg";
import img10 from "./public/img10.jpg"; 


const App = () => {

  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const images = [img2, img10, img3, img4, img5, img6, img7, img8, img9, img1];

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    console.log(currentImgIndex);
    return () => clearInterval(interval);
      
  }, [] );



  const currencyInfo = useCurrencyExchanger(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  function convert() {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  const background = {
    backgroundImage: `url(${images[currentImgIndex]})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    transition: 'background-image 500ms ease-in-out',
  };

  return (
    <div className=" background font-roboto w-full h-screen flex justify-center items-center text-white" style={background}>
      <div className="w-fit border-2 border-none py-3 px-5 rounded-lg shadow-red-700 shadow-2xl backdrop-blur-sm ">
        <h2 className=" text-3xl text-center font-bold my-4">Currency Exchanger</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <Input
            labelname="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={() => setAmount(amount)}
            onAmountChange={(amount) => setAmount(amount)}
            selectCurrency={from}
          />
          <div className="flex w-full justify-center">
            <button
              onClick={swap}
              className="bg-red-800 px-4 my-1 py-3 text-3xl z-10  rounded-2xl cursor-pointer shadow-2xl shadow-black hover:opacity-90"
            >
              Swap
            </button>
          </div>
          <Input
            labelname="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(Currency) => setTo(Currency)}
            selectCurrency={to}
            amountdisable={true}
          />
          <button
          type="submit"
            className="bg-red-800 w-full mt-5  mb-4 py-5 text-3xl  rounded-2xl cursor-pointer shadow-2xl shadow-black hover:opacity-90"
            onClick={convert}
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;

import { useId } from "react";

const Input = (props) => {
  const {
    labelname,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountdisable = false,
    currencydisable = false,
  } = props;

  const lableId = useId();
  return (
    <div className=" flex justify-between border-3 border-black gap-6  py-3 px-5 rounded-2xl text-2xl  text-white shadow-black shadow-2xl backdrop-blur-sm">
      <div className="flex flex-col gap-5 ">
        <label htmlFor={lableId}>{labelname}</label>
        <input
          type="number"
          name="currencyinout"
          id={lableId}
          placeholder="Amount"
          disabled={amountdisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className="border-2 rounded-2xl px-3 py-2 text-2xl text-white bg-black"
        />
      </div>
      <div className="flex flex-col gap-5">
        <label htmlFor="currencyinout">Currency Type</label>
        <select
          value={selectCurrency}
          name="Currency"
          id="Currency"
          disabled={currencydisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className=" border-2 rounded-2xl px-3 py-2 text-2xl cursor-pointer text-white  bg-black"
        >
         { 
          currencyOptions.map((Currency) => 
          ( 
            <option key={Currency} value={Currency}>{Currency}</option>
          )       
        )
         }
        </select>
      </div>
    </div>
  );
};

export default Input;

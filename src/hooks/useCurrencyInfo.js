import { useState, useEffect } from "react";

function useCurrencyExchanger(currency){
    const [data, setData] = useState({});
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        .catch((err) => console.log(err))
        
        
    },[currency]);
    
    // console.log(data);        
    return data;
}

export default useCurrencyExchanger;
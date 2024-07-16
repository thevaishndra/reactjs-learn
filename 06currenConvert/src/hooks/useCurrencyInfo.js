import {useEffect, useState} from 'react'
/*designing custom hooks*/
function useCurrencyInfo(currency){
    const [data, setData] = useState({})/*if nothing is coming, then atleast, an empty object is coming*/
    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json')
        .then((res) => res.json())/*converting response to json as mainly apis are in string format*/
        .then((res) => setData(res[currency]))/*currency = key*/
        console.log(data);
    }, [currency])/*dependency array */
    return data;
}

export default useCurrencyInfo;/*returning full method*/
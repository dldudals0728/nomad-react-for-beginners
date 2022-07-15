import { useEffect, useState } from "react";
// api: api.coinpaprika.com/v1/tickers
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    // fetch: JS. json 파일을 가져온다??
    // console -> network 에서 request하는 것을 볼 수 있음(ticker)
    fetch("https://api.coinpaprika.com/v1/tickers") // [Unexpected token < in JSON at position 0] 에러: https:// 명시 혹은 application/json 명시를 통해 해결 가능
      .then((response) => response.json()) // response를 받아서 json으로 변환시켜 주고
      .then((json) => {
        setCoins(json);
        setLoading(false);
      }); // json을 받아서 coins에 입력.
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;

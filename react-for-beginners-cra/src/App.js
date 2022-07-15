import { useEffect, useState } from "react";
// api: api.coinpaprika.com/v1/tickers
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollers, setDollers] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState({});
  const onChange = (event) => setDollers(event.target.value);
  const btcChange = (event) => {
    console.log(event.target.selectedIndex);
    setSelectedCoin(coins[event.target.selectedIndex]);
    console.log(selectedCoin);
  };
  useEffect(() => {
    // fetch: JS. json 파일을 가져온다??
    // console -> network 에서 request하는 것을 볼 수 있음(ticker)
    fetch("https://api.coinpaprika.com/v1/tickers") // [Unexpected token < in JSON at position 0] 에러: https:// 명시 혹은 application/json 명시를 통해 해결 가능
      .then((response) => response.json()) // response를 받아서 json으로 변환시켜 주고
      .then((json) => {
        setCoins(json);
        setLoading(false);
        setSelectedCoin(json[0]);
        console.log(selectedCoin);
      }); // json을 받아서 coins에 입력.
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : null}
      input your dollers!
      <input
        onChange={onChange}
        //  component is changing an uncontrolled input to be controlled. error를 없애기 위해 value={ ~~~ || "" } 추가
        value={dollers || ""}
        type="number"
        placeholder="$$$$"
      />
      <br />
      <select onChange={btcChange}>
        {coins.map((coin) => (
          <option key={coin.id}>
            {coin.name} ({coin.symbol}): {coin.quotes.USD.price} BTC
          </option>
        ))}
      </select>
      <br />
      <strong>
        you can buy {selectedCoin.name}: {}BTC
      </strong>
    </div>
  );
}

export default App;

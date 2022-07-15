import { useEffect, useState } from "react";
// api: api.coinpaprika.com/v1/tickers
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollers, setDollers] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState(0);
  const onChange = (event) => setDollers(event.target.value);
  const btcChange = (event) => {
    console.log(event.target.selectedIndex);
    setSelectedCoin(parseInt(event.target.selectedIndex));
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          input your dollers!
          <input
            onChange={onChange}
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
            you can buy {coins[selectedCoin].name}:{" "}
            {dollers / coins[selectedCoin].quotes.USD.price}BTC
          </strong>
        </div>
      )}
    </div>
  );
}

export default App;

<script>
  let positions = [
    {
      id: "pos_48df8drw74sdf10dsdf",
      symbol: "DLR",
      price: "101.39",
      day_gain: "0.00",
      day_percent: "0.00",
      market_value: "2433.36",
      cost: "3067.04",
      cost_per_share: "127.79333",
      total_gain: "-633.68",
      total_gain_percent: "-20.66",
      quantity: "24",
      dividend_amount: "4.88",
      dividend_yield: "4.88",
      ex_dividend_date: "9/14/2022",
      p_e_ratio: "20.62"
    },
    {
      id: "pos_48df8drw74sd8vh7dfjl",
      symbol: "RKLB",
      price: "5.13",
      day_gain: "0.00",
      day_percent: "0.00",
      market_value: "3129.30",
      cost: "3027.69",
      cost_per_share: "4.96343",
      total_gain: "101.61",
      total_gain_percent: "3.36",
      quantity: "610",
      dividend_amount: "0.00",
      dividend_yield: "0.00",
      ex_dividend_date: "",
      p_e_ratio: ""
    },
    {
      id: "pos_48df8drw74sd8pqau7fb",
      symbol: "LMND",
      price: "23.34",
      day_gain: "0.00",
      day_percent: "0.00",
      market_value: "3617.70",
      cost: "3132.38",
      cost_per_share: "20.2089",
      total_gain: "485.32",
      total_gain_percent: "15.49",
      quantity: "155",
      dividend_amount: "0.00",
      dividend_yield: "0.00",
      ex_dividend_date: "",
      p_e_ratio: ""
    },
    {
      id: "pos_48df8drw74s7fbth1lC",
      symbol: "DE",
      price: "396.85",
      day_gain: "0.00",
      day_percent: "0.00",
      market_value: "8333.85",
      cost: "1766.94",
      cost_per_share: "84.14",
      total_gain: "6566.91",
      total_gain_percent: "371.65",
      quantity: "21",
      dividend_amount: "4.52",
      dividend_yield: "1.14",
      ex_dividend_date: "9/29/2022",
      p_e_ratio: "19.83"
    }
  ];

</script>

<table class="positions">
  <thead>
    <tr>
      <th>Symbol</th>
      <th>Price</th>
      <th>Day Gain</th>
      <th>Day Gain %</th>
      <th>Market Value</th>
      <th>Cost</th>
      <th>Cost per Share</th>
      <th>Total Gain</th>
      <th>Total Gain %</th>
      <th>Quantity</th>
      <th>Dividend Amount</th>
      <th>Dividend Yield</th>
      <th>Ex Dividend Date</th>
      <th>P/E Ratio</th>
    </tr>
  </thead>
  <tbody>
    {#each positions as p (p.id)}
      <tr class="position">
        <td>{p.symbol}</td>
        <td>{p.price}</td>
        <td class={p.day_gain.includes('-') ? 'loss' : 'gain'}>{p.day_gain}</td>
        <td class={p.day_gain.includes('-') ? 'loss' : 'gain'}>{p.day_percent}%</td>
        <td>{p.market_value}</td>
        <td>{p.cost}</td>
        <td>{p.cost_per_share}</td>
        <td class={p.total_gain.includes('-') ? 'loss' : 'gain'}>{p.total_gain}</td>
        <td class={p.total_gain_percent.includes('-') ? 'loss' : 'gain'}>{p.total_gain_percent}%</td>
        <td>{p.quantity}</td>
        <td>{p.dividend_amount}</td>
        <td>{p.dividend_yield}</td>
        <td>{p.ex_dividend_date === '' ? '-' : p.ex_dividend_date}</td>
        <td>{p.p_e_ratio}{p.p_e_ratio === '' ? '-' : 'x'}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    table-layout: auto;
    width: 100%;
  }
  thead tr {
    height: 30px;
    line-height: 18px;
  }
  thead th {
    vertical-align: top;
    background-color: rgba(250, 250, 250, .1);
    border-radius: 2px
    /* border-bottom: 1px solid var(--mosh-border-color); */
  }
  th, td {
    min-width: 70px;
    padding-right: 4px;
    text-align: right;
  }
  tbody tr:nth-child(even) {
    background-color: rgba(250, 250, 250, .05);
  }
  .gain {
    color: var(--mosh-primary-color)
  }
  .loss {
    color: var(--mosh-danger-color)
  }
</style>
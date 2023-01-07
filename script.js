
async function fetchData() {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
  const response = await fetch(url);
  // console.log(response);
  const data = await response.json();
  return data;
}

async function callFetchData() {
  const responseData = await fetchData();
  // console.log(responseData);
  let tableData = "";

  responseData.map((values) => {
    tableData += `<tr>
     
    <td width="25px"><img src="${values.image}"></td>
                <td width="200px">${values.name}</td>
                <td width="180px">${values.symbol}</td>
                <td width="180px">$${values.current_price}</td>
                <td width="200px">$${values.total_volume}</td>
               <td  width="180px"id=data class="${
                 values.price_change_percentage_24h > 0
                   ? "positiveValues"
                   : "negativeValues"
               }">${values.price_change_percentage_24h}%</td>
        <td>Mkt Cap : $${values.market_cap}</td>
              </tr>`;
  });
  document.getElementById("table_body").innerHTML = tableData;
}
callFetchData();

document.addEventListener('DOMContentLoaded', ()=>{
   
    
        console.log(tickerSymbolObj)
    const stockForm = document.querySelector('#stock-search')
    
    stockForm.addEventListener('submit', (e) => {
e.preventDefault()

console.log(e.target.querySelector('#mySearch').value)
stockLookUp(e.target.querySelector('#mySearch').value)  
stockForm.reset() 
},)

},)




function stockLookUp(tickerSymb) {
   
       if (tickerSymbolObj.hasOwnProperty(tickerSymb)) {

           console.log(tickerSymb)
   fetch(`https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers/${tickerSymb}?apiKey=HRJaobcNSX77koktspcX6RhjjQ1aw4W5`)
    .then(response => response.json())
    .then(data => {
    const { ticker: {day}, ticker: {min}, ticker: {prevDay}} = data
    console.log(day)
    console.log(min)
    console.log(prevDay)
    function renderStockTable() {
        const table = document.getElementById('stock-table')
        const tableRow = document.createElement("tr")
        tableRow.classList.add('style-new-row')
        const tableHead = document.createElement('th')
        const tableBody = document.createElement('tb')
        const closingPrice = document.createElement('td')
        const priceHigh = document.createElement('td')
        const priceLow = document.createElement('td')
        const openPrice = document.createElement('td')
        const tradingVol = document.createElement('td')
        const weightAveragePrice = document.createElement('td')
            tableHead.textContent = `${tickerSymb}`
            closingPrice.textContent = `${day.c}`
            priceHigh.textContent = `${day.h}`
            priceLow.textContent = `${day.l}`
            openPrice.textContent = `${day.o}`      
            tradingVol.textContent = `${day.v}`
            weightAveragePrice.textContent = `${day.vw}`          
            tableRow.append(tableHead, closingPrice, priceHigh, priceLow, openPrice, tradingVol, weightAveragePrice)
        table.append(tableRow)
      }
      renderStockTable()
    }
    //
    )
    .catch(err => console.log(err))  
    
       }
    //    else {   
    //   alert("Not a valid ticker symbol!")
    //    }}
       
   
        
   

 
}

function renderStockTable() {
  const table = document.getElementById('stock-table')
  const tableRow = document.createElement("tr")
  const tableHead = document.createElement('th')
  const tableBody = document.createElement('tb')
  const closingPrice = document.createElement('td')
  closingPrice.textContent = `${day.c}`
  const priceHigh = document.createElement('td')
  const priceLow = document.createElement('td')
  const openPrice = document.createElement('td')
  const tradingVol = document.createElement('td')
  const weightAveragePrice = document.createElement('td')
  tableRow.append(tableHead, closingPrice, priceHigh, priceLow, openPrice, tradingVol, weightAveragePrice)
  
  table.append(tableRow)

  
  


}






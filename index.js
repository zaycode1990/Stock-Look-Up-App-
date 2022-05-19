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
    renderStockTable(tickerSymb,day)
  }
    //
    )
    .catch(err => console.log(err))  
    
       }
}

function renderStockTable(ticker,{c, h, l, o, v, vw}) {
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
    const deleteRow = document.createElement('td')
    const weightAveragePrice = document.createElement('td')
    const deleteBtn = document.createElement('button')
      deleteBtn.type = "button"
      tableHead.textContent = `${ticker}`
      closingPrice.textContent = `${c}`
      priceHigh.textContent = `${h}`
      priceLow.textContent = `${l}`
      openPrice.textContent = `${o}`      
      tradingVol.textContent = `${v}`
      weightAveragePrice.textContent = `${vw}`  
      tableRow.append(tableHead, closingPrice, priceHigh, priceLow, openPrice, tradingVol, weightAveragePrice, deleteRow)
      table.append(tableRow)
      deleteRow.append(deleteBtn)
      deleteBtn.innerText = "Delete"
      deleteBtn.addEventListener('click', (e) => e.target.parentNode.parentNode.remove())
    }
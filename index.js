document.addEventListener('DOMContentLoaded', ()=>{
   
  const stockForm = document.querySelector('#stock-search')

 const colorBlindBtn = document.createElement('button')
  const themeBtn = document.createElement('button')
  colorBlindBtn.type = "button"
  colorBlindBtn. textContent = "Colorblind Mode"
  themeBtn.type = "button"
  themeBtn.textContent = "Switch Theme"
  stockForm.append(themeBtn, colorBlindBtn)
  themeBtn.classList.add('theme-button-style')
    themeBtn.addEventListener('click', () =>{
      document.querySelector('body').classList.toggle('dark')
    })

    colorBlindBtn.addEventListener('click', ()=>{
    document.querySelector('table').classList.toggle('color-blind')
    })
        console.log(tickerSymbolObj)
        
        
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
    closingPrice.classList.add("cp-style")
    const priceHigh = document.createElement('td')
    priceHigh.classList.add("ph-style")
    const priceLow = document.createElement('td')
    priceLow.classList.add("pl-style")
    const openPrice = document.createElement('td')
    openPrice.classList.add("op-style")
    const tradingVol = document.createElement('td')
    tradingVol.classList.add("tv-style")
    const deleteRow = document.createElement('td')
    
    const weightAveragePrice = document.createElement('td')
    weightAveragePrice.classList.add("av-style")
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
      deleteBtn.classList.add('illuminate')
      deleteBtn.addEventListener('click', (e) => e.target.parentNode.parentNode.remove())
      

    }
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const[quotes,setQuote]=useState([])
useEffect(()=>{
fetch("http://localhost:4000/")
.then(resp=>resp.json())
.then(quoteFromServer=>setQuote(quoteFromServer))
},[])
  return (
    <div className="App">
     {quotes.map(quote => (
      <div>
      <p>{quote.quote}</p>
      <h1>{quote.name}</h1>
      </div>
      ))}
    </div>
  )
}

export default App

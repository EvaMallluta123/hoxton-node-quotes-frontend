import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Quotes } from './Components/Quotes'
import { QuotesDetails } from './Components/QuotesDetails'

  export type Quote={
  id: number,
  name: string,
  quote:string,
  age:number;
  image:string
}

function App() {
  const[quotes,setQuote]=useState<Quote[]>([])
useEffect(()=>{
fetch("http://localhost:4000/home")
.then(resp=>resp.json())
.then(quotesFromServer=>setQuote(quotesFromServer))
},[])
  return (
    <div className="App">
      <>
      <main>
        <Routes>

      <Route path="/home" element={<Quotes quotes={quotes}/>}/>
      <Route path="/home/:id" element={<QuotesDetails />}/>
      </Routes>
      </main>
      </>
    </div>
  )
}

export default App

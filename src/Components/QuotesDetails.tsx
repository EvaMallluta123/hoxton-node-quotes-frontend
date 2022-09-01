import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Quotes } from "../App"

export function QuotesDetails(){
        const[quote, setQuote]=useState<Quotes | null>(null)
        const params = useParams()
    
        useEffect(()=>{
            fetch(`http://localhost:4000/home/${params.id}`)
            .then(resp=>resp.json())
            .then(quoteFromServer=>setQuote(quoteFromServer))
        }, [])
    return(
        <div className="quote-detail">
        <h3>{quote?.name}</h3>
        <img  src={quote?.image} alt={quote?.name} width="200"/>
        <p>{quote?.name}</p>
        <p>{ quote?.quote}</p>
        </div>

    )
}



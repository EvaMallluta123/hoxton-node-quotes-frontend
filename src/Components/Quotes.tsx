import { Link } from "react-router-dom";

export function Quotes({quotes}){
    return(
        <div> 
        <h1>My favorite quotes</h1>
      
        {quotes.map(quote => (
       <Link to={`/home/${quote.id}`}>
         <div className='quotes'>
         <p>{quote.quote}</p>
         <h3>{quote.name}</h3>
         </div>
         </Link>
         ))}
         </div>
    )
}
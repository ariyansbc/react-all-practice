import React, { Component,useState,useEffect } from 'react'

export default class UseEffect extends Component {
    render() {
        return (
            <div>
              <UseEffectTry />  
            </div>
        )
    }
}

let UseEffectTry = () => {

    const [countries, setCountries] = useState([])

    useEffect(()=>{
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res=> res.json())
        .then(data => setCountries(data))
    },[])

    console.log(countries)
    return (
      <div>
          <h1>Learning useEffect</h1>
          {
             countries.map(country=> <h2>{country.name}</h2>) 
          }

         
      </div>
      
    );
}
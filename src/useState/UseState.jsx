import React, { Component,useState } from 'react'
export default class UseState extends Component {
    
    render() {
      
        return (
            <div>
               <Counter />
            </div>
        )
    }
}

function Counter() {
    const [count,setCount] = useState(0)
    return(
        <div className="counter">
            <h1>count: {count}</h1>
            <button onClick={()=> setCount(count+1)} >increase</button>

        </div>
    )
}
import React, { Component } from 'react'

export default class Props extends Component {

    render() {
        
        //heros array
        const heros = ['Aen','robert','peter','parker','ron']
        const titles = ['Action hero','Romantic hero','comedy hero','drama hero']

        return (
            
            <div>
                {
                   heros.map(hr => <Heros hero={hr} />)
                }
            
               {/* <Heros name={heros[0]}  title={titles[0]} />
               <Heros name={heros[1]} title={titles[1]} />
               <Heros name={heros[2]} title={titles[1]} /> */}
            </div>
        )
    }
}


//creating c component name Heros

function Heros(props) {

    const bangaladeshiHeros = ['sakib khan','rubel','manna','kanchan','jashim','bapparaz']
//    const [name,title] = props.hero;
    return(
        <div>
            <h1>Name of hero: {props.hero}</h1>
            <h2>Title:{props.title}</h2>
        </div>
    )
}
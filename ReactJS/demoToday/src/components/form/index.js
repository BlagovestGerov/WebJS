import React, {Component} from 'react'
import PokemonField from './formFields/PokemonField'
import Input from './formFields/Input'

class Index extends Component{
    constructor(){
        super()

        this.state={
            pokemonName:'',
            pokemonImg:'',
            pokemonInfo:''
        }
    }

    createPokemon(e){
        e.preventDefault()
        let payload = {
            pokemonName: this.state.pokemonName,
            pokemonImg:this.state.pokemonImg,
            pokemonInfo:this.state.pokemonInfo
        }
        this.createPokemonToServer(payload)
    }

    createPokemonToServer(payload){
        fetch('http://localhost:5000/pokedex/create', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          })
            .then(res => {
              return res.json()
            })
            .then(d => {
                
            })
    }

    render(){
        let validName = this.state.pokemonName !==''
        let validImg= this.state.pokemonImg.startsWith('http')
        

        return(
            <form onSubmit={this.createPokemon.bind(this)}>
                <fieldset className='App'>
                    <Input
                    data='pokeName'
                    name='Pokemon Name'
                    func={e=>{
                        this.setState({pokemonName: e.target.value})
                    }}
                    valid={validName}
                    />
                    <Input
                    data='pokeImage'
                    name='Pokemon image'
                    func={e=>{
                        this.setState({pokemonImg: e.target.value})
                    }}
                    valid={validImg}
                    />
                    <Input
                    data='pokeBio'
                    name='Pokemon Info'
                    func={e=>{
                        this.setState({pokemonInfo: e.target.valu})
                    }}
                    valid
                    />
                    <input
                    style={({ "display": validName && validImg === true ? '' : 'none' })}
                    type='submit'
                    value='Create Pokemon'
                    />
                    </fieldset>

                    {/* <div style={({display: 'inline-block'})}>
                        {
                            this.state.data.pokemonColection.map((x,index)=>{
                                return <PokemonField key={index} data={x} />
                            })
                        }
                        </div> */}
                </form>
        )
    }
}

export default Index
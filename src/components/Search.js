import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:"",result:[],
         }
    }
    handleClick = (e) =>
  {
      const Api='f1c23fa4'
      const Url = `http://www.omdbapi.com/?apikey=${Api}&s=${this.state.name}`
      axios.get(Url)
      .then(response =>
        {
          console.log(response)
           console.log(response.data)
           console.log(response.data.Search)
           console.log(response.data.totalResults)

          this.setState({
            result:response.data.Search
          })
        })
          .catch(err => console.log("err"))
    }
    handleChange =(e)=>
    {
        this.setState({
            name:e.target.value
        })
    }
    render() {
      const mystyle={width : 350, height: 35, fontSize:30}
      const Anurag = {width : 150, height: 35, fontSize:30}
      return (
                
                <div>
                    <input style={mystyle} type='text' placeholder="Search for movies..." onChange={this.handleChange}/>
                    <p>{this.state.name}</p>
                    <button style = {Anurag} type='sumbit' onClick={this.handleClick} >submit</button>
                    
                    {this.state.result.map(movie=>
                    <Link to={`/${movie.imdbID}`}>
                        <div>
                            <p>{movie.Title}</p>
                            <img src={movie.Poster}></img>
                            </div></Link>)}
                </div>
      )
    }
  }

export default Search
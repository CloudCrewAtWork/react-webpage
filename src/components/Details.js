import React from  'react'
import axios from 'axios'
class Details extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            result:[],
         }
        }
    componentDidMount()
    {
        const {imdbID}=this.props.match.params;
        const Api='f1c23fa4'
        const Url = `http://www.omdbapi.com/?apikey=${Api}&i=${imdbID}`
        axios.get(Url)
        .then(response =>
          {
            console.log(response)
             console.log(response.data)
            this.setState({
              result:response.data
            })
          })
    }
    render() {
        const{
            Poster,
            Title,
            
Year,
Rated, 
Released, 
Runtime,
Genre,
Director,
Writer, 
Actors,
Plot, 
Country,
Awards
        }=this.state.result;
        return (
        <div>
            
                    
    <p>{Title}</p>
    <img src={Poster} ></img>
    <p>
    Year    :  {Year}<br></br>
    Rated   :  {Rated}<br></br> 
    Released:  {Released}<br></br>
    Runtime :  {Runtime}<br></br>
    Genre   :  {Genre}<br></br>

    </p>
    
        </div>
              
        )
    }

}
export default Details
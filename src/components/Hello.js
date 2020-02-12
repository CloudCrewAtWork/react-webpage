import React from'react'
const Hello = () =>{
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello Vishwas</h1>
    //     </div>
         
    // )
    return React.createElement(
        'div',
        {id:'hello', className:'dummyClass'},
        React.createElement('h1',null,'Welcome to the web page!'))

}
export default Hello
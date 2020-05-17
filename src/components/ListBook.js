import React, { useState, Component } from 'react';

function ListBook({booksList}) {

    console.log(booksList);
    const list =booksList
    return(
        <div>
        {list.map (el => (
            <div className="bookInfo">
                <h3>{el.title}</h3>
                <h3>{el.author}</h3>
                <h3>{el.date}</h3>
            </div>
          ))}
          
         
        </div>
    )
    
}
export default ListBook;
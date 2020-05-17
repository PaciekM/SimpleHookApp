import React, { useState, Component } from 'react';

function AddBook({change})
{
    const [name, setName] = useState();
    const [author, setAuthor] = useState();
    const [date, setDate] = useState();

    const ye = () =>
    {
        const data = { title:"yeah",author:"boy",date:"1998"}
        var datas = new FormData();
        datas.append("key",data);
        fetch('http://localhost:3001/books' , {
            method:'POST',
            headers: { 'Accept': 'application/json, text/plain, */*','Content-Type':'application/json'},
            body: JSON.stringify(datas)
    }) 
    }
    return(
        <div className ="add">
            <input id ="name" placeholder="Nazwa książki" onChange={ (ev) => setName(ev.target.value)}></input>
            <input id ="author" placeholder="Autor książki"  onChange={ (ev) => setAuthor(ev.target.value)}></input>
            <input id ="date" placeholder="Rok wydania"  onChange={ (ev) => setDate(ev.target.value)}></input>
            <button onClick={ye}>Dodaj</button>
        </div>
    )
}

export default AddBook;
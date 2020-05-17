import React, { useState, useEffect } from 'react';
import './App.css';
import AddBook from './components/AddBook'
import ListBook from './components/ListBook'


function App() {
  const [list, setList] = useState([]);
  const [change, setChange] = useState(0)
  const fetchData = async () => {
    const res = await fetch("http://localhost:3001/books");
    const book = await res.json();
    setList(book)
    console.log(book);
  }
  useEffect(() =>
  {
    fetchData();
    console.log(list);
  }, [change]
 )
  return (
    <div className="App">
        <h2>Simple book management with hooks</h2>
        <div className="addBook">
          <AddBook update={change}></AddBook>
          <ListBook booksList={list} update={change} ></ListBook>
          
        </div>
    </div>
  );
}

export default App;

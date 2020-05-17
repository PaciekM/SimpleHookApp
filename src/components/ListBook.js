import React, { useState, Component, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
function ListBook({booksList}) {
    const [change, setChange] = useState(0)
    console.log(booksList);
    const list =booksList
    const [lista , setLista] = useState(booksList)
    console.log(lista);
    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: "gray",
          color: theme.palette.common.white,
          fontWeight: "bold",
        },
        body: {
          fontSize: 15,
            fontWeight:"bold"
        },
      }))(TableCell);
      const useStyles = makeStyles({
        table: {
          minWidth: 500,
          border: "2px solid black"
        },
      });
    const classes= useStyles();
    const test = (ev) =>
    {
        console.log(ev);
        fetch('http://localhost:3001/books/'+ev , {
            method: 'DELETE',
            headers: {
                
               },
        }).then(res => res.json())
        .then(res => console.log(res))
    }
    useEffect( () =>
    {
        console.log('cyk');
    })
    return(
        <div className="table">
        <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nazwa książki</StyledTableCell>
            <StyledTableCell>Autor</StyledTableCell>
            <StyledTableCell>Rok wydania</StyledTableCell>
            <StyledTableCell>Akcje</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((element) => (
            <TableRow key={element.title}>
              <StyledTableCell component="th" scope="row">
                {element.title}
              </StyledTableCell>
              <StyledTableCell>{element.author}</StyledTableCell>
              <StyledTableCell>{element.date}</StyledTableCell>
              <StyledTableCell onClick={(ev) => test(element.id)}>Usuń</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    )
    
}
export default ListBook;
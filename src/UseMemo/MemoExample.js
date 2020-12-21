import React, { useState, useMemo, useCallback, useEffect } from 'react';
import axios from 'axios';
import Input from '@material-ui/core/Input'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';


const useStyles = makeStyles({
    table: {
        minWidth: 650
    },
});


const filter = (users, query) => {
    return users.filter(user => user.name.toLowerCase().includes(query))
}

const UserList = ({ users, query }) => {
    //quando for chamar o filter chamar o useMemo executando quando o users/query mudar
    const filtered = useMemo(() => filter(users, query), [users, query])
    const classes = useStyles();

    const renderTableData = () => {
        return (
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Telefone</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filtered.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.email}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.phone}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }

    return (
        renderTableData()
    )
}

export default function UseMemo() {
    const [count, setCount] = useState(0)
    const [query, setQuery] = useState('')
    const [users, setUsers] = useState([])


    //colocar o useCallback faz com que a função nao entre em loop no useEfeect
    const getUsers = useCallback(async () => {
        //caso o https esteja fora importar o arquivo useMemoExample.js
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/')
        setUsers(data)
    }, [])

    useEffect(() => {
        getUsers()
    }, [getUsers])

    return (
        <div className="simpleMemoContainer">
            <Input type="text" placeholder="Pesquise pelo nome" style={{ marginLeft: '15px' }} onChange={ev => setQuery(ev.target.value)} />
            <UserList users={users} query={query} />
        </div>
    )
}

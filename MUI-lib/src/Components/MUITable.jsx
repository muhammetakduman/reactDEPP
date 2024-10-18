import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function MUITable() {

    const user = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@doe.com',
            phone: '1234567890'

        },
        {
            id: 2,
            name: 'MAMİCAN',
            email: 'jane@doe.com',
            phone: '0987654321'
        },
        {
            id: 3,
            name: 'Alice Doe',
            email: 'alice@doe.com',
            phone: '9876543210'
        }


    ]
    return (
        <div>
            <Table sx={{ width: '100vh', padding: '100px' }}>
                <TableHead>
                    <TableRow>
                        <TableCell align='right'>KULLANICILAR</TableCell>
                        <TableCell align='right'>KULLANICI ID</TableCell>
                        <TableCell align='right'>EMAİL</TableCell>
                        <TableCell align='right'>TELEFON</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {user.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell align='right'>{row.name}</TableCell>
                            <TableCell align='right'>{row.id}</TableCell>
                            <TableCell align='right'>{row.email}</TableCell>
                            <TableCell align='right'>{row.phone}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>

                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default MUITable
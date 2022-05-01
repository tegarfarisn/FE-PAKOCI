import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import {Card, CardHeader, Divider, Grid} from '@material-ui/core';

import {gridSpacing} from '../../../../store/constant';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    table: {
        minWidth: 350,
        fontSize:30
    }
});

function createData(no,name, nip, jabatan, grade, jenjang) {
    return {no,name, nip, jabatan, grade, jenjang};
}

const rows = [
    createData(1,'Ujang Subagja', 1234567890, 'SENIOR SPECIALIST II PEMBELAJARAN PENDIDIKAN, PELATIHAN DAN SERTIFIKASI KOMPENTENSI.', 24, 4.0,3.0),
    createData(2,'Amos Pasalli', 1234567890, "SENIOR MANAGER NIAGA DAN PELAYANAN PELANGGAN.", 37, 4.3,4.0),
    createData(3,'Tri Budi Dermawan', 1234567890, "MANAGER UNIT PELAKSANA PENGENDALIAN PEMBANGKITAN PANDAN.", 24, 6.0,5.0),
    createData(4,'Cupcake', 1234567890, 3.7, 67, 4.3,2.0),
    createData(5,'Gingerbread', 1234567890, 16.0, 49, 3.9,5.0)
];

export default function TableBasic() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Card>
                        
                        <Divider />
                        <TableContainer>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell width={20}>No</TableCell>
                                        <TableCell >Nama&nbsp;</TableCell>
                                        <TableCell align="center" width={10}>NIP&nbsp;</TableCell>
                                        <TableCell align="center">Jabatan&nbsp;</TableCell>
                                        <TableCell align="center">Grade&nbsp;</TableCell>
                                        <TableCell align="center">Jenjang&nbsp;</TableCell>
                                        <TableCell align="center">Edit&nbsp;</TableCell>
                                       
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.no} >
                                            <TableCell component="th" scope="row">
                                                {row.no}
                                            </TableCell>
                                            <TableCell align="left">{row.name}</TableCell>
                                            <TableCell align="center">{row.nip}</TableCell>
                                            <TableCell align="left">{row.jabatan}</TableCell>
                                            <TableCell align="center">{row.grade}</TableCell>
                                            <TableCell align="center">{row.jenjang}</TableCell>
                                            <TableCell align="center"></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

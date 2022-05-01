import React from 'react';
import {Card, CardContent, CardHeader, Divider, Grid, Typography} from '@material-ui/core';
import TableBasic from '../forms/tables/TableBasic';

const dataPeserta = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Card>
                    <CardHeader title={<Typography variant="h5">Tambah Data Peserta</Typography>} />
                    <Divider />
                    <TableBasic/>
                </Card>
            </Grid>
        </Grid>
    );
};

export default dataPeserta;

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function NutritionTable(props) {
    const { nutrients } = props;

    return (
        <TableContainer component={Paper}>
            <Table aria-label="nutrition table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nutrient</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right">Unit</TableCell>
                        <TableCell align="right">% Daily Needs</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {nutrients.map((nutrient) => (
                        <TableRow key={nutrient.name}>
                            <TableCell component="th" scope="row">
                                {nutrient.name}
                            </TableCell>
                            <TableCell align="right">{nutrient.amount}</TableCell>
                            <TableCell align="right">{nutrient.unit}</TableCell>
                            <TableCell align="right">{nutrient.percentOfDailyNeeds}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

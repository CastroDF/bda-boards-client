import React, { useEffect, useState } from "react";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody'
import TableHead from '@mui/material/TableHead'
import Axios from "axios";

const Login = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      const response = await Axios.get("http://localhost:5000/students",
        { headers: { "Access-Control-Allow-Origin": "*" } })
      setStudents(response.data.data)
    }
    getStudents();
  }, [setStudents]);

  return (
    <Table>
      <TableHead>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell component="th" scope="row">
            Nombre
          </TableCell>
          <TableCell>Apellido</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>1er Examen</TableCell>
          <TableCell>2do Examen</TableCell>
          <TableCell>3er Examen</TableCell>
          <TableCell>Situación</TableCell>
        </TableRow>

      </TableHead>
      <TableBody>
        {
          students.map(student => {
            const { first_name, last_name, email, first_exam, second_exam, third_exam, id } = student;
            const promedio = (first_exam + second_exam + third_exam) / 3;
            const Situación = () => {
              if (promedio <= 3) {
                return <div style={{ color: "red" }}>{promedio.toFixed(2)}</div>
              }
              if (promedio <= 6) {
                return <div style={{ color: "orange" }}>{promedio.toFixed(2)}</div>
              }
              if (promedio <= 10) {
                return <div style={{ color: "green" }}>{promedio.toFixed(2)}</div>
              }
              return <div />
            }

            return (<TableRow key={id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {first_name}
              </TableCell>
              <TableCell>{last_name}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>{first_exam}</TableCell>
              <TableCell>{second_exam}</TableCell>
              <TableCell>{third_exam}</TableCell>
              <TableCell >
                <Situación />
              </TableCell>
            </TableRow>)
          })
        }
      </TableBody>
    </Table>
  );
};

export default Login;

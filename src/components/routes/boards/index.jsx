import React, { useEffect, useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import LinearProgress from "@mui/material/LinearProgress";
import Axios from "axios";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      try {
        setIsLoading(true);
        const response = await Axios.get("students", {
          baseURL: process.env.REACT_APP_BACKEND_URL_PORT,
          headers: { "Access-Control-Allow-Origin": "*" },
        });
        setStudents(response.data.data);
        setIsError(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getStudents();
  }, [setStudents]);

  if (isLoading) return <LinearProgress color="success" />;

  if (isError) return <p>There was an error</p>;

  return (
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell component="th" scope="row">
            Nombre
          </TableCell>
          <TableCell>Apellido</TableCell>
          {/* <TableCell>Email</TableCell> */}
          <TableCell align="center">Examen 1</TableCell>
          <TableCell align="center">Examen 2</TableCell>
          <TableCell align="center">Examen 3</TableCell>
          <TableCell align="center">Situación</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {students.map((student) => {
          const {
            first_name,
            last_name,
            email,
            first_exam,
            second_exam,
            third_exam,
            id,
          } = student;
          const promedio = (first_exam + second_exam + third_exam) / 3;
          const Situación = () => {
            if (promedio <= 3) {
              return <div style={{ color: "red" }}>{promedio.toFixed(2)}</div>;
            }
            if (promedio <= 6) {
              return (
                <div style={{ color: "orange" }}>{promedio.toFixed(2)}</div>
              );
            }
            if (promedio <= 10) {
              return (
                <div style={{ color: "green" }}>{promedio.toFixed(2)}</div>
              );
            }
            return <div />;
          };

          return (
            <TableRow
              key={id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {first_name}
              </TableCell>
              <TableCell>{last_name}</TableCell>
              {/* <TableCell>{email}</TableCell> */}
              <TableCell align="center">{first_exam}</TableCell>
              <TableCell align="center">{second_exam}</TableCell>
              <TableCell align="center">{third_exam}</TableCell>
              <TableCell align="center">
                <Situación />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default Login;

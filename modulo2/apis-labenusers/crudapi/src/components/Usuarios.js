import React from "react";
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from "react-router-dom";
import avatar from './avatar-svgrepo-com.svg'





export default class Usuarios extends React.Component {

    state = {
        usuarios: []
    }

    componentDidMount(){
        this.pegarUsuarios( )
    }
    

    pegarUsuarios = () =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.get(url,{
        headers: {
            Authorization: "Pedro-Acciainoli-Vaughan"
        }
    })
    .then((res) => {
        this.setState({usuarios: res.data})
    })
        .catch((err) => {
            alert("Error")
        })
}
    


    render() {



        const listaUsuarios = this.state.usuarios.map((user) => {

            return (
                <TableRow key={user.id}>
                <TableCell align="right">{user.id}</TableCell>
                <TableCell align="center">
                  <Box display="flex" justifyContent="center">
                    <Avatar src={avatar} />
                  </Box>
                </TableCell>
                <TableCell align="left">{user.name}</TableCell>
                <TableCell align="center">
                  <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button>Editar</Button>
                    <Button>Deletar</Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>

        )
    } )


  return (

    <div>
      <Container  maxWidth="lg">    
        <Paper>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                USUARIOS
              </Typography>
            </Box>
            <Box>
              <Link to="/criar">
                <Button variant="contained" color="primary">
                  Criar
                </Button>
              </Link>
            </Box>
          </Box>
          <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="center">Avatar</TableCell>
                <TableCell align="left">Nome</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
             {listaUsuarios}
            </TableBody>
          </Table>
        </TableContainer>
        </Paper>
      </Container>
    </div>
    
  );
}
}

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


const escolaridades = [
    {
      id: '1',
      tipo: 'Ensino Médio Completo',
    },
    {
      id: '2',
      tipo: 'Ensino Médio Incompleto',
    },
    {
      id: '3',
      tipo: 'Ensino Superior Completo',
    },
    {
      id: '4',
      tipo: 'Ensino Superior Incompleto',
    },
  ];


export default function DadosGerais() {

  const [escolaridade, setEscolaridade] = React.useState('1');

  const tratarAlteracao = (event) => {
    setEscolaridade(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6">
      ETAPA 1 - DADOS GERAIS
      </Typography>
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <TextField
            required
            id="nome"
            name="nome"
            label="Nome"
            fullWidth
            helperText="Digite seu nome completo"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="idade"
            name="idade"
            label="Idade"
            fullWidth
            helperText="Digite sua idade atual"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="E-mail"
            fullWidth
            helperText="Digite seu e-mail"
            type="email"
            variant="standard"
          />
        </Grid>


      

        <Grid item xs={12} >
        
          <TextField
            
            id="outlined-select-currency"
            select
            label="Escolha"
            value={escolaridade}
            onChange={tratarAlteracao}
            helperText="Qual a sua escolaridade?"
          >


            {escolaridades.map((opcao) => (
            <MenuItem key={opcao.id} value={opcao.id}>
              {opcao.tipo}
            </MenuItem>
          ))}
          

            </TextField>
        </Grid>

       
      </Grid>
    </React.Fragment>
  );
}
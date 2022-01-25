import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


const tipoTecnico = [
    {
      id: '1',
      tipo: 'Nenhum',
    },
    {
      id: '2',
      tipo: 'Curso Técnico',
    },
    {
      id: '3',
      tipo: 'Curso de Inglês',
    }
  ];


export default function InfosEnsino() {

  const [tecnico, settecnico] = React.useState('1');

  const tratarAlteracao = (event) => {
    settecnico(event.target.value);
  };


  return (
    <React.Fragment>
      <Typography variant="h6">
      ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO
      </Typography>
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <TextField
            required
            id="motivo"
            name="motivo"
            label="Motivo"
            fullWidth
            helperText="Por que você não terminou um curso de graduação"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} >
        
          <TextField
            
            id="outlined-select-currency"
            select
            label="curso"
            value={tecnico}
            onChange={tratarAlteracao}
            helperText="Você fez algum curso complementar?"
          >


            {tipoTecnico.map((opcao) => (
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
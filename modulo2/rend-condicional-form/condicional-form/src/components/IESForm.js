import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';



export default function IESForm() {

  return (
    <React.Fragment>
      <Typography variant="h6">
      ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR
      </Typography>

      <Grid container spacing={3}>

        <Grid item xs={12}>
          <TextField
            required
            id="nome"
            name="nome"
            label="Curso"
            fullWidth
            helperText="Digite seu curso atual"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="idade"
            name="idade"
            label="Istituto de Ensino Superior"
            fullWidth
            helperText="Digite o nome da sua IES"
            variant="standard"
          />
        </Grid>

       
       
      </Grid>
    </React.Fragment>
  );
}
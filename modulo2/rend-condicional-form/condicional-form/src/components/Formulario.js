import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DadosGerais from './DadosGerais';
import IESForm from './IESForm';
import InfosEnsino from './InfosEnsino';



const passoss = ['Dados Gerais', 'Informações do Ensino Superior', 'Informações Gerais do Ensino'];

function getpassosContent(passos) {
  switch (passos) {
    case 0:
      return <DadosGerais />;
    case 1:
      return <IESForm />;
    case 2:
      return <InfosEnsino />;
    default:
      throw new Error('Erro ao concluir');
  }
}


const temalabenu = createTheme({
    palette: {
      primary: {
        light: '#ffe97d',
        main: '#ffb74d',
        dark: '#c88719',
        contrastText: '#fafafa',
      },
      secondary: {
        light: '#819ca9',
        main: '#546e7a',
        dark: '#29434e',
        contrastText: '#ff6f00',
      },
    },
  });



export default function Formulario() {


  const [passoAtivo, setpassoAtivo] = React.useState(0);


  const tratarProximo = () => {
    setpassoAtivo(passoAtivo + 1);
  };

  const tratarAnterior = () => {
    setpassoAtivo(passoAtivo - 1);
  };




  return (
    <ThemeProvider theme={temalabenu}>
      <CssBaseline />
        
      <AppBar
        position="absolute"
        color="primary"
        //sombra
        elevation={5}
        //espaçamento do form
        sx={{
          position: 'relative'
        }}
      >
          
        <Toolbar>
          <Typography variant="h6" color="primary.contrasText" noWrap>
            Labenu
          </Typography>
        </Toolbar>
      </AppBar>


      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>

        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>

          <Typography component="h1" variant="h4" align="center">
            Formulario
          </Typography>

          <Stepper activeStep={passoAtivo} sx={{ pt: 3, pb: 5 }}>
            {passoss.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>


          <React.Fragment>
            {passoAtivo === passoss.length ? (

              <React.Fragment>
                <h1>Funcinou</h1>

              </React.Fragment>
            ) : 
            (
              <React.Fragment>
                {getpassosContent(passoAtivo)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {passoAtivo !== 0 && (
                    <Button onClick={tratarAnterior} sx={{ mt: 3, ml: 1 }}>
                      Anterior
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={tratarProximo}
                    sx={{ mt: 3, ml: 1 }}
                  >

                    {passoAtivo === passoss.length - 1 ? 'Submeter' : 'Proximo'}
                    
                  </Button>

                  
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>

    </ThemeProvider>
  );
}
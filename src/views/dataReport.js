import React from "react";
import { useHistory } from "react-router-dom";
import '../styles/dataReport.css';

const ReportData = () => {
  const history = useHistory()


  return (
    <div className='container'>
      <h1>Reporte de los datos mas importantes:</h1>
      <ol>
        <li className='queriesTitle' onClick={() => history.push({
          pathname: '/dataReport/reportItem',
          state: {
            numberQuery: '1',
            query: "Álbumes más recientes de la última semana:",
            linkApi: 'albums/recentalbums/'
          },
        })}
        >
          Álbumes más recientes de la última semana        {">"}
        </li>
        <li className='queriesTitle' onClick={() => history.push({
          pathname: '/dataReport/reportItem',
          state: {
            numberQuery: '2',
            query: 'Artistas con popularidad creciente en los últimos tres meses:',
            linkApi: 'listen/getingpopular/' //cambiarlo cuando este el nuevo
          }
        })}
        >
          Artistas con popularidad creciente en los últimos tres meses          {">"}
        </li>
        <li className='queriesTitle' onClick={() => history.push({
          pathname: '/dataReport/reportItem',
          state: {
            numberQuery: '3',
            query: 'Cantidad de nuevas suscripciones mensuales durantelos últimos seis meses:',
            linkApi: 'premium/suscriptionmonthly/'
          }
        })}
        >
          Cantidad de nuevas suscripciones mensuales durante los últimos seis meses         {">"}
        </li>
        <li className='queriesTitle' onClick={() => history.push({
          pathname: '/dataReport/reportItem',
          state: {
            numberQuery: '4',
            query: 'Artistas con mayor producción musical:',
            linkApi: 'songs/popularartists/' 
          }
        })}
        >
          Artistas con mayor producción musical            {">"}
        </li>
        <li className='queriesTitle' onClick={() => history.push({
          pathname: '/dataReport/reportItem',
          state: {
            numberQuery: '5',
            query: 'Generos mas populares:',
            linkApi: 'listen/populargenres/'
          }
        })}
        >
          Géneros más populares           {">"}
        </li>
        <li className='queriesTitle' onClick={() => history.push({
          pathname: '/dataReport/reportItem',
          state: {
            numberQuery: '6',
            query: 'Usuarios mas activos en la plataforma:',
            linkApi: 'listen/mostactive/'
          }
        })}
        >
          Usuarios más activos en la plataforma        {">"}
        </li>
        <li className='queriesTitle' onClick={() => history.push({
          pathname: '/dataReport/reportItem',
          state: {
            numberQuery: '7',
            query: 'Total reproducciones por semana dado un rango de fechas:',
            linkApi: 'listen/mostactive/',
            linkApiPost: 'listen/weeklyListen/'
          }
        })}
        >
          Reproducciones por semana dado un rango de fechas                  {">"}
        </li>
        <li className='queriesTitle' onClick={() => history.push({
          pathname: '/dataReport/reportItem',
          state: {
            numberQuery: '8',
            query: 'Los N artistas con las mayores reproducciones para un rango de fechas:',
            linkApi: 'listen/mostactive/',
            linkApiPost: 'listen/weeklyArtistPlays/'
          }
        })}
        >
          Artistas con mayores reproducciones para un rango de fechas                 {">"}
        </li>
        <li className='queriesTitle' onClick={() => history.push({
          pathname: '/dataReport/reportItem',
          state: {
            numberQuery: '9',
            query: 'Total de reproducciones por género para un rango de fechas:',
            linkApi: 'listen/mostactive/',
            linkApiPost: 'listen/genreListen/'
          }
        })}
        >
        Total de reproducciones por género para un rango de fechas                 {">"}
        </li>
        <li className='queriesTitle' onClick={() => history.push({
          pathname: '/dataReport/reportItem',
          state: {
            numberQuery: '10',
            query: 'Las N canciones con más reproducciones para un artista:',
            linkApi: 'listen/mostactive/',
            linkApiPost: 'listen/topArtistSong/'
          }
        })}
        >
        Las N canciones con más reproducciones para un artista                 {">"}
        </li>
      </ol>
    </div>
  )
};

export default ReportData;

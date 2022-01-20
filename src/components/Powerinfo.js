import Grid from '@mui/material/Grid';
import Display from './Display'



function Power(){

const powerinfo= [{
    
    name:"Omari Latif Hardwick ",
    characterName: "Ghost ",
    description:"Major drug dealer turned night club owner ",
    image:"https://cdn.images.express.co.uk/img/dynamic/20/590x/power-spin-off-series-omari-hardwick-ghost-1290499.webp?r=1591192848803 ",
    ageofactor:"48 ",

},
{

    name:"Naturi Cora Maria Naughton ",
    characterName: "Tasha St Patrick ",
    description:"The wife of Ghost former accoutant student turned money launder  ",
    image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F09%2F11%2FNaturi-Naughton-Power-2.jpg ",
    ageofactor:"37 ",


},

 {  name:"Joseph Sikora ",
    characterName: "Tommy Egan ",
    description:"Co major drug dealer along with Ghost ",
    image:"https://deadline.com/wp-content/uploads/2020/08/joseph-sikora.jpg ",
    ageofactor:"45 ",

 }


]

     return(<Grid container spacing={2}>
        { 
         powerinfo.map((actor)=>{
             return <Grid item xs={4}>
                 <Display name={actor.name} charactername={actor.characterName} description={actor.description} image={actor.image}
                 ageofactor={actor.ageofactor}/> 
                  </Grid>
         }
         )
        }
          </Grid>
    




     );

}


export default Power;
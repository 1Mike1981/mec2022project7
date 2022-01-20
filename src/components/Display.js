import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Copyright from './Copyright';
import '../index.css'

function Display({name, charactername, description, image, ageofactor}){ 

    return(
    <div className='shadow'>
    <Card style={{backgroundColor: ' darkblue'}}> 
         <CardContent>
     <h1>{charactername}</h1>

    </CardContent>
    <CardMedia className='imgfit' component='img' height='200' image={image} alt='no image loaded' /> 
    <CardContent>
     <h2>{name}</h2>
     <h3>{ageofactor}</h3>
     <p>{description}</p>
     <Copyright />
    </CardContent>
    </Card>
</div>



    );




}
export default Display;
import Card from 'react-bootstrap/Card';
import ciclismo from './ciclismo.jpg'
export const Cardciclismo= () => {
  return (
   
    <Card className="bg-dark text-red">
      <Card.Img src={ciclismo} alt="Ciclismo" />
      <Card.ImgOverlay>
        <Card.Title>Ciclismo </Card.Title>
        <Card.Text>
          
        </Card.Text>
       
      </Card.ImgOverlay>
    </Card>
  );
}

export default Cardciclismo;
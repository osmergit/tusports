import Card from 'react-bootstrap/Card';
import natacion from './natacion.jpeg'
export const Cardnatacion= () => {
  return (
   
    <Card className="bg-dark text-red">
      <Card.Img src={natacion} alt="Natacion" />
      <Card.ImgOverlay>
        <Card.Title>Natación </Card.Title>
        <Card.Text>
          
        </Card.Text>
       
      </Card.ImgOverlay>
    </Card>
  );
}

export default Cardnatacion;
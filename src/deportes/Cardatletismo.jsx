import Card from 'react-bootstrap/Card';
import atletismo from './atletismo.jpg'
export const Cardatletismo = () => {
  return (
   
    <Card className="bg-dark text-red">
      <Card.Img src={atletismo} alt="atletismo" />
      <Card.ImgOverlay>
        <Card.Title>Atletismo </Card.Title>
        <Card.Text>
          
        </Card.Text>
       
      </Card.ImgOverlay>
    </Card>
  );
}

export default Cardatletismo;
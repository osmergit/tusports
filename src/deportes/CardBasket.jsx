import Card from 'react-bootstrap/Card';
import basket from './basket.jpg'
export const CardBasket = () => {
  return (
   
    <Card className="bg-dark text-red">
      <Card.Img src={basket} alt="Basketball" />
      <Card.ImgOverlay>
        <Card.Title>BasketBall </Card.Title>
        <Card.Text>
          
        </Card.Text>
       
      </Card.ImgOverlay>
    </Card>
  );
}

export default CardBasket;
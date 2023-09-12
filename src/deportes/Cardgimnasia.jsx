import Card from 'react-bootstrap/Card';
import gimnasia from './gimnasia.jpg'
export const Cardgimnasia= () => {
  return (
   
    <Card className="bg-dark text-red">
      <Card.Img src={gimnasia} alt="Gimnasia" />
      <Card.ImgOverlay>
        <Card.Title>Gimnasia </Card.Title>
        <Card.Text>
          
        </Card.Text>
       
      </Card.ImgOverlay>
    </Card>
  );
}

export default Cardgimnasia;
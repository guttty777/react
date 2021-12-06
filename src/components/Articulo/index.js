import { Button } from '../Button'
import { Container, Image, ProductName, Price } from './styles'
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Articulo = ({prod}) => {
   
    return (
        <Container nombre={prod.nombre}>
            <Image imagen={prod.imagen} />
            <ProductName>{prod.nombre}</ProductName>
            <Price>${prod.precio.toLocaleString()}</Price>
            <Button  prod={prod}>   </Button>
        </Container>
    )
} 
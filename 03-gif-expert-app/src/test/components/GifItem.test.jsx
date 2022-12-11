import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe('Pruebas en GifItem', () => {
    const title = 'Dragon Ball';
    const url = 'https://one-punch.com/saitama.jpg'
    
    test('Debe de hacer match con el snapshot', () => { 
        
        const {container} = render(<GifItem title={ title } url={ url }></GifItem>);
        // screen.debug(); -> Si quisiera mostrar en la consola los resultados del screen
        expect( container ).toMatchSnapshot();
        
    })


    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        render(<GifItem title={ title } url={ url }></GifItem>);
        
        const { src, alt}  = screen.getByRole('img');

        expect ( src ).toBe(  url );
        expect ( alt ).toBe ( alt )
     })


     test('Debe de mostrar el titulo en el componente', () => { 
        
        render(<GifItem title={ title } url={ url }></GifItem>);
        expect(screen.getByText( title )).toBeTruthy;
      })
});

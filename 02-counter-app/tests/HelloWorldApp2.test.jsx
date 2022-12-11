import { render, screen } from '@testing-library/react'
import  {HelloWorldApp}  from  '../src/HelloWorldApp'


 describe('Pruebas en <HelloWorldApp/>', () => { 

    const title = 'Hola soy goku';
    const subTitle = 'Hola soy un subtitulo'

    test('Debe de hacer match con el snapshot', () => {
        
        const { container } = render(<HelloWorldApp title={title}/>);
        expect(container).toMatchSnapshot();
    
    });

    test('Debe mostrar el mensaje "Hola soy goku"', () => {
        
        render(<HelloWorldApp title={title} />);
        expect( screen.getByText( title ) ).toBeTruthy()

    });
    

    test('Debe de mostrar el titulo en un h1', () => {
        render(<HelloWorldApp title={title} />);
        expect(screen.getByRole('heading',{level: 1}).innerHTML).toContain(title)

    });
    

    test('Debe de mostrar el subtitulo pasado en las props', () => {
        render(<HelloWorldApp 
            title= { title }
            subtitle= { subTitle }
            />
            );

        expect(screen.getAllByText(subTitle).length).toBe(2);
    });
    
    

    


    

})


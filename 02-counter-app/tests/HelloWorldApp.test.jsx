import { render } from '@testing-library/react'
import  {HelloWorldApp}  from  '../src/HelloWorldApp'


 describe('Pruebas en <HelloWorldApp/>', () => { 

    const title = 'Hola soy goku';
    const subTitle = 'Hola soy un subtitulo'

    // test('Debe de hacer match con el snapshot', () => {
        
    //     const { container } = render( <HelloWorldApp title= {title} />)

    //     expect(container).toMatchSnapshot()
        
    // });


    test('Debe de mostrar el titulo en un h1', () => {
        
        
        const{container, getByText, getByTestId} = render(<HelloWorldApp title= {title}/>);
        expect(getByText(title)).toBeTruthy();
        
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain( title )

        expect(getByTestId('test-title').innerHTML).toContain(title)


    });
        

    test('Debe de mostrar el subtitulo enviado por props', () => {
        
        
        const{getByText, getAllByText} = render(<HelloWorldApp 
        title= {title}
        subtitle= { subTitle }
        />);

        // Si queres que el subtitulo se encuentre 1 vez

        // expect(getByText(subTitle)).toBeTruthy()

        // Si queres que el subtitulo se encuentre mas de 1 vez
        //getAllByText devuelve un arreglo

        expect(getAllByText(subTitle).length).toBe(2);


    });
    
    


    

})


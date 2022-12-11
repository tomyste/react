import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en el Componente GifGrid', () => {
    

    test('Debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        const category = 'Dragon Ball'

        render( <GifGrid category={ category }></GifGrid>)
        expect(  screen.getByText( 'Cargando...' ));
        expect(  screen.getByText( category ));
        
     })


     test('Debe de mostrar items cuando se cargan  las imagenes useFetchGifs ', () => { 

        const  gifs = [
            {
                id: 'ABC',
                title: 'Goku',
                url: 'https://loaclhost/goku.jpg'
            },
            {
                id: '123',
                title: 'Vegeta',
                url: 'https://loaclhost/vegeta.jpg'
            }        
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        const category = 'Dragon Ball'
        render( <GifGrid category={ category }></GifGrid>)
        

        expect( screen.getAllByRole( 'img' ).length).toBe(2);
        
     })
});

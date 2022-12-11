const { render, screen, fireEvent } = require("@testing-library/react");
const { MemoryRouter, Routes, Route } = require("react-router-dom");
const { HeroPage } = require("../../../heroes/pages/HeroPage");


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));


describe('Pruebas en el componente HeroPage', () => {

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar heroe existente (flash)', () => { 

        render(
            <MemoryRouter initialEntries={['/hero/dc-flash']}>
                <Routes>
                    <Route path='hero/:id' element={ <HeroPage /> }></Route>
                </Routes>
            </MemoryRouter>
        )
        
        expect( screen.getByText('Flash')).toBeTruthy();

     })


     test('Debe de navegar hacia /marvel si el id no existe', () => { 

        render(
            <MemoryRouter initialEntries={['/hero/dc-flashing']}>
                <Routes>
                    <Route path='hero/:id' element={ <HeroPage /> }></Route>
                    <Route path='/marvel' element={<h1>Pagina de marvel</h1>}/>
                </Routes>
            </MemoryRouter>
        )
        expect( screen.getByText('Pagina de marvel')).toBeTruthy();
      })

      test('Debe de Navegar tras usar button back', () => { 

        render(
            <MemoryRouter initialEntries={['/hero/dc-flash']}>
                <Routes>
                    <Route path='hero/:id' element={ <HeroPage /> }></Route>
                </Routes>
            </MemoryRouter>
        )
        
        const buttonBack = screen.getByRole('button');
        fireEvent.click(buttonBack);

        expect(mockedUseNavigate).toHaveBeenCalled();

      })

});
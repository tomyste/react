import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes'

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeByID debe retornar un heroe por ID', () => { 

        const id = 1;
        const hero = getHeroeById(id)
        
        expect( hero ).toEqual({id:1, name:'Batman', owner: 'DC'})

     })

     test('getHeroeByID debe retornar undefined  si no existe', () => { 

        const id = 18;
        const hero = getHeroeById(id);
        
        expect( hero ).toBeFalsy();

     })


     test('getHeroesByOwner debe de retornar un arreglo  con los hèroes de DC', () => {
        
        const owner = 'DC';
        const arrayDC = getHeroesByOwner( owner );

        expect( arrayDC.length ).toBe( 3 )
        expect( arrayDC ).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))

     });

     test('getHeroesByOwner debe de retornar un arreglo  con los hèroes de Marvel', () => {
        
        const owner = 'Marvel';
        const arrayMv = getHeroesByOwner( owner );

        expect( arrayMv.length ).toEqual(2)
        expect( arrayMv ).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
     });
     



    
});



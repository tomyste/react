import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"


describe('Pruebas en 07-deses-arr', () => { 
    
    test('debe retornar un string y un numero', () => {
        
        const [letters, numbers]  = retornaArreglo();

        //Esto es especifico
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        //Esto es general

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number')

        //de otra forma

        expect(letters).toEqual(expect.any(String))



    })
})
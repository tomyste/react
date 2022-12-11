import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Test para 02-template-string', () => { 

    test('getSaludo debe devolver "Hola + Nombre"', () => {
        const name = "Tomas";
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`)
        
        
    })

 })
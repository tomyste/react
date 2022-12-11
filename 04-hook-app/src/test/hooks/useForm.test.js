import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../hooks/useForm";

describe('Pruebas en el componente useForm', () => {

    const initialForm = {
        name: 'Tomaco',
        email: 'tomaco@gmail.com'
    }

      
    test('Debe de regresar la informacion por defecto', () => { 
        const { result } = renderHook( () => useForm( initialForm));
        

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange:expect.any(Function),
            onResetForm: expect.any(Function)

        })

    })

    test('Debe de cambiar el nombre del formulario', () => {

        const newValue = 'Perro'

        const { result } = renderHook( () => useForm( initialForm ));
        const { onInputChange } = result.current;
        
        act( () => {
            
            onInputChange( {target: {name: 'name', value: newValue}});
        
        })
        
        
        expect( result.current.name ).toBe( newValue );
        expect( result.current.formState.name ).toBe( newValue )
     })

     test('Debe de resetear el formulario', () => {

        const newValue = 'Perro'

        const { result } = renderHook( () => useForm( initialForm ));
        const { onResetForm, onInputChange } = result.current;
        
        act( () => {

            onInputChange( {target: {name: 'name', value: newValue}});
            onResetForm();
        
        })
        
        
        expect( result.current.name ).toBe( initialForm.name );
        expect( result.current.formState.name ).toBe( initialForm.name )
     })
});

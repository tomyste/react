import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../helpers/fileUpload";

//Configuracion de cloudinary

cloudinary.config({
    cloud_name:'dhxiyu3r8',
    api_key:'118377595446169',
    api_secret:'Tq65iqOx-BXgsBGwKIgelLvHAHM',
    secure: true,
})




jest.setTimeout(6000)

describe('Pruebas en fileUpload', () => {
    
    test('Debe de subir el archivo correctamente a cloudinary', async() => { 
       
        const imgUrl = 'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg';
        const resp = await fetch( imgUrl );
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload( file );
        expect( typeof url ).toBe('string');

        const segments = url.split('/');
        const imageId = segments[ segments.length -1 ].replace('.jpg', '');
         

        await cloudinary.api.delete_resources([ 'journal/' + imageId ], {
            resource_type: 'image'
        });

     })

     test('Debe de retornar null', async() => { 

        const file = new File([], 'foto.jpg');

        const url = await fileUpload( file );
        expect( url ).toBe(null);

      })

});


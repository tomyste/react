import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball Z']);

    const onAddCategory = ( newCategory) =>{
        if(categories.includes(newCategory)) return;
        
        const newArray = [newCategory, ...categories];
        setCategories(newArray);
    }

    return (
        <>
           <h1> GifExpertApp</h1>
           <AddCategory 
            onNewCategory = {onAddCategory}>
           </AddCategory>
           
            
            {   
                categories.map((category) => 
                    (<GifGrid 
                    key={ category }
                    category={ category }
                    >

                    </GifGrid>
                    ))
            }
            
            
            
           
        </>
    );
}

export default GifExpertApp;

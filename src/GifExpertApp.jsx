import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (value) => {
        if( categories.includes(value) ) return;
        setCategories([ value, ...categories]);
    };

    return (
        <>
        
            <h1> GIF SEARCH ENGINE </h1>
            
            <AddCategory onNewCategory={ (value) => onAddCategory(value) } />
            
            <ol>
                {
                    categories.map( (category) => <GifGrid key={category} category={category} /> )
                }
            </ol>
            
        </>
    )
}

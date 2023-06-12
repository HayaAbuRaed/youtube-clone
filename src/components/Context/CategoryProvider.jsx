import React, { createContext, useState } from 'react'

export const CategoryContext = createContext()

const CategoryProvider = ({children}) => {

    const [selectedCategory, setSelectedCategory] = useState('Home')

    let value = {
        selectedCategory: selectedCategory, 
        setSelectedCategory: setSelectedCategory
    }
    
    return (
        <CategoryContext.Provider value={value}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider
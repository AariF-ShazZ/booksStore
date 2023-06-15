import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom"
const FilterComp = () => {
    const [searchParams,setSearchParams] = useSearchParams()
    const initialCategory = searchParams.getAll("category")
    const [category, setCategory] = useState( initialCategory || [])
    const initialSort = searchParams.getAll("sort")
    // console.log(initialSort);
    const [sort,setSortBy] = useState(initialSort[0] || "")

    const handleFilterCheckbox = (e) => {
        // check if the data is present in the category 
        const newCategories = [...category]

        // console.log("newCategories",newCategories);
        if(newCategories.includes(e.target.value)){
            newCategories.splice(newCategories.indexOf(e.target.value),1)
        }else{
            newCategories.push(e.target.value)
        }
        // console.log("new => ",);
        setCategory(newCategories)
    }

    const handleSort = (e) => {
        setSortBy(e.target.value)
    }
    useEffect(() => {
        let params={}
        params.category = category
        sort && (params.sort = sort)
        // console.log("Params =>",params);
        setSearchParams(params)
    },[category,setSearchParams,sort])
    // console.log("category",category);
  return (
    <div>
        <h2>Filter Component</h2>
        <div>
            <div>
                <input 
                type="checkbox"  
                value={"Novel"} 
                checked={category.includes("Novel")} 
                onChange={handleFilterCheckbox} />
                <label htmlFor="">Novel</label>
            </div>
            <div>
                <input 
                type="checkbox" 
                value={"Motivational"} 
                checked={category.includes("Motivational")} 
                onChange={handleFilterCheckbox} />
                <label htmlFor="">Motivational</label>
            </div>
            <div>
                <input 
                type="checkbox"  
                value={"Science_Fiction"} 
                checked={category.includes("Science_Fiction")} 
                onChange={handleFilterCheckbox} />
                <label htmlFor="">Science Fiction</label>
            </div>
            <div>
                <input 
                type="checkbox"   
                value={"Thriller"} 
                checked={category.includes("Thriller")} 
                onChange={handleFilterCheckbox} />
                <label htmlFor="">Thriller</label>
            </div>
        </div>
        <h2>Sort Components</h2>
        <div onChange={handleSort}>
            <input type="radio" value={"asc"} name='sortBy' defaultChecked={sort === "asc"}/>
            <label htmlFor="">Ascending</label>
            <br/>
            <input type="radio" value={"desc"} name='sortBy' defaultChecked={sort === "desc"}/>
            <label htmlFor="">Descending</label>
        </div>
    </div>
  )
}

export default FilterComp
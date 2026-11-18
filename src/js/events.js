import { datafilterSerch } from "../api/recipesApi.js";
import { filldatafromApi } from '../js/display.js'
import { showdata } from '../js/display.js'
import { isvalid } from "../js/validation.js";
const input = document.getElementById("search-input")
const parents = document.getElementById("recipes-container");
const buttonJJOter= document.getElementById("add-recipe-section")
export function filter() {
    document.getElementById("search-btn").addEventListener("click", async (e) => {
        e.preventDefault()
        const datafilter = await datafilterSerch(input.value)
        


        showdata(filldatafromApi(datafilter))
        console.log(datafilter.recipes.length);
        
if (datafilter.recipes.length === undefined) {
    const p = document.createElement("p");
    p.textContent = "Ce plat n'existe pas.";
    p.classList.add("text-red-600", "font-bold","text-[20px]", "text-center", "py-4",);

    parents.appendChild(p);
}

    })
}
export function checkvalid() {
     buttonJJOter.addEventListener("submit",(e)=>{
    e.preventDefault()
    isvalid()
})
}
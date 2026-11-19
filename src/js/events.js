import { datafilterSerch, addPost, deleteRecipe } from "../api/recipesApi.js";
import { getdata } from "../api/recipesApi.js";

import { filldatafromApi } from '../js/display.js'
import { showdata } from '../js/display.js'
import { isvalid } from "../js/validation.js";
const input = document.getElementById("search-input")
const parents = document.getElementById("recipes-container");
const buttonJJOter = document.getElementById("add-recipe-section")
const btndelete = document.querySelector(".buttonclick")
export function filter() {
    document.getElementById("search-btn").addEventListener("click", async (e) => {
        e.preventDefault()
        const datafilter = await datafilterSerch(input.value)



        showdata(filldatafromApi(datafilter))
        console.log(datafilter.recipes.length);

        if (datafilter.recipes.length === undefined || datafilter.recipes.length === 0) {
            const p = document.createElement("p");
            p.textContent = "Ce plat n'existe pas.";
            p.classList.add("text-red-600", "font-bold", "text-[20px]", "text-center", "py-4",);

            parents.appendChild(p);
        }

    })
}
export function checkvalid() {
    buttonJJOter.addEventListener("submit", async (e) => {
        e.preventDefault()
        const response = isvalid()

        const data = await addPost(response)
        const recipes = await getdata();

        recipes.recipes.unshift(data);
        showdata(filldatafromApi(recipes));


        return data
    })
}

export function buttton() {

    parents.addEventListener("click", async (e) => {
        const inclick = e.target

        const buttonclick = inclick.closest("#btndelete")
        if (buttonclick !== null) {
            const cart = buttonclick.closest(".cart")
            deleteRecipe(cart.id)
            const confirmed = confirm("Voulez-vous vraiment supprimer cette recette ?");
            if (confirmed) {
                cart.remove();

            }
        }


    })
}
document.getElementById("add-recipe-section").addEventListener("submit",()=>{
    const buttonJJOter= document.getElementById("add-recipe-section")
            buttonJJOter.classList.add("hidden")


})
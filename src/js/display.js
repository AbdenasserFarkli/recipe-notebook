const parents = document.getElementById("recipes-container");

import { getdata } from "../api/recipesApi.js";

 const recipess = await getdata();

 export function filldatafromApi(data) {


    const fillcart = data.recipes.map((loop)=>{
        
          return `
        <article id="${loop.id}" class="cart group overflow-hidden rounded-3xl border-2 border-[#1B2A6B] bg-white shadow-[6px_6px_0_#1B2A6B] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#C8553D]">

            <!-- Image -->
            <div class="h-56 overflow-hidden rounded-t-[7rem] border-b-2 border-[#1B2A6B] bg-[#F4E7CC]">
                <img
                    src="${loop.image}"
                    alt="${loop.name}"
                    class="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                >
            </div>

            <!-- Content -->
            <div class="p-5">

                <h3 class="mb-3 line-clamp-2 font-serif text-lg font-bold text-[#1B2A6B]">
                    ${loop.name}
                </h3>

                <div class="mb-5 flex items-center justify-between text-sm">
                    <span class="rounded-full bg-[#C8553D] px-3 py-1 font-semibold text-white">
                        ${loop.difficulty}
                    </span>

                    <span class="font-medium text-[#1F8A70]">
                        ◷ ${loop.prepTimeMinutes + loop.cookTimeMinutes} min
                    </span>
                </div>

                <button   id="btndelete" class="w-full rounded-full border-2 border-[#1B2A6B] bg-[#F2B134] py-3 font-bold text-[#1B2A6B] shadow-[3px_3px_0_#1B2A6B] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-[#C8553D] hover:text-white hover:shadow-[1px_1px_0_#1B2A6B]">
                    Delete
                </button>

            </div>
        </article>
    `;
    })

     
    return fillcart
}
export function showdata(showdata) {    
    parents.replaceChildren();

  const recipes = showdata
  
  
  recipes.forEach(loop => {
     parents.innerHTML+= loop
         
    });
}

const buttonJJOter= document.getElementById("add-recipe-section")

export function eventcart() {
    document.getElementById("cancel-recipe-btn").addEventListener("click",()=>{
        buttonJJOter.classList.add("hidden")

    })
    document.getElementById("add-recipe-btn").addEventListener("click",()=>{
                buttonJJOter.classList.toggle("hidden")

    })
}   
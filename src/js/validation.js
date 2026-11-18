
import { addPost,getdata } from "../api/recipesApi";
function validationForm() {
    const newRecipe = {
        name: document.getElementById("recipe-name").value,
        image: document.getElementById("recipe-image").value,
        difficulty: document.getElementById("recipe-difficulty").value,
        prepTimeMinutes: Number(document.getElementById("recipe-prep").value),
        cookTimeMinutes: Number(document.getElementById("recipe-cook").value)
    }; const arr = []
    let namee = false
    let time = false

    if (/^[A-Za-zÀ-ÿ\s'-]{3,}$/.test(newRecipe.name)) {
        namee = true
        arr.push({
            input: document.getElementById("recipe-name"),
            valid: namee
        })


    } else {
        namee = false
        arr.push({
            input: document.getElementById("recipe-name"),
            valid: namee
        })

    }

    if (newRecipe.cookTimeMinutes + newRecipe.prepTimeMinutes > 300) {
        time = false
        arr.push({
            input: document.getElementById("recipe-prep"),
            valid: time
        })

    } else {
        time = true

        arr.push({
            input: document.getElementById("recipe-prep"),
            valid: time
        })
    }
    return [arr, newRecipe]

}
export function isvalid() {


    const [datacheck, data] = validationForm()
    const rusult = datacheck.every(checker => checker.valid)
    if (rusult == false) {
        const error = datacheck.find(item => item.valid === false);
        error.input.focus();
        if (document.getElementById("recipe-name") == error.input) {
            const error = document.createElement("p");

            error.textContent = "Nom invalide : le nom doit contenir au moins deux lettres et ne doit pas contenir de chiffres.";
            error.classList.add("text-red-500");

            document.getElementById("recipe-name").insertAdjacentElement("afterend", error);

        };
        if (document.getElementById("recipe-prep") == error.input) {
            const error = document.createElement("p");

            error.textContent = "Nom invalide : le nom doit contenir au moins deux lettres et ne doit pas contenir de chiffres.";
            error.classList.add("text-red-500");

            document.getElementById("recipe-prep").insertAdjacentElement("afterend", error);


        }

    } else {
       
        return data;

    }


}
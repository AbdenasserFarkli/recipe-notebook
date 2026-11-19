import axios from "axios";

const api = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 5000
});
 export async function getdata() {
    const response =   await api.get("/recipes",{
    params:{
        limit: 12

    }
})
    return response.data;
}
export async function datafilterSerch(dataserch) {
    const response = await api.get("/recipes/search", {
        params: {
            q: dataserch
        }
    });

    return response.data;
}

export async function addPost(newPost) {
    try {
        const response = await axios.post(
            "https://dummyjson.com/recipes/add",
            newPost
        );

        console.log(response.data);
        return response.data;

    } catch (error) {
        console.log(error.response.data);
    }
}
export async function deleteRecipe(id) {
    try {
        const response = await api.delete(
            `/recipes/${id}`
        );

        return response.data;

    } catch (error) {
        console.log(error.response?.data);
    }
}
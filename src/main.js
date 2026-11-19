import './style.css';
import  {getdata}  from "./api/recipesApi.js";
import { filldatafromApi,eventcart } from "../src/js/display.js";
 import { showdata } from "../src/js/display.js";
import { checkvalid,buttton} from "../src/js/events.js";

    const recipes = await getdata();
    console.log(recipes);
    
showdata(filldatafromApi(recipes))

import { filter } from "../src/js/events";
filter()
checkvalid()
eventcart()
buttton()
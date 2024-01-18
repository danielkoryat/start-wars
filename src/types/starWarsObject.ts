import character from "./charcterType";
import planet from "./planet ";
import film from "./film";
import starship from "./starship ";
import vehicle from "./vehicle ";
import { string } from "prop-types";

type StarWarsObject = character | planet | film | starship | vehicle;



export default StarWarsObject;

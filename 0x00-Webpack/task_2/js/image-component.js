import image from "../assets/holberton-logo.jpg";
import $ from 'jquery';
const logo = $("<div id='logo'></div>");
const img = document.createElement("img");
img.src = image;
logo.append(img);

$("body").prepend(logo);
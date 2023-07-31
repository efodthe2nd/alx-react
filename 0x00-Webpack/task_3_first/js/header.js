import $ from 'jquery';
import image from "../assets/holberton-logo.jpg";
import '../css/header.css';

const logo = $("<div id='logo'></div>");
const img = document.createElement("img");
const title = $('<h1></h1>').text('Holberton Dashboard');

img.src = image;
logo.append(img);

$("body").prepend(logo).append(title);
console.log("Init Header");
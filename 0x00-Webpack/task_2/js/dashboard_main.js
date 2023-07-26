import $ from "jquery";
import _ from "lodash";
import '../css/main.css';
import './image-component';

const text1 = $("<p></p>").text("Holberton Dashboard");
const text2 = $("<p></p>").text("Dashboard data for the students");
const button = $("<button></button>").text("Click here to get started");
const text3 = $("<p id='count'></p>");
const text4 = $("<p></p>").text("Copyright - Holberton School");


const div = $("<div id='container'></div>");
div.append(button, text3);
$("body").append(text1, text2, div, text4);

let sum = 0;

function count(){
    sum++;
    $("#count").text(`${sum} clicks on the button`);
};

$(document).ready(function(){
    $("button").on('click', _.debounce(count,5000));
});
import $ from "jquery";

const text1 = $("<p></p>").text("Holberton Dashboard");
const text2 = $("<p></p>").text("Dashboard data for the students");
const text3 = $("<p></p>").text("Copyright - Holberton School");

$("body").append(text1, text2, text3);

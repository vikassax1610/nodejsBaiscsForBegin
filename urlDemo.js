import url from "url";
const urlString = "https://www.youtube.com/watch?v=32M1al-Y6Ag&t=5063s";
const urlObj = new URL(urlString);
// console.log(urlObj);
// console.log(url.format(urlObj));
console.log(urlObj.search);

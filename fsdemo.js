import fs from "fs";

//async version
// fs.readFile("./test.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

//sync version
// const data = fs.readFileSync("./test.txt", "utf8");
// console.log(data);

//aync await version
// import fs from "fs/promises";
// const readFile = async () => {
//   try {
//     const data = await fs.readFile("./test.txt", "utf8");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// readFile();

//writeFile sync
// const data = fs.writeFileSync("./test.txt", "node js ");
// const data2 = fs.readFileSync("./test.txt", "utf8");
// console.log(data2);

// writefile async
fs.writeFile("./test.txt", "vikas saxena", (err, data) => {});
fs.readFile("test.txt", "utf8", (err, data) => {
  console.log(data);
});

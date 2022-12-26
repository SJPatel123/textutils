var text = "Hello     World";
let wc = text.split(" ").length;
console.log(text.split(" "));
// text.split(" ").forEach((word) => {
//     if (!word.length) {
//         console.log(word.length);
//     }
// });
let n = text.replace(/\s+/g,' ').trim();
console.log(0.008 * (text.trim() === '' ? 0 : text.match(/\S+/g).length));
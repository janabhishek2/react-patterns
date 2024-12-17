const regex1 = /foo/g;
const str1 = 'foo foo foo sd';
const ans = regex1.exec(str1);

console.log(ans, regex1.lastIndex);

// while ((array1 = regex1.exec(str1)) !== null) {
//   console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
//   // Expected output: "Found foo. Next starts at 9."
//   // Expected output: "Found foo. Next starts at 19."
// }
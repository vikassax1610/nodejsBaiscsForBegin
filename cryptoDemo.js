import crypto from "crypto";
const hash = crypto.createHash("sha256");
hash.update("password816");
console.log(hash.digest("hex"));

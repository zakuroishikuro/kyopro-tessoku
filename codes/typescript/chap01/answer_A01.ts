import fs from "fs";

const input = fs.readFileSync(process.stdin.fd, { encoding: "utf-8" });

const N = Number(input);
console.log(N * N);
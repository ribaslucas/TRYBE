let n = 5;
for (let index = 1; index <= n; index++) {
    let line = "*".repeat(index);
    let blank = " ".repeat(n - index);
    console.log(blank + line);
}
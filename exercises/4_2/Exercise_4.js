let n = 5;

for (let index = 1; index <= n; index += 2) {
    let blank = " ".repeat((n - index) / 2);
    let l = "*".repeat(index);
    console.log(blank + l + blank);
}


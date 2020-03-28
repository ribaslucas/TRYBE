    // let n = 5;

    // for (let index = 1; index <= n; index += 2) {
    //     let blank = " ".repeat((n - index) / 2);
    //     let l = "*".repeat(index);
    //     console.log(blank + l + blank);
    // }


    let n = 5;
    let lineIndex;
    let lineColumn;
    let lineInput = '';
    let symbol = '*';
    let midOfMatrix = (n + 1) / 2;
    let controlLeft = midOfMatrix;
    let controlRight= midOfMatrix;
    for (lineIndex = 0; lineIndex <= midOfMatrix; lineIndex++) {
      for (lineColumn = 1; lineColumn <= n; lineColumn++) {
        if (lineColumn > controlRight && lineColumn < controlLeft) {
          lineInput = lineInput + symbol;
        } else {
          lineInput = lineInput + ' ';
        }
      }
      console.log(lineInput);
      lineInput = '';
      controlRight--;
      controlLeft++;
    
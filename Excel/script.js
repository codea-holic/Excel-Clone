$(document).ready(function () {
    let cellContainer = $('.input-cell-container');

    for (let i = 1; i <= 100; i++) {
        let ans = "";
        let n = i;

        while (n > 0) {
            let rem = n % 26;
            if (rem == 0) {
                ans = "Z" + ans;
                n = Math.floor(n / 26) - 1;
            } else {
                ans = String.fromCharCode(rem - 1 + 65) + ans;
                n = Math.floor(n / 26);
            }
        }
        let column = $(`<div class="column-name colCode-${ans}" id="colId-${i}">${ans}</div>`);
        $(".column-name-container").append(column);

        let row = $(`<div class="row-name" id="rowId-${i}">${i}</div>`);
        $(".row-name-container").append(row);
    }
});

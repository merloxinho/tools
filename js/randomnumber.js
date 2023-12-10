document.addEventListener("DOMContentLoaded", function(){
    const minnumber = document.querySelector("#min");
    const maxnumber = document.querySelector("#max");
    const btn = document.querySelector("#genbtn");
    const result = document.querySelector("#result");

    btn.addEventListener("click", function(){
        let x = parseInt(minnumber.value, 10);
        let y = parseInt(maxnumber.value, 10);

        if (isNaN(x) || isNaN(y)) {
            result.textContent = "xd?";
            return;
        }

        if (x > y) {
            [x, y] = [y, x];
        }

        let randomnumber = Math.floor(Math.random() * (y - x + 1)) + x;
        result.textContent = randomnumber;
    });
});

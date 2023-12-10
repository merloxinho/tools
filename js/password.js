document.addEventListener("DOMContentLoaded", function(){
    const btn = document.querySelector("#genbtn");
    const maxch = document.querySelector("#maxchar");
    const passbox = document.querySelector("#passwordbox");

    const chars = "!@#$%^&*()0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"

    maxch.value = 12;

    btn.addEventListener("click", function(){
        if (2 > maxch.value ){
            alert('Maximum characters should be greater than 1');
        } else if (maxch.value > 64){
            alert('Maximum characters should not exceed 64')
        } else {
                let password = "";
                for (let i = 0; i < maxch.value; i++){
                    const randomindex = Math.floor(Math.random() * chars.length);
                    password += chars[randomindex];
                };
                passbox.textContent = password;
            }
        })
    passbox.addEventListener("click", function(){
        navigator.clipboard.writeText(passbox.textContent);
    })
})
[...document.querySelectorAll(".input-group")].forEach(el => {
    const label = el.querySelector("label");
    const input = el.querySelector("input");
    input.addEventListener("focus", () => {
        label.classList.add("focus");
        input.classList.add("focus");
    });

    input.addEventListener("focusout", () => {
        if (!input.value) {
            label.classList.remove("focus");
            input.classList.remove("focus");
        }
    });
});

//
let password = document.querySelector(".password");
let retype = document.querySelector(".confirm");
let hide = document.querySelector(".hide");
let hide2 = document.querySelector(".hide-dua");
let show = document.querySelector(".show");
let show2 = document.querySelector(".show-dua");

hide.addEventListener("click", () => {
    password.type = "text";
    hide.style.display = "none";
    show.style.display = "inline";
});
hide2.addEventListener("click", () => {
    retype.type = "text";
    hide2.style.display = "none";
    show2.style.display = "inline";
});

show.addEventListener("click", () => {
    password.type = "password";
    hide.style.display = "inline";
    show.style.display = "none";
});
show2.addEventListener("click", () => {
    retype.type = "password";
    hide2.style.display = "inline";
    show2.style.display = "none";
});

function validate() {
    const pw1 = document.querySelector(".password").value;
    const pw2 = document.querySelector(".confirm").value;

    if (pw2 !== pw1) {
        alert("* Password doesn't match *");
    }
}

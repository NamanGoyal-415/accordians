let accordian = document.querySelectorAll(".accordian");

accordian.forEach((row) => {
    row.addEventListener("click", () => {
        const x = document.querySelector(".active");

        row.classList.toggle("active");
        x && x.classList.remove("active");
    })
})


let accordian2 = document.querySelectorAll(".accordian-2");

accordian2.forEach((row) => {
    row.addEventListener("click", () => {
        const x = document.querySelector(".active2");

        row.classList.toggle("active2");
        x && x.classList.remove("active2");
    })
})



let accordian3 = document.querySelectorAll(".accordian-3");

accordian3.forEach((row) => {
    row.addEventListener("click", () => {
        const x = document.querySelector(".active3");

        row.classList.toggle("active3");
        x && x.classList.remove("active3");
    })
})
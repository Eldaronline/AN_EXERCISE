let button = document.querySelector(".button");
//button.style.borderRadius = "25px";
let collection = document.querySelectorAll('[data-style="1"]');
let out = document.querySelector('.out')
console.log(collection)

// function useFun() {
//     for (let i of collection)
//         console.log(i)
// }

//button.addEventListener(useFun())
button.addEventListener('click', (event) => {
    out.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae perferendis eos facere accusantium mollitia exercitationem numquam quidem molestias, harum quis blanditiis in sit optio, repellendus quaerat! Sapiente provident tempore nemo."
});


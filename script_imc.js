


btn.addEventListener("click", function (e) {
    e.preventDefault()
    let p = document.getElementById("poids").value
    let t = document.getElementById("taille").value 
    let imc = document.getElementById("resultat")

    function calculer(a, b,) {

        console.log(a / (b*b));


    }

    console.log(calculer(+p, +t));


    resultat.innerHTML = `<p class="text-dark fw-bold"> ${+p / (+t * +t)} </p>`;







})
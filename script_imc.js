

function calculer(a, b,) {
    return a / (b * b);
}

btn.addEventListener("click", function (e) {
    e.preventDefault()
    let p = document.getElementById("poids").value
    let t = document.getElementById("taille").value
    let imc = document.getElementById("resultat")


    result = +p / (+t * +t)
    console.log('result : ', result)
    imc.innerHTML = `<p id="res" class="text-dark fw-bold"> ${+p / (+t * +t)} </p>`;

    if (+result <= 18.5) {
        alert("Attention votre IMC est bas");
    }
    else if (+result > 18.5 && +result < 24.9) {
        alert("Vous êtes de corpulence normale");
    }
    else if (+result > 25 && +result < 29.9) {
        alert("Attention, vous êtes en surpoids")
    }
    else if (+result > 30 && +result < 34.9) {
        alert("Attention, vous êtes en obésité modérée")
    }
    else if (+result > 35 && +result < 39.9) {
        alert("Attention, vous êtes en obésité sévère")
    }
    else {
        alert("Attention, vous êtes en obésité morbide")
    }

})


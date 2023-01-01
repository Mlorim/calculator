function calc(chislo, power, operation) {
  switch (operation) {
    case "+":
      var rez = Number(chislo) + Number(power);
      document.querySelector(".rez3").innerHTML = rez;
    break;
    case "-":
      var rez = Number(chislo) - Number(power);
      document.querySelector(".rez3").innerHTML = rez;
    break;
    case "*":
      var rez = Number(chislo) * Number(power);
      document.querySelector(".rez3").innerHTML = rez;
    break;
    case "/":
      var rez = Number(chislo) / Number(power);
      document.querySelector(".rez3").innerHTML = rez;
    break;
    case "^":
      var rez = Number(chislo) ** Number(power);
      document.querySelector(".rez3").innerHTML = rez;
    break;

    default: console.log(operation);

  }

  if (chislo == "x" || power == "y") {
    rez = "Choose numbers!";
    document.querySelector(".rez3").innerHTML = rez;
  } else if (power == "0" && operation == "/") {
    rez = "Are you ok?"
    document.querySelector(".rez3").innerHTML = rez;
  }

}

for (var i = 0; i < 11; i++) {
  document.querySelectorAll(".chislo")[i].addEventListener("click", function () {
    var chislo = this.innerHTML;
    if (document.querySelector(".rez1").innerHTML == "x") {
      document.querySelector(".rez1").innerHTML = chislo;
    } else {
      document.querySelector(".rez1").innerHTML += chislo;
    }

  });

  document.querySelectorAll(".power")[i].addEventListener("click", function () {
    var power = this.innerHTML;
    if (document.querySelector(".rez2").innerHTML == "y") {
      document.querySelector(".rez2").innerHTML = power;
    } else {
      document.querySelector(".rez2").innerHTML += power;
    }
  });
}


document.querySelector(".getus").addEventListener("click", function () {
  var chislo = document.querySelector(".rez1").innerHTML;
  var power = document.querySelector(".rez2").innerHTML;
  var operation = document.querySelector(".znak").innerHTML;

  calc(chislo,power,operation);
});

document.querySelector(".plus").addEventListener("click", function () {
  document.querySelector(".znak").innerHTML = "+";
});

document.querySelector(".minus").addEventListener("click", function () {
  document.querySelector(".znak").innerHTML = "-";
});

document.querySelector(".multiply").addEventListener("click", function () {
  document.querySelector(".znak").innerHTML = "*";
});

document.querySelector(".divine").addEventListener("click", function () {
  document.querySelector(".znak").innerHTML = "/";
});

document.querySelector(".pow").addEventListener("click", function () {
  document.querySelector(".znak").innerHTML = "^";
});

document.querySelector(".reset").addEventListener("click", function () {
  document.querySelector(".rez1").innerHTML = "x";
  document.querySelector(".rez2").innerHTML = "y";
  document.querySelector(".rez3").innerHTML = "?";
});

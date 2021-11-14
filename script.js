// function tambah() {
//     let veggies = document.getElementById('veggies').value;
//     let kg = document.getElementById('kg').value;
//     let disc = document.getElementById('discount').value;

//     document.getElementById('total').innerHTML = (`Jenis Sayur : ${veggies} <br>`);
//     document.getElementById('total').innerHTML += (`Harga buah per kilogram : ${price} <br>`);
//     document.getElementById('total').innerHTML += (`Banyak (berat) : ${kg} kg <br>`);
//     document.getElementById('total').innerHTML += (`Diskon : ${disc}% <br>`);
//     document.getElementById('total').innerHTML += ("Potongan harga : Rp" + (disc/100) * (price*kg) + "<br>");
//     document.getElementById('total').innerHTML += ("Sub total : Rp" + (price*kg) + "<br></br>");
//     document.getElementById('total').innerHTML += ("<b>Total : Rp" + ((price*kg) - (disc/100) * (price*kg)) +"</b>");
    
//     let price;

//     if (veggies === "Wortel") {
//         price = 12000;
//     } 
//     else if (veggies === "Bayam") {
//         price = 10000;
//     }
//     else if (veggies === "Tomat") {
//         price = 12500;
//     }
//     else if (veggies === "Jagung") {
//         price = 13000;
//     }
//     else if (veggies === "Kentang") {
//         price = 14500;
//     }
//     else if (veggies === "Cabai") {
//         price = 30000;
//     }

//     return price;
// }

function hitung() {
    let veggies = document.getElementById('veggies').value;
    let kg = document.getElementById('kg').value;
    let disc = document.getElementById('discount').value;

    total(veggies, kg, disc);
};

function total(veggies, kg, disc) {
    let price = getPrice(veggies);
    document.getElementById('total').innerHTML = (`Jenis Sayur : ${veggies} <br>`);
    document.getElementById('total').innerHTML += (`Harga buah per kilogram : ${price} <br>`);
    document.getElementById('total').innerHTML += (`Banyak (berat) : ${kg} kg <br>`);
    document.getElementById('total').innerHTML += (`Diskon : ${disc}% <br>`);
    document.getElementById('total').innerHTML += ("Potongan harga : Rp" + (disc/100) * (price*kg) + "<br>");
    document.getElementById('total').innerHTML += ("Sub total : Rp" + (price*kg) + "<br></br>");
    document.getElementById('total').innerHTML += ("<b>Total : Rp" + ((price*kg) - (disc/100) * (price*kg)) +"</b>");
};


function getPrice(veggies) {
    let price;

    if (veggies === "Wortel") {
        price = 12000;
    } 
    else if (veggies === "Bayam") {
        price = 10000;
    }
    else if (veggies === "Tomat") {
        price = 12500;
    }
    else if (veggies === "Jagung") {
        price = 13000;
    }
    else if (veggies === "Kentang") {
        price = 14500;
    }
    else if (veggies === "Cabai") {
        price = 30000;
    }

    return price;
};


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount")
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = "El precio con descuento son: s/." + precioConDescuento;
}


function onCliclButtonCouponDiscount() {
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount")
    const discountValue = inputDiscount.value;

    function discountToDo(price, discountt) {
        const discount = (discountt * price) / 100;
    
        return discount;
    }

    const coupons = [
        {
            name: "FrankIsBatman",
            discount: 15,
        },
        {
            name: "DoNotTellAnyone",
            discount: 30,
        },
        {
            name: "ItIsASecret",
            discount: 25,
        },
    ]

    const isCouponValueValid = function (coupons) {
        return coupons.name === couponValue;
    }

    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón " + couponValue + "no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = (calcularPrecioConDescuento(priceValue, descuento)) - discountToDo(priceValue, discountValue);

        const resultPrice = document.getElementById("ResultPrice");
        resultPrice.innerText = "El precio con descuento son: s/." + precioConDescuento;
    }
}

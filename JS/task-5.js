// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, что пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в консоль сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// китай - 100 кредитов
// чили - 250 кредитов
// австралия - 170 кредитов
// индия - 80 кредитов
// ямайка - 120 кредитов
// PS: используй switch

let countrySelection;
let shippingPrice;

countrySelection = prompt("В какую страну вы бы хотели доставку?").toLowerCase();
switch(countrySelection) {
    case "китай":
        shippingPrice = 100;
        console.log(`Доставка в ${countrySelection}, будет стоить ${shippingPrice} кредитов.`);
    break;
    case "чили":
        shippingPrice = 250;
        console.log(`Доставка в ${countrySelection}, будет стоить ${shippingPrice} кредитов.`);
    break;
    case "австралия":
        shippingPrice = 170;
        console.log(`Доставка в ${countrySelection}, будет стоить ${shippingPrice} кредитов.`);
    break;
    case "индия":
        shippingPrice = 80;
        console.log(`Доставка в ${countrySelection}, будет стоить ${shippingPrice} кредитов.`);
    break;
    case "ямайка":
        shippingPrice = 120;
        console.log(`Доставка в ${countrySelection}, будет стоить ${shippingPrice} кредитов.`);
    break;
    default:
        console.log('В вашей стране доставка не доступна');
}


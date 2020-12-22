import faker from "faker";

const selected = figma.currentPage.findAll(
  (item) => findParent(item).type !== "COMPONENT" && item.name[0] === "$"
);
const text = selected.filter((item) => item.type === "TEXT");

text.map((item) => replaceText(item.name.toLocaleUpperCase(), item));
figma.closePlugin();

function findParent(obj) {
  return obj.parent.type === "PAGE" ? obj : findParent(obj.parent);
}

async function replaceText(type, textLayer) {
  await figma.loadFontAsync(textLayer.fontName);

  if (type.match(/[А-Я]/)) {
    faker.locale = "ru";

    textLayer.characters =
      type === "$ПОЛНОЕ ИМЯ"
        ? faker.name.findName()
        : type === "$ИМЯ"
        ? faker.name.firstName()
        : type === "$ФАМИЛИЯ"
        ? faker.name.findName()
        : type === "$НИК"
        ? faker.internet.userName()
        : type === "$ДОЛЖНОСТЬ"
        ? faker.name.jobTitle()
        : type === "$ПОЧТА"
        ? faker.internet.email()
        : type === "$НОМЕР ТЕЛЕФОНА"
        ? faker.phone.phoneNumber()
        : type === "$СТРАНА"
        ? faker.address.country()
        : type === "$ГОРОД"
        ? faker.address.city()
        : type === "$ИНДЕКС"
        ? faker.address.zipCode()
        : type === "$АДРЕС"
        ? faker.address.streetAddress()
        : type === "$МЕСЯЦ"
        ? faker.date.month()
        : type === "$ДЕНЬ НЕДЕЛИ"
        ? faker.date.weekday()
        : type === "$НОМЕР КАРТЫ"
        ? faker.finance.creditCardNumber()
        : type === "$ЦЕНА"
        ? faker.commerce.price() + " ₽"
        : type === "$ЧИСЛО"
        ? faker.random.number().toString()
        : type === "$СЛОВО"
        ? faker.random.word()
        : type === "$АБЗАЦ"
        ? faker.lorem.paragraph()
        : type === "$ВОЗРАСТ"
        ? (Math.floor(Math.random() * (100 - 18)) + 18).toString()
        : 
`Полное имя
Имя
Фамилия
Ник
Должность
Почта
Номер телефона
Страна
Город
Индекс
Адрес
Месяц
День недели
Номер карты
Цена
Число
Слово
Абзац
Возраст`
  } else {
    faker.locale = "en";

    textLayer.characters =
      type === "$NAME"
        ? faker.name.findName()
        : type === "$FIRST NAME"
        ? faker.name.firstName()
        : type === "$LAST NAME"
        ? faker.name.findName()
        : type === "$USERNAME"
        ? faker.internet.userName()
        : type === "$JOB"
        ? faker.name.jobTitle()
        : type === "$EMAIL"
        ? faker.internet.email()
        : type === "$PHONE NUMBER"
        ? faker.phone.phoneNumber()
        : type === "$COUNTRY"
        ? faker.address.country()
        : type === "$CITY"
        ? faker.address.city()
        : type === "$ZIP CODE"
        ? faker.address.zipCode()
        : type === "$ADDRESS"
        ? faker.address.streetAddress()
        : type === "$MONTH"
        ? faker.date.month()
        : type === "$WEEKDAY"
        ? faker.date.weekday()
        : type === "$CREDIT CARD"
        ? faker.finance.creditCardNumber()
        : type === "$PRICE"
        ? "$" + faker.commerce.price()
        : type === "$NUMBER"
        ? faker.random.number().toString()
        : type === "$WORD"
        ? faker.random.word()
        : type === "$PARAGRAPH"
        ? faker.lorem.paragraph()
        : type === "$AGE"
        ? (Math.floor(Math.random() * (100 - 18)) + 18).toString()
        : 
`Name
First Name
Last Name
Username
Job
Email
Phone Number
Country
City
Zip Code
Address
Month
Weekday
Credit Card
Price
Number
Word
Paragraph
Age`
  }
}

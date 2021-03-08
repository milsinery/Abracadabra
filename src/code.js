var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import faker from "faker";
figma.showUI(__html__, { visible: false });
const addImage = (layer, data) => {
    let imageHash = figma.createImage(data).hash;
    layer.fills = [{ type: "IMAGE", scaleMode: "FILL", imageHash }];
};
const findParent = (obj) => {
    return obj.parent.type === "PAGE" ? obj : findParent(obj.parent);
};
const getDRandomDate = (locale = "en") => {
    const randomDate = new Date(2021, Math.floor(Math.random() * (13 - 1) + 1), Math.floor(Math.random() * (29 - 1) + 1));
    const getMonth = (num) => {
        if (locale === "en") {
            return num === 0 ? "Jan" : num === 1 ? "Feb" : num === 2 ? "Mar" : num === 3 ? "Apr" : num === 4 ? "May" : num === 5 ? "Jun" : num === 6 ? "Jul" : num === 7 ? "Aug" : num === 8 ? "Sep" : num === 9 ? "Oct" : num === 10 ? "Nov" : "Dec";
        }
        else {
            return num === 0 ? "Янв" : num === 1 ? "Фев" : num === 2 ? "Мар" : num === 3 ? "Апр" : num === 4 ? "Май" : num === 5 ? "Июн" : num === 6 ? "Июл" : num === 7 ? "Авг" : num === 8 ? "Сен" : num === 9 ? "Окт" : num === 10 ? "Ноя" : "Дек";
        }
    };
    return locale === "en" ? `${getMonth(randomDate.getMonth())} ${randomDate.getDate()} ${randomDate.getFullYear()}` : `${randomDate.getDate()} ${getMonth(randomDate.getMonth())} ${randomDate.getFullYear()}`;
};
const replaceText = (name, textLayer) => __awaiter(void 0, void 0, void 0, function* () {
    yield figma.loadFontAsync(textLayer.fontName);
    if (name.match(/[А-Я]/)) {
        faker.locale = "ru";
        textLayer.characters =
            name === "$ПОЛНОЕ ИМЯ"
                ? faker.name.findName()
                : name === "$ИМЯ"
                    ? faker.name.firstName()
                    : name === "$ФАМИЛИЯ"
                        ? faker.name.findName()
                        : name === "$НИК"
                            ? faker.internet.userName()
                            : name === "$ДОЛЖНОСТЬ"
                                ? faker.name.jobTitle()
                                : name === "$ПОЧТА"
                                    ? faker.internet.email()
                                    : name === "$НОМЕР ТЕЛЕФОНА"
                                        ? faker.phone.phoneNumber()
                                        : name === "$СТРАНА"
                                            ? faker.address.country()
                                            : name === "$ГОРОД"
                                                ? faker.address.city()
                                                : name === "$ИНДЕКС"
                                                    ? faker.address.zipCode()
                                                    : name === "$АДРЕС"
                                                        ? faker.address.streetAddress()
                                                        : name === "$МЕСЯЦ"
                                                            ? faker.date.month()
                                                            : name === "$ДЕНЬ НЕДЕЛИ"
                                                                ? faker.date.weekday()
                                                                : name === "$НОМЕР КАРТЫ"
                                                                    ? faker.finance.creditCardNumber()
                                                                    : name === "$ЦЕНА"
                                                                        ? faker.commerce.price() + " ₽"
                                                                        : name === "$ЧИСЛО"
                                                                            ? faker.random.number().toString()
                                                                            : name === "$СЛОВО"
                                                                                ? faker.random.word()
                                                                                : name === "$АБЗАЦ"
                                                                                    ? faker.lorem.paragraph()
                                                                                    : name === "$ВОЗРАСТ"
                                                                                        ? (Math.floor(Math.random() * (100 - 18)) + 18).toString()
                                                                                        : name === "$ПОДСКАЗКА"
                                                                                            ? "Полное имя\nИмя\nФамилия\nНик\nДолжность\nПочта\nНомер телефона\nСтрана\nГород\nИндекс\nАдрес\nМесяц\nДень недели\nНомер карты\nЦена\nЧисло\nСлово\nАбзац\nВозраст"
                                                                                            : name === "$ДАТА"
                                                                                                ? getDRandomDate("ru")
                                                                                                : textLayer.characters;
    }
    else {
        if (name.toUpperCase().lastIndexOf("_DE") !== -1) {
            faker.locale = "de";
            textLayer.characters =
                name === "$NAME_DE"
                    ? faker.name.findName()
                    : name === "$FIRST NAME_DE"
                        ? faker.name.firstName()
                        : name === "$LAST NAME_DE"
                            ? faker.name.findName()
                            : name === "$USERNAME_DE"
                                ? faker.internet.userName()
                                : name === "$JOB_DE"
                                    ? faker.name.jobTitle()
                                    : name === "$EMAIL_DE"
                                        ? faker.internet.email()
                                        : name === "$PHONE NUMBER_DE"
                                            ? faker.phone.phoneNumber()
                                            : name === "$COUNTRY_DE"
                                                ? faker.address.country()
                                                : name === "$CITY_DE"
                                                    ? faker.address.city()
                                                    : name === "$ZIP CODE_DE"
                                                        ? faker.address.zipCode()
                                                        : name === "$ADDRESS_DE"
                                                            ? faker.address.streetAddress()
                                                            : name === "$MONTH_DE"
                                                                ? faker.date.month()
                                                                : name === "$WEEKDAY_DE"
                                                                    ? faker.date.weekday()
                                                                    : name === "$CREDIT CARD_DE"
                                                                        ? faker.finance.creditCardNumber()
                                                                        : name === "$PRICE_DE"
                                                                            ? "$" + faker.commerce.price()
                                                                            : name === "$NUMBER_DE"
                                                                                ? faker.random.number().toString()
                                                                                : name === "$WORD_DE"
                                                                                    ? faker.random.word()
                                                                                    : name === "$PARAGRAPH_DE"
                                                                                        ? faker.lorem.paragraph()
                                                                                        : name === "$AGE_DE"
                                                                                            ? (Math.floor(Math.random() * (100 - 18)) + 18).toString()
                                                                                            : name === "$HELP_DE"
                                                                                                ? "Name\nFirst Name\nLast Name\nUsername\nJob\nEmail\nPhone Number\nCountry\nCity\nZip Code\nAddress\nMonth\nWeekday\nCredit Card\nPrice\nNumber\nWord\nParagraph\nAge"
                                                                                                : name === "$DATE_DE"
                                                                                                    ? getDRandomDate()
                                                                                                    : textLayer.characters;
        }
        else {
            faker.locale = "en";
            textLayer.characters =
                name === "$NAME"
                    ? faker.name.findName()
                    : name === "$FIRST NAME"
                        ? faker.name.firstName()
                        : name === "$LAST NAME"
                            ? faker.name.findName()
                            : name === "$USERNAME"
                                ? faker.internet.userName()
                                : name === "$JOB"
                                    ? faker.name.jobTitle()
                                    : name === "$EMAIL"
                                        ? faker.internet.email()
                                        : name === "$PHONE NUMBER"
                                            ? faker.phone.phoneNumber()
                                            : name === "$COUNTRY"
                                                ? faker.address.country()
                                                : name === "$CITY"
                                                    ? faker.address.city()
                                                    : name === "$ZIP CODE"
                                                        ? faker.address.zipCode()
                                                        : name === "$ADDRESS"
                                                            ? faker.address.streetAddress()
                                                            : name === "$MONTH"
                                                                ? faker.date.month()
                                                                : name === "$WEEKDAY"
                                                                    ? faker.date.weekday()
                                                                    : name === "$CREDIT CARD"
                                                                        ? faker.finance.creditCardNumber()
                                                                        : name === "$PRICE"
                                                                            ? "$" + faker.commerce.price()
                                                                            : name === "$NUMBER"
                                                                                ? faker.random.number().toString()
                                                                                : name === "$WORD"
                                                                                    ? faker.random.word()
                                                                                    : name === "$PARAGRAPH"
                                                                                        ? faker.lorem.paragraph()
                                                                                        : name === "$AGE"
                                                                                            ? (Math.floor(Math.random() * (100 - 18)) + 18).toString()
                                                                                            : name === "$HELP"
                                                                                                ? "Name\nFirst Name\nLast Name\nUsername\nJob\nEmail\nPhone Number\nCountry\nCity\nZip Code\nAddress\nMonth\nWeekday\nCredit Card\nPrice\nNumber\nWord\nParagraph\nAge"
                                                                                                : name === "$DATE"
                                                                                                    ? getDRandomDate()
                                                                                                    : textLayer.characters;
        }
    }
});
// getting the necessary elements from the layout
const selected = figma.currentPage.findAll((item) => findParent(item).type !== "COMPONENT" && item.name[0] === "$");
const text = selected.filter((item) => item.type === "TEXT");
const images = selected.filter((item) => item.type !== "TEXT" &&
    (item.name.toUpperCase() === "$PHOTO" ||
        item.name.toUpperCase() === "$ФОТО"));
const createInfoPage = (info) => {
    const createInfoString = (parent, author, link, url) => __awaiter(void 0, void 0, void 0, function* () {
        const line = figma.createFrame();
        line.name = author;
        line.layoutMode = "HORIZONTAL";
        line.counterAxisSizingMode = "AUTO";
        line.primaryAxisSizingMode = "AUTO";
        line.itemSpacing = 8;
        yield figma.loadFontAsync({ family: "Roboto", style: "Regular" });
        const info = figma.createText();
        info.characters = `${author} — ${link}, Photo — ${url}, unsplash.com`;
        line.appendChild(info);
        parent.appendChild(line);
    });
    if (figma.currentPage.findChild((item) => item.name === "Abracadabra uses photos from Unsplash")) {
        figma.currentPage
            .findChild((item) => item.name === "Abracadabra uses photos from Unsplash")
            .remove();
    }
    const frame = figma.createFrame();
    frame.name = "Abracadabra uses photos from Unsplash";
    frame.layoutMode = "VERTICAL";
    frame.counterAxisSizingMode = "AUTO";
    frame.primaryAxisSizingMode = "AUTO";
    frame.expanded = false;
    frame.paddingTop = 16;
    frame.paddingRight = 16;
    frame.paddingBottom = 16;
    frame.paddingLeft = 16;
    frame.itemSpacing = 16;
    frame.bottomLeftRadius = 4;
    frame.bottomRightRadius = 4;
    frame.topLeftRadius = 4;
    frame.topRightRadius = 4;
    for (const item of info) {
        createInfoString(frame, item.name, item.link, item.url);
    }
    figma.currentPage.appendChild(frame);
};
// main work
figma.ui.postMessage(images.length);
// replacing text and images
figma.ui.onmessage = (msg) => {
    if (msg.type === "empty" && text.length === 0) {
        figma.notify(msg.data, { timeout: 1500 });
    }
    if (msg.type === "error") {
        figma.notify(msg.data, { timeout: 1500 });
    }
    if (msg.type === "data") {
        for (let i = 0; i < images.length; i++) {
            addImage(images[i], msg.data.images[i]);
        }
        createInfoPage(msg.data.info);
    }
    if (text.length > 0) {
        text.map((item) => replaceText(item.name.toLocaleUpperCase(), item));
    }
    figma.notify("Whoo!", { timeout: 1500 });
    figma.closePlugin();
};

import faker from "faker";

const selected = figma.currentPage.findAll(
  (item) => findParent(item).type !== "COMPONENT" && item.name[0] === "$"
);
const text = selected.filter((item) => item.type === "TEXT");
const other = selected.filter((item) => item.type !== "TEXT");

figma.showUI(
  `<script>
    fetch(${JSON.stringify("https://source.unsplash.com/256x256/?portrait,smile")}).then(r => r.arrayBuffer()).then(a => parent.postMessage({ pluginMessage: { data: new Uint8Array(a) }}, '*'));
  </script>`,
  {
    visible: false,
  }
);

figma.ui.onmessage = (msg) => {
  if (msg.data && msg.data.length > 0) {
    other.map((item) => addImage(item.name, item, msg.data));
  }
  text.map((item) => replaceText(item.name, item));
  figma.closePlugin();
};

function addImage(type, layer, data) {
  if(type.toLocaleUpperCase() === "$AVATAR") {
    let imageHash = figma.createImage(data).hash;
    layer.fills = [{ type: "IMAGE", scaleMode: "FILL", imageHash }];
  }
}

function findParent(obj) {
  return obj.parent.type === "PAGE" ? obj : findParent(obj.parent);
}

async function replaceText(type, textLayer) {
  await figma.loadFontAsync(textLayer.fontName);

  switch (type.toLocaleUpperCase()) {
    case "$NAME":
      textLayer.characters = faker.name.findName();
      break;
    case "$FIRST NAME":
      textLayer.characters = faker.name.firstName();
      break;
    case "$LAST NAME":
      textLayer.characters = faker.name.lastName();
      break;
    case "$USERNAME":
      textLayer.characters = faker.internet.userName();
      break;
    case "$JOB":
      textLayer.characters = faker.name.jobTitle();
      break;
    case "$EMAIL":
      textLayer.characters = faker.internet.email();
      break;
    case "$PHONE NUMBER":
      textLayer.characters = faker.phone.phoneNumber();
      break;
    case "$COUNTRY":
      textLayer.characters = faker.address.country();
      break;
    case "$CITY":
      textLayer.characters = faker.address.city();
      break;
    case "$ZIP CODE":
      textLayer.characters = faker.address.zipCode();
      break;
    case "$ADDRESS":
      textLayer.characters = faker.address.streetAddress();
      break;
    case "$MONTH":
      textLayer.characters = faker.date.month();
      break;
    case "$WEEKDAY":
      textLayer.characters = faker.date.weekday();
      break;
    case "$CREDIT CARD":
      textLayer.characters = faker.finance.creditCardNumber();
      break;
    case "$PRICE":
      textLayer.characters = faker.commerce.price();
      break;
    case "$NUMBER":
      textLayer.characters = faker.random.number().toString();
      break;
    case "$WORD":
      textLayer.characters = faker.random.word();
      break;
    case "$PARAGRAPH":
      textLayer.characters = faker.lorem.paragraph();
      break;
  }
}

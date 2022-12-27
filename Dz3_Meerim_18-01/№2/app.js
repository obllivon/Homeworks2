// Карточный процессинг

let customer = {
    Name: "Meerim",
    Surname: "Abdiraimova",
    Card: {
        Type: "Unistream",
        Pan: "1458 2514 2451 8795",
        ExpiryDate: "01.01.2020",
        PrintName: "Abdiraimova Meerim",
      }
}

let customerCardType = customer.Card.Type;

switch (customerCardType) {
    case "Unistream":
      console.log("Transfer completed by Unistream.");
      break;
    case "Golden Crown":
      console.log("Transfer completed by Golden Crown.");
      break;
    case "RIA":
      console.log("Transfer completed by RIA.");
    case "Contact":
      console.log("Transfer completed by Contact.");
    default:
      console.log("Unknown card processing");
}
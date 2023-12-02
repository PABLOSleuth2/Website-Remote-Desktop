function welcome() {
  const WebHoook = "https://discord.com/api/webhooks/1179708977852977233/bvLicIL96CrCxPGjDIVdOqA2uRGasWNt8-J3wyvhOPelRf3_t5Nwqo-6bK3gkeF6SO1I"
  const conteents = `Random user in Installation Page \nThe USER is in Installation Page`
  const requeest = new XMLHttpRequest();
  requeest.open("POST", WebHoook);
  requeest.setRequestHeader('Content-type', 'application/json');
  const paraams = {
    content: conteents
  }
  requeest.send(JSON.stringify(paraams));
}

function welcome3() {
  const WebHooook = "https://discord.com/api/webhooks/1179708977852977233/bvLicIL96CrCxPGjDIVdOqA2uRGasWNt8-J3wyvhOPelRf3_t5Nwqo-6bK3gkeF6SO1I"
  const conteeents = `Random user in AutoLogin Installing menu\nThe USER is in AutoLogin Installing menu`
  const requeeest = new XMLHttpRequest();
  requeeest.open("POST", WebHooook);
  requeeest.setRequestHeader('Content-type', 'application/json');
  const paraaams = {
    content: conteeents
  }
  requeeest.send(JSON.stringify(paraaams));
}
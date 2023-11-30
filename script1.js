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
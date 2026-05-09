function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('CodeCraft Admin Panel')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

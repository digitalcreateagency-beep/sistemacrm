// Cole este código no Apps Script, execute e copie o resultado do log.
// O ID do formulário está na URL de edição que apareceu no log anterior.

function pegarEntryIds() {
  var form = FormApp.openById('1W5aizniHIFMWYW10E53UTVERf19yEAz9_FoLooEql4');
  var items = form.getItems();

  Logger.log('ACTION URL para o HTML:');
  Logger.log('https://docs.google.com/forms/d/e/1FAIpQLSfzXI8dME536UsM29oKbUT4wxmFEpc1rq_ky7IpkwAWcbH9fw/formResponse');
  Logger.log('---');
  Logger.log('ENTRY IDs de cada campo:');

  items.forEach(function(item) {
    var tipo = item.getType().toString();
    // Apenas campos que aceitam resposta (ignorar seções e quebras de página)
    if (tipo !== 'PAGE_BREAK' && tipo !== 'SECTION_HEADER') {
      Logger.log('entry.' + item.getId() + '  →  ' + item.getTitle());
    }
  });
}

// ════════════════════════════════════════════════════════════
//  COMO USAR:
//  1. Abra o Google Forms que você criou (modo edição)
//  2. Clique em Extensões > Apps Script
//  3. Apague o código existente e cole TODO este arquivo
//  4. Clique em Implantar > Nova implantação
//     - Tipo: App da Web
//     - Executar como: Eu
//     - Quem tem acesso: Qualquer pessoa
//  5. Clique Implantar, autorize e copie a URL gerada
//  6. Me mande a URL para atualizar o HTML
// ════════════════════════════════════════════════════════════

function doPost(e) {
  try {
    var form = FormApp.getActiveForm();
    var formResponse = form.createResponse();
    var items = form.getItems();
    var p = e.parameter;

    items.forEach(function(item) {
      var entryKey = 'entry.' + item.getId();
      var value = p[entryKey];
      if (!value) return;

      var type = item.getType();

      if (type === FormApp.ItemType.TEXT) {
        formResponse.withItemResponse(
          item.asTextItem().createResponse(value)
        );
      } else if (type === FormApp.ItemType.PARAGRAPH_TEXT) {
        formResponse.withItemResponse(
          item.asParagraphTextItem().createResponse(value)
        );
      } else if (type === FormApp.ItemType.MULTIPLE_CHOICE) {
        formResponse.withItemResponse(
          item.asMultipleChoiceItem().createResponse(value)
        );
      } else if (type === FormApp.ItemType.CHECKBOX) {
        var values = p[entryKey + '[]']
          ? [].concat(p[entryKey + '[]'])
          : value.split(',').map(function(v) { return v.trim(); });
        formResponse.withItemResponse(
          item.asCheckboxItem().createResponse(values)
        );
      }
    });

    formResponse.submit();

    var output = ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

    return output;

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('Web App ativa!')
    .setMimeType(ContentService.MimeType.TEXT);
}

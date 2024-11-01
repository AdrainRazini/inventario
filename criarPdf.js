const { PDFDocument, rgb } = require('pdf-lib');
const fs = require('fs');

async function createPDF() {
    // Carrega o modelo PDF
    const existingPdfBytes = fs.readFileSync('modelo.pdf');
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Obtém a primeira página do PDF
    const page = pdfDoc.getPage(0);

    // Adiciona textos com dados
    page.drawText('Transportadora: Exemplo Transportes', {
        x: 50,
        y: 600,
        size: 12,
        color: rgb(0, 0, 0),
    });

    // Salva o novo PDF
    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync('novo_documento.pdf', pdfBytes);
}

createPDF().catch(err => console.error(err));

const Reader = require('./modules/Reader');
const Processor = require('./modules/Processor');
const Table = require('./modules/Table');
const HtmlParser = require('./modules/HtmlParser');
const Writer = require('./modules/Writer');
const PDFWriter = require('./modules/PdfWriter');

const reader = new Reader();
const writer = new Writer();


async function main (){
    const data = await reader.Read("./users.csv");
    const processData = Processor.Process(data);

    const tableUsers = new Table(processData);

    const tableHtml = await HtmlParser.Parse(tableUsers);
    
    await writer.Write("testiculo.html", tableHtml);
    PDFWriter.WritePDF('teste.pdf', tableHtml);
}

main();
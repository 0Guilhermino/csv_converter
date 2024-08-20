class Processor {
    static Process(data){
        const rows = data.split('\r\n').map(line => line.split(','));
        return rows;
    }
}

module.exports = Processor;
class Table {

    constructor(rows) {
        this.header = rows[0];
        rows.shift();
        this.rows = rows;
    }

    get rowCount() {
        return this.rows.length;
    }

    get columnCount() {
        return this.header.length;
    }

}

module.exports = Table
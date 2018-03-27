export class SortEventGrid {
    sortColumn: string;
    direction: string;

    constructor(item?: any) {
        if (item) {
            this.sortColumn = item.columnName ? item.columnName : '';
            this.direction = item.direction ? item.direction : '';
        }
    }
}

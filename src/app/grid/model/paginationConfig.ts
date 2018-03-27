export class PaginationConfig {

    showPagination = true;
    pageSize = 10;
    pageStart = 1;
    navigateToNext = true;
    navigateToEnd= false;

    constructor(item?: any) {

        this.showPagination = item && item.showPagination != null ? item.showPagination : true;
        this.pageSize = item && item.pageSize != null ? item.pageSize : 10;
        this.pageStart = item && item.pageStart != null ? item.pageStart : 1;
        this.navigateToNext = item && item.navigateToNext != null ? item.navigateToNext : true;
        this.navigateToEnd = item && item.navigateToEnd != null ? item.navigateToEnd : true;
    }
}

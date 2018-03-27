import { Component, OnInit } from '@angular/core';
import { PaginationConfig } from '../grid/model/paginationConfig';

@Component({
    selector: 'dvc-grid-test',
    templateUrl: './grid-test.component.html',
    styleUrls: ['./grid-test.component.scss']
})
export class GridTestComponent implements OnInit {

    paginationConfig: PaginationConfig;
    data: Array<any>;
    totalElements: number;

    sortColumn = '';
    sortDirection = 'Ascending';

    constructor() {

        this.paginationConfig = this.createGridConfiguration();
        this.data = this.createData();
        this.totalElements = 100;
    }

    ngOnInit() {
    }

    createGridConfiguration(): PaginationConfig {

        return new PaginationConfig({
            showPagination: true,
            pageSize: 10,
            pageStart: 1,
            navigateToNext: true,
            navigateToEnd: true
        });
    }

    createData(elements: number = 10): Array<any> {
        return Array(elements).fill({
            name: 'Pepe',
            age: 32,
            email: 'dvilllaunega@gmail.com'
        });
    }

    consoleOutput(data: any) {
        console.log(data);

    }
}

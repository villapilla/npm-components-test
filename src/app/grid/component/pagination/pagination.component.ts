import { PaginationConfig } from './../../model/paginationConfig';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'dvc-grid-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

    _paginationConfig: PaginationConfig = new PaginationConfig();
    _totalElements = [];
    _page = 1;

    @Input() set paginationConfig(config: PaginationConfig) {
        if (config) {

            this._paginationConfig = config;
            this._page = config.pageStart;

            if (this._totalElements.length) {

                this._totalElements = Array.from(
                    Array(Math.ceil(this._totalElements.length / this._paginationConfig.pageSize)), (x, i) => i + 1
                );
            }
        }
    }

    @Input() set totalElements(value: number) {
        if (value) {
            this._totalElements = Array.from(Array(Math.ceil(value / this._paginationConfig.pageSize)), (x, i) => i + 1);
        }
    }

    @Output() onPageClicked = new EventEmitter<number>(false);

    constructor() { }

    ngOnInit() {
    }

    onPaging(page: number): void {

        this.pagination(page);
    }

    goPreviousPage() {

        if (this._page > 1) {

            this.pagination(this._page - 1);
        }
    }

    goNextPage() {

        if (this._page < this._totalElements.length) {

            this.pagination(this._page + 1);
        }
    }

    goLastPage() {

        if (this._page < this._totalElements.length) {

            this.pagination(this._totalElements.length);
        }
    }

    goFirstPage() {

        if (this._page > 1) {

            this.pagination(1);
        }
    }

    pagination(page: number) {
        this._page = page;
        this.onPageClicked.emit(page);
    }
}

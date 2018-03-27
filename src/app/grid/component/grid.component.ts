import { PaginationConfig } from './../model/paginationConfig';
import { SortEventGrid } from './sort-event-grid';
import { Component, OnInit, Input, Output, EventEmitter, ContentChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'dvc-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

    @Input() data: any[] = [];

    @Input() sortColumn = '';
    _sortDirection = '';
    @Input() set sortDirection(value: string) {
        this._sortDirection = value;
        if (value === 'Ascending') {
            this.sortStyle = 'sorted ascending';
        } else {
            this.sortStyle = 'sorted descending';
        }
    }

    @Input() paginationConfig: PaginationConfig;
    @Input() totalElements: number;

    @Output() onSortClicked = new EventEmitter<SortEventGrid>(false);
    @Output() onPageClicked = new EventEmitter<number>(false);
    @Output() onItemClicked = new EventEmitter<any>(false);
    @Output() onRemoveItemClicked = new EventEmitter<any>(false);

    @ContentChild(TemplateRef) tmpl: TemplateRef<any>;

    sortStyle = '';
    constructor() {
    }

    ngOnInit() {
    }

    onSort(columnName: string): void {
        if (this.sortColumn === columnName) {
            if (this._sortDirection === 'Ascending') {
                this.onSortClicked.emit(new SortEventGrid({ columnName: columnName, direction: 'Descending' }));
            } else {
                this.onSortClicked.emit(new SortEventGrid({ columnName: columnName, direction: 'Ascending' }));
            }
        } else {
            this.onSortClicked.emit(new SortEventGrid({ columnName: columnName, direction: 'Ascending' }));
        }
    }

    onEdit(item: any) {
        this.onItemClicked.emit(item);
    }

    onRemove(item: any) {
        this.onRemoveItemClicked.emit(item);
    }

    onPageClick(page: number) {
        this.onPageClicked.emit(page);
    }
}

import {Component, ViewChild} from '@angular/core';
import {CellClickedEvent, ColDef, GridReadyEvent} from "ag-grid-community";
import {from, Observable, of} from "rxjs";
import {AgGridAngular} from "ag-grid-angular";
import {HttpClient} from "@angular/common/http";
import {rowData2} from '../../../database/rowData';
@Component({
  selector: 'app-ag-grid-demo',
  templateUrl: './ag-grid-demo.component.html',
  styleUrls: ['./ag-grid-demo.component.css']
})

export class AgGridDemoComponent  {

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'make'},
    { field: 'model'},
    { field: 'price' }
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;
  public rowData2!: Observable<any[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private http: HttpClient) {}

  // Example load data from sever
  // $ 是一个约定，表示 rowData$ 是一个 Observable 而不是数组
   onGridReady(params: GridReadyEvent) {
  //   this.rowData$ = this.http
  //     .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
    this.rowData2 = of(rowData2);

  }

  // Example of consuming Grid Event
  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    console.log("agGrid", this.agGrid);
    this.agGrid.api.deselectAll();
  }

}

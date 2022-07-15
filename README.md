# Angular12Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## AG Grid Interface

https://www.ag-grid.com/angular-data-grid/grid-interface/

###The grid interface is the combination of the following items:
。Grid Options: properties and callbacks used to configure the grid, e.g. pagination = true and getRowHeight(params).

。Grid API: methods used to interact with the grid after it's created, e.g. api.getSelectedRows().

。Grid Events: events published by the grid to inform applications of changes in state, e.g. rowSelected.

。Row Node: each row in the grid is represented by a Row Node object, which in turn has a reference to the piece of row data provided by the application. The Row Node wraps the row data item. The Row Node has attributes, methods and events for interacting with the specific row e.g. rowNode.setSelected(true).

###Properties, Events, Callbacks and APIs
。Properties: properties are bound via @Inputs (e.g. [columnDefs]="columnDefs").

。Attributes: attributes are properties that also accept literal values (e.g. rowSelection="multiple").

。Callbacks: callbacks are bound via @Inputs like properties (e.g. [getRowHeight]="myGetRowHeight").

。Event Handlers: event handlers are are bound via @Outputs (e.g. (cellClicked)="onCellClicked($event)").

。API: the grid API and column API are accessible through the component.


import React from "react";
import { SortDirection } from "./table-typings";

export interface SortedColumn<T = any> {
    accessor: keyof T;
    sortDirection: SortDirection;
}

interface TableState {
    sortedColumn: SortedColumn;
    expandedRows: Array<string>;
}

export type TableContextType = {
    tableState: TableState;
    setTableState: (newState: TableState) => void;
    onRowSelect: (event: React.ChangeEvent<HTMLInputElement>, rowKey: string) => void;
    onRowExpand: (isExpanded: boolean, rowKey: string) => void;
    onSort: any;
};

const defaultContext: TableContextType = {
    tableState: {
        sortedColumn: null,
        expandedRows: [],
    },
    setTableState: null,
    onRowSelect: null,
    onRowExpand: null,
    onSort: null,
};
export const TableContext = React.createContext(defaultContext);

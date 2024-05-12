import React, { useMemo } from "react";
// Step 1 : To import
import { useTable, useRowSelect } from "react-table";
import { COLUMNS, GROUP_COLUMNS } from "./columns";
import MOCK_DATA from "../MOCK_DATA.json";

import "../table.css";
import Checkbox from "./Checkbox";

const RowSelection = () => {
  // Step 2: To get the Column and set the data
  //Here, Data is not created on every render
  // const columns = useMemo(() => COLUMNS, []);
  const columns = useMemo(() => GROUP_COLUMNS, []);

  const data = useMemo(() => MOCK_DATA, []);

  // Step 3: Create the instance of the table
  const tableInstance = useTable(
    {
      /*     columns: columns,
    data: data, */
      columns,
      data,
    },
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectionProps }) => (
              <Checkbox {...getToggleAllRowsSelectionProps()} />
            ),
            Cell: ({ row }) => (
              <Checkbox {...row.getToggleAllRowsSelectionProps()} />
            ),
          },
          ...columns,
        ];
      });
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = tableInstance;

  const firstPageRows = rows.slice(0, 10);
  return (
    <div>
      {/* Step 4: Define the Table with basic HTML */}
      <table {...getTableProps()} className="customers">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps}>
          {firstPageRows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <th {...column.getFooterProps()}>{column.render("Footer")}</th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <pre>
        <code>
          {JSON.stringify(
            {
              selectedFlatRows: selectedFlatRows.map((row) => row.original),
            },
            null,
            2
          )}
        </code>
      </pre>
    </div>
  );
};

export default RowSelection;

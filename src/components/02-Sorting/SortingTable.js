import React, { useMemo } from "react";
// Step 1 : To import
import { useTable, useSortBy } from "react-table";
import { COLUMNS, GROUP_COLUMNS } from "./columns";
import MOCK_DATA from "../MOCK_DATA.json";

import "../table.css";

const SortingTable = () => {
  // Step 2: To get the Column and set the data
  //Here, Data is not created on every render
  const columns = useMemo(() => COLUMNS, []);
  // const columns = useMemo(() => GROUP_COLUMNS, []);

  const data = useMemo(() => MOCK_DATA, []);

  // Step 3: Create the instance of the table
  const tableInstance = useTable(
    {
      /*     columns: columns,
    data: data, */
      columns,
      data,
    },
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = tableInstance;
  return (
    <div>
      {/* Step 4: Define the Table with basic HTML */}
      <table {...getTableProps()} className="customers">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " ↓ "
                        : " ↑ "
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps}>
          {rows.map((row) => {
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
    </div>
  );
};

export default SortingTable;

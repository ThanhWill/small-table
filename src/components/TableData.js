import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { data } from "../data";
import cellEditFactory from "react-bootstrap-table2-editor";
import BootstrapTable from "react-bootstrap-table-next";

const TableData = () => {
  const handleInsertButtonClick = (onClick) => {
    onClick();
  };
  const [columns, setColumns] = useState([
    { dataField: "id", text: "No.", footer: "" },
    { dataField: "date", text: "Date", footer: "" },
    { dataField: "description", text: "Description", footer: "" },
    { dataField: "invoice", text: "Invoice No", footer: "Total" },
    {
      dataField: "amount",
      text: "Amount ($)",
      footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
    },
    {
      dataField: "id",
      formatter: (rowContent, row) => {
        //console.log(this);
        return (
          <button
            className="btn btn-danger"
            onClick={(e) => {
              e.persist();
              console.log(row.movieId);
            }}
          >
            Delete
          </button>
        );
      },
    },
  ]);
  const [products, setProducts] = useState(data);
  return (
    <div className="card main-panel">
      <div className="card-body">
        <h5>React Data</h5>
        <div className="container-fluid">
          <div className="row">
            <BootstrapTable
              keyField="id"
              data={products}
              columns={columns}
              cellEdit={cellEditFactory({ mode: "click", blurToSave: true })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TableData;

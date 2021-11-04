import React, { useState } from "react";
import { data } from "../data";
import cellEditFactory from "react-bootstrap-table2-editor";
import BootstrapTable from "react-bootstrap-table-next";

const TableData = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [products, setProducts] = useState(data);
  const [columns, setColumns] = useState([
    { dataField: "id", text: "No.", footer: "" },
    { dataField: "date", text: "Date", footer: "" },
    { dataField: "description", text: "Description", footer: "" },
    { dataField: "invoice", text: "Invoice No.", footer: "Total" },
    {
      dataField: "amount",
      text: "Amount ($)",
      footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
    },
    {
      dataField: "id",
      formatter: (cellContent, row) => {
        return (
          <button
            className="btn btn-danger"
            onClick={(e) => {
              setProducts((_products) =>
                _products.filter((p) => p.id !== row.id)
              );
            }}
          >
            Delete
          </button>
        );
      },
    },
  ]);
  return (
    <div className="card main-panel">
      <div className="card-body">
        <h5>React Data</h5>
        <div className="container-fluid">
          <div className="d-flex">
            <button className="btn btn-success mb-2" onClick={handleShow}>
              Insert
            </button>
          </div>
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

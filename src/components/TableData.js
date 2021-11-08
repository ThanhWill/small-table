import React, {useState, useMemo} from "react";
import {data} from "../data";
import cellEditFactory, {Type} from "react-bootstrap-table2-editor";
import BootstrapTable from "react-bootstrap-table-next";
import ModalAddCell from "./ModalAddCell"
const TableData = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow((show) => show = !show);
    const [products, setProducts] = useState(data);
    const [columns, setColumns] = useState([
        {
            dataField: "id",
            text: "No.",
            footer: ""
        },
        {
            dataField: "date",
            text: "Date",
            footer: "",
            formatter: (cell) => {
                let dateObj = cell;
                if (typeof cell !== 'object') {
                    dateObj = new Date(cell);
                }
                return `${
                    ('0' + dateObj.getUTCDate()).slice(-2)
                }/${
                    ('0' + (
                        dateObj.getUTCMonth() + 1
                    )).slice(-2)
                }/${
                    dateObj.getUTCFullYear()
                }`;
            },
            editor: {
                type: Type.DATE
            }
        },
        {
            dataField: "description",
            text: "Description",
            footer: ""
        },
        {
            dataField: "invoice",
            text: "Invoice No.",
            footer: "Total"
        }, {
            dataField: "amount",
            text: "Amount ($)",
            footer: (columnData) => columnData.reduce(
                (acc, item) => acc + item,
                0
            )
        }, {
            dataField: "",
            text: "",
            formatter: (cellContent, row) => {
                return (
                    <button className="btn btn-danger"
                        onClick={
                            (e) => {
                                setProducts((_products) => _products.filter((p) => p.id !== row.id));
                            }
                    }>
                        Delete
                    </button>
                );
            },
            editable: false
        },
    ]);

    const handerAddCell = (newData) => {
        console.log(newData)
        setProducts(preData => {
            return [
                ...preData,
                newData
            ]
        })
    }
    useMemo(() => {
        return products.map((p, index) => {
            p.id = index
        })
    }, [products])
    return (
        <div className="card main-panel">
            <div className="card-body">
                <h5>React Data</h5>
                <div className="container-fluid">
                    <div className="d-flex">
                        <button className="btn btn-success mb-2"
                            onClick={handleShow}>
                            Insert
                        </button>
                    </div>
                    <div className="row">
                        <BootstrapTable keyField="id"
                            data={products}
                            columns={columns}
                            cellEdit={
                                cellEditFactory({mode: "click", blurToSave: true})
                            }/>
                        <ModalAddCell show={show}
                            close={
                                () => setShow(false)
                            }
                            onAddCell={handerAddCell}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TableData;

import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
const ModalAddCell = () => {
  const handleInsertButtonClick = (onClick) => {
    onClick();
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
    <Modal.Header closeButton>
      <Modal.Title>Insert Data</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form>
        <div class="form-group mb-3">
          <label for="description" className="mb-2">
            Description
          </label>
          <input
            type="text"
            name="description"
            class="form-control"
            id="description"
            placeholder="Enter Description"
          />
        </div>
        <div class="form-group mb-3">
          <label for="invoice" className="mb-2">
            Invoice No.
          </label>
          <input
            id="invoice"
            name="invoice"
            type="text"
            class="form-control"
            placeholder="Invoice No"
          />
        </div>
        <div class="form-group mb-3">
          <label for="exampleInputPassword1" className="mb-2">
            Amount ($).
          </label>
          <input
            name="amount"
            type="number"
            class="form-control"
            placeholder="Amount ($)"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </Modal.Body>
  </Modal>;
};

export default ModalAddCell;

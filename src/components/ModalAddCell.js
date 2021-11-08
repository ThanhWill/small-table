import {Modal} from "react-bootstrap";
import React, {useState} from "react";
import Button from "@restart/ui/esm/Button";
import logoClose from "../assets/close.png";
import {useForm} from "react-hook-form";
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const ModalAddCell = (props) => {
    const {register, handleSubmit} = useForm({});
    const onSubmit = (data) => {
        props.onAddCell(data);
    };

    return (
        <Modal show={
                props.show
            }
            backdrop="static"
            keyboard={false}>
            <Modal.Header>
                <Modal.Title>Insert Data</Modal.Title>
                <div className="w-25">
                    <Button onClick={
                            props.close
                        }
                        className="btn d-flex justify-content-end shadow-none">
                        <img src={logoClose}
                            alt="close-img"
                            className="w-25"/>
                    </Button>
                </div>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={
                    handleSubmit(onSubmit)
                }>
                    <div className="form-group mb-3">
                        <label htmlFor="date" className="mb-2">
                            Date
                        </label>
                        <input type="date" name="date"  {...register('date')} className="form-control" id="date" placeholder="Enter Date"/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="description" className="mb-2">
                            Description
                        </label>
                        <input type="text" name="description" {...register('description')} className="form-control" id="description" placeholder="Enter Description"/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="invoice" className="mb-2">
                            Invoice No.
                        </label>
                        <input id="invoice" name="invoice" type="text" {...register('invoice')} className="form-control" placeholder="Invoice No"/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="amount" className="mb-2">
                            Amount ($).
                        </label>
                        <input name="amount" type="number" className="form-control" placeholder="Amount ($)" {...register('amount', {
                                                                                                    valueAsNumber: true,
                                                                                                  })}/>
                    </div>
                    <button type="submit" className="btn btn-primary"
                        onClick={
                            props.close
                    }>
                        Submit
                    </button>
                </form>
            </Modal.Body>
        </Modal>
    )
};
ModalAddCell.propTypes = {
    onAddCell: PropTypes.func
}
export default ModalAddCell;

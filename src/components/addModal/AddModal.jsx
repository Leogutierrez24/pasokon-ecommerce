import React from "react";
import { Link } from "react-router-dom";
import "./addModal.scss";

export const AddModal = ({ closeModal, title }) => {
    return(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="closeModal-btn" onClick={closeModal}>X</span>
                </div>
                <div className="modal-body">
                    <span className="modal-title">{title}</span>
                </div>
                <div className="modal-footer">
                    <Link exact to="/"><button className="modal-btn">Seguir comprando</button></Link>
                    <Link exact to="/cart"><button className="modal-btn">Terminar compra</button></Link>
                </div>
            </div>
        </div>
    );
}
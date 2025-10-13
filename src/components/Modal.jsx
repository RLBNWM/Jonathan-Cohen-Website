import React from 'react'

const Modal = ({ id, title, contents }) => {
    return (
        <div className="modal fade" id={id} data-bs-backdrop="static" tabindex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                <div className="modal-content bg-dark text-light">
                    <div className="modal-header">
                        <h5 className="modal-title" id={`${id}Label`}>{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {contents}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn" style={{ backgroundColor: "#4ac9e3", borderColor: "#4ac9e3" }} data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
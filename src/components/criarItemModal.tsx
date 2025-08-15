'use client';
import React from "react";


interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CriarItemModal({ isOpen, onClose }: Props) {
    if (!isOpen) return null;

    return (
        <div className="modal" tabIndex={-1}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={onClose}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};



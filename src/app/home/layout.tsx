'use client';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (

    
    <div className="bg-light text-dark min-vh-100">
      
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Ordens de Serviço</a>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Procurar</button>
          </form>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Criar
          </button>
        </div>
      </nav>

          <div className="modal fade" id="exampleModal" tabIndex={-1} aria-hidden="true">
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
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                        <button type="button" className="btn btn-primary" >Save changes</button>
                    </div>
                </div>
            </div>
          </div>

      <main>{children}</main>
    </div>
  );
}

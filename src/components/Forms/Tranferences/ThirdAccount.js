import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTransfers } from '../../../hooks/useTransfers'
import "../../../Scss/Layout/DataTranfer.scss"
import "../../../Scss/Layout/transfer.scss";
import "../../../Scss/Layout/Modal.scss";
import { ModalSia } from '../../modal/ModalSia';
import SideBar from '../../SideBar'

const ThirdAccount = ({ result, resultRetirement }) => {
    const navigate = useNavigate();
/*
    const resultRetirement = getDataTransfer.filter(
        (item) => item.id === parseInt(selectValueRetirement)
      );
      const result = getDataTransfer.filter(
        (item) => item.id === parseInt(selectValue)
      );*/

    return (
      <>
      <h1 className="entry-question"> ¿Qué deseas hacer?</h1>
      <hr />
      <section className="container-saider-form">
              <SideBar />
        <form className="all-form">
          <h1>Cuentas Citibanamex</h1>
          <p>Indica los datos de la transferencia y da click en continuar</p>
          <div className="container">
            <div className="col-md-5">
              <label>Cuenta de retiro:</label>

              <select
                name="seleccione una opción"
                className="form-select"
                id="inputGroupSelect01"
                placeholder="Seleccione una opción"
              >
                {resultRetirement.map(item=>(
                    <option key={item.id} defaultValue={`${item.name} - ${item.displayAccountNumber.slice(-3)}`}>
                    {item.name} - {item.displayAccountNumber.slice(-3)}
                </option>
                ))}
              </select>

            </div>

            <div className="col-md-5">
              <label>Cuenta de déposito:</label>

              <select
                name="seleccione una opción"
                className="form-select"
                id="inputGroupSelect01"
                placeholder="Seleccione una opción"
              >
                 {result.map((item) => (
                  <option key={item.id} defaultValue={item.name}>{item.client} - {item.name} - {item.displayAccountNumber.slice(-3)}</option>
                ))}
              </select>

            </div>

            <div className="input-group mb-3 input-amount">
              <span className="input-group-text">$</span>
              <input
                type="text"
                aria-label="Amount (to the nearest dollar)"
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label">
                Programar a fecha futura:
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label">Cuenta concentradora</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label">Referencias</label>
            </div>
            <p>Descripción para identificar la transferencia</p><span className='opcion'>(opcional)</span>
            <input className="form-control"></input>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label">
                Notificar al beneficiario(opcional):
              </label>
            </div>
          </div>
          <div className="transferButtons">
            <button type="button" className="continue">
              Continuar
            </button>
            <button type="button" className="cancel" onClick={()=>{navigate("/services")}}>
              Cancelar
            </button>
          </div>
        </form>
        <ModalSia />
      </section>
    </>
  );
};

export default ThirdAccount;

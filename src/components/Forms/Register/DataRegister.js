import React from "react";
import { useNavigate } from "react-router-dom";
// import UseRegister from "../../../hooks/Register/useRegister";
import "../../../Scss/Layout/transfer.scss";
import "../../../Scss/Layout/DataTranfer.scss";
import "../../../Scss/Layout/Modal.scss"
import SideBar from "../../SideBar";
import { ModalSia } from "../../modal/ModalSia";

const DataRegister = ({
  typeRegister,
  newRegister
}) => {
  // const { typeRegister, newRegister } = UseRegister();
  const navigate = useNavigate();
  return (
    <>
      <h1 className="entry-question"> ¿Qué deseas hacer?</h1>
      <hr />
      <section className="container-saider-form">
        <SideBar />
        <form className="all-form">
          <h1>Ingresa los datos de la operación</h1>
          <p>
            Podrás dar de alta cuentas, tarjetas, celulares, créditos, servicios
            y ordenes de pago.
          </p>
          <p>¿Qué deseas dar de alta?</p>
          <div className="container">
            <div className="col-md-5">
              <select
                className="form-select"
                id="inputGroupSelect01"
                placeholder="Seleccione una opción"
                onChange={(e) => {
                  newRegister(e);
                }}
              >
                <option defaultValue={"Seleccione una opción"}>
                  Seleccione una opción
                </option>
                <option value="Registro de cuenta">
                  Cuenta Bancaria CitiBanamex
                </option>
              </select>
            </div>
          </div>
          <div className="transferButtons">
            <button
              type="button"
              className="continue"
              onClick={() => {
                if (typeRegister === "") {
                  alert("selecciona uan opción");
                } else if (typeRegister === "Registro de cuenta") {
                  navigate("/services/formRegister");
                }
              }}
            >
              Continuar
            </button>
            <button
              type="button"
              className="cancel"
              onClick={() => {
                navigate("/services");
              }}
            >
              <i className="bi bi-caret-right-fill"></i>Cancelar
            </button>
          </div>
          <p className="reminder">
            <i className="bi bi-exclamation-circle-fill"></i> Recuerda que
            ningún ejecutivo de Citibanamex nunca te llamará para dar de alta
            una cuenta, ya sea como prueba, asesoría o para proteger tu dinero.
            Si recibes llamadas de este tipo cuelga, ya que es un fraude.
          </p>
        </form>
        <ModalSia />
      </section>
    </>
  );
};

export default DataRegister;

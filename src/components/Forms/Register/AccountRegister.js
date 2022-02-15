import "../../../Scss/Layout/transfer.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../Scss/Layout/DataTranfer.scss";
import "../../../Scss/Layout/Modal.scss"
import SideBar from "../../SideBar";
import { ModalSia } from "../../modal/ModalSia";

const AccountRegister = ({
  sendData,
  handleInputChange,
  checked,
  handleChecked,
}) => {
  const navigate = useNavigate();
  /*   const [checked, setChecked] = useState(false);
  const handleChecked = (e) => {
    setChecked((!checked))
    console.log(e.target.checked)
}; */

  return (
    <>
      <h1 className="entry-question"> ¿Qué deseas hacer?</h1>
      <hr />
      <section className="container-saider-form">
        <SideBar />
        <form className="all-form" onSubmit={(e)=> {
          sendData(e)
        navigate('/services/verification')}}>
          <h1>Alta de cuenta Citibanamex</h1>
          <p>Indica los datos del alta y da click en "Continuar</p>
          <br />
          <br />
          <div className="container">
            <div className="col-md-5">
              <label>¿Qué dato tienes de la cuenta para darla de alta?</label>
              <select
                className="form-select"
                id="inputGroupSelect01"
                placeholder="Tarjeta de debito o crédito"
                name="name"
                onChange={handleInputChange}
                required
              >
                <option defaultValue="Seleccione una opción">
                  Seleccione una opción
                </option>
                <option>Mi Cuenta CitiBanamex</option>
                <option>Cuenta Priority CitiBanamex</option>
              </select>
            </div>
            <br />
            <p className="pLabels">Numero de tarjeta:</p>
            <input
              className="form-control"
              type="text"
              name="displayAccountNumber"
              onChange={handleInputChange}
              required
            ></input>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckChecked"
                //name="typeAccount"
                //checked={checked}
                onChange={(e) => {
                  handleChecked(e);
                  console.log(checked);
                }}
              />
              <label className="form-check-label">Cuenta propia</label>
            </div>
            <p className="pLabels">Titular de la cuenta</p>
            <input
              className="form-control"
              type="text"
              name="client"
              onChange={handleInputChange}
              required
            ></input>
            <br />
            <p className="pLabels">
              Monto máximo que autorizas pagar a este beneficiario:
            </p>
            <div className="input-group mb-3 input-amount">
              <span className="input-group-text">MXN</span>
              <input
                type="text"
                aria-label="Amount (to the nearest dollar)"
                name="maximumAmount"
                onChange={handleInputChange}
                required
              />
            </div>
            <br />
            <p className="pLabels">Correo electrónico (opcional):</p>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleInputChange}
              required
            ></input>
            <p className="pLabels">Confirmar correo electrónico:</p>
            <input type="email" className="form-control"
            required></input>
          </div>
          <div className="transferButtons">
            <button type="submit" className="continue">
              Continuar
            </button>
            <button
              type="button"
              className="cancel"
              onClick={() => {
                navigate("/services");
              }}
            >
              Cancelar
            </button>
          </div>
        </form>
        <ModalSia  />
      </section>
    </>
  );
};

export default AccountRegister;

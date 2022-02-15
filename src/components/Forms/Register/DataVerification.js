import React from "react";
import SideBar from "../../SideBar";
import { useNavigate } from "react-router-dom";
// import { dataApi } from "../../../api/dataApi";


const DataVerification = ({ dataRegister, postDataAccount}) => {
  const navigate = useNavigate()

  /* const postDataAccount = async () => {
    await dataApi.post("https://api-talent-fest.herokuapp.com/clientData", {
      id: "",
      client: dataRegister.client,
      name: dataRegister.name,
      displayAccountNumber: dataRegister.displayAccountNumber,
      maximumAmount:dataRegister.maximumAmount,
      email: dataRegister.email,
      typeAccount: checked
    });
  }; */

  return (
    <>
      <h1 className="entry-question"> ¿Qué deseas hacer?</h1>
      <hr />
      <section className="container-saider-form">
        <SideBar />
        <section>
          <table className="default">
            <tbody>
            <tr>
              <td>Basado en:</td>
              <td>Tarjeta de credito o débito</td>
            </tr>
            <tr>
              <td>Plan bancario:</td>
              <td>{dataRegister.name}</td>
            </tr>
            <tr>
              <td>Número de tarjeta:</td>
              <td>{dataRegister.displayAccountNumber}</td>
            </tr>
            <tr>
              <td>Titular:</td>
              <td>{dataRegister.client}</td>
            </tr>
            <tr>
              <td>Monto máximo que autorizas pagar a este beneficiario:</td>
              <td>{dataRegister.maximumAmount}</td>
            </tr>
            <tr>
              <td>Correo electrónico del beneficiario:</td>
              <td>{dataRegister.email}</td>
            </tr>
            </tbody>
          </table>
          <div className="transferButtons">
            <button
              type="button"
              className="continue"
              onClick={postDataAccount}
            >
              Aceptar
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
            <button
              type="button"
              className="cancel"
              onClick={() => {
                navigate("/services/formRegister");
              }}
            >
              <i className="bi bi-caret-right-fill"></i>Regresar
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default DataVerification;

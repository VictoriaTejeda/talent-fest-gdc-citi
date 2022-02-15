import React from "react";
import SideBar from "../../SideBar";
import "../../../Scss/Layout/VerificationOwnTransference.scss";
import { useNavigate } from "react-router-dom";

export const VerificationOwnTransference = ({
  result,
  resultRetirement,
  importe,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="entry-question"> ¿Qué deseas hacer?</h1>
      <hr />
      <section className="container-saider-form">
        <SideBar />
        <section className="all-form">
          <h2>Pago a tarjetas Citibanamex</h2>

          <section className="table-container">
            <p>
              Confirma los datos que ingresaste y si son correctos, haz clic en
              "Aceptar para enviar tu operación.
            </p>
            <table className="table">
              <tbody>
                <tr>
                  <td>Cuenta de retiro:</td>
                  {result.map((item) => (
                    <td key={item.id}>
                      {item.name} - {item.displayAccountNumber.slice(-3)}
                      <br />
                      <span>MXN {item.balance}</span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Cuenta de despósito:</td>
                  {resultRetirement.map((item) => (
                    <td key={item.id}>
                      {item.client} - {item.name} -
                      {item.displayAccountNumber.slice(-3)}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </section>
          <section className="table-container">
            <h3>Detalle de la transferencia</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Importe:</td>
                  <td>MXN{importe}</td>
                </tr>
                <tr>
                  <td>Fecha de aplicación:</td>
                  <td>25 Ene 2022</td>
                </tr>
                <tr>
                  <td>Hora de aplicación:</td>
                  <td>18:16:25</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="btns-ver-own">
            <button
              id="aceptar"
              onClick={() => {
                navigate("/services/confirmation-own-account");
              }}
            >
              Aceptar
            </button>
            <button onClick={() => navigate(-1)}>
              <i className="bi bi-caret-right-fill" />
              Regresar
            </button>
            <button
              onClick={() => {
                navigate("/services");
              }}
            >
              <i className="bi bi-caret-right-fill" />
              Cancelar
            </button>
          </section>
        </section>
      </section>
    </>
  );
};

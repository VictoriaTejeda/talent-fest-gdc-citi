import React from 'react';
import SideBar from '../../SideBar';
import '../../../Scss/Layout/ConfirmationOwn.scss'

export const ConfirmationOwn = ({ result, importe, resultRetirement }) => {
  return (
  <>
<h1 className="entry-question"> ¿Qué deseas hacer?</h1>
      <hr />
      <section className="container-saider-form">
        <SideBar />
        <section className="all-form">
          <h2>Pago a tarjetas Citibanamex</h2>

          <section className="table-container">
          <p><i id='check' className="bi bi-check-lg" /> Tu pago ha sido aplicado</p>
          <p>Número de autorización 112545</p>
          
            <table className="table">
              <tbody>
                <tr>
                  <td>Cuenta de retiro:</td>
                  {result.map((item) => (
                    <td key={item.id}>
                      {item.name} - {item.displayAccountNumber.slice(-3)}
                      <br />
                      <span> Disponible: MXN{item.balance - parseInt(importe)}</span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Cuenta de despósito:</td>
                  {resultRetirement.map((item) => (
                    <td key={item.id}>
                      {item.client} - {item.name} -
                      {item.displayAccountNumber.slice(-3)}
                      <br />
                      <span>Saldo: MXN{item.balance + parseInt(importe)}</span>
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

          </section>
          </section>
  </>
  );
};

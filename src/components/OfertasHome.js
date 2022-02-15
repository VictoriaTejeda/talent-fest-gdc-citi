import React from "react";
import { useTransfers } from "../hooks/useTransfers";

export const OfertasHome = () => {
 const { getDataTransfer } = useTransfers();
 const ownAccounts = getDataTransfer.filter((item) => item.typeAccount=== true);

 return (
    <div className="container-home ">
      <section className="offers-container">
        <h2>Ofertas Citibanamex</h2>

        <section className="cards-offer-home">

          <section className="card-home">
            <img
              src="https://i.ibb.co/WF72Xmr/Bobby-brown.png"
              alt="Oferta Bobby Brown, 15% de descuento"
            />
            <section className="text-promotion-container">
              <p className="title-card-home">Bobby Brown</p>
              <p>15% de descuento</p>
            </section>
          </section>

          <section className="card-home">
            <img
              src="https://i.ibb.co/253XCyR/familia.png"
              alt="Oferta pase anual 6 meses sin intereses al inscribirte"
            />
            <section className="text-promotion-container">
              <p className="title-card-home">Pase Anual Citibanamex</p>
              <p>Inscríbete y obtén 6 MSI</p>
            </section>
          </section>
        </section>

        <section className="middle-home-banner-container">
          <img
            src="https://i.ibb.co/dGrVKLX/promo-ejemplo.png"
            alt="Link, Esta es una promocion de banamex"
          />
        </section>
      </section>

      <section className="container-acconts">
      <p>Cuentas de efectivo</p>

      {ownAccounts.map(item=>(
        <section key={item.id} className="acconts-client-home-container">
        <section className="card-home-container">
          <img
            src="https://www.banamex.com/landings/tarjetas-de-debito/img/desktop/PerfilEjecutivo.png"
            alt="tarjeta banamex perfil ejecutivo"
          />
          <section>
            <a href="./cualquiercosa">{item.name}-MXN</a>
            <p className="account-number">**{item.displayAccountNumber.slice(-3)}</p>
          </section>
        </section>

        <section className="avalaible-container">
          <p>Disponible:</p>
          <section>
            <p className="balance">{item.maximumAmount}</p> 
            <p>MXN</p>
          </section>
        </section>

        <section className="avalaible-container">
          <p>Saldo:</p>
          <section>
            <p className="balance">{item.balance}</p> 
            <p>MXN</p>
          </section>
        </section>
      </section>
      ))}

     </section>

    </div>
  );
};

/*

<img src="" alt="familia" border="0"></a>
<img src="https://i.ibb.co/WF72Xmr/Bobby-brown.png" alt="Bobby-brown" border="0"></a>

*/

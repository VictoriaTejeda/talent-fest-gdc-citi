import React from "react";

export const ModalSia = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
   
  } else {
    body.classList.add(lightTheme);
  }
    
const switchTheme = (e) => {
        if(theme ===  darkTheme ) {
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "light")
            theme = lightTheme;


        } else {
            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.add(clickedClass);
            localStorage.setItem("theme", "dark")
            theme = darkTheme;

        }
      }

  return (
    <>
      <button
        type="button"
        className= "btn-accesibility"
        data-bs-toggle="modal"
        data-bs-target="#accesibilityModal"
        >
        <img
          src="https://i.ibb.co/9HHy2Q8/Dise-o-sin-t-tulo-5-2.png"
          alt="botón de accesibilidad"
        />
      </button>

      <div
        className="modal fade modal-sia"
        id="accesibilityModal"
        tabIndex="-1"
        aria-labelledby="accesibilityModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="cerrar"
              ></button>
            </div>
            <div className="modal-body">
              <button className={theme === "dark" ? clickedClass:""} id="darkmode" onClick={(e) => { switchTheme(e)}}>
                <img src="https://i.ibb.co/0QC1rGZ/luna.png" alt="luna" />
                Modo oscuro
                <br />
                (Contraste)
              </button>
              <button className="btn-sia">
                <img
                  src="https://i.ibb.co/wgpxC7D/Dise-o-sin-t-tulo-17-1.png"
                  alt="zoom al texto"
                />
                Zoom al Texto
              </button>
              <button className="btn-sia">
                <img
                  src="https://i.ibb.co/F0g1Cg4/screen.png"
                  alt="elija el color de la pantalla"
                />
                Cambiar color de pantalla
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Scss/Layout/home.scss";
import "./Scss/Layout/footer.scss";
import "./Scss/Layout/sidebar.scss";
import "./Scss/Layout/HeaderNav.scss";
import "../src/App.css"
import { Home } from "./pages/Home";
import { HeaderNav } from "./components/HeaderNav";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Transfers from "./components/Forms/Tranferences/Transfers";
import OwnAccount from "./components/Forms/Tranferences/OwnAccount";
import DataRegister from "./components/Forms/Register/DataRegister";
import AccountRegister from "./components/Forms/Register/AccountRegister";
import ThirdAccount from "./components/Forms/Tranferences/ThirdAccount";
import { useTransfers } from "./hooks/useTransfers";
import useRegister from "./hooks/Register/UseRegister";
import DataVerification from "./components/Forms/Register/DataVerification";
import { VerificationOwnTransference } from "./components/Forms/Tranferences/VerificationOwnTransference";
import { ConfirmationOwn } from "./components/Forms/Tranferences/ConfirmationOwn";

function App() {
  const {
    typeRegister,
    newRegister,
    sendData,
    dataRegister,
    handleInputChange,
    checked,
    handleChecked,
    postDataAccount 
  } = useRegister();

  const {
    recoverySelectValue,
    recoverySelectValueRet,
    selectValue,
    getDataTransfer,
    result,
    resultRetirement,
    handleChange,
    importe,
  } = useTransfers();

  return (
    <>
      <Router>
        <HeaderNav />
        <Routes>
          <Route path="/" element={<Home resultRetirement={resultRetirement} />} />
          <Route path="services/" element={<Services />}>
            <Route
              index
              element={
                <Transfers
                  recoverySelectValueRet={recoverySelectValueRet}
                  recoverySelectValue={recoverySelectValue}
                  selectValue={selectValue}
                  getDataTransfer={getDataTransfer}
                  result={result}
                  resultRetirement={resultRetirement}
                />
              }
            />
            <Route
              exact
              path="register"
              element={
                <DataRegister
                  typeRegister={typeRegister}
                  newRegister={newRegister}
                />
              }
            />
            <Route
              path="own-account"
              element={
                <OwnAccount
                  result={result}
                  resultRetirement={resultRetirement}
                  handleChange={handleChange}
                  importe={importe}
                />
              }
            />
            <Route
              path="verification-own-account"
              element={
                <VerificationOwnTransference
                  result={result}
                  resultRetirement={resultRetirement}
                  importe={importe}
                />
              }
            />
             <Route
              path="confirmation-own-account"
              element={
                <ConfirmationOwn
                  result={result}
                  resultRetirement={resultRetirement}
                  importe={importe}
                />
              }
            />
            <Route
              path="third-account"
              element={
                <ThirdAccount
                  result={result}
                  resultRetirement={resultRetirement}
                />
              }
            />
            <Route
              path="formRegister"
              element={
                <AccountRegister
                  sendData={sendData}
                  dataRegister={dataRegister}
                  handleInputChange={handleInputChange}
                  checked={checked}
                  handleChecked={handleChecked}
                />
              }
            />
            <Route
              path="verification"
              element={
                <DataVerification
                dataRegister={dataRegister}
                checked={checked}
                postDataAccount ={postDataAccount }
                />
              }
            />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import { dataApi } from "../api/dataApi";

export const useTransfers = () => {
  const [getDataTransfer, setGetDataTransfer] = useState([]);
  const API = async () => {
    const resp = await dataApi.get("/clientData");
    setGetDataTransfer(resp.data);
  };

  useEffect(() => {
    API();
  }, []);

  //------------Recuperando ID
  const [selectValue, setSelectValue] = useState("");
  const [selectValueRetirement, setSelectValueRetirement] = useState("");

  const recoverySelectValue = (e) => {
    setSelectValue(e.target.value);
  };
  const recoverySelectValueRet = (e) => {
    setSelectValueRetirement(e.target.value);
  };
//------------Filter para obtener objeto
  const result = getDataTransfer.filter(
    (item) => item.id === parseInt(selectValue)
  );
  const resultRetirement = getDataTransfer.filter(
    (item) => item.id === parseInt(selectValueRetirement)
  );

  const [importe, setImporte] = useState(0);
  const handleChange = (e) => {
    setImporte(e.target.value);
  };

  return {
    selectValue,
    recoverySelectValue,
    selectValueRetirement,
    recoverySelectValueRet,
    getDataTransfer,
    result,
    resultRetirement,
    handleChange,
    importe
  };
};

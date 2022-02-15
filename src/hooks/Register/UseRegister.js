import { useState } from "react";
import { dataApi } from "../../api/dataApi";

function useRegister() {
    const [typeRegister, setTypeRegiste] = useState('')
    const [checked, setChecked] = useState(true);
    const [dataRegister, setDataRegister] = useState({
        client: "",
        name: "",
        displayAccountNumber: "",
        maximumAmount: 0,
        email: "",
      });

    const handleChecked = (e) => {
        setChecked(!e.target.checked)
      //  console.log(checked)
    } 
    
    const handleInputChange = (e) => {
        setDataRegister({
            ...dataRegister, 
          [e.target.name]: e.target.value,
        // typeAccount: checked
        });
      };

    const postDataAccount = async () => {
        await dataApi.post("https://api-talent-fest.herokuapp.com/clientData", {
          id: "",
          client: dataRegister.client,
          name: dataRegister.name,
          displayAccountNumber: dataRegister.displayAccountNumber,
          maximumAmount:dataRegister.maximumAmount,
          email: dataRegister.email,
          typeAccount: checked
        });
      };
    
      const sendData = (e)=>{
        e.preventDefault();
        console.log(dataRegister)
      } 

    const newRegister = (e) => {
        setTypeRegiste(e.target.value);
      };

    
  return {
      newRegister,
      typeRegister,
      sendData,
      dataRegister,
      handleInputChange,
      checked,
      handleChecked,
      postDataAccount 
  }
}

export default useRegister;

import { Formulaire } from "../components/Formulaire";
import axios, { AxiosResponse } from "axios";

export interface Users {
  id?: number;
  name: string;
  hashPassworld: string;
  email: string;
}

export const Inscription = () => {
  const handleAction = (
    // Ici le boutton enfant que l'on descend vers le parent en => et typage des propriété que l'on récupére
    email: string | undefined,
    password: string | undefined
  ) => {
    console.log("je suis là", password);
    console.log("je suis là", email);
    axios // Ici pour faire le lien et la connexion avec le back-end avec le nom de la requête à l'intérieur
      // de la fonction 'handleAction'
      .post("http://localhost:8080/api/user/inscription", {
        email: email,
        passworld: password,
      })
      .then((response: AxiosResponse<{ data: any }>) => {
        console.log("Reponse POST : ", response.data.data);
      });
  };
  return (
    <div>
      <Formulaire action={handleAction} />
      {/*Ici je joins le retour de la fonction créé 'handleAction' **/}
    </div>
  );
};

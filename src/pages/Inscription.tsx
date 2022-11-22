import { Formulaire } from "../components/Formulaire";
import axios, { AxiosResponse } from "axios";
import { FormEvent, useEffect, useRef, useState } from "react";

export const Inscription = () => {
  const emailElement = useRef<HTMLInputElement>(null);
  const passwordElement = useRef<HTMLInputElement>(null);

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/user/inscription")
      .then((response: AxiosResponse<{ data: any }>) => {
        console.log("Reponse POST : ", response.data.data);
      });
    console.log("button form clicked");
    console.log(emailElement.current?.value);
    console.log(passwordElement.current?.value);
  };

  /*
    axios
      .post("http://localhost:8080/api/user/inscription")
      .then((response: AxiosResponse<{ data: any }>) => {
        console.log("Reponse POST : ", response.data.data);
      });
      */

  return (
    <div>
      <h1>Bienvenue dans le formulaire d'inscription à notre site</h1>
      {/*<form onSubmit={(e) =>{handleSubmitForm(e)}}>*/}
      <form className="w-50 m-auto" onSubmit={handleSubmitForm}>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="emailUser"
            placeholder="name@example.com"
            ref={emailElement}
          />
          <label htmlFor="emailUser">Email</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="passwordUser"
            placeholder="Password"
            ref={passwordElement}
          />
          <label htmlFor="passwordUser">Mot de passe</label>
        </div>
        <button className="mt-3 btn btn-primary" type="submit">
          Se connecter
        </button>
      </form>
    </div>
  );
};

/*
const App = () => {
  // const [listHero, setListHero] = useState<any[]>([
  //   { name: 'Coco' },
  //   { name: 'Zozo' },
  //   { name: 'Toto' },
  // ]);
  const [listHero, setListHero] = useState<Hero[]>([]);


  useEffect(() => {
    axios
      .get('http://localhost:8080/api/heros')
      .then((response: AxiosResponse<{ data: Hero[] }>) => {
        console.log('Reponse GET hero: ', response.data.data);
        const myHero: Hero[] = response.data.data;
        setListHero([...myHero]);
      });
  }, []);


  return (
    <div className='App'>
      <ul>
        {listHero.map((hero: Hero, i: number) => (
          <li key={i}>
            {hero.name} {hero.id_type_weapon}
          </li>
        ))}
      </ul>
    </div>
  );
};
**/

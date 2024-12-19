import style from "./FormPage.module.css";
import useForm from "../../hooks/useForm";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { handle } from "../../hooks/handle";
import useAuxValidates from "../../hooks/useauxValidates";
import { handleSubmit } from "../../hooks/handle";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const FormPage = () => {
  const teams = useSelector((state) => state.teams);
  const { teamsSelecteds, arrTeams, find, setArrTeams, setFind } =
    useAuxValidates();
  const { form, handleForm, setForm, errors } = useForm();
  const { name, lastName, nationality, description, image, dob } = form;

  const closeButton = (value) => {
    const arrFil = arrTeams.filter((team) => team !== value);
    const match = teams.find((team) => team.name == value);
    const idTeamFilt = find.filter((id) => id !== match.id);
    setArrTeams([...arrFil]);
    setFind([...idTeamFilt]);
  };

  useEffect(() => {
    setForm({
      ...form,
      teams: [...find],
    });
  }, [find, arrTeams]);

  return (
    <div className={style.content}>
      <Navbar />
      <div className={style.divForm}>
        <form
          className={style.form}
          onSubmit={() => handleSubmit(event, form, errors)}
        >
          <div className={style.divform}>
            <h1 className={style.title}>Create Driver</h1>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className={style.info}
              value={name}
              onChange={handleForm}
            />
            <span className={style.span}>{errors.name} </span>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Lastname"
              className={style.info}
              value={lastName}
              onChange={handleForm}
            />
            <span className={style.span}>{errors.lastName} </span>
            <input
              type="text"
              name="nationality"
              id="nationality"
              placeholder="Nationality"
              className={style.info}
              value={nationality}
              onChange={handleForm}
            />
            <span className={style.span}>{errors.nationality} </span>
            <input
              type="text"
              name="dob"
              id="dob"
              placeholder="Date of birth"
              className={style.info}
              value={dob}
              onChange={handleForm}
            />
            <span className={style.span}>{errors.dob} </span>
            <input
              type="text"
              name="image"
              value={image}
              placeholder="Image (URL)"
              className={style.info}
              onChange={handleForm}
            />
            <span className={style.span}>{errors.image} </span>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Description"
              className={style.info}
              value={description}
              onChange={handleForm}
            />
            <span className={style.span}>{errors.description} </span>
            <select className={style.option} name="teams" onChange={() => handle(event, teamsSelecteds)}>
              <option value="" disabled selected>
                Teams
              </option>
              {teams.map((team) => {
                const { name } = team;
                return (
                  <option value={name} key={name}>
                    {name}{" "}
                  </option>
                );
              })}
            </select>
            <div className={style.divbutton}>
              <button className={style.submitButton} type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className={style.list}>
          <h1 className={style.title}>Teams</h1>
          {arrTeams.map((arrteam) => {
            return (
              <div className={style.team}>
                <h2 value={arrteam} key={arrteam}>
                  {arrteam}{" "}
                </h2>
                <button
                  className={style.buttonX}
                  value={arrteam}
                  onClick={() => handle(event, closeButton)}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FormPage;

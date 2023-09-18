import { useEffect, useState } from "react";

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

import styles from '../../styles/stylesProject/ProjectForm.module.css'
// import styles from "./ProjectForm.module.css";

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([]); // seta o array vazia pra esperar a resposta da API
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET", // busca os dados que serão enviados
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    //console.log(project)
    handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value }); // independente do input q for preenchido vai mudar a propriedade que for de texto
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ""}
      ></Input>
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ""}
      ></Input>
      <Select
        name="category_name"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ""}
      ></Select>
      <SubmitButton text={btnText} className={styles.btn}></SubmitButton>
    </form>
  );
}

export default ProjectForm;

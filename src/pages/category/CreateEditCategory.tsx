import { realpathSync } from "fs";
import React, { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import { BASE_URL } from "../../config/index";
import Category from "./Category";

interface Props {}
interface IParams {
  id?: string;
}
interface ICreateEditCategoryState {
  _id: string;
  name: string;
}
export default function CreateEditCategory({}: Props): ReactElement {
  const { id } = useParams<IParams>();
  const [category, setCategory] = useState<ICreateEditCategoryState>({
    _id: "",
    name: "",
  });
  const [url, setUrl] = useState(`${BASE_URL}/api/category/${id ? id : ""}`);
  const [loading, setLoading] = useState(true);
  const [nameInvalid, setNameInvalid] = useState(false);
  const history = useHistory();
  useEffect(() => {
     
    if (!id) return setLoading(false);
    fetch(url)
      .then(async (result) => {
        setCategory(await result.json());
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);
  async function save(e: any) {
    e.preventDefault();
    if (!category.name) return setNameInvalid(true);
    if (!id) {
      // create
      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: category.name }),
      });
      if (result) alert("success");
      return history.push("/category");
    }
    const result = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    });
    if (result) alert("success");
    history.push("/category");
  }
  return (
    <div className="container mt-3">
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1>{!id ? "Crear nueva categoria" : "Modificar categoria"}</h1>
          <form className="container my-4" onSubmit={save}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className={"form-control " + `${nameInvalid && "is-danger"}`}
                value={category?.name}
                onChange={({ target }: ChangeEvent<HTMLInputElement>): void => {
                  const { value } = target;
                  setCategory({ ...category, name: value });
                  if (value !== "") return setNameInvalid(false);
                  return setNameInvalid(true);
                }}
              />
              {nameInvalid && (
                <div className="form-text text-danger">
                  Este campo es requerido.
                </div>
              )}
            </div>
            <div className="">
              <Button type="submit" variant="primary" disabled={nameInvalid}>
                Guardar
              </Button>
              <Link to="/category" className="btn btn-success mx-2">
                Volver atrás
              </Link>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

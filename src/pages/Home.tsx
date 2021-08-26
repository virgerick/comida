import { useEffect, useState } from "react";
import MenuCard from "../components/MenuCard";
import { IMenu } from "../models/Menu";
import { BASE_URL } from "../config";
import Loading from "../components/Loading";
import { Container } from "react-bootstrap";

const Home = () => {
  const [menu, setMenu] = useState<IMenu[]>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const url: string = `${BASE_URL}/api/platos`;
    fetch(url)
      .then(async (result) => {
        setMenu(await result.json());
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <Container>
      <div className="row">
        <h1>Comidas</h1>
      </div>

      <div className="row">
        {loading ? (
          <Loading />
        ) : (
          menu?.map(({ _id, name, price, rate, imagen }) => (
            <div
              className="col p-2 link-dark"
              style={{
                minWidth: 280,
                textDecoration: "none",
                cursor: "pointer",
              }}
              key={_id}
            >
              <MenuCard
                name={name}
                price={price}
                rate={rate}
                imagen={imagen}
                _id={_id}
              />
            </div>
          ))
        )}
      </div>
    </Container>
  );
};

export default Home;

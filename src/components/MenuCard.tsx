import { IMenu } from "../models/Menu";

const MenuCard = ({ _id, name, price, rate, imagen }: IMenu) => {
  return (
    <div className="card" style={{ width:'100%', minHeight: '100%' }}>
      <img src={imagen} alt={name} className="card-img-top "  />
      <div className="card-body text-center">
        <h5 className="">{name}</h5>
        <label className="text-success  ">
          ${price.toLocaleString()}
        </label>
      </div>
    </div>
  );
};

export default MenuCard;

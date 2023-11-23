import { Card, Spin } from "antd";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";
import PokemonBullLogo from "@/assets/logo/pokeball.png";
import React from "react";

interface Props {
  item: any;
}

const Cards = ({ item }: Props) => {
  const [loading, setLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const navigate = useNavigate();
  const handleCardClick = (id: number) => {
    navigate("/detail", {
      state: id,
    });
  };
  return (
    <Card
      key={item.id}
      hoverable
      style={{ width: 150 }}
      cover={
        <img
          alt={item?.name}
          style={{ width: 150 }}
          src={!isError ? item.url : PokemonBullLogo}
          onLoad={() => {
            setLoading(false);
          }}
          onError={() => {
            setIsError(true);
          }}
        />
      }
      onClick={() => handleCardClick(item?.id)}
    >
      {loading && (
        <div
          style={{
            height: 150,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin />
        </div>
      )}
      <Meta title={item?.name} />
    </Card>
  );
};

export default Cards;

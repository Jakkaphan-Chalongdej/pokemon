import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";

interface Props {
  item: any;
}

const Cards = ({ item }: Props) => {
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
      cover={<img alt="example" src={item.url} />}
      onClick={() => handleCardClick(item.id)}
    >
      <Meta title={item.name} />
    </Card>
  );
};

export default Cards;

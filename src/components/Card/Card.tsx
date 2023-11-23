import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";
import CustomImage from "../Image";

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
      cover={<CustomImage src={item.url} />}
      onClick={() => handleCardClick(item?.id)}
    >
      <Meta title={item?.name} />
    </Card>
  );
};

export default Cards;

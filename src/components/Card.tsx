import { Card } from "antd";
import Meta from "antd/es/card/Meta";

interface Props {
  url: string;
  name: string;
}

const Cards = ({ url, name }: Props) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={url} />}
      onClick={(e) => console.log("onClick", e)}
    >
      <Meta title={name} />
    </Card>
  );
};

export default Cards;

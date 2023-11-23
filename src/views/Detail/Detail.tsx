import { useGetPokemonByID } from "@/service/pokemon-api";
import { Col, Row } from "antd";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const idPath: any = location?.state;
  const pokemonDetail = useGetPokemonByID(idPath);
  console.log(`🐛  • file: Detail.tsx:10 • pokemonDetail:`, pokemonDetail.data);
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPath}.png`;
  return (
    <div>
      <h1> {pokemonDetail.data.name}</h1>
      <img src={url} style={{ height: "200px", width: "auto" }} />
      <Row gutter={[12, 12]} justify={"center"} style={{ marginTop: "50px" }}>
        <Col></Col>
      </Row>
    </div>
  );
};

export default Detail;

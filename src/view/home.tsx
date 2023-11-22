import { useGetPokemon } from "@/service/pokemon-api";
import Cards from "../components/Card";
import { Col, Pagination, Row } from "antd";
import { useEffect, useState } from "react";

const Home = () => {
  const [params, serParams] = useState<any>({
    offset: 1,
    limit: 10,
  });
  const pokemon = useGetPokemon();
  const pokemonList = pokemon?.data;

  useEffect(() => {
    pokemon.mutate({ ...params });
    // eslint-disable-next-line
  }, [params.offset, params.limit]);

  const map = pokemonList?.results?.map((item: any) => {
    const id = item.url.match(/\/(\d+)\/$/)[1];
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
      <Col key={id}>
        <Cards key={id} url={url} name={item.name} />
      </Col>
    );
  });
  return (
    <>
      <h1>POKEMON</h1>
      <Row gutter={[14, 14]} justify={"end"}>
        <Row gutter={[14, 14]}>{map}</Row>
        <Pagination
          defaultCurrent={1}
          total={pokemonList?.count}
          onChange={(offset: number, pageSize: number) => {
            serParams({ limit: pageSize, offset: offset || 1 });
          }}
        />
      </Row>
    </>
  );
};

export default Home;

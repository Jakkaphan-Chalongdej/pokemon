import Cards from "@/components/Card";
import { useGetPokemon } from "@/service/pokemon-api";
import { Col, Pagination, Row } from "antd";
import { useEffect, useState } from "react";

const Home = () => {
  const [params, serParams] = useState<any>({
    offset: 0,
    limit: 10,
  });
  const [page, setPage] = useState<any>(1);
  const pokemon = useGetPokemon();
  const pokemonList = pokemon?.data;

  useEffect(() => {
    pokemon.mutate({ ...params });
    // eslint-disable-next-line
  }, [params.offset, params.limit]);

  const newPokemonList = pokemonList?.results?.map((item: any) => {
    const id = item.url.match(/\/(\d+)\/$/)[1];
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
      <Col key={id}>
        <Cards key={id} item={{ ...item, url, id }} />
      </Col>
    );
  });

  return (
    <div>
      <Row gutter={[12, 12]} justify={"center"} style={{ marginTop: "50px" }}>
        <Col>
          <Row>
            <Col span={12} offset={6}>
              <Row gutter={[6, 6]} justify={"center"}>
                {newPokemonList}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify={"center"} align="middle" style={{ marginTop: "50px" }}>
        <Pagination
          current={page}
          total={pokemonList?.count}
          onChange={(offset: number, pageSize: number) => {
            setPage(offset);
            serParams({ limit: pageSize, offset: pageSize * (offset - 1) });
          }}
        />
      </Row>
    </div>
  );
};

export default Home;

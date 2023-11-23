import { useGetPokemonByID } from "@/service/pokemon-api";
import { Col, Row } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
interface DataType {
  key: React.Key;
  hight: number;
  weight: number;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  types: any[];
  abilities: any[];
}

const Detail = () => {
  const location = useLocation();
  const idPath: any = location?.state;
  const pokemonDetail = useGetPokemonByID(idPath);
  const [dataSource, setDataSource] = useState<any[]>([]);
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPath}.png`;
  useEffect(() => {
    const stats = pokemonDetail?.data?.stats?.reduce((perv: any, curr: any) => {
      return { ...perv, [curr.stat.name]: curr.base_stat };
    }, {});
    setDataSource([
      {
        key: idPath,
        height: pokemonDetail?.data?.height || 0,
        weight: pokemonDetail?.data?.weight || 0,
        hp: stats?.hp,
        attack: stats?.attack,
        defense: stats?.defense,
        speed: stats?.speed,
        types: pokemonDetail?.data?.types || [],
        abilities: pokemonDetail?.data?.abilities || [],
      },
    ]);
  }, [pokemonDetail?.data]);

  const columns: ColumnsType<DataType> = [
    {
      title: "Hight",
      dataIndex: "height",
      fixed: "left",
    },
    {
      title: "Weight",
      dataIndex: "weight",
      fixed: "left",
    },
    {
      title: "HP",
      dataIndex: "hp",
      fixed: "left",
    },
    {
      title: "Attack",
      dataIndex: "attack",
      fixed: "left",
    },
    {
      title: "Defense",
      dataIndex: "defense",
      fixed: "left",
    },
    {
      title: "Speed",
      dataIndex: "speed",
      fixed: "left",
    },
    {
      title: "Type",
      dataIndex: "types",
      fixed: "left",
      render: (data: any[]) => {
        return data?.map((item) => {
          return <Col key={item?.type?.name}>{item?.type?.name}</Col>;
        });
      },
    },
    {
      title: "Abilities",
      dataIndex: "abilities",
      fixed: "left",
      render: (data: any[]) => {
        return data?.map((item) => {
          return <Col key={item?.ability?.name}>{item?.ability?.name}</Col>;
        });
      },
    },
  ];

  return (
    <div>
      <img src={url} style={{ height: "200px", width: "auto" }} />
      <h1> {pokemonDetail?.data?.name}</h1>
      <Row gutter={[12, 12]} justify={"center"} style={{ marginTop: "50px" }}>
        <Col>
          <Row>
            <Col span={12} offset={6}>
              <Row gutter={[6, 6]} justify={"center"}>
                <Table
                  columns={columns}
                  dataSource={dataSource}
                  bordered
                  size="middle"
                  scroll={{ x: "calc(700px + 20%)" }}
                  pagination={false}
                />
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Detail;

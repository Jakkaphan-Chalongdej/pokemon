import React from "react";
import { Spin } from "antd";
import PokemonBullLogo from "@/assets/logo/pokeball.png";

interface Props {
  src: string;
}

const CustomImage = ({ src }: Props) => {
  const [loading, setLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  return (
    <div>
      <img
        alt={src}
        style={{ width: 150 }}
        src={!isError ? src : PokemonBullLogo}
        onLoad={() => {
          setLoading(false);
        }}
        onError={() => {
          setIsError(true);
        }}
      />
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
    </div>
  );
};

export default CustomImage;

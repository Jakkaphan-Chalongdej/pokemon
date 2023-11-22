import { UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";

import { httpClient, throwResponse } from "@/confix/axios/http_client";

export const useGetPokemonByID = (id?: number): UseQueryResult<any> => {
  return useQuery(["get-pokemon-by-id", id], async () => {
    const res = await httpClient.get(`/pokemon/${id}`);

    if ([200, 201].includes(res.status)) {
      return res.data;
    }
    throwResponse(res);
  });
};

export const useGetPokemon = () => {
  return useMutation(async (params: any) => {
    const res = await httpClient.get(`pokemon`, { params: params });

    if ([200, 201].includes(res.status)) {
      return res.data;
    }

    throwResponse(res);
  });
};

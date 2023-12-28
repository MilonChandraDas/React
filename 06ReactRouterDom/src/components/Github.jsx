import React from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  return (
    <div className="text-center  bg-gray-600 text-white p-4 text-3xl">
      Github followers : {data.followers}
      <img src={data.avatar_url} alt=""/>
      <h2>{data.name}</h2>
    </div>
  );
};

export default Github;

// Github Loader component
export const GithubLoader = async () => {
  const response = await fetch("https://api.github.com/users/MilonChandraDas");
  const data = await response.json();
  return data;
};

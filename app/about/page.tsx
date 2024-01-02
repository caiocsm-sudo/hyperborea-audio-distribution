"use client";

import axios from "axios";
import { useEffect, useState } from "react";

// import "@/styles/about.scss";

type Artist = {
  name: string,
  real_name: string;
  age: number
};

export default function About(): JSX.Element {
  const [data, setData] = useState<Artist>();
  const getPost = async () => {
    const res = await axios.get("/api/artists");
    setData(res.data);
  }
  useEffect(() => {
    getPost();
  }, []);

  console.log(data);

  return (
    <article>
      <div>
        <h1>Hyperborea Audio Recordings</h1>
        <p>baby</p>
      </div>
      <p>
        { data ? (<p>{data.name}, {data.real_name}</p>) : "" }
      </p>
    </article>
  );
}

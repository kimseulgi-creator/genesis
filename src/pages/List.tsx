import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Constellation from '../componants/List/Constellation';
import { postData } from '../componants/List/Type';
import Spring from '../componants/List/Spring';
import Summer from '../componants/List/Summer';
import Autumn from '../componants/List/Autumn';
import Winter from '../componants/List/Winter';

const List = () => {
  const [data, setData] = useState<postData[]>([]);
  const FetchData = async () => {
    try {
      const dbData = await axios.get(`http://localhost:4000/posts`);
      setData(dbData.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <>
      <Constellation data={data} />
      <Spring id="spring" data={data} />
      <Summer id="summer" data={data} />
      <Autumn id="autumn" data={data} />
      <Winter id="winter" data={data} />
    </>
  );
};

export default List;

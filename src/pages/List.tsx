import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Constellation from '../componants/List/Constellation';

const List = () => {
  const [data, setData] = useState<any>([]);
  const fetchData = () => {
    try {
      const loadingData = async () => {
        const dbData = await axios.get('http://localhost:4000/posts');
        setData(dbData.data);
      };
      loadingData();
    } catch (error) {
      console.log(error);
      alert('일시적인 오류가 발생하였습니다.');
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section>
      <Constellation />
    </section>
  );
};

export default List;

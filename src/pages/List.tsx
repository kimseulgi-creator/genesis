import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Constellation from '../componants/List/Constellation';
import Spring from '../componants/List/Spring';
import Summer from '../componants/List/Summer';
import Autumn from '../componants/List/Autumn';
import Winter from '../componants/List/Winter';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../api/Posts';

import type { postData } from '../componants/List/Type';

const List = () => {
  const { data, isLoading, isError } = useQuery<postData[]>(['post'], getPosts);
  console.log(data);
  if (isLoading) {
    <h1>로딩중입니다~~</h1>;
  }
  if (isError) {
    alert('에러가 발생하였습니다. 새로고침 부탁드립니다');
  }
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

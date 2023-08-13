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
import { useNavigate } from 'react-router-dom';
import { css, styled } from 'styled-components';
import backgroundImg from '../images/quiz/quiz_background2.png';
import Footer from '../componants/common/Footer';

const List = () => {
  const navigate = useNavigate();
  const detailhandleClick = (id: number) => {
    navigate(`/detail/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const { data, isLoading, isError } = useQuery<postData[]>(['post'], getPosts);
  if (isLoading) {
    <h1>로딩중입니다~~</h1>;
  }
  if (isError) {
    alert('에러가 발생하였습니다. 새로고침 부탁드립니다');
  }

  return (
    <>
      <StDiv>
        <Constellation data={data} detailhandleClick={detailhandleClick} />
        <Spring id="spring" data={data} detailhandleClick={detailhandleClick} />
        <Summer id="summer" data={data} detailhandleClick={detailhandleClick} />
        <Autumn id="autumn" data={data} detailhandleClick={detailhandleClick} />
        <Winter id="winter" data={data} detailhandleClick={detailhandleClick} />
      </StDiv>
      <Footer />
    </>
  );
};

export default List;

const StDiv = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: url(${backgroundImg});
`;

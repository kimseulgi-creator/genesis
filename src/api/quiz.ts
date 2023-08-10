import axios from 'axios';

const getQuiz = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/quiz`);
  return response.data;
};

export { getQuiz };

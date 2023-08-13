// import axios from 'axios';
// import XMLParser from 'react-xml-parser';

// //api key
// const SERVICE_KEY = `${process.env.REACT_APP_SERVICE_KEY}`;

// export const getCalenderApi = async (currentYear: number, apiMonthPlus0: number) => {
//   const response = await axios.get<any>(
//     `http://apis.data.go.kr/B090041/openapi/service/AstroEventInfoService/getAstroEventInfo?solYear=${currentYear}&solMonth=${apiMonthPlus0}&ServiceKey=${SERVICE_KEY}`,
//   );

//   let data = await response.text();
//   var xml = new XMLParser().parseFromString(data);

//   return response.data;
// };
export {};

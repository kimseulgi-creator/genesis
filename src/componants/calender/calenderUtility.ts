import { endOfMonth } from 'date-fns';

export const month: string[] = ['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep', 'Oct', 'Nov', 'Dec'];

export const week: string[] = ['sun', 'Mon', 'Tus', 'Wen', 'thr', 'fri', 'sat'];

//숫자를 배열로
export const range = (end: number): number[] => {
  const result = [...Array(end + 1).keys()].slice(1);
  return result;
};

export const moon: Moon = {
  합삭: 'https://user-images.githubusercontent.com/129598273/259401600-c6536693-6f31-41a9-a051-f6f8c59745d1.png',
  삭: 'https://user-images.githubusercontent.com/129598273/259401600-c6536693-6f31-41a9-a051-f6f8c59745d1.png',
  하현달: 'https://user-images.githubusercontent.com/129598273/259401575-fe22c723-287b-4cbe-a7e5-1f200409abbe.png',
  망: 'https://user-images.githubusercontent.com/129598273/259401536-2be9d2a0-1dc3-4e90-98be-1d68c2d28e8a.png',
  상현달: 'https://user-images.githubusercontent.com/129598273/259401562-92da7e03-a7f2-46fe-8075-99791467aa0a.png',
};

//특정 달이 몇일로 끝나는 지
export const daysInMonth = (currentYear: number, currentMonth: number): number => {
  return endOfMonth(new Date(currentYear, currentMonth)).getDate();
};

//날짜 비교
export const areDatesTheSame = (first: Date, second: Date) => {
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
};

//type
export type Astro = {
  attributes: {};
  children: Children[];
  getElementsByTagName(): any;
  name: string;
  value: string;
};

export type Children = {
  attributes: {};
  children: [];
  getElementsByTagName(): any;
  name: string;
  value: string;
};

export type Moon = {
  [key: string]: string;
};

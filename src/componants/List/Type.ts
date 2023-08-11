export type postData = {
  id: number;
  img?: string;
  starImg?: string;
  title?: string;
  story: string;
  description: string;
  period: string;
  birthday: string;
  season: string;
};

export type listProps = {
  id?: string;
  data: postData[] | undefined;
  detailhandleClick: (id: number) => void;
};

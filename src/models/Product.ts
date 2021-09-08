import * as Yup from 'yup';

export type Product = {
  id: string,
  title: string,
  author: string,
  description: string,
  price: number,
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  author: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().required(),
});

import { api } from '@/apis/axios';

export const fetchBookCategories = () => {
  return api.get(`/lists`).then((response) => response.data);
};

export const fetchBooks = (categoryId: string) => {
  return api.get(`/list?name=${categoryId}`).then((response) => response.data);
};

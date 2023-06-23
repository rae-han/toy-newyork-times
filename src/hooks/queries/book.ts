import { useQuery } from '@tanstack/react-query';
import { _BOOK_CATEGORIES, _CATEGORY_BOOKS } from '@/constants/queryKeys';
import { fetchBookCategories, fetchBooks } from '@/apis/book';
import { BookResults, CategoriesResult } from '@/typings/db';

export const useBookCategories = () => {
  return useQuery<CategoriesResult>(_BOOK_CATEGORIES, fetchBookCategories);
};

export const useBooks = (categoryId: string) => {
  return useQuery<BookResults>(_CATEGORY_BOOKS(categoryId), () => fetchBooks(categoryId));
};

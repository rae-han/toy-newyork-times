import React from 'react';
import { useBooks } from '@/hooks/queries/book';
import { useRouter } from 'next/router';
import BookItem from '@/components/BookItem';
import styles from './index.module.scss';

interface RouterQueries {
  categoryId: string;
}

const BookList = () => {
  const router = useRouter();
  const { categoryId } = router.query as unknown as RouterQueries;

  const { data, isLoading } = useBooks(categoryId);

  if (!data) {
    return null;
  }

  return (
    <ul className={styles.BookList}>
      {data?.results.books.map((book) => (
        <BookItem key={book.primary_isbn13} book={book} />
      ))}
    </ul>
  );
};

export default BookList;

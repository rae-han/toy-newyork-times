import React from 'react';
import { Book } from '@/typings/db';
import Image from 'next/image';
import styles from './index.module.scss';
import Link from 'next/link';

interface Props {
  book: Book;
}

const BookItem = ({ book }: Props) => {
  const onLink = (url: string) => {
    location.href = url;
  };

  return (
    <li className={styles.BookItem}>
      <Image src={book.book_image} alt={`${book.title} image`} width={200} height={309} />
      <h2 className={styles.BookItem__title}>{book.title}</h2>
      <p className="BookItem__author">{book.author}</p>
      <button onClick={() => onLink(book.amazon_product_url)}>boy now</button>
    </li>
  );
};

export default BookItem;

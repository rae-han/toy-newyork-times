import React from 'react';
import { Category } from '@/typings/db';
import styles from './index.module.scss';
import Link from 'next/link';

interface Props {
  category: Category;
}

const CategoryItem = ({ category }: Props) => {
  return (
    <Link className={styles.CategoryItem} href={`/list/${category.list_name_encoded}`}>
      {category.display_name}
    </Link>
  );
};

export default CategoryItem;

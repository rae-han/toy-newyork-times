import React from 'react';
import { useBookCategories } from '@/hooks/queries/book';
import CategoryItem from '@/components/CategoryItem';
import styles from './index.module.scss';

const CategoryList = () => {
  const { data, isLoading } = useBookCategories();

  const categories = data?.results;

  if (!categories) {
    return null;
  }

  return (
    <div className={styles.CategoryList}>
      {categories.map((category) => (
        <CategoryItem key={category.list_name_encoded} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;

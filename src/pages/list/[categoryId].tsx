import { fetchBookCategories, fetchBooks } from '@/apis/book';
import DefaultLayout from '@/layouts/DefaultLayout';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { _BOOK_CATEGORIES, _CATEGORY_BOOKS } from '@/constants/queryKeys';
import CategoryList from '@/components/CategoryList';
import { GetServerSideProps } from 'next';
import BookList from '@/components/BookList';

const Home = () => {
  return (
    <DefaultLayout>
      <BookList />
    </DefaultLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const categoryId = params?.categoryId as string;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(_CATEGORY_BOOKS(categoryId), () => fetchBooks(categoryId));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;

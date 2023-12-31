import { fetchBookCategories } from '@/apis/book';
import DefaultLayout from '@/layouts/DefaultLayout';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { _BOOK_CATEGORIES } from '@/constants/queryKeys';
import CategoryList from '@/components/CategoryList';
import { GetServerSideProps } from 'next';

const Home = () => {
  return (
    <DefaultLayout>
      <CategoryList />
    </DefaultLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(_BOOK_CATEGORIES, () => fetchBookCategories());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;

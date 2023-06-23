import DefaultLayout from '@/layouts/DefaultLayout';

const AboutPage = () => {
  return (
    <DefaultLayout>
      <h1>About Us</h1>
      <p>Welcome!</p>
    </DefaultLayout>
  );
};

export const getStaticProps = () => {
  return {
    props: {},
  };
};

export default AboutPage;

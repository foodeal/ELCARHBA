import React from 'react';
import { GetServerSideProps } from 'next';
import { Storybook } from '@shared/storybook/icons-storybook.component';


const StorybookPage = () => {
  return <Storybook />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  if (process.env.NODE_ENV === 'production') {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }
  return {
    props: {}
  };
};

export default StorybookPage;

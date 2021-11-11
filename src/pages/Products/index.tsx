import React from 'react';
import BreadCrumbs from '../../components/breadCrumbs';
import Filters from '../../components/filters';
import UserBar from '../../components/userBar';

const Products: React.FC = () => (
  <>
    <UserBar />
    <BreadCrumbs />

    <Filters />
  </>
);

export default Products;

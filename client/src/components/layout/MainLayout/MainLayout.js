import React from 'react';
import PageContainer from '../PageContainer/PageContainer';
import NavBar from '../../features/NavBar/NavBar';

const MainLayout = ({ children }) => (
  <div>
    <NavBar />
    <PageContainer>
      {children}
    </PageContainer>
  </div>
);

export default MainLayout;
import React from 'react';
import SortingFood from '../../../components/Sorting Food';
import Container from '@mui/material/Container';
import FoodList from '../../../components/FoodList';
import Slide from '../../../components/Slider';
import Banner from '../../../components/Banner';
import SearchFood from '../../../components/Search';
export default function HomePage() {
  return (
    <div style={{ backgroundColor: '#faf7f2' }}>
      <Container className="mt-5 mb-5 ">
        <Banner />
        <div className="row">
          <div className="col-lg-4">
            <Slide />
          </div>
          <div className="col"></div>
          <div className="col-7">
            <div
              className="col d-flex justify-content-end align-items: center"
            >
              <SearchFood />
              <SortingFood />
            </div>
            <FoodList />
          </div>
        </div>
      </Container>
    </div>
  );
}

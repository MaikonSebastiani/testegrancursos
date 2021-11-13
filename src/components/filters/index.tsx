import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as star1 } from '@fortawesome/free-regular-svg-icons';
import {
  faStar as star2, faThLarge, faBars, faSearch,
} from '@fortawesome/free-solid-svg-icons';
import Slider from '../slider';
import {
  Container, FiltersTools, MultiRange, CheckBox, Button, ControlView, SearchBar,
} from './styles';
import Product from '../product';

const Filters: React.FC = () => {
  const t = '';

  return (
    <Container>

      <div className="leftSide">
        <p>Filters</p>
        <FiltersTools>
          <MultiRange>
            <strong>Multi Rage</strong>

            <div className="customcheck">
              <input id="10" type="radio" name="rangeRadio" />
              <label htmlFor="10">$10</label>
            </div>

            <div className="customcheck">
              <input id="10_100" type="radio" name="rangeRadio" />
              <label htmlFor="10_100">$10-$100</label>
            </div>

            <div className="customcheck">
              <input id="100_500" type="radio" name="rangeRadio" />
              <label htmlFor="100_500">$100-$500</label>
            </div>

            <div className="customcheck">
              <input id="500" type="radio" name="rangeRadio" />
              <label htmlFor="500">$500</label>
            </div>

            <div className="customcheck">
              <input id="all" type="radio" name="rangeRadio" />
              <label htmlFor="all">All</label>
            </div>

            <hr />

          </MultiRange>

          <Slider
            min={1}
            max={5000}
          />

          <hr />

          <CheckBox>
            <strong>Category</strong>
            <div className="customcheck">
              <input id="Cell Phones" type="checkbox" name="Cell Phones" />
              <label htmlFor="Cell Phones">Cell Phones</label>
              <span className="results">1920</span>
            </div>
          </CheckBox>

          <hr />

          <CheckBox>
            <strong>Brand</strong>

            <div className="customcheck">
              <input id="Cell Phones" type="checkbox" name="Cell Phones" />
              <label htmlFor="Cell Phones">Cell Phones</label>
            </div>
          </CheckBox>

          <hr />

          <div>
            <strong>Rating</strong>
            <div className="starts">
              <div className="ranking">
                <FontAwesomeIcon icon={star2} />
                <FontAwesomeIcon icon={star2} />
                <FontAwesomeIcon icon={star2} />
                <FontAwesomeIcon icon={star2} />
                <FontAwesomeIcon icon={star2} />
                <span className="up">& Up</span>
                <span className="resultValue">1920</span>
              </div>
              <div className="ranking">
                <FontAwesomeIcon icon={star2} />
                <FontAwesomeIcon icon={star2} />
                <FontAwesomeIcon icon={star2} />
                <FontAwesomeIcon icon={star2} />
                <FontAwesomeIcon icon={star1} />
                <span className="up">& Up</span>
                <span className="resultValue">1920</span>
              </div>
              <div className="ranking">
                <FontAwesomeIcon icon={star2} />
                <FontAwesomeIcon icon={star2} />
                <FontAwesomeIcon icon={star2} />
                <FontAwesomeIcon icon={star1} />
                <FontAwesomeIcon icon={star1} />
                <span className="up">& Up</span>
                <span className="resultValue">1920</span>
              </div>
            </div>
          </div>

        </FiltersTools>

        <Button>CLEAR ALL FILTERS</Button>
      </div>

      <div className="rightSide">
        <p>7,618 results found in 5ms</p>
        <ControlView>
          <select name="" id="" defaultValue="default">
            <option value="default">Default</option>
          </select>

          <div className="grid">
            <FontAwesomeIcon icon={faThLarge} />
          </div>

          <div className="grid">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </ControlView>
        <SearchBar>
          <input type="text" placeholder="Search hear" />
          <FontAwesomeIcon icon={faSearch} />
        </SearchBar>

        <Product />
      </div>
    </Container>
  );
};

export default Filters;

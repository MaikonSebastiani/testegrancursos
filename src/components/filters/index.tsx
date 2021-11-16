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
            <div className="customcheck">
              <input id="Computers & Tablets" type="checkbox" name="Computers & Tablets" />
              <label htmlFor="Computers & Tablets">Computers & Tablets</label>
              <span className="results">1820</span>
            </div>
            <div className="customcheck">
              <input id="Cell Phone Accessories" type="checkbox" name="Cell Phone Accessories" />
              <label htmlFor="Cell Phone Accessories">Cell Phone Accessories</label>
              <span className="results">462</span>
            </div>
            <div className="customcheck">
              <input id="Appliances" type="checkbox" name="Appliances" />
              <label htmlFor="Appliances">Appliances</label>
              <span className="results">120</span>
            </div>
            <div className="customcheck">
              <input id="CiPhone Cases" type="checkbox" name="iPhone Cases" />
              <label htmlFor="iPhone Cases">iPhone Cases</label>
              <span className="results">353</span>
            </div>
          </CheckBox>

          <hr />

          <CheckBox>
            <strong>Brand</strong>

            <div className="customcheck">
              <input id="Insigni" type="checkbox" name="Insigni" />
              <label htmlFor="Insigni">Insigni</label>
            </div>
            <div className="customcheck">
              <input id="Samsung" type="checkbox" name="Samsung" />
              <label htmlFor="Samsung">Samsung</label>
            </div>
            <div className="customcheck">
              <input id="Apple" type="checkbox" name="Apple" />
              <label htmlFor="Apple">Apple</label>
            </div>
            <div className="customcheck">
              <input id="HP" type="checkbox" name="HP" />
              <label htmlFor="HP">HP</label>
            </div>
            <div className="customcheck">
              <input id="Sony" type="checkbox" name="Sony" />
              <label htmlFor="Sony">Sony</label>
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

        <Product title="Apple Watch Series 4 GPS" />
        <Product title="JBL Speaker" />
        <Product title="Apple iPhone X 128GB" />
      </div>
    </Container>
  );
};

export default Filters;

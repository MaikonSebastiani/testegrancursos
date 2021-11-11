import React from 'react';
import { Container, FiltersTools, MultiRange } from './styles';

const Filters: React.FC = () => {
  const t = '';

  return (
    <Container>

      <div className="leftSide">
        <p>Filters</p>
        <FiltersTools>
          <MultiRange>
            <strong>Multi Rage</strong>

            <div className="checkbox">
              <input id="10" type="radio" name="rangeRadio" />
              <label htmlFor="10">$10</label>
            </div>

            <div className="checkbox">
              <input id="10_100" type="radio" name="rangeRadio" />
              <label htmlFor="10_100">$10-$100</label>
            </div>

            <div className="checkbox">
              <input id="100_500" type="radio" name="rangeRadio" />
              <label htmlFor="100_500">$100-$500</label>
            </div>

            <div className="checkbox">
              <input id="500" type="radio" name="rangeRadio" />
              <label htmlFor="500">$500</label>
            </div>

            <div className="checkbox">
              <input id="all" type="radio" name="rangeRadio" />
              <label htmlFor="all">All</label>
            </div>

            <hr />

          </MultiRange>

        </FiltersTools>
      </div>

      <div className="rightSide">
        <p>LADO DIREITOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      </div>
    </Container>
  );
};

export default Filters;

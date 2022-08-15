import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { offerListFilling } from '../../store/app-data/app-data';
import { getOffers } from '../../store/app-data/selectors';
import { Offer } from '../../types/offer';
import SortVariant from '../sort-variant/sort-variant';

const sortTypes = {
  default: 'Popular',
  ascendingPrice: 'Price: low to high',
  descendingPrice: 'Price: high to low',
  rating: 'Top rated first',
};

function SortVariants(): JSX.Element {

  const [open, setOpen] = useState(false);
  const [sortType, setSortType] = useState(sortTypes.default);
  const dispatch = useAppDispatch();
  const offers = useAppSelector(getOffers);

  const handleSortTypeClick = (type: string) => {
    setOpen(!open);
    setSortType(type);
    let newOfferOrder: Offer[] = offers.slice();
    switch (type) {
      case sortTypes.default:
        newOfferOrder = offers.slice().sort((a: Offer, b: Offer) => a.id - b.id);
        break;
      case sortTypes.ascendingPrice:
        newOfferOrder = offers.slice().sort((a: Offer, b: Offer) => a.price - b.price);
        break;
      case sortTypes.descendingPrice:
        newOfferOrder = offers.slice().sort((a: Offer, b: Offer) => b.price - a.price);
        break;
      case sortTypes.rating:
        newOfferOrder = offers.slice().sort((a: Offer, b: Offer) => b.rating - a.rating);
        break;
    }
    dispatch(offerListFilling(newOfferOrder));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setOpen(!open)}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${open ? 'places__options--opened' : ''}`}>
        {Object.values(sortTypes).map((type) => <SortVariant sortType={type} clickHandler={() => handleSortTypeClick(type)} key={type} />)}
      </ul>
    </form>
  );
}

export default SortVariants;

import { MouseEventHandler } from 'react';

type SortVariantProps = {
  sortType: string;
  clickHandler: MouseEventHandler;
}

function SortVariant({ sortType, clickHandler }: SortVariantProps): JSX.Element {
  return (
    <li className="places__option" tabIndex={0} onClick={clickHandler}>{sortType}</li>
  );
}

export default SortVariant;

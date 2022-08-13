import { nanoid } from 'nanoid';

type PropertyInsideProps = {
  features: string[];
};

function PropertyInside({ features }: PropertyInsideProps): JSX.Element {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {features.map((feature, i) => (
          <li className="property__inside-item" key={nanoid()}>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PropertyInside;

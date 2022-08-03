type OfferGalleryProps = {
  images: string[];
};

function OfferGallery({ images }: OfferGalleryProps): JSX.Element {
  return (
    <div className="property__gallery">
      {images.map((imageSrc, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="property__image-wrapper" key={i}>
          <img className="property__image" src={imageSrc} alt="Studio" />
        </div>
      ))}
    </div>
  );
}

export default OfferGallery;

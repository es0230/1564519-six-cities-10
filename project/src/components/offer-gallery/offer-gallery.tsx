type OfferGalleryProps = {
  images: string[];
};

function OfferGallery({ images }: OfferGalleryProps): JSX.Element {
  return (
    <div className="property__gallery">
      {images.map((imageSrc, i) => {
        if (i < 6) {
          return (
            <div className="property__image-wrapper" key={imageSrc}>
              <img className="property__image" src={imageSrc} alt="Studio" />
            </div>
          );
        }
        return <> </>;
      })}
    </div>
  );
}

export default OfferGallery;

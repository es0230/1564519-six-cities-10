type OfferGalleryProps = {
  images: string[];
};

const GALLERY_IMAGE_LIMIT = 6;

function OfferGallery({ images }: OfferGalleryProps): JSX.Element {
  return (
    <div className="property__gallery">
      {images.map((imageSrc, i) => {
        if (i < GALLERY_IMAGE_LIMIT) {
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

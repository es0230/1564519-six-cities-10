import { useParams } from 'react-router-dom';

type OfferGalleryProps = {
  images: string[];
};

const GALLERY_IMAGE_LIMIT = 6;

function OfferGallery({ images }: OfferGalleryProps): JSX.Element {
  const { id } = useParams();
  return (
    <div className="property__gallery">
      {images.map((imageSrc, i) => {
        if (i < GALLERY_IMAGE_LIMIT) {
          return (
            <div className="property__image-wrapper" key={imageSrc + id}>
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

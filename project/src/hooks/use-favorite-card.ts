import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '.';
import { APIRoute, AppRoute } from '../const';
import { api } from '../store';
import { toggleIsFavoriteCard } from '../store/app-data/app-data';
import { Offer } from '../types/offer';

type ResultFavoriteCard = [boolean | undefined, (id: number) => void];

export const useFavoriteCard = (offer: Offer | undefined): ResultFavoriteCard => {
  const [isCardFavorite, setCardFavorite] = useState(offer?.isFavorite);
  const [sendRequest, setSendRequest] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (sendRequest) {
      api.post<Offer>(`${APIRoute.Favorite}/${offer?.id}/${Number(!isCardFavorite)}`)
        .then((updatedOffer) => {
          setCardFavorite(updatedOffer.data.isFavorite);
          dispatch(toggleIsFavoriteCard({ id: updatedOffer.data.id, newIsFavorite: updatedOffer.data.isFavorite }));
        })
        .catch(() => navigate(AppRoute.Login));
      setSendRequest(false);
    }
  }, [sendRequest]);

  const handleFavoriteToggle = () => {
    setSendRequest(true);
  };

  return [isCardFavorite, handleFavoriteToggle];
};

import { BackgroundEnum } from 'common/enums';
import { BackgroundImage, BurgerMenu, FullMealLayout, Header, Avatar } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMealByExternalId } from 'store/meals';

const FullRecipe = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { meal } = useAppSelector(state => state.meals);

  useEffect(() => {
    dispatch(getMealByExternalId({mealExternalId: id}))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <Header>
        <Avatar avatar={null}/>
      </Header>
      {!!meal && <FullMealLayout meal={meal}/>}
      <BurgerMenu />
      <BackgroundImage type={BackgroundEnum.FILLED} />
    </>
  )
}

export { FullRecipe };
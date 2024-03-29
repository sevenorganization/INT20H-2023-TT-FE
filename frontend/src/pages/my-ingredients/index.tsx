/* eslint-disable react-hooks/exhaustive-deps */
import { BackgroundEnum, DataStatusEnum, FooterEnum } from 'common/enums';
import { Header, Footer, Avatar, BurgerMenu, BackgroundImage, MyIngredientItem, MyIngredientsLayout } from 'components';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { getSavedIngredients } from 'store/profile';

const MyIngredients = () => {
  const [ ingredients, setIngredients ] = useState([]);

  const dispatch = useAppDispatch();
  const { status, usersIngredients } = useAppSelector(state => state.profile);

  useEffect(() => {
    if(!ingredients.length)
      dispatch(getSavedIngredients(null));
  }, []);

  useEffect(() => {
    if(status === DataStatusEnum.SUCCESS) {
      setIngredients(usersIngredients);
    }
  }, [status]);
  
  return (
    <>
      <Header>
        <Avatar avatar={null} />
      </Header>
      <MyIngredientsLayout name='My ingredients'>      
        {
          !!usersIngredients.length
          ? usersIngredients.map((ingredient, key) => <MyIngredientItem key={ingredient.idIngredient} number={key + 1} id={ingredient.idIngredient} name={ingredient.strIngredient} />)
          : <div style={{textAlign: 'center', width: '100%', gridColumn: 'span 2'}}> No saved ingredients </div>
        }
      </MyIngredientsLayout>
      <Footer type={FooterEnum.LIGHT} />
      <BackgroundImage type={BackgroundEnum.FILLED} />
      <BurgerMenu />
    </>
  )
}

export { MyIngredients };
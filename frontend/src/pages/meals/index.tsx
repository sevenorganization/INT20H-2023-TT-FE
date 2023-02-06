import { recipeMock } from 'assets/mocks';
import { BackgroundEnum, FooterEnum } from 'common/enums';
import { BackgroundImage } from 'components/background';
import { BurgerMenu } from 'components/burger-menu';
import { MealLayout } from 'components/layouts/meal-layout';
import { Avatar } from 'components/primitives/avatar';
import { Footer } from 'components/primitives/footer';
import { Header } from 'components/primitives/header';
import { RecipeItem } from 'components/recipe-item';
import React from 'react';

const Meals = () => {
  
  return (
    <>
      <Header>  
        <Avatar avatar={null} />
      </Header>
      <BurgerMenu />
      <MealLayout>
        {
          recipeMock.map(item => <RecipeItem key={item.name} img={item.img} item={item} />)
        }
      </MealLayout>
      <BackgroundImage type={BackgroundEnum.FILLED} />
      <Footer type={FooterEnum.LIGHT}/>
    </>
  )
}

export { Meals };
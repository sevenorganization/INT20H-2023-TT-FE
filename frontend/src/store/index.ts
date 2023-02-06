import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { auth as authService } from 'services';
import { ingredients as ingredientsService } from 'services';
import { meals as mealsService } from 'services';
import { profile as profileService } from 'services';
import { users as usersService } from 'services';
import { auth } from './rootReducer';

const  middleware = getDefaultMiddleware({
    thunk: {
        extraArgument: {
            authService,
            ingredientsService,
            mealsService,
            profileService,
            usersService,
        }
    }
});

const store = configureStore({
    reducer: combineReducers({
        auth,
    }),
    middleware,
    
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
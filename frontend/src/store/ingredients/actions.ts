import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType, PathType } from './common';
import { IngredientsByNameDTO, IngredientsByTypeDTO, IngredientsByTypeNameDTO } from 'common/dto';

const getAllIngredients = createAsyncThunk(ActionType.GET_ALL, async (params: any | null, { extra }: any) => (
    extra.ingredientsService.getAllIngredients(PathType.GET_ALL, {
        ...params,
    }).then(res => res)
));

const getIngredientByName = createAsyncThunk(ActionType.GET_BY_NAME, async (params: IngredientsByNameDTO, { extra }: any) => (
    extra.ingredientsService.getIngredientByName({ path: PathType.GET_BY_NAME, params, extra: {
        ...params,
    }}).then(res => res)
));

const getIngredientsByPartName = createAsyncThunk(ActionType.GET_BY_PART_NAME, async (params: IngredientsByNameDTO, { extra }: any) => (
    extra.ingredientsService.getIngredientsByPartName({ path: PathType.GET_BY_PART_NAME, params, extra: {
        ...params,
    }}).then(res => res)
));

const getIngredientsByTypePartName = createAsyncThunk(ActionType.GET_BY_TYPE_PART_NAME, async (params: IngredientsByTypeNameDTO, { extra }: any) => (
    extra.ingredientsService.getIngredientsByTypePartName({ path: PathType.GET_BY_TYPE_PART_NAME, params, extra: {
        ...params,
    }}).then(res => res)
));

const getIngredientsByType = createAsyncThunk(ActionType.GET_BY_TYPE, async (params: IngredientsByTypeDTO, { extra }: any) => (
    extra.ingredientsService.getIngredientsByType({path: PathType.GET_BY_TYPE, params, extra: {
        ...params,
    }}).then(res => res)
));

const getAllIngredientsTypes = createAsyncThunk(ActionType.GET_TYPES, async (params: any | null, { extra }: any) => (
    extra.ingredientsService.getAllIngredientsTypes(PathType.GET_TYPES, {
        ...params,
    }).then(res => res)
));

export { getAllIngredients, getIngredientByName, getIngredientsByPartName, getIngredientsByTypePartName, getIngredientsByType, getAllIngredientsTypes };
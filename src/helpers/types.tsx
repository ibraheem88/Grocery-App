import { NavigatorScreenParams } from "@react-navigation/native";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../state/store";

export type MyTabParamList = {
    Home: undefined;
    Profile: undefined;
    Categories: undefined;
    Cart: undefined
};

export type RootStackParamList = {
    HomeStack: NavigatorScreenParams<MyTabParamList> | undefined;
    Detail: { item: Product, category: string };
    CartScreen: undefined;
    CheckoutScreen: undefined
};

export type Product = {
    name: string
    weight: string
    price: string
    image: string
}

export type SetCartAction = {
    type: string;
    payload: Product[];
}

export type UserListAction = SetCartAction

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
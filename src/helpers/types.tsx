
export type MyTabParamList = {
    Home: undefined;
    Profile: undefined;
    Categories: undefined;
    Cart: undefined
};

export type RootStackParamList = {
    HomeStack: undefined;
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
import { ProductProps } from "../components/ProductCard";
import { CartProductProps } from "../pages/Cart";
import { LayerDescription } from "./mock-categories";

const LS_KEYS = {
    CART_ITEMS: 'cart-items',
    PRODUCTS: 'products',
    CATEGORIES: 'categories'
};

export function updateCartItem(cartItem: CartProductProps) {
    const currItems = getCartItems();
    const currIdx = currItems.findIndex(c => c.productID === cartItem.productID);

    if (currIdx === -1) currItems.push(cartItem);
    else currItems[currIdx] = cartItem;
    updateCartItems(currItems);
}

export function updateCartItems(cartItems: CartProductProps[]) {
    localStorage.setItem(LS_KEYS.CART_ITEMS, JSON.stringify(cartItems));
}

export function updateProducts(products: { [productID: string]: ProductProps }) {
    localStorage.setItem(LS_KEYS.PRODUCTS, JSON.stringify(products));
}

export function updateProduct(product: ProductProps) {
    const currProds = getProducts();
    currProds[product.productID] = product;
    updateProducts(currProds);
}

export function getCartItems() {
    return JSON.parse(localStorage.getItem(LS_KEYS.CART_ITEMS) ?? '[]') as CartProductProps[];
}

export function getCartItem(productID: string) {
    return getCartItems().find(p => p.productID === productID);
}

export function getProduct(productID: string) {
    return getProducts()[productID];
}

export function getProducts() {
    return JSON.parse(localStorage.getItem(LS_KEYS.PRODUCTS) ?? '{}') as { [productID: string]: (ProductProps) }
}


export function getCategories() {
    return JSON.parse(localStorage.getItem(LS_KEYS.CATEGORIES) ?? '{}') as { [layer: string] : (LayerDescription) };
}

export function getCategoriesInLayer(layerID: string) {
    return getCategories()[layerID];
}

export function getCategoryInLayer(layerID: string, categoryID: string) {
    return getCategories()[layerID]?.find(c=> c.id === categoryID);
}
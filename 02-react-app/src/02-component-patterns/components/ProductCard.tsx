import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import styles from "../styles/styles.module.css";
import {
  ProductContextProps,
  ProductCardProps,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      <Provider
        value={{
          counter,
          increaseBy,
          product,
        }}
      >
        {children}
      </Provider>
    </div>
  );
};

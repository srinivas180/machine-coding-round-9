import { createContext } from "react";

import { categories } from "../db/categories";

export const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
    return (
        <CategoriesContext.Provider value={{ categories }}>
            {children}
        </CategoriesContext.Provider>
    );
}

import { categories } from "../../db/categories";

import { Header } from "../../components/Header";
import { Category } from "../../components/Category";

import "./index.css";

export function Home() {
    return (
        <div className="container">
            <Header />
            <div className="page">
                <h2 className="page__title">Categories</h2>
                <div className="categories">
                    {categories.map((category) => (
                        <Category category={category} />
                    ))}
                </div>
            </div>
        </div>
    );
}

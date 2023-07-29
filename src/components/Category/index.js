import { Link } from "react-router-dom";

export function Category({ category }) {
    return (
        <div>
            <Link
                className="link--decor-none link--black"
                to={`/explore/${category.category}`}
            >
                <img src={category.thumbnail} />
                <p>{category.category}</p>
            </Link>
        </div>
    );
}

import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor () {
    let authorLink = "https://www.kimscravings.com/sweet-potato-black-bean-casserole/";
    let authorPhoto = "https://www.kimscravings.com/wp-content/uploads/2019/07/506A1197-2.jpg";
    let authorName = "Kim's Cravings";

    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Kim" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Sweet Potato & Black Bean Casserole</a>
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render () {
        return (
            <div>
                <div>
                    <h1>Sweet Potato and Black Bean Taco Casserole</h1>
                    <p>This Vegetarian Enchilada Casserole is made with layers of salsa, black beans, sweet potato, tomatoes, tortillas and is finished off with a sprinkle of cheese. A family-friendly enchilada casserole recipe, that's as tasty as it is healthy.</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}

export default RecipeDescription;
const RecipeAuthor = () => {
   let authorLink = "https://www.kimscravings.com/sweet-potato-black-bean-casserole/";
   let authorPhoto = "https://thecozycook.com/wp-content/uploads/2021/11/The-Cozy-Cook.jpg";
   let authorName = "Kim";

   return (
      <div>
         <img src={authorPhoto} alt = "sweet potato black bean casserole" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["uncooked macaroni",
   "butter",
   "flour",
   "heavy cream",
   "milk"];

   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   let name = "Stovetop Mac and Cheese";
   let description = "This Creamy Stovetop Mac and Cheese is the BEST 30-minute meal for a busy week. Your family will love it every time!";
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {

   let recipeImage = "https://thecozycook.com/wp-content/uploads/2021/10/Stovetop-Mac-and-Cheese-2.jpg";

   return (
      <img src={recipeImage} alt="sweet potato black bean casserole" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
export default function BookList() {
   let pageTitle = "New Book Releases";
   let book1 = "https://m.media-amazon.com/images/I/41Uuhs+pLeL._SY344_BO1,204,203,200_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/51eO4vqVjIL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/417ZC7EzLKL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Stone Cold by David Baldacci" width="200" height="300"/>
         <img src={book2} alt="Chasing the Dime by Michael Connelly" width="200" height="300"/>
         <img src={book3} alt="Gray Mountain by John Grisham" width="150" height="300"/>
      </div>      
   );
}
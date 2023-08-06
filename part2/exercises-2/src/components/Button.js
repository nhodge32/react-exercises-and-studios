import './styles.css';

function Button() {
   const onLearnMore = () => {
      alert("Take me to the ocean.");
   }

   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;
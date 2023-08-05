import classes from './ChoresList.module.css';

export default function ChoresList () {
   return (<p>
      <h3 className={classes.choresHeading}>Chores List</h3>
      <ol>
         <li className={classes.choresText}>Laundry</li>
         <li className={classes.choresText}>Dishes</li>
         <li className={classes.choresText}>Vacuum</li>
      </ol>
      </p>
      );
}
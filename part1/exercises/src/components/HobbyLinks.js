import classes from './HobbyLinks.module.css';

export default function HobbyLinks() {
    let hobbyLinks = ["https://www.gardendesign.com/how-to/", "https://www.ncaa.com/sports/basketball-women/d1"];

    return (
        <div>
            <h4 className={classes.hobbyHeading}>My Hobbies</h4>
            <a href = {hobbyLinks[0]}>How to Garden</a>
            <a href = {hobbyLinks[1]}>NCAA Women's D1 Basketball</a>
        </div>
    );
}
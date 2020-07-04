import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import boy from './Images/boy.jpg';
import baby from './Images/kid.jpeg';
import dump from './Images/dump.jpg';
import money from './Images/money.jpeg';
const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        height: "100%",
        width: "100%",
    },
    column: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center"
    },
    img: {
        width: "500px",
        height: "500px"
    }
});

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.column}>
                <div>
                    <h1>ماذا تفعل عند الرعاف</h1>
                    <img src={boy} className={classes.img}></img>
                </div>

                <div>
                    <h1>كيف تقوم بالاسعافات الأولية</h1>
                    <img src={baby} className={classes.img}></img>
                </div>
            </div>
            <div className={classes.column}>
                <div>
                    <h1>ماذا تفعل لو وقع صديقك أثناء لعبكم للكرة</h1>
                    <img src={dump} className={classes.img}></img>
                </div>
                <div>
                    <h1>How to make money </h1>
                    <img src={money} className={classes.img}></img>
                </div>

            </div>
        </div>
    )
}
export default Home;
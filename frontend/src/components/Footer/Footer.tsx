
import * as React from "react";

import { Link } from 'react-router-dom';
import { Theme, createStyles, withStyles, WithStyles } from '@material-ui/core';



const styles = (theme: Theme) => createStyles({
    footer:
    {
        backgroundColor: theme.palette.primary.main,
        position: "fixed",
        bottom: 0,
        width: "100%",
        minHeight: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        color: "white",

    },

    helpDeskHref: {
        textDecoration: "none",
        color: "white",
        paddingLeft: "5px",
    }
})

interface IFooterProps extends WithStyles<typeof styles> {
}



function Footer(props: IFooterProps) {
    const { classes } = props;
    return (
        <div>
            <footer className={classes.footer}>
<<<<<<< refs/remotes/origin/dev
                <span>&copy; {new Date().getFullYear()}</span><Link className={classes.helpDeskHref} to="/">HelpDesk</Link>
=======
                <span>&copy; {new Date(). getFullYear()}</span><Link className={classes.helpDeskHref} to="/">HelpDesk</Link>
>>>>>>> Copyright in Footer now displays current year
                <Link className={classes.helpDeskHref} to="/about">about</Link>
            </footer>
        </div>
    );
}


export default withStyles(styles)(Footer);

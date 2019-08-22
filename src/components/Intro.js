import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from '@material-ui/core/Grid';
import SvgIcon from "@material-ui/core/SvgIcon";
import Table from "@material-ui/core/Table";
import {TableBody} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const useStyles = makeStyles(theme =>({
    cardcontent: {
        paddingBottom: 4,
        "&:last-child": {
            paddingBottom: 4
        },
        boxShadow: "none",
        minHeight: 156,
        backgroundColor: "#E8F1F2",
        margin: theme.spacing(2,4,0,4),
        textAlign: "left",
    },
    card: {
        boxShadow: "none",
        minHeight: 156,
        backgroundColor: "#E8F1F2",
        margin: theme.spacing(2,4,0,4),
        textAlign: "left",
    },
    contactCard: {
        paddingBottom: 4,
        "&:last-child": {
            paddingBottom: 4
        },
        boxShadow: "none",
        minHeight: 156,
        backgroundColor: "#E8F1F2",
        margin: theme.spacing(2,4,0,4),
        textAlign: "left",

    },
    divider: {
        margin: theme.spacing(3, 4),
    },
    introHello: {
        fontSize: 28,

    },
    introIntroduction: {
        fontSize: 19,

    },
    linkText: {
        fontSize: 22,
        color: "#050505",
        fontFamily: "Berlin Sans FB"
    },
    vertBorder: {
        borderRight: '0.1em solid black',
        padding: '0.5em',
    },
    table: {

    },
    tableCell: {
        padding: theme.spacing(0,1,0,1),
    },
    tableRow: {
        padding: theme.spacing(0,1,0,0)
    }
}));


export default function Intro() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={0}>

                <Grid item xs={10}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.introHello} gutterBottom>
                                —Hello!
                            </Typography>
                            <Typography className={classes.introIntroduction} gutterBottom>
                                My name is <span style={{color: "#1C2541", fontWeight: 'bold'}}>Mitchell Hammack</span> and I am currently a CS student at the University of Florida. I have a passion for combining machine learning and web apps.
                                I am currently seeking an internship for the summer of 2020.
                            </Typography>
                            <Typography></Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card className={classes.cardcontent}>
                        <CardContent className={classes.tableCell}>
                            <Table  className={classes.table} size={"small"}>
                                <TableBody>
                                    <TableRow className={classes.tableRow}>
                                        <TableCell align={"right"} className={classes.tableCell}><a href={"https://www.linkedin.com/in/hammackm/"} className={classes.linkText}>LinkedIn</a></TableCell>
                                            <TableCell align={"left"} className={classes.tableCell}>
                                                <a href={"https://www.linkedin.com/in/hammackm/"}>
                                                <SvgIcon>
                                                    <path fill="#247BA0" d={"M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"}/>
                                                </SvgIcon>
                                                </a>
                                            </TableCell>
                                    </TableRow>
                                    <TableRow>
                                            <TableCell align={"right"} className={classes.tableCell}><a href={"https://github.com/hammackm"} className={classes.linkText}>GitHub</a></TableCell>
                                            <TableCell align={"left"} className={classes.tableCell}>
                                                <a href={"https://github.com/hammackm"}>
                                                <SvgIcon>
                                                    <path fill="#000000" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                                                </SvgIcon>
                                                </a>
                                            </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align={"right"} className={classes.tableCell}><a href={"https://www.kaggle.com/hammackm1"} className={classes.linkText}>Kaggle</a></TableCell>
                                        <TableCell align={"left"} className={classes.tableCell}>
                                            <a href={"https://www.kaggle.com/hammackm1"}>
                                            <SvgIcon>
                                                <path fill="#4B93B1" d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358" />
                                            </SvgIcon>
                                            </a>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align={"right"} className={classes.tableCell}><a href={"mailto:hammackm1@gmail.com"} className={classes.linkText}>Email</a></TableCell>
                                        <TableCell align={"left"} className={classes.tableCell}>
                                            <a href={"mailto:hammackm1@gmail.com"}>
                                            <SvgIcon>
                                                <path fill="#000000" d="M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z" />
                                            </SvgIcon>
                                            </a>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            Hammackm1@gmail.com
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Divider className={classes.divider} />
        </div>
    );
}

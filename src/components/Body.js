import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from '@material-ui/core/Grid';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import SvgIcon from "@material-ui/core/SvgIcon";
import { borders } from '@material-ui/system';
import Box from "@material-ui/core/Box";
import {TableBody} from "@material-ui/core";

const inner = (
    <Box bgcolor="background.paper" m={1} border={1} style={{ width: '5rem', height: '5rem' }}>hello</Box>
);

const createRow = (language="", framework="", technology="", other="") => {
    return {language, framework, technology, other}
};

const skillRows = [
    createRow("Python", "TensorFlow", "Docker", "Amazon Web Service"),
    createRow("Java", "Keras", "Kubernetes", "Google Cloud Platform"),
    createRow("C++", "Spring Boot", "Git"),
    createRow("JavaScript", "ReactJS", "MongoDB"),
    createRow("SQL", "SciPy"),
    createRow("HTML/CSS", "Pandas"),
]


const useStyles = makeStyles(theme =>({
    containerBody: {
    },
    card: {
        boxShadow: "none",
        backgroundColor: "#EADFE4",
        margin: theme.spacing(0,4,0,4),
        textAlign: "left",
        border: 1,
        m: 1,
    },
    labelCard: {
        textAlign: "center",
        boxShadow: "none",
        backgroundColor: "#EADFE4",
        margin: theme.spacing(0,4,0,4),
    },
    divider: {
        margin: theme.spacing(3, 4),
    },
    bodyLabelText: {
        fontSize: 20,
        color: "#000"
    },
    textDivider: {
        opacity: 0.25,
        padding: theme.spacing(2,0)
    },
    skillsTable: {

    },
    skillsCard: {
        boxShadow: "none",
        backgroundColor: "#EADFE4",
        margin: theme.spacing(0,4,0,4),

    },
    skillsTableHead: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    experienceCompanyNameCell: {
        fontSize: 18,
        fontWeight: 'bold',
        minWidth: 225,
    },
    experienceHeaderInfoCell: {
        fontWeight: 'bold',
        minWidth: 100,
    },
    aboutMeText: {
        fontSize: 20,
    }
}));


export default function Body() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={0} className={classes.containerBody}>
                <Grid item xs={3}>
                    <Card className={classes.labelCard}>
                        <CardContent>
                            <Typography className={classes.bodyLabelText}><span style={{color: "#EE6352", opacity: 0.25}}>const</span> <span style={{color: "#54417C", fontWeight: "bold", fontSize: 22}}>ABOUT_ME</span><span style={{opacity: 0.25}}> = (mitchell_info) => {'{'}</span></Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={9}>

                    <Card className={classes.card}>
                        <div onMouseEnter={console.log("enter")} onMouseLeave={console.log("leave")}>
                        <CardContent>
                            <Typography className={classes.aboutMeText}>When I'm not studying or working on personal projects, you can find me in the gym or practing piano and <a href={"https://arts.ufl.edu/sites/carillon-studio/welcome/"}>carillon</a>.</Typography>
                        </CardContent>
                        </div>
                    </Card>

                </Grid>
            </Grid>
            <Divider className={classes.divider}></Divider>
            <Grid container spacing={0} className={classes.containerBody}>
                <Grid item xs={3}>
                    <Card className={classes.labelCard}>
                        <CardContent>
                            <Typography className={classes.bodyLabelText}><span style={{color: "#EE6352", opacity: 0.25}}>const</span> <span style={{color: "#54417C", fontWeight: "bold", fontSize: 22}}>EXPERIENCE</span><span style={{opacity: 0.25}}> = (work_experience) => {'{'}</span></Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={9}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Table size={"small"}>
                                <TableBody>
                                <TableRow>
                                    <TableCell className={classes.experienceCompanyNameCell}>J.P. Morgan</TableCell>
                                    <TableCell className={classes.experienceHeaderInfoCell}>Software Engineer Intern</TableCell>
                                    <TableCell className={classes.experienceHeaderInfoCell}>July 2019 - August 2019</TableCell>
                                </TableRow>
                                </TableBody>
                            </Table>
                            <Typography><u>Tasks:</u></Typography>
                            <Typography>—Create a full-stack web app that automatically extracts text data from legal and financial documents</Typography>
                            <Typography>—Create a machine learning service to be used by the consumer bank</Typography>
                            <Typography><u>Challenges Faced:</u></Typography>
                            <Typography>—Creating a product on a tight schedule while learning all of the new technologies that were used</Typography>
                            <Typography><u>What I Used and Learned:</u></Typography>
                            <Typography>—Docker</Typography>
                            <Typography>—Kubernetes</Typography>
                            <Typography>—ReactJS</Typography>
                            <Typography>—Spring Boot</Typography>
                            <Typography>—Agile Development</Typography>
                            <Divider className={classes.divider}></Divider>
                            <Table size={"small"}>
                                <TableBody>
                                <TableRow>
                                    <TableCell className={classes.experienceCompanyNameCell}>Lockheed Martin</TableCell>
                                    <TableCell className={classes.experienceHeaderInfoCell}>Software Engineer Intern</TableCell>
                                    <TableCell className={classes.experienceHeaderInfoCell}>July 2018 - August 2018</TableCell>
                                </TableRow>
                                </TableBody>
                            </Table>
                            <Typography><u>Tasks:</u></Typography>
                            <Typography>—Create vulnerability scanning scripts to be used by ACAS in PowerShell and XML</Typography>
                            <Typography>—Design informational web pages for different engineering teams</Typography>
                            <Typography>—Implement a database for noncompliant media devices</Typography>
                            <Typography>—Perform vulnerability scans on a variety of workstations</Typography>
                            <Typography><u>Challenges Faced:</u></Typography>
                            <Typography>—Learning how to communicate effectively in a large team</Typography>
                            <Typography><u>What I Used and Learned:</u></Typography>
                            <Typography>—PowerShell, ACAS, and XML</Typography>
                            <Typography>—The importance of secure coding and vulnerability testing</Typography>
                            <Typography>—Database design</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Divider className={classes.divider}></Divider>
            <Grid container spacing={0} className={classes.containerBody}>
                <Grid item xs={3}>
                    <Card className={classes.labelCard}>
                        <CardContent>
                            <Typography className={classes.bodyLabelText}><span style={{color: "#EE6352", opacity: 0.25}}>const</span> <span style={{color: "#54417C", fontWeight: "bold", fontSize: 22}}>PROJECTS</span><span style={{opacity: 0.25}}> = (mitchell_projects) => {'{'}</span></Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={9}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Table size={"small"}>
                                <TableBody>
                            <TableRow>
                                <TableCell className={classes.experienceCompanyNameCell}>ASL Interpreter</TableCell>
                                <TableCell align={"left"} className={classes.tableCell}>
                                    <a href={"https://github.com/hammackm"}>
                                        <SvgIcon>
                                            <path fill="#000000" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                                        </SvgIcon>
                                    </a>
                                </TableCell>
                            </TableRow>
                                </TableBody>
                        </Table>
                            <Typography><u>Problem:</u></Typography>
                            <Typography>—ASL-using deaf persons cannot effectively communicate with hearing individuals who do not know ASL without an interpreter</Typography>
                            <Typography>—This creates a communication barrier between the two groups</Typography>
                            <Typography><u>Solution:</u></Typography>
                            <Typography>—Create a service that a be used in place of a human interpreter</Typography>
                            <Typography><u>Challenges Faced:</u></Typography>
                            <Typography>—Connecting all endpoints into the front-end</Typography>
                            <Typography><u>What I Used and Learned:</u></Typography>
                            <Typography>—Keras</Typography>
                            <Typography>—Flask</Typography>
                            <Typography>—ReactJS</Typography>
                            <Divider className={classes.divider}></Divider>
                            <Table size={"small"}>
                                <TableBody>
                                <TableRow>
                                    <TableCell className={classes.experienceCompanyNameCell}>Melanoma Skin Cancer Detection</TableCell>
                                    <TableCell className={classes.experienceHeaderInfoCell}>July 2015 - March 2017</TableCell>
                                    <TableCell align={"left"} className={classes.tableCell}>
                                        <a href={"https://github.com/hammackm"}>
                                            <SvgIcon>
                                                <path fill="#000000" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                                            </SvgIcon>
                                        </a>
                                    </TableCell>
                                </TableRow>
                                </TableBody>
                            </Table>
                            <Typography><u>Problem:</u></Typography>
                            <Typography>—Melanoma skin cancer is #leading cause of death?#</Typography>
                            <Typography>—Early diagnosis of melanoma is crucial for effective treatment and good prognosis</Typography>
                            <Typography><u>Solution:</u></Typography>
                            <Typography>—Create an app that allows users to upload an image of a skin lesion to determine if the image contains a melanoma skin lesion</Typography>
                            <Typography>—Not intended to replace a physician or biopsy but rather as a simple test that can be done at home</Typography>
                            <Typography><u>Challenges Faced:</u></Typography>
                            <Typography>—Limited dataset of ~360 images</Typography>
                            <Typography><u>What I Used and Learned:</u></Typography>
                            <Typography>—Python</Typography>
                            <Typography>—Keras</Typography>
                            <Divider className={classes.divider}></Divider>
                            <Table size={"small"}>
                                <TableBody>
                                <TableRow>
                                    <TableCell className={classes.experienceCompanyNameCell}>Danger.ai</TableCell>
                                    <TableCell className={classes.experienceHeaderInfoCell}>January 2019</TableCell>
                                    <TableCell align={"left"} className={classes.tableCell}>
                                        <a href={"https://github.com/isaiahnields/danger.ai"}>
                                            <SvgIcon>
                                                <path fill="#000000" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                                            </SvgIcon>
                                        </a>
                                    </TableCell>
                                </TableRow>
                                </TableBody>
                            </Table>
                            <Typography><u>Problem:</u></Typography>
                            <Typography>—Video surveillance is a task that requires a constant human presence to monitor all video feeds</Typography>
                            <Typography><u>Solution:</u></Typography>
                            <Typography>—Create an web app and machine learning ensemble pipeline to continuously monitor video surveillance for dangerous activity</Typography>
                            <Typography><u>Challenges Faced:</u></Typography>
                            <Typography>—Bringing together all parts of the software </Typography>
                            <Typography><u>What I Used and Learned:</u></Typography>
                            <Typography>—Google Cloud Platform</Typography>
                            <Typography>—Ensemble Machine Learning</Typography>
                            <Typography>—OpenPose</Typography>
                            <Typography>—WordToVec</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Divider className={classes.divider}></Divider>
            <Grid container spacing={0} className={classes.containerBody}>
                <Grid item xs={3}>
                    <Card className={classes.labelCard}>
                        <CardContent>
                            <Typography className={classes.bodyLabelText}><span style={{color: "#EE6352", opacity: 0.25}}>const</span> <span style={{color: "#54417C", fontWeight: "bold", fontSize: 22}}>SKILLS</span><span style={{opacity: 0.25}}> = (mitchell_skills) => {'{'}</span></Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={9}>
                    <Card className={classes.skillsCard}>
                        <CardContent>
                            <Table className={classes.skillsTable} size={"small"}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell className={classes.skillsTableHead}>Languages</TableCell>
                                        <TableCell className={classes.skillsTableHead}>Libraries and Frameworks</TableCell>
                                        <TableCell className={classes.skillsTableHead}>Tools and Technologies</TableCell>
                                        <TableCell className={classes.skillsTableHead}>Other</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {skillRows.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell key={row.language}>{row.language}</TableCell>
                                            <TableCell key={row.framework}>{row.framework}</TableCell>
                                            <TableCell key={row.technology}>{row.technology}</TableCell>
                                            <TableCell key={row.other}>{row.other}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Divider className={classes.divider}></Divider>
        </div>
    );
}

// material-ui
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

// project imports
import Chip from 'ui-component/extended/Chip';

// assets
import Avatar1 from 'assets/images/users/michaelturtles.jpg';
import Avatar2 from 'assets/images/users/michael1.jpg';
import Avatar3 from 'assets/images/users/michaelcry.jpg';
import Avatar4 from 'assets/images/users/PrisonMike.png';

// table data
const createData = (avtar, name, designation, product, date, badgeText, badgeType) => ({
    avtar,
    name,
    designation,
    product,
    date,
    badgeText,
    badgeType
});

const rows = [
    createData(Avatar1, 'John Deo', 'Graphics Designer', 'Materially', 'Jun, 26', 'Low', 'warning'),
    createData(Avatar2, 'Jenifer Vintage', 'Web Designer', 'Mashable', 'March, 31', 'High', 'error'),
    createData(Avatar3, 'William Jem', 'Developer', 'Flatable', 'Aug, 02', 'Medium', 'primary'),
    createData(Avatar4, 'David Jones', 'Developer', 'Guruable', 'Sep, 22', 'High', 'error')
];

// ===========================|| DATA WIDGET - PROJECT TABLE CARD ||=========================== //

const ProjectTable = () => (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell sx={{ pl: 3 }}>Assigned</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Due Date</TableCell>
                    <TableCell align="right" sx={{ pr: 3 }}>
                        Priority
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, index) => (
                    <TableRow hover key={index}>
                        <TableCell sx={{ pl: 3 }}>
                            <Grid container spacing={2} alignItems="center" sx={{ flexWrap: 'nowrap' }}>
                                <Grid item>
                                    <Avatar alt="User 1" src={row.avtar} />
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <Typography variant="subtitle1">{row.name}</Typography>
                                    <Typography variant="subtitle2">{row.designation}</Typography>
                                </Grid>
                            </Grid>
                        </TableCell>
                        <TableCell>{row.product}</TableCell>
                        <TableCell>{row.date}</TableCell>
                        <TableCell align="right" sx={{ pr: 3 }}>
                            <Chip chipcolor={row.badgeType} label={row.badgeText} size="small" />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default ProjectTable;

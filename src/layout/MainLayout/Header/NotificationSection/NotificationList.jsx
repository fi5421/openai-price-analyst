import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project-import
import { ThemeMode } from 'config';
import Chip from 'ui-component/extended/Chip';

// assets
import { IconBrandTelegram, IconMailbox, IconPhoto } from '@tabler/icons-react';
import PrisonMike from 'assets/images/users/PrisonMike.png'

const ListItemWrapper = ({ children }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                p: 2,
                borderBottom: '1px solid',
                borderColor: 'divider',
                cursor: 'pointer',
                '&:hover': {
                    bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.main' : 'primary.light'
                }
            }}
        >
            {children}
        </Box>
    );
};

ListItemWrapper.propTypes = {
    children: PropTypes.node
};

// ==============================|| NOTIFICATION LIST ITEM ||============================== //

const NotificationList = () => {
    const theme = useTheme();
    const containerSX = { pl: 7 };

    return (
        <List sx={{ width: '100%', maxWidth: { xs: 300, md: 330 }, py: 0 }}>
            <ListItemWrapper>
                <ListItem alignItems="center" disablePadding>
                    <ListItemAvatar>
                        <Avatar
                            sx={{
                                color: 'primary.dark',
                                bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.main' : 'primary.light'
                            }}
                        >
                            <IconMailbox stroke={1.5} size="20px" />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<Typography variant="subtitle1">Check Your Mail.</Typography>} />
                    <ListItemSecondaryAction>
                        <Stack direction="row" alignItems="center" justifyContent="flex-end">
                            <Typography variant="caption">2 min ago</Typography>
                        </Stack>
                    </ListItemSecondaryAction>
                </ListItem>
                <Stack spacing={2} sx={containerSX}>
                    <Typography variant="subtitle2">All done! Now check your inbox as you&apos;re in for a sweet treat!</Typography>
                    <Button variant="contained" endIcon={<IconBrandTelegram stroke={1.5} size={20} />} sx={{ width: 'min-content' }}>
                        Mail
                    </Button>
                </Stack>
            </ListItemWrapper>
            <ListItemWrapper>
                <ListItem alignItems="center" disablePadding>
                    <ListItemAvatar>
                        <Avatar alt="John Doe" src={PrisonMike} />
                    </ListItemAvatar>
                    <ListItemText primary={<Typography variant="subtitle1">John Doe</Typography>} />
                    <ListItemSecondaryAction>
                        <Stack direction="row" alignItems="center" justifyContent="flex-end">
                            <Typography variant="caption">2 min ago</Typography>
                        </Stack>
                    </ListItemSecondaryAction>
                </ListItem>
                <Stack spacing={2} sx={containerSX}>
                    <Typography component="span" variant="subtitle2">
                        Uploaded two file on &nbsp;
                        <Typography component="span" variant="h6">
                            21 Jan 2020
                        </Typography>
                    </Typography>
                    <Card sx={{ bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.main' : 'secondary.light' }}>
                        <Stack direction="row" spacing={2} p={2.5}>
                            <IconPhoto stroke={1.5} size="20px" />
                            <Typography variant="subtitle1">demo.jpg</Typography>
                        </Stack>
                    </Card>
                </Stack>
            </ListItemWrapper>
            <ListItemWrapper>
                <ListItem alignItems="center" disablePadding>
                    <ListItemAvatar>
                        <Avatar alt="John Doe" src={PrisonMike} />
                    </ListItemAvatar>
                    <ListItemText primary={<Typography variant="subtitle1">John Doe</Typography>} />
                    <ListItemSecondaryAction>
                        <Stack direction="row" alignItems="center" justifyContent="flex-end">
                            <Typography variant="caption">2 min ago</Typography>
                        </Stack>
                    </ListItemSecondaryAction>
                </ListItem>
                <Stack spacing={2} sx={containerSX}>
                    <Typography variant="subtitle2">Where are the turtles?!</Typography>
                    <Chip
                        label="Confirmation of Account."
                        chipcolor="success"
                        variant="outlined"
                        size="small"
                        sx={{
                            width: 'min-content',
                            border: 'none',
                            bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.main' : 'success.light'
                        }}
                    />
                </Stack>
            </ListItemWrapper>
        </List>
    );
};

export default NotificationList;

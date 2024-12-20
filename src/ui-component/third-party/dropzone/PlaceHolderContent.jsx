import PropTypes from 'prop-types';

// material-ui
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CardMedia from '@mui/material/CardMedia';

// project imports
import { DropzoneType } from './Constant';

// assets
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import UploadCover from 'assets/images/upload/upload.svg';

// ==============================|| UPLOAD - PLACEHOLDER ||============================== //

export default function PlaceholderContent({ type }) {
    PlaceholderContent.propTypes = {
        type: PropTypes.string
    };

    return (
        <>
            {type !== DropzoneType.standard && (
                    <Stack
                        spacing={2}
                        alignItems="center"
                        justifyContent="center"
                        direction={{ xs: 'column', md: 'row' }}
                        sx={{ width: 1, textAlign: { xs: 'center', md: 'left' } }}
                    >
                        <CardMedia component="img" image={UploadCover} sx={{ width: 150 }} />
                        <Stack sx={{ p: 3 }} spacing={1}>
                            <Typography variant="h5">Drag & Drop or Select file</Typography>
                        </Stack>
                    </Stack>
            )}
            {type === DropzoneType.standard && (
                <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
                    <CameraAltOutlinedIcon style={{ fontSize: '32px' }} />
                </Stack>
            )}
        </>
    );
}

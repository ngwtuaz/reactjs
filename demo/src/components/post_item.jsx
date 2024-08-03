import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import vite from '../../public/vite.svg';
import FiberNewIcon from '@mui/icons-material/FiberNew';

function Post({ title, description, status }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={1}>
                    <img src={vite} />
                </Grid>
                <Grid item xs={8}>
                    {status == "new" && <FiberNewIcon />}
                    <h4>{title}</h4>
                    <pre>{description}</pre>
                    <Button size="small" variant="outlined">Read more</Button>
                </Grid>
            </Grid>
        </Box>
    )
}
export default Post;
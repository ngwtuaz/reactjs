import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Home() {
    return (
        <>
            <Box sx={{ width: '80%', marginLeft: '220px' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Item>
                            <p>Số dư: 5.000.000.000 VNĐ</p>
                            <p>Tổng chi tiêu: 5.000.000.000 VNĐ</p>
                            <p>Tổng thu nhập: 5.000.000.000 VNĐ</p>
                        </Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Item className='lineChart'>
                            <LineChart
                                xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], tick: { maxTicksLimit: 10 } }]}
                                series={[
                                    {
                                        data: [170000, 1035000, 123000, 1045000, 2232000, 3945001, 4500000, 341000, 100450, 100420, 3744000, 200000],
                                        area: true,
                                    },
                                ]}
                                width={700}
                                height={300}
                            />
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Home
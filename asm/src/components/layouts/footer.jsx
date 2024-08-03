import * as React from 'react';

import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';

export default function ColorInversionFooter() {
    const [color, setColor] = React.useState('neutral');
    return (
        <Sheet
            variant="solid"
            color={color}
            invertedColors
            sx={{
                ...(color !== 'neutral' && {
                    bgcolor: `${color}.800`,
                }),
                flexGrow: 1,
                p: 2,
                borderRadius: { xs: 0, sm: 'sm' },
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton
                    variant="soft"
                    size="sm"
                    onClick={() => {
                        const colors = ['primary', 'neutral', 'danger', 'success', 'warning'];

                        const nextColorIndex = colors.indexOf(color) + 1;
                        setColor(colors[nextColorIndex] ?? colors[0]);
                    }}
                >
                    <ColorLensRoundedIcon fontSize="small" />
                </IconButton>
                <Divider orientation="vertical" />
                <IconButton variant="plain">
                    <FacebookRoundedIcon />
                </IconButton>
                <IconButton variant="plain">
                    <GitHubIcon />
                </IconButton>
                <Input
                    variant="soft"
                    placeholder="Type in your email"
                    type="email"
                    name="email"
                    endDecorator={
                        <IconButton variant="soft" aria-label="subscribe">
                            <SendIcon />
                        </IconButton>
                    }
                    sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
                />
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'flex-start' },
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 2,
                }}
            >
                <Card
                    variant="soft"
                    size="sm"
                    sx={{
                        flexDirection: { xs: 'row', md: 'column' },
                        minWidth: { xs: '100%', md: 'auto' },
                        gap: 1,
                    }}
                >
                    <AspectRatio
                        ratio="21/9"
                        minHeight={80}
                        sx={{ flexBasis: { xs: 200, md: 'initial' } }}
                    >
                        <img alt="" src="data:image/jpeg;base64,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" />
                    </AspectRatio>
                    <CardContent>
                        <Typography level="body-sm">Intro to the MUI ecosystem</Typography>
                        <Typography level="body-xs">Blog post</Typography>
                    </CardContent>
                </Card>
                <List
                    size="sm"
                    orientation="horizontal"
                    wrap
                    sx={{ flexGrow: 0, '--ListItem-radius': '8px' }}
                >
                    <ListItem nested sx={{ width: { xs: '50%', md: 140 } }}>
                        <ListSubheader sx={{ fontWeight: 'xl' }}>Sitemap</ListSubheader>
                        <List>
                            <ListItem>
                                <ListItemButton>Services</ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>Blog</ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>About</ListItemButton>
                            </ListItem>
                        </List>
                    </ListItem>
                    <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>
                        <ListSubheader sx={{ fontWeight: 'xl' }}>Products</ListSubheader>
                        <List>
                            <ListItem>
                                <ListItemButton>Joy UI</ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>Base UI</ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>Material UI</ListItemButton>
                            </ListItem>
                        </List>
                    </ListItem>
                </List>
            </Box>
        </Sheet>
    );
}

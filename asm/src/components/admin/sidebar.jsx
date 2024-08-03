import * as React from "react";

import Avatar from "@mui/joy/Avatar";
import Badge from "@mui/joy/Badge";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CircularProgress from "@mui/joy/CircularProgress";
import Chip from "@mui/joy/Chip";
import IconButton from "@mui/joy/IconButton";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListSubheader from "@mui/joy/ListSubheader";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import Select from "@mui/joy/Select";
import Tooltip from "@mui/joy/Tooltip";
import Option from "@mui/joy/Option";
import Sheet from "@mui/joy/Sheet";
import PieChart from "@mui/icons-material/PieChart";
import SmsIcon from "@mui/icons-material/Sms";
import PersonIcon from "@mui/icons-material/Person";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import AddIcon from "@mui/icons-material/Add";
import ColorLensRoundedIcon from "@mui/icons-material/ColorLensRounded";
import { Link } from "react-router-dom";

export default function ColorInversionNavigation() {
    const [color, setColor] = React.useState("neutral");
    return (
        <Box sx={{ display: "flex", borderRadius: "sm", overflow: "auto" }}>
            <Sheet
                variant="solid"
                invertedColors
                sx={{
                    p: 2,
                    ...(color !== "neutral" && {
                        bgcolor: `${color}.700`,
                    }),
                }}
            >
                <Select
                    variant="soft"
                    defaultValue="1"
                    size="sm"
                    color={color}
                    startDecorator={
                        <Sheet
                            variant="solid"
                            sx={{
                                p: 0.75,
                                borderRadius: "50%",
                                lineHeight: 0,
                                alignSelf: "center",
                            }}
                        >
                            <BubbleChartIcon fontSize="small" sx={{ m: 0 }} />
                        </Sheet>
                    }
                    sx={{
                        py: 1,
                        bgcolor: "transparent",
                        border: "1px solid",
                        borderColor: "divider",
                    }}
                >
                    <Option value="1">General team</Option>
                    <Option value="2">Engineering team</Option>
                </Select>
                <List
                    sx={{
                        "--ListItem-radius": "8px",
                        "--List-gap": "4px",
                        flexGrow: 0,
                        minWidth: 200,
                    }}
                >
                    <ListItemButton href={"/"}>
                        <ListItemDecorator>
                            <PieChart />
                        </ListItemDecorator>
                        <Link to={`dashboard`}>Dashboard</Link>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemDecorator>
                            <PersonIcon />
                        </ListItemDecorator>
                        <Link to={`user`}>User</Link>
                    </ListItemButton>
                </List>
            </Sheet>
        </Box>
    );
}
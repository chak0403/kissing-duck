import './FAQ.css';
import * as React from 'react';
import { Collapse, Grid, List, ListItemButton,
    ListItemIcon,
    ListItemText} from "@mui/material";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
function FAQ() {

    const [open_faq_1, set_open_faq_1] = React.useState(false);
    const [open_faq_2, set_open_faq_2] = React.useState(false);
    const [open_faq_3, set_open_faq_3] = React.useState(false);

    const handle_click_faq = (index: string) => {
        switch (index) {
            case "1":
                close_all_faq();
                set_open_faq_1(!open_faq_1);
                break;
            case "2":
                close_all_faq();
                set_open_faq_2(!open_faq_2);
                break;
            case "3":
                close_all_faq();
                set_open_faq_3(!open_faq_3);
                break;
        }
    };

    const close_all_faq = () => {
        set_open_faq_1(false);
        set_open_faq_2(false);
        set_open_faq_3(false);
    }

    return (
        <Grid container
              direction="column"
              justifyContent="center"
              alignItems="center"
              className="faqContainer">
            <Grid direction="column" className="title">
                Frequently Asked Question
            </Grid>
            <Grid direction="column" className="faqDetail">
                <List
                    sx={{width: '100%', bgcolor: 'background.paper'}}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItemButton onClick={() => handle_click_faq("1")}>
                        <ListItemIcon>
                            <ContactSupportIcon className="button" />
                        </ListItemIcon>
                        <ListItemText>
                            How many Kissing Ducks are available?
                        </ListItemText>
                        {open_faq_1 ? <ExpandLess  className="button" /> : <ExpandMore  className="button" />}
                    </ListItemButton>
                    <Collapse in={open_faq_1} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{pl: 4}}>
                                <ListItemText>
                                    The first chapter regroups 4499 high definition 3D dwarves NFT, stored as ERC-721
                                    Tokens on the Ethereum Blockchain. All hosted in IFPS.
                                </ListItemText>
                            </ListItemButton>
                        </List>
                    </Collapse>

                    <ListItemButton onClick={() => handle_click_faq("2")}>
                        <ListItemIcon>
                            <ContactSupportIcon  className="button" />
                        </ListItemIcon>
                        <ListItemText>
                            What Kissing Ducks Aim For?
                        </ListItemText>
                        {open_faq_2 ? <ExpandLess  className="button" /> : <ExpandMore  className="button" />}
                    </ListItemButton>
                    <Collapse in={open_faq_2} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{pl: 4}}>
                                <ListItemText>
                                    This is a challenge that the whole team has set. Unlike many NFT projects, we wanted
                                    to create an original story that would make the « Rich Dwarves Tribe » collection
                                    meaningful. We envisioned a long-term strategy that will allow the collection to
                                    grow in value in time. As dwarves, let’s win big together
                                </ListItemText>
                            </ListItemButton>
                        </List>
                    </Collapse>

                    <ListItemButton onClick={() => handle_click_faq("3")}>
                        <ListItemIcon>
                            <ContactSupportIcon  className="button" />
                        </ListItemIcon>
                        <ListItemText>
                            How can we own our Kissing Ducks?
                        </ListItemText>
                        {open_faq_3 ? <ExpandLess  className="button" /> : <ExpandMore  className="button" />}
                    </ListItemButton>
                    <Collapse in={open_faq_3} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{pl: 4}}>
                                <ListItemText>
                                    This is a challenge that the whole team has set. Unlike many NFT projects, we wanted
                                    to create an original story that would make the « Rich Dwarves Tribe » collection
                                    meaningful. We envisioned a long-term strategy that will allow the collection to
                                    grow in value in time. As dwarves, let’s win big together
                                </ListItemText>
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            </Grid>
        </Grid>
    );
}

export default FAQ;

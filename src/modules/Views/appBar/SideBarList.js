import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";

const sideBars = [
  [
    { title: "Home", key: "home", path: "home" },
    { title: "Peter Johns", key: "profile", path: "profile" },
  ],
  [
    { title: "Friends", key: "friends", path: "friends" },
    { title: "See all", key: "seeAll", path: "seeAll" },
  ],
  [{ title: "See all groups", key: "seeGroup", path: "seeGroup" }],
  [{ title: "See all shortcuts", key: "seeShortcuts", path: "seeShortcuts" }],
];

export default function SidebarList({ open, onMenuItemClick }) {
  return (
    <>
      {sideBars.map((sideBar, index) => (
        <List key={index}>
          {sideBar.map(({ title, key, path }) => (
            <ListItem
              key={key}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                onMenuItemClick(path);
              }}
            >
              <ListItemButton
                sx={{
                  paddingLeft: 0,
                  paddingRight: 0,
                  justifyContent: "center",
                  textAlign: "start",
                }}
              >
                <ListItemIcon
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          ))}
          <Divider />
        </List>
      ))}
    </>
  );
}

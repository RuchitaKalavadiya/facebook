import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const sideBars = [
  [
    { title: "Home", key: "home" },
    { title: "Peter Johns", key: "user" },
  ],
  [
    { title: "Friends", key: "friends" },
    { title: "See all", key: "seeAll" },
  ],
  [{ title: "See all groups", key: "seeGroup" }],
  [{ title: "See all shortcuts", key: "seeShortcuts" }],
];

export default function SidebarList({ open, onMenuItemClick }) {
  return (
    <>
      {sideBars.map((sideBar, index) => (
        <List key={index}>
          {sideBar.map(({ title, key }) => (
            <ListItem
              key={key}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                onMenuItemClick(key);
              }}
            >
              <ListItemButton
                sx={{
                  justifyContent: "initial",
                }}
              >
                {/* <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      ))}
    </>
  );
}

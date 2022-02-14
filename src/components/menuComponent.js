import { Menu } from "semantic-ui-react";

export default function MenuComponent() {
  return (
    <div className="App">
      <Menu borderless fluid>
        <Menu.Item>Logo</Menu.Item>
        <Menu.Item position="right">Home</Menu.Item>
        <Menu.Item>Dashboard</Menu.Item>
        <Menu.Item>Signout</Menu.Item>
      </Menu>
    </div>
  );
}

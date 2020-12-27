import { Flex, Checkbox } from "@fluentui/react-northstar";
import * as React from "react";
import './NavBar.css';
interface NavProps {
  goDark: (themeInput: boolean) => void;
}
export const Navbar: React.FunctionComponent<NavProps> = (p) => {
  const { goDark } = p;
  const [isDark, setDark] = React.useState(false);
  const handleOnChange = () => {
    setDark(!isDark);
    goDark(!isDark);
  };
  return (
    <Flex key="navbar-flex" padding="padding.medium" className="margin-2b width-100" >
      <Checkbox key="chkbox-flex" toggle className="pos-fixed dark"
        label={isDark ? "Go Normal" :"Go Dark"}
        checked={isDark}
        onChange={handleOnChange}
      />
    </Flex>
  );
};

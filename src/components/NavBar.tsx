import useMediaQuery from "../hooks/UseMediaQuery";
import { Nav } from "./Nav";
import { SideBar } from "./Sidebar";

export default function NavBar() {
  const aboveMedia = useMediaQuery("(min-width: 767px)");


  return aboveMedia ? <SideBar /> : <Nav />;
}

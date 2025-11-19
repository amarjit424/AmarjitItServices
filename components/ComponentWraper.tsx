import { LayoutProps } from "@/types";
import Navbar from "./Navbar";

export default function ComponentWraper({ children }:LayoutProps) {
    return (<>
    <Navbar />
        { children }
    </>);
}

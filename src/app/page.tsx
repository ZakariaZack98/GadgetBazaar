import Menubar from "@/components/home/Menubar";
import { menubarData } from "@/lib/menubarOptions";

export default function Home() {
  const menubarOps = menubarData;
  return (
    <>
      <Menubar menubarData={menubarOps} phone="+88 01782 344161"/>
    </>
  );
}

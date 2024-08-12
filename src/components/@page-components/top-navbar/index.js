import Logo from "@/components/@page-components/top-navbar/logo";
import Menus from "@/components/@page-components/top-navbar/menus";

const TopNavbar = () => {
    return (
        <>
        <div className="top-bar bg-topBar flex justify-between items-center px-12">
            <Logo/>
            <Menus/>
        </div>
        </>
    )
}
export default TopNavbar
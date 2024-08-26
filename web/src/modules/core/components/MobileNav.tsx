import MobileNavTab from "./MobileNavTab";
import { mobileMenuItems } from "../constants/MobileMenuItems";

const MobileNav = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-1px border-gray-100 py-2 px-4 flex items-center justify-between">
            {mobileMenuItems.map((item, idx) => (
                <MobileNavTab
                    name={item.name}
                    Svg={item.svg}
                    path={item.path}
                    isActive={idx === 0}
                />
            ))}
        </div>
    );
}

export default MobileNav

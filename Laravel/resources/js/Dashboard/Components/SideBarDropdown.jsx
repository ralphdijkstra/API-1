import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";

export default function SideBarDropdown({
    href,
    active,
    icon,
    name,
    children,
}) {
    return (
        <>
            <Link
                href={href}
                className={
                    active
                        ? "text-white bg-blue-600 flex w-full py-2 items-center justify-center lg:gap-5 lg:justify-start"
                        : "text-white flex w-full py-2 hover:bg-neutral-800 items-center justify-center lg:gap-5 lg:justify-start"
                }
            >
                <div className="flex items-center w-full">
                    <div className="px-5">{icon}</div>
                    <div className="hidden lg:block">{name}</div>
                    {active ? (
                        <ChevronDownIcon className="w-4 h-4 mx-2" />
                    ) : (
                        <ChevronUpIcon className="w-4 h-4 mx-2" />
                    )}
                </div>
            </Link>
            {children}
        </>
    );
}
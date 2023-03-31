import SideBarLink from "./SideBarLink";
import Logo from "../Assets/Logo";
import {
    HomeIcon,
    FilmIcon,
    BookmarkIcon,
    StarIcon,
    UserCircleIcon,
    UserGroupIcon,
    TvIcon,
} from "@heroicons/react/24/solid";
import SideBarDropdown from "./SideBarDropdown";

export default function SideBar() {
    return (
        <div className="w-full h-screen sticky top-0 bg-neutral-900 flex flex-col justify-start">
            <div className="border-b-2 p-3 xl:p-5 border-neutral-800 flex justify-center">
                <Logo />
            </div>
            <SideBarLink
                href={route("home")}
                active={route().current("home")}
                icon={<HomeIcon className="w-6 h-6" />}
                name="Home"
            />
            <SideBarDropdown
                href={route("movies")}
                active={route().current("movies")}
                icon={<FilmIcon className="w-6 h-6" />}
                name="Movies"
            >
                <div className="text-sm lg:ml-11">
                    <SideBarLink
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                        icon={<BookmarkIcon className="w-4 h-4" />}
                        name="Genres"
                    />
                    <SideBarLink
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                        icon={<StarIcon className="w-4 h-4" />}
                        name="Ratings"
                    />
                </div>
            </SideBarDropdown>
            <SideBarDropdown
                href={route("dashboard")}
                active={route().current("dashboard")}
                icon={<TvIcon className="w-6 h-6" />}
                name="TV"
            >
                <div className="text-sm lg:ml-11">
                    <SideBarLink
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                        icon={<BookmarkIcon className="w-4 h-4" />}
                        name="Genres"
                    />
                    <SideBarLink
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                        icon={<StarIcon className="w-4 h-4" />}
                        name="Ratings"
                    />
                </div>
            </SideBarDropdown>
            <SideBarLink
                href={route("castandcrew")}
                active={route().current("castandcrew")}
                icon={<UserGroupIcon className="w-6 h-6" />}
                name="Cast & Crew"
            />
            <div className="mt-auto">
                <SideBarLink
                    href={route("profile.edit")}
                    active={route().current("profile.edit")}
                    icon={<UserCircleIcon className="w-6 h-6" />}
                    name="Your Account"
                />
            </div>
        </div>
    );
}

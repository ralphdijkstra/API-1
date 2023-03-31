import SideBar from "@/Dashboard/Components/SideBar";

export default function Home({ auth, children }) {
    return (
        <div className="grid grid-cols-[15%_85%] w-full h-full min-h-screen bg-black">
            <SideBar />
            <div>{children}</div>
        </div>
    );
}

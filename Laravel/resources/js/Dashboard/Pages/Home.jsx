import DashboardLayout from "../Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

export default function Home() {
    return (
        <DashboardLayout>
            <Head title="Dashboard"/>
            <div className="p-5">
                <h1 className="text-3xl text-white">Dashboard</h1>
            </div>
        </DashboardLayout>
    );
}

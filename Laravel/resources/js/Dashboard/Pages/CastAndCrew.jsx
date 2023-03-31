import DashboardLayout from "../Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

export default function CastAndCrew() {
    const examplePeople = [
        {
            image: "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_.jpg",
            name: "Brad Pitt",
            role: "Actor",
        },
        {
            image: "https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_FMjpg_UX1000_.jpg",
            name: "Leonardo di Caprio",
            role: "Actor",
        },
        {
            image: "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_.jpg",
            name: "Martin Scorcese",
            role: "Director",
        },
        {
            image: "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_.jpg",
            name: "Margot Robbie",
            role: "Actor",
        },
    ];
    return (
        <DashboardLayout>
            <Head title="Cast & Crew"/>
            <div className="p-5">
                <h1 className="text-3xl text-white">Cast & Crew</h1>
            </div>
        </DashboardLayout>
    );
}

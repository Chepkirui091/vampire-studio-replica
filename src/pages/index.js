import Head from 'next/head';
import TopNavbar from '@/components/@page-components/top-navbar';
import RotatingText from "@/components/@shared-components/text/rotating-text";
import HomePage from "@/components/@page-components/dashboard/home-page";

const Home = () => {
    return (
        <>
            <div className="font-topBar">
                <HomePage />
            </div>
        </>
    );
};

export default Home;

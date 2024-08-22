import Head from 'next/head';
import TopNavbar from '@/components/@page-components/top-navbar';
import RotatingText from "@/components/@shared-components/text/rotating-text";
import HomePage from "@/components/@page-components/dashboard/home-page";
import Section2 from "@/components/@page-components/dashboard/section2/section";
import Section3 from "@/components/@page-components/dashboard/section3";
import Section4 from "@/components/@page-components/dashboard/section4";
import Footer from "@/components/@page-components/dashboard/footer";

const Home = () => {
    return (
        <>
            <div className="font-topBar">
                <HomePage />
                <Section2 />
                <Section3 />
                <Section4 />
                <Footer />
            </div>
        </>
    );
};

export default Home;

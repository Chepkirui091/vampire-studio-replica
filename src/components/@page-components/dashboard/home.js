import Layout from "@/@layouts/modern-layout";

export default function Home() {
    return (
        <Layout>
            <h1 className="text-4xl font-bold">Vampires Animation Studio</h1>
            <p className="text-xl mt-4">We don't suck blood, we suck imagination.</p>
            <section className="mt-8">
                <h2 className="text-3xl font-bold">Our Services</h2>
                <p className="mt-4">...</p>
            </section>
            <section className="mt-8">
                <h2 className="text-3xl font-bold">Contact Us</h2>
                <p className="mt-4">...</p>
            </section>
        </Layout>
    );
}

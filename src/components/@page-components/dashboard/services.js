import Layout from "@/@layouts/modern-layout";

export default function Services() {
    return (
        <Layout>
            <h1 className="text-4xl font-bold">Our Services</h1>
            <p className="mt-4">Our creative process includes 7 steps:</p>
            <ol className="list-decimal list-inside mt-4 space-y-2">
                <li><strong>Briefing:</strong> We will make your requirements outline...</li>
                <li><strong>Script:</strong> Our team will create a script...</li>
                <li><strong>Storyboard:</strong> Our digital artists will prepare...</li>
                <li><strong>Illustrations:</strong> Our graphic designers will develop...</li>
                <li><strong>Voice over:</strong> We collaborate with talented voice artists...</li>
                <li><strong>Animation:</strong> At this phase, we breathe life into static illustrations...</li>
                <li><strong>Sound Design:</strong> According to the pricing package...</li>
            </ol>
        </Layout>
    );
}

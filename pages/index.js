import Layout from '../components/Layout';
const Home = () => {
    return (
        <Layout>
            <div className="container">
                <img src="/logo.png" alt="NSS Logo" className="logo" />
                <h2 className="heading">Welcome To NSS IT WING!</h2>
                <p className="description">
                    Join us in using technology for positive change in our community.
                    Together we will innovate, collaborate, and make a difference.
                    Get involved and be a part of our mission today.
                </p>
            </div>
        </Layout>
    );
};

export default Home;


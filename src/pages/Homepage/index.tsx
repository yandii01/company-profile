import Navbar from '@/components/navbar';
import { FC, useEffect } from 'react';
import Profile from '../Profile';
import Contact from '../Contact';
import TableTes from '../Table';
import ImageHeader from '../ImageHeader';
import { useSearchParams } from 'react-router-dom';
import Footer from '../Footer';
import Review from '../Review';

type Props = {};

const HomePage: FC<Props> = ({ }) => {
    const [searchParams] = useSearchParams()
    const tab = searchParams.get('tab')
    const home = searchParams.get('/')

    useEffect(() => {
        const element = document.getElementById(tab!);
        const element1 = document.getElementById(home!);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        if (element1) {
            window.scrollTo(0, 0)
          }
    }, [tab, home])

    // useEffect(() => {
    //     const handleHashChange = () => {
    //       const hash = window.location.hash.substring(1); // Menghapus '#' dari hash
    //       const element = document.getElementById(hash);
    //       if (element) {
    //         element.scrollIntoView({ behavior: "smooth" });
    //       }
    //     };
    
    //     // Scroll saat halaman pertama kali dimuat jika ada hash
    //     handleHashChange();
    
    //     // Dengarkan perubahan hash
    //     window.addEventListener("hashchange", handleHashChange);
    
    //     return () => {
    //       window.removeEventListener("hashchange", handleHashChange);
    //     };
    //   }, []);

    return (
        <>
            <Navbar />
            <div >
            {/* Halaman utama dengan ID untuk hash routing */}
                <div id="imageheader">
                    <ImageHeader />
                </div>
                <div id="profile">
                    <Profile />
                </div>
                <div id="contact">
                    <Contact />
                </div>
                <div id="table">
                    <TableTes />
                </div>
                <div id="review">
                    <Review />
                </div>
                <div id="footer">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default HomePage;
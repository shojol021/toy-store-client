import logo from '../../assets/logo.png'
import { TiSocialInstagram, TiSocialFacebook, TiSocialTwitter } from 'react-icons/ti';

const Footer = () => {
    return (
        <footer className=' bg-blue-200 py-5'>
            <div className='flex flex-wrap items-center justify-around'>
                <img src={logo} alt="RoboPlay" className='w-24' />
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:mt-6">
                    <h3 className="text-lg font-semibold mb-2">About RoboPlay</h3>
                    <p className="text-sm">
                        RoboPlay is a website dedicated to bringing you the best robot toys
                        and gadgets. Discover and explore a world of robotic wonders!
                    </p>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mt-6 sm:mt-0">
                    <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                    <p className="text-sm">
                        Email: info@roboplay.com
                        <br />
                        Phone: 123-456-7890
                    </p>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mt-6 sm:mt-0">
                    <h3 className="text-lg font-semibold mb-2">Foolow Us</h3>
                    <div className="flex justify-content-center">
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Link to Instagram"
                            >
                                <TiSocialInstagram
                                    className="text-[#a30984] me-3"
                                    size="2em"
                                />
                            </a>
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Link to Facebook"
                            >
                                <TiSocialFacebook
                                    className="text-blue-500 me-3"
                                    size="2em"
                                />
                            </a>
                            <a
                                href="https://www.twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Link to Twitter"
                            >
                                <TiSocialTwitter
                                    className="text-[#00acee] me-3"
                                    size="2em"
                                />
                            </a>
                        </div>
                </div>
            </div>
            <hr className="border-gray-200 my-4" />
            <p className="text-center text-sm text-gray-500 pb-6">
                &copy; {new Date().getFullYear()} RoboPlay. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;

import Lottie from 'react-lottie';
import errorImage from '../assets/error.json'
import { Link, useRouteError } from 'react-router-dom';


const ErrorPage = () => {
    const errorMsg = useRouteError()

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: errorImage,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className='bg-gray-100 h-screen'>
            <div className='text-center py-6'>
                <Link to={'/'}><button className='btn'>Back to Home</button></Link>
            </div>
            <Lottie options={defaultOptions}
                height={400}
                width={400}>
            </Lottie>

            <div className="flex flex-col items-center justify-center mt-5 sss">
                <h1 className="text-5xl font-bold mb-4 text-red-400">{errorMsg.status}: {errorMsg.statusText}</h1>
                <h2 className="text-2xl font-medium mb-4 text-gray-700">{errorMsg?.error?.message}</h2>
                {errorMsg.status === 404 && <p>Check if the URL you entered is correct</p>}
            </div>
        </div>
    );
};

export default ErrorPage;
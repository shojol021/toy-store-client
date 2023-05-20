

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
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
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-2">
              <a href="#" className="text-gray-300 hover:text-gray-400">
                <svg
                  className="h-5 w-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3ZM7 19V7H17L17 19H7ZM11 5C10.4477 5 10 5.44772 10 6C10 6.55228 10.4477 7 11 7C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5ZM9 8C9 8.55228 9.44772 9 10 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H10C9.44772 7 9 7.44772 9 8ZM7 5H7.01H7ZM17 5H16.99H17Z"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-400">
                <svg
                  className="h-5 w-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3ZM9 17H6V8H9V17ZM11 17H8V8H11V17ZM13 17H13.01H13V8H13.01H13V17ZM18 17H15V8H18V17Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-gray-700 my-6" />
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} RoboPlay. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

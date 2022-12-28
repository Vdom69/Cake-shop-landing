import React from 'react';
import { Link,Outlet} from "react-router-dom";
import logo from "../../img/logo.png";
const Header = () => (
  <div className=""> 
  <div className="w-full h-96">
   <img src={logo} alt="Logo" />
  </div>
  <nav class="px-2 sm:px-4 py-2.5 ark:bg-gray-900 -mt-96">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a href="#" class="flex items-center">
          <span class="self-center text-3xl font-semibold whitespace-nowrap text-rose-700 -mt-10">Cake</span>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB3klEQVR4nO2WO0tkQRCFKxCNFDHwGZoubLCJkRoJgqD4I1QQhfWFbGymBoYGZoaKgaE4gYiPQDDS/QdGIj5gxwd+0uwZaOXOBZ0r01f7g2ag6nRPnem6dccsEonkBqAO+AX0AJ2WN4AuYBO45zX7lgeAGmAFeFbhT8CZMwBcAHuWB4B1z8Ai0GKB9/0EcATcAdfAAbAmE/+AXgsZoAM4JZ3fFjL8v4mSiXNgEKjXGgL+KncC1FqoAJOeicaEfKNnZtxCBThWkYMpmmFpDi1UgFsVWZ+iaZDmxkIFuFGRbSmadmmuP7OQAWBXI9OtHfcGTtH3AgVpL4FHFTkK/AC2vLO2FBuT5lF77nRGT1YmFsqMSvcGHknQ/0kZr1dAMSFeVK4c81ncROmLZlxraM0q9gD89PR93l+MJaAZaAKmpUWf04q/zd17uRZg2fvR+isx4q7WMZOQm1Nu1YttK7aRoHcFOqYSclMpuU3lCllMm9aEXCtVxt5hxD1wZadNnowUtGfWAoIPGOnWnqKeiXbLoxGHG33eJAoKey9u9Hltll8jJSo+ICOIRkS8kYwhtpYgMOyj8NWMWJUhGvmqNxIKFo2IDLukos6wqh2QEUQjIt5IqK0VCvbtjUQikYiFxAsNL2FNUgwaYAAAAABJRU5ErkJggg=="class="-mt-5 w-10 h-10"/>
      </a>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
              <Link to="/" class="block py-2 pl-3 pr-4 text-white -mt-10 text-2xl bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
          </li>
          <li>
              <Link to="/menu" class="block py-2 pl-3 pr-4 text-white -mt-10 text-2xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Menu</Link>
          </li>
          <li>
              <Link to="/contactUs" class="block py-2 pl-3 pr-4 text-white -mt-10 text-2xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> Contact Us</Link>
          </li>
          </ul>
      </div>
      </div>
  </nav>
  <Outlet/>
</div>
);
export default Header;

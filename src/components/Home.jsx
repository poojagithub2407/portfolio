import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter, FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { ReactTyped } from "react-typed";
import profile from '../../public/image/PoojaDayal.jpg';
import { FaInstagramSquare } from "react-icons/fa";

const Home = () => {

     return (
          <div
          name='Home'
           className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28" >
               <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                         <span className="text-xl">Welcome In my Feed</span>
                         <div className="flex space-x-1 text-2xl md:text-4xl">
                              <h1>Hello, I'm a</h1>
                              {/* <span className="text-red-700 font-bold">Developer</span> */}
                              <ReactTyped
                                   className="text-red-700 font-bold"
                                   strings={["Developer", "Programmer", "Coder"]}
                                   typeSpeed={40}
                                   backSpeed={50}
                                   loop={true}
                              />
                         </div>
                         <br />
                         <p className="text-sm md:text-md text-justify">
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                              Quisquam, recusandae consequatur. Accusamus sint libero eligendi
                              laborum fuga repudiandae? Asperiores tempore eos animi dolores
                              corrupti! Sint quos, mollitia architecto aliquam nesciunt, optio
                              cum delectus sit voluptatum aut ratione quaerat veniam aperiam!
                         </p>
                         <br />
                         <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-x-0 ">
                              <div className="space-y-2">
                                   <h1 className="font-bold">Available on</h1>
                                   <ul className="flex space-x-5 ">
                                        <li className="text-2xl cursor-pointer">
                                             <a href="https://www.facebook.com/poojadayal.2000"
                                                  target="_blank"
                                             >
                                                  <CiFacebook />
                                             </a>
                                        </li>
                                        <li className="text-2xl cursor-pointer">
                                             <a href="https://www.linkedin.com/in/pooja-dayal-4a7044227/"
                                                  target="_blank"
                                             >
                                                  <FaLinkedin />
                                             </a>
                                        </li>
                                        <li className="text-2xl cursor-pointer"> <FaTwitter /></li>
                                        <li className="text-2xl cursor-pointer">
                                             <a href="https://www.instagram.com/pooja_dayal24/"
                                                  target="_blank">
                                                  <FaInstagramSquare />
                                             </a>
                                        </li>
                                   </ul>
                              </div>
                              <div className="space-y-2">
                                   <h1 className="font-bold">Currently working on</h1>
                                   <ul className="flex space-x-5">
                                        <li className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer"><SiMongodb /></li>
                                        <li className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer"><SiExpress /></li>
                                        <li className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer"> <FaReact /></li>
                                        <li className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer"><IoLogoJavascript /></li>
                                   </ul>
                              </div>
                         </div>

                    </div>
                    <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 ">
                         <img src={profile}
                              className="rounded-full  md:w-[300px] md:h-[300px]"
                         />
                    </div>
               </div>
               <br />
               <hr />
          </div>
     )
}

export default Home
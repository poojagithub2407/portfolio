import { FaLinkedin,FaSquareGithub,FaNodeJs } from "react-icons/fa6";
import { FaTwitter, FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";
import profile from '../../public/image/PoojaDayal.jpg';

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
                                   className="text-violet-700 font-bold"
                                   strings={["Developer", "Programmer", "Coder"]}
                                   typeSpeed={40}
                                   backSpeed={50}
                                   loop={true}
                              />
                         </div>
                         <br />
                         <p className="text-sm md:text-md text-justify">
                              Hello, I'm a Web application Developer with a passion for crafting innovative and efficient web applications. I specialize in leveraging the MERN stack to build scalable and interactive user interfaces that deliver exceptional user experiences.
                         </p>
                         <br />
                         <div className="flex flex-col md:flex-row justify-between items-center  md:space-x-0 ">
                              <div className="space-y-2">
                                   <h1 className="font-bold">Available on</h1>
                                   <ul className="flex space-x-4 md:space-x-8">
                                <li className="text-2xl cursor-pointer text-violet-700 bg-white p-2 md:p-4 rounded-xl shadow hover:shadow-lg transition-shadow ">
                                    <a href="https://www.linkedin.com/in/pooja-dayal-4a7044227/"
                                        target="_blank"
                                    >
                                        <FaLinkedin />
                                    </a>
                                </li>
                                <li className="text-2xl cursor-pointer text-violet-700 bg-white p-2 md:p-4 rounded-xl shadow hover:shadow-lg transition-shadow ">
                                    <a href="https://github.com/poojagithub2407"
                                        target="_blank"
                                    >
                                        <FaSquareGithub />
                                    </a>
                                </li>
                                <li className="text-2xl cursor-pointer text-violet-700 bg-white p-2 md:p-4 rounded-xl shadow hover:shadow-lg transition-shadow ">
                                    <FaTwitter />
                                </li>
                            </ul>
                              </div>
                              <div className="space-y-2">
                                   <h1 className="font-bold">Currently working on</h1>
                                   <ul className="flex space-x-4">
                                        <li className=" text-2xl cursor-pointer text-violet-700 bg-white p-2 md:p-4 rounded-xl shadow hover:shadow-lg transition-shadow "><SiMongodb /></li>
                                        <li className="text-2xl cursor-pointer text-violet-700 bg-white p-2 md:p-4 rounded-xl shadow hover:shadow-lg transition-shadow "><SiExpress /></li>
                                        <li className="text-2xl cursor-pointer text-violet-700 bg-white p-2 md:p-4 rounded-xl shadow hover:shadow-lg transition-shadow "> <FaReact /></li>
                                        <li className="text-2xl cursor-pointer text-violet-700 bg-white p-2 md:p-4 rounded-xl shadow hover:shadow-lg transition-shadow "><FaNodeJs /></li>
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
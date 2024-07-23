import css from '../../public/image/css.png';
import react from '../../public/image/reactjs.png';
import html from '../../public/image/html.png';
import node from '../../public/image/node.png';
import javascript from '../../public/image/javascript.png';
import express from '../../public/image/express.png';
import mongodb from '../../public/image/mongodb.png';
const Experiance = () => {
     const cartitem = [
          {
               id: 1,
               logo: html,
               name: 'html'
          },
          {
               id: 2,
               logo: css,
               name: 'css'
          },
          {
               id: 3,
               logo: javascript,
               name: 'javascript'
          },
          {
               id: 4,
               logo: react,
               name: 'react'
          },
          {
               id: 5,
               logo: express,
               name: 'express'
          }, {
               id: 6,
               logo: mongodb,
               name: 'mongodb'
          },
          {
               id: 7,
               logo: node,
               name: 'node'
          }
     ]
     return (
          <div 
          name='Experience'
          className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
               <div>
                    <h1 className='text-3xl font-bold mb-5'>Experiance</h1>
                    <p>
                         I've more than 2 years of experiance in below technologies.
                    </p>
                    <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
                         {
                              cartitem.map(({ id, name, logo }) => (
                                   <div className='flex flex-col items-center justify-center border-[2px] rounded-full  md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300'
                                        key={id}
                                   >
                                        <img
                                             src={logo}
                                             className='w-[150px] rounded-full'
                                             alt=''
                                        />
                                        <div>
                                             <div>{name}</div>
                                        </div>
                                   </div>
                              ))
                         }

                    </div>
               </div>
          </div>
     )
}

export default Experiance
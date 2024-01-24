import React, { useState } from 'react'
import { LiaTelegramPlane } from "react-icons/lia";
import { FaXTwitter } from 'react-icons/fa6'
import { LiaInstagram } from "react-icons/lia";
import { Link } from 'react-router-dom';
import Rubika from '../assets/images/rubika.png'
import bale from '../assets/images/bale.png'
import eitaa from '../assets/images/eitaa.png'
import Soroush from '../assets/images/Soroush.png'
import rubika_blue from '../assets/images/rubika_blue.png'
import bale_blue from '../assets/images/bale_blue.png'
import sorosh_blue from '../assets/images/sorosh_blue.png'
import eitta_blue from '../assets/images/eitta_blue.png'
function  ListIconTable() {

    const [state , setState] = useState('');
  return (
    <ul className='flex flex-row gap-20 mx-auto  '>
        <li>
            <Link to={'telegram'} onClick={()=> setState('telegram')} className={`flex flex-col  gap-y-2 justify-center text-center place-items-center  align-middle  p-1 m-1  ${state === 'telegram' ? 'border-b-4 border-collapse border-blue-600 transition duration-200' : ''}`}>
                <span>
                    <LiaTelegramPlane fontSize={40} style={{color : `${state === 'telegram' ? 'blue' : 'gray'}`}} className={`${state === 'telegram' ? 'text-blue-500' : ''}`}/>
                    </span>
                <span  className={`mr-1 mb-1 `}style={{color : `${state === 'telegram' ? 'blue' : 'gray'}`} }
                >
                    تلگرام
                </span>
            </Link>
        </li>
        <li>
            <Link to={'twitter'} onClick={()=> setState('twitter')} className={`flex flex-col    gap-y-2 justify-center text-center place-items-center  align-middle  p-1 m-1  ${state === 'twitter' ? 'border-b-4 border-blue-600 transition duration-200 ' : ''}`}>
                <span>
                    <FaXTwitter fontSize={40} style={{color : `${state === 'twitter' ? 'blue' : 'gray'}` , marginRight : 1}}/>
                    </span>
                <span  className=' '  style={{color : `${state === 'twitter' ? 'blue' : 'gray'}`}}
                >
                    توییتر
                </span>
            </Link>
        </li>
        <li>
            <Link to={'instagram'} onClick={()=> setState('instagram')} className={`flex flex-col gap-y-2 text-center place-items-center justify-center align-middle  p-1 m-1  ${state === 'instagram' ? 'border-b-4 border-blue-600 transition duration-200 ' : ''}`}>
                <span>
                    <LiaInstagram fontSize={40} style={{color : `${state === 'instagram' ? 'blue' : 'gray'}`}} />
                    </span>
                <span  className='mr-1' style={{color : `${state === 'instagram' ? 'blue' : 'gray'}`}}
                >
                    اینستاگرام
                </span>
            </Link>
        </li>
        <li>
            <Link to={'rubika'} onClick={()=> setState('rubika')} className={`flex flex-col gap-y-2 text-center place-items-center justify-center align-middle  p-1 m-1  ${state === 'rubika' ? 'border-b-4 border-blue-600 transition duration-200 ' : ''}`}>
                <span className='w-[40px]'>
                    <img src={state==='rubika' ? rubika_blue :  Rubika}  alt="" />
                    </span>
                <span    style={{color : `${state === 'rubika' ? 'blue' : 'gray'}`}}
                >
                    روبیکا
                </span>
            </Link>
        </li>
        <li>
            <Link to={'bale'} onClick={()=> setState('bale')} className={`flex flex-col gap-y-2 text-center place-items-center justify-center align-middle  p-1 m-1  ${state === 'bale' ? 'border-b-4 border-blue-600 transition duration-200 ' : ''}`}>
                <span className='w-[40px] '>
                    
                    <img src={state === 'bale' ? bale_blue : bale }  alt="" />
                    
                    </span>
                <span    style={{color : `${state === 'bale' ? 'blue' : 'gray'}`}}
                >
                    بله
                </span>
            </Link>
        </li>
        <li>
            <Link to={'eitaa'} onClick={()=> setState('eitaa')} className={`flex flex-col gap-y-2 text-center place-items-center justify-center align-middle  p-1 m-1  ${state === 'eitaa' ? 'border-b-4 border-blue-600 transition duration-200 ' : ''}`}>
                <span className='w-[40px]'>
                    <img src={state === 'eitaa' ? eitta_blue : eitaa }  alt="" />
                    </span>
                <span   style={{color : `${state === 'eitaa' ? 'blue' : 'gray'}`}}
                >
                    ایتا
                </span>
            </Link>
        </li>
        <li>
            <Link to={'soroush'} onClick={()=> setState('soroush')} className={`flex flex-col gap-y-2 text-center place-items-center justify-center align-middle  p-1 m-1  ${state === 'soroush' ? 'border-b-4 border-blue-600 transition duration-200 ' : ''}`}>
                <span className='w-[40px]'>
                    <img src={state === 'soroush' ? sorosh_blue  : Soroush  }  alt="" />
                    </span>
                <span   style={{color : `${state === 'soroush' ? 'blue' : 'gray'}`}}
                >
                    سروش
                </span>
            </Link>
        </li>
    </ul>
  )
}

export default ListIconTable
import React from 'react'
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";

function Footer() {
  return <div className='bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20'>
        <div className='p-5'>
            <ul>
                <p className='text-gray-800 font-bold text-5xl pb-6'>
                    Ada<span className='text-blue-600'>Apa</span>
                </p>
                <p className='md:text-1xl text-center pb-4 '>Kumpulan berita terkini yang lengkap</p>
                <div className='flex gap-6 pb-5'>
                    <FaInstagram className='text-2xl cursor-pointer hover:text-yellow-600'/>
                    <FaTwitter className='text-2xl cursor-pointer hover:text-blue-600'/>
                    <FaLinkedin className='text-2xl cursor-pointer hover:text-blue-600'/>
                    <FaYoutube className='text-2xl cursor-pointer hover:text-red-600'/>
                </div>
            </ul>
        </div>
        <div className='p-5'>
            <ul>
                <p className='text-gray-800 font-bold text-2xl pb-4'>Kategori</p>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>News</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Edukasi</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Teknologi</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Sport</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Travel</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Food</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Finance</li>
            </ul>
        </div>
        <div className='p-5'>
            <ul>
                <p className='text-gray-800 font-bold text-2xl pb-4'>Layanan</p>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>berbuatbaik.id</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Forum</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>adaapaEvent</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Pasang Mata</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Trans Studio</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Trans Snow World</li>
            </ul>
        </div>
        <div className='p-5'>
            <ul>
                <p className='text-gray-800 font-bold text-2xl pb-4'>Informasi</p>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Redaksi</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Kotak Pos</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Info Iklan</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Privacy Policy</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Pedoman Media Siber</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Disclaimer</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Media Partner</li>
            </ul>
        </div>
        <div className='p-5'>
            <ul>
                <p className='text-gray-800 font-bold text-2xl pb-4'>Jaringan Media</p>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>CNN Indonesia</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>CNBC Indonesia</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Beautynesia</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Insertive</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>CXO Media</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Haibunda</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Female Daily</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>SindoNews</li>
            </ul>
        </div>
    </div>
  
}

export default Footer
import React from 'react';
import {useState} from 'react';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import DraftsIcon from '@material-ui/icons/Drafts';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ArchiveIcon from '@material-ui/icons/Archive';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
// import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
// import ReceiptRoundedIcon from '@material-ui/icons/ReceiptRounded';

const Sidebar = () => {
    const [open, setOpen] = useState(true);

    return (
        <div className={` h-auto bg-gray-900 shadow-2xl ${open ? " w-6/12 md:w-3/12 ":" w-1/11 md:w-1/13 "} duration-300 relative`}>
            <div className=" border-b py-3 mt-1 flex justify-center ">
                <div className='inline-flex gap-1 md:gap-2'>
                    <FingerprintIcon  className={`absolute text-rose-500 float-left ${!open && "justify-center" } relative`} />
                    <h1 className={ ` text-base md:text-xl text-rose-500 font-bold duration-300 origin-left ${!open && " hidden scale-0 " } `}>Dashboard</h1>
                </div>
                <KeyboardArrowLeftIcon className={`bg-gray-700/75 text-white rounded-full absolute -right-3 top-3 border duration-300 cursor-pointer ${ !open && "rotate-180" }`} onClick={() => setOpen(!open)} />
                {/* <KeyboardArrowRightIcon className={`bg-gray-700 text-white rounded-full absolute -right-3 top-3 border cursor-pointer ${open ? "invisible":"visible"}`} onClick={() => setOpen(!open)} /> */}
                {/* <p>|</p>
                <p className="text-red-500 font-semibold text-xl">My Forms</p> */}

            </div>
            <div className="p-1 md:p-3 space-y-14">
                <div className="space-y-4" >
                <div className="space-y-3 border-b shadow-sm  border-solid pt-3 pb-5 md:pt-4 md:pb-6 " >
                    {/* <h1 className={`flex text-yellow-400 text-base md:text-lg justify-center font-semibold ${!open && "hidden"} `}>MY FORMS</h1> */}
                    <button className=" font-medium text-blue-400 border-2 border-blue-400 w-full  rounded-full hover:text-white group relative flex justify-center items-center overflow-hidden">
                        <span className="absolute left-0 w-full h-0 transition-all bg-blue-400 opacity-100 group-hover:h-full group-hover:top-0 duration-400 ease"></span>
                        <span className="absolute right-0 flex items-center w-40 md:w-20 h-10 duration-300 transform translate-x-full group-hover:translate-x-0"><ArrowForwardIcon /></span>
                        <span className={`relative py-1 text-xs md:text-lg font-monospace ${!open && "hidden"}`}>CREATE</span>
                        <span className={` relative pb-0.5 rounded-full text-xs md:text-lg ${open && "hidden"}`}><CreateNewFolderIcon /></span>
                    </button>
                    <div className="">
                        <div className={`flex p-1 md:p-3 text-gray-300  space-x-2 md:space-x-4 hover:bg-blue-900 hover:text-white  cursor-pointer rounded-xl ${open ? "justify-start":"justify-center"} `}>
                            <AllInclusiveIcon className=" text-gray-300 " />
                            <p className={` font-semibold text-sm md:text-base hover:text-white ${!open && "hidden"} `} >All Forms</p>
                        </div>
                    </div>
                    {/* <div className="">
                        <div className={`flex p-1 md:p-3 text-gray-300  space-x-2 md:space-x-4 hover:bg-blue-900 hover:text-white  cursor-pointer rounded-xl ${open ? "justify-start":"justify-center"} `}>
                            <CreateNewFolderIcon className="text-gray-300" />
                            <p className={` font-semibold text-sm md:text-base hover:text-white ${!open && "hidden"} `} >Create a new folder</p>
                        </div>
                    </div> */}

                </div>
                    
                    <div className="">
                        <div className={`flex p-1 md:p-3 text-gray-400  space-x-2 md:space-x-4 hover:bg-blue-900 hover:text-white  cursor-pointer ${open ? "justify-start":"justify-center"} `}>
                            <FolderSharedIcon className=" text-gray-300" />
                            <p className={` text-sm md:text-base hover:text-white ${!open && "hidden"} `}  >SHARED WITH ME</p>
                        </div>
                    </div>
                    <div className="">
                        <div className={`flex p-1 md:p-3 text-gray-400  space-x-2 md:space-x-4 hover:bg-blue-900 hover:text-white  cursor-pointer ${open ? "justify-start":"justify-center"} `}>
                            <AssignmentLateIcon className="text-gray-300" />
                            <p className={` text-sm md:text-base hover:text-white ${!open && "hidden"} `} >ASSIGNED FORMS</p>
                        </div>
                    </div>
                    <div className="">
                        <div className={`flex p-1 md:p-3 text-gray-400  space-x-2 md:space-x-4 hover:bg-blue-900 hover:text-white  cursor-pointer ${open ? "justify-start":"justify-center"} `}>
                            <DraftsIcon className="text-gray-300" />
                            <p className={` text-sm md:text-base hover:text-white ${!open && "hidden"} `} >MY DRAFTS</p>
                        </div>
                    </div>
                    <div className="">
                        <div className={`flex p-1 md:p-3 text-gray-400  space-x-2 md:space-x-4 hover:bg-blue-900 hover:text-white  cursor-pointer ${open ? "justify-start":"justify-center"} `}>
                            <FavoriteIcon color="secondary" className="text-gray-300" />
                            <p className={` text-sm md:text-base hover:text-white ${!open && "hidden"} `} >Favourites</p>
                        </div>
                    </div>
                    <div className="">
                        <div className={`flex p-1 md:p-3 text-gray-400  space-x-2 md:space-x-4 hover:bg-blue-900 hover:text-white  cursor-pointer ${open ? "justify-start":"justify-center"} `}>
                            <ArchiveIcon className="text-gray-300" />
                            <p className={` text-sm md:text-base hover:text-white ${!open && "hidden"} `} >Archives</p>
                        </div>
                    </div>

                </div>
                
                {/* <div className="space-y-6" >
                    <h1 className="text-gray-400">taking    </h1>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <LayersIcon className="text-gray-300" />
                            <p className="text-gray-600  " >Validate</p>
                        </div>
                    </div>


                </div> */}
            </div>

        </div>
    )
}

export default Sidebar

import React from 'react'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import FeedbackIcon from '@material-ui/icons/Feedback';
import GroupAddIcon from '@material-ui/icons/GroupAdd';


const Style = "text-white text-xs"

const arrayIcon = [<QuestionAnswerIcon fontSize="small" key={Style} />, <PeopleAltIcon fontSize="small" key={Style} />, <FeedbackIcon fontSize="small" key={Style} />, <GroupAddIcon fontSize="small" key={Style} />]
const Color = ["from-indigo-500 to-blue-400", "from-yellow-400 to-yellow-300", "from-green-500 to-green-400", "from-pink-500 to-pink-400"]


const Card = (props) => {
    var balance = props.balance

    return (
        <div className={`transform hover:scale-105 cursor-pointer transition delay-100 w-full cursor-pointer p-1 md:p-2 md:py-4 shadow-xl  border font-spacemono rounded-xl bg-gradient-to-r ${Color[props.icon]}`} >
            <div className="flex justify-between">
                <div></div>
                <div className=" w-auto h-auto md:w-10  md:h-10 flex items-center justify-center text-slate-800 bg-gray-300 rounded-full p-0.5 m-1  bg-opacity-60">
                    {arrayIcon[props.icon]}
                </div>
            </div>
            <p className="text-white text-xs  ">
                {props.title}
            </p>
            <p className="text-white text-sm md:text-lg  font-semibold  ">
                {props.balance} 
            </p>
            <p className="text-white  text-sm ">
                {"build now"}
            </p>
        </div>
    )
}

export default Card

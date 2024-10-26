import { motion } from "framer-motion";
import { AiFillHtml5 } from "react-icons/ai"
import { DiCss3, DiJavascript1, DiPhp, DiRedis } from "react-icons/di"
import { RiReactjsLine } from "react-icons/ri"
import { SiLaravel, SiMysql, SiTailwindcss } from "react-icons/si"

export const Technologies = () => {
  return (
    <div className='pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div>
                <AiFillHtml5 className="text-7xl text-orange-500"/>
            </div>
            <div>
                <DiCss3 className="text-7xl text-blue-500"/>
            </div>
            <div>
                <DiJavascript1 className="text-7xl text-yellow-500"/>
            </div>
            <div>
                <DiPhp className="text-7xl text-indigo-500"/>
            </div>
            <div>
                <SiTailwindcss className="text-7xl text-cyan-500"/>
            </div>
            <div>
                <SiMysql className="text-7xl text-orange-500"/>
            </div>
            <div>
                <SiLaravel className="text-7xl text-red-600"/>
            </div>
            <div>
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const Question = ({ Ques, Ans }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Question Section */}
            <div className=' bg-white '>

                <div className='flex-col   m-auto raleway w-[70%] border-b-2 border-[#FDAF1B]  py-8' >
                    <div
                        className="flex justify-between   raleway font-bold cursor-pointer"
                        onClick={() => setOpen(!open)}
                    >
                        <h1>{Ques}</h1>
                        <div className='text-[#FDAF1B]'>
                            {open ? <ChevronUp /> : <ChevronDown />}
                        </div>
                    </div>

                    {/* Answer Section */}
                    {open && (
                        <div className=" py-2">
                            <h1>{Ans}</h1>
                        </div>
                    )}
                </div>

            </div>
        </>
    );
};

export default Question;

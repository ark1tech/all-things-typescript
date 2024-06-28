// import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import { PiBowlFoodDuotone } from 'react-icons/pi';

export default function NavBar() {
    return (
        <nav className="mt-[1rem] sticky top-[1rem] px-[1rem]">
            <div className="border-style rounded-lg py-[0.7rem] px-[1.7rem] bg-white flex flex-row items-center justify-start gap-[1.7rem]">
                <h4 className="md:flex-grow flex-grow-0 flex flex-row items-center gap-1">
                    <PiBowlFoodDuotone />{' '}
                    <span className="md:flex hidden">appetittö</span>
                </h4>
                <p className="md:w-[60dvw] lg:w-[40dvw] w-full border-style rounded-md py-[0.5rem] px-[1rem] bg-[#ebebeb4e] graytext flex flex-row gap-2 items-center">
                    <FiSearch className="width" /> What do you want to cook?
                </p>
            </div>
        </nav>
    );
}

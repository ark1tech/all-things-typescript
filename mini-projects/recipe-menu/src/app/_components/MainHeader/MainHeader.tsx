import { IoDice } from 'react-icons/io5';

export default function MainHeader() {
    return (
        <section className="flex flex-col items-center gap-3 lg:flex-row">
            <h1 className="flex flex-grow flex-col gap-0 text-center text-[#ff6600] md:flex-row md:gap-2 lg:text-left">
                Hello, John.
                <span className="font-[600]">Let's get cooking.</span>
            </h1>
            <div className="flex flex-row items-center gap-2">
                <p className="graytext text-sm">Not sure?</p>
                {/* TODO: Button component */}
                <div className="w-fit cursor-pointer overflow-clip rounded-lg border border-[#ff5e01]">
                    <a
                        className="flex flex-row items-center gap-[0.3rem] px-[0.75rem] py-[0.15rem] text-sm text-[#ff5e01] transition-all duration-300 ease-in-out hover:bg-[#ff5e01] hover:text-white hover:shadow-[inset_0_-5px_10px_#ffab81]"
                        target="_blank"
                    >
                        <IoDice />
                        Random recipe
                    </a>
                </div>
            </div>
        </section>
    );
}

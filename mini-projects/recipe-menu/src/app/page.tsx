import Image from 'next/image';
import Food from '@/public/1.webp';

export default function Home() {
    return (
        <div className="flex flex-col gap-3">
            <section className="flex lg:flex-row flex-col items-center gap-3">
                <h1 className="text-[#ff6600] lg:text-left text-center flex-grow">
                    Hello, John.{' '}
                    <span className="font-[600]">Let's get cooking.</span>
                </h1>
                <div className="flex sm:flex-row flex-col items-center gap-2">
                    <p className="graytext text-sm">Don't know what to cook?</p>
                    {/* TODO: Button component */}
                    <div className="w-fit border border-[#ff5e01] hover:shadow-[0_0_5px_0_#ffab81] rounded-lg overflow-clip cursor-pointer">
                        <a
                            className=" text-[#ff5e01] hover:text-white hover:bg-[#ff5e01] hover:shadow-[inset_0_-5px_10px_#ffab81] transition-all ease-in-out duration-300  flex flex-row items-center py-[0.15rem] px-[0.75rem] gap-[0.6rem] text-sm"
                            target="_blank"
                        >
                            Randomize a recipe
                        </a>
                    </div>
                </div>
            </section>
            <section className="flex md:flex-row flex-col w-full bg-[#ffffff66] border-style rounded-lg overflow-clip md:h-[60dvh]  h-fit relative">
                <div className="flex flex-col flex-grow p-[1.7rem]">
                    <h5 className="graytext">MEAL OF THE DAY</h5>
                    <div className="flex flex-col">
                        <h3>Classic Margherita Pizza</h3>
                    </div>
                    <div className="flex flex-row items-center gap-[1rem] mt-[0.5rem]">
                        <div className="flex flex-row items-center gap-[1rem]">
                            <p>•</p>
                            <p>•</p>
                            <p>•</p>
                            <p>•</p>
                            <p>•</p>
                        </div>
                        <p className="graytext">82 reviews</p>
                    </div>
                    <div className="flex md:flex-row flex-col justify-evenly gap-2 border-style rounded-md shadow-sm py-[0.5rem] px-[0.4rem] mt-[1rem]">
                        <p className="bg-[#d7fbff] rounded-md py-[0.1rem] px-[0.4rem]">
                            25 Mins
                        </p>
                        <p className="bg-[#f0ffd7] rounded-md py-[0.1rem] px-[0.4rem]">
                            4 Servings
                        </p>
                        <p className="bg-[#ecd7ff] rounded-md py-[0.1rem] px-[0.4rem]">
                            500 Calories
                        </p>
                    </div>
                    <div className="mt-[1.5rem] flex flex-col gap-[0.5rem]">
                        <p className="graytext font-[500]">Ingredients</p>
                        <div className="w-full flex flex-row flex-wrap justify-between gap-[0.5rem]">
                            <p className="py-1 px-4 border-style border-[1.5px] bg-transparent hover:bg-[#ffddc5af] transition-all w-fit rounded-full code">
                                Pizza dough
                            </p>
                            <p className="py-1 px-4 border-style border-[1.5px] bg-transparent hover:bg-[#ffddc5af] transition-all w-fit rounded-full code">
                                Tomato sauce
                            </p>
                            <p className="py-1 px-4 border-style border-[1.5px] bg-transparent hover:bg-[#ffddc5af] transition-all w-fit rounded-full code">
                                Fresh mozzarella cheese
                            </p>
                            <p className="py-1 px-4 border-style border-[1.5px] bg-transparent hover:bg-[#ffddc5af] transition-all w-fit rounded-full code">
                                Fresh basil leaves
                            </p>
                            <p className="py-1 px-4 border-style border-[1.5px] bg-transparent hover:bg-[#ffddc5af] transition-all w-fit rounded-full code">
                                Olive oil
                            </p>
                            <p className="py-1 px-4 border-style border-[1.5px] bg-transparent hover:bg-[#ffddc5af] transition-all w-fit rounded-full code">
                                Salt and pepper to taste
                            </p>
                        </div>
                    </div>
                    {/* TODO: Button component */}
                    <div className="mt-[2rem] w-fit border border-[#ff5e01] hover:shadow-[0_0_5px_0_#ffab81] rounded-lg overflow-clip cursor-pointer">
                        <a
                            className="text-white font-[500] bg-[#ff5e01] hover:shadow-[inset_0_-5px_10px_#ffab81] transition-all ease-in-out duration-300  flex flex-row items-center py-[0.15rem] px-[0.75rem] gap-[0.6rem]"
                            target="_blank"
                        >
                            Get recipe
                        </a>
                    </div>
                </div>
                <Image
                    src={Food}
                    alt=""
                    className="md:h-full h-auto md:w-auto w-full"
                />
            </section>
        </div>
    );
}

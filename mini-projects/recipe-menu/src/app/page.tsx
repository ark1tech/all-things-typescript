import Image from 'next/image';
import Food from '@/public/1.webp';

export default function Home() {
    return (
        <div className="flex flex-col gap-3">
            <section className="flex flex-col items-center gap-3 lg:flex-row">
                <h1 className="flex-grow text-center text-[#ff6600] lg:text-left">
                    Hello, John.{' '}
                    <span className="font-[600]">Let's get cooking.</span>
                </h1>
                <div className="flex flex-col items-center gap-2 sm:flex-row">
                    <p className="graytext text-sm">Don't know what to cook?</p>
                    {/* TODO: Button component */}
                    <div className="w-fit cursor-pointer overflow-clip rounded-lg border border-[#ff5e01] hover:shadow-[0_0_5px_0_#ffab81]">
                        <a
                            className="flex flex-row items-center gap-[0.6rem] px-[0.75rem] py-[0.15rem] text-sm text-[#ff5e01] transition-all duration-300 ease-in-out hover:bg-[#ff5e01] hover:text-white hover:shadow-[inset_0_-5px_10px_#ffab81]"
                            target="_blank"
                        >
                            Randomize a recipe
                        </a>
                    </div>
                </div>
            </section>
            <section className="border-style flex h-fit w-full flex-col overflow-clip rounded-lg bg-[#ffffff66] md:min-h-[60dvh] md:flex-row">
                <div className="flex flex-grow flex-col p-[1.7rem]">
                    <h5 className="graytext">MEAL OF THE DAY</h5>
                    <div className="flex flex-col">
                        <h3>Classic Margherita Pizza</h3>
                    </div>
                    <div className="mt-[0.5rem] flex flex-row items-center gap-[1rem]">
                        <div className="flex flex-row items-center gap-[1rem]">
                            <p>•</p>
                            <p>•</p>
                            <p>•</p>
                            <p>•</p>
                            <p>•</p>
                        </div>
                        <p className="graytext">82 reviews</p>
                    </div>
                    <div className="border-style mt-[1rem] flex flex-col justify-evenly gap-2 rounded-md px-[0.4rem] py-[0.5rem] shadow-sm md:flex-row">
                        <p className="rounded-md bg-[#d7fbff] px-[0.4rem] py-[0.1rem]">
                            25 Mins
                        </p>
                        <p className="rounded-md bg-[#f0ffd7] px-[0.4rem] py-[0.1rem]">
                            4 Servings
                        </p>
                        <p className="rounded-md bg-[#ecd7ff] px-[0.4rem] py-[0.1rem]">
                            500 Calories
                        </p>
                    </div>
                    <div className="mt-[1.5rem] flex flex-col gap-[0.5rem]">
                        <p className="graytext font-[500]">Ingredients</p>
                        <div className="flex w-full flex-row flex-wrap justify-between gap-[0.5rem]">
                            <p className="border-style code w-fit rounded-full border-[1.5px] bg-transparent px-4 py-1 transition-all hover:bg-[#ffddc5af]">
                                Pizza dough
                            </p>
                            <p className="border-style code w-fit rounded-full border-[1.5px] bg-transparent px-4 py-1 transition-all hover:bg-[#ffddc5af]">
                                Tomato sauce
                            </p>
                            <p className="border-style code w-fit rounded-full border-[1.5px] bg-transparent px-4 py-1 transition-all hover:bg-[#ffddc5af]">
                                Fresh mozzarella cheese
                            </p>
                            <p className="border-style code w-fit rounded-full border-[1.5px] bg-transparent px-4 py-1 transition-all hover:bg-[#ffddc5af]">
                                Fresh basil leaves
                            </p>
                            <p className="border-style code w-fit rounded-full border-[1.5px] bg-transparent px-4 py-1 transition-all hover:bg-[#ffddc5af]">
                                Olive oil
                            </p>
                            <p className="border-style code w-fit rounded-full border-[1.5px] bg-transparent px-4 py-1 transition-all hover:bg-[#ffddc5af]">
                                Salt and pepper to taste
                            </p>
                        </div>
                    </div>
                    {/* TODO: Button component */}
                    <div className="mt-[2rem] w-fit cursor-pointer overflow-clip rounded-lg border border-[#ff5e01] hover:shadow-[0_0_5px_0_#ffab81]">
                        <a
                            className="flex flex-row items-center gap-[0.6rem] bg-[#ff5e01] px-[0.75rem] py-[0.15rem] font-[500] text-white transition-all duration-300 ease-in-out hover:shadow-[inset_0_-5px_10px_#ffab81]"
                            target="_blank"
                        >
                            Get recipe
                        </a>
                    </div>
                </div>
                <Image
                    src={Food}
                    alt=""
                    className="h-auto w-full md:h-full md:w-auto"
                />
            </section>
        </div>
    );
}

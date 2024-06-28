import Image from 'next/image';
import Food from '@/public/1.webp';

export default function Home() {
    return (
        <div className="flex flex-col gap-3">
            <section className="flex flex-col">
                <h1 className="text-[#ff6f00]">
                    Hello, John.{' '}
                    <span className="font-[600]">It's time to cook.</span>
                </h1>
            </section>
            <section className="flex flex-row w-full bg-[#ffffff66] border-style rounded-lg overflow-clip h-[30dvw] relative">
                <div className="flex flex-col flex-grow p-[2rem]">
                    <h5>
                        Meal of the day
                    </h5>
                </div>
                <Image src={Food} alt="" className="right-0 absolute h-full w-auto" />
            </section>
        </div>
    );
}

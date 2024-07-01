'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FaChevronLeft } from 'react-icons/fa6';
// import { FaStar } from 'react-icons/fa6';
// import { IoPerson } from 'react-icons/io5';
import { LuAlarmClock } from 'react-icons/lu';
import { BiBowlRice } from 'react-icons/bi';
import { AiOutlineFire } from 'react-icons/ai';
import { MdOutlineFoodBank } from 'react-icons/md';
import { BsBoxArrowUp } from 'react-icons/bs';

import { Recipe } from '@/types/recipe';
import { URLParams } from '@/types/params';

import HeartButton from '@/components/HeartButton/HeartButton2';
import IngredientButton from '@/app/[id]/[recipeName]/_components/RecipeDetails/IngredientsButton';
import InstructionButton from '@/app/[id]/[recipeName]/_components/RecipeDetails/InstructionsButton';

export default function RecipeList(routeParams: URLParams) {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`/api/recipes/${routeParams.params.id}`);
            const data: Recipe[] = await res.json();
            console.log(data);
            setRecipes(data);
        }
        fetchData();
    }, []);

    return (
        <div className="flex flex-col gap-[2rem]">
            {recipes.map((recipe) => (
                <section key={recipe.name} className="flex flex-col gap-[2rem]">
                    <div className="flex flex-row items-center justify-between">
                        <Link href="/">
                            <p className="flex flex-row items-center gap-[0.3rem] duration-200 hover:text-[#ff5e01]">
                                {' '}
                                <FaChevronLeft size={11} /> Home
                            </p>
                        </Link>
                        <div className="flex flex-row items-center gap-[0.7rem]">
                            <p>
                                <BsBoxArrowUp
                                    size={15}
                                    className="border-style h-fit w-fit cursor-pointer overflow-visible rounded-full bg-[#ffffffdd] p-[0.4rem] backdrop-blur-md duration-200 hover:text-[#ff5e01]"
                                />
                            </p>
                            <HeartButton />
                        </div>
                    </div>
                    <div className="flex h-[120svh] w-full flex-col gap-[1rem] md:h-[70svh] md:flex-row">
                        <div className="relative min-h-[40%] w-full overflow-hidden rounded-md md:min-h-full md:w-[40%]">
                            <Image
                                src={recipe.image}
                                width={400}
                                height={400}
                                alt=""
                                className="absolute bottom-0 top-0 z-0 mx-auto h-full w-full object-cover"
                            />
                        </div>
                        <div className="border-style relative flex min-h-[60%] w-full flex-col gap-[1.3rem] overflow-hidden rounded-md p-[2rem] md:min-h-full md:w-[60%]">
                            <Image
                                src={recipe.image}
                                alt=""
                                width={400}
                                height={400}
                                className="spin_element absolute top-0 -z-20 h-full w-auto opacity-10 blur-[34px] brightness-[2]"
                            />
                            <div className="flex flex-col gap-[0.5rem]">
                                <h3>{recipe.name}</h3>
                                <p>{recipe.description}</p>
                            </div>
                            <div className="relative flex h-full w-full flex-col gap-[1.3rem] overflow-hidden overflow-y-scroll rounded-md p-[1rem] shadow-[inset_0px_0px_10px_1px_rgba(0,0,0,0.1)]">
                                <div className="z-10 flex flex-row items-center justify-start rounded-md border border-[#7272723e] p-[0.3rem] backdrop-blur-md">
                                    <p className="sm-text flex w-full flex-row items-center justify-center gap-[0.5rem] border-[#7272723e] py-[0.4rem] pr-[0.3rem] text-left">
                                        <LuAlarmClock className="-mt-[0.1rem] w-[10px] sm:w-auto" />{' '}
                                        {recipe.prepTimeMinutes +
                                            recipe.cookTimeMinutes}
                                        m
                                    </p>
                                    <p className="sm-text flex w-full flex-row items-center justify-center gap-[0.5rem] border-l border-r border-dashed border-[#7272723e] px-[0.3rem] py-[0.4rem] text-left">
                                        <BiBowlRice className="-mt-[0.1rem] w-[10px] sm:w-auto" />{' '}
                                        {recipe.servings} servings
                                    </p>
                                    <p className="sm-text flex w-full flex-row items-center justify-center gap-[0.5rem] border-r border-dashed border-[#7272723e] px-[0.3rem] py-[0.4rem] text-left">
                                        <AiOutlineFire className="-mt-[0.05rem] w-[10px] sm:w-auto" />{' '}
                                        {recipe.caloriesPerServing} cal
                                    </p>
                                    <p className="sm-text flex w-full flex-row items-center justify-center gap-[0.5rem] border-[#7272723e] py-[0.4rem] pl-[0.3rem] text-left">
                                        <MdOutlineFoodBank className="-mt-[0.05rem] w-[10px] sm:w-auto" />{' '}
                                        {recipe?.mealType[0]}
                                    </p>
                                </div>
                                <IngredientButton {...recipe} />
                                <InstructionButton {...recipe} />
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}

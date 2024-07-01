import RecipeList from '@/app/_components/HomeRecipes/RecipeList/RecipeList';
import MainHeader from '@app_c/MainHeader/MainHeader';

export default function Home() {
    return (
        <div className="flex flex-col gap-[2rem] md:gap-3">
            <MainHeader />
            <RecipeList />
        </div>
    );
}

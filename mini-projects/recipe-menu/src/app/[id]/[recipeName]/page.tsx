import { URLParams } from '@/types/params';
import RecipeDetails from '@/app/[id]/[recipeName]/_components/RecipeDetails/RecipeDetails';

export default function RecipeDetailsPage(routeParams: URLParams) {
    return (
        <div className="flex flex-col overflow-y-scroll">
            <RecipeDetails {...routeParams} />
        </div>
    );
}

import { useLoaderData } from "react-router-dom";
import SubCategory from "./SubCategory";

const SubCategories = () => {
    const productsByCategories = useLoaderData()

    return (
        <div>
            <div className="flex flex-col flex-wrap md:flex-row justify-center items-center gap-6 py-10">
                {
                    productsByCategories.length ?
                        <>
                            {
                                productsByCategories.map((category, i) => <SubCategory key={i} category={category} />)
                            }
                        </>
                        :
                        <>
                            <p className="text-xl text-center text-orange-700">No data found for the category</p>
                        </>
                }
            </div>
        </div>
    );
};

export default SubCategories;

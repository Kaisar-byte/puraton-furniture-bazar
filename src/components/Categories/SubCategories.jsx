import { useLoaderData } from "react-router-dom";
import SubCategory from "./SubCategory";

const SubCategories = () => {
    const productsByCategories = useLoaderData()

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-10">
                {
                    productsByCategories.length ?
                        <>
                            {
                                productsByCategories.map((category, i) => <SubCategory key={i} category={category} />)
                            }
                        </>
                        :
                        <>Do data found for the category</>
                }
            </div>
        </div>
    );
};

export default SubCategories;

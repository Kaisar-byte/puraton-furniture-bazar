import Categories from "../../components/Categories/Categories"
import Test from "../../components/Categories/Test"
import Products from "../../components/Products/Products"
import Services from "../../components/Services/Services"
import Slider from "../../components/Slider/Slider"

const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <Products />
      <Services />
    </div>
  )
}

export default Home

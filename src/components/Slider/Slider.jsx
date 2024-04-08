
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';




const Slider = () => {
    const sliders = [
        {
            label1: "Best Seller",
            label2: "Creative Sofa",
            label3: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias enim, possimus quos obcaecati magnam harum!",
            path: "https://furns-react.netlify.app/images/slider-image/slider-2.png"
        },
        {
            label1: "New Products",
            label2: "Flexible Chair",
            label3: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias enim, possimus quos obcaecati magnam harum!",
            path: "https://furns-react.netlify.app/images/slider-image/slider-1.png"
        },
    ]
    return (
        <div className='bg-white mb-20'>
            <AwesomeSlider animation="cubeAnimation">
                {
                    sliders.map((slider, i) => <div key={i} className='flex justify-center items-center gap-4'>
                        <div className='pl-10 space-y-3 w-[50%] py-10 mr-6'>
                            <span className='text-2xl text-[##6F6F6F]'>{slider.label1}</span>
                            <h2 className='text-7xl font-bold'>{slider.label2}</h2>
                            <p className='text-md text-[##6F6F6F] mr-24 pb-5 py-4'>{slider.label3}</p>
                            <button className='bg-orange-400 px-5 py-2 text-white'>Shop now</button>
                        </div>
                        <img src={slider.path} alt="" />
                    </div>)
                }
            </AwesomeSlider>
        </div>
    )
}

export default Slider

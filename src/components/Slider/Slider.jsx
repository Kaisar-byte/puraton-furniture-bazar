
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';




const Slider = () => {
    const sliders = [
        {
            label1: "Best Seller",
            label2: "Creative Sofa",
            label3: "A comforter give you free for relaxing and having good feelings",
            path: "https://furns-react.netlify.app/images/slider-image/slider-2.png"
        },
        {
            label1: "New Collections",
            label2: "Flexible Chair",
            label3: "May your level of choice to high, give an assurance to your feelings of joy ",
            path: "https://furns-react.netlify.app/images/slider-image/slider-1.png"
        },
    ]
    return (
        <div className='bg-white mb-32'>
            <AwesomeSlider animation="cubeAnimation">
                {
                    sliders.map((slider, i) => <div key={i} className='flex flex-col md:flex-row justify-center items-center gap-0 md:gap-4 px-4 md:px-20'>
                        <div className='pl-10 space-y-1 md:space-y-3 w-full md:w-[650%] py-4 md:py-10'>
                            <span className='text-sm md:text-2xl text-[##6F6F6F]'>{slider.label1}</span>
                            <h2 className='text-xl md:text-4xl lg:text-7xl font-bold'>{slider.label2}</h2>
                            <p className='text-xs md:text-lg text-[##6F6F6F] mr-24 pb-5 py-4'>{slider.label3}</p>
                            <button className='bg-orange-400 px-5 py-2 text-white'>Shop now</button>
                        </div>
                        <img src={slider.path} className='w-[30%] md:w-[40%] lg:w-full' alt="" />
                    </div>)
                }
            </AwesomeSlider>
        </div>
    )
}

export default Slider

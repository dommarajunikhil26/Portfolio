import profilePicture from '../../../public/Resources/Images/Hero.jpeg';
import './resumeButton.css';


const HeroImage = () => {
    return (
        <div className='flex justify-center items-center'>
            <img
                src={profilePicture}
                alt='Profile Picture'
                className="w-1/2 md:w-2/3 lg:w-3/4 xl:w-11/20 object-cover rounded-full"

            />

        </div>
    )
}

export default HeroImage;
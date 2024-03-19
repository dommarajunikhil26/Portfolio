import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypedAnimatedComponent = () => {
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAnimation(true);
        }, 1500); // Delays the animation start by 1.5 seconds

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    return (
        <>
            {showAnimation && (
                <TypeAnimation
                    sequence={[
                        'I am a Full Stack Web Developer', 1000, // Waits 1s
                        'I am a Full Stack Java Developer', 2000,
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    className="text-2xl md:text-3xl lg:text-4xl font-poppins font-bold inline-block"
                />
            )}
        </>
    );
};

export default TypedAnimatedComponent;

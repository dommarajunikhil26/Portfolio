

const AnimationIntro = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-900 text-white overflow-hidden">
            <h1 className="text-3xl font-bold animate-slideInFromRight">nikhil sai dommaraju</h1>
            <div className="w-0 bg-white h-0.5 mx-4 animate-drawLine"></div>
            <h2 className="text-xl opacity-0 animate-fadeIn">I am a Full Stack Developer</h2>
        </div>
    );
};

export default AnimationIntro;

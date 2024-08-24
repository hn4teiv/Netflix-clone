const Auth = () => {
    return (
        <div className="relative h-full w-full bg-[url('/images/hero.png')] bg-no-repeat bg-center bf-fixed bg-cover">
            <div className=" w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="Logo" className="h-12"/>
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rouded-md w-full">
                        <h2 className="text-white yexy-4xl mb-8 font semibold">Sign in</h2>
                        <div className="div">flex flex-col gap-4</div>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;

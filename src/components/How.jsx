import howimage from "../assets/howimage.svg";


const How = () => {
    return (
        <section className="bg-white py-20">
            <div className="bg-white lg:w-[90%] md:w-[90%] w-[100%] mx-auto ">
                <div className="container mx-auto px-8 sm:px-[80px] py-[100px]">
                    <h1 className="text-[#0C0814] lg:text-[32px] md:text-[32px] text-[24px] font-[700] lg:w-[70%] md:w-[70%] w-[100%] my-12 font-titiliumweb text-center lg:text-left md:text-left">
                       Welcome to LearnersFund
                        <br />
                        How to Navigate LearnersFund
                    </h1>




                    <div className="flex flex-col lg:flex-row md:flex-row gap-2">
                        <div className="content-card w-full md:w-[32%] mb-5 h-full border rounded-xl px-8 mt-10 shadow-lg ">
                            <div className="grid place-items-center">
                            <img src={howimage} alt="howimage" />
                            </div>
                            <div className="w-full h-1/2 p-[4px]">
                                <h3 className="text-[#0C0814] text-xl font-bold leading-loose text-center ">
                                    Connect Wallet
                                </h3>
                                <p className="text-[#0C0814] text-sm font-normal pb-2 text-center">
                                Whether you are looking forward to fund or to secure funding, 
                                the first step is to connect your wallet to get started

                                </p>
                            </div>

                        </div>



                        <div className="content-card w-full md:w-[32%] mb-5 h-full border rounded-xl px-8 mt-10 shadow-lg">
                        
                        <div className="grid place-items-center">
                            <img src={howimage} alt="howimage" />
                            </div>
                            <div className="w-full h-1/2 p-[8px]">
                                <h3 className="text-[#0C0814] text-xl font-bold leading-loose text-center">
                                    Submit a Proposal
                                </h3>
                                <p className="text-[#0C0814] text-sm font-normal text-center">
                                If you are looking forward to secure funding for your education, 
                                click on the submit a proposal button to proceed
                                </p>
                            </div>
                        </div>

                        <div className="content-card w-full md:w-[32%] mb-5 h-full border rounded-xl px-8 mt-10 shadow-lg ">
                        <div className="grid place-items-center">
                            <img src={howimage} alt="howimage" />
                            </div>
                            <div className="w-full h-1/2">
                                <h3 className="text-[#0C0814] text-xl font-bold leading-loose text-center">
                                    Fund
                                </h3>
                                <p className="text-[#0C0814] text-sm font-normal pb-4 text-center ">
                                If you are looking forward to fund a student or a project, 
                                click in the fund button to proceed
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section>

    );
};

export default How;

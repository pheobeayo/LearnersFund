import Footer from "../../components/Footer";
import useGetProposal from "../../hooks/useGetProposal";

const StudentProjectDetails = () => {
  const { loading, data: proposal } = useGetProposal();

  const proposalData = proposal;

  return (
    <main className="relative w-full min-h-screen">
      <section className="w-[100vw] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <h4>Loading...</h4>
        ) : proposalData.length > 0 ? (
          <div className="flex flex-col md:flex-row lg:flex-row justify-between mt-28">
            <div className="mx-6 md:w-2/3 lg:w-2/3">
              <img src={`https://green-rational-prawn-874.mypinata.cloud/ipfs/${proposalData[6]}`} alt="laptop" className="w-full max-h-96 object-contain mb-4" />

              <p className="text-[#0C0814] text-base font-bold mt-4">
                Descriptions: <span className="text-base font-normal">{proposalData[2]}.</span>
              </p>
              <h1 className="text-[#0C0814] text-base font-bold">
                Referee: <span className="text-base font-normal"> {proposalData[4]}</span>
              </h1>
              <h1 className="text-[#0C0814] text-base font-bold">
                School Name:<span className="text-base font-normal"> Obafemi Awolowo University{" "}</span>
              </h1>
              <h1 className="text-[#0C0814] text-base font-bold">
                National Identity Number:<span className="text-base font-normal">  348870927432{" "}</span>
              </h1>
              <h1 className="text-[#0C0814] text-base font-bold">
                Wallet Address:<span className="text-base font-normal">  {proposalData[1]}</span>
              </h1>
            </div>
            <div className="mx-6 md:w-1/3">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src={`https://green-rational-prawn-874.mypinata.cloud/ipfs/${proposalData[6]}`} alt="urgent" className="w-full h-auto mb-2" />
                <h3 className="font-bold text-[#0C0814] text-sm mx-4">
                  {proposalData[3]}
                </h3>
                <div className="mx-4 my-2">
                  <h1 className="text-[#0C0814] text-justify font-bold text-xs">
                    {Number(proposalData[8])} USDT<span className="mx-2">-</span>30
                  </h1>
                  <h1 className="text-[#0C0814] text-justify font-normal text-xs">
                    Goal<span className="mx-2">Funders</span>Days left
                  </h1>
                  <div className=" bg-white border-[#593A9E]  rounded-full w-3/4 h-2 my-2 ">
                    <div className=" bg-[#593A9E] border-[#593A9E]  rounded-full w-1/2 h-2 "></div>
                  </div>
                  <h2 className="text-[#0C0814] text-justify font-normal text-sm">
                    {Number(proposalData[8])} USDT Amount needed
                    <br />
                    {proposalData[10] ? "Status: Approved For Disbursement" : "Status: Pending"}
                  </h2>
                  <button className="bg-[#593A9E] hover:bg-[#593A9E] text-white font-bold py-2 px-4 border border-[#AAAAAA] rounded w-full mt-4">
                    {proposalData[11] ? "Check Your Wallet" : "Pending Payments"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h4 className="text-[#593A9E] font-bold">Could not get proposal!!</h4>
        )}
      </section>
      <Footer />
    </main>
  );
};

export default StudentProjectDetails;

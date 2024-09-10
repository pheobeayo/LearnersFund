import Footer from "../../components/Footer";
import { Link, useParams } from "react-router-dom";
import useGetProposals from "../../hooks/useGetProposals";

const ProjectDetails = () => {
  const { id } = useParams();
  const { loading, data: proposal } = useGetProposals();




  const handleImageError = (e) => {
    e.target.src = "https://green-rational-prawn-874.mypinata.cloud/ipfs/QmUuuR4UMTY7sThV959FiptHyy6JEBnFGE8wSmaoyBEi4t";
  };

  console.log("PROPOSAL: ", proposal[id]);

  return (
    <main className="relative w-full min-h-screen">
      <section className="w-[100vw] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <h4>Loading...</h4>
        ) : proposal[id] ? (
          <div className="flex flex-col md:flex-row justify-between mt-28">
            <div className="mx-6 md:w-2/3 border-2 border-[#06214A] rounded-lg p-4">
              <img
                src={`https://green-rational-prawn-874.mypinata.cloud/ipfs/${proposal[id][7]}`}
                alt={`Proposal visual representation: ${proposal[id][2]}`}
                className="w-full max-h-96 object-contain mb-4"
                onError={handleImageError}
              />
              <p className="text-[#0C0814] text-base font-normal mt-4">
                Descriptions: {proposal[id][2]}.
              </p>
              <h1 className="text-[#0C0814] text-base font-bold">
                Referee: {proposal[id][4]}
              </h1>
              <h1 className="text-[#0C0814] text-base font-bold">
                School Name: Obafemi Awolowo University
              </h1>
              <h1 className="text-[#0C0814] text-base font-bold">
                National Identity Number: 348870927432
              </h1>
              <h1 className="text-[#0C0814] text-base font-bold">
                Wallet Address: {proposal[id][1]}
              </h1>
            </div>
            <div className="mx-6 md:w-1/3">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  src={`https://green-rational-prawn-874.mypinata.cloud/ipfs/${proposal[id][6]}`}
                  alt={`Proposal thumbnail: ${proposal[id][3]}`}
                  className="w-full h-auto mb-2"
                  onError={handleImageError}
                />
                <h3 className="font-bold text-[#0C0814] text-sm mx-4">
                  {proposal[id][3]}
                </h3>
                <div className="mx-4 my-2">
                  <h1 className="text-[#0C0814] text-justify font-bold text-xs">
                    {Number(proposal[id][7])} USDT<span className="mx-2">-</span>30
                  </h1>
                  <h1 className="text-[#0C0814] text-justify font-normal text-xs">
                    Goal<span className="mx-4">Funders</span>Days left
                  </h1>
                  <div className="bg-white border-[#06214A] rounded-full w-full h-2 my-2">
                    <div className="bg-[#593A9E] border-[#593A9E] rounded-full w-full h-2"></div>
                  </div>
                  <h2 className="text-[#0C0814] text-justify font-normal text-sm">
                    {Number(proposal[id][7])} USDT Amount needed
                    <br />
                    {proposal[id][9] ? "Status: Approved For Disbursement" : "Status: Pending"}
                  </h2>
                  <Link to={`/fund-modal/${id}`}>
                    <button className="bg-[#593A9E] hover:bg-[#06214A] text-white font-bold py-2 px-4 border border-[#AAAAAA] rounded w-full mt-4">
                      Fund
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h4>Could not get proposal details!!</h4>
        )}
      </section>
      <Footer />
    </main>
  );
};

export default ProjectDetails;

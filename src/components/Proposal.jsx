
import useGetProposals from "../../hooks/useGetProposals";
import { useNavigate } from "react-router-dom";

const Proposal = () => {
  const { loading, data: proposal } = useGetProposals();
  const navigate = useNavigate();

  const getFirst20Words = (text) => {
    if (!text) return '';
    const words = text.split(' ');
    return words.slice(0, 20).join(' ');
  };

  const handleClick = (id) => {
    navigate(`/fund/${id}`);
  };

  // Function to handle image loading errors and set fallback URL
  const handleError = (event, fallbackImageURL) => {
    event.target.onerror = null; // Prevent infinite loop if fallback also fails
    event.target.src = fallbackImageURL;
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-8 sm:px-[80px] py-[100px]">
        <h2 className="text-[#331000] text-3xl font-bold leading-10">
          Proposals available to be funded
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {loading ? (
            <h3>Loading...</h3>
          ) : proposal.length !== 0 ? (
            proposal.map((item, index) => {
              // Construct primary and fallback image URLs
              const primaryImageURL = `https://green-rational-prawn-874.mypinata.cloud/ipfs/${item.imageIPFSHash}`;
              const fallbackImageURL = item.imageIPFSHash; // Adjust this URL

              return (
                <div key={index} className="content-card mb-5 hover:skew-x-12 duration-150 ease-in-out">
                  <img
                    src={primaryImageURL}
                    alt="urgent"
                    className="object-cover h-48 w-full rounded-t-lg"
                    onError={(e) => handleError(e, fallbackImageURL)}
                  />
                  <div className="bg-white rounded-b-lg p-4 shadow-md">
                    <h3 className="font-bold text-[#331000] text-sm mb-2">
                      {item.title}
                    </h3>
                    <p className="font-normal text-justify text-[#331000] text-xs mb-4">
                      {getFirst20Words(item.description)}
                    </p>
                    <div className="flex justify-between items-center">
                      <div>
                        <h1 className="text-[#331000] text-xs">
                          {Number(item.amount)} USDT
                        </h1>
                        <h1 className="text-[#331000] text-xs">Goal</h1>
                      </div>
                      <div>
                        <h2 className="text-[#331000] text-xs">
                          {item.approved ? "Status: Approved For Sponsorship" : "Status: Pending"}
                        </h2>
                        <h2 className="text-[#331000] text-xs">
                          {Number(item.amount)} USDT Amount needed
                        </h2>
                      </div>
                    </div>
                    <div className="block mt-4">
                      <button
                        className="bg-[#ffffff] hover:bg-[#FF5100] text-[#331000] font-bold py-2 px-4 border border-[#FF5100] rounded w-full"
                        onClick={() => handleClick(Number(item.proposalId))}
                      >
                        View details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h3>Could not get proposals!!</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Proposal;

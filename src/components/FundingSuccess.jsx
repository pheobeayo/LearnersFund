import { useState } from "react";
import useFund from "../hooks/useFund";
import { useParams } from "react-router-dom";

const FundingSuccessPage = () => {
  const { id } = useParams();
  const [amount, setAmount] = useState("0")
  const fund = useFund()



  const handleSubmit = async (e) => {
    e.preventDefault();
    await fund(id, Number(amount))

  }
  return (

    <div className="h-screen w-[100vw] flex justify-center items-center bg-[#593A9E]/5">
      <div className="w-[50%] bg-[#593A9E]/5 rounded-xl md:rounded-2xl  border shadow-xl ">
        <div className="grid place-items-center">

          <form onSubmit={handleSubmit} >
            <div className='mt-8'>
              <h2 className="text-xl font-bold text-[#0C0814] text-center mx-2">
                Fund in
              </h2>
              <span>
                <select
                  id="currency"
                  className="bg-white border-[#593A9E] border-2 rounded w-full py-2 px-3 text-[#0C0814] leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option selected>Funding currency</option>
                  <option value="US">Ether</option>
                  <option value="E">USDT -coming soon</option>

                </select>
              </span>
            </div>
            <div className="mb-2">
              <label
                className="block text-[#0C0814] text-base font-bold mb-2"

              >
                Price
              </label>
              <input
                className="bg-white border-[#593A9E] border-2 rounded w-full py-2 px-3 text-[#331000] leading-tight focus:outline-none focus:shadow-outline"
                id="amount"
                value={amount.toString()}
                onChange={(e) => setAmount(e.target.value)}
                type="amount"
                placeholder="Enter the amount you want Donate"
                required
              />
            </div>
            <button className="bg-[#593A9E] hover:bg-[#593A9E] text-white font-bold py-2 px-4 border border-[#331000] rounded w-full  mb-4">
              Fund
            </button>
            <button className="bg-white hover:bg-[#593A9E] text-[#331000] font-bold py-2 px-4 border border-[#331000] rounded w-full  mb-4">
              Cancel
            </button>
          </form>

        </div>
      </div>
    </div>

  );
};

export default FundingSuccessPage;

import { useCallback } from "react";
import { useWeb3ModalProvider } from "@web3modal/ethers/react";
import { getProvider } from "../utils/constants/providers";
import { getStudentChainContract } from "../utils/constants/contracts";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";


const useFund = () => {
    const { walletProvider } = useWeb3ModalProvider();

    const navigate = useNavigate();


    return useCallback(async (proposalId, amounts) => {
        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();
        console.log(proposalId);
        const contract = getStudentChainContract(signer);

        try {
            const transaction = await contract.donate(proposalId, {
                value: amounts
            });
            console.log("transaction: ", transaction);
            const receipt = await transaction.wait();

            console.log("receipt: ", receipt);

            if (receipt.status) {
                toast.success("funded successfully!");

                // Redirect
                return navigate("/");
            }

            toast.error("funding failed!");
        } catch (error) {
            console.log("error :", error);
        }
    }, [navigate, walletProvider]);
}

export default useFund;

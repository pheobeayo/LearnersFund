import { ethers } from "ethers";
import Abi from "./StudentChain.json";

export const getStudentChainContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_APP_STUDENT_CHAIN_CONTRACT,
        Abi,
        providerOrSigner
    );


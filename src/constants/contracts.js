import { ethers } from "ethers";
import Abi from "./StudentChain.json";

export const getStudentChainContract = (providerOrSigner) =>
    new ethers.Contract(
        process.env.REACT_APP_STUDENT_CHAIN_CONTRACT,
        Abi,
        providerOrSigner
    );


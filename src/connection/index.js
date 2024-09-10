import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";


export const SUPPORTED_CHAIN = 84532;

const BaseSepolia = {
    chainId: SUPPORTED_CHAIN,
    name: "Base Sepolia",
    currency: "ETH",
    explorerUrl: "https://sepolia.basescan.org/",
    rpcUrl: import.meta.env.VITE_APP_RPC_URL,
};

const metadata = {
    name: "LearnersFund",
    description: "A blockchain app for supporting students",
    url: "https://learnersfund.vercel.app/", // origin must match your domain & subdomain
    icons: ["https://learnersfund.vercel.app/"],
};

export const configWeb3Modal = () => createWeb3Modal({
        ethersConfig: defaultConfig({ metadata }),
        chains: [BaseSepolia],
        projectId: import.meta.env.VITE_APP_PROJECTID,
        enableAnalytics: false, // Optional - defaults to your Cloud configuration
        themeVariables: {
            '--w3m-accent': '#593A9E',
            '--w3m-color-mix': '#06214A',
            '--w3m-color-mix-strength': 20
        },
    });

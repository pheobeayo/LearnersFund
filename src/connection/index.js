import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";


export const SUPPORTED_CHAIN = 656476;

const eduChain = {
    chainId: SUPPORTED_CHAIN,
    name: "Open Campus Codex",
    currency: "EDU",
    explorerUrl: "http://opencampus-codex.blockscout.com/",
    rpcUrl: import.meta.env.VITE_APP_RPC_URL,
};

const metadata = {
    name: "LearnersFund",
    description: "A blockchain app for supporting students",
    url: "https://studentchain.vercel.app/", // origin must match your domain & subdomain
    icons: ["https://studentchain.vercel.app/"],
};

export const configWeb3Modal = () => createWeb3Modal({
        ethersConfig: defaultConfig({ metadata }),
        chains: [eduChain],
        projectId: import.meta.env.VITE_APP_PROJECTID,
        enableAnalytics: false, // Optional - defaults to your Cloud configuration
        themeVariables: {
            '--w3m-accent': '#593A9E',
            '--w3m-color-mix': '#06214A',
            '--w3m-color-mix-strength': 20
        },
    });

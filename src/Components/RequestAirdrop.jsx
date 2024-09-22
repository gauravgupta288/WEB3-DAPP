import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect } from "react";

export function RequestAirdrop(){
    const wallet = useWallet();
    const {connection} = useConnection()
    

    async function requestAirdrop(){
        const publicKey = wallet.publicKey
        const amount = document.getElementById("amount").value;

        console.log("hi there")
        await connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL)
    
    }

    useEffect(() => {
        // Automatically request airdrop when wallet is connected
        if (wallet.publicKey) {
            requestAirdrop();
        }
    }, [wallet.publicKey]);

    return <div>
        <input id = "amount"type="text" placeholder="Amount..." style={{pl : "10px"}}></input>
        <button onClick={requestAirdrop}>Request Airdrop</button>
    </div>
}
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useTransition } from "react";

export function SendTokens(){

    const wallet = useWallet()
    const {connection} = useConnection();

    async function sendToken(){
        const publicKey = wallet.publicKey;
        const to = document.getElementById('to').value;

        const amount = document.getElementById('amount').value

        const transaction = new Transaction();
        
        transaction.add(SystemProgram.transfer({
            fromPubkey : publicKey,
            toPubkey : new PublicKey(to),

            lamports : amount * LAMPORTS_PER_SOL
        }));

        await wallet.sendTransaction(transaction, connection)
        alert("transfer successful")


    }
    return <div>

        <input id='to' placeholder="sent to..."></input>
        <input id='amount' placeholder="solana..."></input>
        <button onClick={sendToken}>Send</button>

    </div>
}
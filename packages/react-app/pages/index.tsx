// import {
//   ALFAJORES_CUSD_ADDRESS,
//   ALFAJORES_RPC,
//   FA_CONTRACT,
//   FA_PROXY_ADDRESS,
//   ODIS_PAYMENTS_CONTRACT,
//   ODIS_PAYMENTS_PROXY_ADDRESS,
//   STABLE_TOKEN_CONTRACT,
//   ISSUER_PRIVATE_KEY,
//   DEK_PRIVATE_KEY
// }
// import { OdisUtils } from "@celo/identity";
import { AuthenticationMethod, AuthSigner, OdisContextName } from "@celo/identity/lib/odis/query";
import { ethers, Wallet } from "ethers";
// import { WebBlsBlindingClient } from "../utils/webBlindingClient";
import { parseEther } from "viem";
import { useSession, signIn, signOut } from "next-auth/react";
import { LockOpenIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { useAccount, useSendTransaction } from "wagmi";
// import { ISocialConnect } from "@/utils/ISocialConnect";
// import { useIsMounted } from "@/hooks/useIsMounted";
import { useEffect, useState } from "react";
// import SessionCard from "@/components/SessionCard";
export default function Home() {
  
  return (
    <div>
      <div>
        <h1 className="text-5xl uppercase font-extrabold">Display Soulname/offline Id With SocialConnect</h1>
        <p className="text-center">This app displays the user off line identity, in this case Github profile, instead of the wallet address</p>
      </div>
      {/* <form className="max-w-md mx-auto mt-5 pt-5">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Phone Number"
            aria-label="Phone Number"
          />
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form> */}
    </div>
  )
}

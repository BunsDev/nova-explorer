// import { useEffect } from "react";
// import { uniqBy } from "lodash";
import { IChain as Chain } from "../models/chain";
import React from "react";

// const mergeChainSets = (c1: Chain[], c2: Chain[]) => uniqBy(c1.concat(c2), "name");

export default function() {
  const [chains, setChains] = React.useState<Chain[]>([
    {
      name: "Nova Network",
      network: "Mainnet",
      rpc: ["https://rpc.novanetwork.io:9070/"],
    },
    {
      name: "Nebula Testnet",
      network: "Testnet",
      rpc: ["https://testnet.rpc.novanetwork.io:9070/"],
    },
    {
      name: "Fantom Opera",
      network: "Mainnet",
      rpc: ["https://rpc.ftm.tools/"],
    },
    {
      name: "Ethereum",
      network: "Mainnet",
      rpc: ["https://mainnet.infura.io/v3/56d2793090b6497192afd6454c815389"],
    },
    {
      name: "Binance Smart Chain",
      network: "Mainnet",
      rpc: ["https://bsc-dataseed1.binance.org/"],
    },
  ]);

  // uncomment once we add 'chain list provider' concept. This list blows.

  // useEffect(() => {
  //   if (chains === undefined) {
  //     fetch("https://chainid.network/chains.json")
  //       .then((r) => r.json())
  //       .then((chainIdNetwork) => {
  //         const filteredChains = chainIdNetwork.filter((c: Chain) => {
  //           if (c.rpc.length === 0) {
  //             return false;
  //           }
  //           return true;
  //         });
  //         if (chains) {
  //           setChains(mergeChainSets(chains, filteredChains));
  //         } else {
  //           setChains(filteredChains);
  //         };
  //       });
  //   }
  // }, [chains]);

  return [chains, setChains];
}

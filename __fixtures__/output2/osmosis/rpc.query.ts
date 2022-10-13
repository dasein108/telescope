import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string;
}) => {
  const tmClient = await Tendermint34Client.connect(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    cosmos: {
      app: {
        v1alpha1: (await import("../cosmos/app/v1alpha1/query.rpc.query")).createRpcQueryExtension(client)
      },
      auth: {
        v1beta1: (await import("../cosmos/auth/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      authz: {
        v1beta1: (await import("../cosmos/authz/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      bank: {
        v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      base: {
        tendermint: {
          v1beta1: (await import("../cosmos/base/tendermint/v1beta1/query.rpc.svc")).createRpcQueryExtension(client)
        }
      },
      distribution: {
        v1beta1: (await import("../cosmos/distribution/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      evidence: {
        v1beta1: (await import("../cosmos/evidence/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      feegrant: {
        v1beta1: (await import("../cosmos/feegrant/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      gov: {
        v1: (await import("../cosmos/gov/v1/query.rpc.query")).createRpcQueryExtension(client),
        v1beta1: (await import("../cosmos/gov/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      group: {
        v1: (await import("../cosmos/group/v1/query.rpc.query")).createRpcQueryExtension(client)
      },
      mint: {
        v1beta1: (await import("../cosmos/mint/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      nft: {
        v1beta1: (await import("../cosmos/nft/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      params: {
        v1beta1: (await import("../cosmos/params/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      slashing: {
        v1beta1: (await import("../cosmos/slashing/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      staking: {
        v1beta1: (await import("../cosmos/staking/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      tx: {
        v1beta1: (await import("../cosmos/tx/v1beta1/service.rpc.svc")).createRpcQueryExtension(client)
      },
      upgrade: {
        v1beta1: (await import("../cosmos/upgrade/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      }
    },
    osmosis: {
      claim: {
        v1beta1: (await import("./claim/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      epochs: {
        v1beta1: (await import("./epochs/query.rpc.query")).createRpcQueryExtension(client)
      },
      gamm: {
        v1beta1: (await import("./gamm/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      incentives: (await import("./incentives/query.rpc.query")).createRpcQueryExtension(client),
      lockup: (await import("./lockup/query.rpc.query")).createRpcQueryExtension(client),
      mint: {
        v1beta1: (await import("./mint/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      poolincentives: {
        v1beta1: (await import("./pool-incentives/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      streamswap: {
        v1: (await import("./streamswap/v1/query.rpc.query")).createRpcQueryExtension(client)
      },
      superfluid: (await import("./superfluid/query.rpc.query")).createRpcQueryExtension(client),
      tokenfactory: {
        v1beta1: (await import("./tokenfactory/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      twap: {
        v1beta1: (await import("./twap/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      txfees: {
        v1beta1: (await import("./txfees/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      }
    }
  };
};
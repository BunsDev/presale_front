import { StableBond, LPBond, NetworkID, CustomBond, BondType } from "src/lib/Bond";
import { addresses } from "src/constants";

import { ReactComponent as DaiImg } from "src/assets/tokens/DAI.svg";
import { ReactComponent as HecDaiimg } from "src/assets/tokens/HEC-DAI.svg";
import { ReactComponent as wFTMImg } from "src/assets/tokens/wFTM.svg";
import { ReactComponent as UsdcImg } from "src/assets/tokens/USDC.svg";
import { ReactComponent as MimImg } from "src/assets/tokens/MIM.svg";
import { ReactComponent as FraxImg } from "src/assets/tokens/FRAX.svg";
import { ReactComponent as HecUsdcImg } from "src/assets/tokens/HEC-USDC.svg";
import { ReactComponent as HecFraxImg } from "src/assets/tokens/HEC-FRAX.svg";

import { abi as BondHecDaiContract } from "src/abi/bonds/HecDaiContract.json";
import { abi as HecUsdcContract } from "src/abi/bonds/HecUsdcContract.json";

import { abi as DaiBondContract } from "src/abi/bonds/DaiContract.json";
import { abi as MimBondContract } from "src/abi/bonds/MimContract.json";
import { abi as ReserveHecDaiContract } from "src/abi/reserves/HecDai.json";
import { abi as ReserveHecUsdcContract } from "src/abi/reserves/HecUsdc.json";

import { abi as EthBondContract } from "src/abi/bonds/FtmContract.json";

import { abi as ierc20Abi } from "src/abi/IERC20.json";

// TODO(zx): Further modularize by splitting up reserveAssets into vendor token definitions
//   and include that in the definition of a bond
export const dai = new StableBond({
  name: "dai",
  displayName: "DAI",
  bondToken: "DAI",
  bondIconSvg: DaiImg,
  bondContractABI: DaiBondContract,
  fourAddress: "0x98D833f7e29A15f219b404F38e5735B0D940A806",   //HectorBondStakeDepository1  0x23337B675375507CE218df5F92f1a71252DAB3E5
  oldfourAddress: "0x23836B896681f78729F8bB333A6eFE6FdAcFAfD9", //HectorBondStakeDepository2 0xe8fd4630800bA4335801D1b104B07328Ae415605
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x57EeC874f593d07Cc0dd4619fCC5C56D73Ce8311", //HectorBondDepository1   0x4099EB0e82Ffa0048E4BF037a9743ca05Ec561D7
      reserveAddress: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",//dai
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x329f2031741B635143652B48129572A39FDdF3cA",
      reserveAddress: "0x219A5b4685950bF1f07dF52ABB65B1E5aD696680",
    },
    [NetworkID.Localnet]: {
      bondAddress: "0xd3Fa5cF12f0A9B809E1A9B2B2dC50c55Df3f565F",
      reserveAddress: "0x55F1032cE596b17e99c2FeedC713Ce9a276C170d",
    },
  },
});

export const dai4 = new StableBond({
  name: "dai4",
  displayName: "DAI",
  bondToken: "DAI",
  bondIconSvg: DaiImg,
  isFour: true,
  isTotal: true,
  bondContractABI: MimBondContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x23836B896681f78729F8bB333A6eFE6FdAcFAfD9",  // HectorBondStakeDepository2   0xe8fd4630800bA4335801D1b104B07328Ae415605
      reserveAddress: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",  //dai
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xA539C6d31a5de48CdA0Bc7C7F47AbBbF53efe4e3",
      reserveAddress: "0x219A5b4685950bF1f07dF52ABB65B1E5aD696680",
    },
    [NetworkID.Localnet]: {
      bondAddress: "0xcde3b693F9Ec758c71dE7beE6Da81f0dFb5E687F",
      reserveAddress: "0x55F1032cE596b17e99c2FeedC713Ce9a276C170d",
    },
  },
});

export const dai4_v2 = new StableBond({
  name: "dai4_v2",
  displayName: "DAI",
  bondToken: "DAI",
  bondIconSvg: DaiImg,
  isFour: true,
  isTotal: true,
  oldfourAddress: "0xA539C6d31a5de48CdA0Bc7C7F47AbBbF53efe4e3",   //HectorBondStakeDepository2  0xe8fd4630800bA4335801D1b104B07328Ae415605
  bondContractABI: MimBondContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x98D833f7e29A15f219b404F38e5735B0D940A806",  //HectorBondStakeDepository1  0x23337B675375507CE218df5F92f1a71252DAB3E5
      reserveAddress: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",  //dai
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xA539C6d31a5de48CdA0Bc7C7F47AbBbF53efe4e3",
      reserveAddress: "0x219A5b4685950bF1f07dF52ABB65B1E5aD696680",
    },
    [NetworkID.Localnet]: {
      bondAddress: "0xcde3b693F9Ec758c71dE7beE6Da81f0dFb5E687F",
      reserveAddress: "0x55F1032cE596b17e99c2FeedC713Ce9a276C170d",
    },
  },
});
export const ftm = new CustomBond({
  name: "ftm",
  displayName: "wFTM",
  lpUrl: "",
  bondType: BondType.StableAsset,
  bondToken: "WFTM",
  bondIconSvg: wFTMImg,
  bondContractABI: EthBondContract,
  reserveContract: ierc20Abi, // The Standard ierc20Abi since they're normal tokens
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x7BB3d208435B2B9742837380c20B0D07e69d115D",  //HectorBondDepository2   0x72De9F0e51cA520379a341318870836FdCaf03B9
      reserveAddress: "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",  //WrappedFtm
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x329f2031741B635143652B48129572A39FDdF3cA",
      reserveAddress: "0x219A5b4685950bF1f07dF52ABB65B1E5aD696680",
    },
    [NetworkID.Localnet]: {
      bondAddress: "0xd3Fa5cF12f0A9B809E1A9B2B2dC50c55Df3f565F",
      reserveAddress: "0x55F1032cE596b17e99c2FeedC713Ce9a276C170d",
    },
  },
  customTreasuryBalanceFunc: async function (this: CustomBond, networkID, provider) {
    const ethBondContract = this.getContractForBond(networkID, provider);
    let ethPrice = await ethBondContract.assetPrice();
    ethPrice = ethPrice / Math.pow(10, 8);
    const token = this.getContractForReserve(networkID, provider);
    let ftmAmount = await token.balanceOf(addresses[networkID].TREASURY_ADDRESS);
    ftmAmount = ftmAmount / Math.pow(10, 18);
    return ftmAmount * ethPrice;
  },
});

export const usdc = new StableBond({
  name: "usdc",
  displayName: "USDC",
  bondToken: "USDC",
  decimals: 6,
  bondIconSvg: UsdcImg,
  fourAddress: "0xBc65fe5fdE971399f8fc9FfC60A349ab0Ad1CD50",  //HectorBondStakeDepository3  0xD0373F236Be04EcF08F51fc4E3AdE7159D7cDe65
  oldfourAddress: "0x80584CdaF82F691BaeD08576092C06465ABa5245",  //HectorBondStakeDepository4  0x605c31dD24c71f0b732Ef33aC12CDce77fAC09B6
  bondContractABI: DaiBondContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x4D21Ba01d5D10FaCB94F6Bb9ae1CBF9F20847823",  //HectorBondDepository3  0x5d05EF2654B9055895F21D7057095e2D7575f5A2
      reserveAddress: "0x04068da6c83afcfa0e13ba15a6696662335d5b75",  //Usdc
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xE40cc2D71377f16590C36CD694cD44dE943d4376",
      reserveAddress: "0xa668cA067015Fa0a25910356eDd7079286c7e7b8",
    },
    [NetworkID.Localnet]: {
      bondAddress: "0xd3Fa5cF12f0A9B809E1A9B2B2dC50c55Df3f565F",
      reserveAddress: "0x55F1032cE596b17e99c2FeedC713Ce9a276C170d",
    },
  },
});

export const usdc4 = new StableBond({
  name: "usdc4",
  displayName: "USDC",
  bondToken: "USDC",
  bondIconSvg: UsdcImg,
  bondContractABI: MimBondContract,
  isFour: true,
  decimals: 6,
  isTotal: true,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x80584CdaF82F691BaeD08576092C06465ABa5245",  //HectorBondStakeDepository4  0x605c31dD24c71f0b732Ef33aC12CDce77fAC09B6
      reserveAddress: "0x04068da6c83afcfa0e13ba15a6696662335d5b75", //usdc
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xcef43B2143FEEBdf2F3d5D069e8F84b2d1258C8a",
      reserveAddress: "0xa668cA067015Fa0a25910356eDd7079286c7e7b8",
    },
    [NetworkID.Localnet]: {
      bondAddress: "0xcde3b693F9Ec758c71dE7beE6Da81f0dFb5E687F",
      reserveAddress: "0x55F1032cE596b17e99c2FeedC713Ce9a276C170d",
    },
  },
});

export const usdc4_v2 = new StableBond({
  name: "usdc4_v2",
  displayName: "USDC",
  bondToken: "USDC",
  bondIconSvg: UsdcImg,
  bondContractABI: MimBondContract,
  oldfourAddress: "0x80584CdaF82F691BaeD08576092C06465ABa5245",  //HectorBondStakeDepository4   0x605c31dD24c71f0b732Ef33aC12CDce77fAC09B6
  isFour: true,
  decimals: 6,
  isTotal: true,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0xBc65fe5fdE971399f8fc9FfC60A349ab0Ad1CD50",  //HectorBondStakeDepository3  0xD0373F236Be04EcF08F51fc4E3AdE7159D7cDe65
      reserveAddress: "0x04068da6c83afcfa0e13ba15a6696662335d5b75", //usdc
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xcef43B2143FEEBdf2F3d5D069e8F84b2d1258C8a",
      reserveAddress: "0xa668cA067015Fa0a25910356eDd7079286c7e7b8",
    },
    [NetworkID.Localnet]: {
      bondAddress: "0xcde3b693F9Ec758c71dE7beE6Da81f0dFb5E687F",
      reserveAddress: "0x55F1032cE596b17e99c2FeedC713Ce9a276C170d",
    },
  },
});

export const mim4 = new StableBond({
  name: "mim4",
  displayName: "MIM",
  bondToken: "MIM",
  bondIconSvg: MimImg,
  bondContractABI: DaiBondContract,
  isFour: true,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x02332593E52798e5e795FA77fd24D95a716B2bB0", //HectorBondStakeDepository5  0xb26be27f6f980efb07ae757d0a6a372671eacf7f
      reserveAddress: "0x82f0B8B456c1A451378467398982d4834b6829c1", //mim
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xA539C6d31a5de48CdA0Bc7C7F47AbBbF53efe4e3",
      reserveAddress: "0x219A5b4685950bF1f07dF52ABB65B1E5aD696680",
    },
    [NetworkID.Localnet]: {
      bondAddress: "0xcde3b693F9Ec758c71dE7beE6Da81f0dFb5E687F",
      reserveAddress: "0x55F1032cE596b17e99c2FeedC713Ce9a276C170d",
    },
  },
});

export const mim4_v2 = new StableBond({
  name: "mim4_v2",
  displayName: "MIM",
  bondToken: "MIM",
  bondIconSvg: MimImg,
  bondContractABI: MimBondContract,
  isFour: true,
  isTotal: true,
  oldfourAddress: "0x02332593E52798e5e795FA77fd24D95a716B2bB0", //HectorBondStakeDepository5   0xb26be27f6f980efb07ae757d0a6a372671eacf7f
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x23a52F2598c59103E74CA4391c678950bD538857", //HectorBondStakeDepository6 0x8565f642180fE388F942460B66ABa9c2ca7F02Ed
      reserveAddress: "0x82f0B8B456c1A451378467398982d4834b6829c1", //mim
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xA539C6d31a5de48CdA0Bc7C7F47AbBbF53efe4e3",
      reserveAddress: "0x219A5b4685950bF1f07dF52ABB65B1E5aD696680",
    },
    [NetworkID.Localnet]: {
      bondAddress: "0xcde3b693F9Ec758c71dE7beE6Da81f0dFb5E687F",
      reserveAddress: "0x55F1032cE596b17e99c2FeedC713Ce9a276C170d",
    },
  },
});

export const mim = new StableBond({
  name: "mim",
  displayName: "MIM",
  bondToken: "MIM",
  bondIconSvg: MimImg,
  bondContractABI: MimBondContract,
  isTotal: true,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0xd77DD827AbFfd6c5052ba8dDB706d97511cc1134", //HectorBondDepositoryV2-1  0xa695750b8439AB2AfBd88310946C99747C5B3A2E
      reserveAddress: "0x82f0B8B456c1A451378467398982d4834b6829c1",  //mim
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x329f2031741B635143652B48129572A39FDdF3cA",
      reserveAddress: "0x219A5b4685950bF1f07dF52ABB65B1E5aD696680",
    },
    [NetworkID.Localnet]: {
      bondAddress: "0xd3Fa5cF12f0A9B809E1A9B2B2dC50c55Df3f565F",
      reserveAddress: "0x55F1032cE596b17e99c2FeedC713Ce9a276C170d",
    },
  },
});

export const frax = new StableBond({
  name: "frax",
  displayName: "FRAX",
  bondToken: "FRAX",
  bondIconSvg: FraxImg,
  bondContractABI: MimBondContract,
  isTotal: true,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x2E33D50399bE9aefdEe1429eA9903B48Ee0b9ADA",  //HectorBondDepositoryV2-2  0xA4E87A25bC9058e4eC193151558c3c5D02cebE31
      reserveAddress: "0xdc301622e621166bd8e82f2ca0a26c13ad0be355",  //frax
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x329f2031741B635143652B48129572A39FDdF3cA",
      reserveAddress: "0x219A5b4685950bF1f07dF52ABB65B1E5aD696680",
    },
    [NetworkID.Localnet]: {
      bondAddress: "0xd3Fa5cF12f0A9B809E1A9B2B2dC50c55Df3f565F",
      reserveAddress: "0x55F1032cE596b17e99c2FeedC713Ce9a276C170d",
    },
  },
});

export const frax4 = new StableBond({
  name: "frax4",
  displayName: "FRAX",
  bondToken: "FRAX",
  bondIconSvg: FraxImg,
  bondContractABI: MimBondContract,
  isTotal: true,
  isFour: true,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0xDF5A9F49147F8bc6a919574907D0AfC0fa1b8572", //HectorBondStakeDepository7  0xC798e6A22996C554739Df607B7eF1d6d435FDBd9
      reserveAddress: "0xdc301622e621166bd8e82f2ca0a26c13ad0be355", //frax
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xA539C6d31a5de48CdA0Bc7C7F47AbBbF53efe4e3",
      reserveAddress: "0x219A5b4685950bF1f07dF52ABB65B1E5aD696680",
    },
    [NetworkID.Localnet]: {
      bondAddress: "0xcde3b693F9Ec758c71dE7beE6Da81f0dFb5E687F",
      reserveAddress: "0x55F1032cE596b17e99c2FeedC713Ce9a276C170d",
    },
  },
});
export const hec_dai = new LPBond({
  name: "hec_dai_lp_v1",
  displayName: "VNO-DAI LP v1",
  bondToken: "DAI",
  bondIconSvg: DaiImg,
  bondContractABI: BondHecDaiContract,
  reserveContract: ReserveHecDaiContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0xA1224c353cdCB03eB70FbA44dADC137F39E5EF7d",  //HectorBondDepository4
      reserveAddress: "0xbc0eecdA2d8141e3a26D2535C57cadcb1095bca9", //UniswapV2Pair-1
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x329f2031741B635143652B48129572A39FDdF3cA",
      reserveAddress: "0x219A5b4685950bF1f07dF52ABB65B1E5aD696680",
    },
    [NetworkID.Localnet]: {
      bondAddress: "0xd3Fa5cF12f0A9B809E1A9B2B2dC50c55Df3f565F",
      reserveAddress: "0x55F1032cE596b17e99c2FeedC713Ce9a276C170d",
    },
  },
  lpUrl:
    "https://spookyswap.finance/add/0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0/0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
});

export const hec_dai_v2 = new LPBond({
  name: "hec_dai_lp",
  displayName: "VNO-DAI LP",
  bondToken: "DAI",
  bondIconSvg: DaiImg,
  bondContractABI: BondHecDaiContract,
  reserveContract: ReserveHecDaiContract,
  fourAddress: "0xcef43B2143FEEBdf2F3d5D069e8F84b2d1258C8a",  //HectorBondStakeDepository8  0xfF40F40E376030394B154dadcB4173277633b405
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x6c9b3a47a28a39fea65e99d97895e717df1706d0", //HectorBondDepository5
      reserveAddress: "0xbc0eecdA2d8141e3a26D2535C57cadcb1095bca9",  //uniswapv2pair-1
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x329f2031741B635143652B48129572A39FDdF3cA",
      reserveAddress: "0x219A5b4685950bF1f07dF52ABB65B1E5aD696680",
    },
    [NetworkID.Localnet]: {
      bondAddress: "0xd3Fa5cF12f0A9B809E1A9B2B2dC50c55Df3f565F",
      reserveAddress: "0x55F1032cE596b17e99c2FeedC713Ce9a276C170d",
    },
  },
  lpUrl:
    "https://spookyswap.finance/add/0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0/0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
});

export const hec_dai_4 = new LPBond({
  name: "dai_lp4",
  displayName: "VNO-DAI LP",
  bondToken: "DAI",
  bondIconSvg: DaiImg,
  isFour: true,
  isTotal: true,
  bondContractABI: MimBondContract,
  reserveContract: ReserveHecDaiContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0xfF40F40E376030394B154dadcB4173277633b405",  //HectorBondStakeDepository8
      reserveAddress: "0xbc0eecdA2d8141e3a26D2535C57cadcb1095bca9",  //uniswapv2pair-1
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xA539C6d31a5de48CdA0Bc7C7F47AbBbF53efe4e3",
      reserveAddress: "0x219A5b4685950bF1f07dF52ABB65B1E5aD696680",
    },
    [NetworkID.Localnet]: {
      bondAddress: "0xcde3b693F9Ec758c71dE7beE6Da81f0dFb5E687F",
      reserveAddress: "0x55F1032cE596b17e99c2FeedC713Ce9a276C170d",
    },
  },
  lpUrl:
    "https://spookyswap.finance/add/0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0/0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
});
// export const hec_frax = new LPBond({
//   name: "hec_frax",
//   displayName: "VNO-FRAX LP",
//   bondToken: "FRAX",
//   bondIconSvg: FraxImg,
//   isTotal: true,
//   bondContractABI: MimBondContract,
//   reserveContract: ReserveHecDaiContract,
//   networkAddrs: {
//     [NetworkID.Mainnet]: {
//       bondAddress: "0xde02631d898acd1bb8ff928c0f0ffa0cf29ab374",  //HectorBondDepositoryV2-3
//       reserveAddress: "0x0f8D6953F58C0dd38077495ACA64cbd1c76b7501",  //UniswapV2Pair-2
//     },
//     [NetworkID.Testnet]: {
//       bondAddress: "0x329f2031741B635143652B48129572A39FDdF3cA",
//       reserveAddress: "0x219A5b4685950bF1f07dF52ABB65B1E5aD696680",
//     },
//     [NetworkID.Localnet]: {
//       bondAddress: "0xd3Fa5cF12f0A9B809E1A9B2B2dC50c55Df3f565F",
//       reserveAddress: "0x55F1032cE596b17e99c2FeedC713Ce9a276C170d",
//     },
//   },
//   lpUrl:
//     "https://spookyswap.finance/add/0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0/0xdc301622e621166bd8e82f2ca0a26c13ad0be355",
// });

// export const hec_frax4 = new LPBond({
//   name: "hec_frax4",
//   displayName: "VNO-FRAX LP",
//   bondToken: "FRAX",
//   bondIconSvg: FraxImg,
//   isTotal: true,
//   isFour: true,
//   bondContractABI: MimBondContract,
//   reserveContract: ReserveHecDaiContract,
//   networkAddrs: {
//     [NetworkID.Mainnet]: {
//       bondAddress: "0x09eb3B10a13DD705C17ced39c35aeEA0D419D0BB", //HectorBondStakeDepository9
//       reserveAddress: "0x0f8D6953F58C0dd38077495ACA64cbd1c76b7501", //UniswapV2Pair-2
//     },
//     [NetworkID.Testnet]: {
//       bondAddress: "0xA539C6d31a5de48CdA0Bc7C7F47AbBbF53efe4e3",
//       reserveAddress: "0x219A5b4685950bF1f07dF52ABB65B1E5aD696680",
//     },
//     [NetworkID.Localnet]: {
//       bondAddress: "0xcde3b693F9Ec758c71dE7beE6Da81f0dFb5E687F",
//       reserveAddress: "0x55F1032cE596b17e99c2FeedC713Ce9a276C170d",
//     },
//   },
//   lpUrl:
//     "https://spookyswap.finance/add/0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0/0xdc301622e621166bd8e82f2ca0a26c13ad0be355",
// });

// export const hec_usdc = new LPBond({
//   name: "hec_usdc_lp",
//   displayName: "VNO-USDC LP",
//   bondToken: "USDC",
//   decimals: 6,
//   fourAddress: "0xA539C6d31a5de48CdA0Bc7C7F47AbBbF53efe4e3",  //HectorBondStakeDepository10  0xff6508aba1DAd81AACf3894374F291f82Dc024A8
//   bondIconSvg: UsdcImg,
//   bondContractABI: HecUsdcContract,
//   reserveContract: ReserveHecUsdcContract,
//   networkAddrs: {
//     [NetworkID.Mainnet]: {
//       bondAddress: "0x3C57481f373Be0196A26A7d0a8E29E8CedC63ba1", //HectorBondDepository6
//       reserveAddress: "0xd661952749f05acc40503404938a91af9ac1473b",  //PancakePair
//     },
//     [NetworkID.Testnet]: {
//       bondAddress: "0x329f2031741B635143652B48129572A39FDdF3cA",
//       reserveAddress: "0x219A5b4685950bF1f07dF52ABB65B1E5aD696680",
//     },
//     [NetworkID.Localnet]: {
//       bondAddress: "0xd3Fa5cF12f0A9B809E1A9B2B2dC50c55Df3f565F",
//       reserveAddress: "0x55F1032cE596b17e99c2FeedC713Ce9a276C170d",
//     },
//   },
//   lpUrl:
//     "https://swap.spiritswap.finance/#/add/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75/0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0",
// });

// export const hec_usdc_4 = new LPBond({
//   name: "usdc_lp_4",
//   displayName: "VNO-USDC LP",
//   bondToken: "USDC",
//   decimals: 6,
//   isFour: true,
//   isTotal: true,
//   bondIconSvg: UsdcImg,
//   bondContractABI: MimBondContract,
//   reserveContract: ReserveHecUsdcContract,
//   networkAddrs: {
//     [NetworkID.Mainnet]: {
//       bondAddress: "0xff6508aba1DAd81AACf3894374F291f82Dc024A8", //HectorBondStakeDepository10
//       reserveAddress: "0xd661952749f05acc40503404938a91af9ac1473b", //PancakePair
//     },
//     [NetworkID.Testnet]: {
//       bondAddress: "0xA539C6d31a5de48CdA0Bc7C7F47AbBbF53efe4e3",
//       reserveAddress: "0x219A5b4685950bF1f07dF52ABB65B1E5aD696680",
//     },
//     [NetworkID.Localnet]: {
//       bondAddress: "0xcde3b693F9Ec758c71dE7beE6Da81f0dFb5E687F",
//       reserveAddress: "0x55F1032cE596b17e99c2FeedC713Ce9a276C170d",
//     },
//   },
//   lpUrl:
//     "https://swap.spiritswap.finance/#/add/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75/0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0",
// });

// HOW TO ADD A NEW BOND:
// Is it a stableCoin bond? use `new StableBond`
// Is it an LP Bond? use `new LPBond`
// Add new bonds to this array!!
// export const allBonds = [hec_dai_v2, hec_usdc, ftm, dai, usdc, mim, mim4_v2, usdc4_v2, dai4_v2];
export const allBonds = [
  hec_dai_v2,
  // hec_usdc,
  ftm,
  dai,
  usdc,
  mim4_v2,
  mim,
  usdc4_v2,
  dai4_v2,
  hec_dai_4,
  // hec_usdc_4,
  frax,
  frax4,
  // hec_frax,
  // hec_frax4,
];
export const allBondsMap = allBonds.reduce((prevVal, bond) => {
  return { ...prevVal, [bond.name]: bond };
}, {});

// Debug Log
export default allBonds;

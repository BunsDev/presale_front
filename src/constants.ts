export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/wkich/hector-subgraph";
export const EPOCH_INTERVAL = 28800;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 1;

export const TOKEN_DECIMALS = 9;

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  250: {
    DAI_ADDRESS: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E", // 0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E
    USDC_ADDRESS: "0x04068da6c83afcfa0e13ba15a6696662335d5b75",  //0x04068da6c83afcfa0e13ba15a6696662335d5b75
    HEC_ADDRESS: "0x07508992492344749F1D53A147a841bc8B7C9B66",  //0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0
    STAKING_ADDRESS: "0x98D17126DC17Cb01520F006B5eaF3C99CE7a93A5", // 0xD12930C8deeDafD788F437879cbA1Ad1E3908Cc5
    STAKING_HELPER_ADDRESS: "0x230166CD6Adfb2f93773e256ce396b55DCD22e25", // 0x2694c2AAab19950B37FE47478276B5D4a2A73C45
    OLD_STAKING_ADDRESS: "0x9a252Adef1B189a6043a2B868DADFbf04b136909",  //0x9ae7972BA46933B3B20aaE7Acbf6C311847aCA40
    OLD_STAKING_HELPER_ADDRESS: "0x6718CE57C86f0a5015F17A59aC9519345458E657",  //0x2ca8913173D36021dC56922b5db8C428C3fdb146
    SHEC_ADDRESS: "0xC83F1D8Dea675f89B5D5D1519E5d67F3046D0D33",  //0x75bdef24285013387a47775828bec90b91ca9a5f
    OLD_SHEC_ADDRESS: "0x7B231A231bc0Ccbc6f8BD536Fe41974f95955862",  //0x36F26880C6406b967bDb9901CDe43ABC9D53f106
    DISTRIBUTOR_ADDRESS: "0x3eb060B33B4053039C845Ce75716D6518f1Edee3",  //0x41400d445359f5aD51650C76746C98D79174b2e3
    BONDINGCALC_ADDRESS: "0xCb370A2075C81c967D12264154F6c42248889FA0",  //0xA36De21abd90b27e5EfF108D761Ab4fe06fD4Ab4
    BONDINGCALC_ADDRESS1: "0x8E9D274C67509FC0606a42544e7E43C6A2d1efFC",  //0x783A734D5C65e44D3CC0C74e331C4d4F23407E64
    TREASURY_ADDRESS: "0xf229d63227280fCf73A84Ec295e18F403D795F2a",  //0xCB54EA94191B280C296E6ff0E37c7e76Ad42dC6A
    REDEEM_HELPER_ADDRESS: "0x20D4Da0E5b486731D8f97bBfB7B480e6fCec2746",  //0xe78D7ECe7969d26Ae39b2d86BbC04Ae32784daF2
    WSHEC_ADDRESS: "0xF85933c6866BcCAf14986EA625336cFA9B87A47c",  //0x94CcF60f700146BeA8eF7832820800E2dFa92EdA
  },
  1337: {
    DAI_ADDRESS: "0x55F1032cE596b17e99c2FeedC713Ce9a276C170d", 
    USDC_ADDRESS: "0xEe8ef6E7AB540Bf3Ad899a580beEeaE26806B333",  
    HEC_ADDRESS: "0x240597E0356B1feb9D9703E950985cc993491362",  
    STAKING_ADDRESS: "0x5A18022Cb1F7aD490b85A7Bdaf54C3EB8d5D5f4b", 
    STAKING_HELPER_ADDRESS: "0x5ab72D792e0A252E40F46f551EFf323C9De41abC", 
    OLD_STAKING_ADDRESS: "0xDb43b269f9aBFA3C9B55348E497c52da9B9AB122",  
    OLD_STAKING_HELPER_ADDRESS: "0x17acf9f2a021c3ca51bcB5e6F87F46112b9d6cF6",  
    SHEC_ADDRESS: "0x72B4E432fC10484F0da86A1a894236C31EB13E43",  
    OLD_SHEC_ADDRESS: "0xB9dEBB126d79856238306B200c74FeD0F4091e78",  
    DISTRIBUTOR_ADDRESS: "0xFD8f9d57e4d31df5871c7cb5533b71e01FdFeF15", 
    BONDINGCALC_ADDRESS: "0x5353cb38869d0deD23Ca3A86bb481EDaA9248e2F",
    BONDINGCALC_ADDRESS1: "0x7dE3F6C4407De869fF0BaD4438869b61d93caDf6",
    TREASURY_ADDRESS: "0xC4880c2E6fD71E1FA9a4e14556d3EED5AB9bE857",  
    REDEEM_HELPER_ADDRESS: "0x4c241FDe42c0346e25d220F98B21b30Aa16c8e05",  
    WSHEC_ADDRESS: "0xdd0aFAa4E2624D365d5994050B9178E5965BD278",  
  },
  4002: {
    DAI_ADDRESS: "0x219A5b4685950bF1f07dF52ABB65B1E5aD696680", 
    USDC_ADDRESS: "0xa668cA067015Fa0a25910356eDd7079286c7e7b8",  
    HEC_ADDRESS: "0x1EA3B8586cB987b5A0b8E61f4A8F5F249bc5ac8d",  
    STAKING_ADDRESS: "0x4e3613736a0cD0217046430472Ce222814AdC932", 
    STAKING_HELPER_ADDRESS: "0x274e016c3035AbA87Bd5070F099304B7f16114e8", 
    OLD_STAKING_ADDRESS: "0xF813a2380226cb4d1b584698b7D3eaDE87C01d10",  
    OLD_STAKING_HELPER_ADDRESS: "0xF6694570668DA63ae333D195Be7e9B6B23488421",  
    SHEC_ADDRESS: "0x46cD423940273F0Ba51610974f0F6fA2DEf6d4C5",  
    OLD_SHEC_ADDRESS: "0xE60dE782F9e2048527b1A638067aa64Dff86D3a3",  
    DISTRIBUTOR_ADDRESS: "0x24c3A29b7bFf29C3173E696F6a5a684Db83B58EF",  
    BONDINGCALC_ADDRESS: "0x66B9E15152D16d0Ea236Cd8346b8D90F82D7Ea49",  
    BONDINGCALC_ADDRESS1: "0x37Aaabf435831262ce59813d6AfE7389b8e0b2E6",  
    TREASURY_ADDRESS: "0x56B55A298509A5B586993a92f867801f28fF0B42",  
    REDEEM_HELPER_ADDRESS: "0x8d7BDf9c8579159eA4749598784D1aEB5826cdB7",
    WSHEC_ADDRESS: "0x77ED9bA78DD50Bad1dd6E7f4C91028CF841cBc7B",  
  }
};
export const messages = {
  please_connect: "Please connect your wallet to the Fantom network to use Wonderland.",
  please_connect_wallet: "Please connect your wallet.",
  try_mint_more: (value: string) => `You're trying to mint more than the maximum payout available! The maximum mint payout is ${value} HEC.`,
  before_minting: "Before minting, enter a value.",
  existing_mint:
      "You have an existing mint. Minting will reset your vesting period and forfeit any pending claimable rewards. We recommend claiming rewards first or using a fresh wallet. Do you still wish to proceed?",
  before_stake: "Before staking, enter a value.",
  before_unstake: "Before un staking, enter a value.",
  tx_successfully_send: "Your transaction was successful",
  your_balance_updated: "Your balance was successfully updated",
  nothing_to_claim: "You have nothing to claim",
  something_wrong: "Something went wrong",
  switch_to_fantom: "Switch to the Fantom network?",
  slippage_too_small: "Slippage too small",
  slippage_too_big: "Slippage too big",
  your_balance_update_soon: "Your balance will update soon",
};

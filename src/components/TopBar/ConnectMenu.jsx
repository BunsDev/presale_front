import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Box, Button, Typography, Paper, Divider, Link, Grid } from "@material-ui/core";
import { useAddress, useWeb3Context } from "src/hooks/web3Context";
import logo from "./logo.png";
import check from "./check.svg";
import close from "./close.svg";
import twitter from "./twitter.png";
import discord from "./discord.png";
import github from "./github.png";
import medium from "./medium.png";
import title from "./title.png";
import { abi as BollingerSale } from "../../abi/BollingerSale";
import { info } from "../../slices/MessagesSlice";
const devAddress = "0x1f8B1b4F91CA1C06512FA23bC3E0A37930E5811d";
// const devAddress = "0x7889D01396c93cC8e4E5dC69ec730a8D3057A18C";
const lbeAddress = "0x23e95267b3FE4Cf1Dc9E53449A94A649E7e58256";

let timeInterval;

function ConnectMenu() {
  const { connect, disconnect, hasCachedProvider, provider, chainID, connected, uri } = useWeb3Context();
  const address = useAddress();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isConnected, setConnected] = useState(connected);
  const [startStatus, setStartStatus] = useState(false);
  const [depositStatus, setDepositStatus] = useState(false);
  const [claimStatus, setClaimStatus] = useState(false);
  const [totalLeft, setTotalLeft] = useState(300);
  const [avaxAmount, setAvaxAmount] = useState("");
  const [avaxPrice, setAvaxPrice] = useState(73);
  let buttonText = "Connect Wallet";
  let clickFunc = connect;

  // const lbeContract = new ethers.Contract(lbeAddress, vnoSale, provider);

  if (isConnected) {
    buttonText = "Disconnect";
    clickFunc = disconnect;
  }

  useEffect(() => {
    setConnected(connected);
  }, [connected]);

  const handleDeposit500 = async () => {
    const lbeContract = new ethers.Contract(lbeAddress, BollingerSale, provider.getSigner());
    const amount1 = 6756756756000000000;
    const amount = await provider.getBalance(address);
    if (amount1 > amount) {
      window.alert("Balance is insufficient");
    }
    try {
      const res = await lbeContract.deposite({value: "6756756756000000000"});
      // provider.getBalance(address)
      console.log("res:", res);
      window.alert("deposite success");
    } catch (err) {
      console.log("err:", err);
    }
  };

  const handleDeposit2000 = async () => {
    const lbeContract = new ethers.Contract(lbeAddress, BollingerSale, provider.getSigner());
    const amount1 = 27027027027000000000;
    const amount = await provider.getBalance(address);
    if (amount1 > amount) {
      window.alert("Balance is insufficient");
    }
    try {
      const res = await lbeContract.deposite({value: "27027027027000000000"});
      // provider.getBalance(address)
      console.log("res:", res);
      window.alert("deposite success");
    } catch (err) {
      console.log("err:", err);
    }
  };

  const handleDeposit5000 = async () => {
    const lbeContract = new ethers.Contract(lbeAddress, BollingerSale, provider.getSigner());
    const amount1 = 67567567567000000000;
    const amount = await provider.getBalance(address);
    if (amount1 > amount) {
      window.alert("Balance is insufficient");
    }
    try {
      const res = await lbeContract.deposite({value: "67567567567000000000"});
      // provider.getBalance(address)
      console.log("res:", res);
      window.alert("deposite success");
    } catch (err) {
      console.log("err:", err);
    }
  };

  const handleDeposit10000 = async () => {
    const lbeContract = new ethers.Contract(lbeAddress, BollingerSale, provider.getSigner());
    const amount1 = 135135135135000000000;
    const amount = await provider.getBalance(address);
    if (amount1 > amount) {
      window.alert("Balance is insufficient");
    }
    try {
      const res = await lbeContract.deposite({value: "135135135135000000000"});
      // provider.getBalance(address)
      console.log("res:", res);
      window.alert("deposite success");
    } catch (err) {
      console.log("err:", err);
    }
  };

  const handleClaim = async () => {
    const lbeContract = new ethers.Contract(lbeAddress, BollingerSale, provider.getSigner());
    try {
      await lbeContract.claim();
      window.alert("Claim success");
    } catch (err) {
      console.log("err:", err);
    }
  };

  const handleWithDraw = async () => {
    const lbeContract = new ethers.Contract(lbeAddress, BollingerSale, provider.getSigner());
    try {
      await lbeContract.withDraw();
      window.alert("Withdraw success");
    } catch (err) {
      console.log("err:", err);
    }
  };

  const handleStart = async () => {
    const lbeContract = new ethers.Contract(lbeAddress, BollingerSale, provider.getSigner());
    try {
      await lbeContract.setStart();
      window.alert("Bollinger Presale Event started");
    } catch (err) {
      console.log("err:", err);
    }
  };

  const handleEnd = async () => {
    const lbeContract = new ethers.Contract(lbeAddress, BollingerSale, provider.getSigner());
    try {
      await lbeContract.endStart();
      window.alert("Bollinger Presale Event finished");
    } catch (err) {
      console.log("err:", err);
    }
  };

  const app = async () => {
    console.log("data fetch");
    const lbeContract = new ethers.Contract(lbeAddress, BollingerSale, provider.getSigner());
    try {
      const left = 3;
      const res = await lbeContract.getStatus();
      const avaxPrice_ = await lbeContract.getPrice();
      const addSta = await lbeContract.getAddressStatus();
      setStartStatus(res);
      setAvaxPrice(Number(avaxPrice_));
      console.log("res", res);
      console.log("addSta", addSta);
      console.log("avaxprice", Number(avaxPrice));
      if (left === 0) {
        if(addSta === 1) {
          setDepositStatus(true);
          setClaimStatus(false);
        }
        else {

          setDepositStatus(true);
          setClaimStatus(true);
        }
      } else {
        if (!res) {
          setDepositStatus(true);
          setClaimStatus(true);
        } else {
           if (addSta === 0) {
            setDepositStatus(false);
            setClaimStatus(true);
          } else if (addSta === 1) {
            setDepositStatus(true);
            setClaimStatus(false);
          } else {
            setDepositStatus(true);
            setClaimStatus(true);
          }
        }
      }
    } catch (err) {
      console.log("error: ", err);
    }
  };   

  useEffect(() => {
    if (connected) {
      if (timeInterval) {
        clearInterval(timeInterval);
        timeInterval = setInterval(() => {
          app();
        }, 2000);
      } else
        timeInterval = setInterval(() => {
          app();
        }, 2000);
    } else {
      setDepositStatus(true);
      setClaimStatus(true);
    }
  }, [connected, address]);

  useEffect(() => {
    return () => {
      if (timeInterval) clearInterval(timeInterval);
    };
  }, []);

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        paddingRight={5}
        height={60}
        sx={{ width: "100%", backgroundColor: "white", position:"fixed", top:"0px" }}
      >
        <Box sx={{ position: "absolute", left: "50px" }}>
          <img src={logo} alt="Logo" style={{ width: "150px", height: "50px" }} />
        </Box>
        {address === devAddress && (
          <Box display="flex" alignItems="center" justifyContent="space-around" marginRight={5}>
            <Button
              variant="contained"
              color="success"
              size="large"
              disabled={startStatus}
              style={{
                backgroundColor: startStatus ? "#dddddd" : "#0eaed5",
                borderRadius: "20px",
                marginRight: "10px",
                color: "white",
                width: "160px",
              }}
              onClick={handleStart}
            >
              Start
            </Button>
            <Button
              variant="contained"
              color="success"
              size="large"
              disabled={!startStatus}
              style={{
                backgroundColor: startStatus ? "#333333" : "#0eaed5",
                borderRadius: "20px",
                color: "white",
                width: "160px",
              }}
              onClick={handleEnd}
            >
              End
            </Button>
            <Button
              variant="contained"
              color="success"
              size="large"
              disabled={!startStatus}
              style={{
                backgroundColor: startStatus ? "#333333" : "#0eaed5",
                borderRadius: "20px",
                color: "white",
                width: "160px",
              }}
              onClick={handleWithDraw}
            >
              WithDraw
            </Button>
          </Box>
        )}
        <Box display="flex" alignItems="center" justifyContent={"space-around"} marginRight={5}>
            <Typography style ={{ fontSize:"30px"}}>
               AvaxPrice   {avaxPrice}$
            </Typography>   
        </Box>
        <Box display="flex" alignItems="center" justifyContent={"space-around"} marginRight={5}>
            <Typography style ={{ fontSize:"20px"}}>
               WHITEPAPER
            </Typography>   
        </Box>
        <Box sx={{ marginRight: "20px" }}>
          <Typography>
            {address ? `${address.slice(0, 6)}...${address.slice(address.length - 4, address.length)}` : "No Balance"}
          </Typography>
          
        </Box>              
        <Button
          variant="contained"
          color="success"
          size="small"
          onClick={clickFunc}
          style={{ backgroundColor: "#fcebfa", borderRadius: "20px", padding: "20px" }}
        >
          {buttonText}
        </Button>
      </Box>
      <Grid container justifyContent="center" alignItems="center" style={{overflowY:"scroll"}}>
        <Grid item xs={12} sm={8} md={6} style={{ textAlign: "center" }}>
          {/* <Box marginTop={10}>
          {totalLeft === 0 && <Typography style={{color: "red"}} variant="h1">Sold Out</Typography>}
            <img src={title} alt="Title" style={{ height: "250px" }} />
          </Box> */}
          <Box marginTop={15}>
            <Typography style={{fontSize: "60px", color:"White"}}>
              Bollinger Presale Event
            </Typography>
          </Box>
          
          
          <Box marginTop={6} display="flex" justifyContent="space-around">

            <Button
              variant="contained"
              color="success"
              disabled={depositStatus}
              style={{
                backgroundColor: depositStatus ? "#dddddd" : "#0eaed5",
                borderRadius: "20px",
                color: "white",
                width: "150px",
              }}
              onClick={handleDeposit500}
            >
              Buy 500            
            </Button>
            <Button
              variant="contained"
              color="success"
              disabled={depositStatus}
              style={{
                backgroundColor: depositStatus ? "#dddddd" : "#0eaed5",
                borderRadius: "20px",
                color: "white",
                width: "150px",
              }}
              onClick={handleDeposit2000}
            >
              Buy 2000
            </Button>
            <Button
              variant="contained"
              color="success"
              disabled={depositStatus}
              style={{
                backgroundColor: depositStatus ? "#dddddd" : "#0eaed5",
                borderRadius: "20px",
                color: "white",
                width: "150px",
              }}
              onClick={handleDeposit5000}
            >
              Buy 5000
            </Button>
            <Button
              variant="contained"
              color="success"
              disabled={depositStatus}
              style={{
                backgroundColor: depositStatus ? "#dddddd" : "#0eaed5",
                borderRadius: "20px",
                color: "white",
                width: "150px",
              }}
              onClick={handleDeposit10000}
            >
              Buy 10000
            </Button>
            <Button
              variant="contained"
              color="success"
              disabled={claimStatus}
              style={{
                backgroundColor: claimStatus ? "#dddddd" : "#001bc8",
                borderRadius: "20px",
                color: "white",
                width: "150px",
              }}
              onClick={handleClaim}
            >
              Claim
            </Button>
          </Box>
          <Box marginTop={5} paddingLeft={15}>
            <Typography style = {{fontSize: "60px", color: "White", textAlign:"left"}} marginBottom={2}>
              The Highest Paying    
              Auto-Staking & Auto-
              Compounding Protocal
            </Typography>
          </Box>
          <Box marginTop={4} paddingLeft={15} >
            <Typography style= {{fontSize:"30px", textAlign:"left", color: "white" }}>
              Hightest Fixed APY in Crypto - 383,025.80%
            </Typography>
          </Box>
          <Box marginTop={4} paddingLeft={15}>
            <Typography style= {{fontSize:"30px", textAlign:"left", color: "white"}}>
              Low Risk with Bollinger Insurance Fund(BIF)
            </Typography>
          </Box>
          <Box marginTop={4} paddingLeft={15}>
            <Typography style= {{fontSize:"30px", textAlign:"left", color: "white"}}>
            Interest Paid Every 15 Minutes: 96 Times Daily!
            </Typography>
          </Box>
          <Box marginTop={4} paddingLeft={15}>
            <Typography style= {{fontSize:"30px", textAlign:"left", color: "white"}}>
            Automatic Staking and Compounding in Your Wallet!
            </Typography>
          </Box>
          <Box marginTop={10}>
            <Typography style = {{fontSize: "60px", color: "White", textAlign:"left"}} marginBottom={2}>
              Bollinger Auto-Staking Protocol
            </Typography>
          </Box>

          
        </Grid>

      </Grid>
      <Grid container justifyContent="center" alignItems="center" style={{overflowY:"scroll"}}>
        <Grid item xs={12} sm={8} md={6} style={{ textAlign: "center" }} >
          <Box marginTop={5}  marginBottom={2} paddingLeft={30}>
            <Typography style = {{fontSize: "30px", color: "White", textAlign:"left"}}>
                ABOUT
            </Typography>
          </Box>
          <Box paddingLeft={30}>
            <Typography style = {{fontSize: "20px", color: "White", textAlign:"left"}}>
              Bollinger provides a decentralized financial asset which rewards
              users with a sustainable fixed compound interest model through
              use of it's unique AAP protocol.
            </Typography>
          </Box>
          <Box paddingLeft={30} marginTop={5}>
            <Typography style = {{fontSize: "20px", color: "White", textAlign:"left"}}>
              Bollinger delivers the industry's hightest fixed APY, paid every 15
              minutes, and a simple buy-hold-earn system that grows your 
              $BOLLINGER portfolio in your wallet at a lighting fast pace 
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={6} style={{ textAlign: "center" }} >
          <Box marginTop={4}  marginBottom={2} paddingLeft={30}>
            <Typography style = {{fontSize: "40px", color: "White", textAlign:"left"}}>
                383025.80%
            </Typography>
          </Box>
          <Box marginTop={4}  marginBottom={2} paddingLeft={30}>
            <Typography style = {{fontSize: "30px", color: "White", textAlign:"left"}}>
                Fixed Staking APY
            </Typography>
          </Box>
          {/* <Box marginTop={4}  marginBottom={2} paddingLeft={40} backgroundColor={"#dddddd"}>            
            <Typography backgroundColor={"#dddddd"} style = {{fontSize: "30px", color: "White", textAlign:"left"}}>
               OpenAPP
            </Typography>
          </Box> */}

        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" style={{overflowY:"scroll"}}>
        <Box marginTop={10} paddingLeft={15}>
          <Typography style = {{fontSize: "70px", color: "White"}} marginBottom={2}>
            "All Bollinger holders are rewarded with automatic compound interest which is paid every 15 minutes."
          </Typography>
          
        </Box>
        <Box marginTop={30} paddingLeft={15}>
          <Typography style = {{fontSize: "50px", color: "White"}} marginBottom={2}>
            How much can I earn ?
          </Typography>
          
        </Box>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" style={{overflowY:"scroll"}}>
        <Grid item xs={12} sm={8} md={6} style={{ textAlign: "center" }} >
          <Box marginTop={5}  marginBottom={2} paddingLeft={30}>
            <Typography style = {{fontSize: "30px", color: "White"}}>
                At the end of the 
            </Typography>
          </Box>
          <Box marginTop={5}  marginBottom={2} paddingLeft={30}>
            <Typography style = {{fontSize: "30px", color: "White"}}>
                year and with
            </Typography>
          </Box>
          <Box marginTop={5}  marginBottom={2} paddingLeft={30}>
            <Typography style = {{fontSize: "30px", color: "White"}}>
                $ 1000 USD of             
            </Typography>
          </Box>
          <Box marginTop={5}  marginBottom={2} paddingLeft={30}>
            <Typography style = {{fontSize: "30px", color: "White"}}>
                $Bollinger invested
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={6} style={{ textAlign: "center" }} >
          <Box marginTop={5}  marginBottom={2} paddingLeft={30}>
            <Typography style = {{fontSize: "30px", color: "White"}}>
                You can earn up to
            </Typography>
          </Box>
          <Box marginTop={5}  marginBottom={2} paddingLeft={30}>
            <Typography style = {{fontSize: "30px", color: "White"}}>
                $3,830,454.12 USD of
            </Typography>
          </Box>
          <Box marginTop={5}  marginBottom={2} paddingLeft={30}>
            <Typography style = {{fontSize: "30px", color: "White"}}>
                $Bollinger at 383,025.80%             
            </Typography>
          </Box>
          <Box marginTop={5}  marginBottom={2} paddingLeft={30}>
            <Typography style = {{fontSize: "30px", color: "White"}}>
                APY*
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" style={{overflowY:"scroll"}}>
        <Box marginTop={10} paddingLeft={15}>
          <Typography style = {{fontSize: "60px", color: "White"}} marginBottom={2}>
            Tokenomics
          </Typography>
          
        </Box>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" style={{overflowY:"scroll"}}>
        <Grid item xs={12} sm={8} md={6} style={{ textAlign: "center"  }} >
          <Box marginTop={3}  marginBottom={2} paddingRight={5}>
            <Typography style = {{ fontWeight:"bold", fontSize: "30px", color: "White" , textAlign:"right"}}>
                Buy
            </Typography>
          </Box>
          <Box marginTop={3}  marginBottom={2} paddingRight={5}>
            <Typography style = {{fontSize: "20px", color: "White",  textAlign:"right"}}>
                14% Slippage
            </Typography>
          </Box>
          <Box marginTop={3}  marginBottom={2} paddingRight={5}>
            <Typography style = {{ fontWeight:"bold", fontSize: "30px", color: "White" , textAlign:"right"}}>
                Automatic LP
            </Typography>
          </Box>
          <Box marginTop={3}  marginBottom={2} paddingRight={5}>
            <Typography style = {{fontSize: "20px", color: "White",  textAlign:"right"}}>
                4% of order fees return to liquidity
            </Typography>
          </Box>
          <Box marginTop={3}  marginBottom={2} paddingRight={5}>
            <Typography style = {{ fontWeight:"bold", fontSize: "30px", color: "White" , textAlign:"right"}}>
               Bollinger Insurance Fund
            </Typography>
          </Box>
          <Box marginTop={3}  marginBottom={2} paddingRight={5}>
            <Typography style = {{fontSize: "20px", color: "White",  textAlign:"right"}}>
                5% of order fees are stored in AIF
            </Typography>
          </Box>
          <Box marginTop={3}  marginBottom={2} paddingRight={5}>
            <Typography style = {{ fontWeight:"bold", fontSize: "30px", color: "White" , textAlign:"right"}}>
                Treasury
            </Typography>
          </Box>
          <Box marginTop={3}  marginBottom={2} paddingRight={5}>
            <Typography style = {{fontSize: "20px", color: "White",  textAlign:"right"}}>
                2.5% of order fees go to the treasury
            </Typography>
          </Box>
          <Box marginTop={3}  marginBottom={2} paddingRight={5}>
            <Typography style = {{ fontWeight:"bold", fontSize: "30px", color: "White" , textAlign:"right"}}>
                Fire Pit
            </Typography>
          </Box>
          <Box marginTop={3}  marginBottom={2} paddingRight={5}>
            <Typography style = {{fontSize: "20px", color: "White",  textAlign:"right"}}>
                2.5% of Bollinger is burnt in the fire pit
            </Typography>
          </Box>
          
          
        </Grid>
        <Grid item xs={12} sm={8} md={6} style={{ textAlign: "center"  }} >
          <Box marginTop={3}  marginBottom={2} paddingLeft={5} >
            <Typography style = {{ fontWeight:"bold", fontSize: "30px", color: "White" , textAlign:"left"}}>
                Sell
            </Typography>
          </Box>
          <Box marginTop={3}  marginBottom={2} paddingLeft={5} >
            <Typography style = {{fontSize: "20px", color: "White",  textAlign:"left"}}>
                16% Slippage
            </Typography>
          </Box>
          <Box marginTop={3}  marginBottom={2} paddingLeft={5} >
            <Typography style = {{ fontWeight:"bold", fontSize: "30px", color: "White" , textAlign:"left"}}>
            Automatic LP
            </Typography>
          </Box>
          <Box marginTop={3}  marginBottom={2} paddingLeft={5} >
            <Typography style = {{fontSize: "20px", color: "White",  textAlign:"left"}}>
            4% of order fees return to liquidity
            </Typography>
          </Box>
          <Box marginTop={3}  marginBottom={2} paddingLeft={5} >
            <Typography style = {{ fontWeight:"bold", fontSize: "30px", color: "White" , textAlign:"left"}}>
            Bollinger Insurance Fund
            </Typography>
          </Box>
          <Box marginTop={3}  marginBottom={2} paddingLeft={5} >
            <Typography style = {{fontSize: "20px", color: "White",  textAlign:"left"}}>
            5% of order fees are stored in AIF
            </Typography>
          </Box>
          <Box marginTop={3}  marginBottom={2} paddingLeft={5} >
            <Typography style = {{ fontWeight:"bold", fontSize: "30px", color: "White" , textAlign:"left"}}>
            Treasury
            </Typography>
          </Box>
          <Box marginTop={3}  marginBottom={2} paddingLeft={5} >
            <Typography style = {{fontSize: "20px", color: "White",  textAlign:"left"}}>
              2.5% of order fees go to the treasury
            </Typography>
          </Box>
          <Box marginTop={3}  marginBottom={2} paddingLeft={5} >
            <Typography style = {{ fontWeight:"bold", fontSize: "30px", color: "White" , textAlign:"left"}}>
              Fire Pit
            </Typography>
          </Box>
          <Box marginTop={3}  marginBottom={2} paddingLeft={5} >
            <Typography style = {{fontSize: "20px", color: "White",  textAlign:"left"}}>
              2.5% of Bollinger is burnt
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Box marginTop={20}>
          <Typography style = {{fontSize: "60px", color: "White"}} marginBottom={2}>
            Competitive Advantages
          </Typography>
        </Box>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" marginBottom= {15}>
        <Grid item xs={3} sm ={3} md={3} style={{ textAlign: "center" }}>
          <Box marginTop={10}>
            <Typography style = {{ fontWeight:"bold", fontSize: "30px", color: "White" }}>
              FEATURES
            </Typography>           
          </Box>
          <Box marginTop={5}>
            <Typography style = {{ fontSize: "20px", color: "White" }}>
              APY
            </Typography>           
          </Box>
          <Box marginTop={5}>
            <Typography style = {{ fontSize: "20px", color: "White" }}>
              Fees
            </Typography>           
          </Box>
          <Box marginTop={5}>
            <Typography style = {{ fontSize: "20px", color: "White" }}>
              Anti-Dump Strategy
            </Typography>           
          </Box>
          <Box marginTop={5}>
            <Typography style = {{ fontSize: "20px", color: "White" }}>
              Limited Edition NFT
            </Typography>           
          </Box>
          <Box marginTop={5}>
            <Typography style = {{ fontSize: "20px", color: "White" }}>
              Automatic Burn
            </Typography>           
          </Box>
          <Box marginTop={5}>
            <Typography style = {{ fontSize: "20px", color: "White" }}>
              Sustainable Rebasing
            </Typography>           
          </Box>
          <Box marginTop={5}>
            <Typography style = {{ fontSize: "20px", color: "White" }}>
              Insurance Fund
            </Typography>           
          </Box>
          <Box marginTop={5}>
            <Typography style = {{ fontSize: "20px", color: "White" }}>
              Auto-Liquidity
            </Typography>           
          </Box>
          <Box marginTop={5}>
            <Typography style = {{ fontSize: "20px", color: "White" }}>
              Auto-Staking
            </Typography>           
          </Box>
          <Box marginTop={5}>
            <Typography style = {{ fontSize: "20px", color: "White" }}>
              Fees Hard Coded
            </Typography>           
          </Box>
          <Box marginTop={5}>
            <Typography style = {{ fontSize: "20px", color: "White" }}>
              Auto-Staking Hard Coded
            </Typography>           
          </Box>
          <Box marginTop={5}>
            <Typography style = {{ fontSize: "20px", color: "White" }}>
              Rug-Proof: No Manual Adjusting
            </Typography>           
          </Box>
          <Box marginTop={5}>
            <Typography style = {{ fontSize: "20px", color: "White" }}>
              Rug-Proof: Fixed Rebase Time
            </Typography>           
          </Box>
          <Box marginTop={5}>
            <Typography style = {{ fontSize: "20px", color: "White" }}>
              Rug-Proof: Liquidity Locked
            </Typography>           
          </Box>
          <Box marginTop={5}>
            <Typography style = {{ fontSize: "20px", color: "White" }}>
              Manual Token Buyback
            </Typography>           
          </Box>
        </Grid>
        <Grid item xs={3} sm ={3} md={3} style={{ textAlign: "center" }}>
          <Box marginTop={10}>
          <Typography style = {{ fontWeight:"bold", fontSize: "30px", color: "White" }}>
              Bollinger
            </Typography>
          </Box>
          <Box marginTop={5}>
            <Typography style = {{ fontSize: "20px", color: "White" }}>
              383,025.80%
            </Typography>           
          </Box>
          <Box marginTop={5}>
            <Typography style = {{ fontSize: "20px", color: "White" }}>
              14%/16%
            </Typography>           
          </Box>
          <Box marginTop={5}>
              <img src={check} alt="Title"  style={{ height: "18px"}} />           
          </Box>
          <Box marginTop={5}>

              <img src={check} alt="Title" style={{ height: "18px" }} />
          
          </Box>
          <Box marginTop={5}>

              <img src={check} alt="Title" style={{ height: "18px" }} />
         
          </Box>
          <Box marginTop={5}>

              <img src={check} alt="Title" style={{ height: "18px" }} />
          
          </Box>
          <Box marginTop={5}>
            
              <img src={check} alt="Title" style={{ height: "18px" }} />
                       
          </Box>
          <Box marginTop={5}>
            
              <img src={check} alt="Title" style={{ height: "18px" }} />
                      
          </Box>
          <Box marginTop={5}>
            
              <img src={check} alt="Title" style={{ height: "18px" }} />
                      
          </Box>
          <Box marginTop={5}>
            
              <img src={check} alt="Title" style={{ height: "18px" }} />
                       
          </Box>
          <Box marginTop={5}>
            
              <img src={check} alt="Title" style={{ height: "18px" }} />
                      
          </Box>
          <Box marginTop={5}>
            
              <img src={check} alt="Title" style={{ height: "18px" }} />
                     
          </Box>
          <Box marginTop={5}>
            
              <img src={check} alt="Title" style={{ height: "18px" }} />
                       
          </Box>
          <Box marginTop={5}>
            
              <img src={check} alt="Title" style={{ height: "18px" }} />
                       
          </Box>
          <Box marginTop={5}>
            
              <img src={check} alt="Title" style={{ height: "18px" }} />
                       
          </Box>
        </Grid>
        <Grid item xs={3} sm ={3} md={3} style={{ textAlign: "center" }}>
          <Box marginTop={10}>
          <Typography style = {{ fontWeight:"bold", fontSize: "30px", color: "White" }}>
              Titano
            </Typography>
          </Box>
          <Box marginTop={5}>
            <Typography style = {{ fontSize: "20px", color: "White" }}>
              102,483.58%
            </Typography>           
          </Box>
          <Box marginTop={5}>
            <Typography style = {{ fontSize: "20px", color: "White" }}>
              13%/18%
            </Typography>           
          </Box>
          <Box marginTop={5}>
            
              <img src={close} alt="Title" style={{ height: "18px" }} />
                     
          </Box>
          <Box marginTop={5}>
           
              <img src={close} alt="Title" style={{ height: "18px" }} />
                      
          </Box>
          <Box marginTop={5}>

              <img src={close} alt="Title" style={{ height: "18px" }} />
          
          </Box>
          <Box marginTop={5}>
            
              <img src={close} alt="Title" style={{ height: "18px" }} />
                        
          </Box>
          <Box marginTop={5}>
            
              <img src={close} alt="Title" style={{ height: "18px" }} />
                        
          </Box>
          <Box marginTop={5}>
            
              <img src={close} alt="Title" style={{ height: "18px" }} />
                        
          </Box>
          <Box marginTop={5}>
            
              <img src={close} alt="Title" style={{ height: "18px" }} />
                        
          </Box>
          <Box marginTop={5}>
            
              <img src={close} alt="Title" style={{ height: "18px" }} />
                        
          </Box>
          <Box marginTop={5}>
            
              <img src={close} alt="Title" style={{ height: "18px" }} />
                        
          </Box>
          <Box marginTop={5}>
            
              <img src={close} alt="Title" style={{ height: "18px" }} />
                        
          </Box>
          <Box marginTop={5}>
            
              <img src={close} alt="Title" style={{ height: "18px" }} />
                        
          </Box>
          <Box marginTop={5}>
            
              <img src={close} alt="Title" style={{ height: "18px" }} />
                        
          </Box>
          <Box marginTop={5}>
            
              <img src={close} alt="Title" style={{ height: "18px" }} />
                        
          </Box>
        </Grid>
        <Grid item xs={3} sm ={3} md={3} style={{ textAlign: "center" }}>
          <Box marginTop={10}>
          <Typography style = {{ fontSize: "30px", color: "White" }}>
              Libero
          </Typography>  
          </Box>
          <Box marginTop={5}>
          <Typography style = {{ fontSize: "20px", color: "White" }}> 
               158,893.59
          </Typography>             
          </Box>
          <Box marginTop={5}>
            <Typography style = {{ fontSize: "20px", color: "White" }}> 
              15%/25%
            </Typography>           
          </Box>
          <Box marginTop={5}>
            
              <img src={close} alt="Title" style={{ height: "18px" }} />
                        
          </Box>
          <Box marginTop={5}>
            
              <img src={close} alt="Title" style={{ height: "18px" }} />
                        
          </Box>
          <Box marginTop={5}>
            
              <img src={close} alt="Title" style={{ height: "18px" }} />
                        
          </Box>
          <Box marginTop={5}>
            
              <img src={close} alt="Title" style={{ height: "18px" }} />
                        
          </Box>
          <Box marginTop={5}>
            
              <img src={close} alt="Title" style={{ height: "18px" }} />
                        
          </Box>
          <Box marginTop={5}>
            
              <img src={close} alt="Title" style={{ height: "18px" }} />
                        
          </Box>
          <Box marginTop={5}>
            
              <img src={close} alt="Title" style={{ height: "18px" }} />
                        
          </Box>
          <Box marginTop={5}>
            
              <img src={close} alt="Title" style={{ height: "18px" }} />
                        
          </Box>
          <Box marginTop={5}>
            
              <img src={close} alt="Title" style={{ height: "18px" }} />
                        
          </Box>
          <Box marginTop={5}>
            
              <img src={close} alt="Title" style={{ height: "18px" }} />
                        
          </Box>
          <Box marginTop={5}>
            
              <img src={close} alt="Title" style={{ height: "18px" }} />
                        
          </Box>
          <Box marginTop={5}>
            
              <img src={close} alt="Title" style={{ height: "18px" }} />
                        
          </Box>
          <Box marginTop={5}>
            
              <img src={close} alt="Title" style={{ height: "18px" }} />
                        
          </Box>
        </Grid>
      </Grid>
      
      <Grid container justifyContent="center" alignItems="center">
        <Box marginTop={20}>
          <Typography style = {{fontSize: "60px", color: "White"}} marginBottom={2}>
            Social Media
          </Typography>
        </Box>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" marginBottom= {15}>
        <Grid item xs={3} sm ={3} md={3} style={{ textAlign: "center" }}>
        <Box marginTop={15}>
            
            <img src={twitter} alt="Title" style={{ height: "90px" }} />
                      
        </Box>
        </Grid>
        <Grid item xs={3} sm ={3} md={3} style={{ textAlign: "center" }}>
          <Box marginTop= {15}>
              
              <img src={discord} alt="Title" style={{ height: "90px" }} />
                        
          </Box>
        </Grid>
        <Grid item xs={3} sm ={3} md={3} style={{ textAlign: "center" }}>
          <Box marginTop={15}>
            
            <img src={github} alt="Title" style={{ height: "90px", color:"white" }} />
                      
          </Box>
        </Grid>
        <Grid item xs={3} sm ={3} md={3} style={{ textAlign: "center" }}>
          <Box marginTop={15}>
            
            <img src={medium} alt="Title" style={{ height: "90px" }} />
                      
          </Box>
        </Grid>
      </Grid>
      <Box marginTop = {20}>

      </Box>
    </>
  );
}

export default ConnectMenu;

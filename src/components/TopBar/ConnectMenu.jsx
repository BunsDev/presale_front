import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Box, Button, Typography, Paper, Divider, Link, Grid } from "@material-ui/core";
import { useAddress, useWeb3Context } from "src/hooks/web3Context";
import logo from "./logo.png";
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
        sx={{ width: "100%", height: "60px", backgroundColor: "white", paddingRight: "70px" }}
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
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={8} md={6} style={{ textAlign: "center" }}>
          {/* <Box marginTop={10}>
          {totalLeft === 0 && <Typography style={{color: "red"}} variant="h1">Sold Out</Typography>}
            <img src={title} alt="Title" style={{ height: "250px" }} />
          </Box> */}
          <Box marginTop={5}>
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
        </Grid>
      </Grid>
    </>
  );
}

export default ConnectMenu;

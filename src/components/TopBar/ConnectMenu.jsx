import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Box, Button, Typography, Paper, Divider, Link, Grid } from "@material-ui/core";
import { useAddress, useWeb3Context } from "src/hooks/web3Context";
import logo from "./logo.png";
import title from "./title.png";
import { abi as vnoSale } from "../../abi/VNOSale.json";
import { abi as daiABI } from "../../abi/DAI.json";
import { info } from "../../slices/MessagesSlice";

const devAddress = "0xaF9Ce5fbC97cdA0B3287d1043Dfba36edE47bBc3";
const lbeAddress = "0xD8a7F51eF8a4c7011166D5fABcf4f751d084b7a7";
const daiAddress = "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E";

let timeInterval;

function ConnectMenu() {
  const { connect, disconnect, hasCachedProvider, provider, chainID, connected, uri } = useWeb3Context();
  const address = useAddress();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isConnected, setConnected] = useState(connected);
  const [startStatus, setStartStatus] = useState(false);
  const [approveStatus, setApproveStatus] = useState(false);
  const [depositStatus, setDepositStatus] = useState(false);
  const [claimStatus, setClaimStatus] = useState(false);
  const [totalLeft, setTotalLeft] = useState(600);

  let buttonText = "Connect Wallet";
  let clickFunc = connect;

  // const lbeContract = new ethers.Contract(lbeAddress, vnoSale, provider);

  if (isConnected) {
    buttonText = "Disconnect";
    clickFunc = disconnect;
  }

  useEffect(() => {
    setConnected(connected);
  }, [web3, connected]);

  const handleApprove = async () => {
    const daiContract = new ethers.Contract(daiAddress, daiABI, provider.getSigner());
    try {
      const res = await daiContract.approve(lbeAddress, "500000000000000000000");
      if (res) window.alert("approve success");
      else window.alert("approve failed");
    } catch (err) {
      console.log("err:", err);
    }
  };

  const handleDeposit = async () => {
    const lbeContract = new ethers.Contract(lbeAddress, vnoSale, provider.getSigner());
    try {
      const res = await lbeContract.deposite();
      console.log("res:", res);
      window.alert("deposite success");
    } catch (err) {
      console.log("err:", err);
    }
  };

  const handleClaim = async () => {
    const lbeContract = new ethers.Contract(lbeAddress, vnoSale, provider.getSigner());
    try {
      await lbeContract.claim();
      window.alert("deposite success");
    } catch (err) {
      console.log("err:", err);
    }
  };

  const handleStart = async () => {
    const lbeContract = new ethers.Contract(lbeAddress, vnoSale, provider.getSigner());
    try {
      await lbeContract.setStart();
      window.alert("Liquidity Bootstrap Event started");
    } catch (err) {
      console.log("err:", err);
    }
  };

  const handleEnd = async () => {
    const lbeContract = new ethers.Contract(lbeAddress, vnoSale, provider.getSigner());
    try {
      await lbeContract.endStart();
      window.alert("Liquidity Bootstrap Event finished");
    } catch (err) {
      console.log("err:", err);
    }
  };

  const app = async () => {
    console.log("data fetch");
    const lbeContract = new ethers.Contract(lbeAddress, vnoSale, provider.getSigner());
    const daiContract = new ethers.Contract(daiAddress, daiABI, provider.getSigner());
    try {
      const left = await lbeContract.left_elements();
      const res = await lbeContract.getStatus();
      const appSta = await daiContract.allowance(address, lbeAddress);
      const addSta = await lbeContract.getAddressStatus();
      setStartStatus(res);
      setTotalLeft(Number(left));
      if (Number(left) === 0) {
        if(addSta === 1) {
          setApproveStatus(true);
          setDepositStatus(true);
          setClaimStatus(false);
        }
        else {
          setApproveStatus(true);
          setDepositStatus(true);
          setClaimStatus(true);
        }
      } else {
        if (!res) {
          setApproveStatus(true);
          setDepositStatus(true);
          setClaimStatus(true);
        } else {
          if (Number(appSta) > 0) {
            setApproveStatus(true);
            setDepositStatus(false);
            setClaimStatus(true);
          } else if (addSta === 0) {
            setApproveStatus(false);
            setDepositStatus(true);
            setClaimStatus(true);
          } else if (addSta === 1) {
            setApproveStatus(true);
            setDepositStatus(true);
            setClaimStatus(false);
          } else {
            setApproveStatus(true);
            setDepositStatus(true);
            setClaimStatus(true);
          }
        }
      }
    } catch (err) {
      console.log("error: ", err);
      // window.alert("Error occured");
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
      setApproveStatus(true);
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
          <img src={logo} alt="Logo" style={{ width: "50px", height: "50px" }} />
        </Box>
        {address === devAddress && (
          <Box display="flex" alignItems="center" justifyContent="space-around" marginRight={5}>
            <Button
              variant="contained"
              color="success"
              size="large"
              disabled={startStatus}
              style={{
                backgroundColor: startStatus ? "#dddddd" : "#333333",
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
                backgroundColor: startStatus ? "#333333" : "#dddddd",
                borderRadius: "20px",
                color: "white",
                width: "160px",
              }}
              onClick={handleEnd}
            >
              End
            </Button>
          </Box>
        )}
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
          <Box marginTop={10}>
          {totalLeft === 0 && <Typography style={{color: "red"}} variant="h1">Sold Out</Typography>}
            <img src={title} alt="Title" style={{ height: "250px" }} />
          </Box>
          <Box marginTop={6} display="flex" justifyContent="space-around">
            <Button
              variant="contained"
              color="success"
              disabled={approveStatus}
              style={{
                backgroundColor: approveStatus ? "#dddddd" : "#001bc8",
                borderRadius: "20px",
                color: "white",
                width: "150px",
              }}
              onClick={handleApprove}
            >
              Approve DAI
            </Button>
            <Button
              variant="contained"
              color="success"
              disabled={depositStatus}
              style={{
                backgroundColor: depositStatus ? "#dddddd" : "#001bc8",
                borderRadius: "20px",
                color: "white",
                width: "150px",
              }}
              onClick={handleDeposit}
            >
              Deposit
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
        </Grid>
      </Grid>
    </>
  );
}

export default ConnectMenu;

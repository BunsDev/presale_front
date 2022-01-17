import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Social from "./Social";
import externalUrls from "./externalUrls";
import { ReactComponent as StakeIcon } from "../../assets/icons/stake.svg";
import { ReactComponent as BondIcon } from "../../assets/icons/bond.svg";
import { ReactComponent as GlobeIcon } from "../../assets/icons/globe.svg";
import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard.svg";
import { ReactComponent as WrapIcon } from "../../assets/icons/wrap.svg";
// import { ReactComponent as HectorIcon } from "../../assets/icons/logo.svg";
import logo from './logo.png';
import { trim, shorten } from "../../helpers";
import { useAddress, useWeb3Context } from "src/hooks/web3Context";
import useBonds from "../../hooks/Bonds";
import { Paper, Link, Box, Typography, SvgIcon } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import "./sidebar.scss";

function NavContent() {
  const [isActive] = useState();
  const address = useAddress();
  const { bonds } = useBonds();
  const { chainID } = useWeb3Context();
  const stakingRebase = useSelector(state => {
    return state.app.stakingRebase;
  });
  const stakingRebasePercentage = stakingRebase * 1200;

  const checkPage = useCallback((match, location, page) => {
    const currentPath = location.pathname.replace("/", "");
    if (currentPath.indexOf("dashboard") >= 0 && page === "dashboard") {
      return true;
    }
    if (currentPath.indexOf("stake") >= 0 && page === "stake") {
      return true;
    }
    if (currentPath.indexOf("wrap") >= 0 && page === "wrap") {
      return true;
    }
    if (currentPath.indexOf("calculator") >= 0 && page === "calculator") {
      return true;
    }
    if ((currentPath.indexOf("bonds") >= 0 || currentPath.indexOf("choose_bond") >= 0) && page === "bonds") {
      return true;
    }
    return false;
  }, []);

  return (
    <Paper className="dapp-sidebar">
      <Box className="dapp-sidebar-inner" display="flex" justifyContent="space-between" flexDirection="column">
        <div className="dapp-menu-top">
          <Box className="branding-header">
            <Link href="https://app.hectordao.com" target="_blank">
              <img
                src={logo}
                alt='Logo'
                style={{ minWdth: "151px", minHeight: "98px", width: "151px" }}
              />
              <div className="wallet-link f-32">VENOS</div>
            </Link>
            {address && (
              <div className="wallet-link">
                <Link href={`https://ftmscan.com/address/${address}`} target="_blank">
                  {shorten(address)}
                </Link>
              </div>
            )}
          </Box>

          <div className="dapp-menu-links">
            <div className="dapp-nav" id="navbarNav">
              <Link
                component={NavLink}
                id="dash-nav"
                to="/dashboard"
                isActive={(match, location) => {
                  return checkPage(match, location, "dashboard");
                }}
                className={`button-dapp-menu ${isActive ? "active" : ""}`}
              >
                <Typography variant="h6">
                  <SvgIcon color="primary" component={DashboardIcon} />
                  Dashboard
                </Typography>
              </Link>

              <Link
                component={NavLink}
                id="stake-nav"
                to="/"
                isActive={(match, location) => {
                  return checkPage(match, location, "stake");
                }}
                className={`button-dapp-menu ${isActive ? "active" : ""}`}
              >
                <Typography variant="h6">
                  <SvgIcon color="primary" component={StakeIcon} />
                  Stake
                </Typography>
              </Link>

              <Link
                component={NavLink}
                id="wrap-nav"
                to="/wrap"
                isActive={(match, location) => {
                  return checkPage(match, location, "wrap");
                }}
                className={`button-dapp-menu ${isActive ? "active" : ""}`}
              >
                <Typography variant="h6">
                  <SvgIcon color="primary" component={WrapIcon} />
                  Wrap
                </Typography>
              </Link>

              <Link
                component={NavLink}
                id="bond-nav"
                to="/bonds"
                isActive={(match, location) => {
                  return checkPage(match, location, "bonds");
                }}
                className={`button-dapp-menu ${isActive ? "active" : ""}`}
              >
                <Typography variant="h6">
                  <SvgIcon color="primary" component={BondIcon} />
                  Bond
                </Typography>
              </Link>

              {/* <div className="dapp-menu-data discounts">
                <div className="bond-discounts">
                  <Typography variant="body2">Bond ROI (4 days)</Typography>
                  {bonds
                    .filter(bond => bond.isFour)
                    .map((bond, i) => (
                      <Link component={NavLink} to={`/bonds/${bond.name}`} key={i} className={"bond"}>
                        {!bond.bondDiscount ? (
                          <Skeleton variant="text" width={"150px"} />
                        ) : (
                          <Typography variant="body2">
                            {bond.isFour ? bond.displayName + " (4, 4)" : bond.displayName}
                            <span className="bond-pair-roi">
                              {bond.isSoldOut ? (
                                "Sold Out"
                              ) : (
                                <>{bond.bondDiscount && trim(bond.bondDiscount * 100 + stakingRebasePercentage, 2)}%</>
                              )}
                            </span>
                          </Typography>
                        )}
                      </Link>
                    ))}
                  <Typography variant="body2" style={{ paddingTop: "16px" }}>
                    Bond ROI (5 days)
                  </Typography>
                  {bonds
                    .filter(bond => !bond.isFour)
                    .map((bond, i) => (
                      <Link component={NavLink} to={`/bonds/${bond.name}`} key={i} className={"bond"}>
                        {!bond.bondDiscount ? (
                          <Skeleton variant="text" width={"150px"} />
                        ) : (
                          <Typography variant="body2">
                            {bond.isFour ? bond.displayName + " (4, 4)" : bond.displayName}
                            <span className="bond-pair-roi">
                              {bond.isSoldOut ? (
                                "Sold Out"
                              ) : (
                                <>{bond.bondDiscount && trim(bond.bondDiscount * 100, 2)}%</>
                              )}
                            </span>
                          </Typography>
                        )}
                      </Link>
                    ))}
                </div>
              </div> */}
              <Link
                component={NavLink}
                id="calc-nav"
                to="/calculator"
                isActive={(match, location) => {
                  return checkPage(match, location, "calculator");
                }}
                className={`button-dapp-menu ${isActive ? "active" : ""}`}
              >
                <Typography variant="h6">
                  <SvgIcon color="primary" component={GlobeIcon} viewBox="0 0 24 24"/>
                  Calculator
                </Typography>
              </Link>
            </div>
          </div>
        </div>
        <Box className="dapp-menu-bottom" display="flex" justifyContent="space-between" flexDirection="column">
          <div className="dapp-menu-external-links">
            {externalUrls.map(({ url, icon, title, label }, i) => {
              return (
                <Link key={i} href={url} target="_blank" component={url ? "a" : "span"}>
                  <Typography variant="h6">{icon}</Typography>
                  <Typography variant="h6">{title}</Typography>
                  {label ? (
                    <Typography variant="caption" style={{ marginLeft: "8px" }}>
                      {label}
                    </Typography>
                  ) : null}
                </Link>
              );
            })}
          </div>
          <div className="dapp-menu-social">
            <Social />
          </div>
        </Box>
      </Box>
    </Paper>
  );
}

export default NavContent;

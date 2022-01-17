import { useSelector } from "react-redux";
import { trim } from "../../helpers";
import BondLogo from "../../components/BondLogo";
import { Box, Button, Link, Paper, Typography, TableRow, TableCell, SvgIcon, Slide } from "@material-ui/core";
import { ReactComponent as ArrowUp } from "../../assets/icons/arrow-up.svg";
import { NavLink } from "react-router-dom";
import "./choosebond.scss";
import { Skeleton } from "@material-ui/lab";
import useBonds from "src/hooks/Bonds";

export function BondDataCard({ bond }) {
  const { loading } = useBonds();
  const isBondLoading = !bond.bondPrice ?? true;
  const isSoldOut = bond.isSoldOut;
  const btnVarient = isSoldOut ? "contained" : "outlined";
  let displayName = bond.displayName;
  let isFour = false;
  let discount = bond.bondDiscount * 100;
  const stakingRebase = useSelector(state => {
    return state.app.stakingRebase;
  });
  const stakingRebasePercentage = stakingRebase * 1200;
  if (bond.isFour) {
    // displayName += " (4, 4)";
    isFour = true;
    discount += stakingRebasePercentage;
  }
  return (
    <Slide direction="up" in={true}>
      <Paper id={`${bond.name}--bond`} className="bond-data-card hec-card">
        <div className="bond-pair">            
          <BondLogo bond={bond} />
          <div className="bond-name">
            <Typography>{displayName}</Typography>
            {bond.isLP && (
              <div>
                <Link href={bond.lpUrl} target="_blank">
                  <Typography variant="body1">
                    View Contract
                    <SvgIcon component={ArrowUp} htmlColor="#A3A3A3" />
                  </Typography>
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="data-row">
          <Typography>Price</Typography>
          <Typography className="bond-price">
            <>{isBondLoading ? <Skeleton width="50px" /> : isSoldOut ? "--" : trim(bond.bondPrice, 2)}</>
          </Typography>
        </div>

        <div className="data-row">
          <Typography>ROI</Typography>
          <Typography style={{ textAlign: "right" }}>
            {isBondLoading ? <Skeleton width="50px" /> : isSoldOut ? "--" : `${trim(discount, 2)}%`}
            {isFour && !isBondLoading && (
              <Typography variant="body2" style={{ color: "#ff9900", fontSize: "11px", paddingTop: "4px" }}>
                ({trim(stakingRebasePercentage, 2)}% from Rebase INCLUDED)
              </Typography>
            )}
          </Typography>
        </div>

        <div className="data-row">
          <Typography>Purchased</Typography>
          <Typography>
            {isBondLoading ? (
              <Skeleton width="80px" />
            ) : (
              new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
              }).format(bond.purchased)
            )}
          </Typography>
        </div>
        {isSoldOut ? (
          <Button variant="contained" disabled={isSoldOut} style={{ width: "100%" }}>
            <Typography variant="h6">Sold Out</Typography>
          </Button>
        ) : (
          <Link component={NavLink} to={`/bonds/${bond.name}`}>
            <Button variant={btnVarient} color="primary" fullWidth>
              <Typography variant="h6">Bond {bond.displayName}</Typography>
            </Button>
          </Link>
        )}
      </Paper>
    </Slide>
  );
}

export function BondTableData({ bond }) {
  // Use BondPrice as indicator of loading.
  let isBondLoading = !bond.bondPrice ?? true;
  // const isBondLoading = useSelector(state => !state.bonding[bond]?.bondPrice ?? true);
  const isSoldOut = bond.isSoldOut;
  if (isSoldOut) {
    isBondLoading = false;
  }
  const btnVarient = isSoldOut ? "contained" : "outlined";
  let displayName = bond.displayName;
  let isFour = false;
  const stakingRebase = useSelector(state => {
    return state.app.stakingRebase;
  });
  const stakingRebasePercentage = stakingRebase * 1200;
  let discount = bond.bondDiscount * 100;
  // console.log("stakingRebasePercentage", stakingRebasePercentage);
  if (bond.isFour) {
    // displayName += " (4, 4)";
    isFour = true;
    discount += stakingRebasePercentage;
  }
  return (
    <TableRow id={`${bond.name}--bond`}>
      <TableCell align="left" className="bond-name-cell">
        <BondLogo bond={bond} />
        <div className="bond-name">
          <Typography variant="body1">{displayName}</Typography>
          {bond.isLP && (
            <Link color="primary" href={bond.lpUrl} target="_blank">
              <Typography variant="body1">
                View Contract
                <SvgIcon component={ArrowUp} htmlColor="#A3A3A3" />
              </Typography>
            </Link>
          )}
        </div>
      </TableCell>
      <TableCell align="left">
        <Typography>
          {isSoldOut ? (
            "--"
          ) : (
            <>
              <span className="currency-icon">$</span>
              {isBondLoading ? <Skeleton width="50px" /> : trim(bond.bondPrice, 2)}
            </>
          )}
        </Typography>
      </TableCell>
      <TableCell align="left">
        {isSoldOut ? "--" : <>{isBondLoading ? <Skeleton /> : `${trim(discount, 2)}%`}</>}
        {isFour && !isBondLoading && (
          <Typography variant="body2" style={{ color: "#ff9900", fontSize: "11px", paddingTop: "4px" }}>
            ({trim(stakingRebasePercentage, 2)}% from Rebase INCLUDED)
          </Typography>
        )}
      </TableCell>
      <TableCell align="right">
        {isBondLoading ? (
          <Skeleton />
        ) : (
          new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          }).format(bond.purchased)
        )}
      </TableCell>
      <TableCell>
        {isSoldOut ? (
          <Button variant={btnVarient} color="primary" disabled={isSoldOut}>
            <Typography variant="h6">Sold Out</Typography>
          </Button>
        ) : (
          <Link component={NavLink} to={`/bonds/${bond.name}`}>
            <Button variant={btnVarient} color="primary">
              <Typography variant="h6">Bond</Typography>
            </Button>
          </Link>
        )}
      </TableCell>
    </TableRow>
  );
}

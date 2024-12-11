// material-ui
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeMode } from "config";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import MonetizationOnTwoToneIcon from "@mui/icons-material/MonetizationOnTwoTone";
import AccountCircleTwoTone from "@mui/icons-material/AccountCircleTwoTone";
import Typography from "@mui/material/Typography";

import { gridSpacing } from "store/constant";

// project imports
import LatestMessages from "./LatestMessages";
import ProjectTable from "./ProjectTable";
import ApplicationSales from "./ApplicationSales";
import LatestOrder from "./LatestOrder";
import IncomingRequests from "./IncomingRequests";
import NewCustomers from "./NewCustomers";
import EarningCard from "./EarningCard";
import TotalOrderLineChartCard from "./TotalOrderLineChartCard";
import TotalGrowthBarChart from "./TotalGrowthBarChart";
import TotalRevenueCard from "./TotalRevenueCard";
import MarketShareAreaChartCard from "./MarketShareAreaChartCard";

//ui-components
import MainCard from "ui-component/cards/MainCard";
import RevenueCard from "ui-component/cards/RevenueCard";
import TotalIncomeDarkCard from "ui-component/cards/TotalIncomeDarkCard";
import TotalIncomeLightCard from "ui-component/cards/TotalIncomeLightCard";

//assets
import {
  IconShare,
  IconAccessPoint,
  IconCircles,
  IconCreditCard,
} from "@tabler/icons-react";


// ===========================|| WIDGET DATA ||=========================== //

const Widget = () => {
  const [isLoading, setLoading] = useState(true);
  const theme = useTheme();
  const blockSX = {
    p: 2.5,
    borderLeft: "1px solid ",
    borderBottom: "1px solid ",
    borderLeftColor:
      theme.palette.mode === ThemeMode.DARK ? "dark.main" : "grey.200",
    borderBottomColor:
      theme.palette.mode === ThemeMode.DARK ? "dark.main" : "grey.200",
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeDarkCard isLoading={isLoading} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeLightCard
                  {...{
                    isLoading: isLoading,
                    total: 203,
                    label: "Total Income",
                    icon: <StorefrontTwoToneIcon fontSize="inherit" />,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={8} md={8}>
            <TotalGrowthBarChart isLoading={isLoading} />
          </Grid>

          <Grid item xs={4}>
            <TotalRevenueCard title="Total Revenue" />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} lg={6} md={6}>
        <MainCard title="Projects" content={false}>
          <CardContent sx={{ p: 0 }}>
            <ProjectTable />
          </CardContent>
          <Divider />
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button variant="text" size="small">
              View all Projects
            </Button>
          </CardActions>
        </MainCard>
      </Grid>

      <Grid item xs={12} md={5} lg={6}>
        <LatestMessages />
      </Grid>

      <Grid item xs={12} md={8}>
        <ApplicationSales />
      </Grid>

      <Grid item xs={12}>
        <LatestOrder />
      </Grid>

      <Grid item xs={12} lg={4} md={6}>
        <IncomingRequests />
      </Grid>

      <Grid item xs={12} lg={4} md={12}>
        <NewCustomers />
      </Grid>

      <Grid item xs={12}>
        <MarketShareAreaChartCard />
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} lg={8} md={6}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} lg={12}>
                <RevenueCard
                  primary="Revenue"
                  secondary="$42,562"
                  content="$50,032 Last Month"
                  iconPrimary={MonetizationOnTwoToneIcon}
                  color="secondary.main"
                />
              </Grid>
              <Grid item xs={12} lg={12}>
                <RevenueCard
                  primary="Orders Received"
                  secondary="486"
                  content="20% Increase"
                  iconPrimary={AccountCircleTwoTone}
                  color="primary.main"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} md={6}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <MainCard
                  content={false}
                  sx={{
                    "& svg": {
                      width: 50,
                      height: 50,
                      color: "secondary.main",
                      borderRadius: "14px",
                      p: 1.25,
                      bgcolor:
                        theme.palette.mode === ThemeMode.DARK
                          ? "background.default"
                          : "primary.light",
                    },
                  }}
                >
                  <Grid container alignItems="center" spacing={0}>
                    <Grid item xs={12} sm={6} sx={blockSX}>
                      <Grid
                        container
                        alignItems="center"
                        spacing={1}
                        justifyContent={{ xs: "space-between", sm: "center" }}
                      >
                        <Grid item>
                          <IconShare stroke={1.5} />
                        </Grid>
                        <Grid item sm zeroMinWidth>
                          <Typography variant="h5" align="center">
                            1000
                          </Typography>
                          <Typography variant="subtitle2" align="center">
                            SHARES
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={blockSX}>
                      <Grid
                        container
                        alignItems="center"
                        spacing={1}
                        justifyContent={{ xs: "space-between", sm: "center" }}
                      >
                        <Grid item>
                          <IconAccessPoint stroke={1.5} />
                        </Grid>
                        <Grid item sm zeroMinWidth>
                          <Typography variant="h5" align="center">
                            600
                          </Typography>
                          <Typography variant="subtitle2" align="center">
                            NETWORK
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" spacing={0}>
                    <Grid item xs={12} sm={6} sx={blockSX}>
                      <Grid
                        container
                        alignItems="center"
                        spacing={1}
                        justifyContent={{ xs: "space-between", sm: "center" }}
                      >
                        <Grid item>
                          <IconCircles stroke={1.5} />
                        </Grid>
                        <Grid item sm zeroMinWidth>
                          <Typography variant="h5" align="center">
                            3550
                          </Typography>
                          <Typography variant="subtitle2" align="center">
                            RETURNS
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={blockSX}>
                      <Grid
                        container
                        alignItems="center"
                        spacing={1}
                        justifyContent={{ xs: "space-between", sm: "center" }}
                      >
                        <Grid item>
                          <IconCreditCard stroke={1.5} />
                        </Grid>
                        <Grid item sm zeroMinWidth>
                          <Typography variant="h5" align="center">
                            100%
                          </Typography>
                          <Typography variant="subtitle2" align="center">
                            ORDER
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </MainCard>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Widget;

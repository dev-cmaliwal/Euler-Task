import { useState, useEffect } from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Card from "@material-ui/core/Card";
import PairInformationGraph from "../PairInformationGraph";
import TabPanel from "@material-ui/lab/TabPanel";
import TabContext from "@material-ui/lab/TabContext";
import PairOverview from "../PairInformationOverview";
import PairInformationSwapData from "../PairInformationSwapData";
import { GraphData, PairData, PastSwap } from "../../interfaces";
import {
  getPairData,
  getRecentSwapDetails,
  getUniswapStatisctics,
} from "../../utilities/GQL";
import { useStyles } from "./style";

const PairInformationCard = () => {
  const styles = useStyles();
  const [activeTab, setActiveTab] = useState("pairOverview");
  const [pairData, setPairData] = useState<PairData>();
  const [swapData, setSwapData] = useState<Array<PastSwap>>([]);
  const [graphData, setGraphData] = useState<Array<GraphData>>([]);
  const fetchData = async () => {
    const dailyData = await getUniswapStatisctics();
    const pairOverViewData = await getPairData();
    const pastSwapData = await getRecentSwapDetails();
    setGraphData(dailyData);
    setPairData(pairOverViewData);
    setSwapData(pastSwapData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (newValue: string) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <Card variant="outlined" className={"bg-tertiary " + styles.container}>
        <TabContext value={activeTab}>
          <Tabs
            value={activeTab}
            onChange={(e, newValue) => handleChange(newValue)}
            aria-label="wrapped label tabs"
          >
            <Tab value="pairOverview" label="PAIR OVERVIEW" wrapped />
            <Tab value="dailyData" label="DAILY DATA" wrapped />
            <Tab value="pastSwaps" label="PAST SWAPS" wrapped />
          </Tabs>
          <TabPanel value={"pairOverview"} className={styles.tabPanel}>
            <PairOverview data={pairData} />
          </TabPanel>
          <TabPanel value={"dailyData"} className={styles.tabPanel}>
            <PairInformationGraph data={graphData} />
          </TabPanel>
          <TabPanel value={"pastSwaps"} className={styles.tabPanel}>
            <PairInformationSwapData data={swapData} />
          </TabPanel>
        </TabContext>
      </Card>
    </>
  );
};

export default PairInformationCard;

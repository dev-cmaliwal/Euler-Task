import { useState, useEffect } from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import PairInformationGraph from "../PairInformationGraph";
import TabPanel from "@material-ui/lab/TabPanel";
import TabContext from "@material-ui/lab/TabContext";
import { GraphData, PairData, PastSwap } from "../../interfaces";
import { GRAPH_DUMMY_DATA } from "./data/graphData";
import { PAIR_DUMMY_DATA } from "./data/pairData";
import PairOverview from "../PairInformationOverview";
import { SWAP_DUMMY_DATA } from "./data/pastSwapData";
import PairInformationSwapData from "../PairInformationSwapData";
import { useStyles } from "./style";

const PairInformationCard = () => {
  const styles = useStyles();
  const [activeTab, setActiveTab] = useState("pairOverview");
  const [pairData, setPairData] = useState<PairData>();
  const [swapData, setSwapData] = useState<Array<PastSwap>>([]);
  const [graphData, setGraphData] = useState<Array<GraphData>>([]);
  const fetchData = () => {
    setGraphData(GRAPH_DUMMY_DATA);
    setPairData(PAIR_DUMMY_DATA);
    setSwapData(SWAP_DUMMY_DATA);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (newValue: string) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <Box>
        <Card variant="outlined" className="bg-tertiary">
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
      </Box>
    </>
  );
};

export default PairInformationCard;
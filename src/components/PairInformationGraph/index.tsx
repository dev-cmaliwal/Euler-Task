import React, { useMemo } from "react";
import moment from "moment";
import Box from "@material-ui/core/Box";
import {
  Tooltip,
  AreaChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Area,
  CartesianGrid,
} from "recharts";
import { GraphData } from "../../interfaces";
import { useStyles } from "./styles";

interface Props {
  data: Array<GraphData>;
}

const PairInformationGraph: React.FC<Props> = ({ data }) => {
  const styles = useStyles();

  const graphData = useMemo(
    () =>
      data
        ?.map((item) => {
          return {
            name: moment(item.date * 1000)
              .toISOString()
              .split("T")[0],
            value: parseFloat(item.dailyVolumeUSD),
          };
        })
        .reverse(),
    [data]
  );

  return (
    <Box className={styles.container}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          data={graphData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3" vertical={false} />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis axisLine={false} tick={{ fontSize: 12 }} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#f50057"
            fill="#f50057"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default PairInformationGraph;

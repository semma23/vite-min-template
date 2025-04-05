import "@mantine/core/styles.css";
import { Grid, MantineProvider, SimpleGrid } from "@mantine/core";
import { theme } from "./theme";
import '@mantine/charts/styles.css';
import SexPieChart from "./charts/SexPieChart/SexPieChart";
import OrganizationalUnitDonutChart from "./charts/OrganizationalUnit/OrganizationalUnitDonutChart";
import PositionPieChart from "./charts/Position/PositionPieChart";

export default function App() {
  return <MantineProvider theme={theme}>
      <Grid p={10}>
        <Grid.Col span={3}>
          <SexPieChart /> 
        </Grid.Col>
        <Grid.Col span={3}>
          <OrganizationalUnitDonutChart />
        </Grid.Col>
        <Grid.Col span={6}>
          <PositionPieChart />
        </Grid.Col>
      </Grid>
    </MantineProvider>;
}

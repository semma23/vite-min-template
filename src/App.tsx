import "@mantine/core/styles.css";
import { Grid, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import '@mantine/charts/styles.css';
import '@mantine/dates/styles.css';
import SexPieChart from "./charts/SexPieChart/SexPieChart";
import OrganizationalUnitDonutChart from "./charts/OrganizationalUnit/OrganizationalUnitDonutChart";
import PositionPieChart from "./charts/Position/PositionPieChart";
import FilterCard from "./filters/FilterCard";
import MultipleSexBarChart from "./charts/SexPieChart/MultipleSexBarChart";
import AgeNumbers from "./charts/Age/AgeNumbers";

export default function App() {
  return <MantineProvider theme={theme}>
      <Grid p={10}>
        <Grid.Col>
          <FilterCard />
        </Grid.Col>
        <Grid.Col span={3}>
          <SexPieChart /> 
        </Grid.Col>
        <Grid.Col span={3}>
          <OrganizationalUnitDonutChart />
        </Grid.Col>
        <Grid.Col span={6}>
          <PositionPieChart />
        </Grid.Col>
        <Grid.Col span={6}>
          <MultipleSexBarChart />
        </Grid.Col>
        <Grid.Col span={3}>
          <AgeNumbers />
        </Grid.Col>
      </Grid>
    </MantineProvider>;
}

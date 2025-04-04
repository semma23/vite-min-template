import "@mantine/core/styles.css";
import { MantineProvider, SimpleGrid } from "@mantine/core";
import { theme } from "./theme";
import '@mantine/charts/styles.css';
import SexPieChart from "./charts/SexPieChart/SexPieChart";
import OrganizationalUnitDonutChart from "./charts/OrganizationalUnit/OrganizationalUnitDonutChart";

export default function App() {
  return <MantineProvider theme={theme}>
      <SimpleGrid p={10} cols={5}>
        <SexPieChart />
        <OrganizationalUnitDonutChart />
      </SimpleGrid>
    </MantineProvider>;
}

import "@mantine/core/styles.css";
import { Grid, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import '@mantine/charts/styles.css';
import '@mantine/dates/styles.css';
import Dashboard from "./pages/Dashboard";
import FilterCard from "./filters/FilterCard";

export default function App() {
  return <MantineProvider theme={theme}>
    <Grid p={10}>
        <Grid.Col>
          <FilterCard />
        </Grid.Col>
        <Grid.Col>
          <Dashboard />
        </Grid.Col>
    </Grid>
        
    </MantineProvider>;
}

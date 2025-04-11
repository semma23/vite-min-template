import { Grid, MantineProvider } from "@mantine/core";
import AgeNumbers from "../charts/Age/AgeNumbers";
import OrganizationalUnitDonutChart from "../charts/OrganizationalUnit/OrganizationalUnitDonutChart";
import PositionPieChart from "../charts/Position/PositionPieChart";
import MultipleSexBarChart from "../charts/SexPieChart/MultipleSexBarChart";
import SexPieChart from "../charts/SexPieChart/SexPieChart";
import { themeForCharts } from "../theme-charts";

const Dashboard = () => {
    return (
        <MantineProvider theme={themeForCharts}>
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
                <Grid.Col span={6}>
                    <MultipleSexBarChart />
                </Grid.Col>
                <Grid.Col span={3}>
                    <AgeNumbers />
                </Grid.Col>
            </Grid>
        </MantineProvider>
    )
}

export default Dashboard;
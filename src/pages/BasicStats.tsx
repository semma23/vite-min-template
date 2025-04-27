import { Grid, Stack } from "@mantine/core"
import SexPieChart from "../charts/SexPieChart/SexPieChart"
import AgeNumbers from "../charts/Age/AgeNumbers"
import OrganizationalUnitDonutChart from "../charts/OrganizationalUnit/OrganizationalUnitDonutChart"
import MultipleSexBarChart from "../charts/SexPieChart/MultipleSexBarChart"
import StatCard from "../components/StatCard"
import { IconFriends, IconHierarchy3 } from "@tabler/icons-react"
import OrgUnitMultiple from "../charts/OrganizationalUnit/OrgUnitMultiple"

const BasicStats = () => {
    const borderColor = "#339af0";
    const gridHeight = 490;

    return (
        <Grid p={10}>
            <Grid.Col span={3} h={gridHeight}>
                <StatCard 
                    chart={<SexPieChart />}
                    icon={<IconFriends stroke={2} style={{marginRight: 5}}/>}
                    title="Nemek aránya"
                    borderColor={borderColor}
                />
            </Grid.Col>
            <Grid.Col span={3} h={gridHeight}>
                <StatCard 
                    chart={<OrganizationalUnitDonutChart />}
                    icon={<IconHierarchy3 stroke={2} style={{marginRight: 5}}/>}
                    title="Nemek aránya"
                    borderColor={borderColor}
                />
            </Grid.Col>
            <Grid.Col span={6} h={gridHeight}>
                <StatCard 
                    chart={<MultipleSexBarChart />}
                    icon={<IconFriends stroke={2} style={{marginRight: 5}}/>}
                    title="Nemek aránya"
                    borderColor={borderColor}    
                />
            </Grid.Col>
            <Grid.Col span={6} h={gridHeight}>
                <StatCard 
                    chart={<OrgUnitMultiple />}
                    icon={<IconFriends stroke={2} style={{marginRight: 5}}/>}
                    title="Nemek aránya"
                    borderColor={borderColor}    
                />
            </Grid.Col>
            <Grid.Col span={3} h={gridHeight}>
                <Stack
                    h="100%"
                    bg="var(--mantine-color-body)"
                    align="stretch"
                    justify="space-between"
                    gap="md"
                >
                    <StatCard 
                        chart={<AgeNumbers />}
                        icon={<IconFriends stroke={2} style={{marginRight: 5}}/>}
                        title="Nemek aránya"
                        borderColor={borderColor}    
                    />
                    <StatCard 
                        chart={<AgeNumbers />}
                        icon={<IconFriends stroke={2} style={{marginRight: 5}}/>}
                        title="Nemek aránya"
                        borderColor={borderColor}    
                    />
                </Stack>
            </Grid.Col>
            <Grid.Col span={3} h={gridHeight}>
                <StatCard 
                    chart={<MultipleSexBarChart />}
                    icon={<IconFriends stroke={2} style={{marginRight: 5}}/>}
                    title="Nemek aránya"
                    borderColor={borderColor}    
                />
            </Grid.Col>
        </Grid>
    )
};

export default BasicStats;
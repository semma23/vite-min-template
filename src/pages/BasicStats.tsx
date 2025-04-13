import { Grid } from "@mantine/core"
import SexPieChart from "../charts/SexPieChart/SexPieChart"
import AgeNumbers from "../charts/Age/AgeNumbers"
import OrganizationalUnitDonutChart from "../charts/OrganizationalUnit/OrganizationalUnitDonutChart"
import PositionPieChart from "../charts/Position/PositionPieChart"
import MultipleSexBarChart from "../charts/SexPieChart/MultipleSexBarChart"
import StatCard from "../components/StatCard"
import { IconFriends, IconHierarchy3, IconLayoutCollage } from "@tabler/icons-react"

const BasicStats = () => {
    const borderColor = "#339af0";

    return (
        <Grid p={10}>
            <Grid.Col span={3}>
                <StatCard 
                    chart={<SexPieChart />}
                    icon={<IconFriends stroke={2} style={{marginRight: 5}}/>}
                    title="Nemek aránya"
                    borderColor={borderColor}
                />
            </Grid.Col>
            <Grid.Col span={3}>
                <StatCard 
                    chart={<OrganizationalUnitDonutChart />}
                    icon={<IconHierarchy3 stroke={2} style={{marginRight: 5}}/>}
                    title="Nemek aránya"
                    borderColor={borderColor}
                />
            </Grid.Col>
            <Grid.Col span={6}>
                <StatCard 
                    chart={<PositionPieChart />}
                    icon={<IconLayoutCollage stroke={2} style={{marginRight: 5}}/>}
                    title="Nemek aránya"
                    borderColor={borderColor}
                />
            </Grid.Col>
            <Grid.Col span={6}>
                <StatCard 
                    chart={<MultipleSexBarChart />}
                    icon={<IconFriends stroke={2} style={{marginRight: 5}}/>}
                    title="Nemek aránya"
                    borderColor={borderColor}    
                />
            </Grid.Col>
            <Grid.Col span={3}>
                <AgeNumbers />
            </Grid.Col>
            <Grid.Col span={3}>
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
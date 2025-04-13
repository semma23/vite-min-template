import { Grid } from "@mantine/core"
import SexPieChart from "../charts/SexPieChart/SexPieChart"
import AgeNumbers from "../charts/Age/AgeNumbers"
import MultipleSexBarChart from "../charts/SexPieChart/MultipleSexBarChart"
import StatCard from "../components/StatCard"
import { IconFriends } from "@tabler/icons-react"

const SalaryStats = () => {
    const borderColor = "#51cf66";

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

export default SalaryStats;
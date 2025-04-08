import { PieChart } from "@mantine/charts";
import classes from "./SexPieChart.module.css";
import { Flex, Title, Card } from "@mantine/core";
import { IconFriends } from "@tabler/icons-react";

const SexPieChart = () => {
    const data = [
        { name: 'Female', value: 438, color: 'pink.6' },
        { name: 'Male', value: 600, color: 'blue.6' },
    ];

    return(
        <Card className={classes.root} shadow="md" withBorder radius="md" h={400}>
            <Card.Section p={10}>
                <Title order={5}><IconFriends stroke={2} /> Nemek aránya</Title>
            </Card.Section>
            <Flex
                p={10}
                gap="md"
                justify="center"
                align="center"
                direction="column"
            >
                <PieChart 
                    data={data}
                    withLabelsLine 
                    labelsPosition="outside" 
                    labelsType="percent" 
                    withLabels 
                    withTooltip
                />
            </Flex>
        </Card>
    )
}

export default SexPieChart;
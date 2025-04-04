import { PieChart } from "@mantine/charts";
import classes from "./SexPieChart.module.css";
import { Flex, Title, Card, Switch } from "@mantine/core";
import { IconFriends } from "@tabler/icons-react";
import { useState } from "react";

const SexPieChart = () => {
    const data = [
        { name: 'Female', value: 450, color: 'pink.6' },
        { name: 'Male', value: 438, color: 'violet.6' },
    ];

    const [checked, setChecked] = useState(false);

    return(
        <Card className={classes.root}>
            <Card.Section p={10}>
                <Title order={5}><IconFriends stroke={2} /> Nemek aránya</Title>
                <Switch
                    checked={checked}
                    onChange={(event) => setChecked(event.currentTarget.checked)}
                />
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
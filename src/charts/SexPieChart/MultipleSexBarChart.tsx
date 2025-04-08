import { BarChart } from "@mantine/charts";
import { Card, Title, Flex } from "@mantine/core";
import { IconFriends } from "@tabler/icons-react";

const data = [
    { date: '2024-Q1', Male: 500, Female: 650 },
    { date: '2024-Q2', Male: 455, Female: 560 },
    { date: '2024-Q3', Male: 600, Female: 440 },
    { date: '2024-Q4', Male: 500, Female: 600 },
];

const MultipleSexBarChart = () => {
    return (
        <Card shadow="md" withBorder radius="md" h={400}>
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
                <BarChart
                    h={300}
                    data={data}
                    dataKey="date"
                    type="percent"
                    withLegend
                    xAxisLabel="Időszak"
                    xAxisProps={{ padding: { left: 30, right: 30 } }}
                    tooltipAnimationDuration={200}
                    series={[
                        { name: 'Male', color: 'blue.6' },
                        { name: 'Female', color: 'pink.6' },
                    ]}
                />
            </Flex>
        </Card>
    )
}

export default MultipleSexBarChart
import { Card, Title, Flex, ActionIcon, Tooltip, Stack } from "@mantine/core";
import classes from "./StatCard.module.css";
import { JSX } from "react/jsx-dev-runtime";
import { IconDownload, IconInfoCircleFilled } from "@tabler/icons-react";
import ChartInfoTooltipContent from "./ChartInfoTooltipContent";

interface IStatCard {
    chart: JSX.Element;
    title: string;
    icon: JSX.Element;
    borderColor: string;
}

const testData = {
    isValid: true,
    missingValueCount: 60,
    totalValueCount: 200,
    result: []
}

const StatCard = (data: IStatCard) => {
    return (
        <Card className={classes.root} shadow="md" withBorder radius="md" h="100%" style={{borderTopColor: data.borderColor}}>
            <Stack
                h="100%"
                bg="var(--mantine-color-body)"
                align="stretch"
                justify="space-between"
                gap="md"
                >

            
            <Card.Section p={10}>
                <Flex align="center" direction="row" justify="space-between">
                    <Title order={5}>
                        {data.icon}
                        {data.title}
                    </Title>
                    <Tooltip
                         multiline
                         w={220}
                         withArrow
                         transitionProps={{ duration: 200 }}
                         label={<ChartInfoTooltipContent data={testData}/>}
                    >
                        <ActionIcon variant="transparent" color="gray" radius="xl" aria-label="Settings">
                            <IconInfoCircleFilled style={{ width: '70%', height: '70%' }} stroke={1.5} />
                        </ActionIcon>
                    </Tooltip>
                </Flex>
            </Card.Section>
            <Card.Section>
                <Flex
                    p={10}
                    gap="md"
                    justify="center"
                    align="center"
                    direction="column"
                >
                {data.chart}
                </Flex>
            </Card.Section>
            <Card.Section mb={5} mr={5}>
                <Flex align="flex-end" direction="row" justify="flex-end">
                    <Tooltip label="Felhasznált forrásadatok letöltése">
                        <ActionIcon variant="subtle" aria-label="Settings">
                            <IconDownload style={{ width: '70%', height: '70%' }} stroke={1.5} />
                        </ActionIcon>
                    </Tooltip>
                    <Tooltip label="Elemzésben nem szereplő forrásadatok letöltése">
                        <ActionIcon variant="subtle" aria-label="Settings" color="red">
                            <IconDownload style={{ width: '70%', height: '70%' }} stroke={1.5} />
                        </ActionIcon>
                    </Tooltip>
                </Flex>
            </Card.Section>
            </Stack>
        </Card>
    )
}

export default StatCard;
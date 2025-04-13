import { Card, Title, Flex, Group, ActionIcon, Tooltip } from "@mantine/core";
import classes from "./StatCard.module.css";
import { JSX } from "react/jsx-dev-runtime";
import { IconDownload } from "@tabler/icons-react";

interface IStatCard {
    chart: JSX.Element;
    title: string;
    icon: JSX.Element;
    borderColor: string;
}

const StatCard = (data: IStatCard) => {
    return (
        <Card className={classes.root} shadow="md" withBorder radius="md" h={400} style={{borderTopColor: data.borderColor}}>
            <Card.Section p={10}>
                <Flex align="center" direction="row" justify="space-between">
                    <Title order={5}>
                        {data.icon}
                        {data.title}
                    </Title>
                    <Group>
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
                    </Group>
                </Flex>
            </Card.Section>
            <Flex
                p={10}
                gap="md"
                justify="center"
                align="center"
                direction="column"
            >
               {data.chart}
            </Flex>
        </Card>
    )
}

export default StatCard;
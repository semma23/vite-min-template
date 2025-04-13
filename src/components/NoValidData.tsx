import { Alert, List } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

interface INoValidData {
    missingValuePercent: number;
    totalValue: number;
    missingValue: number
}

const NoValidData = (data: INoValidData) => {
    const icon = <IconInfoCircle />;
    
    return(
        <Alert variant="light" color="yellow" radius="xl" title="Túl sok hiányzó adat!" icon={icon}>
            A diagram megjelenítése nem lehetséges, mert az adatok {data.missingValuePercent}%-a hiányzik. Ha ennek ellenére mégis megtekintené a diagramot, kattintson ide.
            <List size="xs">
                <List.Item>Hiányzó adatok száma: {data.missingValue} elem</List.Item>
                <List.Item>Teljes adathalmaz mérete: {data.totalValue} elem</List.Item>

            </List>
        </Alert>
    )
}

export default NoValidData;
import { List } from "@mantine/core";
import { ChartDataBaseInterface } from "../interfaces/ChartDataInterface";

const ChartInfoTooltipContent = (data: {data: ChartDataBaseInterface}) => {
    return (
        <>
            <List size="sm" withPadding>
                <List.Item>Total value: {data.data.totalValueCount}%</List.Item>
                <List.Item>Missing value: {data.data.missingValueCount}%</List.Item>
            </List>
    </>
    )
}

export default ChartInfoTooltipContent;
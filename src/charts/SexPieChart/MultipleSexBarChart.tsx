import { BarChart } from "@mantine/charts";
import { colorPalette } from "../../constants/colorPalette";
import NoValidData from "../../components/NoValidData";
import { ChartDataBaseInterface } from "../../interfaces/ChartDataInterface";

const chartData = [
    { date: '2024-Q1', Male: 500, Female: 650 },
    { date: '2024-Q2', Male: 455, Female: 560 },
    { date: '2024-Q3', Male: 600, Female: 440 },
    { date: '2024-Q4', Male: 500, Female: 600 },
];

const data: ChartDataBaseInterface = {
    isValid: false,
    missingValueCount: 0,
    totalValueCount: 0,
    result: chartData
}

const MultipleSexBarChart = () => {
    return (
        <>
            {data.isValid ? (
                <BarChart
                h={300}
                data={data.result}
                dataKey="date"
                type="percent"
                withLegend
                xAxisLabel="Időszak"
                xAxisProps={{ padding: { left: 30, right: 30 } }}
                tooltipAnimationDuration={200}
                series={[
                    { name: 'Male', color: colorPalette[0] },
                    { name: 'Female', color: colorPalette[2] },
                ]}
                />
            ): (
                <NoValidData missingValuePercent={30} missingValue={30} totalValue={100}/>
            )}
        </>         
    )
}

export default MultipleSexBarChart
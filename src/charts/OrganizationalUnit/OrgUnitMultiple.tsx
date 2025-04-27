import { BarChart } from "@mantine/charts";
import { colorPalette } from "../../constants/colorPalette";
import NoValidData from "../../components/NoValidData";
import { ChartDataBaseInterface } from "../../interfaces/ChartDataInterface";

const chartData = [
    {
      date: "2024-Q1",
      research: 10,
      development: 12,
      QA: 12
    },
    {
      date: "2024-Q2",
      research: 11,
      marketing: 12,
      development: 14
    },
    {
      date: "2024-Q3",
      QA: 14,
      research: 10,
      marketing: 10
    },
    {
      date: "2024-Q4",
      development: 13,
      research: 10,
      QA: 12
    }
]

const data: ChartDataBaseInterface = {
    isValid: true,
    missingValueCount: 0,
    totalValueCount: 0,
    result: chartData
}

const OrgUnitMultiple = () => {
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
                    { name: 'research', color: colorPalette[0] },
                    { name: 'development', color: colorPalette[1] },
                    { name: 'QA', color: colorPalette[2] },
                    { name: 'marketing', color: colorPalette[3] },
                ]}
                />
            ): (
                <NoValidData missingValuePercent={30} missingValue={30} totalValue={100}/>
            )}
        </>         
    )
}

export default OrgUnitMultiple;
import { PieChart } from "@mantine/charts";
import { colorPalette } from "../../constants/colorPalette";

const SexPieChart = () => {
    const data = [
        { name: 'Female', value: 438, color: colorPalette[0] },
        { name: 'Male', value: 600, color: colorPalette[2] },
    ];

    return(
        <PieChart 
            data={data}
            withLabelsLine 
            labelsPosition="outside" 
            labelsType="percent" 
            withLabels 
            withTooltip
        />
    )
}

export default SexPieChart;
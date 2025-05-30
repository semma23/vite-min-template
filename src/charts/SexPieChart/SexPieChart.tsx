import { PieChart } from "@mantine/charts";
import { colorPalette } from "../../constants/colorPalette";

const SexPieChart = () => {
    const data = [
        { name: 'Female', value: 600, color: colorPalette[2] },
        { name: 'Male', value: 450, color: colorPalette[0] },
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
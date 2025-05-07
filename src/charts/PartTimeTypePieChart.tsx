import { PieChart } from "@mantine/charts";
import { colorPalette } from "../constants/colorPalette";

const PartTimeTypePieChart = () => {
    const data = [
        { name: 'Részmunkaidős', value: 761, color: colorPalette[3] },
        { name: 'Teljes állású', value: 1610, color: colorPalette[5] },
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

export default PartTimeTypePieChart;
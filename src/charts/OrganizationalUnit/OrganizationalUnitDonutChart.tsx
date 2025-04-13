import { DonutChart } from "@mantine/charts";
import { colorPalette } from "../../constants/colorPalette";

const OrganizationalUnitDonutChart = () => {
    const data = [
        { name: 'Industrial', value: 100},
        { name: 'Movies', value: 55},
        { name: 'Grocery', value: 49},
        { name: 'Games', value: 48},
        { name: 'Sports', value: 47},
        { name: 'Garden', value: 47},
        { name: 'Electronics', value: 45},
        { name: 'Health', value: 44},
        { name: 'Music', value: 44},
        { name: 'Jewelry', value: 44},
        { name: 'Books', value: 43},
        { name: 'Automotive', value: 42},
        { name: 'Home', value: 41},
        { name: 'Beauty', value: 40},
        { name: 'Tools', value: 40},
        { name: 'Baby', value: 40},
        { name: 'Kids', value: 39},
        { name: 'Toys', value: 38},
        { name: 'Shoes', value: 36},
        { name: 'Clothing', value: 34},
        { name: 'Computers', value: 12},
        { name: 'Outdoors', value: 10},
    ];

    const dataWithColors = data.map((item, index) => ({
        ...item,
        color: colorPalette[index % colorPalette.length],
    }));

    return(
        <DonutChart 
            data={dataWithColors} 
            chartLabel={`Össz: ${dataWithColors.length}`}
            tooltipDataSource="segment"
            withLabelsLine labelsType="percent" withLabels
        />
    )
}

export default OrganizationalUnitDonutChart;
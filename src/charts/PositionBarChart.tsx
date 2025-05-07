import { BarChart } from "@mantine/charts";
import { ChartDataBaseInterface } from "../interfaces/ChartDataInterface";
import { useState } from "react";
import { Group, Button, Text, Select, Flex } from "@mantine/core";

const chartData = [
    {
        'date': '2024',
        'Fejlesztő': 500,
        'HR_szakértő': 650,
        'Projektmenedzser': 200,
        'Karbantartó': 50,
        'Tesztelő': 320,
        'Rendszergazda': 954,
        'Adatbázis-adminisztrátor': 477,
        'Ügyfélszolgálati munkatárs': 827,
        'Marketinges': 766,
        'Pénzügyi elemző': 629,
        'Könyvelő': 806,
        'Jogász': 537,
        'Munkaügyi szakértő': 201,
        'Termékmenedzser': 714,
        'Grafikus': 48,
        'UX designer': 661,
        'Frontend fejlesztő': 137,
        'Backend fejlesztő': 827,
        'DevOps mérnök': 356,
        'Scrum master': 451,
        'Agilis coach': 984,
        'Minőségbiztosító': 842,
        'Projekt koordinátor': 338,
        'Recruiter': 518,
        'Oktatásszervező': 371,
        'IT tanácsadó': 966,
        'Üzleti elemző': 824,
        'Irodavezető': 856,
        'Biztonsági őr': 986,
        'Takarító': 605,
        'Recepciós': 384,
        'Logisztikus': 666,
        'Raktáros': 157,
        'Műszaki rajzoló': 677,
        'Gyártásvezető': 812,
        'Gépkezelő': 70,
        'Villanyszerelő': 476,
        'Vízvezetékszerelő': 657,
        'Futár': 632,
        'Szoftvermérnök': 288,
        'Adatmérnök': 201,
        'HR Business Partner': 888,
        'Tanácsadó': 92,
        'Adminisztrátor': 325
    }    
];

const data: ChartDataBaseInterface = {
    isValid: true,
    missingValueCount: 0,
    totalValueCount: 0,
    result: chartData
}

const PAGE_SIZE = 8;

const fullData = [
    { name: 'Fejlesztő', value: 641 },
    { name: 'HR szakértő', value: 503 },
    { name: 'Projektmenedzser', value: 802 },
    { name: 'Karbantartó', value: 384 },
    { name: 'Tesztelő', value: 365 },
    { name: 'Rendszergazda', value: 911 },
    { name: 'Adatbázis-admin', value: 283 },
    { name: 'Ügyfélszolgálatos', value: 557 },
    { name: 'Marketinges', value: 748 },
    { name: 'Pénzügyi elemző', value: 177 },
    { name: 'Könyvelő', value: 496 },
    { name: 'Jogász', value: 81 },
    { name: 'Munkaügyi referens', value: 508 },
    { name: 'Termékmenedzser', value: 524 },
    { name: 'Grafikus', value: 973 },
    { name: 'UX designer', value: 821 },
    { name: 'Frontend fejlesztő', value: 901 },
    { name: 'Backend fejlesztő', value: 362 },
    { name: 'DevOps mérnök', value: 428 },
    { name: 'Scrum master', value: 123 },
    { name: 'Minőségbiztosító', value: 669 },
    { name: 'Projekt koordinátor', value: 845 },
    { name: 'Recruiter', value: 176 },
    { name: 'Oktatásszervező', value: 339 },
    { name: 'IT tanácsadó', value: 263 },
    { name: 'Üzleti elemző', value: 258 },
    { name: 'Irodavezető', value: 624 },
    { name: 'Biztonsági őr', value: 704 },
    { name: 'Takarító', value: 929 },
    { name: 'Recepciós', value: 393 },
    { name: 'Logisztikus', value: 261 },
    { name: 'Raktáros', value: 434 },
    { name: 'Gépkezelő', value: 638 },
    { name: 'Villanyszerelő', value: 308 },
    { name: 'Vízvezetékszerelő', value: 426 },
    { name: 'Szoftvermérnök', value: 855 },
    { name: 'Adatmérnök', value: 718 },
    { name: 'Tanácsadó', value: 548 },
    { name: 'Adminisztrátor', value: 987 },
    { name: 'HR Business Partner', value: 961 }
];

const PositionBarChart = () => {
    const [page, setPage] = useState(0);
    const [sortBy, setSortBy] = useState<'name-asc' | 'name-desc' | 'value-asc' | 'value-desc'>('name-asc');

  const sortedData = [...fullData].sort((a, b) => {
    switch (sortBy) {
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      case 'value-asc':
        return a.value - b.value;
      case 'value-desc':
        return b.value - a.value;
      default:
        return 0;
    }
  });

  const totalPages = Math.ceil(sortedData.length / PAGE_SIZE);
  const currentSlice = sortedData.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  const chartData = currentSlice.map(item => ({ label: item.name, value: item.value }));
  
    return (
        <>
        <Group justify="space-between">
            <Select
                data={[
                    { value: 'name-asc', label: 'Név szerint (A-Z)' },
                    { value: 'name-desc', label: 'Név szerint (Z-A)' },
                    { value: 'value-asc', label: 'Érték szerint (növekvő)' },
                    { value: 'value-desc', label: 'Érték szerint (csökkenő)' },
                ]}
                value={sortBy}
                onChange={(val) => {
                    setSortBy(val as any);
                    setPage(0); // kezdőlapra ugrunk rendezés után
                }}
                size="xs"
            />
                
      </Group>
        <BarChart
            h={240}
            data={chartData}
            dataKey="label"
            series={[{ name: 'value', color: 'blue.3' }]}
            withLegend={false}
            xAxisProps={{ padding: { left: 20, right: 20 } }}
            tickLine="y"
            xAxisLabel="Munkakör"
        />
        <Group justify="space-between">
            <Button variant="light" size="xs" onClick={() => setPage(p => Math.max(p - 1, 0))} disabled={page === 0}>
                    Előző
                    </Button>
                    <Text size="sm">Oldal {page + 1} / {totalPages}</Text>
                <Button
                        size="xs"
                    variant="light"
                    onClick={() => setPage(p => Math.min(p + 1, totalPages - 1))}
                    disabled={page + 1 >= totalPages}
                    >
                    Következő
                </Button>
        </Group>
    </>
    )
}

export default PositionBarChart
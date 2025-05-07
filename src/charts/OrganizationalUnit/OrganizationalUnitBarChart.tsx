import { BarChart } from "@mantine/charts";
import { useState } from "react";
import { Group, Button, Text, Select, Flex } from "@mantine/core";
import { ChartDataBaseInterface } from "../../interfaces/ChartDataInterface";

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
  { name: 'Informatikai Osztály', value: 641 },
  { name: 'HR Osztály', value: 503 },
  { name: 'Projektmenedzsment Iroda', value: 802 },
  { name: 'Üzemeltetési Csoport', value: 384 },
  { name: 'Minőségbiztosítási Osztály', value: 365 },
  { name: 'Rendszergazda Egység', value: 911 },
  { name: 'Adatbázis-kezelési Osztály', value: 283 },
  { name: 'Ügyfélszolgálati Központ', value: 557 },
  { name: 'Marketing Osztály', value: 748 },
  { name: 'Pénzügyi Elemző Csoport', value: 177 },
  { name: 'Számviteli Osztály', value: 496 },
  { name: 'Jogi Osztály', value: 81 },
  { name: 'Munkaügyi Csoport', value: 508 },
  { name: 'Termékmenedzsment Osztály', value: 524 },
  { name: 'Design és Grafikai Csoport', value: 973 },
  { name: 'Felhasználói Élmény Osztály', value: 821 },
  { name: 'Frontend Fejlesztési Osztály', value: 901 },
  { name: 'Backend Fejlesztési Osztály', value: 362 },
  { name: 'DevOps Csoport', value: 428 },
  { name: 'Scrum Iroda', value: 123 },
  { name: 'Minőségellenőrzési Osztály', value: 669 },
  { name: 'Projekt Koordinációs Osztály', value: 845 },
  { name: 'Toborzási Osztály', value: 176 },
  { name: 'Képzésszervezési Osztály', value: 339 },
  { name: 'IT Tanácsadó Részleg', value: 263 },
  { name: 'Üzletfejlesztési Osztály', value: 258 },
  { name: 'Irodai Adminisztráció', value: 624 },
  { name: 'Biztonsági Szolgálat', value: 704 },
  { name: 'Takarítási Részleg', value: 929 },
  { name: 'Recepció', value: 393 },
  { name: 'Logisztikai Osztály', value: 261 },
  { name: 'Raktározási Osztály', value: 434 },
  { name: 'Gépkezelői Csoport', value: 638 },
  { name: 'Villanyszerelői Részleg', value: 308 },
  { name: 'Vízvezetékszerelési Csoport', value: 426 },
  { name: 'Szoftvermérnöki Osztály', value: 855 },
  { name: 'Adatmérnöki Csoport', value: 718 },
  { name: 'Tanácsadói Osztály', value: 548 },
  { name: 'Adminisztrációs Csoport', value: 987 },
  { name: 'HR Business Partner Csoport', value: 961 }
];

const OrganizationalUnitBarChart = () => {
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
            series={[{ name: 'value', color: 'yellow.3' }]}
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

export default OrganizationalUnitBarChart;
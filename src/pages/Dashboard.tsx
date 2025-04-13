import { Tabs } from "@mantine/core";
import BasicStats from "./BasicStats";
import SalaryStats from "./SalaryStats";

const Dashboard = () => {
    return (
        <Tabs defaultValue="gallery" orientation="vertical" placement="right">
            <Tabs.List>
                <Tabs.Tab value="gallery">Dolgozói alapadatok</Tabs.Tab>
                <Tabs.Tab value="messages">Korosztályos adatok</Tabs.Tab>
                <Tabs.Tab value="settings">Pénzügyi adatok</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="gallery">
                <BasicStats />
            </Tabs.Panel>
            <Tabs.Panel value="messages">
                <BasicStats />
            </Tabs.Panel>
            <Tabs.Panel value="settings">
                <SalaryStats />
            </Tabs.Panel>
        </Tabs>
        
    )
}

export default Dashboard;
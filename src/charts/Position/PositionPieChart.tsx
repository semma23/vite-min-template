import { DonutChart, PieChart } from "@mantine/charts";
import classes from "./PositionPieChart.module.css";
import { Flex, Title, Card, Switch, MantineColor, List, ScrollArea } from "@mantine/core";
import { IconFriends, IconLayoutCollage } from "@tabler/icons-react";
import { useState } from "react";

const SexPieChart = () => {
    const data = [
        { name: 'Senior Sales Associate', value: 15},
        { name: 'Human Resources Manager', value: 13},
        { name: 'Associate Professor', value: 12},
        { name: 'Staff Scientist', value: 12},
        { name: 'Senior Financial Analyst', value: 12},
        { name: 'Recruiter', value: 12},
        { name: 'Tax Accountant', value: 12},
        { name: 'Research Associate', value: 11},
        { name: 'Assistant Professor', value: 11},
        { name: 'Junior Executive', value: 11},
        { name: 'Legal Assistant', value: 10},
        { name: 'Information Systems Manager', value: 10},
        { name: 'Research Nurse', value: 10},
        { name: 'General Manager', value: 10},
        { name: 'Nurse', value: 10},
        { name: 'VP Product Management', value: 10},
        { name: 'VP Marketing', value: 10},
        { name: 'Registered Nurse', value: 9},
        { name: 'VP Accounting', value: 9},
        { name: 'Community Outreach Specialist', value: 9},
        { name: 'Professor', value: 9},
        { name: 'Marketing Assistant', value: 9},
        { name: 'Structural Analysis Engineer', value: 9},
        { name: 'Compensation Analyst', value: 9},
        { name: 'Paralegal', value: 9},
        { name: 'Chief Design Engineer', value: 9},
        { name: 'Assistant Manager', value: 9},
        { name: 'Account Executive', value: 9},
        { name: 'Analog Circuit Design manager', value: 9},
        { name: 'Recruiting Manager', value: 8},
        { name: 'Chemical Engineer', value: 8},
        { name: 'Project Manager', value: 8},
        { name: 'Cost Accountant', value: 8},
        { name: 'Software Engineer IV', value: 8},
        { name: 'Operator', value: 8},
        { name: 'Environmental Tech', value: 8},
        { name: 'Editor', value: 8},
        { name: 'Physical Therapy Assistant', value: 8},
        { name: 'Mechanical Systems Engineer', value: 8},
        { name: 'VP Sales', value: 8},
        { name: 'Analyst Programmer', value: 8},
        { name: 'Financial Advisor', value: 7},
        { name: 'Internal Auditor', value: 7},
        { name: 'Social Worker', value: 7},
        { name: 'Financial Analyst', value: 7},
        { name: 'Research Assistant I', value: 7},
        { name: 'Clinical Specialist', value: 7},
        { name: 'Civil Engineer', value: 7},
        { name: 'Nuclear Power Engineer', value: 7},
        { name: 'Desktop Support Technician', value: 7},
        { name: 'Director of Sales', value: 7},
        { name: 'VP Quality Control', value: 7},
        { name: 'Help Desk Operator', value: 7},
        { name: 'Electrical Engineer', value: 7},
        { name: 'Librarian', value: 7},
        { name: 'Help Desk Technician', value: 7},
        { name: 'Teacher', value: 7},
        { name: 'Product Engineer', value: 7},
        { name: 'Quality Control Specialist', value: 6},
        { name: 'Actuary', value: 6},
        { name: 'Pharmacist', value: 6},
        { name: 'Developer I', value: 6},
        { name: 'Human Resources Assistant IV', value: 6},
        { name: 'Speech Pathologist', value: 6},
        { name: 'Graphic Designer', value: 6},
        { name: 'Business Systems Development Analyst', value: 6},
        { name: 'Administrative Officer', value: 6},
        { name: 'GIS Technical Architect', value: 6},
        { name: 'Account Coordinator', value: 6},
        { name: 'Environmental Specialist', value: 6},
        { name: 'Senior Developer', value: 6},
        { name: 'Sales Associate', value: 6},
        { name: 'Quality Engineer', value: 6},
        { name: 'Dental Hygienist', value: 5},
        { name: 'Structural Engineer', value: 5},
        { name: 'Web Developer IV', value: 5},
        { name: 'Office Assistant III', value: 5},
        { name: 'Sales Representative', value: 5},
        { name: 'Safety Technician II', value: 5},
        { name: 'Design Engineer', value: 5},
        { name: 'Assistant Media Planner', value: 5},
        { name: 'Web Designer II', value: 5},
        { name: 'Staff Accountant II', value: 5},
        { name: 'Senior Editor', value: 5},
        { name: 'Software Engineer III', value: 4},
        { name: 'Programmer Analyst I', value: 4},
        { name: 'Geological Engineer', value: 4},
        { name: 'Nurse Practicioner', value: 4},
        { name: 'Developer IV', value: 4},
        { name: 'Technical Writer', value: 4},
        { name: 'Data Coordinator', value: 4},
        { name: 'Budget/Accounting Analyst II', value: 4},
        { name: 'Engineer IV', value: 4},
        { name: 'Software Test Engineer II', value: 4},
        { name: 'Senior Quality Engineer', value: 4},
        { name: 'Account Representative IV', value: 3},
        { name: 'Web Designer IV', value: 3},
        { name: 'Systems Administrator II', value: 3},
        { name: 'Media Manager II', value: 3},
        { name: 'Media Manager IV', value: 3},
        { name: 'Account Representative I', value: 3},
        { name: 'Executive Secretary', value: 3},
        { name: 'Health Coach II', value: 3},
        { name: 'Engineer III', value: 3},
        { name: 'Marketing Manager', value: 3},
        { name: 'Geologist II', value: 3},
        { name: 'Systems Administrator III', value: 3},
        { name: 'Statistician I', value: 3},
        { name: 'Payment Adjustment Coordinator', value: 3},
        { name: 'Automation Specialist II', value: 3},
        { name: 'Programmer II', value: 3},
        { name: 'Administrative Assistant IV', value: 3},
        { name: 'Food Chemist', value: 3},
        { name: 'Biostatistician II', value: 3},
        { name: 'Computer Systems Analyst I', value: 3},
        { name: 'Administrative Assistant I', value: 3},
        { name: 'Developer III', value: 3},
        { name: 'Programmer Analyst IV', value: 3},
        { name: 'Accounting Assistant III', value: 3},
        { name: 'Senior Cost Accountant', value: 3},
        { name: 'Software Consultant', value: 3},
        { name: 'Computer Systems Analyst IV', value: 3},
        { name: 'Occupational Therapist', value: 3},
        { name: 'Statistician IV', value: 3},
        { name: 'Web Designer I', value: 2},
        { name: 'Staff Accountant IV', value: 2},
        { name: 'Web Developer II', value: 2},
        { name: 'Budget/Accounting Analyst IV', value: 2},
        { name: 'Computer Systems Analyst II', value: 2},
        { name: 'Staff Accountant I', value: 2},
        { name: 'Systems Administrator I', value: 2},
        { name: 'Database Administrator III', value: 2},
        { name: 'Administrative Assistant II', value: 2},
        { name: 'Developer II', value: 2},
        { name: 'Biostatistician I', value: 2},
        { name: 'Software Engineer I', value: 2},
        { name: 'Media Manager I', value: 2},
        { name: 'Programmer Analyst II', value: 2},
        { name: 'Geologist III', value: 2},
        { name: 'Research Assistant IV', value: 2},
        { name: 'Safety Technician I', value: 2},
        { name: 'Media Manager III', value: 2},
        { name: 'Web Developer III', value: 2},
        { name: 'Health Coach IV', value: 2},
        { name: 'Administrative Assistant III', value: 2},
        { name: 'Engineer II', value: 2},
        { name: 'Programmer III', value: 2},
        { name: 'Systems Administrator IV', value: 2},
        { name: 'Accounting Assistant IV', value: 2},
        { name: 'Safety Technician III', value: 2},
        { name: 'Database Administrator I', value: 2},
        { name: 'Automation Specialist I', value: 2},
        { name: 'Programmer Analyst III', value: 2},
        { name: 'Automation Specialist IV', value: 2},
        { name: 'Human Resources Assistant II', value: 2},
        { name: 'Accountant I', value: 2},
        { name: 'Geologist I', value: 1},
        { name: 'Database Administrator IV', value: 1},
        { name: 'Engineer I', value: 1},
        { name: 'Automation Specialist III', value: 1},
        { name: 'Office Assistant I', value: 1},
        { name: 'Web Developer I', value: 1},
        { name: 'Health Coach I', value: 1},
        { name: 'Account Representative II', value: 1},
        { name: 'Human Resources Assistant I', value: 1},
        { name: 'Budget/Accounting Analyst I', value: 1},
        { name: 'Safety Technician IV', value: 1},
        { name: 'Accountant II', value: 1},
        { name: 'Programmer IV', value: 1},
        { name: 'Software Test Engineer IV', value: 1},
        { name: 'Office Assistant IV', value: 1},
        { name: 'Database Administrator II', value: 1},
        { name: 'Accounting Assistant II', value: 1},
        { name: 'Statistician II', value: 1},
        { name: 'Office Assistant II', value: 1},
        { name: 'Software Engineer II', value: 1},
        { name: 'Geologist IV', value: 1},
        { name: 'Account Representative III', value: 1},
        { name: 'Accountant III', value: 1},
    ];

    const [checked, setChecked] = useState(false);

    const colorPalette: MantineColor[] = [
        'blue', 'teal', 'grape', 'cyan', 'indigo',
        'orange', 'lime', 'pink', 'red', 'violet',
        'green', 'yellow'
        ];

    const dataWithColors = data.map((item, index) => ({
        ...item,
        color: colorPalette[index % colorPalette.length],
    }));

    const reducedData = dataWithColors.filter((item) => {
        const top20 = data[19].value;
        return item.value >= top20;
    })

    return(
        <Card className={classes.root}>
            <Card.Section p={10}>
                <Title order={5}><IconLayoutCollage stroke={2} /> Munkakör szerinti megoszlás</Title>
                <Switch
                    checked={checked}
                    onChange={(event) => setChecked(event.currentTarget.checked)}
                />
            </Card.Section>
            <Flex
                p={10}
                gap="md"
                justify="center"
                align="center"
                direction="row"
            >
                <DonutChart 
                    data={reducedData} 
                    chartLabel="Uni" 
                    tooltipDataSource="segment"
                    labelsType="percent" 
                />
                <ScrollArea h={250}>
                    <List type="ordered" size="sm" withPadding>
                        {dataWithColors.map((item) => (
                            <List.Item>{item.name} - {item.value}</List.Item>
                        ))}
                    </List>
                </ScrollArea>
            </Flex>
        </Card>
    )
}

export default SexPieChart;
import { useState } from "react";
import { YearPickerInput } from '@mantine/dates';
import { IconCalendar } from "@tabler/icons-react";

const YearInput = () => {
    const [value, setValue] = useState<Date | null>(null);

    return (
        <YearPickerInput
            leftSection={<IconCalendar size={18} stroke={1.5} />}
            leftSectionPointerEvents="none"
            label="Pick date"
            placeholder="Pick date"
            description="Input description" 
            radius="md"
            value={value}
            onChange={setValue}
        />
    )
}

export default YearInput;
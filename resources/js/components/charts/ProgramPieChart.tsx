
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

import { programData } from '@/data/chart-data';

export default function ProgramPieChart() {
    return (
        <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={programData}
                        dataKey="students"
                        nameKey="program"
                        cx="50%"
                        cy="50%"
                        outerRadius={95}
                        fill="#8884d8"
                        label
                        labelLine={true}
                    >
                        {programData.map((item) => (
                            <Cell
                                key={item.program}
                                fill={item.color}
                            />
                        ))}
                    </Pie>

                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

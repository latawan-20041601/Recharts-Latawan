import {
    CartesianGrid,
    Legend,
    Bar,
    BarChart,
    Cell,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import { programData } from '@/data/chart-data';

export default function ProgramBarChart() {
    return (
        <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={programData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="program" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="students" name="Students" radius={[4, 4, 0, 0]}>
                        {programData.map((item) => (
                            <Cell key={item.program} fill={item.color} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

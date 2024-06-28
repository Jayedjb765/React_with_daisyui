
import { LineChart, Line,XAxis,YAxis } from 'recharts';
const Graphl = () => {
    const students = [
        {
            id: "001",
            name: "Alice Johnson",
            math: 85,
            physics: 90,
            chemistry: 88
        },
        {
            id: "002",
            name: "Bob Smith",
            math: 78,
            physics: 82,
            chemistry: 80
        },
        {
            id: "003",
            name: "Charlie Brown",
            math: 92,
            physics: 85,
            chemistry: 89
        },
        {
            id: "004",
            name: "David Wilson",
            math: 74,
            physics: 79,
            chemistry: 77
        },
        {
            id: "005",
            name: "Emma Davis",
            math: 88,
            physics: 91,
            chemistry: 87
        },
        {
            id: "006",
            name: "Fiona Clark",
            math: 95,
            physics: 94,
            chemistry: 92
        },
        {
            id: "007",
            name: "George Miller",
            math: 82,
            physics: 78,
            chemistry: 85
        },
        {
            id: "008",
            name: "Hannah Taylor",
            math: 90,
            physics: 88,
            chemistry: 86
        },
        {
            id: "009",
            name: "Ian Anderson",
            math: 76,
            physics: 80,
            chemistry: 79
        },
        {
            id: "010",
            name: "Jenny Moore",
            math: 89,
            physics: 87,
            chemistry: 90
        }
    ];
    return (
        <div className='m-4 p-2'>
            <LineChart width={800} height={500} data={students}>
                <XAxis dataKey="math" />

                <YAxis />
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='yellow'></Line>

            </LineChart>
            
        </div>
    );
};

export default Graphl;
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    datasets: [
        {
            data: [12, 19, 3, 5, ],
            backgroundColor: [
                'rgba(28, 127, 218)',
                'rgb(14,157,246)',
                'rgb(60,180,253)',
                'rgba(93,189,255)',
            ],
            borderWidth: 0,
        },
    ],
};

export function MainGraf() {
    return <Pie data={data} />;
}





export default MainGraf;
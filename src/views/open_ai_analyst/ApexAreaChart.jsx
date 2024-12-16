import React, { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// project imports
import useConfig from 'hooks/useConfig';
import value from 'assets/scss/_themes-vars.module.scss';

// chart options
const areaChartOptions = {
    chart: {
        height: 350,
        type: 'area'
    },
    colors: [value.secondaryMain, value.primaryMain],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: [
            '2018-09-19T00:00:00.000Z',
            '2018-09-19T01:30:00.000Z',
            '2018-09-19T02:30:00.000Z',
            '2018-09-19T03:30:00.000Z',
            '2018-09-19T04:30:00.000Z',
            '2018-09-19T05:30:00.000Z',
            '2018-09-19T06:30:00.000Z'
        ]
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        }
    },
    legend: {
        show: true,
        fontFamily: `'Roboto', sans-serif`,
        position: 'bottom',
        offsetX: 10,
        offsetY: 10,
        labels: {
            useSeriesColors: false
        },
        markers: {
            width: 16,
            height: 16,
            radius: 5
        },
        itemMargin: {
            horizontal: 15,
            vertical: 8
        }
    }
};

// ==============================|| AREA CHART ||============================== //

const ApexAreaChart = (data) => {
    const theme = useTheme();
    const { mode } = useConfig();

    const { primary } = theme.palette.text;
    const darkLight = theme.palette.dark.light;
    const divider = theme.palette.divider;

    const seriesData = data.data.map(item =>  item[1]);
    const categories = data.data.map(item => item[0]);

    const [series, setSeries] = useState([
        {
            name: 'Cost',
            data: seriesData
        }
    ]);
    

    const [options, setOptions] = useState(areaChartOptions);
    React.useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
            colors: [theme.palette.secondary.main, theme.palette.primary.main],
            xaxis: {
                labels: {
                    style: {
                        colors: [primary, primary, primary, primary, primary, primary, primary]
                    }
                },
                categories: data.data.map(item => item[0])
            },
            yaxis: {
                labels: {
                    style: {
                        colors: [primary]
                    },
                    formatter(val) {
                        return val.toFixed(2);
                    }
                }
            },
            grid: {
                borderColor: divider
            },
            tooltip: {
                theme: mode
            },
            legend: {
                labels: {
                    colors: 'grey.500'
                }
            }
        }));
        setSeries([{
            name:'Cost',
            data: data.data.map(item =>  item[1])
        }])
    }, [mode, primary, darkLight, divider, theme, data]);

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="area" height={350} />
        </div>
    );
};

export default ApexAreaChart;

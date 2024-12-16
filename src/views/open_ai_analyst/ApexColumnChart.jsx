import React, { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// project import
import useConfig from 'hooks/useConfig';

// chart options
const columnChartOptions = {
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: []
    },
    yaxis: {
        title: {
            text: 'Cost $'
        },
        logarithmic: false,
        floating: false,
        labels: {
            formatter(val) {
                return val.toFixed(2);
            }
        },
        

    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter(val) {
                return `$${val.toFixed(2)}`;
            }
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
    },
    responsive: [
        {
            breakpoint: 600,
            options: {
                yaxis: {
                    show: false
                }
            }
        }
    ]
};

// ==============================|| COLUMN CHART ||============================== //

const ApexColumnChart = ({columns, data}) => {

    
    
    
    const [options, setOptions] = useState(columnChartOptions);

    
    
    const theme = useTheme();
    const { mode } = useConfig();
    
    const { primary } = theme.palette.text;
    const darkLight = theme.palette.dark.light;
    const divider = theme.palette.divider;
    
    const secondary = theme.palette.secondary.main;
    const primaryMain = theme.palette.primary.main;
    const successDark = theme.palette.success.dark;
    
    const [series, setSeries] = useState([]);
    
    useEffect(() => {
        setSeries([{
            name:"Cost",
            data: data
        }])
    }, [data]);

    useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
            colors: [secondary, primaryMain, successDark],
            xaxis: {
                labels: {
                    style: {
                        colors: [primary, primary, primary, primary, primary, primary, primary, primary, primary]
                    }
                },
                title:{
                    text: "Projects"
                },
            },
            yaxis: {
                title: {
                    text: 'Cost $'
                },
                labels: {
                    style: {
                        colors: [primary]
                    },
                    formatter(val) {
                        return val.toFixed(2);
                    },
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
    }, [mode, primary, darkLight, divider, secondary, primaryMain, successDark]);

    

    useEffect(() => {
        setOptions((prevState) => ({
            ...prevState, 
            xaxis:{
                categories: columns
            }

        }))
    }, [columns]);

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="bar" height={350} />
        </div>
    );
};



export default ApexColumnChart;

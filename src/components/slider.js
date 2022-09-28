import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as agCharts from 'ag-charts-community';
import { AgChartsReact } from 'ag-charts-react';

const SliderBar = (prop) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    let options = [
        {
            data: [
                { label: 'Android', value: 56.9 },
                { label: 'iOS', value: 22.5 },
                { label: 'BlackBerry', value: 6.8 },
                { label: 'Symbian', value: 8.5 },
                { label: 'Bada', value: 2.6 },
                { label: 'Windows', value: 1.9 },
            ],
            series: [
                {
                    type: 'pie',
                    angleKey: 'value',
                    labelKey: 'label',
                },
            ],
            legend: {
                enabled: false,
            }
        },
        {
            data: [
                { label: 'Android', value: 56.9 },
                { label: 'iOS', value: 22.5 },
                { label: 'BlackBerry', value: 6.8 },
                { label: 'Symbian', value: 8.5 },
                { label: 'Bada', value: 2.6 },
                { label: 'Windows', value: 1.9 },
            ],
            series: [
                {
                    type: 'pie',
                    angleKey: 'value',
                    labelKey: 'label',
                },
            ],
            legend: {
                enabled: false,
            }
        },
        {
            data: [
                { label: 'Android', value: 56.9 },
                { label: 'iOS', value: 22.5 },
                { label: 'BlackBerry', value: 6.8 },
                { label: 'Symbian', value: 8.5 },
                { label: 'Bada', value: 2.6 },
                { label: 'Windows', value: 1.9 },
            ],
            series: [
                {
                    type: 'pie',
                    angleKey: 'value',
                    labelKey: 'label',
                },
            ],
            legend: {
                enabled: false,
            }
        },
        {
            data: [
                { label: 'Android', value: 56.9 },
                { label: 'iOS', value: 22.5 },
                { label: 'BlackBerry', value: 6.8 },
                { label: 'Symbian', value: 8.5 },
                { label: 'Bada', value: 2.6 },
                { label: 'Windows', value: 1.9 },
            ],
            series: [
                {
                    type: 'pie',
                    angleKey: 'value',
                    labelKey: 'label',
                },
            ],
            legend: {
                enabled: false,
            }
        },
        {
            data: [
                { label: 'Android', value: 56.9 },
                { label: 'iOS', value: 22.5 },
                { label: 'BlackBerry', value: 6.8 },
                { label: 'Symbian', value: 8.5 },
                { label: 'Bada', value: 2.6 },
                { label: 'Windows', value: 1.9 },
            ],
            series: [
                {
                    type: 'pie',
                    angleKey: 'value',
                    labelKey: 'label',
                },
            ],
            legend: {
                enabled: false,
            }
        },
        {
            data: [
                { label: 'Android', value: 56.9 },
                { label: 'iOS', value: 22.5 },
                { label: 'BlackBerry', value: 6.8 },
                { label: 'Symbian', value: 8.5 },
                { label: 'Bada', value: 2.6 },
                { label: 'Windows', value: 1.9 },
            ],
            series: [
                {
                    type: 'pie',
                    angleKey: 'value',
                    labelKey: 'label',
                },
            ],
            legend: {
                enabled: false,
            }
        },
        {
            data: [
                { label: 'Android', value: 56.9 },
                { label: 'iOS', value: 22.5 },
                { label: 'BlackBerry', value: 6.8 },
                { label: 'Symbian', value: 8.5 },
                { label: 'Bada', value: 2.6 },
                { label: 'Windows', value: 1.9 },
            ],
            series: [
                {
                    type: 'pie',
                    angleKey: 'value',
                    labelKey: 'label',
                },
            ],
            legend: {
                enabled: false,
            }
        },
        {
            data: [
                { label: 'Android', value: 56.9 },
                { label: 'iOS', value: 22.5 },
                { label: 'BlackBerry', value: 6.8 },
                { label: 'Symbian', value: 8.5 },
                { label: 'Bada', value: 2.6 },
                { label: 'Windows', value: 1.9 },
            ],
            series: [
                {
                    type: 'pie',
                    angleKey: 'value',
                    labelKey: 'label',
                },
            ],
            legend: {
                enabled: false,
            }
        }
    ];

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "red" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, padding: "4px", display: "block", background: "green" }}
                onClick={onClick}
            />
        );
    }

    return (
        <div>
            <h2 style={{ display: "flex", justifyContent: 'center' }}>
                AG Charts
            </h2>
            <Slider {...settings} style={{ marginRight: "25px", marginLeft: "25px" }}>
                {options.map((elem) => <AgChartsReact options={elem} />)}
            </Slider>
        </div>
    );
}

export default SliderBar;

import React, { useState, useEffect } from "react";

const INITIAL_OFFSET = 25;
const circleConfig = {
    viewBox: "0 0 38 38",
    x: "19",
    y: "19",
    radio: "15.91549430918954",
};

export type CircleProgressBarBaseProps = {
    className: string;
    strokeColor?: string;
    strokeWidth?: number;
    innerText?: string;
    legendText?: string;
    percentage?: number;
    trailStrokeWidth?: number;
    trailStrokeColor?: string;
    trailSpaced?: boolean;
    speed?: number;
};

const CircleProgressBarBase = ({
    className,
    strokeColor = "blueviolet",
    strokeWidth = 1,
    innerText = "Completed",
    legendText = "",
    percentage = 0,
    trailStrokeWidth = 1,
    trailStrokeColor = "#d2d3d4",
    trailSpaced = false,
    speed = 1,
}: CircleProgressBarBaseProps) => {
    const [progressBar, setProgressBar] = useState(0);
    const pace = percentage / speed;
    const updatePercentage = () => {
        setTimeout(() => {
            setProgressBar(progressBar + 1);
        }, pace);
    };

    useEffect(() => {
        if (percentage > 0) updatePercentage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [percentage]);

    useEffect(() => {
        if (progressBar < percentage) updatePercentage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [progressBar]);

    return (
        <figure className={className}>
            <svg viewBox={circleConfig.viewBox} width="100%" height="100%">
                <circle
                    className="donut-ring"
                    cx={circleConfig.x}
                    cy={circleConfig.y}
                    r={circleConfig.radio}
                    fill="transparent"
                    stroke={trailStrokeColor}
                    strokeWidth={trailStrokeWidth}
                    strokeDasharray={trailSpaced ? 1 : 0}
                />

                <circle
                    className="donut-segment"
                    cx={circleConfig.x}
                    cy={circleConfig.y}
                    r={circleConfig.radio}
                    fill="transparent"
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${progressBar} ${100 - progressBar}`}
                    strokeDashoffset={INITIAL_OFFSET}
                />

                <g className="chart-text">
                    <text x="50%" y="50%" className="chart-number">
                        {progressBar}%
                    </text>
                    <text x="50%" y="50%" className="chart-label">
                        {innerText}
                    </text>
                </g>
            </svg>
            {legendText && (
                <figcaption className="figure-key">
                    <ul
                        className="figure-key-list"
                        aria-hidden="true"
                        role="presentation"
                    >
                        <li>
                            <span className="shape-circle" />
                            <span>{legendText}</span>
                        </li>
                    </ul>
                </figcaption>
            )}
        </figure>
    );
};

export default CircleProgressBarBase;

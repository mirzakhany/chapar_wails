import React from "react";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    prefix?: string;
}

function TabPanel(props: TabPanelProps) {
    const { prefix,children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`${prefix}-tabpanel-${index}`}
            aria-labelledby={`${prefix}-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}

export default TabPanel;

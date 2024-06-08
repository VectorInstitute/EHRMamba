// data.js

// Sample data with patient-specific cutoff times
export const patients = [
    { id: 1, name: 'Patient 1' },
    { id: 2, name: 'Patient 2' },
    // { id: 3, name: 'Patient 3' },
];

export const patientEvents = {

    1: {
        cutoffTime: 10,
        beforeCutoff: [
            { time: 0, event: 'Low Blood CO2' },
            { time: 5, event: 'Low Blood O2' },
        ],
        actual: [
            { time: 15, event: 'Very High Lactate' },
            { time: 20, event: 'Low Glucose' },
            { time: 25, event: 'Oxygen Therapy' },
        ],
        predicted: [
            { time: 15, event: 'High Lactate' },
            { time: 20, event: 'High Potassium' },
            { time: 25, event: 'Oxygen Therapy' },
        ]
    },

    2: {
        cutoffTime: 15,
        beforeCutoff: [
            { time: 0, event: 'Mild Fever' },
            { time: 5, event: 'Elevated Heart Rate' },
            { time: 10, event: 'Low Sodium Levels' },
        ],
        actual: [
            { time: 20, event: 'Severe Dehydration' },
            { time: 25, event: 'Hypertension' },
        ],
        predicted: [
            { time: 20, event: 'Moderate Dehydration' },
            { time: 25, event: 'High Blood Pressure' },
        ]
    },

    // 3: {
    //     cutoffTime: 15,
    //     beforeCutoff: [
    //         { time: 0, event: 'Event A' },
    //         { time: 5, event: 'Event B' },
    //         { time: 10, event: 'Event C' },
    //     ],
    //     actual: [
    //         { time: 20, event: 'Actual D' },
    //     ],
    //     predicted: [
    //         { time: 20, event: 'Predicted D' },
    //     ]
    // },

};

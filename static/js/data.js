// data.js

// Sample data with patient-specific cutoff times
export const patients = [
    { id: 1, name: 'Patient 1' },
    { id: 2, name: 'Patient 2' },
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
        cutoffTime: 20,
        beforeCutoff: [
            { time: 0, event: 'Repair Of Obstetric Lacerations' },
            { time: 5, event: 'Codeine Phosphate (Pain Killer)' },
            { time: 10, event: 'Acetaminophen' },
            { time: 15, event: 'Ibuprofen' },
        ],
        actual: [
            { time: 25, event: 'Platelet Count Very High' },
            { time: 30, event: 'RDW Very Low' },
            { time: 35, event: 'Red Blood Cells High' },
            { time: 40, event: 'White Blood Cells Medium' },
            { time: 45, event: 'Anion Gap Medium' },
            { time: 50, event: 'Bicarbonate Very Low' },
        ],
        predicted: [
            { time: 25, event: 'Platelet Count Very High' },
            { time: 30, event: 'RDW Very Low' },
            { time: 35, event: 'Red Blood Cells High' },
            { time: 40, event: 'White Blood Cells Low' },
            { time: 45, event: 'Anion Gap Medium' },
            { time: 50, event: 'Bicarbonate Medium' },
        ]
    },
};

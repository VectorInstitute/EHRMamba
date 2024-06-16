// Sample data with patient-specific cutoff times
export const patients = [
    { id: 1, name: 'Patient 1' },
    { id: 2, name: 'Patient 2' },
    { id: 3, name: 'Patient 3' },
    { id: 4, name: 'Patient 4' },
    { id: 5, name: 'Patient 5' },
];

export const patientEvents = {
    1: {
        cutoffTime: 10,
        beforeCutoff: [
            { time: 0, event: 'Low Blood CO2', type: 'Lab Test', description: 'Low levels of carbon dioxide in the blood' },
            { time: 5, event: 'Low Blood O2', type: 'Lab Test', description: 'Low levels of oxygen in the blood' },
        ],
        actual: [
            { time: 15, event: 'Very High Lactate', type: 'Lab Test', description: 'Extremely high levels of lactate in the blood' },
            { time: 20, event: 'Low Glucose', type: 'Lab Test', description: 'Low blood sugar levels' },
            { time: 25, event: 'Oxygen Therapy', type: 'Procedure', description: 'A treatment providing extra oxygen' },
        ],
        predicted: [
            { time: 15, event: 'High Lactate', type: 'Lab Test', description: 'High levels of lactate in the blood' },
            { time: 20, event: 'High Potassium', type: 'Lab Test', description: 'High levels of potassium in the blood' },
            { time: 25, event: 'Oxygen Therapy', type: 'Procedure', description: 'A treatment providing extra oxygen' },
        ]
    },

    2: {
        cutoffTime: 20,
        beforeCutoff: [
            { time: 0, event: 'Repair Of Obstetric Lacerations', type: 'Procedure', description: 'Surgical repair of tears that occur during childbirth' },
            { time: 5, event: 'Codeine Phosphate (Pain Killer)', type: 'Medication', description: 'A painkiller used to treat mild to moderate pain' },
            { time: 10, event: 'Acetaminophen', type: 'Medication', description: 'A medication used to treat pain and fever, commonly known as Tylenol' },
            { time: 15, event: 'Ibuprofen', type: 'Medication', description: 'A nonsteroidal anti-inflammatory drug (NSAID) used to reduce pain, fever, and inflammation' },
        ],
        actual: [
            { time: 25, event: 'Platelet Count Very High', type: 'Lab Test', description: 'Very high number of platelets in the blood' },
            { time: 30, event: 'RDW Very Low', type: 'Lab Test', description: 'Very low Red Cell Distribution Width (RDW), which measures the variation in red blood cell size or volume' },
            { time: 35, event: 'Red Blood Cells High', type: 'Lab Test', description: 'High number of red blood cells in the blood' },
            { time: 40, event: 'White Blood Cells Medium', type: 'Lab Test', description: 'Medium number of white blood cells in the blood' },
            { time: 45, event: 'Anion Gap Medium', type: 'Lab Test', description: 'Medium anion gap, which is a value calculated from the results of an electrolyte blood test' },
            { time: 50, event: 'Bicarbonate Very Low', type: 'Lab Test', description: 'Very low levels of bicarbonate in the blood, which helps maintain pH balance in the blood and body tissues' },
        ],
        predicted: [
            { time: 25, event: 'Platelet Count Very High', type: 'Lab Test', description: 'Very high number of platelets in the blood' },
            { time: 30, event: 'RDW Very Low', type: 'Lab Test', description: 'Very low Red Cell Distribution Width (RDW), which measures the variation in red blood cell size or volume' },
            { time: 35, event: 'Red Blood Cells High', type: 'Lab Test', description: 'High number of red blood cells in the blood' },
            { time: 40, event: 'White Blood Cells Low', type: 'Lab Test', description: 'Low number of white blood cells in the blood' },
            { time: 45, event: 'Anion Gap Medium', type: 'Lab Test', description: 'Medium anion gap, which is a value calculated from the results of an electrolyte blood test' },
            { time: 50, event: 'Bicarbonate Medium', type: 'Lab Test', description: 'Medium levels of bicarbonate in the blood, which helps maintain pH balance in the blood and body tissues' },
        ]
    },

    3: {
        cutoffTime: 20,
        beforeCutoff: [
            { time: 0, event: 'Medium Creatinine', type: 'Lab Test', description: 'Medium levels of creatinine in the blood, which indicates kidney function' },
            { time: 5, event: 'Low Glucose', type: 'Lab Test', description: 'Low blood sugar levels' },
            { time: 10, event: 'High Urea Nitrogen', type: 'Lab Test', description: 'High levels of urea nitrogen in the blood, which can indicate kidney dysfunction or dehydration' },
            { time: 15, event: 'Low MCH', type: 'Lab Test', description: 'Low Mean Corpuscular Hemoglobin (MCH), which measures the average amount of hemoglobin in red blood cells' },
        ],
        actual: [
            { time: 25, event: 'Medium MCV', type: 'Lab Test', description: 'Medium Mean Corpuscular Volume (MCV), which measures the average volume of red blood cells' },
            { time: 30, event: 'Low Platelet Count', type: 'Lab Test', description: 'Low number of platelets in the blood' },
            { time: 35, event: 'Medium PTT', type: 'Lab Test', description: 'Medium Partial Thromboplastin Time (PTT), which measures how long it takes for blood to clot' },
            { time: 40, event: 'Albuterol Sulfate', type: 'Medication', description: 'A medication used to treat wheezing and shortness of breath caused by breathing problems' },
            { time: 45, event: 'Acetaminophen', type: 'Medication', description: 'A medication used to treat pain and fever, commonly known as Tylenol' },
            { time: 50, event: 'Erythromycin', type: 'Medication', description: 'An antibiotic used to treat a wide variety of bacterial infections' },
        ],
        predicted: [
            { time: 25, event: 'Low MCV', type: 'Lab Test', description: 'Low Mean Corpuscular Volume (MCV), which measures the average volume of red blood cells' },
            { time: 30, event: 'Medium Platelet Count', type: 'Lab Test', description: 'Medium number of platelets in the blood' },
            { time: 35, event: 'Low RDW', type: 'Lab Test', description: 'Low Red Cell Distribution Width (RDW), which measures the variation in red blood cell size or volume' },
            { time: 40, event: 'Acetaminophen', type: 'Medication', description: 'A medication used to treat pain and fever, commonly known as Tylenol' },
            { time: 45, event: 'Children\'s Pain Relief', type: 'Medication', description: 'A medication for relieving pain in children, typically containing acetaminophen' },
            { time: 50, event: 'Acetaminophen', type: 'Medication', description: 'A medication used to treat pain and fever, commonly known as Tylenol' },
        ]
    },

    4: {
        cutoffTime: 15,
        beforeCutoff: [
            { time: 0, event: 'Very High Platelet Count', type: 'Lab Test', description: 'Very high number of platelets in the blood' },
            { time: 5, event: 'Low Hematocrit', type: 'Lab Test', description: 'Low proportion of red blood cells in the blood' },
            { time: 10, event: 'Very Low Urea Nitrogen', type: 'Lab Test', description: 'Very low levels of urea nitrogen in the blood, which can indicate liver dysfunction' },
        ],
        actual: [
            { time: 20, event: 'Low Glucose', type: 'Lab Test', description: 'Low blood sugar levels' },
            { time: 25, event: 'Very Low Bicarbonate', type: 'Lab Test', description: 'Very low levels of bicarbonate in the blood, which helps maintain pH balance in the blood and body tissues' },
            { time: 30, event: 'Very High Anion Gap', type: 'Lab Test', description: 'Very high anion gap, which is a value calculated from the results of an electrolyte blood test' },
            { time: 35, event: 'Hydromorphone HCl', type: 'Medication', description: 'An opioid pain medication used to treat moderate to severe pain' },
            { time: 40, event: 'Senna Lax', type: 'Medication', description: 'A laxative used to treat constipation' },
            { time: 45, event: '[VE]', type: 'Special Token', description: 'Indicates the end of a visit' },
            { time: 50, event: '[REG]', type: 'Special Token', description: 'Register Token' },
        ],
        predicted: [
            { time: 20, event: 'Medium Bicarbonate', type: 'Lab Test', description: 'Medium levels of bicarbonate in the blood, which helps maintain pH balance in the blood and body tissues' },
            { time: 25, event: 'High Anion Gap', type: 'Lab Test', description: 'High anion gap, which is a value calculated from the results of an electrolyte blood test' },
            { time: 30, event: 'Low Glucose', type: 'Lab Test', description: 'Low blood sugar levels' },
            { time: 35, event: '[VE]', type: 'Special Token', description: 'Indicates the end of a visit' },
            { time: 40, event: '[PAD]', type: 'Special Token', description: 'Padding token used to maintain sequence length' },
            { time: 45, event: '[PAD]', type: 'Special Token', description: 'Padding token used to maintain sequence length' },
            { time: 50, event: '[PAD]', type: 'Special Token', description: 'Padding token used to maintain sequence length' },
        ]
    },

    5: {
        cutoffTime: 35,
        beforeCutoff: [
            { time: 0, event: 'Heparin', type: 'Medication', description: 'An anticoagulant (blood thinner) that prevents the formation of blood clots' },
            { time: 5, event: 'Very High PTT', type: 'Lab Test', description: 'Very high Partial Thromboplastin Time (PTT), which measures how long it takes for blood to clot' },
            { time: 10, event: 'Low cervical cesarean section', type: 'Procedure', description: 'A cesarean section (C-section) performed to deliver a baby through an incision in the lower abdomen and uterus' },
            { time: 15, event: 'Bilateral Ligation & Division of Fallopian Tubes', type: 'Procedure', description: 'A permanent form of birth control where the fallopian tubes are cut, tied, or blocked to prevent pregnancy' },
            { time: 20, event: '[VE]', type: 'Special Token', description: 'Indicates the end of a visit' },
            { time: 25, event: '[REG]', type: 'Special Token', description: 'Register Token' },
            { time: 30, event: '[LT]', type: 'Special Token', description: 'Long-term time interval' },
        ],
        actual: [
            { time: 40, event: '[VS]', type: 'Special Token', description: 'Indicates the start of a visit' },
            { time: 45, event: 'LSG Surgery', type: 'Procedure', description: 'Laparoscopic Sleeve Gastrectomy, a weight-loss surgery that involves removing a large part of the stomach' },
            { time: 50, event: 'Very High Hematocrit', type: 'Lab Test', description: 'Very high proportion of red blood cells in the blood' },
            { time: 55, event: 'Glucagon Hydrochloride', type: 'Medication', description: 'A medication used to treat severe hypoglycemia (low blood sugar)' },
            { time: 60, event: 'Dextrose', type: 'Medication', description: 'A form of glucose (sugar) used to treat low blood sugar' },
        ],
        predicted: [
            { time: 40, event: '[VS]', type: 'Special Token', description: 'Indicates the start of a visit' },
            { time: 45, event: 'ERPC Surgery', type: 'Procedure', description: 'Evacuation of Retained Products of Conception, a procedure to remove tissue remaining in the uterus after a miscarriage or abortion' },
            { time: 50, event: 'Low White Blood Cells', type: 'Lab Test', description: 'Low number of white blood cells in the blood' },
            { time: 55, event: 'Very High Red Blood Cells', type: 'Lab Test', description: 'Very high number of red blood cells in the blood' },
            { time: 60, event: 'Very High Hematocrit', type: 'Lab Test', description: 'Very high proportion of red blood cells in the blood' },
        ]
    }
};

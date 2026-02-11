(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const m of t.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function i(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(a){if(a.ep)return;a.ep=!0;const t=i(a);fetch(a.href,t)}})();const d=[{name:"Cardiology",cases:[{id:"Cardiology-1",description:"37yo f c/o chest tightness intermittent chest tigh...",input:"37yo f c/o chest tightness intermittent chest tightness with exertion for 2 hours pmh cad on aspirin 81 mg daily atorvastatin 40 mg daily vs bp 148/92 hr 72 t 374 rr 18 spo2 95 pe cardiac: regular rhyth labs troponi 016ng/ml imaging ecg: st depressions in v4-v6 dx nstemi",output:`### Subjective
37-year-old female with chest tightness. Intermittent chest tightness with exertion for 2 hours. ROS: No syncope.
Past Medical History: CAD
Medications: Aspirin 81 mg daily, Atorvastatin 40 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Cardiac: regular rhythm

Laboratory Results:
- Troponin: 0.16 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG: ST depressions in V4-V6

### Assessment
Primary Diagnosis: NSTEMI (ICD-10: I21.4)

Differential Diagnoses:
- Unstable angina

### Plan
1. Heparin infusion
2. Cardiology admission
3. Consider cardiac cath`},{id:"Cardiology-2",description:"49yo f c/o palpitation palpitations and lightheade...",input:"49yo f c/o palpitation palpitations and lightheadedness for 1 day pmh htn on lisinopril 10 mg daily vs bp 148/92 hr 110 t 381 rr 20 spo2 97 pe cardiac: irregularly irregular labs tsh 19miu/l imaging ecg: afib with rvr at 140 dx atrial fibrillation with rvr",output:`### Subjective
49-year-old female with palpitations. Palpitations and lightheadedness for 1 day. ROS: No chest pain.
Past Medical History: HTN
Medications: Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Cardiac: irregularly irregular

Laboratory Results:
- TSH: 1.9 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- ECG: Afib with RVR at 140

### Assessment
Primary Diagnosis: Atrial fibrillation with RVR (ICD-10: I48.91)

Differential Diagnoses:
- SVT

### Plan
1. IV diltiazem bolus then drip
2. Anticoagulation assessment`},{id:"Cardiology-3",description:"33yo m c/o chest tightness intermittent chest tigh...",input:"33yo m c/o chest tightness intermittent chest tightness w/ exertion for 2 hours pmh cad on aspirin 81 mg daily atorvastatin 40 mg daily vs bp 130/84 hr 110 t 374 rr 16 spo2 95 pe cardiac: regular rhythm labs troponin 016ng/ml imaging ecg: st depressions in v4-v6 dx nstemi",output:`### Subjective
33-year-old male with chest tightness. Intermittent chest tightness with exertion for 2 hours. ROS: No syncope.
Past Medical History: CAD
Medications: Aspirin 81 mg daily, Atorvastatin 40 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Cardiac: regular rhythm

Laboratory Results:
- Troponin: 0.16 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG: ST depressions in V4-V6

### Assessment
Primary Diagnosis: NSTEMI (ICD-10: I21.4)

Differential Diagnoses:
- Unstable angina

### Plan
1. Heparin infusion
2. Cardiology admission
3. Consider cardiac cath`},{id:"Cardiology-4",description:"68yo f c/o palpitations palpitations and lighthead...",input:"68yo f c/o palpitations palpitations and lightheadedness for 1 day pmh htn on lisinopril 10 mg daily vs bp 148/92 hr 96 t 381 rr 16 spo2 98 pe cardiac: irregularly irregular labs tsh 19miu/l imaging ecg: afib w/ rvr at 140 dx atrial fibrillation w/ rvr",output:`### Subjective
68-year-old female with palpitations. Palpitations and lightheadedness for 1 day. ROS: No chest pain.
Past Medical History: HTN
Medications: Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Cardiac: irregularly irregular

Laboratory Results:
- TSH: 1.9 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- ECG: Afib with RVR at 140

### Assessment
Primary Diagnosis: Atrial fibrillation with RVR (ICD-10: I48.91)

Differential Diagnoses:
- SVT

### Plan
1. IV diltiazem bolus then drip
2. Anticoagulation assessment`},{id:"Cardiology-5",description:"38yo m c/o chest tightness intermittent chest tigh...",input:"38yo m c/o chest tightness intermittent chest tightness with exertion for 2 hours pmh cad on aspirin 81 mg daily atorvastatin 40 mg daily vs bp 118/76 hr 72 t 374 rr 16 spo2 95 pe cardiac: regula rhythm labs troponin 016ng/ml imaging ecg: st depressions in v4-v6 dx nstemi",output:`### Subjective
38-year-old male with chest tightness. Intermittent chest tightness with exertion for 2 hours. ROS: No syncope.
Past Medical History: CAD
Medications: Aspirin 81 mg daily, Atorvastatin 40 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Cardiac: regular rhythm

Laboratory Results:
- Troponin: 0.16 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG: ST depressions in V4-V6

### Assessment
Primary Diagnosis: NSTEMI (ICD-10: I21.4)

Differential Diagnoses:
- Unstable angina

### Plan
1. Heparin infusion
2. Cardiology admission
3. Consider cardiac cath`},{id:"Cardiology-6",description:"79yo m c/o palpitations palpitations and lighthead...",input:"79yo m c/o palpitations palpitations and lightheadedness for 1 day pmh htn on lisinopril 10 mg daily vs bp 130/84 hr 88 t 381 rr 18 spo2 97 pe cardiac: irregularly irregular labs tsh 19miu/l imaging ecg: afib with rvr at 140 dx atrial fibrillation with rvr",output:`### Subjective
79-year-old male with palpitations. Palpitations and lightheadedness for 1 day. ROS: No chest pain.
Past Medical History: HTN
Medications: Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Cardiac: irregularly irregular

Laboratory Results:
- TSH: 1.9 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- ECG: Afib with RVR at 140

### Assessment
Primary Diagnosis: Atrial fibrillation with RVR (ICD-10: I48.91)

Differential Diagnoses:
- SVT

### Plan
1. IV diltiazem bolus then drip
2. Anticoagulation assessment`},{id:"Cardiology-7",description:"81yo m c/o chest tightness intermittent chest tigh...",input:"81yo m c/o chest tightness intermittent chest tightness with exertion for 2 hours pmh cad on aspirin 81 mg daily atorvastati 40 mg dail vs bp 118/76 hr 96 t 381 rr 16 spo2 98 pe cardiac: regular rhythm labs troponin 016ng/ml imaging ecg: st depressions in v4-v6 dx nstemi",output:`### Subjective
81-year-old male with chest tightness. Intermittent chest tightness with exertion for 2 hours. ROS: No syncope.
Past Medical History: CAD
Medications: Aspirin 81 mg daily, Atorvastatin 40 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Cardiac: regular rhythm

Laboratory Results:
- Troponin: 0.16 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG: ST depressions in V4-V6

### Assessment
Primary Diagnosis: NSTEMI (ICD-10: I21.4)

Differential Diagnoses:
- Unstable angina

### Plan
1. Heparin infusion
2. Cardiology admission
3. Consider cardiac cath`},{id:"Cardiology-8",description:"70yo f c/o palpitations palpitations and lighthead...",input:"70yo f c/o palpitations palpitations and lightheadedness for 1 day pmh htn on lisinopril 10 mg daily vs bp 130/84 hr 72 t 381 rr 16 spo2 95 pe cardiac: irregularl irregular labs tsh 19miu/l imaging ecg: afib with rvr at 140 dx atrial fibrillation with rvr",output:`### Subjective
70-year-old female with palpitations. Palpitations and lightheadedness for 1 day. ROS: No chest pain.
Past Medical History: HTN
Medications: Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Cardiac: irregularly irregular

Laboratory Results:
- TSH: 1.9 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- ECG: Afib with RVR at 140

### Assessment
Primary Diagnosis: Atrial fibrillation with RVR (ICD-10: I48.91)

Differential Diagnoses:
- SVT

### Plan
1. IV diltiazem bolus then drip
2. Anticoagulation assessment`},{id:"Cardiology-9",description:"22yo m c/o chest tightness intermittent chest tigh...",input:"22yo m c/o chest tightness intermittent chest tightness w/ exertion for 2 hours pmh cad on aspirin 81 mg dail atorvastatin 40 mg daily vs bp 130/84 hr 88 t 374 rr 20 spo2 97 pe cardiac: regular rhythm labs troponin 016ng/ml imaging ecg: st depressions in v4-v6 dx nstemi",output:`### Subjective
22-year-old male with chest tightness. Intermittent chest tightness with exertion for 2 hours. ROS: No syncope.
Past Medical History: CAD
Medications: Aspirin 81 mg daily, Atorvastatin 40 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Cardiac: regular rhythm

Laboratory Results:
- Troponin: 0.16 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG: ST depressions in V4-V6

### Assessment
Primary Diagnosis: NSTEMI (ICD-10: I21.4)

Differential Diagnoses:
- Unstable angina

### Plan
1. Heparin infusion
2. Cardiology admission
3. Consider cardiac cath`},{id:"Cardiology-10",description:"62yo f c/o palpitations palpitations and lighthead...",input:"62yo f c/o palpitations palpitations and lightheadedness for 1 day pmh htn on lisinopril 10 mg daily vs bp 148/92 hr 88 t 381 rr 18 spo2 98 pe cardiac: irregularly irregular labs tsh 19miu/l imaging ecg: afib with rvr at 140 dx atrial fibrillation with rvr",output:`### Subjective
62-year-old female with palpitations. Palpitations and lightheadedness for 1 day. ROS: No chest pain.
Past Medical History: HTN
Medications: Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Cardiac: irregularly irregular

Laboratory Results:
- TSH: 1.9 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- ECG: Afib with RVR at 140

### Assessment
Primary Diagnosis: Atrial fibrillation with RVR (ICD-10: I48.91)

Differential Diagnoses:
- SVT

### Plan
1. IV diltiazem bolus then drip
2. Anticoagulation assessment`},{id:"Cardiology-11",description:"30yo m c/o chest tightness intermittent chest tigh...",input:"30yo m c/o chest tightness intermittent chest tightness w/ exertion for 2 hours pmh cad on aspirin 81 mg daily atorvastatin 40 mg daily vs bp 118/76 hr 110 t 381 rr 20 spo2 97 pe cardiac: regular rhythm labs troponin 016ng/ml imaging ecg: st depressions in v4-v6 dx nstemi",output:`### Subjective
30-year-old male with chest tightness. Intermittent chest tightness with exertion for 2 hours. ROS: No syncope.
Past Medical History: CAD
Medications: Aspirin 81 mg daily, Atorvastatin 40 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Cardiac: regular rhythm

Laboratory Results:
- Troponin: 0.16 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG: ST depressions in V4-V6

### Assessment
Primary Diagnosis: NSTEMI (ICD-10: I21.4)

Differential Diagnoses:
- Unstable angina

### Plan
1. Heparin infusion
2. Cardiology admission
3. Consider cardiac cath`},{id:"Cardiology-12",description:"73yo f c/o palpitations palpitations and lighthead...",input:"73yo f c/o palpitations palpitations and lightheadedness for 1 day pmh htn on lisinopril 10 mg daily vs bp 118/76 hr 72 t 367 rr 20 spo2 97 pe cardiac: irregularly irregular labs tsh 19miu/l imaging ecg: afib w/ rvr at 140 dx atrial fibrillation w/ rvr",output:`### Subjective
73-year-old female with palpitations. Palpitations and lightheadedness for 1 day. ROS: No chest pain.
Past Medical History: HTN
Medications: Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Cardiac: irregularly irregular

Laboratory Results:
- TSH: 1.9 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- ECG: Afib with RVR at 140

### Assessment
Primary Diagnosis: Atrial fibrillation with RVR (ICD-10: I48.91)

Differential Diagnoses:
- SVT

### Plan
1. IV diltiazem bolus then drip
2. Anticoagulation assessment`},{id:"Cardiology-13",description:"51yo f c/o chest tightness intermittent chest tigh...",input:"51yo f c/o chest tightness intermittent chest tightnes w/ exertion for 2 hours pmh cad on aspirin 81 mg daily atorvastatin 40 mg daily vs bp 130/84 hr 72 t 374 rr 16 spo2 97 pe cardiac: regular rhythm labs troponi 016ng/ml imaging ecg: st depressions in v4-v6 dx nstemi",output:`### Subjective
51-year-old female with chest tightness. Intermittent chest tightness with exertion for 2 hours. ROS: No syncope.
Past Medical History: CAD
Medications: Aspirin 81 mg daily, Atorvastatin 40 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Cardiac: regular rhythm

Laboratory Results:
- Troponin: 0.16 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG: ST depressions in V4-V6

### Assessment
Primary Diagnosis: NSTEMI (ICD-10: I21.4)

Differential Diagnoses:
- Unstable angina

### Plan
1. Heparin infusion
2. Cardiology admission
3. Consider cardiac cath`},{id:"Cardiology-14",description:"68yo f c/o palpitations palpitations and lighthead...",input:"68yo f c/o palpitations palpitations and lightheadedness for 1 day pmh htn on lisinopril 10 mg daily vs bp 136/86 hr 88 t 367 rr 16 spo2 97 pe cardiac: irregularly irregular labs tsh 19miu/l imaging ecg: afib w/ rvr at 140 dx atrial fibrillation w/ rvr",output:`### Subjective
68-year-old female with palpitations. Palpitations and lightheadedness for 1 day. ROS: No chest pain.
Past Medical History: HTN
Medications: Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Cardiac: irregularly irregular

Laboratory Results:
- TSH: 1.9 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- ECG: Afib with RVR at 140

### Assessment
Primary Diagnosis: Atrial fibrillation with RVR (ICD-10: I48.91)

Differential Diagnoses:
- SVT

### Plan
1. IV diltiazem bolus then drip
2. Anticoagulation assessment`},{id:"Cardiology-15",description:"32yo f c/o chest tightness intermittent chest tigh...",input:"32yo f c/o chest tightness intermittent chest tightness w/ exertion for 2 hours pmh cad on aspirin 81 mg daily atorvastatin 40 mg daily vs bp 118/76 hr 88 t 374 rr 18 spo2 97 pe cardiac: regular rhythm labs troponin 016ng/ml imaging ecg: st depressions in v4-v6 dx nstemi",output:`### Subjective
32-year-old female with chest tightness. Intermittent chest tightness with exertion for 2 hours. ROS: No syncope.
Past Medical History: CAD
Medications: Aspirin 81 mg daily, Atorvastatin 40 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Cardiac: regular rhythm

Laboratory Results:
- Troponin: 0.16 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG: ST depressions in V4-V6

### Assessment
Primary Diagnosis: NSTEMI (ICD-10: I21.4)

Differential Diagnoses:
- Unstable angina

### Plan
1. Heparin infusion
2. Cardiology admission
3. Consider cardiac cath`},{id:"Cardiology-16",description:"50yo m c/o palpitations palpitations and lighthead...",input:"50yo m c/o palpitations palpitations and lightheadedness for 1 day pmh htn on lisinopril 10 mg daily vs bp 118/7 hr 72 t 381 rr 20 spo2 97 pe cardiac: irregularly irregular labs tsh 19miu/l imaging ecg: afib with rvr at 140 dx atrial fibrillation with rvr",output:`### Subjective
50-year-old male with palpitations. Palpitations and lightheadedness for 1 day. ROS: No chest pain.
Past Medical History: HTN
Medications: Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Cardiac: irregularly irregular

Laboratory Results:
- TSH: 1.9 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- ECG: Afib with RVR at 140

### Assessment
Primary Diagnosis: Atrial fibrillation with RVR (ICD-10: I48.91)

Differential Diagnoses:
- SVT

### Plan
1. IV diltiazem bolus then drip
2. Anticoagulation assessment`},{id:"Cardiology-17",description:"44yo f c/o chest tightness intermittent chest tigh...",input:"44yo f c/o chest tightness intermittent chest tightness w/ exertion for 2 hours pmh cad on aspirin 81 mg daily atorvastati 40 mg daily vs bp 148/92 hr 110 t 381 rr 20 spo2 98 pe cardiac: regular rhythm labs troponin 016ng/ml imaging ecg: st depressions in v4-v6 dx nstem",output:`### Subjective
44-year-old female with chest tightness. Intermittent chest tightness with exertion for 2 hours. ROS: No syncope.
Past Medical History: CAD
Medications: Aspirin 81 mg daily, Atorvastatin 40 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Cardiac: regular rhythm

Laboratory Results:
- Troponin: 0.16 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG: ST depressions in V4-V6

### Assessment
Primary Diagnosis: NSTEMI (ICD-10: I21.4)

Differential Diagnoses:
- Unstable angina

### Plan
1. Heparin infusion
2. Cardiology admission
3. Consider cardiac cath`},{id:"Cardiology-18",description:"58yo m c/o palpitations palpitations and lighthead...",input:"58yo m c/o palpitations palpitations and lightheadedness for 1 day pmh htn on lisinopril 10 mg daily vs bp 130/84 hr 110 t 381 rr 18 spo2 97 pe cardiac: irregularly irregular labs tsh 19miu/l imaging ecg: afib with rvr at 140 dx atrial fibrillation with rvr",output:`### Subjective
58-year-old male with palpitations. Palpitations and lightheadedness for 1 day. ROS: No chest pain.
Past Medical History: HTN
Medications: Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Cardiac: irregularly irregular

Laboratory Results:
- TSH: 1.9 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- ECG: Afib with RVR at 140

### Assessment
Primary Diagnosis: Atrial fibrillation with RVR (ICD-10: I48.91)

Differential Diagnoses:
- SVT

### Plan
1. IV diltiazem bolus then drip
2. Anticoagulation assessment`},{id:"Cardiology-19",description:"18yo f c/o chest tightness intermittent chest tigh...",input:"18yo f c/o chest tightness intermittent chest tightness w/ exertion for 2 hours pmh cad on aspirin 81 mg daily atorvastatin 40 mg daily vs bp 130/84 hr 110 t 367 rr 20 spo2 95 pe cardiac: regular rhythm labs troponin 016ng/ml imaging ecg: st depressions in v4-v6 dx nstemi",output:`### Subjective
18-year-old female with chest tightness. Intermittent chest tightness with exertion for 2 hours. ROS: No syncope.
Past Medical History: CAD
Medications: Aspirin 81 mg daily, Atorvastatin 40 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Cardiac: regular rhythm

Laboratory Results:
- Troponin: 0.16 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG: ST depressions in V4-V6

### Assessment
Primary Diagnosis: NSTEMI (ICD-10: I21.4)

Differential Diagnoses:
- Unstable angina

### Plan
1. Heparin infusion
2. Cardiology admission
3. Consider cardiac cath`},{id:"Cardiology-20",description:"39yo m c/o palpitations palpitations and lighthead...",input:"39yo m c/o palpitations palpitations and lightheadedness for 1 day pmh htn on lisinopril 10 mg daily vs bp 136/86 hr 72 t 381 rr 16 spo2 98 pe cardiac: irregularl irregular labs tsh 19miu/l imaging ecg: afib w/ rvr at 140 dx atrial fibrillation w/ rvr",output:`### Subjective
39-year-old male with palpitations. Palpitations and lightheadedness for 1 day. ROS: No chest pain.
Past Medical History: HTN
Medications: Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Cardiac: irregularly irregular

Laboratory Results:
- TSH: 1.9 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- ECG: Afib with RVR at 140

### Assessment
Primary Diagnosis: Atrial fibrillation with RVR (ICD-10: I48.91)

Differential Diagnoses:
- SVT

### Plan
1. IV diltiazem bolus then drip
2. Anticoagulation assessment`},{id:"Cardiology-21",description:"55yo m c/o chest tightness intermittent chest tigh...",input:"55yo m c/o chest tightness intermittent chest tightness w/ exertion for 2 hours pmh cad on aspirin 81 mg daily atorvastatin 40 mg daily vs bp 130/84 hr 88 t 381 rr 16 spo2 97 pe cardiac: regular rhythm labs troponin 016ng/ml imaging ecg: st depressions in v4-v6 dx nstemi",output:`### Subjective
55-year-old male with chest tightness. Intermittent chest tightness with exertion for 2 hours. ROS: No syncope.
Past Medical History: CAD
Medications: Aspirin 81 mg daily, Atorvastatin 40 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Cardiac: regular rhythm

Laboratory Results:
- Troponin: 0.16 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG: ST depressions in V4-V6

### Assessment
Primary Diagnosis: NSTEMI (ICD-10: I21.4)

Differential Diagnoses:
- Unstable angina

### Plan
1. Heparin infusion
2. Cardiology admission
3. Consider cardiac cath`},{id:"Cardiology-22",description:"31yo m c/o palpitations palpitations and lighthead...",input:"31yo m c/o palpitations palpitations and lightheadedness for 1 day pmh htn on lisinopril 10 mg daily vs bp 130/84 hr 72 t 367 rr 16 spo2 98 pe cardiac: irregularly irregular labs tsh 19miu/l imaging ecg: afib w/ rvr at 140 dx atrial fibrillation w/ rvr",output:`### Subjective
31-year-old male with palpitations. Palpitations and lightheadedness for 1 day. ROS: No chest pain.
Past Medical History: HTN
Medications: Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Cardiac: irregularly irregular

Laboratory Results:
- TSH: 1.9 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- ECG: Afib with RVR at 140

### Assessment
Primary Diagnosis: Atrial fibrillation with RVR (ICD-10: I48.91)

Differential Diagnoses:
- SVT

### Plan
1. IV diltiazem bolus then drip
2. Anticoagulation assessment`},{id:"Cardiology-23",description:"22yo f c/o chest tightness intermittent chest tigh...",input:"22yo f c/o chest tightness intermittent chest tightness w/ exertion for 2 hours pmh cad on aspirin 81 mg daily atorvastatin 40 mg daily vs bp 118/76 hr 72 t 374 rr 16 spo2 95 pe cardiac: regular rhythm labs troponin 016ng/ml imagin ecg: st depressions in v4-v6 dx nstemi",output:`### Subjective
22-year-old female with chest tightness. Intermittent chest tightness with exertion for 2 hours. ROS: No syncope.
Past Medical History: CAD
Medications: Aspirin 81 mg daily, Atorvastatin 40 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Cardiac: regular rhythm

Laboratory Results:
- Troponin: 0.16 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG: ST depressions in V4-V6

### Assessment
Primary Diagnosis: NSTEMI (ICD-10: I21.4)

Differential Diagnoses:
- Unstable angina

### Plan
1. Heparin infusion
2. Cardiology admission
3. Consider cardiac cath`},{id:"Cardiology-24",description:"20yo m c/o palpitations palpitations and lighthead...",input:"20yo m c/o palpitations palpitations and lightheadedness for 1 day pmh htn on lisinopril 10 mg daily vs bp 130/84 hr 88 t 381 rr 16 spo2 95 pe cardiac: irregularly irregular labs tsh 19miu/l imaging ecg: afib with rvr at 140 dx atrial fibrillation with rvr",output:`### Subjective
20-year-old male with palpitations. Palpitations and lightheadedness for 1 day. ROS: No chest pain.
Past Medical History: HTN
Medications: Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Cardiac: irregularly irregular

Laboratory Results:
- TSH: 1.9 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- ECG: Afib with RVR at 140

### Assessment
Primary Diagnosis: Atrial fibrillation with RVR (ICD-10: I48.91)

Differential Diagnoses:
- SVT

### Plan
1. IV diltiazem bolus then drip
2. Anticoagulation assessment`},{id:"Cardiology-25",description:"79yo m c/o chest tightness intermittent chest tigh...",input:"79yo m c/o chest tightness intermittent chest tightness w/ exertion for 2 hours pmh cad on aspirin 81 mg daily atorvastatin 40 mg daily vs bp 130/84 hr 88 t 374 rr 16 spo2 95 pe cardiac: regula rhythm labs troponin 016ng/ml imaging ecg: st depressions in v4-v6 dx nstemi",output:`### Subjective
79-year-old male with chest tightness. Intermittent chest tightness with exertion for 2 hours. ROS: No syncope.
Past Medical History: CAD
Medications: Aspirin 81 mg daily, Atorvastatin 40 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Cardiac: regular rhythm

Laboratory Results:
- Troponin: 0.16 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG: ST depressions in V4-V6

### Assessment
Primary Diagnosis: NSTEMI (ICD-10: I21.4)

Differential Diagnoses:
- Unstable angina

### Plan
1. Heparin infusion
2. Cardiology admission
3. Consider cardiac cath`}]},{name:"Dermatology",cases:[{id:"Dermatology-1",description:"75yo f c/o scaly plaques chronic pruritic plaques ...",input:"75yo f c/o scaly plaques chronic pruritic plaques on elbows and knees. pmh none on none vs bp 130/84 hr 110 t 37.4 rr 18 spo2 97 pe skin: erythematous plaques with silvery scale labs none imaging none dx psoriasis",output:`### Subjective
75-year-old female with scaly plaques. Chronic pruritic plaques on elbows and knees. ROS: No joint pain.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Skin: erythematous plaques with silvery scale

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Psoriasis (ICD-10: L40.9)

Differential Diagnoses:
- Eczema

### Plan
1. Topical corticosteroid twice daily
2. Moisturizer`},{id:"Dermatology-2",description:"82yo m c/o itchy rash itchy rash on flexor surface...",input:"82yo m c/o itchy rash itchy rash on flexor surfaces for several weeks. pmh atopy on none vs bp 130/84 hr 96 t 36.7 rr 18 spo2 97 pe skin: eczematous patches labs none imaging none dx atopic dermatitis",output:`### Subjective
82-year-old male with itchy rash. Itchy rash on flexor surfaces for several weeks. ROS: No fever.
Past Medical History: Atopy
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Skin: eczematous patches

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Atopic dermatitis (ICD-10: L20.9)

Differential Diagnoses:
- Contact dermatitis

### Plan
1. Topical hydrocortisone
2. Avoid triggers`},{id:"Dermatology-3",description:"31yo m c/o scaly plaques chronic pruritic plaques ...",input:"31yo m c/o scaly plaques chronic pruritic plaques on elbows and knees. pmh none on none vs bp 130/84 hr 72 t 36.7 rr 20 spo2 98 pe skin: erythematous plaques with silvery scale labs none imaging none dx psoriasis",output:`### Subjective
31-year-old male with scaly plaques. Chronic pruritic plaques on elbows and knees. ROS: No joint pain.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Skin: erythematous plaques with silvery scale

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Psoriasis (ICD-10: L40.9)

Differential Diagnoses:
- Eczema

### Plan
1. Topical corticosteroid twice daily
2. Moisturizer`},{id:"Dermatology-4",description:"66yo f c/o itchy rash itchy rash on flexor surface...",input:"66yo f c/o itchy rash itchy rash on flexor surfaces for several weeks. pmh atopy on none vs bp 136/86 hr 88 t 36.7 rr 20 spo2 95 pe skin: eczematous patches labs none imaging none dx atopic dermatitis",output:`### Subjective
66-year-old female with itchy rash. Itchy rash on flexor surfaces for several weeks. ROS: No fever.
Past Medical History: Atopy
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Skin: eczematous patches

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Atopic dermatitis (ICD-10: L20.9)

Differential Diagnoses:
- Contact dermatitis

### Plan
1. Topical hydrocortisone
2. Avoid triggers`},{id:"Dermatology-5",description:"26yo f c/o scaly plaques chronic pruritic plaques ...",input:"26yo f c/o scaly plaques chronic pruritic plaques on elbows and knees. pmh none on none vs bp 148/92 hr 110 t 36.7 rr 16 spo2 97 pe skin: erythematous plaques w/ silvery scale labs none imaging none dx psoriasis",output:`### Subjective
26-year-old female with scaly plaques. Chronic pruritic plaques on elbows and knees. ROS: No joint pain.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Skin: erythematous plaques with silvery scale

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Psoriasis (ICD-10: L40.9)

Differential Diagnoses:
- Eczema

### Plan
1. Topical corticosteroid twice daily
2. Moisturizer`},{id:"Dermatology-6",description:"42yo f c/o itchy rash itch rash on flexor surfaces...",input:"42yo f c/o itchy rash itch rash on flexor surfaces for several weeks. pmh atop on none vs bp 148/92 hr 96 t 38.1 rr 16 spo2 97 pe skin: eczematous patches labs none imaging none dx atopic dermatitis",output:`### Subjective
42-year-old female with itchy rash. Itchy rash on flexor surfaces for several weeks. ROS: No fever.
Past Medical History: Atopy
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Skin: eczematous patches

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Atopic dermatitis (ICD-10: L20.9)

Differential Diagnoses:
- Contact dermatitis

### Plan
1. Topical hydrocortisone
2. Avoid triggers`},{id:"Dermatology-7",description:"54yo m c/o scaly plaques chronic pruritic plaques ...",input:"54yo m c/o scaly plaques chronic pruritic plaques on elbows and knees. pmh none on none vs bp 148/92 hr 72 t 37.4 rr 20 spo2 95 pe skin: erythematous plaques with silvery scale labs none imaging none dx psoriasi",output:`### Subjective
54-year-old male with scaly plaques. Chronic pruritic plaques on elbows and knees. ROS: No joint pain.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Skin: erythematous plaques with silvery scale

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Psoriasis (ICD-10: L40.9)

Differential Diagnoses:
- Eczema

### Plan
1. Topical corticosteroid twice daily
2. Moisturizer`},{id:"Dermatology-8",description:"27yo f c/o itchy rash itchy rash on flexor surface...",input:"27yo f c/o itchy rash itchy rash on flexor surfaces for several weeks. pmh atopy on none vs bp 136/86 hr 110 t 36.7 rr 18 spo2 98 pe skin eczematous patches labs none imaging none dx atopic dermatitis",output:`### Subjective
27-year-old female with itchy rash. Itchy rash on flexor surfaces for several weeks. ROS: No fever.
Past Medical History: Atopy
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Skin: eczematous patches

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Atopic dermatitis (ICD-10: L20.9)

Differential Diagnoses:
- Contact dermatitis

### Plan
1. Topical hydrocortisone
2. Avoid triggers`},{id:"Dermatology-9",description:"60yo f c/o scaly plaques chronic pruritic plaques ...",input:"60yo f c/o scaly plaques chronic pruritic plaques on elbows and knees. pmh none on none vs bp 136/86 hr 110 t 37.4 rr 18 spo2 95 pe skin: erythematous plaques w/ silvery scale labs none imaging none dx psoriasis",output:`### Subjective
60-year-old female with scaly plaques. Chronic pruritic plaques on elbows and knees. ROS: No joint pain.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Skin: erythematous plaques with silvery scale

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Psoriasis (ICD-10: L40.9)

Differential Diagnoses:
- Eczema

### Plan
1. Topical corticosteroid twice daily
2. Moisturizer`},{id:"Dermatology-10",description:"34yo m c/o itchy rash itchy rash on flexor surface...",input:"34yo m c/o itchy rash itchy rash on flexor surfaces for several weeks. pmh atopy on none vs bp 148/92 hr 96 t 37.4 rr 16 spo2 98 pe skin: eczematous patches labs none imaging none dx atopic dermatitis",output:`### Subjective
34-year-old male with itchy rash. Itchy rash on flexor surfaces for several weeks. ROS: No fever.
Past Medical History: Atopy
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Skin: eczematous patches

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Atopic dermatitis (ICD-10: L20.9)

Differential Diagnoses:
- Contact dermatitis

### Plan
1. Topical hydrocortisone
2. Avoid triggers`}]},{name:"Emergency Medicine",cases:[{id:"Emergency Medicine-1",description:"41yo m c/o crushing chest pain sudden onset subste...",input:"41yo m c/o crushing chest pain sudden onset substernal chest pressure radiating to left arm for 45 minutes w/ diaphoresis pmh hypertension smoking on amlodipine 5 mg daily vs bp 130/8 hr 88 t 374 rr 18 spo2 95 pe cardiac: tachycardic lungs: clear labs troponin 18ng/ml imaging ecg shows st elevation in leads ii iii avf dx st-elevation myocardial infarction",output:`### Subjective
41-year-old male with crushing chest pain. Sudden onset substernal chest pressure radiating to left arm for 45 minutes with diaphoresis. ROS: Nausea present, no trauma.
Past Medical History: Hypertension, Smoking
Medications: Amlodipine 5 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Cardiac: tachycardic
- Lungs: clear

Laboratory Results:
- Troponin: 1.8 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG shows ST elevation in leads II, III, aVF

### Assessment
Primary Diagnosis: ST-elevation myocardial infarction (ICD-10: I21.3)

Differential Diagnoses:
- Aortic dissection
- Pulmonary embolism

### Plan
1. Aspirin 325 mg chewed
2. Activate cath lab for emergent PCI
3. Heparin bolus and infusion`},{id:"Emergency Medicine-2",description:"46yo f c/o fever & confusion 2 days of fever chill...",input:"46yo f c/o fever & confusion 2 days of fever chills confusion & hypotension pmh diabetes on metformin 500 mg bid vs bp 118/76 hr 96 t 367 rr 20 spo2 95 pe general ill-appearing skin: warm labs lactate 36mmol/l imaging cxr: rt lower lobe opacity dx sepsis",output:`### Subjective
46-year-old female with fever and confusion. 2 days of fever, chills, confusion, and hypotension. ROS: No focal neuro deficits.
Past Medical History: Diabetes
Medications: Metformin 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- General: ill-appearing
- Skin: warm

Laboratory Results:
- Lactate: 3.6 mmol/L (Ref: 0.5-2.2)

Imaging/Diagnostics:
- CXR: right lower lobe opacity

### Assessment
Primary Diagnosis: Sepsis (ICD-10: A41.9)

Differential Diagnoses:
- Pneumonia
- UTI

### Plan
1. Sepsis bundle: 30 mL/kg IV fluids
2. Broad-spectrum antibiotics
3. Blood cultures x2`},{id:"Emergency Medicine-3",description:"23yo f c/o hip pain after fall mechanical fall at ...",input:"23yo f c/o hip pain after fall mechanical fall at home w/ immediate rt hip pain & inability to bear weight pmh osteoporosis on alendronate 70 mg weekly vs bp 136/86 hr 110 t 374 rr 20 spo2 95 pe rt leg shortened & externally rotated labs hemoglobin 112g/dl imaging x-ray: displaced femoral neck fx dx hip fx rt",output:`### Subjective
23-year-old female with hip pain after fall. Mechanical fall at home with immediate right hip pain and inability to bear weight. ROS: No head trauma or LOC.
Past Medical History: Osteoporosis
Medications: Alendronate 70 mg weekly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Right leg shortened and externally rotated

Laboratory Results:
- Hemoglobin: 11.2 g/dL (Ref: 12-16)

Imaging/Diagnostics:
- X-ray: displaced femoral neck fracture

### Assessment
Primary Diagnosis: Hip fracture, right (ICD-10: S72.001A)

Differential Diagnoses:
- Pelvic fracture

### Plan
1. Pain control
2. Orthopedic consult for operative repair
3. NPO`},{id:"Emergency Medicine-4",description:"68yo m c/o crushing chest pain sudden onset subste...",input:"68yo m c/o crushing chest pain sudden onset substernal chest pressure radiating to lt arm for 45 minutes w/ diaphoresis pmh hypertension smoking on amlodipine 5 mg daily vs bp 148/92 hr 88 t 374 rr 20 spo2 95 pe cardiac: tachycardic lungs: clear labs troponin 18ng/ml imaging ecg shows st elevation in leads ii iii avf dx st-elevation myocardial infarction",output:`### Subjective
68-year-old male with crushing chest pain. Sudden onset substernal chest pressure radiating to left arm for 45 minutes with diaphoresis. ROS: Nausea present, no trauma.
Past Medical History: Hypertension, Smoking
Medications: Amlodipine 5 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Cardiac: tachycardic
- Lungs: clear

Laboratory Results:
- Troponin: 1.8 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG shows ST elevation in leads II, III, aVF

### Assessment
Primary Diagnosis: ST-elevation myocardial infarction (ICD-10: I21.3)

Differential Diagnoses:
- Aortic dissection
- Pulmonary embolism

### Plan
1. Aspirin 325 mg chewed
2. Activate cath lab for emergent PCI
3. Heparin bolus and infusion`},{id:"Emergency Medicine-5",description:"22yo f c/o fever & confusion 2 days of fever chill...",input:"22yo f c/o fever & confusion 2 days of fever chills confusion & hypotension pmh diabetes on metformin 500 mg bid vs bp 148/92 hr 72 t 367 rr 20 spo2 98 pe general: ill-appearing skin: warm labs lactate 36mmol/l imaging cxr: rt lower lobe opacity dx sepsis",output:`### Subjective
22-year-old female with fever and confusion. 2 days of fever, chills, confusion, and hypotension. ROS: No focal neuro deficits.
Past Medical History: Diabetes
Medications: Metformin 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: ill-appearing
- Skin: warm

Laboratory Results:
- Lactate: 3.6 mmol/L (Ref: 0.5-2.2)

Imaging/Diagnostics:
- CXR: right lower lobe opacity

### Assessment
Primary Diagnosis: Sepsis (ICD-10: A41.9)

Differential Diagnoses:
- Pneumonia
- UTI

### Plan
1. Sepsis bundle: 30 mL/kg IV fluids
2. Broad-spectrum antibiotics
3. Blood cultures x2`},{id:"Emergency Medicine-6",description:"53yo m c/o hip pain after fall mechanical fall at ...",input:"53yo m c/o hip pain after fall mechanical fall at home w/ immediate rt hip pain & inability to bear weight pmh osteoporosis on alendronate 70 mg weekly vs bp 136/86 hr 110 t 381 rr 16 spo2 98 pe rt leg shortened & externall rotated labs hemoglobin 112g/dl imaging x-ray: displaced femoral neck fx dx hip fx rt",output:`### Subjective
53-year-old male with hip pain after fall. Mechanical fall at home with immediate right hip pain and inability to bear weight. ROS: No head trauma or LOC.
Past Medical History: Osteoporosis
Medications: Alendronate 70 mg weekly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Right leg shortened and externally rotated

Laboratory Results:
- Hemoglobin: 11.2 g/dL (Ref: 12-16)

Imaging/Diagnostics:
- X-ray: displaced femoral neck fracture

### Assessment
Primary Diagnosis: Hip fracture, right (ICD-10: S72.001A)

Differential Diagnoses:
- Pelvic fracture

### Plan
1. Pain control
2. Orthopedic consult for operative repair
3. NPO`},{id:"Emergency Medicine-7",description:"70yo f c/o crushing chest pain sudden onset subste...",input:"70yo f c/o crushing chest pain sudden onset substernal chest pressure radiating to lt arm for 45 minutes w/ diaphoresis pmh hypertension smoking on amlodipine 5 mg daily vs bp 136/86 hr 88 t 374 rr 16 spo2 98 pe cardiac: tachycardic lungs: clear labs troponin 18ng/ml imaging ecg shows st elevation in leads ii iii avf dx st-elevation myocardial infarction",output:`### Subjective
70-year-old female with crushing chest pain. Sudden onset substernal chest pressure radiating to left arm for 45 minutes with diaphoresis. ROS: Nausea present, no trauma.
Past Medical History: Hypertension, Smoking
Medications: Amlodipine 5 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Cardiac: tachycardic
- Lungs: clear

Laboratory Results:
- Troponin: 1.8 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG shows ST elevation in leads II, III, aVF

### Assessment
Primary Diagnosis: ST-elevation myocardial infarction (ICD-10: I21.3)

Differential Diagnoses:
- Aortic dissection
- Pulmonary embolism

### Plan
1. Aspirin 325 mg chewed
2. Activate cath lab for emergent PCI
3. Heparin bolus and infusion`},{id:"Emergency Medicine-8",description:"23yo f c/o fever & confusion 2 days of fever chill...",input:"23yo f c/o fever & confusion 2 days of fever chills confusion & hypotension pmh diabetes on metformi 500 mg bid vs bp 148/92 hr 110 t 381 rr 18 spo2 98 pe general: ill-appearing skin: warm labs lactate 36mmol/l imaging cxr: rt lower lobe opacity dx sepsis",output:`### Subjective
23-year-old female with fever and confusion. 2 days of fever, chills, confusion, and hypotension. ROS: No focal neuro deficits.
Past Medical History: Diabetes
Medications: Metformin 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: ill-appearing
- Skin: warm

Laboratory Results:
- Lactate: 3.6 mmol/L (Ref: 0.5-2.2)

Imaging/Diagnostics:
- CXR: right lower lobe opacity

### Assessment
Primary Diagnosis: Sepsis (ICD-10: A41.9)

Differential Diagnoses:
- Pneumonia
- UTI

### Plan
1. Sepsis bundle: 30 mL/kg IV fluids
2. Broad-spectrum antibiotics
3. Blood cultures x2`},{id:"Emergency Medicine-9",description:"61yo f c/o hip pain after fall mechanical fall at ...",input:"61yo f c/o hip pain after fall mechanical fall at home w/ immediate rt hip pain & inability to bear weight pmh osteoporosis on alendronate 70 mg weekly vs bp 136/86 hr 110 t 367 rr 18 spo2 95 pe rt leg shortened & externally rotated labs hemoglobin 112g/dl imaging x-ray: displaced femoral neck fx dx hip fx rt",output:`### Subjective
61-year-old female with hip pain after fall. Mechanical fall at home with immediate right hip pain and inability to bear weight. ROS: No head trauma or LOC.
Past Medical History: Osteoporosis
Medications: Alendronate 70 mg weekly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Right leg shortened and externally rotated

Laboratory Results:
- Hemoglobin: 11.2 g/dL (Ref: 12-16)

Imaging/Diagnostics:
- X-ray: displaced femoral neck fracture

### Assessment
Primary Diagnosis: Hip fracture, right (ICD-10: S72.001A)

Differential Diagnoses:
- Pelvic fracture

### Plan
1. Pain control
2. Orthopedic consult for operative repair
3. NPO`},{id:"Emergency Medicine-10",description:"30yo m c/o crushing chest pain sudden onset subste...",input:"30yo m c/o crushing chest pain sudden onset substernal chest pressure radiating to lt arm for 45 minutes w/ diaphoresis pmh hypertension smoking on amlodipine 5 mg daily vs bp 118/76 hr 96 t 374 rr 20 spo2 97 pe cardiac: tachycardic lungs: clear labs troponin 18ng/ml imaging ecg shows st elevatio in leads ii iii avf dx st-elevation myocardia infarction",output:`### Subjective
30-year-old male with crushing chest pain. Sudden onset substernal chest pressure radiating to left arm for 45 minutes with diaphoresis. ROS: Nausea present, no trauma.
Past Medical History: Hypertension, Smoking
Medications: Amlodipine 5 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Cardiac: tachycardic
- Lungs: clear

Laboratory Results:
- Troponin: 1.8 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG shows ST elevation in leads II, III, aVF

### Assessment
Primary Diagnosis: ST-elevation myocardial infarction (ICD-10: I21.3)

Differential Diagnoses:
- Aortic dissection
- Pulmonary embolism

### Plan
1. Aspirin 325 mg chewed
2. Activate cath lab for emergent PCI
3. Heparin bolus and infusion`},{id:"Emergency Medicine-11",description:"69yo m c/o fever & confusio 2 days of fever chills...",input:"69yo m c/o fever & confusio 2 days of fever chills confusion & hypotension pmh diabetes on metformin 500 mg bid vs bp 118/76 hr 96 t 367 rr 18 spo2 98 pe general: ill-appearing skin: warm labs lactate 36mmol/l imaging cxr: rt lower lobe opacity dx sepsis",output:`### Subjective
69-year-old male with fever and confusion. 2 days of fever, chills, confusion, and hypotension. ROS: No focal neuro deficits.
Past Medical History: Diabetes
Medications: Metformin 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: ill-appearing
- Skin: warm

Laboratory Results:
- Lactate: 3.6 mmol/L (Ref: 0.5-2.2)

Imaging/Diagnostics:
- CXR: right lower lobe opacity

### Assessment
Primary Diagnosis: Sepsis (ICD-10: A41.9)

Differential Diagnoses:
- Pneumonia
- UTI

### Plan
1. Sepsis bundle: 30 mL/kg IV fluids
2. Broad-spectrum antibiotics
3. Blood cultures x2`},{id:"Emergency Medicine-12",description:"37yo m c/o hip pain afte fall mechanical fall at h...",input:"37yo m c/o hip pain afte fall mechanical fall at home w/ immediate right hip pain & inability to bear weight pmh osteoporosis on alendronate 70 mg weekly vs bp 148/92 hr 88 t 367 rr 20 spo2 98 pe right leg shortened & externally rotated labs hemoglobin 112g/dl imaging x-ray: displaced femoral neck fx dx hip fx right",output:`### Subjective
37-year-old male with hip pain after fall. Mechanical fall at home with immediate right hip pain and inability to bear weight. ROS: No head trauma or LOC.
Past Medical History: Osteoporosis
Medications: Alendronate 70 mg weekly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Right leg shortened and externally rotated

Laboratory Results:
- Hemoglobin: 11.2 g/dL (Ref: 12-16)

Imaging/Diagnostics:
- X-ray: displaced femoral neck fracture

### Assessment
Primary Diagnosis: Hip fracture, right (ICD-10: S72.001A)

Differential Diagnoses:
- Pelvic fracture

### Plan
1. Pain control
2. Orthopedic consult for operative repair
3. NPO`},{id:"Emergency Medicine-13",description:"70yo f c/o crushing chest pain sudden onset subste...",input:"70yo f c/o crushing chest pain sudden onset substernal chest pressure radiating to lt arm for 45 minute w/ diaphoresis pmh hypertension smoking on amlodipine 5 mg daily vs bp 136/86 hr 72 t 367 rr 20 spo2 97 pe cardiac: tachycardic lungs: clea labs troponin 18ng/ml imaging ecg shows st elevation in leads ii iii avf dx st-elevation myocardial infarction",output:`### Subjective
70-year-old female with crushing chest pain. Sudden onset substernal chest pressure radiating to left arm for 45 minutes with diaphoresis. ROS: Nausea present, no trauma.
Past Medical History: Hypertension, Smoking
Medications: Amlodipine 5 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Cardiac: tachycardic
- Lungs: clear

Laboratory Results:
- Troponin: 1.8 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG shows ST elevation in leads II, III, aVF

### Assessment
Primary Diagnosis: ST-elevation myocardial infarction (ICD-10: I21.3)

Differential Diagnoses:
- Aortic dissection
- Pulmonary embolism

### Plan
1. Aspirin 325 mg chewed
2. Activate cath lab for emergent PCI
3. Heparin bolus and infusion`},{id:"Emergency Medicine-14",description:"52yo f c/o feve & confusion 2 days of fever chills...",input:"52yo f c/o feve & confusion 2 days of fever chills confusion & hypotension pmh diabetes on metformi 500 mg bid vs bp 118/76 hr 88 t 367 rr 18 spo2 97 pe general: ill-appearing skin: warm labs lactate 36mmol/l imaging cxr: rt lower lobe opacity dx sepsis",output:`### Subjective
52-year-old female with fever and confusion. 2 days of fever, chills, confusion, and hypotension. ROS: No focal neuro deficits.
Past Medical History: Diabetes
Medications: Metformin 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- General: ill-appearing
- Skin: warm

Laboratory Results:
- Lactate: 3.6 mmol/L (Ref: 0.5-2.2)

Imaging/Diagnostics:
- CXR: right lower lobe opacity

### Assessment
Primary Diagnosis: Sepsis (ICD-10: A41.9)

Differential Diagnoses:
- Pneumonia
- UTI

### Plan
1. Sepsis bundle: 30 mL/kg IV fluids
2. Broad-spectrum antibiotics
3. Blood cultures x2`},{id:"Emergency Medicine-15",description:"27yo f c/o hip pain after fall mechanical fall at ...",input:"27yo f c/o hip pain after fall mechanical fall at home with immediate rt hip pain & inability to bear weight pmh osteoporosis on alendronate 70 mg weekly vs bp 118/76 hr 96 t 374 rr 16 spo2 97 pe rt leg shortened & externally rotated labs hemoglobin 112g/dl imaging x-ray: displaced femoral neck fx dx hip fx rt",output:`### Subjective
27-year-old female with hip pain after fall. Mechanical fall at home with immediate right hip pain and inability to bear weight. ROS: No head trauma or LOC.
Past Medical History: Osteoporosis
Medications: Alendronate 70 mg weekly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Right leg shortened and externally rotated

Laboratory Results:
- Hemoglobin: 11.2 g/dL (Ref: 12-16)

Imaging/Diagnostics:
- X-ray: displaced femoral neck fracture

### Assessment
Primary Diagnosis: Hip fracture, right (ICD-10: S72.001A)

Differential Diagnoses:
- Pelvic fracture

### Plan
1. Pain control
2. Orthopedic consult for operative repair
3. NPO`},{id:"Emergency Medicine-16",description:"19yo m c/o crushing chest pain sudden onset subste...",input:"19yo m c/o crushing chest pain sudden onset substerna chest pressure radiating to lt arm for 45 minutes w/ diaphoresis pmh hypertension smoking on amlodipine 5 mg daily vs bp 130/84 hr 110 t 367 rr 16 spo2 97 pe cardiac: tachycardic lungs: clear labs troponin 18ng/m imaging ecg shows st elevation in leads ii iii avf dx st-elevation myocardial infarction",output:`### Subjective
19-year-old male with crushing chest pain. Sudden onset substernal chest pressure radiating to left arm for 45 minutes with diaphoresis. ROS: Nausea present, no trauma.
Past Medical History: Hypertension, Smoking
Medications: Amlodipine 5 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Cardiac: tachycardic
- Lungs: clear

Laboratory Results:
- Troponin: 1.8 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG shows ST elevation in leads II, III, aVF

### Assessment
Primary Diagnosis: ST-elevation myocardial infarction (ICD-10: I21.3)

Differential Diagnoses:
- Aortic dissection
- Pulmonary embolism

### Plan
1. Aspirin 325 mg chewed
2. Activate cath lab for emergent PCI
3. Heparin bolus and infusion`},{id:"Emergency Medicine-17",description:"23yo f c/o fever & confusion 2 days of feve chills...",input:"23yo f c/o fever & confusion 2 days of feve chills confusion & hypotension pmh diabetes on metformin 500 mg bid vs bp 148/92 hr 110 t 367 rr 20 spo2 97 pe general: ill-appearing skin warm labs lactate 36mmol/l imaging cxr: rt lower lobe opacity dx sepsis",output:`### Subjective
23-year-old female with fever and confusion. 2 days of fever, chills, confusion, and hypotension. ROS: No focal neuro deficits.
Past Medical History: Diabetes
Medications: Metformin 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- General: ill-appearing
- Skin: warm

Laboratory Results:
- Lactate: 3.6 mmol/L (Ref: 0.5-2.2)

Imaging/Diagnostics:
- CXR: right lower lobe opacity

### Assessment
Primary Diagnosis: Sepsis (ICD-10: A41.9)

Differential Diagnoses:
- Pneumonia
- UTI

### Plan
1. Sepsis bundle: 30 mL/kg IV fluids
2. Broad-spectrum antibiotics
3. Blood cultures x2`},{id:"Emergency Medicine-18",description:"59yo f c/o hip pain after fall mechanical fall at ...",input:"59yo f c/o hip pain after fall mechanical fall at home w/ immediate rt hip pain & inability to bear weight pmh osteoporosis on alendronate 70 mg weekly vs bp 130/84 hr 72 t 381 rr 20 spo2 97 pe rt leg shortened & externally rotated labs hemoglobin 112g/dl imaging x-ray: displaced femora neck fx dx hip fx rt",output:`### Subjective
59-year-old female with hip pain after fall. Mechanical fall at home with immediate right hip pain and inability to bear weight. ROS: No head trauma or LOC.
Past Medical History: Osteoporosis
Medications: Alendronate 70 mg weekly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Right leg shortened and externally rotated

Laboratory Results:
- Hemoglobin: 11.2 g/dL (Ref: 12-16)

Imaging/Diagnostics:
- X-ray: displaced femoral neck fracture

### Assessment
Primary Diagnosis: Hip fracture, right (ICD-10: S72.001A)

Differential Diagnoses:
- Pelvic fracture

### Plan
1. Pain control
2. Orthopedic consult for operative repair
3. NPO`},{id:"Emergency Medicine-19",description:"25yo f c/o crushing chest pain sudden onset subste...",input:"25yo f c/o crushing chest pain sudden onset substernal chest pressure radiating to lt arm for 45 minutes w/ diaphoresis pmh hypertension smoking on amlodipine 5 mg daily vs bp 118/76 hr 96 t 367 rr 16 spo2 95 pe cardiac: tachycardic lungs: clear labs troponin 18ng/ml imaging ecg shows st elevation in leads ii iii avf dx st-elevation myocardial infarction",output:`### Subjective
25-year-old female with crushing chest pain. Sudden onset substernal chest pressure radiating to left arm for 45 minutes with diaphoresis. ROS: Nausea present, no trauma.
Past Medical History: Hypertension, Smoking
Medications: Amlodipine 5 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Cardiac: tachycardic
- Lungs: clear

Laboratory Results:
- Troponin: 1.8 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG shows ST elevation in leads II, III, aVF

### Assessment
Primary Diagnosis: ST-elevation myocardial infarction (ICD-10: I21.3)

Differential Diagnoses:
- Aortic dissection
- Pulmonary embolism

### Plan
1. Aspirin 325 mg chewed
2. Activate cath lab for emergent PCI
3. Heparin bolus and infusion`},{id:"Emergency Medicine-20",description:"73yo f c/o fever & confusion 2 days of fever chill...",input:"73yo f c/o fever & confusion 2 days of fever chills confusion & hypotension pmh diabete on metformin 500 mg bid vs bp 118/76 hr 110 t 381 rr 20 spo2 98 pe general: ill-appearing skin: warm labs lactate 36mmol/l imaging cxr: right lower lobe opacity dx sepsis",output:`### Subjective
73-year-old female with fever and confusion. 2 days of fever, chills, confusion, and hypotension. ROS: No focal neuro deficits.
Past Medical History: Diabetes
Medications: Metformin 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: ill-appearing
- Skin: warm

Laboratory Results:
- Lactate: 3.6 mmol/L (Ref: 0.5-2.2)

Imaging/Diagnostics:
- CXR: right lower lobe opacity

### Assessment
Primary Diagnosis: Sepsis (ICD-10: A41.9)

Differential Diagnoses:
- Pneumonia
- UTI

### Plan
1. Sepsis bundle: 30 mL/kg IV fluids
2. Broad-spectrum antibiotics
3. Blood cultures x2`},{id:"Emergency Medicine-21",description:"56yo m c/o hip pain after fall mechanical fall at ...",input:"56yo m c/o hip pain after fall mechanical fall at home w/ immediate rt hip pain & inability to bear weight pmh osteoporosis on alendronate 70 mg weekly vs bp 130/84 hr 72 t 381 rr 18 spo2 98 pe rt leg shortened & externally rotated labs hemoglobin 112g/dl imaging x-ray: displaced femoral neck fx dx hip fx rt",output:`### Subjective
56-year-old male with hip pain after fall. Mechanical fall at home with immediate right hip pain and inability to bear weight. ROS: No head trauma or LOC.
Past Medical History: Osteoporosis
Medications: Alendronate 70 mg weekly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Right leg shortened and externally rotated

Laboratory Results:
- Hemoglobin: 11.2 g/dL (Ref: 12-16)

Imaging/Diagnostics:
- X-ray: displaced femoral neck fracture

### Assessment
Primary Diagnosis: Hip fracture, right (ICD-10: S72.001A)

Differential Diagnoses:
- Pelvic fracture

### Plan
1. Pain control
2. Orthopedic consult for operative repair
3. NPO`},{id:"Emergency Medicine-22",description:"82yo m c/o crushing chest pain sudden onse subster...",input:"82yo m c/o crushing chest pain sudden onse substernal chest pressure radiating to lt arm for 45 minutes w/ diaphoresis pmh hypertension smoking on amlodipine 5 mg daily vs bp 118/76 hr 110 t 374 rr 20 spo2 95 pe cardiac: tachycardic lungs: clear labs troponin 18ng/ml imaging ecg shows st elevation in leads ii iii avf dx st-elevation myocardial infarction",output:`### Subjective
82-year-old male with crushing chest pain. Sudden onset substernal chest pressure radiating to left arm for 45 minutes with diaphoresis. ROS: Nausea present, no trauma.
Past Medical History: Hypertension, Smoking
Medications: Amlodipine 5 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Cardiac: tachycardic
- Lungs: clear

Laboratory Results:
- Troponin: 1.8 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG shows ST elevation in leads II, III, aVF

### Assessment
Primary Diagnosis: ST-elevation myocardial infarction (ICD-10: I21.3)

Differential Diagnoses:
- Aortic dissection
- Pulmonary embolism

### Plan
1. Aspirin 325 mg chewed
2. Activate cath lab for emergent PCI
3. Heparin bolus and infusion`},{id:"Emergency Medicine-23",description:"72yo f c/o fever & confusion 2 days of fever chill...",input:"72yo f c/o fever & confusion 2 days of fever chills confusion & hypotensio pmh diabetes on metformin 500 mg bid vs bp 130/84 hr 96 t 374 rr 20 spo2 95 pe general: ill-appearin skin: warm labs lactate 36mmol/l imaging cxr: rt lower lobe opacity dx sepsis",output:`### Subjective
72-year-old female with fever and confusion. 2 days of fever, chills, confusion, and hypotension. ROS: No focal neuro deficits.
Past Medical History: Diabetes
Medications: Metformin 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- General: ill-appearing
- Skin: warm

Laboratory Results:
- Lactate: 3.6 mmol/L (Ref: 0.5-2.2)

Imaging/Diagnostics:
- CXR: right lower lobe opacity

### Assessment
Primary Diagnosis: Sepsis (ICD-10: A41.9)

Differential Diagnoses:
- Pneumonia
- UTI

### Plan
1. Sepsis bundle: 30 mL/kg IV fluids
2. Broad-spectrum antibiotics
3. Blood cultures x2`},{id:"Emergency Medicine-24",description:"84yo f c/o hip pain after fall mechanical fall at ...",input:"84yo f c/o hip pain after fall mechanical fall at home w/ immediate rt hip pain & inability to bear weight pmh osteoporosis on alendronate 70 mg weekly vs bp 130/84 hr 72 t 374 rr 20 spo2 95 pe rt leg shortened & externally rotated labs hemoglobin 112g/dl imaging x-ray: displaced femoral neck fracture dx hip fracture rt",output:`### Subjective
84-year-old female with hip pain after fall. Mechanical fall at home with immediate right hip pain and inability to bear weight. ROS: No head trauma or LOC.
Past Medical History: Osteoporosis
Medications: Alendronate 70 mg weekly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Right leg shortened and externally rotated

Laboratory Results:
- Hemoglobin: 11.2 g/dL (Ref: 12-16)

Imaging/Diagnostics:
- X-ray: displaced femoral neck fracture

### Assessment
Primary Diagnosis: Hip fracture, right (ICD-10: S72.001A)

Differential Diagnoses:
- Pelvic fracture

### Plan
1. Pain control
2. Orthopedic consult for operative repair
3. NPO`},{id:"Emergency Medicine-25",description:"20yo m c/o crushing chest pain sudden onset subste...",input:"20yo m c/o crushing chest pain sudden onset substernal ches pressure radiating to lt arm for 45 minutes w/ diaphoresis pmh hypertension smoking on amlodipine 5 mg dail vs bp 136/86 hr 96 t 374 rr 18 spo2 95 pe cardiac: tachycardic lungs: clear labs troponin 18ng/ml imaging ecg shows st elevation in leads ii iii avf dx st-elevation myocardial infarction",output:`### Subjective
20-year-old male with crushing chest pain. Sudden onset substernal chest pressure radiating to left arm for 45 minutes with diaphoresis. ROS: Nausea present, no trauma.
Past Medical History: Hypertension, Smoking
Medications: Amlodipine 5 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Cardiac: tachycardic
- Lungs: clear

Laboratory Results:
- Troponin: 1.8 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG shows ST elevation in leads II, III, aVF

### Assessment
Primary Diagnosis: ST-elevation myocardial infarction (ICD-10: I21.3)

Differential Diagnoses:
- Aortic dissection
- Pulmonary embolism

### Plan
1. Aspirin 325 mg chewed
2. Activate cath lab for emergent PCI
3. Heparin bolus and infusion`},{id:"Emergency Medicine-26",description:"60yo f c/o fever & confusion 2 days of fever chill...",input:"60yo f c/o fever & confusion 2 days of fever chills confusion & hypotension pmh diabetes on metformi 500 mg bid vs bp 118/76 hr 88 t 381 rr 20 spo2 95 pe general: ill-appearing skin: warm labs lactate 36mmol/l imaging cxr: right lower lobe opacity dx sepsi",output:`### Subjective
60-year-old female with fever and confusion. 2 days of fever, chills, confusion, and hypotension. ROS: No focal neuro deficits.
Past Medical History: Diabetes
Medications: Metformin 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- General: ill-appearing
- Skin: warm

Laboratory Results:
- Lactate: 3.6 mmol/L (Ref: 0.5-2.2)

Imaging/Diagnostics:
- CXR: right lower lobe opacity

### Assessment
Primary Diagnosis: Sepsis (ICD-10: A41.9)

Differential Diagnoses:
- Pneumonia
- UTI

### Plan
1. Sepsis bundle: 30 mL/kg IV fluids
2. Broad-spectrum antibiotics
3. Blood cultures x2`},{id:"Emergency Medicine-27",description:"42yo m c/o hip pain after fall mechanical fall at ...",input:"42yo m c/o hip pain after fall mechanical fall at home w/ immediate rt hip pain & inability to bear weight pmh osteoporosis on alendronate 70 mg weekly vs bp 118/76 hr 72 t 381 rr 20 spo2 98 pe rt leg shortened & externally rotated labs hemoglobin 112g/dl imaging x-ray: displaced femoral neck fx dx hip fx rt",output:`### Subjective
42-year-old male with hip pain after fall. Mechanical fall at home with immediate right hip pain and inability to bear weight. ROS: No head trauma or LOC.
Past Medical History: Osteoporosis
Medications: Alendronate 70 mg weekly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Right leg shortened and externally rotated

Laboratory Results:
- Hemoglobin: 11.2 g/dL (Ref: 12-16)

Imaging/Diagnostics:
- X-ray: displaced femoral neck fracture

### Assessment
Primary Diagnosis: Hip fracture, right (ICD-10: S72.001A)

Differential Diagnoses:
- Pelvic fracture

### Plan
1. Pain control
2. Orthopedic consult for operative repair
3. NPO`},{id:"Emergency Medicine-28",description:"59yo f c/o crushing chest pain sudden onset subste...",input:"59yo f c/o crushing chest pain sudden onset substernal chest pressur radiating to left arm for 45 minutes with diaphoresis pmh hypertension smoking on amlodipine 5 mg dail vs bp 136/86 hr 110 t 367 rr 20 spo2 95 pe cardiac: tachycardic lungs: clear labs troponin 18ng/ml imaging ecg shows st elevation in leads ii iii avf dx st-elevation myocardial infarction",output:`### Subjective
59-year-old female with crushing chest pain. Sudden onset substernal chest pressure radiating to left arm for 45 minutes with diaphoresis. ROS: Nausea present, no trauma.
Past Medical History: Hypertension, Smoking
Medications: Amlodipine 5 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Cardiac: tachycardic
- Lungs: clear

Laboratory Results:
- Troponin: 1.8 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG shows ST elevation in leads II, III, aVF

### Assessment
Primary Diagnosis: ST-elevation myocardial infarction (ICD-10: I21.3)

Differential Diagnoses:
- Aortic dissection
- Pulmonary embolism

### Plan
1. Aspirin 325 mg chewed
2. Activate cath lab for emergent PCI
3. Heparin bolus and infusion`},{id:"Emergency Medicine-29",description:"24yo m c/o fever & confusion 2 days of fever chill...",input:"24yo m c/o fever & confusion 2 days of fever chill confusion & hypotension pmh diabetes on metformin 500 mg bid vs bp 148/92 hr 72 t 381 rr 20 spo2 97 pe general: ill-appearing skin: warm labs lactate 36mmol/l imaging cxr: right lower lobe opacity dx sepsis",output:`### Subjective
24-year-old male with fever and confusion. 2 days of fever, chills, confusion, and hypotension. ROS: No focal neuro deficits.
Past Medical History: Diabetes
Medications: Metformin 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- General: ill-appearing
- Skin: warm

Laboratory Results:
- Lactate: 3.6 mmol/L (Ref: 0.5-2.2)

Imaging/Diagnostics:
- CXR: right lower lobe opacity

### Assessment
Primary Diagnosis: Sepsis (ICD-10: A41.9)

Differential Diagnoses:
- Pneumonia
- UTI

### Plan
1. Sepsis bundle: 30 mL/kg IV fluids
2. Broad-spectrum antibiotics
3. Blood cultures x2`},{id:"Emergency Medicine-30",description:"23yo m c/o hip pain after fall mechanical fall at ...",input:"23yo m c/o hip pain after fall mechanical fall at home w/ immediate rt hip pain & inability to bear weight pmh osteoporosis on alendronate 70 mg weekly vs bp 130/84 hr 88 t 367 rr 16 spo2 95 pe rt leg shortened & externally rotated labs hemoglobin 112g/dl imaging x-ray: displaced femor neck fx dx hip fx rt",output:`### Subjective
23-year-old male with hip pain after fall. Mechanical fall at home with immediate right hip pain and inability to bear weight. ROS: No head trauma or LOC.
Past Medical History: Osteoporosis
Medications: Alendronate 70 mg weekly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Right leg shortened and externally rotated

Laboratory Results:
- Hemoglobin: 11.2 g/dL (Ref: 12-16)

Imaging/Diagnostics:
- X-ray: displaced femoral neck fracture

### Assessment
Primary Diagnosis: Hip fracture, right (ICD-10: S72.001A)

Differential Diagnoses:
- Pelvic fracture

### Plan
1. Pain control
2. Orthopedic consult for operative repair
3. NPO`},{id:"Emergency Medicine-31",description:"41yo m c/o crushing chest pain sudden onset subste...",input:"41yo m c/o crushing chest pain sudden onset substernal chest pressure radiating to lt arm for 45 minute with diaphoresis pmh hypertension smoking on amlodipine 5 mg daily vs bp 136/86 hr 72 t 367 rr 16 spo2 95 pe cardiac: tachycardic lungs: clear labs troponin 18ng/ml imaging ecg shows st elevation in leads ii iii avf dx st-elevation myocardial infarction",output:`### Subjective
41-year-old male with crushing chest pain. Sudden onset substernal chest pressure radiating to left arm for 45 minutes with diaphoresis. ROS: Nausea present, no trauma.
Past Medical History: Hypertension, Smoking
Medications: Amlodipine 5 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Cardiac: tachycardic
- Lungs: clear

Laboratory Results:
- Troponin: 1.8 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG shows ST elevation in leads II, III, aVF

### Assessment
Primary Diagnosis: ST-elevation myocardial infarction (ICD-10: I21.3)

Differential Diagnoses:
- Aortic dissection
- Pulmonary embolism

### Plan
1. Aspirin 325 mg chewed
2. Activate cath lab for emergent PCI
3. Heparin bolus and infusion`},{id:"Emergency Medicine-32",description:"70yo m c/o fever & confusion 2 days of fever chill...",input:"70yo m c/o fever & confusion 2 days of fever chills confusion & hypotensio pmh diabetes on metformin 500 mg bid vs bp 118/76 hr 72 t 381 rr 20 spo2 95 pe general: ill-appearing skin: warm labs lactate 36mmol/ imaging cxr: rt lower lobe opacity dx sepsis",output:`### Subjective
70-year-old male with fever and confusion. 2 days of fever, chills, confusion, and hypotension. ROS: No focal neuro deficits.
Past Medical History: Diabetes
Medications: Metformin 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- General: ill-appearing
- Skin: warm

Laboratory Results:
- Lactate: 3.6 mmol/L (Ref: 0.5-2.2)

Imaging/Diagnostics:
- CXR: right lower lobe opacity

### Assessment
Primary Diagnosis: Sepsis (ICD-10: A41.9)

Differential Diagnoses:
- Pneumonia
- UTI

### Plan
1. Sepsis bundle: 30 mL/kg IV fluids
2. Broad-spectrum antibiotics
3. Blood cultures x2`},{id:"Emergency Medicine-33",description:"70yo m c/o hip pain after fall mechanical fall at ...",input:"70yo m c/o hip pain after fall mechanical fall at home w/ immediate right hip pain & inability to bear weight pmh osteoporosis on alendronate 70 mg weekly vs bp 148/92 hr 88 t 367 rr 20 spo2 97 pe right leg shortened & externally rotated labs hemoglobi 112g/dl imaging x-ray: displaced femoral neck fx dx hip fx right",output:`### Subjective
70-year-old male with hip pain after fall. Mechanical fall at home with immediate right hip pain and inability to bear weight. ROS: No head trauma or LOC.
Past Medical History: Osteoporosis
Medications: Alendronate 70 mg weekly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Right leg shortened and externally rotated

Laboratory Results:
- Hemoglobin: 11.2 g/dL (Ref: 12-16)

Imaging/Diagnostics:
- X-ray: displaced femoral neck fracture

### Assessment
Primary Diagnosis: Hip fracture, right (ICD-10: S72.001A)

Differential Diagnoses:
- Pelvic fracture

### Plan
1. Pain control
2. Orthopedic consult for operative repair
3. NPO`},{id:"Emergency Medicine-34",description:"56yo f c/o crushing chest pain sudden onset subste...",input:"56yo f c/o crushing chest pain sudden onset substernal chest pressure radiating to lt arm for 45 minutes w/ diaphoresis pmh hypertension smoking on amlodipine 5 mg daily vs bp 118/76 hr 96 t 374 rr 16 spo2 97 pe cardiac: tachycardic lungs: clear labs troponin 18ng/ml imaging ecg shows st elevatio in leads ii iii avf dx st-elevation myocardial infarction",output:`### Subjective
56-year-old female with crushing chest pain. Sudden onset substernal chest pressure radiating to left arm for 45 minutes with diaphoresis. ROS: Nausea present, no trauma.
Past Medical History: Hypertension, Smoking
Medications: Amlodipine 5 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Cardiac: tachycardic
- Lungs: clear

Laboratory Results:
- Troponin: 1.8 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG shows ST elevation in leads II, III, aVF

### Assessment
Primary Diagnosis: ST-elevation myocardial infarction (ICD-10: I21.3)

Differential Diagnoses:
- Aortic dissection
- Pulmonary embolism

### Plan
1. Aspirin 325 mg chewed
2. Activate cath lab for emergent PCI
3. Heparin bolus and infusion`},{id:"Emergency Medicine-35",description:"82yo m c/o fever & confusion 2 days of fever chill...",input:"82yo m c/o fever & confusion 2 days of fever chills confusion & hypotension pmh diabetes on metformin 500 mg bid vs bp 136/86 hr 110 t 381 rr 20 spo2 98 pe general: ill-appearing skin: warm labs lactate 36mmol/l imaging cxr: rt lower lobe opacity dx sepsis",output:`### Subjective
82-year-old male with fever and confusion. 2 days of fever, chills, confusion, and hypotension. ROS: No focal neuro deficits.
Past Medical History: Diabetes
Medications: Metformin 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: ill-appearing
- Skin: warm

Laboratory Results:
- Lactate: 3.6 mmol/L (Ref: 0.5-2.2)

Imaging/Diagnostics:
- CXR: right lower lobe opacity

### Assessment
Primary Diagnosis: Sepsis (ICD-10: A41.9)

Differential Diagnoses:
- Pneumonia
- UTI

### Plan
1. Sepsis bundle: 30 mL/kg IV fluids
2. Broad-spectrum antibiotics
3. Blood cultures x2`},{id:"Emergency Medicine-36",description:"58yo f c/o hip pain after fall mechanical fall at ...",input:"58yo f c/o hip pain after fall mechanical fall at home w/ immediate rt hip pain & inability to bear weight pmh osteoporosi on alendronate 70 mg weekly vs bp 136/86 hr 88 t 367 rr 18 spo2 97 pe rt leg shortened & externally rotated labs hemoglobin 112g/dl imaging x-ray: displaced femoral neck fx dx hip fx rt",output:`### Subjective
58-year-old female with hip pain after fall. Mechanical fall at home with immediate right hip pain and inability to bear weight. ROS: No head trauma or LOC.
Past Medical History: Osteoporosis
Medications: Alendronate 70 mg weekly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Right leg shortened and externally rotated

Laboratory Results:
- Hemoglobin: 11.2 g/dL (Ref: 12-16)

Imaging/Diagnostics:
- X-ray: displaced femoral neck fracture

### Assessment
Primary Diagnosis: Hip fracture, right (ICD-10: S72.001A)

Differential Diagnoses:
- Pelvic fracture

### Plan
1. Pain control
2. Orthopedic consult for operative repair
3. NPO`},{id:"Emergency Medicine-37",description:"43yo m c/o crushing chest pain sudde onset subster...",input:"43yo m c/o crushing chest pain sudde onset substernal chest pressure radiating to lt arm for 45 minutes w/ diaphoresis pmh hypertension smoking on amlodipine 5 mg daily vs bp 130/84 hr 72 t 381 rr 18 spo2 97 pe cardiac: tachycardic lungs: clear labs troponin 18ng/ml imaging ecg shows st elevation in leads ii iii avf dx st-elevation myocardial infarction",output:`### Subjective
43-year-old male with crushing chest pain. Sudden onset substernal chest pressure radiating to left arm for 45 minutes with diaphoresis. ROS: Nausea present, no trauma.
Past Medical History: Hypertension, Smoking
Medications: Amlodipine 5 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Cardiac: tachycardic
- Lungs: clear

Laboratory Results:
- Troponin: 1.8 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG shows ST elevation in leads II, III, aVF

### Assessment
Primary Diagnosis: ST-elevation myocardial infarction (ICD-10: I21.3)

Differential Diagnoses:
- Aortic dissection
- Pulmonary embolism

### Plan
1. Aspirin 325 mg chewed
2. Activate cath lab for emergent PCI
3. Heparin bolus and infusion`},{id:"Emergency Medicine-38",description:"27yo f c/o fever & confusion 2 days of fever chill...",input:"27yo f c/o fever & confusion 2 days of fever chills confusion & hypotension pmh diabetes on metformin 500 mg bid vs bp 148/92 hr 110 t 367 rr 20 spo2 97 pe general: ill-appearing skin: warm labs lactate 36mmol/l imaging cxr: rt lower lobe opacity dx sepsis",output:`### Subjective
27-year-old female with fever and confusion. 2 days of fever, chills, confusion, and hypotension. ROS: No focal neuro deficits.
Past Medical History: Diabetes
Medications: Metformin 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- General: ill-appearing
- Skin: warm

Laboratory Results:
- Lactate: 3.6 mmol/L (Ref: 0.5-2.2)

Imaging/Diagnostics:
- CXR: right lower lobe opacity

### Assessment
Primary Diagnosis: Sepsis (ICD-10: A41.9)

Differential Diagnoses:
- Pneumonia
- UTI

### Plan
1. Sepsis bundle: 30 mL/kg IV fluids
2. Broad-spectrum antibiotics
3. Blood cultures x2`},{id:"Emergency Medicine-39",description:"25yo m c/o hip pain after fall mechanica fall at h...",input:"25yo m c/o hip pain after fall mechanica fall at home with immediate right hip pain & inability to bear weight pmh osteoporosis on alendronate 70 mg weekly vs bp 118/76 hr 72 t 367 rr 20 spo2 97 pe right leg shortened & externally rotated labs hemoglobin 112g/dl imaging x-ray: displaced femoral neck fracture dx hip fracture right",output:`### Subjective
25-year-old male with hip pain after fall. Mechanical fall at home with immediate right hip pain and inability to bear weight. ROS: No head trauma or LOC.
Past Medical History: Osteoporosis
Medications: Alendronate 70 mg weekly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Right leg shortened and externally rotated

Laboratory Results:
- Hemoglobin: 11.2 g/dL (Ref: 12-16)

Imaging/Diagnostics:
- X-ray: displaced femoral neck fracture

### Assessment
Primary Diagnosis: Hip fracture, right (ICD-10: S72.001A)

Differential Diagnoses:
- Pelvic fracture

### Plan
1. Pain control
2. Orthopedic consult for operative repair
3. NPO`},{id:"Emergency Medicine-40",description:"21yo m c/o crushing chest pain sudden onset subste...",input:"21yo m c/o crushing chest pain sudden onset substernal chest pressure radiatin to lt arm for 45 minutes w/ diaphoresis pmh hypertension smoking on amlodipine 5 mg daily vs bp 148/92 hr 96 t 381 rr 18 spo2 98 pe cardiac: tachycardic lungs: clear labs troponin 18ng/ml imaging ecg shows st elevation in leads ii iii avf dx st-elevation myocardial infarction",output:`### Subjective
21-year-old male with crushing chest pain. Sudden onset substernal chest pressure radiating to left arm for 45 minutes with diaphoresis. ROS: Nausea present, no trauma.
Past Medical History: Hypertension, Smoking
Medications: Amlodipine 5 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Cardiac: tachycardic
- Lungs: clear

Laboratory Results:
- Troponin: 1.8 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG shows ST elevation in leads II, III, aVF

### Assessment
Primary Diagnosis: ST-elevation myocardial infarction (ICD-10: I21.3)

Differential Diagnoses:
- Aortic dissection
- Pulmonary embolism

### Plan
1. Aspirin 325 mg chewed
2. Activate cath lab for emergent PCI
3. Heparin bolus and infusion`},{id:"Emergency Medicine-41",description:"75yo f c/o fever & confusion 2 days of fever chill...",input:"75yo f c/o fever & confusion 2 days of fever chills confusion & hypotension pmh diabetes on metformin 500 mg bid vs bp 130/84 hr 88 t 374 rr 20 spo2 97 pe general: ill-appearing skin: warm labs lactate 36mmol/l imaging cxr: rt lowe lobe opacity dx sepsis",output:`### Subjective
75-year-old female with fever and confusion. 2 days of fever, chills, confusion, and hypotension. ROS: No focal neuro deficits.
Past Medical History: Diabetes
Medications: Metformin 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- General: ill-appearing
- Skin: warm

Laboratory Results:
- Lactate: 3.6 mmol/L (Ref: 0.5-2.2)

Imaging/Diagnostics:
- CXR: right lower lobe opacity

### Assessment
Primary Diagnosis: Sepsis (ICD-10: A41.9)

Differential Diagnoses:
- Pneumonia
- UTI

### Plan
1. Sepsis bundle: 30 mL/kg IV fluids
2. Broad-spectrum antibiotics
3. Blood cultures x2`},{id:"Emergency Medicine-42",description:"57yo m c/o hip pain after fall mechanical fall at ...",input:"57yo m c/o hip pain after fall mechanical fall at home w/ immediate rt hip pain & inability to bear weight pmh osteoporosis on alendronate 70 mg weekly vs bp 130/84 hr 110 t 374 rr 20 spo2 98 pe rt leg shortened & externally rotated labs hemoglobin 112g/dl imaging x-ray: displaced femoral neck fx dx hip fx rt",output:`### Subjective
57-year-old male with hip pain after fall. Mechanical fall at home with immediate right hip pain and inability to bear weight. ROS: No head trauma or LOC.
Past Medical History: Osteoporosis
Medications: Alendronate 70 mg weekly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Right leg shortened and externally rotated

Laboratory Results:
- Hemoglobin: 11.2 g/dL (Ref: 12-16)

Imaging/Diagnostics:
- X-ray: displaced femoral neck fracture

### Assessment
Primary Diagnosis: Hip fracture, right (ICD-10: S72.001A)

Differential Diagnoses:
- Pelvic fracture

### Plan
1. Pain control
2. Orthopedic consult for operative repair
3. NPO`},{id:"Emergency Medicine-43",description:"40yo m c/o crushing chest pain sudden onset subste...",input:"40yo m c/o crushing chest pain sudden onset substernal chest pressure radiating to lt arm for 45 minutes w/ diaphoresis pmh hypertension smoking on amlodipine 5 mg daily vs bp 148/92 hr 88 t 374 rr 20 spo2 97 pe cardiac: tachycardic lungs: clear labs troponin 18ng/ml imaging ecg shows st elevation in leads ii iii avf dx st-elevation myocardial infarction",output:`### Subjective
40-year-old male with crushing chest pain. Sudden onset substernal chest pressure radiating to left arm for 45 minutes with diaphoresis. ROS: Nausea present, no trauma.
Past Medical History: Hypertension, Smoking
Medications: Amlodipine 5 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Cardiac: tachycardic
- Lungs: clear

Laboratory Results:
- Troponin: 1.8 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG shows ST elevation in leads II, III, aVF

### Assessment
Primary Diagnosis: ST-elevation myocardial infarction (ICD-10: I21.3)

Differential Diagnoses:
- Aortic dissection
- Pulmonary embolism

### Plan
1. Aspirin 325 mg chewed
2. Activate cath lab for emergent PCI
3. Heparin bolus and infusion`},{id:"Emergency Medicine-44",description:"30yo m c/o pain patient reports pain but location ...",input:"30yo m c/o pain patient reports pain but location duration & severity are unclear pmh none on no meds vs bp 148/92 hr 88 t 381 rr 18 spo2 98 pe limited exam documented labs none imaging none dx underspecified pain",output:`### Subjective
Patient reports pain but documentation is insufficient to determine location, duration, or severity.

### Objective
Limited exam documented; no vitals or labs provided.

### Assessment
Underspecified pain syndrome (ICD-10: R69). Insufficient data for definitive diagnosis.

### Plan
1. Obtain complete history and focused physical exam.
2. Document vitals and relevant labs/imaging.`},{id:"Emergency Medicine-45",description:"38yo m c/o hip pain after fall mechanical fall at ...",input:"38yo m c/o hip pain after fall mechanical fall at home w/ immediate rt hip pain & inability to bear weight pmh osteoporosis on alendronate 70 mg weekly vs bp 130/84 hr 110 t 374 rr 18 spo2 97 pe rt leg shortened & externall rotated labs hemoglobin 112g/dl imaging x-ray: displaced femoral neck fx dx hip fx rt",output:`### Subjective
38-year-old male with hip pain after fall. Mechanical fall at home with immediate right hip pain and inability to bear weight. ROS: No head trauma or LOC.
Past Medical History: Osteoporosis
Medications: Alendronate 70 mg weekly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Right leg shortened and externally rotated

Laboratory Results:
- Hemoglobin: 11.2 g/dL (Ref: 12-16)

Imaging/Diagnostics:
- X-ray: displaced femoral neck fracture

### Assessment
Primary Diagnosis: Hip fracture, right (ICD-10: S72.001A)

Differential Diagnoses:
- Pelvic fracture

### Plan
1. Pain control
2. Orthopedic consult for operative repair
3. NPO`},{id:"Emergency Medicine-46",description:"68yo m c/o crushing chest pain sudden onset subste...",input:"68yo m c/o crushing chest pain sudden onset substernal chest pressure radiating to left arm for 45 minutes w/ diaphoresis pmh hypertension smoking on amlodipine 5 mg daily vs bp 148/92 hr 110 t 374 rr 20 spo2 97 pe cardiac tachycardic lungs: clear labs troponin 18ng/ml imaging ecg shows st elevation in leads ii iii avf dx st-elevation myocardial infarction",output:`### Subjective
68-year-old male with crushing chest pain. Sudden onset substernal chest pressure radiating to left arm for 45 minutes with diaphoresis. ROS: Nausea present, no trauma.
Past Medical History: Hypertension, Smoking
Medications: Amlodipine 5 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Cardiac: tachycardic
- Lungs: clear

Laboratory Results:
- Troponin: 1.8 ng/mL (Ref: <0.04)

Imaging/Diagnostics:
- ECG shows ST elevation in leads II, III, aVF

### Assessment
Primary Diagnosis: ST-elevation myocardial infarction (ICD-10: I21.3)

Differential Diagnoses:
- Aortic dissection
- Pulmonary embolism

### Plan
1. Aspirin 325 mg chewed
2. Activate cath lab for emergent PCI
3. Heparin bolus and infusion`},{id:"Emergency Medicine-47",description:"28yo f c/o fever & confusion 2 days of fever chill...",input:"28yo f c/o fever & confusion 2 days of fever chills confusion & hypotension pmh diabetes on metformin 500 mg bid vs bp 118/76 hr 72 t 367 rr 16 spo2 95 pe general: ill-appearing skin: warm labs lactate 36mmol/l imaging cxr: rt lower lobe opacity dx sepsis",output:`### Subjective
28-year-old female with fever and confusion. 2 days of fever, chills, confusion, and hypotension. ROS: No focal neuro deficits.
Past Medical History: Diabetes
Medications: Metformin 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- General: ill-appearing
- Skin: warm

Laboratory Results:
- Lactate: 3.6 mmol/L (Ref: 0.5-2.2)

Imaging/Diagnostics:
- CXR: right lower lobe opacity

### Assessment
Primary Diagnosis: Sepsis (ICD-10: A41.9)

Differential Diagnoses:
- Pneumonia
- UTI

### Plan
1. Sepsis bundle: 30 mL/kg IV fluids
2. Broad-spectrum antibiotics
3. Blood cultures x2`},{id:"Emergency Medicine-48",description:"23yo m c/o hip pain after fall mechanical fall at ...",input:"23yo m c/o hip pain after fall mechanical fall at home w/ immediate rt hip pain & inability to bear weight pmh osteoporosis on alendronate 70 mg weekly vs bp 118/76 hr 88 t 381 rr 16 spo2 98 pe rt leg shortened & externally rotated labs hemoglobin 112g/d imaging x-ray: displaced femoral neck fx dx hip fx rt",output:`### Subjective
23-year-old male with hip pain after fall. Mechanical fall at home with immediate right hip pain and inability to bear weight. ROS: No head trauma or LOC.
Past Medical History: Osteoporosis
Medications: Alendronate 70 mg weekly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Right leg shortened and externally rotated

Laboratory Results:
- Hemoglobin: 11.2 g/dL (Ref: 12-16)

Imaging/Diagnostics:
- X-ray: displaced femoral neck fracture

### Assessment
Primary Diagnosis: Hip fracture, right (ICD-10: S72.001A)

Differential Diagnoses:
- Pelvic fracture

### Plan
1. Pain control
2. Orthopedic consult for operative repair
3. NPO`},{id:"Emergency Medicine-49",description:"48yo m c/o pain patient reports pain but location ...",input:"48yo m c/o pain patient reports pain but location duration & severity are unclear pmh none on no meds vs bp 118/76 hr 96 t 381 rr 20 spo2 97 pe limited exam documented labs none imaging none dx underspecified pain",output:`### Subjective
Patient reports pain but documentation is insufficient to determine location, duration, or severity.

### Objective
Limited exam documented; no vitals or labs provided.

### Assessment
Underspecified pain syndrome (ICD-10: R69). Insufficient data for definitive diagnosis.

### Plan
1. Obtain complete history and focused physical exam.
2. Document vitals and relevant labs/imaging.`},{id:"Emergency Medicine-50",description:"59yo f c/o fever & confusion 2 days of fever chill...",input:"59yo f c/o fever & confusion 2 days of fever chills confusion & hypotension pmh diabetes on metformin 500 mg bid vs bp 136/86 hr 88 t 367 rr 18 spo2 97 pe general: ill-appearing skin: warm labs lactat 36mmol/l imaging cxr: rt lower lobe opacity dx sepsis",output:`### Subjective
59-year-old female with fever and confusion. 2 days of fever, chills, confusion, and hypotension. ROS: No focal neuro deficits.
Past Medical History: Diabetes
Medications: Metformin 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- General: ill-appearing
- Skin: warm

Laboratory Results:
- Lactate: 3.6 mmol/L (Ref: 0.5-2.2)

Imaging/Diagnostics:
- CXR: right lower lobe opacity

### Assessment
Primary Diagnosis: Sepsis (ICD-10: A41.9)

Differential Diagnoses:
- Pneumonia
- UTI

### Plan
1. Sepsis bundle: 30 mL/kg IV fluids
2. Broad-spectrum antibiotics
3. Blood cultures x2`}]},{name:"Endocrinology",cases:[{id:"Endocrinology-1",description:"53yo m c/o fatigue and weight gain several months ...",input:"53yo m c/o fatigue and weight gain several months of fatigue, cold intolerance, and weight gain. pmh none on none vs bp 130/84 hr 88 t 36.7 rr 18 spo2 97 pe skin: dry, neck: no goiter labs tsh 12.6miu/l imaging none dx hypothyroidism",output:`### Subjective
53-year-old male with fatigue and weight gain. Several months of fatigue, cold intolerance, and weight gain. ROS: No palpitations.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Skin: dry
- Neck: no goiter

Laboratory Results:
- TSH: 12.6 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Hypothyroidism (ICD-10: E03.9)

Differential Diagnoses:
- Depression

### Plan
1. Start levothyroxine 50 mcg daily
2. Recheck TSH in 6 weeks`},{id:"Endocrinology-2",description:"31yo m c/o abdominal pain and vomiting type 1 dm w...",input:"31yo m c/o abdominal pain and vomiting type 1 dm with missed insulin; vomiting and abdominal pain today. pmh type 1 dm on insulin glargin 20 units nightly, insulin lispro with meals vs bp 130/84 hr 110 t 38.1 rr 18 spo2 98 pe general: dehydrated, breathing: kussmaul labs glucose 520mg/dl, anion gap 22 imaging none dx diabetic ketoacidosis",output:`### Subjective
31-year-old male with abdominal pain and vomiting. Type 1 DM with missed insulin; vomiting and abdominal pain today. ROS: Polyuria and polydipsia.
Past Medical History: Type 1 DM
Medications: Insulin glargine 20 units nightly, Insulin lispro with meals
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: dehydrated
- Breathing: Kussmaul

Laboratory Results:
- Glucose: 520 mg/dL (Ref: 70-99)
- Anion Gap: 22  (Ref: 8-12)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Diabetic ketoacidosis (ICD-10: E10.10)

Differential Diagnoses:
- Gastroenteritis

### Plan
1. IV fluids and insulin drip
2. Monitor electrolytes q2h`},{id:"Endocrinology-3",description:"31yo m c/o fatigue and weight gain several months ...",input:"31yo m c/o fatigue and weight gain several months of fatigue, cold intolerance, and weight gain. pmh none on none vs bp 118/7 hr 88 t 37.4 rr 20 spo2 95 pe skin: dry, neck: no goiter labs tsh 12.6miu/l imaging none dx hypothyroidis",output:`### Subjective
31-year-old male with fatigue and weight gain. Several months of fatigue, cold intolerance, and weight gain. ROS: No palpitations.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Skin: dry
- Neck: no goiter

Laboratory Results:
- TSH: 12.6 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Hypothyroidism (ICD-10: E03.9)

Differential Diagnoses:
- Depression

### Plan
1. Start levothyroxine 50 mcg daily
2. Recheck TSH in 6 weeks`},{id:"Endocrinology-4",description:"49yo f c/o abdominal pain and vomiting type 1 dm w...",input:"49yo f c/o abdominal pain and vomiting type 1 dm with missed insulin; vomiting and abdominal pain today. pmh type 1 dm on insulin glargine 20 units nightly, insulin lispro with meal vs bp 130/84 hr 96 t 37.4 rr 20 spo2 95 pe general: dehydrated breathing: kussmaul labs glucose 520mg/dl, anion gap 22 imaging none dx diabetic ketoacidosis",output:`### Subjective
49-year-old female with abdominal pain and vomiting. Type 1 DM with missed insulin; vomiting and abdominal pain today. ROS: Polyuria and polydipsia.
Past Medical History: Type 1 DM
Medications: Insulin glargine 20 units nightly, Insulin lispro with meals
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- General: dehydrated
- Breathing: Kussmaul

Laboratory Results:
- Glucose: 520 mg/dL (Ref: 70-99)
- Anion Gap: 22  (Ref: 8-12)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Diabetic ketoacidosis (ICD-10: E10.10)

Differential Diagnoses:
- Gastroenteritis

### Plan
1. IV fluids and insulin drip
2. Monitor electrolytes q2h`},{id:"Endocrinology-5",description:"74yo f c/o fatigue and weight gain several months ...",input:"74yo f c/o fatigue and weight gain several months of fatigue, cold intolerance, and weigh gain. pmh none on none vs bp 118/76 hr 96 t 36.7 rr 16 spo2 97 pe skin: dry, neck: no goiter labs tsh 12.6miu/l imaging none dx hypothyroidism",output:`### Subjective
74-year-old female with fatigue and weight gain. Several months of fatigue, cold intolerance, and weight gain. ROS: No palpitations.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Skin: dry
- Neck: no goiter

Laboratory Results:
- TSH: 12.6 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Hypothyroidism (ICD-10: E03.9)

Differential Diagnoses:
- Depression

### Plan
1. Start levothyroxine 50 mcg daily
2. Recheck TSH in 6 weeks`},{id:"Endocrinology-6",description:"49yo m c/o abdominal pain and n/v type 1 dm w/ mis...",input:"49yo m c/o abdominal pain and n/v type 1 dm w/ missed insulin; n/v and abdomina pain today. pmh type 1 dm on insulin glargine 20 units nightly, insulin lispro w/ meals vs bp 130/84 hr 110 t 36.7 rr 20 spo2 97 pe general: dehydrated, breathing: kussmaul labs glucose 520mg/dl, anion gap 22 imaging none dx diabetic ketoacidosis",output:`### Subjective
49-year-old male with abdominal pain and vomiting. Type 1 DM with missed insulin; vomiting and abdominal pain today. ROS: Polyuria and polydipsia.
Past Medical History: Type 1 DM
Medications: Insulin glargine 20 units nightly, Insulin lispro with meals
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- General: dehydrated
- Breathing: Kussmaul

Laboratory Results:
- Glucose: 520 mg/dL (Ref: 70-99)
- Anion Gap: 22  (Ref: 8-12)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Diabetic ketoacidosis (ICD-10: E10.10)

Differential Diagnoses:
- Gastroenteritis

### Plan
1. IV fluids and insulin drip
2. Monitor electrolytes q2h`},{id:"Endocrinology-7",description:"27yo m c/o fatigue and weight gain several months ...",input:"27yo m c/o fatigue and weight gain several months of fatigue, cold intolerance, and weight gain. pmh none on none vs bp 130/84 hr 88 t 36.7 rr 20 spo2 95 pe skin: dry, neck: no goite labs tsh 12.6miu/l imaging none dx hypothyroidism",output:`### Subjective
27-year-old male with fatigue and weight gain. Several months of fatigue, cold intolerance, and weight gain. ROS: No palpitations.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Skin: dry
- Neck: no goiter

Laboratory Results:
- TSH: 12.6 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Hypothyroidism (ICD-10: E03.9)

Differential Diagnoses:
- Depression

### Plan
1. Start levothyroxine 50 mcg daily
2. Recheck TSH in 6 weeks`},{id:"Endocrinology-8",description:"21yo f c/o abd pain and n/v type 1 dm w/ missed in...",input:"21yo f c/o abd pain and n/v type 1 dm w/ missed insulin; n/v and abd pain today. pmh type 1 dm on insulin glargine 20 units nightly, insulin lispro w/ meals vs bp 130/84 hr 110 t 36.7 rr 20 spo2 98 pe general: dehydrated, breathing: kussmaul labs glucose 520mg/dl, anion gap 22 imaging none dx diabetic ketoacidosis",output:`### Subjective
21-year-old female with abdominal pain and vomiting. Type 1 DM with missed insulin; vomiting and abdominal pain today. ROS: Polyuria and polydipsia.
Past Medical History: Type 1 DM
Medications: Insulin glargine 20 units nightly, Insulin lispro with meals
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: dehydrated
- Breathing: Kussmaul

Laboratory Results:
- Glucose: 520 mg/dL (Ref: 70-99)
- Anion Gap: 22  (Ref: 8-12)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Diabetic ketoacidosis (ICD-10: E10.10)

Differential Diagnoses:
- Gastroenteritis

### Plan
1. IV fluids and insulin drip
2. Monitor electrolytes q2h`},{id:"Endocrinology-9",description:"67yo f c/o pain patient reports pain but location,...",input:"67yo f c/o pain patient reports pain but location, duration, and severity are unclear. pmh none on no meds vs bp 136/86 hr 72 t 36.7 rr 16 spo2 95 pe limite exam documented labs none imaging none dx underspecified pain",output:`### Subjective
Patient reports pain but documentation is insufficient to determine location, duration, or severity.

### Objective
Limited exam documented; no vitals or labs provided.

### Assessment
Underspecified pain syndrome (ICD-10: R69). Insufficient data for definitive diagnosis.

### Plan
1. Obtain complete history and focused physical exam.
2. Document vitals and relevant labs/imaging.`},{id:"Endocrinology-10",description:"42yo m c/o abd pain and n/v type 1 dm with missed ...",input:"42yo m c/o abd pain and n/v type 1 dm with missed insulin; n/v and abd pain today. pmh type 1 dm on insulin glargine 20 units nightly, insuli lispro with meals vs bp 148/92 hr 110 t 37.4 rr 16 spo2 95 pe general: dehydrated, breathing: kussmaul labs glucose 520mg/dl, anion gap 22 imaging none dx diabetic ketoacidosis",output:`### Subjective
42-year-old male with abdominal pain and vomiting. Type 1 DM with missed insulin; vomiting and abdominal pain today. ROS: Polyuria and polydipsia.
Past Medical History: Type 1 DM
Medications: Insulin glargine 20 units nightly, Insulin lispro with meals
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- General: dehydrated
- Breathing: Kussmaul

Laboratory Results:
- Glucose: 520 mg/dL (Ref: 70-99)
- Anion Gap: 22  (Ref: 8-12)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Diabetic ketoacidosis (ICD-10: E10.10)

Differential Diagnoses:
- Gastroenteritis

### Plan
1. IV fluids and insulin drip
2. Monitor electrolytes q2h`},{id:"Endocrinology-11",description:"72yo f c/o fatigue and weight gain several months ...",input:"72yo f c/o fatigue and weight gain several months of fatigue, cold intolerance, and weight gain. pmh none on none vs bp 148/92 hr 72 t 37.4 rr 16 spo2 98 pe skin dry, neck: no goiter labs tsh 12.6miu/l imaging none dx hypothyroidism",output:`### Subjective
72-year-old female with fatigue and weight gain. Several months of fatigue, cold intolerance, and weight gain. ROS: No palpitations.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Skin: dry
- Neck: no goiter

Laboratory Results:
- TSH: 12.6 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Hypothyroidism (ICD-10: E03.9)

Differential Diagnoses:
- Depression

### Plan
1. Start levothyroxine 50 mcg daily
2. Recheck TSH in 6 weeks`},{id:"Endocrinology-12",description:"83yo f c/o abdominal pain and n/v type 1 dm with m...",input:"83yo f c/o abdominal pain and n/v type 1 dm with missed insulin; n/v and abdominal pain today. pmh type 1 dm on insulin glargine 20 units nightly, insulin lispro with meals vs bp 118/76 hr 72 t 37.4 rr 16 spo2 97 pe general: dehydrated breathing: kussmaul labs glucose 520mg/dl, anion gap 22 imaging none dx diabetic ketoacidosis",output:`### Subjective
83-year-old female with abdominal pain and vomiting. Type 1 DM with missed insulin; vomiting and abdominal pain today. ROS: Polyuria and polydipsia.
Past Medical History: Type 1 DM
Medications: Insulin glargine 20 units nightly, Insulin lispro with meals
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- General: dehydrated
- Breathing: Kussmaul

Laboratory Results:
- Glucose: 520 mg/dL (Ref: 70-99)
- Anion Gap: 22  (Ref: 8-12)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Diabetic ketoacidosis (ICD-10: E10.10)

Differential Diagnoses:
- Gastroenteritis

### Plan
1. IV fluids and insulin drip
2. Monitor electrolytes q2h`},{id:"Endocrinology-13",description:"57yo m c/o fatigue and weight gain severa months o...",input:"57yo m c/o fatigue and weight gain severa months of fatigue, cold intolerance, and weight gain. pmh none on none vs bp 148/92 hr 72 t 37.4 rr 18 spo2 98 pe skin: dry, neck: no goiter labs tsh 12.6miu/l imaging none dx hypothyroidism",output:`### Subjective
57-year-old male with fatigue and weight gain. Several months of fatigue, cold intolerance, and weight gain. ROS: No palpitations.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Skin: dry
- Neck: no goiter

Laboratory Results:
- TSH: 12.6 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Hypothyroidism (ICD-10: E03.9)

Differential Diagnoses:
- Depression

### Plan
1. Start levothyroxine 50 mcg daily
2. Recheck TSH in 6 weeks`},{id:"Endocrinology-14",description:"43yo m c/o abd pain and n/v type 1 dm with missed ...",input:"43yo m c/o abd pain and n/v type 1 dm with missed insulin; n/v and abd pain today. pmh type 1 dm on insulin glargine 20 units nightly, insulin lispro with meals vs bp 130/84 hr 88 t 38.1 rr 16 spo2 98 pe general: dehydrated, breathing: kussmaul labs glucose 520mg/dl, anion gap 22 imaging none dx diabetic ketoacidosis",output:`### Subjective
43-year-old male with abdominal pain and vomiting. Type 1 DM with missed insulin; vomiting and abdominal pain today. ROS: Polyuria and polydipsia.
Past Medical History: Type 1 DM
Medications: Insulin glargine 20 units nightly, Insulin lispro with meals
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: dehydrated
- Breathing: Kussmaul

Laboratory Results:
- Glucose: 520 mg/dL (Ref: 70-99)
- Anion Gap: 22  (Ref: 8-12)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Diabetic ketoacidosis (ICD-10: E10.10)

Differential Diagnoses:
- Gastroenteritis

### Plan
1. IV fluids and insulin drip
2. Monitor electrolytes q2h`},{id:"Endocrinology-15",description:"55yo m c/o fatigue and weight gain several months ...",input:"55yo m c/o fatigue and weight gain several months of fatigue, cold intolerance, and weight gain. pmh none on none vs bp 118/76 hr 88 t 37.4 rr 20 spo2 95 pe skin: dry, neck: no goiter labs tsh 12.6miu/l imagin none dx hypothyroidism",output:`### Subjective
55-year-old male with fatigue and weight gain. Several months of fatigue, cold intolerance, and weight gain. ROS: No palpitations.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Skin: dry
- Neck: no goiter

Laboratory Results:
- TSH: 12.6 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Hypothyroidism (ICD-10: E03.9)

Differential Diagnoses:
- Depression

### Plan
1. Start levothyroxine 50 mcg daily
2. Recheck TSH in 6 weeks`}]},{name:"Family Practice",cases:[{id:"Family Practice-1",description:"79yo f c/o sore throat and cough 3 days of sore th...",input:"79yo f c/o sore throat and cough 3 days of sore throat, dry cough, nasal congestion. no dyspnea. pmh seasonal allergies on cetirizine 10 mg daily vs bp 118/76 hr 110 t 36.7 rr 16 spo2 95 pe heent: mild pharyngeal erythema, no exudate, lungs: clear labs rapid strep negative imaging none dx acute upper respiratory infection",output:`### Subjective
79-year-old female with sore throat and cough. 3 days of sore throat, dry cough, nasal congestion. No dyspnea. ROS: No chest pain or GI symptoms.
Past Medical History: Seasonal allergies
Medications: Cetirizine 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- HEENT: mild pharyngeal erythema, no exudate
- Lungs: clear

Laboratory Results:
- Rapid strep: Negative  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Acute upper respiratory infection (ICD-10: J06.9)

Differential Diagnoses:
- Influenza
- Allergic rhinitis

### Plan
1. Supportive care with hydration
2. Ibuprofen 400 mg q6h PRN
3. Return if fever or worsening`},{id:"Family Practice-2",description:"66yo f c/o dysuria and urinary frequency 2 days of...",input:"66yo f c/o dysuria and urinary frequency 2 days of burning urination with urgency, no flan pain. pmh none on none vs bp 118/76 hr 88 t 36.7 rr 18 spo2 98 pe abdomen: suprapubic tenderness labs urinalysis + leukocyte esterase, + nitrites imaging none dx urinary tract infection",output:`### Subjective
66-year-old female with dysuria and urinary frequency. 2 days of burning urination with urgency, no flank pain. ROS: No fever or chills.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: suprapubic tenderness

Laboratory Results:
- Urinalysis: + leukocyte esterase, + nitrites  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Urinary tract infection (ICD-10: N39.0)

Differential Diagnoses:
- Vaginitis
- Urethritis

### Plan
1. Nitrofurantoin 100 mg BID x5 days
2. Increase fluids`},{id:"Family Practice-3",description:"67yo f c/o lower back pain after lifting acute low...",input:"67yo f c/o lower back pain after lifting acute low back pain after lifting a box yesterday; no radiation. pmh none on none vs bp 130/84 hr 72 t 38.1 rr 20 spo2 98 pe back: paraspinal tenderness, normal neuro exam labs none imaging none dx low back pain",output:`### Subjective
67-year-old female with lower back pain after lifting. Acute low back pain after lifting a box yesterday; no radiation. ROS: No weakness or bowel/bladder issues.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Back: paraspinal tenderness, normal neuro exam

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Low back pain (ICD-10: M54.5)

Differential Diagnoses:
- Muscle strain
- Herniated disc

### Plan
1. NSAIDs as needed
2. Activity modification and stretching
3. Return if neurologic symptoms`},{id:"Family Practice-4",description:"31yo m c/o sore throat and cough 3 days of sore th...",input:"31yo m c/o sore throat and cough 3 days of sore throat, dry cough, nasal congestion. no dyspnea. pmh seasona allergies on cetirizine 10 mg daily vs bp 136/86 hr 110 t 37.4 rr 18 spo2 97 pe heent: mild pharyngeal erythema, no exudate, lungs: clear labs rapid strep negative imaging none dx acute upper respiratory infection",output:`### Subjective
31-year-old male with sore throat and cough. 3 days of sore throat, dry cough, nasal congestion. No dyspnea. ROS: No chest pain or GI symptoms.
Past Medical History: Seasonal allergies
Medications: Cetirizine 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- HEENT: mild pharyngeal erythema, no exudate
- Lungs: clear

Laboratory Results:
- Rapid strep: Negative  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Acute upper respiratory infection (ICD-10: J06.9)

Differential Diagnoses:
- Influenza
- Allergic rhinitis

### Plan
1. Supportive care with hydration
2. Ibuprofen 400 mg q6h PRN
3. Return if fever or worsening`},{id:"Family Practice-5",description:"27yo f c/o dysuria and urinary frequency 2 days of...",input:"27yo f c/o dysuria and urinary frequency 2 days of burning urination w/ urgency, no flank pain. pmh none on none vs bp 130/8 hr 110 t 38.1 rr 20 spo2 97 pe abdomen: suprapubic tenderness labs urinalysis + leukocyte esterase, + nitrites imaging none dx urinary tract infection",output:`### Subjective
27-year-old female with dysuria and urinary frequency. 2 days of burning urination with urgency, no flank pain. ROS: No fever or chills.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Abdomen: suprapubic tenderness

Laboratory Results:
- Urinalysis: + leukocyte esterase, + nitrites  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Urinary tract infection (ICD-10: N39.0)

Differential Diagnoses:
- Vaginitis
- Urethritis

### Plan
1. Nitrofurantoin 100 mg BID x5 days
2. Increase fluids`},{id:"Family Practice-6",description:"43yo m c/o lower back pain after lifting acute low...",input:"43yo m c/o lower back pain after lifting acute low back pain after lifting a box yesterday; no radiation. pmh none on none vs bp 136/86 hr 88 t 37.4 rr 18 spo2 95 pe back: paraspinal tenderness, normal neuro exam labs none imaging none dx low back pain",output:`### Subjective
43-year-old male with lower back pain after lifting. Acute low back pain after lifting a box yesterday; no radiation. ROS: No weakness or bowel/bladder issues.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Back: paraspinal tenderness, normal neuro exam

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Low back pain (ICD-10: M54.5)

Differential Diagnoses:
- Muscle strain
- Herniated disc

### Plan
1. NSAIDs as needed
2. Activity modification and stretching
3. Return if neurologic symptoms`},{id:"Family Practice-7",description:"23yo f c/o sore throa and cough 3 days of sore thr...",input:"23yo f c/o sore throa and cough 3 days of sore throat, dry cough, nasal congestion. no dyspnea. pmh seasona allergies on cetirizine 10 mg daily vs bp 148/92 hr 72 t 36.7 rr 16 spo2 98 pe heent: mild pharyngeal erythema, no exudate, lungs: clear labs rapid strep - imaging none dx acute upper respiratory infection",output:`### Subjective
23-year-old female with sore throat and cough. 3 days of sore throat, dry cough, nasal congestion. No dyspnea. ROS: No chest pain or GI symptoms.
Past Medical History: Seasonal allergies
Medications: Cetirizine 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- HEENT: mild pharyngeal erythema, no exudate
- Lungs: clear

Laboratory Results:
- Rapid strep: Negative  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Acute upper respiratory infection (ICD-10: J06.9)

Differential Diagnoses:
- Influenza
- Allergic rhinitis

### Plan
1. Supportive care with hydration
2. Ibuprofen 400 mg q6h PRN
3. Return if fever or worsening`},{id:"Family Practice-8",description:"32yo m c/o dysuria and urinary frequency 2 days of...",input:"32yo m c/o dysuria and urinary frequency 2 days of burning urination with urgency, no flank pain. pmh none on none vs bp 130/84 hr 88 t 38.1 rr 16 spo2 95 pe abdomen suprapubic tenderness labs urinalysis + leukocyte esterase, + nitrites imaging none dx urinary tract infection",output:`### Subjective
32-year-old male with dysuria and urinary frequency. 2 days of burning urination with urgency, no flank pain. ROS: No fever or chills.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Abdomen: suprapubic tenderness

Laboratory Results:
- Urinalysis: + leukocyte esterase, + nitrites  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Urinary tract infection (ICD-10: N39.0)

Differential Diagnoses:
- Vaginitis
- Urethritis

### Plan
1. Nitrofurantoin 100 mg BID x5 days
2. Increase fluids`},{id:"Family Practice-9",description:"58yo f c/o lower back pain after lifting acute low...",input:"58yo f c/o lower back pain after lifting acute low back pain after lifting a box yesterday; no radiation. pmh none on none vs bp 130/84 hr 96 t 37.4 rr 18 spo2 95 pe back: paraspinal tenderness, normal neuro exam labs none imaging none dx low back pain",output:`### Subjective
58-year-old female with lower back pain after lifting. Acute low back pain after lifting a box yesterday; no radiation. ROS: No weakness or bowel/bladder issues.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Back: paraspinal tenderness, normal neuro exam

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Low back pain (ICD-10: M54.5)

Differential Diagnoses:
- Muscle strain
- Herniated disc

### Plan
1. NSAIDs as needed
2. Activity modification and stretching
3. Return if neurologic symptoms`},{id:"Family Practice-10",description:"42yo f c/o sore throat and cough 3 days of sore th...",input:"42yo f c/o sore throat and cough 3 days of sore throat, dry cough, nasal congestion. no dyspnea. pmh seasona allergies on cetirizine 10 mg daily vs bp 148/92 hr 110 t 37.4 rr 20 spo2 98 pe heent: mild pharyngeal erythema, no exudate, lungs: clear labs rapid strep negative imaging none dx acute upper respirator infection",output:`### Subjective
42-year-old female with sore throat and cough. 3 days of sore throat, dry cough, nasal congestion. No dyspnea. ROS: No chest pain or GI symptoms.
Past Medical History: Seasonal allergies
Medications: Cetirizine 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- HEENT: mild pharyngeal erythema, no exudate
- Lungs: clear

Laboratory Results:
- Rapid strep: Negative  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Acute upper respiratory infection (ICD-10: J06.9)

Differential Diagnoses:
- Influenza
- Allergic rhinitis

### Plan
1. Supportive care with hydration
2. Ibuprofen 400 mg q6h PRN
3. Return if fever or worsening`},{id:"Family Practice-11",description:"75yo f c/o dysuria and urinary frequency 2 days of...",input:"75yo f c/o dysuria and urinary frequency 2 days of burning urination with urgency, no flank pain. pmh none on none vs bp 130/84 hr 110 t 36.7 rr 16 spo2 97 pe abdomen: suprapubic tenderness labs urinalysis + leukocyte esterase, + nitrites imaging none dx urinary tract infection",output:`### Subjective
75-year-old female with dysuria and urinary frequency. 2 days of burning urination with urgency, no flank pain. ROS: No fever or chills.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Abdomen: suprapubic tenderness

Laboratory Results:
- Urinalysis: + leukocyte esterase, + nitrites  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Urinary tract infection (ICD-10: N39.0)

Differential Diagnoses:
- Vaginitis
- Urethritis

### Plan
1. Nitrofurantoin 100 mg BID x5 days
2. Increase fluids`},{id:"Family Practice-12",description:"34yo m c/o lower back pain after lifting acute low...",input:"34yo m c/o lower back pain after lifting acute low back pain after lifting a box yesterday; no radiation. pmh none on none vs bp 136/86 hr 88 t 38.1 rr 18 spo2 98 pe back: paraspinal tenderness, normal neuro exam labs none imaging none dx low back pain",output:`### Subjective
34-year-old male with lower back pain after lifting. Acute low back pain after lifting a box yesterday; no radiation. ROS: No weakness or bowel/bladder issues.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Back: paraspinal tenderness, normal neuro exam

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Low back pain (ICD-10: M54.5)

Differential Diagnoses:
- Muscle strain
- Herniated disc

### Plan
1. NSAIDs as needed
2. Activity modification and stretching
3. Return if neurologic symptoms`},{id:"Family Practice-13",description:"79yo m c/o pain patient reports pain but location,...",input:"79yo m c/o pain patient reports pain but location, duration, and severity are unclear pmh none on no meds vs bp 118/76 hr 110 t 36.7 rr 16 spo2 95 pe limited exam documented labs none imaging none dx underspecified pain",output:`### Subjective
Patient reports pain but documentation is insufficient to determine location, duration, or severity.

### Objective
Limited exam documented; no vitals or labs provided.

### Assessment
Underspecified pain syndrome (ICD-10: R69). Insufficient data for definitive diagnosis.

### Plan
1. Obtain complete history and focused physical exam.
2. Document vitals and relevant labs/imaging.`},{id:"Family Practice-14",description:"29yo m c/o dysuria and urinary frequency 2 days of...",input:"29yo m c/o dysuria and urinary frequency 2 days of burning urination with urgency, no flank pain. pmh none on none vs bp 118/7 hr 110 t 37.4 rr 18 spo2 98 pe abdomen: suprapubic tenderness labs urinalysis + leukocyte esterase, + nitrites imaging none dx urinary tract infection",output:`### Subjective
29-year-old male with dysuria and urinary frequency. 2 days of burning urination with urgency, no flank pain. ROS: No fever or chills.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: suprapubic tenderness

Laboratory Results:
- Urinalysis: + leukocyte esterase, + nitrites  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Urinary tract infection (ICD-10: N39.0)

Differential Diagnoses:
- Vaginitis
- Urethritis

### Plan
1. Nitrofurantoin 100 mg BID x5 days
2. Increase fluids`},{id:"Family Practice-15",description:"71yo f c/o lowe back pain after lifting acute low ...",input:"71yo f c/o lowe back pain after lifting acute low back pain after lifting a box yesterday; no radiation. pmh none on none vs bp 136/86 hr 72 t 36.7 rr 20 spo2 97 pe back: paraspinal tenderness, normal neuro exam labs none imaging none dx low back pain",output:`### Subjective
71-year-old female with lower back pain after lifting. Acute low back pain after lifting a box yesterday; no radiation. ROS: No weakness or bowel/bladder issues.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Back: paraspinal tenderness, normal neuro exam

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Low back pain (ICD-10: M54.5)

Differential Diagnoses:
- Muscle strain
- Herniated disc

### Plan
1. NSAIDs as needed
2. Activity modification and stretching
3. Return if neurologic symptoms`},{id:"Family Practice-16",description:"73yo m c/o sore throat and cough 3 days of sore th...",input:"73yo m c/o sore throat and cough 3 days of sore throat, dry cough, nasal congestion. no dyspnea. pmh seasonal allergies on cetirizine 10 mg daily vs bp 130/84 hr 96 t 38.1 rr 20 spo2 95 pe heent: mild pharyngeal erythema, no exudate, lungs: clear labs rapid strep - imaging none dx acute upper respiratory infection",output:`### Subjective
73-year-old male with sore throat and cough. 3 days of sore throat, dry cough, nasal congestion. No dyspnea. ROS: No chest pain or GI symptoms.
Past Medical History: Seasonal allergies
Medications: Cetirizine 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- HEENT: mild pharyngeal erythema, no exudate
- Lungs: clear

Laboratory Results:
- Rapid strep: Negative  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Acute upper respiratory infection (ICD-10: J06.9)

Differential Diagnoses:
- Influenza
- Allergic rhinitis

### Plan
1. Supportive care with hydration
2. Ibuprofen 400 mg q6h PRN
3. Return if fever or worsening`},{id:"Family Practice-17",description:"50yo m c/o dysuria and urinary frequency 2 days of...",input:"50yo m c/o dysuria and urinary frequency 2 days of burning urination w/ urgency, no flank pain. pmh none on none vs bp 118/76 hr 72 t 36.7 rr 16 spo2 97 pe abdomen: suprapubic tenderness labs urinalysis + leukocyte esterase, + nitrites imaging none dx urinary tract infection",output:`### Subjective
50-year-old male with dysuria and urinary frequency. 2 days of burning urination with urgency, no flank pain. ROS: No fever or chills.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Abdomen: suprapubic tenderness

Laboratory Results:
- Urinalysis: + leukocyte esterase, + nitrites  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Urinary tract infection (ICD-10: N39.0)

Differential Diagnoses:
- Vaginitis
- Urethritis

### Plan
1. Nitrofurantoin 100 mg BID x5 days
2. Increase fluids`},{id:"Family Practice-18",description:"76yo m c/o lower back pain after lifting acute low...",input:"76yo m c/o lower back pain after lifting acute low back pain after lifting a box yesterday; no radiation. pmh none on none vs bp 130/84 hr 96 t 38.1 rr 18 spo2 95 pe back: paraspinal tenderness, normal neuro exam labs none imaging none dx low back pain",output:`### Subjective
76-year-old male with lower back pain after lifting. Acute low back pain after lifting a box yesterday; no radiation. ROS: No weakness or bowel/bladder issues.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Back: paraspinal tenderness, normal neuro exam

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Low back pain (ICD-10: M54.5)

Differential Diagnoses:
- Muscle strain
- Herniated disc

### Plan
1. NSAIDs as needed
2. Activity modification and stretching
3. Return if neurologic symptoms`},{id:"Family Practice-19",description:"23yo m c/o sore throat and cough 3 days of sore th...",input:"23yo m c/o sore throat and cough 3 days of sore throat, dry cough nasal congestion. no dyspnea. pmh seasonal allergies on cetirizine 10 mg daily vs bp 148/9 hr 110 t 38.1 rr 16 spo2 95 pe heent: mild pharyngeal erythema, no exudate, lungs: clear labs rapid strep negative imaging none dx acute upper respiratory infection",output:`### Subjective
23-year-old male with sore throat and cough. 3 days of sore throat, dry cough, nasal congestion. No dyspnea. ROS: No chest pain or GI symptoms.
Past Medical History: Seasonal allergies
Medications: Cetirizine 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- HEENT: mild pharyngeal erythema, no exudate
- Lungs: clear

Laboratory Results:
- Rapid strep: Negative  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Acute upper respiratory infection (ICD-10: J06.9)

Differential Diagnoses:
- Influenza
- Allergic rhinitis

### Plan
1. Supportive care with hydration
2. Ibuprofen 400 mg q6h PRN
3. Return if fever or worsening`},{id:"Family Practice-20",description:"51yo m c/o dysuria and urinar frequency 2 days of ...",input:"51yo m c/o dysuria and urinar frequency 2 days of burning urination with urgency, no flank pain. pmh none on none vs bp 118/76 hr 96 t 38.1 rr 20 spo2 95 pe abdomen: suprapubic tenderness labs urinalysis + leukocyte esterase, + nitrites imaging none dx urinary tract infection",output:`### Subjective
51-year-old male with dysuria and urinary frequency. 2 days of burning urination with urgency, no flank pain. ROS: No fever or chills.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Abdomen: suprapubic tenderness

Laboratory Results:
- Urinalysis: + leukocyte esterase, + nitrites  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Urinary tract infection (ICD-10: N39.0)

Differential Diagnoses:
- Vaginitis
- Urethritis

### Plan
1. Nitrofurantoin 100 mg BID x5 days
2. Increase fluids`},{id:"Family Practice-21",description:"51yo m c/o lower back pain after lifting acute low...",input:"51yo m c/o lower back pain after lifting acute low back pain afte lifting a box yesterday; no radiation. pmh none on none vs bp 118/76 hr 88 t 38.1 rr 18 spo2 97 pe back: paraspinal tenderness, normal neuro exam labs none imaging none dx low back pain",output:`### Subjective
51-year-old male with lower back pain after lifting. Acute low back pain after lifting a box yesterday; no radiation. ROS: No weakness or bowel/bladder issues.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Back: paraspinal tenderness, normal neuro exam

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Low back pain (ICD-10: M54.5)

Differential Diagnoses:
- Muscle strain
- Herniated disc

### Plan
1. NSAIDs as needed
2. Activity modification and stretching
3. Return if neurologic symptoms`},{id:"Family Practice-22",description:"85yo m c/o sore throat and cough 3 days of sore th...",input:"85yo m c/o sore throat and cough 3 days of sore throat, dry cough, nasal congestion. no dyspnea. pmh seasonal allergies on cetirizine 10 mg daily vs bp 136/86 hr 96 t 37.4 rr 20 spo2 98 pe heent: mild pharyngeal erythema, no exudate, lungs: clear labs rapid strep negative imaging none dx acut uppe respiratory infection",output:`### Subjective
85-year-old male with sore throat and cough. 3 days of sore throat, dry cough, nasal congestion. No dyspnea. ROS: No chest pain or GI symptoms.
Past Medical History: Seasonal allergies
Medications: Cetirizine 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- HEENT: mild pharyngeal erythema, no exudate
- Lungs: clear

Laboratory Results:
- Rapid strep: Negative  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Acute upper respiratory infection (ICD-10: J06.9)

Differential Diagnoses:
- Influenza
- Allergic rhinitis

### Plan
1. Supportive care with hydration
2. Ibuprofen 400 mg q6h PRN
3. Return if fever or worsening`},{id:"Family Practice-23",description:"48yo f c/o dysuria and urinary frequency 2 days of...",input:"48yo f c/o dysuria and urinary frequency 2 days of burning urination with urgency, no flank pain. pmh none on none vs bp 130/8 hr 96 t 38.1 rr 20 spo2 97 pe abdomen: suprapubic tenderness labs urinalysis + leukocyte esterase, + nitrites imaging none dx urinary tract infection",output:`### Subjective
48-year-old female with dysuria and urinary frequency. 2 days of burning urination with urgency, no flank pain. ROS: No fever or chills.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Abdomen: suprapubic tenderness

Laboratory Results:
- Urinalysis: + leukocyte esterase, + nitrites  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Urinary tract infection (ICD-10: N39.0)

Differential Diagnoses:
- Vaginitis
- Urethritis

### Plan
1. Nitrofurantoin 100 mg BID x5 days
2. Increase fluids`},{id:"Family Practice-24",description:"68yo m c/o lower back pain after lifting acute low...",input:"68yo m c/o lower back pain after lifting acute low back pain after lifting a box yesterday; no radiation. pmh none on none vs bp 148/92 hr 96 t 36.7 rr 16 spo2 95 pe back: paraspinal tenderness, normal neuro exam labs none imaging none dx low back pain",output:`### Subjective
68-year-old male with lower back pain after lifting. Acute low back pain after lifting a box yesterday; no radiation. ROS: No weakness or bowel/bladder issues.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Back: paraspinal tenderness, normal neuro exam

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Low back pain (ICD-10: M54.5)

Differential Diagnoses:
- Muscle strain
- Herniated disc

### Plan
1. NSAIDs as needed
2. Activity modification and stretching
3. Return if neurologic symptoms`},{id:"Family Practice-25",description:"81yo m c/o sore throa and cough 3 days of sore thr...",input:"81yo m c/o sore throa and cough 3 days of sore throat, dry cough, nasal congestion. no dyspnea. pmh seasonal allergies on cetirizine 10 mg daily vs bp 130/8 hr 88 t 37.4 rr 18 spo2 97 pe heent: mild pharyngeal erythema, no exudate, lungs: clear labs rapid strep negative imaging none dx acute upper respiratory infection",output:`### Subjective
81-year-old male with sore throat and cough. 3 days of sore throat, dry cough, nasal congestion. No dyspnea. ROS: No chest pain or GI symptoms.
Past Medical History: Seasonal allergies
Medications: Cetirizine 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- HEENT: mild pharyngeal erythema, no exudate
- Lungs: clear

Laboratory Results:
- Rapid strep: Negative  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Acute upper respiratory infection (ICD-10: J06.9)

Differential Diagnoses:
- Influenza
- Allergic rhinitis

### Plan
1. Supportive care with hydration
2. Ibuprofen 400 mg q6h PRN
3. Return if fever or worsening`},{id:"Family Practice-26",description:"22yo f c/o dysuria and urinary frequency 2 days of...",input:"22yo f c/o dysuria and urinary frequency 2 days of burning urination with urgency, no flank pain. pmh none on none vs bp 136/86 hr 96 t 36.7 rr 16 spo2 98 pe abdomen: suprapubic tenderness labs urinalysis + leukocyte esterase, + nitrites imaging none dx urinary tract infection",output:`### Subjective
22-year-old female with dysuria and urinary frequency. 2 days of burning urination with urgency, no flank pain. ROS: No fever or chills.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: suprapubic tenderness

Laboratory Results:
- Urinalysis: + leukocyte esterase, + nitrites  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Urinary tract infection (ICD-10: N39.0)

Differential Diagnoses:
- Vaginitis
- Urethritis

### Plan
1. Nitrofurantoin 100 mg BID x5 days
2. Increase fluids`},{id:"Family Practice-27",description:"18yo f c/o lower back pain after lifting acute low...",input:"18yo f c/o lower back pain after lifting acute low back pain after lifting a box yesterday; no radiation. pmh none on none vs bp 136/86 hr 110 t 36.7 rr 16 spo2 97 pe back: paraspinal tenderness normal neuro exam labs none imaging none dx low back pain",output:`### Subjective
18-year-old female with lower back pain after lifting. Acute low back pain after lifting a box yesterday; no radiation. ROS: No weakness or bowel/bladder issues.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Back: paraspinal tenderness, normal neuro exam

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Low back pain (ICD-10: M54.5)

Differential Diagnoses:
- Muscle strain
- Herniated disc

### Plan
1. NSAIDs as needed
2. Activity modification and stretching
3. Return if neurologic symptoms`},{id:"Family Practice-28",description:"25yo f c/o sore throat and cough 3 days of sore th...",input:"25yo f c/o sore throat and cough 3 days of sore throat, dry cough, nasal congestion. no dyspnea. pmh seasonal allergies on cetirizine 10 mg dail vs bp 148/92 hr 88 t 37.4 rr 18 spo2 97 pe heent: mild pharyngeal erythema, no exudate, lungs: clear labs rapid strep - imaging none dx acute upper respiratory infection",output:`### Subjective
25-year-old female with sore throat and cough. 3 days of sore throat, dry cough, nasal congestion. No dyspnea. ROS: No chest pain or GI symptoms.
Past Medical History: Seasonal allergies
Medications: Cetirizine 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- HEENT: mild pharyngeal erythema, no exudate
- Lungs: clear

Laboratory Results:
- Rapid strep: Negative  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Acute upper respiratory infection (ICD-10: J06.9)

Differential Diagnoses:
- Influenza
- Allergic rhinitis

### Plan
1. Supportive care with hydration
2. Ibuprofen 400 mg q6h PRN
3. Return if fever or worsening`},{id:"Family Practice-29",description:"53yo f c/o dysuria and urinary frequency 2 days of...",input:"53yo f c/o dysuria and urinary frequency 2 days of burning urination with urgency, no flank pain. pmh none on none vs bp 136/8 hr 72 t 37.4 rr 16 spo2 97 pe abdomen: suprapubic tenderness labs urinalysis + leukocyte esterase, + nitrites imaging none dx urinary tract infection",output:`### Subjective
53-year-old female with dysuria and urinary frequency. 2 days of burning urination with urgency, no flank pain. ROS: No fever or chills.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Abdomen: suprapubic tenderness

Laboratory Results:
- Urinalysis: + leukocyte esterase, + nitrites  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Urinary tract infection (ICD-10: N39.0)

Differential Diagnoses:
- Vaginitis
- Urethritis

### Plan
1. Nitrofurantoin 100 mg BID x5 days
2. Increase fluids`},{id:"Family Practice-30",description:"56yo f c/o lowe back pain after lifting acute low ...",input:"56yo f c/o lowe back pain after lifting acute low back pain after lifting a box yesterday; no radiation. pmh none on none vs bp 148/92 hr 72 t 36.7 rr 16 spo2 98 pe back: paraspinal tenderness, normal neuro exam labs none imaging none dx low back pain",output:`### Subjective
56-year-old female with lower back pain after lifting. Acute low back pain after lifting a box yesterday; no radiation. ROS: No weakness or bowel/bladder issues.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Back: paraspinal tenderness, normal neuro exam

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Low back pain (ICD-10: M54.5)

Differential Diagnoses:
- Muscle strain
- Herniated disc

### Plan
1. NSAIDs as needed
2. Activity modification and stretching
3. Return if neurologic symptoms`},{id:"Family Practice-31",description:"43yo f c/o sore throat and cough 3 days of sore th...",input:"43yo f c/o sore throat and cough 3 days of sore throat, dry cough, nasal congestion. no dyspnea. pmh seasonal allergies on cetirizine 10 mg daily vs bp 148/92 hr 110 t 38.1 rr 16 spo2 95 pe heent: mild pharyngeal erythema no exudate, lungs: clear labs rapid strep negative imaging none dx acute upper respiratory infection",output:`### Subjective
43-year-old female with sore throat and cough. 3 days of sore throat, dry cough, nasal congestion. No dyspnea. ROS: No chest pain or GI symptoms.
Past Medical History: Seasonal allergies
Medications: Cetirizine 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- HEENT: mild pharyngeal erythema, no exudate
- Lungs: clear

Laboratory Results:
- Rapid strep: Negative  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Acute upper respiratory infection (ICD-10: J06.9)

Differential Diagnoses:
- Influenza
- Allergic rhinitis

### Plan
1. Supportive care with hydration
2. Ibuprofen 400 mg q6h PRN
3. Return if fever or worsening`},{id:"Family Practice-32",description:"19yo m c/o dysuri and urinary frequency 2 days of ...",input:"19yo m c/o dysuri and urinary frequency 2 days of burning urination w/ urgency, no flank pain. pmh none on none vs bp 148/92 hr 96 t 37.4 rr 18 spo2 98 pe abdomen: suprapubic tenderness labs urinalysis + leukocyte esterase, + nitrites imaging none dx urinary tract infection",output:`### Subjective
19-year-old male with dysuria and urinary frequency. 2 days of burning urination with urgency, no flank pain. ROS: No fever or chills.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: suprapubic tenderness

Laboratory Results:
- Urinalysis: + leukocyte esterase, + nitrites  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Urinary tract infection (ICD-10: N39.0)

Differential Diagnoses:
- Vaginitis
- Urethritis

### Plan
1. Nitrofurantoin 100 mg BID x5 days
2. Increase fluids`},{id:"Family Practice-33",description:"58yo m c/o lower back pain after lifting acute low...",input:"58yo m c/o lower back pain after lifting acute low back pain after lifting a box yesterday; no radiation. pmh none on none vs bp 136/86 hr 96 t 37.4 rr 18 spo2 98 pe back: paraspinal tenderness, normal neuro exam labs none imaging none dx low back pain",output:`### Subjective
58-year-old male with lower back pain after lifting. Acute low back pain after lifting a box yesterday; no radiation. ROS: No weakness or bowel/bladder issues.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Back: paraspinal tenderness, normal neuro exam

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Low back pain (ICD-10: M54.5)

Differential Diagnoses:
- Muscle strain
- Herniated disc

### Plan
1. NSAIDs as needed
2. Activity modification and stretching
3. Return if neurologic symptoms`},{id:"Family Practice-34",description:"53yo m c/o pain patient reports pain but location,...",input:"53yo m c/o pain patient reports pain but location, duration, and severity are unclear. pmh none on no meds vs bp 118/7 hr 110 t 36.7 rr 16 spo2 95 pe limited exam documente labs none imaging none dx underspecified pain",output:`### Subjective
Patient reports pain but documentation is insufficient to determine location, duration, or severity.

### Objective
Limited exam documented; no vitals or labs provided.

### Assessment
Underspecified pain syndrome (ICD-10: R69). Insufficient data for definitive diagnosis.

### Plan
1. Obtain complete history and focused physical exam.
2. Document vitals and relevant labs/imaging.`},{id:"Family Practice-35",description:"73yo m c/o dysuria and urinary frequency 2 days of...",input:"73yo m c/o dysuria and urinary frequency 2 days of burning urination with urgency, no flank pain. pmh none on none vs bp 148/92 hr 96 t 36.7 rr 16 spo2 98 pe abdomen: suprapubic tenderness labs urinalysis + leukocyte esterase, + nitrites imaging none dx urinary tract infection",output:`### Subjective
73-year-old male with dysuria and urinary frequency. 2 days of burning urination with urgency, no flank pain. ROS: No fever or chills.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: suprapubic tenderness

Laboratory Results:
- Urinalysis: + leukocyte esterase, + nitrites  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Urinary tract infection (ICD-10: N39.0)

Differential Diagnoses:
- Vaginitis
- Urethritis

### Plan
1. Nitrofurantoin 100 mg BID x5 days
2. Increase fluids`},{id:"Family Practice-36",description:"30yo f c/o lower back pain after lifting acute low...",input:"30yo f c/o lower back pain after lifting acute low back pain after lifting a box yesterday no radiation. pmh none on none vs bp 136/86 hr 72 t 38.1 rr 20 spo2 95 pe back: paraspinal tenderness, normal neuro exam labs none imaging none dx low back pain",output:`### Subjective
30-year-old female with lower back pain after lifting. Acute low back pain after lifting a box yesterday; no radiation. ROS: No weakness or bowel/bladder issues.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Back: paraspinal tenderness, normal neuro exam

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Low back pain (ICD-10: M54.5)

Differential Diagnoses:
- Muscle strain
- Herniated disc

### Plan
1. NSAIDs as needed
2. Activity modification and stretching
3. Return if neurologic symptoms`},{id:"Family Practice-37",description:"55yo f c/o sore throat and cough 3 days of sore th...",input:"55yo f c/o sore throat and cough 3 days of sore throat, dry cough, nasal congestion. no dyspnea. pmh seasonal allergies on cetirizine 10 mg daily vs bp 130/84 hr 72 t 36.7 rr 16 spo2 98 pe heent: mild pharyngeal erythema, no exudate, lungs clear labs rapid strep negative imaging none dx acute upper respiratory infection",output:`### Subjective
55-year-old female with sore throat and cough. 3 days of sore throat, dry cough, nasal congestion. No dyspnea. ROS: No chest pain or GI symptoms.
Past Medical History: Seasonal allergies
Medications: Cetirizine 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- HEENT: mild pharyngeal erythema, no exudate
- Lungs: clear

Laboratory Results:
- Rapid strep: Negative  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Acute upper respiratory infection (ICD-10: J06.9)

Differential Diagnoses:
- Influenza
- Allergic rhinitis

### Plan
1. Supportive care with hydration
2. Ibuprofen 400 mg q6h PRN
3. Return if fever or worsening`},{id:"Family Practice-38",description:"38yo m c/o dysuria and urinary frequency 2 days of...",input:"38yo m c/o dysuria and urinary frequency 2 days of burning urination w/ urgency, no flank pain. pmh none on none vs bp 148/92 hr 110 t 36.7 rr 20 spo2 98 pe abdomen: suprapubic tenderness labs urinalysis + leukocyte esterase, + nitrites imaging none dx urinary tract infection",output:`### Subjective
38-year-old male with dysuria and urinary frequency. 2 days of burning urination with urgency, no flank pain. ROS: No fever or chills.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: suprapubic tenderness

Laboratory Results:
- Urinalysis: + leukocyte esterase, + nitrites  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Urinary tract infection (ICD-10: N39.0)

Differential Diagnoses:
- Vaginitis
- Urethritis

### Plan
1. Nitrofurantoin 100 mg BID x5 days
2. Increase fluids`},{id:"Family Practice-39",description:"67yo m c/o lower back pain after lifting acute low...",input:"67yo m c/o lower back pain after lifting acute low back pain after lifting a box yesterday; no radiation. pmh none on none vs bp 118/76 hr 88 t 38.1 rr 18 spo2 98 pe back: paraspinal tenderness, normal neuro exam labs none imaging none dx low back pain",output:`### Subjective
67-year-old male with lower back pain after lifting. Acute low back pain after lifting a box yesterday; no radiation. ROS: No weakness or bowel/bladder issues.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Back: paraspinal tenderness, normal neuro exam

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Low back pain (ICD-10: M54.5)

Differential Diagnoses:
- Muscle strain
- Herniated disc

### Plan
1. NSAIDs as needed
2. Activity modification and stretching
3. Return if neurologic symptoms`},{id:"Family Practice-40",description:"76yo f c/o sore throat and cough 3 days of sore th...",input:"76yo f c/o sore throat and cough 3 days of sore throat, dry cough, nasal congestion. no dyspnea. pmh seasonal allergies on cetirizine 10 mg daily vs bp 130/84 hr 88 t 37.4 rr 18 spo2 95 pe heent: mild pharyngeal erythema, no exudate, lungs: clea labs rapid strep negative imaging none dx acute upper respiratory infection",output:`### Subjective
76-year-old female with sore throat and cough. 3 days of sore throat, dry cough, nasal congestion. No dyspnea. ROS: No chest pain or GI symptoms.
Past Medical History: Seasonal allergies
Medications: Cetirizine 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- HEENT: mild pharyngeal erythema, no exudate
- Lungs: clear

Laboratory Results:
- Rapid strep: Negative  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Acute upper respiratory infection (ICD-10: J06.9)

Differential Diagnoses:
- Influenza
- Allergic rhinitis

### Plan
1. Supportive care with hydration
2. Ibuprofen 400 mg q6h PRN
3. Return if fever or worsening`},{id:"Family Practice-41",description:"71yo m c/o dysuria and urinary frequency 2 days of...",input:"71yo m c/o dysuria and urinary frequency 2 days of burning urination w/ urgency, no flank pain. pmh none on none vs bp 136/86 hr 110 t 38.1 rr 20 spo2 95 pe abdomen: suprapubic tenderness labs urinalysis + leukocyte esterase, + nitrites imaging none dx urinary tract infection",output:`### Subjective
71-year-old male with dysuria and urinary frequency. 2 days of burning urination with urgency, no flank pain. ROS: No fever or chills.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Abdomen: suprapubic tenderness

Laboratory Results:
- Urinalysis: + leukocyte esterase, + nitrites  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Urinary tract infection (ICD-10: N39.0)

Differential Diagnoses:
- Vaginitis
- Urethritis

### Plan
1. Nitrofurantoin 100 mg BID x5 days
2. Increase fluids`},{id:"Family Practice-42",description:"83yo f c/o lower back pain after lifting acute low...",input:"83yo f c/o lower back pain after lifting acute low back pain after lifting a box yesterday; no radiation. pmh none on none vs bp 130/84 hr 88 t 36.7 rr 20 spo2 95 pe back: paraspinal tenderness, normal neuro exam labs none imaging none dx low back pain",output:`### Subjective
83-year-old female with lower back pain after lifting. Acute low back pain after lifting a box yesterday; no radiation. ROS: No weakness or bowel/bladder issues.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Back: paraspinal tenderness, normal neuro exam

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Low back pain (ICD-10: M54.5)

Differential Diagnoses:
- Muscle strain
- Herniated disc

### Plan
1. NSAIDs as needed
2. Activity modification and stretching
3. Return if neurologic symptoms`},{id:"Family Practice-43",description:"50yo m c/o sore throat and cough 3 days of sore th...",input:"50yo m c/o sore throat and cough 3 days of sore throat, dry cough, nasal congestion. no dyspnea. pmh seasonal allergies on cetirizine 10 mg daily vs bp 136/86 hr 88 t 38.1 rr 16 spo2 98 pe heent: mild pharyngeal erythema, no exudate, lungs: clea labs rapid strep negative imaging none dx acute upper respiratory infection",output:`### Subjective
50-year-old male with sore throat and cough. 3 days of sore throat, dry cough, nasal congestion. No dyspnea. ROS: No chest pain or GI symptoms.
Past Medical History: Seasonal allergies
Medications: Cetirizine 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- HEENT: mild pharyngeal erythema, no exudate
- Lungs: clear

Laboratory Results:
- Rapid strep: Negative  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Acute upper respiratory infection (ICD-10: J06.9)

Differential Diagnoses:
- Influenza
- Allergic rhinitis

### Plan
1. Supportive care with hydration
2. Ibuprofen 400 mg q6h PRN
3. Return if fever or worsening`},{id:"Family Practice-44",description:"43yo m c/o dysuria and urinary frequency 2 days of...",input:"43yo m c/o dysuria and urinary frequency 2 days of burnin urination with urgency, no flank pain. pmh none on none vs bp 148/92 hr 88 t 38.1 rr 16 spo2 97 pe abdomen: suprapubic tenderness labs urinalysis + leukocyte esterase, + nitrites imaging none dx urinary tract infection",output:`### Subjective
43-year-old male with dysuria and urinary frequency. 2 days of burning urination with urgency, no flank pain. ROS: No fever or chills.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Abdomen: suprapubic tenderness

Laboratory Results:
- Urinalysis: + leukocyte esterase, + nitrites  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Urinary tract infection (ICD-10: N39.0)

Differential Diagnoses:
- Vaginitis
- Urethritis

### Plan
1. Nitrofurantoin 100 mg BID x5 days
2. Increase fluids`},{id:"Family Practice-45",description:"69yo m c/o lower back pain after lifting acute low...",input:"69yo m c/o lower back pain after lifting acute low back pain after lifting a box yesterday; no radiation. pmh none on none vs bp 130/84 hr 88 t 38.1 rr 18 spo2 98 pe back: paraspinal tenderness, normal neuro exam labs none imaging none dx low back pain",output:`### Subjective
69-year-old male with lower back pain after lifting. Acute low back pain after lifting a box yesterday; no radiation. ROS: No weakness or bowel/bladder issues.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Back: paraspinal tenderness, normal neuro exam

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Low back pain (ICD-10: M54.5)

Differential Diagnoses:
- Muscle strain
- Herniated disc

### Plan
1. NSAIDs as needed
2. Activity modification and stretching
3. Return if neurologic symptoms`},{id:"Family Practice-46",description:"42yo f c/o sore throat and cough 3 days of sore th...",input:"42yo f c/o sore throat and cough 3 days of sore throat, dry cough, nasal congestion. no dyspnea. pmh seasonal allergies on cetirizine 10 mg dail vs bp 118/76 hr 88 t 38.1 rr 20 spo2 97 pe heent: mild pharyngeal erythema, no exudate, lungs: clear labs rapid strep - imaging none dx acute upper respiratory infection",output:`### Subjective
42-year-old female with sore throat and cough. 3 days of sore throat, dry cough, nasal congestion. No dyspnea. ROS: No chest pain or GI symptoms.
Past Medical History: Seasonal allergies
Medications: Cetirizine 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- HEENT: mild pharyngeal erythema, no exudate
- Lungs: clear

Laboratory Results:
- Rapid strep: Negative  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Acute upper respiratory infection (ICD-10: J06.9)

Differential Diagnoses:
- Influenza
- Allergic rhinitis

### Plan
1. Supportive care with hydration
2. Ibuprofen 400 mg q6h PRN
3. Return if fever or worsening`},{id:"Family Practice-47",description:"68yo m c/o pain patient reports pain but location,...",input:"68yo m c/o pain patient reports pain but location, duration, and severity are unclear. pmh none on no meds vs bp 130/84 hr 96 t 36.7 rr 18 spo2 95 pe limite exam documented labs none imaging none dx underspecified pain",output:`### Subjective
Patient reports pain but documentation is insufficient to determine location, duration, or severity.

### Objective
Limited exam documented; no vitals or labs provided.

### Assessment
Underspecified pain syndrome (ICD-10: R69). Insufficient data for definitive diagnosis.

### Plan
1. Obtain complete history and focused physical exam.
2. Document vitals and relevant labs/imaging.`},{id:"Family Practice-48",description:"60yo f c/o lower back pain after lifting acute low...",input:"60yo f c/o lower back pain after lifting acute low back pain after lifting a box yesterday; no radiation. pmh none on none vs bp 136/86 hr 96 t 37.4 rr 16 spo2 97 pe back: paraspinal tendernes normal neuro exam labs none imaging none dx low back pain",output:`### Subjective
60-year-old female with lower back pain after lifting. Acute low back pain after lifting a box yesterday; no radiation. ROS: No weakness or bowel/bladder issues.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Back: paraspinal tenderness, normal neuro exam

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Low back pain (ICD-10: M54.5)

Differential Diagnoses:
- Muscle strain
- Herniated disc

### Plan
1. NSAIDs as needed
2. Activity modification and stretching
3. Return if neurologic symptoms`},{id:"Family Practice-49",description:"45yo m c/o sore throat and cough 3 days of sore th...",input:"45yo m c/o sore throat and cough 3 days of sore throat, dry cough, nasa congestion. no dyspnea. pmh seasonal allergies on cetirizine 10 mg daily vs bp 148/92 hr 88 t 37.4 rr 18 spo2 97 pe heent: mild pharyngeal erythema, no exudate, lungs: clear labs rapid strep negative imaging none dx acute upper respiratory infection",output:`### Subjective
45-year-old male with sore throat and cough. 3 days of sore throat, dry cough, nasal congestion. No dyspnea. ROS: No chest pain or GI symptoms.
Past Medical History: Seasonal allergies
Medications: Cetirizine 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- HEENT: mild pharyngeal erythema, no exudate
- Lungs: clear

Laboratory Results:
- Rapid strep: Negative  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Acute upper respiratory infection (ICD-10: J06.9)

Differential Diagnoses:
- Influenza
- Allergic rhinitis

### Plan
1. Supportive care with hydration
2. Ibuprofen 400 mg q6h PRN
3. Return if fever or worsening`},{id:"Family Practice-50",description:"84yo f c/o dysuria and urinary frequency 2 days of...",input:"84yo f c/o dysuria and urinary frequency 2 days of burning urination with urgency, no flank pain. pmh none on none vs bp 148/92 hr 110 t 36.7 rr 16 spo2 95 pe abdomen: suprapubic tenderness labs urinalysis + leukocyte esterase, + nitrites imaging none dx urinary tract infection",output:`### Subjective
84-year-old female with dysuria and urinary frequency. 2 days of burning urination with urgency, no flank pain. ROS: No fever or chills.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Abdomen: suprapubic tenderness

Laboratory Results:
- Urinalysis: + leukocyte esterase, + nitrites  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Urinary tract infection (ICD-10: N39.0)

Differential Diagnoses:
- Vaginitis
- Urethritis

### Plan
1. Nitrofurantoin 100 mg BID x5 days
2. Increase fluids`}]},{name:"Gastroenterology",cases:[{id:"Gastroenterology-1",description:"80yo m c/o black stools melena and lightheadedness...",input:"80yo m c/o black stools melena and lightheadedness for 2 days pmh nsaid use on ibuprofen prn vs bp 136/8 hr 96 t 367 rr 16 spo2 95 pe abdomen: mild epigastric tenderness labs hemoglobin 89g/dl imaging egd planned dx upper gi bleed",output:`### Subjective
80-year-old male with black stools. Melena and lightheadedness for 2 days. ROS: No hematemesis.
Past Medical History: NSAID use
Medications: Ibuprofen PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Abdomen: mild epigastric tenderness

Laboratory Results:
- Hemoglobin: 8.9 g/dL (Ref: 12-16)

Imaging/Diagnostics:
- EGD planned

### Assessment
Primary Diagnosis: Upper GI bleed (ICD-10: K92.2)

Differential Diagnoses:
- Peptic ulcer
- Gastritis

### Plan
1. IV PPI
2. GI consult for EGD
3. Type and screen`},{id:"Gastroenterology-2",description:"43yo m c/o epigastric pain severe epigastric pain ...",input:"43yo m c/o epigastric pain severe epigastric pain radiating to back after heavy meal pmh gallstones on none vs bp 148/92 hr 110 t 374 rr 18 spo2 97 pe abdomen: epigastri tenderness labs lipase 980u/l imaging ruq ultrasound: gallstones dx acute pancreatitis",output:`### Subjective
43-year-old male with epigastric pain. Severe epigastric pain radiating to back after heavy meal. ROS: Nausea present.
Past Medical History: Gallstones
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Abdomen: epigastric tenderness

Laboratory Results:
- Lipase: 980 U/L (Ref: 13-60)

Imaging/Diagnostics:
- RUQ ultrasound: gallstones

### Assessment
Primary Diagnosis: Acute pancreatitis (ICD-10: K85.90)

Differential Diagnoses:
- Peptic ulcer

### Plan
1. IV fluids
2. Pain control
3. NPO`},{id:"Gastroenterology-3",description:"36yo f c/o black stools melena and lightheadedness...",input:"36yo f c/o black stools melena and lightheadedness for 2 days pmh nsai use on ibuprofen prn vs bp 130/84 hr 72 t 374 rr 18 spo2 98 pe abdomen: mild epigastric tenderness labs hemoglobin 89g/dl imaging egd planned dx upper gi bleed",output:`### Subjective
36-year-old female with black stools. Melena and lightheadedness for 2 days. ROS: No hematemesis.
Past Medical History: NSAID use
Medications: Ibuprofen PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: mild epigastric tenderness

Laboratory Results:
- Hemoglobin: 8.9 g/dL (Ref: 12-16)

Imaging/Diagnostics:
- EGD planned

### Assessment
Primary Diagnosis: Upper GI bleed (ICD-10: K92.2)

Differential Diagnoses:
- Peptic ulcer
- Gastritis

### Plan
1. IV PPI
2. GI consult for EGD
3. Type and screen`},{id:"Gastroenterology-4",description:"32yo m c/o epigastric pain severe epigastric pain ...",input:"32yo m c/o epigastric pain severe epigastric pain radiating to back after heavy meal pmh gallstones on none vs bp 148/92 hr 88 t 381 rr 20 spo2 98 pe abdomen: epigastric tenderness labs lipase 980u/l imaging ruq ultrasound: gallstones dx acute pancreatitis",output:`### Subjective
32-year-old male with epigastric pain. Severe epigastric pain radiating to back after heavy meal. ROS: Nausea present.
Past Medical History: Gallstones
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: epigastric tenderness

Laboratory Results:
- Lipase: 980 U/L (Ref: 13-60)

Imaging/Diagnostics:
- RUQ ultrasound: gallstones

### Assessment
Primary Diagnosis: Acute pancreatitis (ICD-10: K85.90)

Differential Diagnoses:
- Peptic ulcer

### Plan
1. IV fluids
2. Pain control
3. NPO`},{id:"Gastroenterology-5",description:"78yo m c/o black stools melena and lightheadedness...",input:"78yo m c/o black stools melena and lightheadedness for 2 days pmh nsaid use on ibuprofen prn vs bp 148/92 hr 88 t 367 rr 18 spo2 97 pe abdomen: mild epigastric tenderness labs hemoglobin 89g/dl imaging egd planned dx upper gi bleed",output:`### Subjective
78-year-old male with black stools. Melena and lightheadedness for 2 days. ROS: No hematemesis.
Past Medical History: NSAID use
Medications: Ibuprofen PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Abdomen: mild epigastric tenderness

Laboratory Results:
- Hemoglobin: 8.9 g/dL (Ref: 12-16)

Imaging/Diagnostics:
- EGD planned

### Assessment
Primary Diagnosis: Upper GI bleed (ICD-10: K92.2)

Differential Diagnoses:
- Peptic ulcer
- Gastritis

### Plan
1. IV PPI
2. GI consult for EGD
3. Type and screen`},{id:"Gastroenterology-6",description:"45yo f c/o epigastric pain severe epigastric pain ...",input:"45yo f c/o epigastric pain severe epigastric pain radiating to back after heavy meal pmh gallstone on none vs bp 136/86 hr 72 t 367 rr 20 spo2 95 pe abdomen: epigastric tenderness labs lipase 980u/l imaging ruq ultrasound: gallstones dx acute pancreatitis",output:`### Subjective
45-year-old female with epigastric pain. Severe epigastric pain radiating to back after heavy meal. ROS: Nausea present.
Past Medical History: Gallstones
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Abdomen: epigastric tenderness

Laboratory Results:
- Lipase: 980 U/L (Ref: 13-60)

Imaging/Diagnostics:
- RUQ ultrasound: gallstones

### Assessment
Primary Diagnosis: Acute pancreatitis (ICD-10: K85.90)

Differential Diagnoses:
- Peptic ulcer

### Plan
1. IV fluids
2. Pain control
3. NPO`},{id:"Gastroenterology-7",description:"66yo f c/o black stools melena and lightheadedness...",input:"66yo f c/o black stools melena and lightheadedness for 2 days pmh nsai use on ibuprofen prn vs bp 148/92 hr 96 t 381 rr 18 spo2 95 pe abdomen: mild epigastric tenderness labs hemoglobin 89g/dl imaging egd planned dx upper gi bleed",output:`### Subjective
66-year-old female with black stools. Melena and lightheadedness for 2 days. ROS: No hematemesis.
Past Medical History: NSAID use
Medications: Ibuprofen PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Abdomen: mild epigastric tenderness

Laboratory Results:
- Hemoglobin: 8.9 g/dL (Ref: 12-16)

Imaging/Diagnostics:
- EGD planned

### Assessment
Primary Diagnosis: Upper GI bleed (ICD-10: K92.2)

Differential Diagnoses:
- Peptic ulcer
- Gastritis

### Plan
1. IV PPI
2. GI consult for EGD
3. Type and screen`},{id:"Gastroenterology-8",description:"85yo m c/o epigastric pain severe epigastric pain ...",input:"85yo m c/o epigastric pain severe epigastric pain radiatin to back afte heavy meal pmh gallstones on none vs bp 136/86 hr 96 t 367 rr 18 spo2 98 pe abdomen: epigastric tenderness labs lipase 980u/l imaging ruq ultrasound: gallstones dx acute pancreatitis",output:`### Subjective
85-year-old male with epigastric pain. Severe epigastric pain radiating to back after heavy meal. ROS: Nausea present.
Past Medical History: Gallstones
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: epigastric tenderness

Laboratory Results:
- Lipase: 980 U/L (Ref: 13-60)

Imaging/Diagnostics:
- RUQ ultrasound: gallstones

### Assessment
Primary Diagnosis: Acute pancreatitis (ICD-10: K85.90)

Differential Diagnoses:
- Peptic ulcer

### Plan
1. IV fluids
2. Pain control
3. NPO`},{id:"Gastroenterology-9",description:"33yo m c/o black stools melena and lightheadedness...",input:"33yo m c/o black stools melena and lightheadedness for 2 days pmh nsaid use on ibuprofen prn vs bp 130/84 hr 96 t 367 rr 20 spo2 98 pe abdomen: mild epigastric tenderness labs hemoglobin 89g/dl imaging egd planned dx uppe gi bleed",output:`### Subjective
33-year-old male with black stools. Melena and lightheadedness for 2 days. ROS: No hematemesis.
Past Medical History: NSAID use
Medications: Ibuprofen PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: mild epigastric tenderness

Laboratory Results:
- Hemoglobin: 8.9 g/dL (Ref: 12-16)

Imaging/Diagnostics:
- EGD planned

### Assessment
Primary Diagnosis: Upper GI bleed (ICD-10: K92.2)

Differential Diagnoses:
- Peptic ulcer
- Gastritis

### Plan
1. IV PPI
2. GI consult for EGD
3. Type and screen`},{id:"Gastroenterology-10",description:"18yo f c/o epigastric pain severe epigastric pain ...",input:"18yo f c/o epigastric pain severe epigastric pain radiatin to back after heavy meal pmh gallstones on none vs bp 148/92 hr 72 t 374 rr 18 spo2 95 pe abdomen: epigastric tenderness labs lipase 980u/l imaging ruq ultrasound: gallstones dx acute pancreatitis",output:`### Subjective
18-year-old female with epigastric pain. Severe epigastric pain radiating to back after heavy meal. ROS: Nausea present.
Past Medical History: Gallstones
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Abdomen: epigastric tenderness

Laboratory Results:
- Lipase: 980 U/L (Ref: 13-60)

Imaging/Diagnostics:
- RUQ ultrasound: gallstones

### Assessment
Primary Diagnosis: Acute pancreatitis (ICD-10: K85.90)

Differential Diagnoses:
- Peptic ulcer

### Plan
1. IV fluids
2. Pain control
3. NPO`},{id:"Gastroenterology-11",description:"70yo m c/o black stools melena and lightheadedness...",input:"70yo m c/o black stools melena and lightheadedness for 2 days pmh nsaid use on ibuprofen prn vs bp 136/86 hr 88 t 367 rr 18 spo2 98 pe abdomen: mild epigastric tenderness labs hemoglobin 89g/dl imaging egd planned dx upper gi bleed",output:`### Subjective
70-year-old male with black stools. Melena and lightheadedness for 2 days. ROS: No hematemesis.
Past Medical History: NSAID use
Medications: Ibuprofen PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: mild epigastric tenderness

Laboratory Results:
- Hemoglobin: 8.9 g/dL (Ref: 12-16)

Imaging/Diagnostics:
- EGD planned

### Assessment
Primary Diagnosis: Upper GI bleed (ICD-10: K92.2)

Differential Diagnoses:
- Peptic ulcer
- Gastritis

### Plan
1. IV PPI
2. GI consult for EGD
3. Type and screen`},{id:"Gastroenterology-12",description:"22yo m c/o epigastric pain severe epigastric pain ...",input:"22yo m c/o epigastric pain severe epigastric pain radiating to back after heavy meal pmh gallstones on none vs bp 136/86 hr 88 t 374 rr 20 spo2 98 pe abdomen epigastric tenderness labs lipase 980u/l imaging ruq ultrasound: gallstones dx acute pancreatitis",output:`### Subjective
22-year-old male with epigastric pain. Severe epigastric pain radiating to back after heavy meal. ROS: Nausea present.
Past Medical History: Gallstones
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: epigastric tenderness

Laboratory Results:
- Lipase: 980 U/L (Ref: 13-60)

Imaging/Diagnostics:
- RUQ ultrasound: gallstones

### Assessment
Primary Diagnosis: Acute pancreatitis (ICD-10: K85.90)

Differential Diagnoses:
- Peptic ulcer

### Plan
1. IV fluids
2. Pain control
3. NPO`},{id:"Gastroenterology-13",description:"56yo m c/o black stools melena and lightheadedness...",input:"56yo m c/o black stools melena and lightheadedness for 2 days pmh nsaid use on ibuprofen prn vs bp 118/76 hr 110 t 374 rr 18 spo2 95 pe abdomen: mild epigastric tenderness labs hemoglobin 89g/dl imaging egd planned dx upper gi bleed",output:`### Subjective
56-year-old male with black stools. Melena and lightheadedness for 2 days. ROS: No hematemesis.
Past Medical History: NSAID use
Medications: Ibuprofen PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Abdomen: mild epigastric tenderness

Laboratory Results:
- Hemoglobin: 8.9 g/dL (Ref: 12-16)

Imaging/Diagnostics:
- EGD planned

### Assessment
Primary Diagnosis: Upper GI bleed (ICD-10: K92.2)

Differential Diagnoses:
- Peptic ulcer
- Gastritis

### Plan
1. IV PPI
2. GI consult for EGD
3. Type and screen`},{id:"Gastroenterology-14",description:"49yo m c/o epigastric pain severe epigastric pain ...",input:"49yo m c/o epigastric pain severe epigastric pain radiating to back after heavy meal pmh gallstones on none vs bp 130/84 hr 110 t 367 rr 18 spo2 97 pe abdomen: epigastric tenderness labs lipase 980u/l imaging ruq ultrasound: gallstones dx acute pancreatitis",output:`### Subjective
49-year-old male with epigastric pain. Severe epigastric pain radiating to back after heavy meal. ROS: Nausea present.
Past Medical History: Gallstones
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Abdomen: epigastric tenderness

Laboratory Results:
- Lipase: 980 U/L (Ref: 13-60)

Imaging/Diagnostics:
- RUQ ultrasound: gallstones

### Assessment
Primary Diagnosis: Acute pancreatitis (ICD-10: K85.90)

Differential Diagnoses:
- Peptic ulcer

### Plan
1. IV fluids
2. Pain control
3. NPO`},{id:"Gastroenterology-15",description:"18yo f c/o black stools melena and lightheadedness...",input:"18yo f c/o black stools melena and lightheadedness for 2 days pmh nsaid use on ibuprofen prn vs bp 118/76 hr 88 t 374 rr 16 spo2 97 pe abdomen: mild epigastri tenderness labs hemoglobin 89g/dl imaging egd planned dx upper gi bleed",output:`### Subjective
18-year-old female with black stools. Melena and lightheadedness for 2 days. ROS: No hematemesis.
Past Medical History: NSAID use
Medications: Ibuprofen PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Abdomen: mild epigastric tenderness

Laboratory Results:
- Hemoglobin: 8.9 g/dL (Ref: 12-16)

Imaging/Diagnostics:
- EGD planned

### Assessment
Primary Diagnosis: Upper GI bleed (ICD-10: K92.2)

Differential Diagnoses:
- Peptic ulcer
- Gastritis

### Plan
1. IV PPI
2. GI consult for EGD
3. Type and screen`},{id:"Gastroenterology-16",description:"69yo f c/o epigastric pain severe epigastric pain ...",input:"69yo f c/o epigastric pain severe epigastric pain radiating to back after heavy meal pmh gallstones on none vs bp 136/86 hr 110 t 374 rr 20 spo2 95 pe abdomen: epigastric tenderness labs lipase 980u/l imaging ruq ultrasound: gallstones dx acute pancreatitis",output:`### Subjective
69-year-old female with epigastric pain. Severe epigastric pain radiating to back after heavy meal. ROS: Nausea present.
Past Medical History: Gallstones
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Abdomen: epigastric tenderness

Laboratory Results:
- Lipase: 980 U/L (Ref: 13-60)

Imaging/Diagnostics:
- RUQ ultrasound: gallstones

### Assessment
Primary Diagnosis: Acute pancreatitis (ICD-10: K85.90)

Differential Diagnoses:
- Peptic ulcer

### Plan
1. IV fluids
2. Pain control
3. NPO`},{id:"Gastroenterology-17",description:"65yo f c/o black stools melena and lightheadedness...",input:"65yo f c/o black stools melena and lightheadedness for 2 days pmh nsaid use on ibuprofen prn vs bp 148/92 hr 96 t 367 rr 20 spo2 98 pe abdomen: mild epigastric tenderness labs hemoglobin 89g/dl imaging egd planned dx upper gi bleed",output:`### Subjective
65-year-old female with black stools. Melena and lightheadedness for 2 days. ROS: No hematemesis.
Past Medical History: NSAID use
Medications: Ibuprofen PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: mild epigastric tenderness

Laboratory Results:
- Hemoglobin: 8.9 g/dL (Ref: 12-16)

Imaging/Diagnostics:
- EGD planned

### Assessment
Primary Diagnosis: Upper GI bleed (ICD-10: K92.2)

Differential Diagnoses:
- Peptic ulcer
- Gastritis

### Plan
1. IV PPI
2. GI consult for EGD
3. Type and screen`},{id:"Gastroenterology-18",description:"44yo m c/o pain patient report pain but location d...",input:"44yo m c/o pain patient report pain but location duration and severity are unclear pmh none on no meds vs bp 130/84 hr 96 t 374 rr 18 spo2 95 pe limited exam documented labs none imagin none dx underspecified pain",output:`### Subjective
Patient reports pain but documentation is insufficient to determine location, duration, or severity.

### Objective
Limited exam documented; no vitals or labs provided.

### Assessment
Underspecified pain syndrome (ICD-10: R69). Insufficient data for definitive diagnosis.

### Plan
1. Obtain complete history and focused physical exam.
2. Document vitals and relevant labs/imaging.`},{id:"Gastroenterology-19",description:"80yo f c/o black stools melena and lightheadedness...",input:"80yo f c/o black stools melena and lightheadedness for 2 days pmh nsaid use on ibuprofen prn vs bp 118/76 hr 96 t 374 rr 18 spo2 98 pe abdomen: mild epigastric tenderness labs hemoglobin 89g/d imaging egd planned dx upper gi bleed",output:`### Subjective
80-year-old female with black stools. Melena and lightheadedness for 2 days. ROS: No hematemesis.
Past Medical History: NSAID use
Medications: Ibuprofen PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: mild epigastric tenderness

Laboratory Results:
- Hemoglobin: 8.9 g/dL (Ref: 12-16)

Imaging/Diagnostics:
- EGD planned

### Assessment
Primary Diagnosis: Upper GI bleed (ICD-10: K92.2)

Differential Diagnoses:
- Peptic ulcer
- Gastritis

### Plan
1. IV PPI
2. GI consult for EGD
3. Type and screen`},{id:"Gastroenterology-20",description:"45yo f c/o epigastric pain severe epigastric pain ...",input:"45yo f c/o epigastric pain severe epigastric pain radiatin to back after heavy meal pmh gallstones on none vs bp 148/92 hr 96 t 381 rr 16 spo2 95 pe abdomen: epigastric tenderness labs lipase 980u/l imaging ruq ultrasound: gallstone dx acute pancreatitis",output:`### Subjective
45-year-old female with epigastric pain. Severe epigastric pain radiating to back after heavy meal. ROS: Nausea present.
Past Medical History: Gallstones
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Abdomen: epigastric tenderness

Laboratory Results:
- Lipase: 980 U/L (Ref: 13-60)

Imaging/Diagnostics:
- RUQ ultrasound: gallstones

### Assessment
Primary Diagnosis: Acute pancreatitis (ICD-10: K85.90)

Differential Diagnoses:
- Peptic ulcer

### Plan
1. IV fluids
2. Pain control
3. NPO`}]},{name:"General Surgery",cases:[{id:"General Surgery-1",description:"39yo m c/o rt lower quadrant pain 12 hours of peri...",input:"39yo m c/o rt lower quadrant pain 12 hours of periumbilical pain migrating to rlq with anorexia & n/v pmh none on none vs bp 136/86 hr 110 t 367 rr 20 spo2 98 pe abdomen: rlq tenderness rebound labs wbc 148k/µl imaging ct abdomen: enlarged appendi with periappendiceal fat str&ing dx acute appendicitis",output:`### Subjective
39-year-old male with right lower quadrant pain. 12 hours of periumbilical pain migrating to RLQ with anorexia and nausea. ROS: Low-grade fever.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: RLQ tenderness, rebound

Laboratory Results:
- WBC: 14.8 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- CT abdomen: enlarged appendix with periappendiceal fat stranding

### Assessment
Primary Diagnosis: Acute appendicitis (ICD-10: K35.80)

Differential Diagnoses:
- Gastroenteritis
- Ovarian torsion

### Plan
1. NPO and IV fluids
2. IV antibiotics: ceftriaxone + metronidazole
3. OR for appendectomy`},{id:"General Surgery-2",description:"34yo f c/o ruq pain 2 days of ruq pain worsened by...",input:"34yo f c/o ruq pain 2 days of ruq pain worsened by fatty foods w/ nausea pmh hyperlipidemia on atorvastatin 20 mg daily vs bp 130/84 hr 72 t 367 rr 18 spo2 95 pe abdomen: + murphy sign labs wbc 139k/µl imaging ruq ultrasound: gallstones & wall thickening dx acute cholecystitis",output:`### Subjective
34-year-old female with RUQ pain. 2 days of RUQ pain worsened by fatty foods with nausea. ROS: No jaundice.
Past Medical History: Hyperlipidemia
Medications: Atorvastatin 20 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Abdomen: positive Murphy sign

Laboratory Results:
- WBC: 13.9 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- RUQ ultrasound: gallstones and wall thickening

### Assessment
Primary Diagnosis: Acute cholecystitis (ICD-10: K81.0)

Differential Diagnoses:
- Biliary colic
- Hepatitis

### Plan
1. NPO and IV fluids
2. Pain control
3. Surgical consult for cholecystectomy`},{id:"General Surgery-3",description:"83yo f c/o rt lower quadrant pain 12 hours of peri...",input:"83yo f c/o rt lower quadrant pain 12 hours of periumbilical pain migrating to rlq with anorexia & n/v pmh none on none vs bp 118/76 hr 110 t 374 rr 18 spo2 95 pe abdomen: rlq tenderness rebound labs wbc 148k/µl imaging ct abdomen: enlarge appendix with periappendiceal fat str&ing dx acute appendicitis",output:`### Subjective
83-year-old female with right lower quadrant pain. 12 hours of periumbilical pain migrating to RLQ with anorexia and nausea. ROS: Low-grade fever.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Abdomen: RLQ tenderness, rebound

Laboratory Results:
- WBC: 14.8 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- CT abdomen: enlarged appendix with periappendiceal fat stranding

### Assessment
Primary Diagnosis: Acute appendicitis (ICD-10: K35.80)

Differential Diagnoses:
- Gastroenteritis
- Ovarian torsion

### Plan
1. NPO and IV fluids
2. IV antibiotics: ceftriaxone + metronidazole
3. OR for appendectomy`},{id:"General Surgery-4",description:"55yo f c/o ruq pain 2 days of ruq pain worsened by...",input:"55yo f c/o ruq pain 2 days of ruq pain worsened by fatty foods w/ nausea pmh hyperlipidemia on atorvastatin 20 mg daily vs bp 130/84 hr 88 t 374 rr 16 spo2 97 pe abdomen: + murphy sign labs wbc 139k/ imaging ruq ultrasound: gallstones & wall thickening dx acute cholecystitis",output:`### Subjective
55-year-old female with RUQ pain. 2 days of RUQ pain worsened by fatty foods with nausea. ROS: No jaundice.
Past Medical History: Hyperlipidemia
Medications: Atorvastatin 20 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Abdomen: positive Murphy sign

Laboratory Results:
- WBC: 13.9 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- RUQ ultrasound: gallstones and wall thickening

### Assessment
Primary Diagnosis: Acute cholecystitis (ICD-10: K81.0)

Differential Diagnoses:
- Biliary colic
- Hepatitis

### Plan
1. NPO and IV fluids
2. Pain control
3. Surgical consult for cholecystectomy`},{id:"General Surgery-5",description:"80yo f c/o rt lower quadrant pain 12 hours of peri...",input:"80yo f c/o rt lower quadrant pain 12 hours of periumbilical pain migrating to rlq w/ anorexia & n/v pmh none on none vs bp 148/92 hr 88 t 374 rr 16 spo2 98 pe abdomen: rlq tenderness rebound labs wbc 148k/µl imaging ct abdomen: enlarged appendix w/ periappendiceal fat str&ing dx acute appendicitis",output:`### Subjective
80-year-old female with right lower quadrant pain. 12 hours of periumbilical pain migrating to RLQ with anorexia and nausea. ROS: Low-grade fever.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: RLQ tenderness, rebound

Laboratory Results:
- WBC: 14.8 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- CT abdomen: enlarged appendix with periappendiceal fat stranding

### Assessment
Primary Diagnosis: Acute appendicitis (ICD-10: K35.80)

Differential Diagnoses:
- Gastroenteritis
- Ovarian torsion

### Plan
1. NPO and IV fluids
2. IV antibiotics: ceftriaxone + metronidazole
3. OR for appendectomy`},{id:"General Surgery-6",description:"38yo f c/o ruq pain 2 days of ruq pain worsened by...",input:"38yo f c/o ruq pain 2 days of ruq pain worsened by fatty foods with nausea pmh hyperlipidemia on atorvastatin 20 mg daily vs bp 118/76 hr 110 t 374 rr 16 spo2 98 pe abdomen: + murphy sign labs wbc 139k/µl imaging ruq ultrasound: gallstones & wall thickening dx acute cholecystitis",output:`### Subjective
38-year-old female with RUQ pain. 2 days of RUQ pain worsened by fatty foods with nausea. ROS: No jaundice.
Past Medical History: Hyperlipidemia
Medications: Atorvastatin 20 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: positive Murphy sign

Laboratory Results:
- WBC: 13.9 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- RUQ ultrasound: gallstones and wall thickening

### Assessment
Primary Diagnosis: Acute cholecystitis (ICD-10: K81.0)

Differential Diagnoses:
- Biliary colic
- Hepatitis

### Plan
1. NPO and IV fluids
2. Pain control
3. Surgical consult for cholecystectomy`},{id:"General Surgery-7",description:"42yo m c/o rt lower quadrant pain 12 hours of peri...",input:"42yo m c/o rt lower quadrant pain 12 hours of periumbilical pain migrating to rlq w/ anorexia & nausea pmh none on none vs bp 130/84 hr 72 t 367 rr 20 spo2 98 pe abdomen: rlq tenderness rebound labs wbc 148k/µl imaging ct abdomen: enlarged appendi w/ periappendiceal fat str&ing dx acute appendicitis",output:`### Subjective
42-year-old male with right lower quadrant pain. 12 hours of periumbilical pain migrating to RLQ with anorexia and nausea. ROS: Low-grade fever.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: RLQ tenderness, rebound

Laboratory Results:
- WBC: 14.8 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- CT abdomen: enlarged appendix with periappendiceal fat stranding

### Assessment
Primary Diagnosis: Acute appendicitis (ICD-10: K35.80)

Differential Diagnoses:
- Gastroenteritis
- Ovarian torsion

### Plan
1. NPO and IV fluids
2. IV antibiotics: ceftriaxone + metronidazole
3. OR for appendectomy`},{id:"General Surgery-8",description:"35yo m c/o ruq pain 2 days of ruq pain worsened by...",input:"35yo m c/o ruq pain 2 days of ruq pain worsened by fatty foods w/ nausea pmh hyperlipidemia on atorvastatin 20 mg daily vs bp 118/76 hr 96 t 374 rr 20 spo2 98 pe abdomen: positive murphy sign labs wbc 139k/µl imaging ruq ultrasound: gallstones & wall thickening dx acute cholecystitis",output:`### Subjective
35-year-old male with RUQ pain. 2 days of RUQ pain worsened by fatty foods with nausea. ROS: No jaundice.
Past Medical History: Hyperlipidemia
Medications: Atorvastatin 20 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: positive Murphy sign

Laboratory Results:
- WBC: 13.9 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- RUQ ultrasound: gallstones and wall thickening

### Assessment
Primary Diagnosis: Acute cholecystitis (ICD-10: K81.0)

Differential Diagnoses:
- Biliary colic
- Hepatitis

### Plan
1. NPO and IV fluids
2. Pain control
3. Surgical consult for cholecystectomy`},{id:"General Surgery-9",description:"54yo f c/o rt lowe quadrant pain 12 hours of periu...",input:"54yo f c/o rt lowe quadrant pain 12 hours of periumbilical pain migrating to rlq w/ anorexia & n/v pmh none on none vs bp 136/86 hr 88 t 367 rr 16 spo2 98 pe abdomen: rlq tenderness rebound labs wbc 148k/µl imaging ct abdomen: enlarged appendix w/ periappendiceal fat str&ing dx acute appendicitis",output:`### Subjective
54-year-old female with right lower quadrant pain. 12 hours of periumbilical pain migrating to RLQ with anorexia and nausea. ROS: Low-grade fever.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: RLQ tenderness, rebound

Laboratory Results:
- WBC: 14.8 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- CT abdomen: enlarged appendix with periappendiceal fat stranding

### Assessment
Primary Diagnosis: Acute appendicitis (ICD-10: K35.80)

Differential Diagnoses:
- Gastroenteritis
- Ovarian torsion

### Plan
1. NPO and IV fluids
2. IV antibiotics: ceftriaxone + metronidazole
3. OR for appendectomy`},{id:"General Surgery-10",description:"41yo m c/o ruq pain 2 days of ruq pain worsened by...",input:"41yo m c/o ruq pain 2 days of ruq pain worsened by fatty foods w/ n/v pmh hyperlipidemia on atorvastatin 20 mg daily vs bp 136/86 hr 96 t 381 rr 18 spo2 98 pe abdomen: + murphy sign labs wbc 139k/µl imaging ruq ultrasound: gallstones & wall thickening dx acute cholecystitis",output:`### Subjective
41-year-old male with RUQ pain. 2 days of RUQ pain worsened by fatty foods with nausea. ROS: No jaundice.
Past Medical History: Hyperlipidemia
Medications: Atorvastatin 20 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: positive Murphy sign

Laboratory Results:
- WBC: 13.9 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- RUQ ultrasound: gallstones and wall thickening

### Assessment
Primary Diagnosis: Acute cholecystitis (ICD-10: K81.0)

Differential Diagnoses:
- Biliary colic
- Hepatitis

### Plan
1. NPO and IV fluids
2. Pain control
3. Surgical consult for cholecystectomy`},{id:"General Surgery-11",description:"57yo f c/o right lower quadrant pain 12 hours of p...",input:"57yo f c/o right lower quadrant pain 12 hours of periumbilical pain migrating to rlq with anorexia & n/v pmh none on none vs bp 136/86 hr 96 t 367 rr 20 spo2 98 pe abdomen: rlq tenderness reboun labs wbc 148k/µl imaging ct abdomen: enlarged appendix with periappendiceal fat str&ing dx acute appendicitis",output:`### Subjective
57-year-old female with right lower quadrant pain. 12 hours of periumbilical pain migrating to RLQ with anorexia and nausea. ROS: Low-grade fever.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: RLQ tenderness, rebound

Laboratory Results:
- WBC: 14.8 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- CT abdomen: enlarged appendix with periappendiceal fat stranding

### Assessment
Primary Diagnosis: Acute appendicitis (ICD-10: K35.80)

Differential Diagnoses:
- Gastroenteritis
- Ovarian torsion

### Plan
1. NPO and IV fluids
2. IV antibiotics: ceftriaxone + metronidazole
3. OR for appendectomy`},{id:"General Surgery-12",description:"43yo m c/o ruq pain 2 days of ruq pain worsened by...",input:"43yo m c/o ruq pain 2 days of ruq pain worsened by fatty foods w/ n/v pmh hyperlipidemia on atorvastatin 20 mg dail vs bp 130/84 hr 72 t 367 rr 20 spo2 98 pe abdomen: + murphy sign labs wbc 139k/µl imaging ruq ultrasound: gallstones & wall thickening dx acute cholecystitis",output:`### Subjective
43-year-old male with RUQ pain. 2 days of RUQ pain worsened by fatty foods with nausea. ROS: No jaundice.
Past Medical History: Hyperlipidemia
Medications: Atorvastatin 20 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: positive Murphy sign

Laboratory Results:
- WBC: 13.9 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- RUQ ultrasound: gallstones and wall thickening

### Assessment
Primary Diagnosis: Acute cholecystitis (ICD-10: K81.0)

Differential Diagnoses:
- Biliary colic
- Hepatitis

### Plan
1. NPO and IV fluids
2. Pain control
3. Surgical consult for cholecystectomy`},{id:"General Surgery-13",description:"83yo m c/o rt lower quadrant pain 12 hours of peri...",input:"83yo m c/o rt lower quadrant pain 12 hours of periumbilical pain migrating to rlq w/ anorexia & n/v pmh none on none vs bp 130/84 hr 96 t 367 rr 18 spo2 97 pe abdomen: rlq tenderness rebound labs wbc 148k/µl imagin ct abdomen: enlarged appendix w/ periappendiceal fat str&ing dx acute appendicitis",output:`### Subjective
83-year-old male with right lower quadrant pain. 12 hours of periumbilical pain migrating to RLQ with anorexia and nausea. ROS: Low-grade fever.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Abdomen: RLQ tenderness, rebound

Laboratory Results:
- WBC: 14.8 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- CT abdomen: enlarged appendix with periappendiceal fat stranding

### Assessment
Primary Diagnosis: Acute appendicitis (ICD-10: K35.80)

Differential Diagnoses:
- Gastroenteritis
- Ovarian torsion

### Plan
1. NPO and IV fluids
2. IV antibiotics: ceftriaxone + metronidazole
3. OR for appendectomy`},{id:"General Surgery-14",description:"33yo m c/o ruq pain 2 days of ruq pain worsened by...",input:"33yo m c/o ruq pain 2 days of ruq pain worsened by fatty foods with n/v pmh hyperlipidemia on atorvastatin 20 mg daily vs bp 148/92 hr 72 t 381 rr 16 spo2 97 pe abdomen: positive murphy sign labs wbc 139k/µl imaging ruq ultrasound: gallstones & wall thickening dx acute cholecystitis",output:`### Subjective
33-year-old male with RUQ pain. 2 days of RUQ pain worsened by fatty foods with nausea. ROS: No jaundice.
Past Medical History: Hyperlipidemia
Medications: Atorvastatin 20 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Abdomen: positive Murphy sign

Laboratory Results:
- WBC: 13.9 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- RUQ ultrasound: gallstones and wall thickening

### Assessment
Primary Diagnosis: Acute cholecystitis (ICD-10: K81.0)

Differential Diagnoses:
- Biliary colic
- Hepatitis

### Plan
1. NPO and IV fluids
2. Pain control
3. Surgical consult for cholecystectomy`},{id:"General Surgery-15",description:"26yo f c/o rt lower quadrant pain 12 hours of peri...",input:"26yo f c/o rt lower quadrant pain 12 hours of periumbilical pain migrating to rlq with anorexia & n/v pmh none on none vs bp 118/76 hr 110 t 381 rr 20 spo2 98 pe abdomen: rlq tenderness rebound labs wbc 148k/µl imaging ct abdomen: enlarge appendix with periappendiceal fat str&ing dx acute appendicitis",output:`### Subjective
26-year-old female with right lower quadrant pain. 12 hours of periumbilical pain migrating to RLQ with anorexia and nausea. ROS: Low-grade fever.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: RLQ tenderness, rebound

Laboratory Results:
- WBC: 14.8 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- CT abdomen: enlarged appendix with periappendiceal fat stranding

### Assessment
Primary Diagnosis: Acute appendicitis (ICD-10: K35.80)

Differential Diagnoses:
- Gastroenteritis
- Ovarian torsion

### Plan
1. NPO and IV fluids
2. IV antibiotics: ceftriaxone + metronidazole
3. OR for appendectomy`},{id:"General Surgery-16",description:"73yo m c/o ruq pain 2 days of ruq pain worsened by...",input:"73yo m c/o ruq pain 2 days of ruq pain worsened by fatty foods w/ n/v pmh hyperlipidemia on atorvastatin 20 mg daily vs bp 148/92 hr 110 t 367 rr 20 spo2 95 pe abdomen: + murphy sign labs wbc 139k/µl imagin ruq ultrasound: gallstones & wall thickening dx acute cholecystitis",output:`### Subjective
73-year-old male with RUQ pain. 2 days of RUQ pain worsened by fatty foods with nausea. ROS: No jaundice.
Past Medical History: Hyperlipidemia
Medications: Atorvastatin 20 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Abdomen: positive Murphy sign

Laboratory Results:
- WBC: 13.9 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- RUQ ultrasound: gallstones and wall thickening

### Assessment
Primary Diagnosis: Acute cholecystitis (ICD-10: K81.0)

Differential Diagnoses:
- Biliary colic
- Hepatitis

### Plan
1. NPO and IV fluids
2. Pain control
3. Surgical consult for cholecystectomy`},{id:"General Surgery-17",description:"48yo f c/o rt lowe quadrant pain 12 hours of periu...",input:"48yo f c/o rt lowe quadrant pain 12 hours of periumbilical pain migrating to rlq w/ anorexia & n/v pmh none on none vs bp 118/76 hr 96 t 367 rr 18 spo2 97 pe abdomen: rlq tenderness rebound labs wbc 148k/µl imaging ct abdomen: enlarged appendix w/ periappendiceal fat str&in dx acute appendicitis",output:`### Subjective
48-year-old female with right lower quadrant pain. 12 hours of periumbilical pain migrating to RLQ with anorexia and nausea. ROS: Low-grade fever.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Abdomen: RLQ tenderness, rebound

Laboratory Results:
- WBC: 14.8 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- CT abdomen: enlarged appendix with periappendiceal fat stranding

### Assessment
Primary Diagnosis: Acute appendicitis (ICD-10: K35.80)

Differential Diagnoses:
- Gastroenteritis
- Ovarian torsion

### Plan
1. NPO and IV fluids
2. IV antibiotics: ceftriaxone + metronidazole
3. OR for appendectomy`},{id:"General Surgery-18",description:"45yo f c/o ruq pain 2 days of ruq pain worsened by...",input:"45yo f c/o ruq pain 2 days of ruq pain worsened by fatty food w/ n/v pmh hyperlipidemia on atorvastatin 20 mg daily vs bp 130/84 hr 96 t 381 rr 18 spo2 97 pe abdomen: + murphy sign labs wbc 139k/µl imaging ruq ultrasound: gallstones & wall thickening dx acute cholecystitis",output:`### Subjective
45-year-old female with RUQ pain. 2 days of RUQ pain worsened by fatty foods with nausea. ROS: No jaundice.
Past Medical History: Hyperlipidemia
Medications: Atorvastatin 20 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Abdomen: positive Murphy sign

Laboratory Results:
- WBC: 13.9 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- RUQ ultrasound: gallstones and wall thickening

### Assessment
Primary Diagnosis: Acute cholecystitis (ICD-10: K81.0)

Differential Diagnoses:
- Biliary colic
- Hepatitis

### Plan
1. NPO and IV fluids
2. Pain control
3. Surgical consult for cholecystectomy`},{id:"General Surgery-19",description:"77yo f c/o rt lower quadrant pain 12 hours of peri...",input:"77yo f c/o rt lower quadrant pain 12 hours of periumbilical pain migrating to rlq w/ anorexi & nausea pmh none on none vs bp 130/84 hr 88 t 374 rr 18 spo2 97 pe abdomen: rlq tenderness rebound labs wbc 148k/µl imaging ct abdomen: enlarged appendix w/ periappendiceal fat str&ing dx acute appendicitis",output:`### Subjective
77-year-old female with right lower quadrant pain. 12 hours of periumbilical pain migrating to RLQ with anorexia and nausea. ROS: Low-grade fever.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Abdomen: RLQ tenderness, rebound

Laboratory Results:
- WBC: 14.8 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- CT abdomen: enlarged appendix with periappendiceal fat stranding

### Assessment
Primary Diagnosis: Acute appendicitis (ICD-10: K35.80)

Differential Diagnoses:
- Gastroenteritis
- Ovarian torsion

### Plan
1. NPO and IV fluids
2. IV antibiotics: ceftriaxone + metronidazole
3. OR for appendectomy`},{id:"General Surgery-20",description:"53yo m c/o ruq pain 2 days of ruq pain worsened by...",input:"53yo m c/o ruq pain 2 days of ruq pain worsened by fatty foods with nausea pmh hyperlipidemia on atorvastatin 20 mg daily vs bp 136/86 hr 72 t 367 rr 16 spo2 98 pe abdomen: positive murphy sign labs wbc 139k/µl imaging ruq ultrasound: gallstones & wall thickening dx acute cholecystitis",output:`### Subjective
53-year-old male with RUQ pain. 2 days of RUQ pain worsened by fatty foods with nausea. ROS: No jaundice.
Past Medical History: Hyperlipidemia
Medications: Atorvastatin 20 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: positive Murphy sign

Laboratory Results:
- WBC: 13.9 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- RUQ ultrasound: gallstones and wall thickening

### Assessment
Primary Diagnosis: Acute cholecystitis (ICD-10: K81.0)

Differential Diagnoses:
- Biliary colic
- Hepatitis

### Plan
1. NPO and IV fluids
2. Pain control
3. Surgical consult for cholecystectomy`},{id:"General Surgery-21",description:"72yo m c/o right lower quadrant pain 12 hours of p...",input:"72yo m c/o right lower quadrant pain 12 hours of periumbilical pain migrating to rlq w/ anorexia & n/v pmh none on none vs bp 118/76 hr 88 t 367 rr 18 spo2 98 pe abdomen: rlq tenderness rebound labs wbc 148k/µl imaging ct abdomen enlarged appendix w/ periappendiceal fat str&ing dx acute appendicitis",output:`### Subjective
72-year-old male with right lower quadrant pain. 12 hours of periumbilical pain migrating to RLQ with anorexia and nausea. ROS: Low-grade fever.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: RLQ tenderness, rebound

Laboratory Results:
- WBC: 14.8 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- CT abdomen: enlarged appendix with periappendiceal fat stranding

### Assessment
Primary Diagnosis: Acute appendicitis (ICD-10: K35.80)

Differential Diagnoses:
- Gastroenteritis
- Ovarian torsion

### Plan
1. NPO and IV fluids
2. IV antibiotics: ceftriaxone + metronidazole
3. OR for appendectomy`},{id:"General Surgery-22",description:"33yo m c/o ruq pain 2 days of ruq pain worsened by...",input:"33yo m c/o ruq pain 2 days of ruq pain worsened by fatty foods with n/v pmh hyperlipidemia on atorvastatin 20 mg daily vs bp 148/92 hr 72 t 374 rr 18 spo2 98 pe abdomen positive murphy sign labs wbc 139k/µl imaging ruq ultrasound: gallstones & wall thickening dx acute cholecystitis",output:`### Subjective
33-year-old male with RUQ pain. 2 days of RUQ pain worsened by fatty foods with nausea. ROS: No jaundice.
Past Medical History: Hyperlipidemia
Medications: Atorvastatin 20 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: positive Murphy sign

Laboratory Results:
- WBC: 13.9 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- RUQ ultrasound: gallstones and wall thickening

### Assessment
Primary Diagnosis: Acute cholecystitis (ICD-10: K81.0)

Differential Diagnoses:
- Biliary colic
- Hepatitis

### Plan
1. NPO and IV fluids
2. Pain control
3. Surgical consult for cholecystectomy`},{id:"General Surgery-23",description:"21yo m c/o right lower quadrant pain 12 hours of p...",input:"21yo m c/o right lower quadrant pain 12 hours of periumbilical pain migrating to rlq w/ anorexia & n/v pmh none on none vs bp 136/86 hr 88 t 367 rr 18 spo2 97 pe abdomen rlq tenderness rebound labs wbc 148k/µl imaging ct abdomen: enlarged appendix w/ periappendiceal fat str&ing dx acute appendicitis",output:`### Subjective
21-year-old male with right lower quadrant pain. 12 hours of periumbilical pain migrating to RLQ with anorexia and nausea. ROS: Low-grade fever.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Abdomen: RLQ tenderness, rebound

Laboratory Results:
- WBC: 14.8 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- CT abdomen: enlarged appendix with periappendiceal fat stranding

### Assessment
Primary Diagnosis: Acute appendicitis (ICD-10: K35.80)

Differential Diagnoses:
- Gastroenteritis
- Ovarian torsion

### Plan
1. NPO and IV fluids
2. IV antibiotics: ceftriaxone + metronidazole
3. OR for appendectomy`},{id:"General Surgery-24",description:"47yo m c/o ruq pain 2 days of ruq pain worsened by...",input:"47yo m c/o ruq pain 2 days of ruq pain worsened by fatty foods w/ n/v pmh hyperlipidemia on atorvastatin 20 mg daily vs bp 130/84 hr 96 t 381 rr 16 spo2 97 pe abdomen: positive murphy sign labs wbc 139k/µl imaging ruq ultrasound: gallstones & wall thickening dx acute cholecystitis",output:`### Subjective
47-year-old male with RUQ pain. 2 days of RUQ pain worsened by fatty foods with nausea. ROS: No jaundice.
Past Medical History: Hyperlipidemia
Medications: Atorvastatin 20 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Abdomen: positive Murphy sign

Laboratory Results:
- WBC: 13.9 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- RUQ ultrasound: gallstones and wall thickening

### Assessment
Primary Diagnosis: Acute cholecystitis (ICD-10: K81.0)

Differential Diagnoses:
- Biliary colic
- Hepatitis

### Plan
1. NPO and IV fluids
2. Pain control
3. Surgical consult for cholecystectomy`},{id:"General Surgery-25",description:"36yo m c/o rt lower quadrant pain 12 hours of peri...",input:"36yo m c/o rt lower quadrant pain 12 hours of periumbilical pain migrating to rlq w/ anorexia & n/v pmh none on none vs bp 148/9 hr 88 t 381 rr 18 spo2 97 pe abdomen: rlq tenderness rebound labs wbc 148k/µl imaging ct abdomen: enlarged appendix w/ periappendiceal fat str&ing dx acute appendicitis",output:`### Subjective
36-year-old male with right lower quadrant pain. 12 hours of periumbilical pain migrating to RLQ with anorexia and nausea. ROS: Low-grade fever.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Abdomen: RLQ tenderness, rebound

Laboratory Results:
- WBC: 14.8 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- CT abdomen: enlarged appendix with periappendiceal fat stranding

### Assessment
Primary Diagnosis: Acute appendicitis (ICD-10: K35.80)

Differential Diagnoses:
- Gastroenteritis
- Ovarian torsion

### Plan
1. NPO and IV fluids
2. IV antibiotics: ceftriaxone + metronidazole
3. OR for appendectomy`},{id:"General Surgery-26",description:"34yo m c/o ruq pain 2 days of ruq pain worsened by...",input:"34yo m c/o ruq pain 2 days of ruq pain worsened by fatty foods w/ n/v pmh hyperlipidemia on atorvastatin 20 mg daily vs bp 136/86 hr 88 t 381 rr 18 spo2 98 pe abdomen: + murphy sign labs wbc 139k/µl imaging ruq ultrasound: gallstones & wall thickening dx acute cholecystiti",output:`### Subjective
34-year-old male with RUQ pain. 2 days of RUQ pain worsened by fatty foods with nausea. ROS: No jaundice.
Past Medical History: Hyperlipidemia
Medications: Atorvastatin 20 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Abdomen: positive Murphy sign

Laboratory Results:
- WBC: 13.9 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- RUQ ultrasound: gallstones and wall thickening

### Assessment
Primary Diagnosis: Acute cholecystitis (ICD-10: K81.0)

Differential Diagnoses:
- Biliary colic
- Hepatitis

### Plan
1. NPO and IV fluids
2. Pain control
3. Surgical consult for cholecystectomy`},{id:"General Surgery-27",description:"37yo m c/o right lowe quadrant pain 12 hours of pe...",input:"37yo m c/o right lowe quadrant pain 12 hours of periumbilical pain migrating to rlq w/ anorexia & nausea pmh none on none vs bp 118/76 hr 72 t 374 rr 18 spo2 97 pe abdomen: rlq tenderness rebound labs wbc 148k/µl imaging ct abdomen: enlarged appendix w/ periappendiceal fat str&ing dx acute appendicitis",output:`### Subjective
37-year-old male with right lower quadrant pain. 12 hours of periumbilical pain migrating to RLQ with anorexia and nausea. ROS: Low-grade fever.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Abdomen: RLQ tenderness, rebound

Laboratory Results:
- WBC: 14.8 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- CT abdomen: enlarged appendix with periappendiceal fat stranding

### Assessment
Primary Diagnosis: Acute appendicitis (ICD-10: K35.80)

Differential Diagnoses:
- Gastroenteritis
- Ovarian torsion

### Plan
1. NPO and IV fluids
2. IV antibiotics: ceftriaxone + metronidazole
3. OR for appendectomy`},{id:"General Surgery-28",description:"30yo f c/o ruq pain 2 days of ruq pain worsened by...",input:"30yo f c/o ruq pain 2 days of ruq pain worsened by fatty foods w/ n/v pmh hyperlipidemia on atorvastatin 20 mg daily vs bp 136/86 hr 72 t 374 rr 18 spo2 95 pe abdomen: positive murphy sign labs wbc 139k/µl imaging ruq ultrasound: gallstones & wall thickening dx acute cholecystitis",output:`### Subjective
30-year-old female with RUQ pain. 2 days of RUQ pain worsened by fatty foods with nausea. ROS: No jaundice.
Past Medical History: Hyperlipidemia
Medications: Atorvastatin 20 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Abdomen: positive Murphy sign

Laboratory Results:
- WBC: 13.9 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- RUQ ultrasound: gallstones and wall thickening

### Assessment
Primary Diagnosis: Acute cholecystitis (ICD-10: K81.0)

Differential Diagnoses:
- Biliary colic
- Hepatitis

### Plan
1. NPO and IV fluids
2. Pain control
3. Surgical consult for cholecystectomy`},{id:"General Surgery-29",description:"50yo m c/o rt lower quadrant pain 12 hours of peri...",input:"50yo m c/o rt lower quadrant pain 12 hours of periumbilical pain migrating to rlq w/ anorexia & n/v pmh none on none vs bp 136/86 hr 72 t 367 rr 16 spo2 97 pe abdomen: rlq tenderness rebound labs wbc 148k/µl imaging ct abdomen: enlarged appendix w/ periappendiceal fat str&ing dx acute appendicitis",output:`### Subjective
50-year-old male with right lower quadrant pain. 12 hours of periumbilical pain migrating to RLQ with anorexia and nausea. ROS: Low-grade fever.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Abdomen: RLQ tenderness, rebound

Laboratory Results:
- WBC: 14.8 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- CT abdomen: enlarged appendix with periappendiceal fat stranding

### Assessment
Primary Diagnosis: Acute appendicitis (ICD-10: K35.80)

Differential Diagnoses:
- Gastroenteritis
- Ovarian torsion

### Plan
1. NPO and IV fluids
2. IV antibiotics: ceftriaxone + metronidazole
3. OR for appendectomy`},{id:"General Surgery-30",description:"46yo m c/o ruq pain 2 days of ruq pain worsened by...",input:"46yo m c/o ruq pain 2 days of ruq pain worsened by fatty foods w/ n/v pmh hyperlipidemia on atorvastatin 20 mg daily vs bp 130/84 hr 96 t 374 rr 18 spo2 97 pe abdomen: + murphy sign labs wbc 139k/µl imaging ruq ultrasound: gallstones & wall thickening dx acute cholecystitis",output:`### Subjective
46-year-old male with RUQ pain. 2 days of RUQ pain worsened by fatty foods with nausea. ROS: No jaundice.
Past Medical History: Hyperlipidemia
Medications: Atorvastatin 20 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Abdomen: positive Murphy sign

Laboratory Results:
- WBC: 13.9 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- RUQ ultrasound: gallstones and wall thickening

### Assessment
Primary Diagnosis: Acute cholecystitis (ICD-10: K81.0)

Differential Diagnoses:
- Biliary colic
- Hepatitis

### Plan
1. NPO and IV fluids
2. Pain control
3. Surgical consult for cholecystectomy`}]},{name:"Geriatrics",cases:[{id:"Geriatrics-1",description:"26yo m c/o memory loss progressive memory impairme...",input:"26yo m c/o memory loss progressive memory impairmen and difficulty w/ adls for 1 year. pmh htn on amlodipine 5 mg daily vs bp 118/76 hr 110 t 36.7 rr 16 spo2 97 pe neuro: mmse 20/30 labs tsh 2.0miu/l imaging mri brain: chronic microvascular changes dx dementia, unspecified",output:`### Subjective
26-year-old male with memory loss. Progressive memory impairment and difficulty with ADLs for 1 year. ROS: No hallucinations.
Past Medical History: HTN
Medications: Amlodipine 5 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Neuro: MMSE 20/30

Laboratory Results:
- TSH: 2.0 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- MRI brain: chronic microvascular changes

### Assessment
Primary Diagnosis: Dementia, unspecified (ICD-10: F03.90)

Differential Diagnoses:
- Depression
- B12 deficiency

### Plan
1. Start donepezil 5 mg nightly
2. Safety counseling`},{id:"Geriatrics-2",description:"45yo f c/o falls at home two falls in the last mon...",input:"45yo f c/o falls at home two falls in the last month, no syncope. pmh osteoarthritis on gabapentin 300 mg nightly vs bp 136/86 hr 96 t 37.4 rr 20 spo2 97 pe gait: unsteady labs vitamin d 18ng/ml imaging none dx repeated falls",output:`### Subjective
45-year-old female with falls at home. Two falls in the last month, no syncope. ROS: No chest pain.
Past Medical History: Osteoarthritis
Medications: Gabapentin 300 mg nightly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Gait: unsteady

Laboratory Results:
- Vitamin D: 18 ng/mL (Ref: >30)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Repeated falls (ICD-10: R29.6)

Differential Diagnoses:
- Medication side effects

### Plan
1. PT referral for gait training
2. Vitamin D supplementation`},{id:"Geriatrics-3",description:"41yo m c/o memory loss progressive memory impairme...",input:"41yo m c/o memory loss progressive memory impairmen and difficulty w/ adls for 1 year. pmh htn on amlodipine 5 mg daily vs bp 136/86 hr 110 t 36.7 rr 20 spo2 95 pe neuro: mmse 20/30 labs tsh 2.0miu/l imaging mri brain: chronic microvascular changes dx dementia, unspecified",output:`### Subjective
41-year-old male with memory loss. Progressive memory impairment and difficulty with ADLs for 1 year. ROS: No hallucinations.
Past Medical History: HTN
Medications: Amlodipine 5 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Neuro: MMSE 20/30

Laboratory Results:
- TSH: 2.0 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- MRI brain: chronic microvascular changes

### Assessment
Primary Diagnosis: Dementia, unspecified (ICD-10: F03.90)

Differential Diagnoses:
- Depression
- B12 deficiency

### Plan
1. Start donepezil 5 mg nightly
2. Safety counseling`},{id:"Geriatrics-4",description:"79yo m c/o falls at home two falls in the last mon...",input:"79yo m c/o falls at home two falls in the last month, no syncope. pmh osteoarthritis on gabapentin 300 mg nightl vs bp 148/92 hr 88 t 37.4 rr 20 spo2 97 pe gait: unsteady labs vitamin d 18ng/ml imaging none dx repeated falls",output:`### Subjective
79-year-old male with falls at home. Two falls in the last month, no syncope. ROS: No chest pain.
Past Medical History: Osteoarthritis
Medications: Gabapentin 300 mg nightly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Gait: unsteady

Laboratory Results:
- Vitamin D: 18 ng/mL (Ref: >30)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Repeated falls (ICD-10: R29.6)

Differential Diagnoses:
- Medication side effects

### Plan
1. PT referral for gait training
2. Vitamin D supplementation`},{id:"Geriatrics-5",description:"68yo f c/o memory loss progressive memory impairme...",input:"68yo f c/o memory loss progressive memory impairment and difficulty w/ adls for 1 year. pmh htn on amlodipine 5 mg daily vs bp 136/86 hr 88 t 37.4 rr 20 spo2 95 pe neuro: mmse 20/30 labs tsh 2.0miu/l imaging mri brain: chronic microvascular changes dx dementia, unspecified",output:`### Subjective
68-year-old female with memory loss. Progressive memory impairment and difficulty with ADLs for 1 year. ROS: No hallucinations.
Past Medical History: HTN
Medications: Amlodipine 5 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Neuro: MMSE 20/30

Laboratory Results:
- TSH: 2.0 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- MRI brain: chronic microvascular changes

### Assessment
Primary Diagnosis: Dementia, unspecified (ICD-10: F03.90)

Differential Diagnoses:
- Depression
- B12 deficiency

### Plan
1. Start donepezil 5 mg nightly
2. Safety counseling`},{id:"Geriatrics-6",description:"82yo f c/o falls at home two falls in the last mon...",input:"82yo f c/o falls at home two falls in the last month, no syncope. pmh osteoarthritis on gabapentin 300 mg nightly vs bp 136/86 hr 72 t 37.4 rr 16 spo2 97 pe gait: unsteady labs vitami d 18ng/ml imaging none dx repeated falls",output:`### Subjective
82-year-old female with falls at home. Two falls in the last month, no syncope. ROS: No chest pain.
Past Medical History: Osteoarthritis
Medications: Gabapentin 300 mg nightly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Gait: unsteady

Laboratory Results:
- Vitamin D: 18 ng/mL (Ref: >30)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Repeated falls (ICD-10: R29.6)

Differential Diagnoses:
- Medication side effects

### Plan
1. PT referral for gait training
2. Vitamin D supplementation`},{id:"Geriatrics-7",description:"81yo m c/o memory loss progressive memory impairme...",input:"81yo m c/o memory loss progressive memory impairment and difficulty w/ adls for 1 year. pmh htn on amlodipin 5 mg daily vs bp 130/84 hr 110 t 38.1 rr 16 spo2 95 pe neuro: mmse 20/30 labs tsh 2.0miu/ imaging mri brain: chronic microvascular changes dx dementia, unspecified",output:`### Subjective
81-year-old male with memory loss. Progressive memory impairment and difficulty with ADLs for 1 year. ROS: No hallucinations.
Past Medical History: HTN
Medications: Amlodipine 5 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Neuro: MMSE 20/30

Laboratory Results:
- TSH: 2.0 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- MRI brain: chronic microvascular changes

### Assessment
Primary Diagnosis: Dementia, unspecified (ICD-10: F03.90)

Differential Diagnoses:
- Depression
- B12 deficiency

### Plan
1. Start donepezil 5 mg nightly
2. Safety counseling`},{id:"Geriatrics-8",description:"41yo m c/o falls at home two falls in the last mon...",input:"41yo m c/o falls at home two falls in the last month, no syncope. pmh osteoarthritis on gabapentin 300 mg nightly vs bp 136/86 hr 110 t 36.7 rr 16 spo2 95 pe gait: unsteady labs vitamin d 18ng/ml imaging none dx repeated falls",output:`### Subjective
41-year-old male with falls at home. Two falls in the last month, no syncope. ROS: No chest pain.
Past Medical History: Osteoarthritis
Medications: Gabapentin 300 mg nightly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Gait: unsteady

Laboratory Results:
- Vitamin D: 18 ng/mL (Ref: >30)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Repeated falls (ICD-10: R29.6)

Differential Diagnoses:
- Medication side effects

### Plan
1. PT referral for gait training
2. Vitamin D supplementation`},{id:"Geriatrics-9",description:"68yo f c/o memory loss progressive memory impairme...",input:"68yo f c/o memory loss progressive memory impairment and difficulty w/ adls for 1 year. pmh htn on amlodipine 5 mg daily vs bp 130/84 hr 110 t 38.1 rr 18 spo2 98 pe neuro: mmse 20/30 labs tsh 2.0miu/l imaging mri brain: chronic microvascular changes dx dementia, unspecified",output:`### Subjective
68-year-old female with memory loss. Progressive memory impairment and difficulty with ADLs for 1 year. ROS: No hallucinations.
Past Medical History: HTN
Medications: Amlodipine 5 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Neuro: MMSE 20/30

Laboratory Results:
- TSH: 2.0 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- MRI brain: chronic microvascular changes

### Assessment
Primary Diagnosis: Dementia, unspecified (ICD-10: F03.90)

Differential Diagnoses:
- Depression
- B12 deficiency

### Plan
1. Start donepezil 5 mg nightly
2. Safety counseling`},{id:"Geriatrics-10",description:"57yo m c/o falls at home two fall in the last mont...",input:"57yo m c/o falls at home two fall in the last month, no syncope. pmh osteoarthritis on gabapentin 300 mg nightly vs bp 148/92 hr 110 t 36.7 rr 18 spo2 98 pe gait: unsteady labs vitamin d 18ng/ml imaging none dx repeated falls",output:`### Subjective
57-year-old male with falls at home. Two falls in the last month, no syncope. ROS: No chest pain.
Past Medical History: Osteoarthritis
Medications: Gabapentin 300 mg nightly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Gait: unsteady

Laboratory Results:
- Vitamin D: 18 ng/mL (Ref: >30)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Repeated falls (ICD-10: R29.6)

Differential Diagnoses:
- Medication side effects

### Plan
1. PT referral for gait training
2. Vitamin D supplementation`},{id:"Geriatrics-11",description:"85yo f c/o memory loss progressive memory impairme...",input:"85yo f c/o memory loss progressive memory impairment and difficulty w/ adls for 1 year. pmh htn on amlodipine 5 mg daily vs bp 118/76 hr 110 t 36.7 rr 18 spo2 98 pe neuro mmse 20/30 labs tsh 2.0miu/l imagin mri brain: chronic microvascular changes dx dementia, unspecified",output:`### Subjective
85-year-old female with memory loss. Progressive memory impairment and difficulty with ADLs for 1 year. ROS: No hallucinations.
Past Medical History: HTN
Medications: Amlodipine 5 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Neuro: MMSE 20/30

Laboratory Results:
- TSH: 2.0 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- MRI brain: chronic microvascular changes

### Assessment
Primary Diagnosis: Dementia, unspecified (ICD-10: F03.90)

Differential Diagnoses:
- Depression
- B12 deficiency

### Plan
1. Start donepezil 5 mg nightly
2. Safety counseling`},{id:"Geriatrics-12",description:"61yo f c/o falls at home two falls in the last mon...",input:"61yo f c/o falls at home two falls in the last month, no syncope. pmh osteoarthritis on gabapentin 300 mg nightly vs bp 148/92 hr 96 t 36.7 rr 20 spo2 97 pe gait: unsteady labs vitamin d 18ng/ml imaging none dx repeated falls",output:`### Subjective
61-year-old female with falls at home. Two falls in the last month, no syncope. ROS: No chest pain.
Past Medical History: Osteoarthritis
Medications: Gabapentin 300 mg nightly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Gait: unsteady

Laboratory Results:
- Vitamin D: 18 ng/mL (Ref: >30)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Repeated falls (ICD-10: R29.6)

Differential Diagnoses:
- Medication side effects

### Plan
1. PT referral for gait training
2. Vitamin D supplementation`},{id:"Geriatrics-13",description:"84yo m c/o memory loss progressive memory impairme...",input:"84yo m c/o memory loss progressive memory impairment and difficulty w/ adls for 1 year. pmh htn on amlodipine 5 mg daily vs bp 130/84 hr 72 t 37.4 rr 18 spo2 98 pe neuro: mmse 20/30 labs tsh 2.0miu/l imaging mri brain: chronic microvascular change dx dementia, unspecified",output:`### Subjective
84-year-old male with memory loss. Progressive memory impairment and difficulty with ADLs for 1 year. ROS: No hallucinations.
Past Medical History: HTN
Medications: Amlodipine 5 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Neuro: MMSE 20/30

Laboratory Results:
- TSH: 2.0 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- MRI brain: chronic microvascular changes

### Assessment
Primary Diagnosis: Dementia, unspecified (ICD-10: F03.90)

Differential Diagnoses:
- Depression
- B12 deficiency

### Plan
1. Start donepezil 5 mg nightly
2. Safety counseling`},{id:"Geriatrics-14",description:"31yo m c/o falls at home two falls in the last mon...",input:"31yo m c/o falls at home two falls in the last month, no syncope. pmh osteoarthritis on gabapenti 300 mg nightly vs bp 118/76 hr 88 t 36.7 rr 20 spo2 97 pe gait: unsteady labs vitamin d 18ng/ml imaging none dx repeated falls",output:`### Subjective
31-year-old male with falls at home. Two falls in the last month, no syncope. ROS: No chest pain.
Past Medical History: Osteoarthritis
Medications: Gabapentin 300 mg nightly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Gait: unsteady

Laboratory Results:
- Vitamin D: 18 ng/mL (Ref: >30)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Repeated falls (ICD-10: R29.6)

Differential Diagnoses:
- Medication side effects

### Plan
1. PT referral for gait training
2. Vitamin D supplementation`},{id:"Geriatrics-15",description:"35yo f c/o memory loss progressive memory impairme...",input:"35yo f c/o memory loss progressive memory impairment and difficulty w/ adls for 1 year. pmh htn on amlodipine 5 mg daily vs bp 118/76 hr 96 t 36.7 rr 20 spo2 97 pe neuro: mmse 20/3 labs tsh 2.0miu/l imaging mri brain: chronic microvascular changes dx dementia, unspecified",output:`### Subjective
35-year-old female with memory loss. Progressive memory impairment and difficulty with ADLs for 1 year. ROS: No hallucinations.
Past Medical History: HTN
Medications: Amlodipine 5 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Neuro: MMSE 20/30

Laboratory Results:
- TSH: 2.0 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- MRI brain: chronic microvascular changes

### Assessment
Primary Diagnosis: Dementia, unspecified (ICD-10: F03.90)

Differential Diagnoses:
- Depression
- B12 deficiency

### Plan
1. Start donepezil 5 mg nightly
2. Safety counseling`},{id:"Geriatrics-16",description:"45yo f c/o falls at home two falls in the last mon...",input:"45yo f c/o falls at home two falls in the last month, no syncope. pmh osteoarthritis on gabapentin 300 mg nightly vs bp 118/76 hr 110 t 37.4 rr 20 spo2 95 pe gait: unsteady labs vitami d 18ng/ml imaging none dx repeated falls",output:`### Subjective
45-year-old female with falls at home. Two falls in the last month, no syncope. ROS: No chest pain.
Past Medical History: Osteoarthritis
Medications: Gabapentin 300 mg nightly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Gait: unsteady

Laboratory Results:
- Vitamin D: 18 ng/mL (Ref: >30)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Repeated falls (ICD-10: R29.6)

Differential Diagnoses:
- Medication side effects

### Plan
1. PT referral for gait training
2. Vitamin D supplementation`},{id:"Geriatrics-17",description:"32yo m c/o memory loss progressive memory impairme...",input:"32yo m c/o memory loss progressive memory impairment and difficulty with adls for 1 year. pmh htn on amlodipine 5 mg daily vs bp 148/92 hr 72 t 36.7 rr 20 spo2 97 pe neuro: mmse 20/30 labs tsh 2.0miu/l imaging mri brain: chronic microvascular changes dx dementia, unspecified",output:`### Subjective
32-year-old male with memory loss. Progressive memory impairment and difficulty with ADLs for 1 year. ROS: No hallucinations.
Past Medical History: HTN
Medications: Amlodipine 5 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Neuro: MMSE 20/30

Laboratory Results:
- TSH: 2.0 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- MRI brain: chronic microvascular changes

### Assessment
Primary Diagnosis: Dementia, unspecified (ICD-10: F03.90)

Differential Diagnoses:
- Depression
- B12 deficiency

### Plan
1. Start donepezil 5 mg nightly
2. Safety counseling`},{id:"Geriatrics-18",description:"51yo f c/o falls at home two falls in the last mon...",input:"51yo f c/o falls at home two falls in the last month, no syncope. pmh osteoarthritis on gabapentin 300 mg nightly vs bp 148/92 hr 96 t 38.1 rr 16 spo2 95 pe gait: unsteady labs vitami d 18ng/ml imaging none dx repeated falls",output:`### Subjective
51-year-old female with falls at home. Two falls in the last month, no syncope. ROS: No chest pain.
Past Medical History: Osteoarthritis
Medications: Gabapentin 300 mg nightly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Gait: unsteady

Laboratory Results:
- Vitamin D: 18 ng/mL (Ref: >30)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Repeated falls (ICD-10: R29.6)

Differential Diagnoses:
- Medication side effects

### Plan
1. PT referral for gait training
2. Vitamin D supplementation`},{id:"Geriatrics-19",description:"20yo m c/o memory loss progressive memory impairme...",input:"20yo m c/o memory loss progressive memory impairment and difficulty with adls for 1 year. pmh htn on amlodipine 5 mg daily vs bp 136/86 hr 72 t 36.7 rr 18 spo2 97 pe neuro: mmse 20/30 labs tsh 2.0miu/l imaging mri brain: chronic microvascular changes dx dementia unspecified",output:`### Subjective
20-year-old male with memory loss. Progressive memory impairment and difficulty with ADLs for 1 year. ROS: No hallucinations.
Past Medical History: HTN
Medications: Amlodipine 5 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Neuro: MMSE 20/30

Laboratory Results:
- TSH: 2.0 mIU/L (Ref: 0.4-4.0)

Imaging/Diagnostics:
- MRI brain: chronic microvascular changes

### Assessment
Primary Diagnosis: Dementia, unspecified (ICD-10: F03.90)

Differential Diagnoses:
- Depression
- B12 deficiency

### Plan
1. Start donepezil 5 mg nightly
2. Safety counseling`},{id:"Geriatrics-20",description:"29yo m c/o falls at home two falls in the last mon...",input:"29yo m c/o falls at home two falls in the last month, no syncope. pmh osteoarthritis on gabapentin 300 mg nightly vs bp 136/86 hr 110 t 36.7 rr 16 spo2 97 pe gait: unsteady labs vitamin d 18ng/ml imaging none dx repeated falls",output:`### Subjective
29-year-old male with falls at home. Two falls in the last month, no syncope. ROS: No chest pain.
Past Medical History: Osteoarthritis
Medications: Gabapentin 300 mg nightly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Gait: unsteady

Laboratory Results:
- Vitamin D: 18 ng/mL (Ref: >30)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Repeated falls (ICD-10: R29.6)

Differential Diagnoses:
- Medication side effects

### Plan
1. PT referral for gait training
2. Vitamin D supplementation`}]},{name:"Infectious Disease",cases:[{id:"Infectious Disease-1",description:"29yo f c/o fever & chills high fever w/ rigors & h...",input:"29yo f c/o fever & chills high fever w/ rigors & hypotension pmh iv drug use on none vs bp 136/86 hr 110 t 367 rr 18 spo2 95 pe skin: track marks labs wbc 186k/µl imaging blood cultures pending dx sepsis due to mrsa",output:`### Subjective
29-year-old female with fever and chills. High fever with rigors and hypotension. ROS: No focal symptoms.
Past Medical History: IV drug use
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Skin: track marks

Laboratory Results:
- WBC: 18.6 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- Blood cultures pending

### Assessment
Primary Diagnosis: Sepsis due to MRSA (ICD-10: A41.02)

Differential Diagnoses:
- Endocarditis

### Plan
1. Start vancomycin
2. Obtain TTE`},{id:"Infectious Disease-2",description:"75yo f c/o routine follow-u reports adherence to a...",input:"75yo f c/o routine follow-u reports adherence to art; no opportunistic infections pmh hiv on bictegravir/emtricitabine/tenofovir daily vs bp 118/76 hr 110 t 367 rr 16 spo2 95 pe general: well-appearing labs cd4 480cells/µl viral load <50copies/ml imaging none dx hiv disease",output:`### Subjective
75-year-old female with routine follow-up. Reports adherence to ART; no opportunistic infections. ROS: No weight loss.
Past Medical History: HIV
Medications: Bictegravir/emtricitabine/tenofovir daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- General: well-appearing

Laboratory Results:
- CD4: 480 cells/µL (Ref: >500)
- Viral load: <50 copies/mL (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: HIV disease (ICD-10: B20)

Differential Diagnoses:
- ART side effects

### Plan
1. Continue ART
2. Repeat labs in 6 months`},{id:"Infectious Disease-3",description:"20yo m c/o fever & chills high fever w/ rigors & h...",input:"20yo m c/o fever & chills high fever w/ rigors & hypotension pmh iv drug use on none vs bp 136/86 hr 72 t 367 rr 16 spo2 95 pe skin: trac marks labs wbc 186k/µl imaging blood cultures pending dx sepsis due to mrsa",output:`### Subjective
20-year-old male with fever and chills. High fever with rigors and hypotension. ROS: No focal symptoms.
Past Medical History: IV drug use
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Skin: track marks

Laboratory Results:
- WBC: 18.6 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- Blood cultures pending

### Assessment
Primary Diagnosis: Sepsis due to MRSA (ICD-10: A41.02)

Differential Diagnoses:
- Endocarditis

### Plan
1. Start vancomycin
2. Obtain TTE`},{id:"Infectious Disease-4",description:"36yo f c/o routine follow-up reports adherence to ...",input:"36yo f c/o routine follow-up reports adherence to art; no opportunistic infections pmh hiv on bictegravir/emtricitabine/tenofovir daily vs bp 118/76 hr 110 t 374 rr 20 spo2 97 pe general: well-appearing labs cd4 480cells/µ viral load <50copies/ml imaging none dx hiv disease",output:`### Subjective
36-year-old female with routine follow-up. Reports adherence to ART; no opportunistic infections. ROS: No weight loss.
Past Medical History: HIV
Medications: Bictegravir/emtricitabine/tenofovir daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- General: well-appearing

Laboratory Results:
- CD4: 480 cells/µL (Ref: >500)
- Viral load: <50 copies/mL (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: HIV disease (ICD-10: B20)

Differential Diagnoses:
- ART side effects

### Plan
1. Continue ART
2. Repeat labs in 6 months`},{id:"Infectious Disease-5",description:"31yo m c/o fever & chills high fever with rigors &...",input:"31yo m c/o fever & chills high fever with rigors & hypotension pmh iv drug use on none vs bp 130/84 hr 110 t 381 rr 18 spo2 98 pe skin: track marks labs wbc 186k/µl imaging blood cultures pending dx sepsis due to mrsa",output:`### Subjective
31-year-old male with fever and chills. High fever with rigors and hypotension. ROS: No focal symptoms.
Past Medical History: IV drug use
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Skin: track marks

Laboratory Results:
- WBC: 18.6 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- Blood cultures pending

### Assessment
Primary Diagnosis: Sepsis due to MRSA (ICD-10: A41.02)

Differential Diagnoses:
- Endocarditis

### Plan
1. Start vancomycin
2. Obtain TTE`},{id:"Infectious Disease-6",description:"66yo m c/o routine follow-up reports adherence to ...",input:"66yo m c/o routine follow-up reports adherence to art; no opportunistic infections pmh hiv on bictegravir/emtricitabine/tenofovir daily vs bp 130/84 hr 72 t 374 rr 16 spo2 98 pe general: well-appearing labs cd4 480cells/µl viral load <50copies/ml imaging none dx hiv disease",output:`### Subjective
66-year-old male with routine follow-up. Reports adherence to ART; no opportunistic infections. ROS: No weight loss.
Past Medical History: HIV
Medications: Bictegravir/emtricitabine/tenofovir daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: well-appearing

Laboratory Results:
- CD4: 480 cells/µL (Ref: >500)
- Viral load: <50 copies/mL (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: HIV disease (ICD-10: B20)

Differential Diagnoses:
- ART side effects

### Plan
1. Continue ART
2. Repeat labs in 6 months`},{id:"Infectious Disease-7",description:"53yo f c/o fever & chills high fever w/ rigors & h...",input:"53yo f c/o fever & chills high fever w/ rigors & hypotension pmh iv drug use on none vs bp 148/92 hr 110 t 367 rr 18 spo2 98 pe skin: track marks labs wbc 186k/µl imaging blood cultures pending dx sepsis due to mrsa",output:`### Subjective
53-year-old female with fever and chills. High fever with rigors and hypotension. ROS: No focal symptoms.
Past Medical History: IV drug use
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Skin: track marks

Laboratory Results:
- WBC: 18.6 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- Blood cultures pending

### Assessment
Primary Diagnosis: Sepsis due to MRSA (ICD-10: A41.02)

Differential Diagnoses:
- Endocarditis

### Plan
1. Start vancomycin
2. Obtain TTE`},{id:"Infectious Disease-8",description:"55yo m c/o routine follow-up reports adherence to ...",input:"55yo m c/o routine follow-up reports adherence to art; no opportunistic infections pmh hiv on bictegravir/emtricitabine/tenofovir dail vs bp 136/86 hr 96 t 381 rr 20 spo2 98 pe general: well-appearing labs cd4 480cells/µl vira load <50copies/ml imaging none dx hiv disease",output:`### Subjective
55-year-old male with routine follow-up. Reports adherence to ART; no opportunistic infections. ROS: No weight loss.
Past Medical History: HIV
Medications: Bictegravir/emtricitabine/tenofovir daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: well-appearing

Laboratory Results:
- CD4: 480 cells/µL (Ref: >500)
- Viral load: <50 copies/mL (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: HIV disease (ICD-10: B20)

Differential Diagnoses:
- ART side effects

### Plan
1. Continue ART
2. Repeat labs in 6 months`},{id:"Infectious Disease-9",description:"84yo f c/o fever & chills high fever with rigors &...",input:"84yo f c/o fever & chills high fever with rigors & hypotension pmh iv drug use on none vs bp 118/76 hr 72 t 367 rr 18 spo2 95 pe skin track marks labs wbc 186k/µl imaging blood cultures pending dx sepsis due to mrsa",output:`### Subjective
84-year-old female with fever and chills. High fever with rigors and hypotension. ROS: No focal symptoms.
Past Medical History: IV drug use
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Skin: track marks

Laboratory Results:
- WBC: 18.6 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- Blood cultures pending

### Assessment
Primary Diagnosis: Sepsis due to MRSA (ICD-10: A41.02)

Differential Diagnoses:
- Endocarditis

### Plan
1. Start vancomycin
2. Obtain TTE`},{id:"Infectious Disease-10",description:"47yo f c/o routine follow-up reports adherence to ...",input:"47yo f c/o routine follow-up reports adherence to art; no opportunistic infections pmh hiv on bictegravir/emtricitabine/tenofovir daily vs bp 148/92 hr 72 t 374 rr 20 spo2 98 pe general: well-appearing labs cd4 480cells/µl viral load <50copies/ml imaging none dx hiv disease",output:`### Subjective
47-year-old female with routine follow-up. Reports adherence to ART; no opportunistic infections. ROS: No weight loss.
Past Medical History: HIV
Medications: Bictegravir/emtricitabine/tenofovir daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: well-appearing

Laboratory Results:
- CD4: 480 cells/µL (Ref: >500)
- Viral load: <50 copies/mL (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: HIV disease (ICD-10: B20)

Differential Diagnoses:
- ART side effects

### Plan
1. Continue ART
2. Repeat labs in 6 months`}]},{name:"Internal Medicine",cases:[{id:"Internal Medicine-1",description:"22yo m c/o elevated blood sugars and fatigue repor...",input:"22yo m c/o elevated blood sugars and fatigue reports 3 months of polyuria, polydipsia, and fatigue. diet inconsistent and missed medications. pmh hypertension, hyperlipidemia on metformin 1000 mg bid, lisinopril 10 mg daily vs bp 118/76 hr 88 t 38.1 rr 20 spo2 97 pe general: alert no acute distress, cardiac: regular rhythm, no murmur, extremities: no edema, intact pulses labs a1c 9.6%, glucose 268mg/dl imaging none dx type 2 diabetes mellitus, uncontrolled",output:`### Subjective
22-year-old male with elevated blood sugars and fatigue. Reports 3 months of polyuria, polydipsia, and fatigue. Diet inconsistent and missed medications. ROS: Denies chest pain or dyspnea. Notes blurry vision at times.
Past Medical History: Hypertension, Hyperlipidemia
Medications: Metformin 1000 mg BID, Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- General: alert, no acute distress
- Cardiac: regular rhythm, no murmur
- Extremities: no edema, intact pulses

Laboratory Results:
- A1c: 9.6 % (Ref: 4.0-5.6)
- Glucose: 268 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Type 2 Diabetes Mellitus, uncontrolled (ICD-10: E11.9)

Differential Diagnoses:
- Medication nonadherence
- Cushing syndrome

### Plan
1. Reinforce diet and exercise counseling
2. Increase metformin to 1000 mg BID and add basal insulin glargine 10 units nightly
3. Repeat A1c in 3 months`},{id:"Internal Medicine-2",description:"23yo m c/o progressive shortness of breath and leg...",input:"23yo m c/o progressive shortness of breath and leg swelling worsening dyspnea on exertion for 1 week w/ orthopnea and 2+ leg edema. pmh chf, cad on furosemid 40 mg daily, metoprolol succinate 50 mg daily vs bp 130/84 hr 88 t 36.7 rr 18 spo2 98 pe lungs: bibasilar crackles, cardiac: s3 present, extremities: 2+ pitting edema labs bnp 980pg/ml, creatinine 1.6mg/dl imaging cxr shows pulmonary vascular congestion dx acute decompensated heart failure",output:`### Subjective
23-year-old male with progressive shortness of breath and leg swelling. Worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. ROS: No fever or chest pain. Notes weight gain.
Past Medical History: CHF, CAD
Medications: Furosemide 40 mg daily, Metoprolol succinate 50 mg daily
Allergies: Penicillin (rash)

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Lungs: bibasilar crackles
- Cardiac: S3 present
- Extremities: 2+ pitting edema

Laboratory Results:
- BNP: 980 pg/mL (Ref: <100)
- Creatinine: 1.6 mg/dL (Ref: 0.6-1.2)

Imaging/Diagnostics:
- CXR shows pulmonary vascular congestion

### Assessment
Primary Diagnosis: Acute decompensated heart failure (ICD-10: I50.9)

Differential Diagnoses:
- Pneumonia
- Pulmonary embolism

### Plan
1. IV furosemide 40 mg now, then 20 mg IV BID
2. Daily weights and strict I/O
3. Low-sodium diet`},{id:"Internal Medicine-3",description:"68yo f c/o fatigue and abnormal labs found on rout...",input:"68yo f c/o fatigue and abnormal labs found on routine labs to have elevated creatinin and potassium; mild fatigue. pmh ckd, diabetes on losartan 50 mg daily vs bp 136/86 hr 88 t 36.7 rr 20 spo2 95 pe general: no acute distress, cardiac regular rhythm, lungs: clear labs creatinine 2.0mg/dl, potassium 5.8mmol/l imaging renal ultrasound: small echogenic kidneys dx chronic kidney disease stage 3 with hyperkalemia",output:`### Subjective
68-year-old female with fatigue and abnormal labs. Found on routine labs to have elevated creatinine and potassium; mild fatigue. ROS: Denies chest pain, palpitations, or weakness.
Past Medical History: CKD, Diabetes
Medications: Losartan 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- General: no acute distress
- Cardiac: regular rhythm
- Lungs: clear

Laboratory Results:
- Creatinine: 2.0 mg/dL (Ref: 0.6-1.2)
- Potassium: 5.8 mmol/L (Ref: 3.5-5.1)

Imaging/Diagnostics:
- Renal ultrasound: small echogenic kidneys

### Assessment
Primary Diagnosis: Chronic kidney disease stage 3 with hyperkalemia (ICD-10: N18.30)

Differential Diagnoses:
- AKI
- Medication effect

### Plan
1. Low potassium diet counseling
2. Hold losartan and recheck BMP in 48 hours
3. Nephrology follow-up`},{id:"Internal Medicine-4",description:"38yo f c/o elevated blood sugars and fatigue repor...",input:"38yo f c/o elevated blood sugars and fatigue reports 3 months of polyuria, polydipsia, and fatigue. diet inconsistent and missed medications. pmh hypertension, hyperlipidemia on metformin 1000 mg bid, lisinopril 10 mg daily vs bp 136/86 hr 88 t 38.1 rr 16 spo2 95 pe general: alert, no acute distress, cardiac: regular rhythm, no murmur, extremities: no edema, intact pulses labs a1c 9.6%, glucose 268mg/dl imaging none dx type 2 diabete mellitus, uncontrolled",output:`### Subjective
38-year-old female with elevated blood sugars and fatigue. Reports 3 months of polyuria, polydipsia, and fatigue. Diet inconsistent and missed medications. ROS: Denies chest pain or dyspnea. Notes blurry vision at times.
Past Medical History: Hypertension, Hyperlipidemia
Medications: Metformin 1000 mg BID, Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- General: alert, no acute distress
- Cardiac: regular rhythm, no murmur
- Extremities: no edema, intact pulses

Laboratory Results:
- A1c: 9.6 % (Ref: 4.0-5.6)
- Glucose: 268 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Type 2 Diabetes Mellitus, uncontrolled (ICD-10: E11.9)

Differential Diagnoses:
- Medication nonadherence
- Cushing syndrome

### Plan
1. Reinforce diet and exercise counseling
2. Increase metformin to 1000 mg BID and add basal insulin glargine 10 units nightly
3. Repeat A1c in 3 months`},{id:"Internal Medicine-5",description:"72yo m c/o progressive SOB and leg swelling worsen...",input:"72yo m c/o progressive SOB and leg swelling worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. pmh chf, cad on furosemide 40 mg daily, metoprolol succinate 50 mg daily vs bp 136/86 hr 110 t 38.1 rr 20 spo2 98 pe lungs: bibasilar crackles, cardiac: s3 present, extremities: 2+ pitting edem labs bnp 980pg/ml, creatinine 1.6mg/dl imaging cxr shows pulmonary vascular congestion dx acute decompensated heart failure",output:`### Subjective
72-year-old male with progressive shortness of breath and leg swelling. Worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. ROS: No fever or chest pain. Notes weight gain.
Past Medical History: CHF, CAD
Medications: Furosemide 40 mg daily, Metoprolol succinate 50 mg daily
Allergies: Penicillin (rash)

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Lungs: bibasilar crackles
- Cardiac: S3 present
- Extremities: 2+ pitting edema

Laboratory Results:
- BNP: 980 pg/mL (Ref: <100)
- Creatinine: 1.6 mg/dL (Ref: 0.6-1.2)

Imaging/Diagnostics:
- CXR shows pulmonary vascular congestion

### Assessment
Primary Diagnosis: Acute decompensated heart failure (ICD-10: I50.9)

Differential Diagnoses:
- Pneumonia
- Pulmonary embolism

### Plan
1. IV furosemide 40 mg now, then 20 mg IV BID
2. Daily weights and strict I/O
3. Low-sodium diet`},{id:"Internal Medicine-6",description:"77yo m c/o fatigue and abnormal labs found on rout...",input:"77yo m c/o fatigue and abnormal labs found on routine labs to have elevated creatinine and potassium; mild fatigue. pmh ckd, diabetes on losartan 50 mg daily vs bp 118/76 hr 110 t 38.1 rr 18 spo2 97 pe general: no acute distress, cardiac: regular rhythm, lungs: clear labs creatinine 2.0mg/dl, potassium 5.8mmol/l imaging renal ultrasound: small echogenic kidney dx chronic kidney disease stage 3 with hyperkalemia",output:`### Subjective
77-year-old male with fatigue and abnormal labs. Found on routine labs to have elevated creatinine and potassium; mild fatigue. ROS: Denies chest pain, palpitations, or weakness.
Past Medical History: CKD, Diabetes
Medications: Losartan 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- General: no acute distress
- Cardiac: regular rhythm
- Lungs: clear

Laboratory Results:
- Creatinine: 2.0 mg/dL (Ref: 0.6-1.2)
- Potassium: 5.8 mmol/L (Ref: 3.5-5.1)

Imaging/Diagnostics:
- Renal ultrasound: small echogenic kidneys

### Assessment
Primary Diagnosis: Chronic kidney disease stage 3 with hyperkalemia (ICD-10: N18.30)

Differential Diagnoses:
- AKI
- Medication effect

### Plan
1. Low potassium diet counseling
2. Hold losartan and recheck BMP in 48 hours
3. Nephrology follow-up`},{id:"Internal Medicine-7",description:"80yo m c/o elevated blood sugars and fatigue repor...",input:"80yo m c/o elevated blood sugars and fatigue reports 3 months of polyuria, polydipsia, and fatigue. diet inconsistent and missed medications. pmh hypertension, hyperlipidemia on metformin 1000 mg bid, lisinopril 10 mg daily vs bp 136/86 hr 88 t 36.7 rr 20 spo2 95 pe general: alert, no acute distress, cardiac regular rhythm, no murmur, extremities: no edema, intact pulses labs a1c 9.6%, glucose 268mg/dl imaging none dx type 2 diabetes mellitus, uncontrolled",output:`### Subjective
80-year-old male with elevated blood sugars and fatigue. Reports 3 months of polyuria, polydipsia, and fatigue. Diet inconsistent and missed medications. ROS: Denies chest pain or dyspnea. Notes blurry vision at times.
Past Medical History: Hypertension, Hyperlipidemia
Medications: Metformin 1000 mg BID, Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- General: alert, no acute distress
- Cardiac: regular rhythm, no murmur
- Extremities: no edema, intact pulses

Laboratory Results:
- A1c: 9.6 % (Ref: 4.0-5.6)
- Glucose: 268 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Type 2 Diabetes Mellitus, uncontrolled (ICD-10: E11.9)

Differential Diagnoses:
- Medication nonadherence
- Cushing syndrome

### Plan
1. Reinforce diet and exercise counseling
2. Increase metformin to 1000 mg BID and add basal insulin glargine 10 units nightly
3. Repeat A1c in 3 months`},{id:"Internal Medicine-8",description:"56yo f c/o progressive shortness of breath and leg...",input:"56yo f c/o progressive shortness of breath and leg swelling worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. pmh chf, cad on furosemide 40 mg daily, metoprolol succinate 50 mg daily vs bp 130/84 hr 72 t 37.4 rr 20 spo2 95 pe lungs: bibasilar crackles, cardiac: s3 present, extremities: 2+ pitting edema labs bnp 980pg/ml, creatinine 1.6mg/dl imaging cxr shows pulmonary vascular congestion dx acute decompensated heart failure",output:`### Subjective
56-year-old female with progressive shortness of breath and leg swelling. Worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. ROS: No fever or chest pain. Notes weight gain.
Past Medical History: CHF, CAD
Medications: Furosemide 40 mg daily, Metoprolol succinate 50 mg daily
Allergies: Penicillin (rash)

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Lungs: bibasilar crackles
- Cardiac: S3 present
- Extremities: 2+ pitting edema

Laboratory Results:
- BNP: 980 pg/mL (Ref: <100)
- Creatinine: 1.6 mg/dL (Ref: 0.6-1.2)

Imaging/Diagnostics:
- CXR shows pulmonary vascular congestion

### Assessment
Primary Diagnosis: Acute decompensated heart failure (ICD-10: I50.9)

Differential Diagnoses:
- Pneumonia
- Pulmonary embolism

### Plan
1. IV furosemide 40 mg now, then 20 mg IV BID
2. Daily weights and strict I/O
3. Low-sodium diet`},{id:"Internal Medicine-9",description:"51yo f c/o fatigue and abnormal labs found on rout...",input:"51yo f c/o fatigue and abnormal labs found on routine labs to have elevated creatinine and potassium; mild fatigue. pmh ckd, diabetes on losartan 50 mg daily vs bp 130/84 hr 72 t 38.1 rr 18 spo2 98 pe general: no acute distress, cardiac: regular rhythm, lungs: clear labs creatinine 2.0mg/dl, potassium 5.8mmol/ imaging renal ultrasound: small echogenic kidneys dx chronic kidney disease stage 3 w/ hyperkalemia",output:`### Subjective
51-year-old female with fatigue and abnormal labs. Found on routine labs to have elevated creatinine and potassium; mild fatigue. ROS: Denies chest pain, palpitations, or weakness.
Past Medical History: CKD, Diabetes
Medications: Losartan 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: no acute distress
- Cardiac: regular rhythm
- Lungs: clear

Laboratory Results:
- Creatinine: 2.0 mg/dL (Ref: 0.6-1.2)
- Potassium: 5.8 mmol/L (Ref: 3.5-5.1)

Imaging/Diagnostics:
- Renal ultrasound: small echogenic kidneys

### Assessment
Primary Diagnosis: Chronic kidney disease stage 3 with hyperkalemia (ICD-10: N18.30)

Differential Diagnoses:
- AKI
- Medication effect

### Plan
1. Low potassium diet counseling
2. Hold losartan and recheck BMP in 48 hours
3. Nephrology follow-up`},{id:"Internal Medicine-10",description:"48yo m c/o elevate blood sugars and fatigue report...",input:"48yo m c/o elevate blood sugars and fatigue reports 3 months of polyuria, polydipsia, and fatigue. diet inconsistent and missed medications. pmh hypertension, hyperlipidemia on metformin 1000 mg bid, lisinopril 10 mg daily vs bp 136/86 hr 72 t 36.7 rr 20 spo2 98 pe general: alert, no acute distress, cardiac: regular rhythm, no murmur, extremities: no edema, intact pulses labs a1c 9.6%, glucose 268mg/dl imaging none dx type 2 diabetes mellitus, uncontrolled",output:`### Subjective
48-year-old male with elevated blood sugars and fatigue. Reports 3 months of polyuria, polydipsia, and fatigue. Diet inconsistent and missed medications. ROS: Denies chest pain or dyspnea. Notes blurry vision at times.
Past Medical History: Hypertension, Hyperlipidemia
Medications: Metformin 1000 mg BID, Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: alert, no acute distress
- Cardiac: regular rhythm, no murmur
- Extremities: no edema, intact pulses

Laboratory Results:
- A1c: 9.6 % (Ref: 4.0-5.6)
- Glucose: 268 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Type 2 Diabetes Mellitus, uncontrolled (ICD-10: E11.9)

Differential Diagnoses:
- Medication nonadherence
- Cushing syndrome

### Plan
1. Reinforce diet and exercise counseling
2. Increase metformin to 1000 mg BID and add basal insulin glargine 10 units nightly
3. Repeat A1c in 3 months`},{id:"Internal Medicine-11",description:"51yo m c/o progressive SOB and leg swelling worsen...",input:"51yo m c/o progressive SOB and leg swelling worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. pmh chf, cad on furosemide 40 mg daily, metoprolol succinate 50 mg daily vs bp 130/84 hr 72 t 38.1 rr 18 spo2 98 pe lungs: bibasilar crackles, cardiac: s3 present, extremities: 2+ pitting edema labs bnp 980pg/ml, creatinine 1.6mg/dl imaging cxr shows pulmonary vascular congestion dx acute decompensated hear failure",output:`### Subjective
51-year-old male with progressive shortness of breath and leg swelling. Worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. ROS: No fever or chest pain. Notes weight gain.
Past Medical History: CHF, CAD
Medications: Furosemide 40 mg daily, Metoprolol succinate 50 mg daily
Allergies: Penicillin (rash)

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Lungs: bibasilar crackles
- Cardiac: S3 present
- Extremities: 2+ pitting edema

Laboratory Results:
- BNP: 980 pg/mL (Ref: <100)
- Creatinine: 1.6 mg/dL (Ref: 0.6-1.2)

Imaging/Diagnostics:
- CXR shows pulmonary vascular congestion

### Assessment
Primary Diagnosis: Acute decompensated heart failure (ICD-10: I50.9)

Differential Diagnoses:
- Pneumonia
- Pulmonary embolism

### Plan
1. IV furosemide 40 mg now, then 20 mg IV BID
2. Daily weights and strict I/O
3. Low-sodium diet`},{id:"Internal Medicine-12",description:"71yo f c/o fatigue and abnormal labs found on rout...",input:"71yo f c/o fatigue and abnormal labs found on routine labs to have elevated creatinine and potassium; mild fatigue. pmh ckd, diabetes on losartan 50 mg daily vs bp 136/86 hr 110 t 38.1 rr 16 spo2 98 pe general: no acute distress, cardiac: regular rhythm, lungs: clear labs creatinine 2.0mg/dl, potassium 5.8mmol/l imagin renal ultrasound: small echogenic kidneys dx chronic kidney disease stage 3 with hyperkalemia",output:`### Subjective
71-year-old female with fatigue and abnormal labs. Found on routine labs to have elevated creatinine and potassium; mild fatigue. ROS: Denies chest pain, palpitations, or weakness.
Past Medical History: CKD, Diabetes
Medications: Losartan 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: no acute distress
- Cardiac: regular rhythm
- Lungs: clear

Laboratory Results:
- Creatinine: 2.0 mg/dL (Ref: 0.6-1.2)
- Potassium: 5.8 mmol/L (Ref: 3.5-5.1)

Imaging/Diagnostics:
- Renal ultrasound: small echogenic kidneys

### Assessment
Primary Diagnosis: Chronic kidney disease stage 3 with hyperkalemia (ICD-10: N18.30)

Differential Diagnoses:
- AKI
- Medication effect

### Plan
1. Low potassium diet counseling
2. Hold losartan and recheck BMP in 48 hours
3. Nephrology follow-up`},{id:"Internal Medicine-13",description:"67yo f c/o elevated blood sugars and fatigue repor...",input:"67yo f c/o elevated blood sugars and fatigue reports 3 months of polyuria, polydipsia, and fatigue. diet inconsistent and missed medications. pmh hypertension, hyperlipidemia on metformin 1000 mg bid, lisinopril 10 mg daily vs bp 130/84 hr 88 t 38.1 rr 20 spo2 97 pe general: alert, no acute distress, cardiac: regular rhythm, no murmur, extremities: no edema intact pulses labs a1c 9.6%, glucose 268mg/dl imaging none dx type 2 diabetes mellitus, uncontrolled",output:`### Subjective
67-year-old female with elevated blood sugars and fatigue. Reports 3 months of polyuria, polydipsia, and fatigue. Diet inconsistent and missed medications. ROS: Denies chest pain or dyspnea. Notes blurry vision at times.
Past Medical History: Hypertension, Hyperlipidemia
Medications: Metformin 1000 mg BID, Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- General: alert, no acute distress
- Cardiac: regular rhythm, no murmur
- Extremities: no edema, intact pulses

Laboratory Results:
- A1c: 9.6 % (Ref: 4.0-5.6)
- Glucose: 268 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Type 2 Diabetes Mellitus, uncontrolled (ICD-10: E11.9)

Differential Diagnoses:
- Medication nonadherence
- Cushing syndrome

### Plan
1. Reinforce diet and exercise counseling
2. Increase metformin to 1000 mg BID and add basal insulin glargine 10 units nightly
3. Repeat A1c in 3 months`},{id:"Internal Medicine-14",description:"53yo f c/o progressive SOB and leg swelling worsen...",input:"53yo f c/o progressive SOB and leg swelling worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. pmh chf, cad on furosemide 40 mg daily, metoprolol succinate 50 mg daily vs bp 136/86 hr 110 t 36.7 rr 20 spo2 98 pe lungs: bibasilar crackles, cardiac: s3 present, extremities: 2+ pitting edema labs bnp 980pg/ml, creatinine 1.6mg/dl imaging cxr shows pulmonary vascular congestion dx acut decompensate heart failure",output:`### Subjective
53-year-old female with progressive shortness of breath and leg swelling. Worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. ROS: No fever or chest pain. Notes weight gain.
Past Medical History: CHF, CAD
Medications: Furosemide 40 mg daily, Metoprolol succinate 50 mg daily
Allergies: Penicillin (rash)

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Lungs: bibasilar crackles
- Cardiac: S3 present
- Extremities: 2+ pitting edema

Laboratory Results:
- BNP: 980 pg/mL (Ref: <100)
- Creatinine: 1.6 mg/dL (Ref: 0.6-1.2)

Imaging/Diagnostics:
- CXR shows pulmonary vascular congestion

### Assessment
Primary Diagnosis: Acute decompensated heart failure (ICD-10: I50.9)

Differential Diagnoses:
- Pneumonia
- Pulmonary embolism

### Plan
1. IV furosemide 40 mg now, then 20 mg IV BID
2. Daily weights and strict I/O
3. Low-sodium diet`},{id:"Internal Medicine-15",description:"46yo f c/o fatigue and abnormal labs found on rout...",input:"46yo f c/o fatigue and abnormal labs found on routine labs to have elevated creatinine and potassium; mild fatigue. pmh ckd, diabetes on losartan 50 mg daily vs bp 136/86 hr 110 t 37.4 rr 16 spo2 98 pe general: no acute distress, cardiac: regula rhythm, lungs: clear labs creatinine 2.0mg/dl, potassium 5.8mmol/l imaging renal ultrasound: small echogenic kidneys dx chronic kidney disease stage 3 w/ hyperkalemia",output:`### Subjective
46-year-old female with fatigue and abnormal labs. Found on routine labs to have elevated creatinine and potassium; mild fatigue. ROS: Denies chest pain, palpitations, or weakness.
Past Medical History: CKD, Diabetes
Medications: Losartan 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: no acute distress
- Cardiac: regular rhythm
- Lungs: clear

Laboratory Results:
- Creatinine: 2.0 mg/dL (Ref: 0.6-1.2)
- Potassium: 5.8 mmol/L (Ref: 3.5-5.1)

Imaging/Diagnostics:
- Renal ultrasound: small echogenic kidneys

### Assessment
Primary Diagnosis: Chronic kidney disease stage 3 with hyperkalemia (ICD-10: N18.30)

Differential Diagnoses:
- AKI
- Medication effect

### Plan
1. Low potassium diet counseling
2. Hold losartan and recheck BMP in 48 hours
3. Nephrology follow-up`},{id:"Internal Medicine-16",description:"26yo m c/o elevated blood sugars and fatigue repor...",input:"26yo m c/o elevated blood sugars and fatigue reports 3 months of polyuria, polydipsia, and fatigue diet inconsistent and missed medications. pmh hypertension, hyperlipidemia on metformin 1000 mg bid, lisinopril 10 mg daily vs bp 118/76 hr 88 t 36.7 rr 20 spo2 97 pe general: alert, no acute distress, cardiac: regular rhythm, no murmur, extremities: no edema, intact pulses labs a1c 9.6%, glucose 268mg/dl imaging none dx type 2 diabetes mellitus, uncontrolle",output:`### Subjective
26-year-old male with elevated blood sugars and fatigue. Reports 3 months of polyuria, polydipsia, and fatigue. Diet inconsistent and missed medications. ROS: Denies chest pain or dyspnea. Notes blurry vision at times.
Past Medical History: Hypertension, Hyperlipidemia
Medications: Metformin 1000 mg BID, Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- General: alert, no acute distress
- Cardiac: regular rhythm, no murmur
- Extremities: no edema, intact pulses

Laboratory Results:
- A1c: 9.6 % (Ref: 4.0-5.6)
- Glucose: 268 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Type 2 Diabetes Mellitus, uncontrolled (ICD-10: E11.9)

Differential Diagnoses:
- Medication nonadherence
- Cushing syndrome

### Plan
1. Reinforce diet and exercise counseling
2. Increase metformin to 1000 mg BID and add basal insulin glargine 10 units nightly
3. Repeat A1c in 3 months`},{id:"Internal Medicine-17",description:"62yo f c/o progressive shortness of breath and leg...",input:"62yo f c/o progressive shortness of breath and leg swelling worsening dyspnea on exertion for 1 week w/ orthopnea and 2+ leg edema. pmh chf, cad on furosemide 40 mg daily, metoprolol succinate 50 mg daily vs bp 130/84 hr 96 t 36.7 rr 18 spo2 98 pe lungs: bibasilar crackles, cardiac: s3 present, extremities: 2+ pitting edema labs bnp 980pg/ml, creatinine 1.6mg/d imaging cxr shows pulmonary vascular congestion dx acute decompensated heart failure",output:`### Subjective
62-year-old female with progressive shortness of breath and leg swelling. Worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. ROS: No fever or chest pain. Notes weight gain.
Past Medical History: CHF, CAD
Medications: Furosemide 40 mg daily, Metoprolol succinate 50 mg daily
Allergies: Penicillin (rash)

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Lungs: bibasilar crackles
- Cardiac: S3 present
- Extremities: 2+ pitting edema

Laboratory Results:
- BNP: 980 pg/mL (Ref: <100)
- Creatinine: 1.6 mg/dL (Ref: 0.6-1.2)

Imaging/Diagnostics:
- CXR shows pulmonary vascular congestion

### Assessment
Primary Diagnosis: Acute decompensated heart failure (ICD-10: I50.9)

Differential Diagnoses:
- Pneumonia
- Pulmonary embolism

### Plan
1. IV furosemide 40 mg now, then 20 mg IV BID
2. Daily weights and strict I/O
3. Low-sodium diet`},{id:"Internal Medicine-18",description:"51yo f c/o fatigue and abnormal labs found on rout...",input:"51yo f c/o fatigue and abnormal labs found on routine labs to have elevated creatinine and potassium; mild fatigue. pmh ckd, diabetes on losarta 50 mg daily vs bp 148/92 hr 72 t 38.1 rr 16 spo2 97 pe general: no acute distress, cardiac: regular rhythm, lungs: clear labs creatinine 2.0mg/dl, potassium 5.8mmol/l imaging renal ultrasound: small echogenic kidneys dx chronic kidney disease stage 3 w/ hyperkalemia",output:`### Subjective
51-year-old female with fatigue and abnormal labs. Found on routine labs to have elevated creatinine and potassium; mild fatigue. ROS: Denies chest pain, palpitations, or weakness.
Past Medical History: CKD, Diabetes
Medications: Losartan 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- General: no acute distress
- Cardiac: regular rhythm
- Lungs: clear

Laboratory Results:
- Creatinine: 2.0 mg/dL (Ref: 0.6-1.2)
- Potassium: 5.8 mmol/L (Ref: 3.5-5.1)

Imaging/Diagnostics:
- Renal ultrasound: small echogenic kidneys

### Assessment
Primary Diagnosis: Chronic kidney disease stage 3 with hyperkalemia (ICD-10: N18.30)

Differential Diagnoses:
- AKI
- Medication effect

### Plan
1. Low potassium diet counseling
2. Hold losartan and recheck BMP in 48 hours
3. Nephrology follow-up`},{id:"Internal Medicine-19",description:"79yo f c/o elevated blood sugars and fatigue repor...",input:"79yo f c/o elevated blood sugars and fatigue reports 3 month of polyuria, polydipsia, and fatigue. diet inconsistent and missed medications. pmh hypertension, hyperlipidemia on metformin 1000 mg bid, lisinopril 10 mg daily vs bp 130/84 hr 88 t 37.4 rr 16 spo2 98 pe general: alert, no acute distress, cardiac: regular rhythm, no murmur, extremities: no edema, intact pulses labs a1c 9.6%, glucose 268mg/dl imaging none dx type 2 diabetes mellitus, uncontrolled",output:`### Subjective
79-year-old female with elevated blood sugars and fatigue. Reports 3 months of polyuria, polydipsia, and fatigue. Diet inconsistent and missed medications. ROS: Denies chest pain or dyspnea. Notes blurry vision at times.
Past Medical History: Hypertension, Hyperlipidemia
Medications: Metformin 1000 mg BID, Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: alert, no acute distress
- Cardiac: regular rhythm, no murmur
- Extremities: no edema, intact pulses

Laboratory Results:
- A1c: 9.6 % (Ref: 4.0-5.6)
- Glucose: 268 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Type 2 Diabetes Mellitus, uncontrolled (ICD-10: E11.9)

Differential Diagnoses:
- Medication nonadherence
- Cushing syndrome

### Plan
1. Reinforce diet and exercise counseling
2. Increase metformin to 1000 mg BID and add basal insulin glargine 10 units nightly
3. Repeat A1c in 3 months`},{id:"Internal Medicine-20",description:"33yo f c/o progressive shortness of breath and leg...",input:"33yo f c/o progressive shortness of breath and leg swelling worsening dyspnea on exertion for 1 week w/ orthopnea and 2+ leg edema. pmh chf, cad on furosemide 40 mg daily, metoprolol succinate 50 mg daily vs bp 136/86 hr 110 t 37.4 rr 18 spo2 95 pe lungs: bibasilar crackles, cardiac: s3 present, extremities 2+ pitting edema labs bnp 980pg/ml, creatinine 1.6mg/dl imaging cxr shows pulmonary vascular congestion dx acute decompensated heart failure",output:`### Subjective
33-year-old female with progressive shortness of breath and leg swelling. Worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. ROS: No fever or chest pain. Notes weight gain.
Past Medical History: CHF, CAD
Medications: Furosemide 40 mg daily, Metoprolol succinate 50 mg daily
Allergies: Penicillin (rash)

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Lungs: bibasilar crackles
- Cardiac: S3 present
- Extremities: 2+ pitting edema

Laboratory Results:
- BNP: 980 pg/mL (Ref: <100)
- Creatinine: 1.6 mg/dL (Ref: 0.6-1.2)

Imaging/Diagnostics:
- CXR shows pulmonary vascular congestion

### Assessment
Primary Diagnosis: Acute decompensated heart failure (ICD-10: I50.9)

Differential Diagnoses:
- Pneumonia
- Pulmonary embolism

### Plan
1. IV furosemide 40 mg now, then 20 mg IV BID
2. Daily weights and strict I/O
3. Low-sodium diet`},{id:"Internal Medicine-21",description:"46yo m c/o fatigue and abnormal labs found on rout...",input:"46yo m c/o fatigue and abnormal labs found on routine labs to have elevated creatinine and potassium; mild fatigue. pmh ckd, diabetes on losartan 50 mg daily vs bp 130/84 hr 72 t 36.7 rr 16 spo2 98 pe general: no acute distress, cardiac: regular rhythm, lungs: clear labs creatinine 2.0mg/dl, potassium 5.8mmol/l imaging renal ultrasound: smal echogenic kidneys dx chronic kidney disease stage 3 with hyperkalemi",output:`### Subjective
46-year-old male with fatigue and abnormal labs. Found on routine labs to have elevated creatinine and potassium; mild fatigue. ROS: Denies chest pain, palpitations, or weakness.
Past Medical History: CKD, Diabetes
Medications: Losartan 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: no acute distress
- Cardiac: regular rhythm
- Lungs: clear

Laboratory Results:
- Creatinine: 2.0 mg/dL (Ref: 0.6-1.2)
- Potassium: 5.8 mmol/L (Ref: 3.5-5.1)

Imaging/Diagnostics:
- Renal ultrasound: small echogenic kidneys

### Assessment
Primary Diagnosis: Chronic kidney disease stage 3 with hyperkalemia (ICD-10: N18.30)

Differential Diagnoses:
- AKI
- Medication effect

### Plan
1. Low potassium diet counseling
2. Hold losartan and recheck BMP in 48 hours
3. Nephrology follow-up`},{id:"Internal Medicine-22",description:"41yo f c/o elevated blood sugars and fatigue repor...",input:"41yo f c/o elevated blood sugars and fatigue reports 3 months of polyuria, polydipsia, and fatigue. diet inconsistent and missed medications. pmh hypertension, hyperlipidemia on metformin 1000 mg bid, lisinopril 10 mg daily vs bp 130/84 hr 110 t 37.4 rr 18 spo2 98 pe general: alert, no acute distress, cardiac: regular rhythm, no murmur, extremities: no edema, intact pulses labs a1c 9.6%, glucose 268mg/dl imaging none dx type 2 diabetes mellitus, uncontrolled",output:`### Subjective
41-year-old female with elevated blood sugars and fatigue. Reports 3 months of polyuria, polydipsia, and fatigue. Diet inconsistent and missed medications. ROS: Denies chest pain or dyspnea. Notes blurry vision at times.
Past Medical History: Hypertension, Hyperlipidemia
Medications: Metformin 1000 mg BID, Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: alert, no acute distress
- Cardiac: regular rhythm, no murmur
- Extremities: no edema, intact pulses

Laboratory Results:
- A1c: 9.6 % (Ref: 4.0-5.6)
- Glucose: 268 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Type 2 Diabetes Mellitus, uncontrolled (ICD-10: E11.9)

Differential Diagnoses:
- Medication nonadherence
- Cushing syndrome

### Plan
1. Reinforce diet and exercise counseling
2. Increase metformin to 1000 mg BID and add basal insulin glargine 10 units nightly
3. Repeat A1c in 3 months`},{id:"Internal Medicine-23",description:"80yo m c/o progressive shortness of breath and leg...",input:"80yo m c/o progressive shortness of breath and leg swelling worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. pmh chf, cad on furosemide 40 mg daily, metoprolol succinate 50 mg daily vs bp 118/76 hr 88 t 37.4 rr 20 spo2 97 pe lungs: bibasilar crackles, cardiac: s3 present, extremities: 2+ pitting edema labs bnp 980pg/ml, creatinine 1.6mg/dl imaging cxr shows pulmonary vascular congestion dx acute decompensated heart failure",output:`### Subjective
80-year-old male with progressive shortness of breath and leg swelling. Worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. ROS: No fever or chest pain. Notes weight gain.
Past Medical History: CHF, CAD
Medications: Furosemide 40 mg daily, Metoprolol succinate 50 mg daily
Allergies: Penicillin (rash)

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Lungs: bibasilar crackles
- Cardiac: S3 present
- Extremities: 2+ pitting edema

Laboratory Results:
- BNP: 980 pg/mL (Ref: <100)
- Creatinine: 1.6 mg/dL (Ref: 0.6-1.2)

Imaging/Diagnostics:
- CXR shows pulmonary vascular congestion

### Assessment
Primary Diagnosis: Acute decompensated heart failure (ICD-10: I50.9)

Differential Diagnoses:
- Pneumonia
- Pulmonary embolism

### Plan
1. IV furosemide 40 mg now, then 20 mg IV BID
2. Daily weights and strict I/O
3. Low-sodium diet`},{id:"Internal Medicine-24",description:"80yo m c/o fatigue and abnormal labs found on rout...",input:"80yo m c/o fatigue and abnormal labs found on routine labs to have elevated creatinine and potassium; mild fatigue pmh ckd, diabetes on losartan 50 mg daily vs bp 148/92 hr 96 t 37.4 rr 20 spo2 95 pe general: no acute distress, cardiac: regular rhythm, lungs: clear labs creatinine 2.0mg/dl, potassium 5.8mmol/ imaging renal ultrasound: small echogenic kidneys dx chronic kidney disease stage 3 with hyperkalemia",output:`### Subjective
80-year-old male with fatigue and abnormal labs. Found on routine labs to have elevated creatinine and potassium; mild fatigue. ROS: Denies chest pain, palpitations, or weakness.
Past Medical History: CKD, Diabetes
Medications: Losartan 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- General: no acute distress
- Cardiac: regular rhythm
- Lungs: clear

Laboratory Results:
- Creatinine: 2.0 mg/dL (Ref: 0.6-1.2)
- Potassium: 5.8 mmol/L (Ref: 3.5-5.1)

Imaging/Diagnostics:
- Renal ultrasound: small echogenic kidneys

### Assessment
Primary Diagnosis: Chronic kidney disease stage 3 with hyperkalemia (ICD-10: N18.30)

Differential Diagnoses:
- AKI
- Medication effect

### Plan
1. Low potassium diet counseling
2. Hold losartan and recheck BMP in 48 hours
3. Nephrology follow-up`},{id:"Internal Medicine-25",description:"37yo m c/o elevated blood sugars and fatigue repor...",input:"37yo m c/o elevated blood sugars and fatigue reports 3 months of polyuria, polydipsia, and fatigue. diet inconsistent and missed medications. pmh hypertension, hyperlipidemia on metformin 1000 mg bid, lisinopril 10 mg daily vs bp 148/92 hr 96 t 38.1 rr 20 spo2 98 pe general: alert, no acute distress, cardiac: regular rhythm, no murmur, extremities no edema, intact pulses labs a1c 9.6%, glucose 268mg/dl imaging none dx type 2 diabetes mellitus, uncontrolled",output:`### Subjective
37-year-old male with elevated blood sugars and fatigue. Reports 3 months of polyuria, polydipsia, and fatigue. Diet inconsistent and missed medications. ROS: Denies chest pain or dyspnea. Notes blurry vision at times.
Past Medical History: Hypertension, Hyperlipidemia
Medications: Metformin 1000 mg BID, Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: alert, no acute distress
- Cardiac: regular rhythm, no murmur
- Extremities: no edema, intact pulses

Laboratory Results:
- A1c: 9.6 % (Ref: 4.0-5.6)
- Glucose: 268 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Type 2 Diabetes Mellitus, uncontrolled (ICD-10: E11.9)

Differential Diagnoses:
- Medication nonadherence
- Cushing syndrome

### Plan
1. Reinforce diet and exercise counseling
2. Increase metformin to 1000 mg BID and add basal insulin glargine 10 units nightly
3. Repeat A1c in 3 months`},{id:"Internal Medicine-26",description:"85yo f c/o progressive shortness of breath and leg...",input:"85yo f c/o progressive shortness of breath and leg swelling worsening dyspnea on exertion for 1 week w/ orthopnea and 2+ leg edema. pmh chf, cad on furosemide 40 mg daily, metoprolol succinate 50 mg daily vs bp 118/76 hr 88 t 36.7 rr 20 spo2 98 pe lungs: bibasilar crackles, cardiac: s3 present, extremities: 2+ pitting edema labs bnp 980pg/ml, creatinine 1.6mg/dl imaging cxr shows pulmonary vascular congestion dx acute decompensated heart failure",output:`### Subjective
85-year-old female with progressive shortness of breath and leg swelling. Worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. ROS: No fever or chest pain. Notes weight gain.
Past Medical History: CHF, CAD
Medications: Furosemide 40 mg daily, Metoprolol succinate 50 mg daily
Allergies: Penicillin (rash)

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Lungs: bibasilar crackles
- Cardiac: S3 present
- Extremities: 2+ pitting edema

Laboratory Results:
- BNP: 980 pg/mL (Ref: <100)
- Creatinine: 1.6 mg/dL (Ref: 0.6-1.2)

Imaging/Diagnostics:
- CXR shows pulmonary vascular congestion

### Assessment
Primary Diagnosis: Acute decompensated heart failure (ICD-10: I50.9)

Differential Diagnoses:
- Pneumonia
- Pulmonary embolism

### Plan
1. IV furosemide 40 mg now, then 20 mg IV BID
2. Daily weights and strict I/O
3. Low-sodium diet`},{id:"Internal Medicine-27",description:"68yo f c/o fatigue and abnormal labs found on rout...",input:"68yo f c/o fatigue and abnormal labs found on routine labs to have elevated creatinine and potassium; mild fatigue. pmh ckd, diabetes on losartan 50 mg daily vs bp 118/76 hr 110 t 37.4 rr 16 spo2 95 pe general: no acute distress, cardiac: regular rhythm, lungs: clear labs creatinine 2.0mg/dl, potassium 5.8mmol/l imaging renal ultrasound: small echogenic kidneys dx chronic kidne disease stage 3 w/ hyperkalemia",output:`### Subjective
68-year-old female with fatigue and abnormal labs. Found on routine labs to have elevated creatinine and potassium; mild fatigue. ROS: Denies chest pain, palpitations, or weakness.
Past Medical History: CKD, Diabetes
Medications: Losartan 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- General: no acute distress
- Cardiac: regular rhythm
- Lungs: clear

Laboratory Results:
- Creatinine: 2.0 mg/dL (Ref: 0.6-1.2)
- Potassium: 5.8 mmol/L (Ref: 3.5-5.1)

Imaging/Diagnostics:
- Renal ultrasound: small echogenic kidneys

### Assessment
Primary Diagnosis: Chronic kidney disease stage 3 with hyperkalemia (ICD-10: N18.30)

Differential Diagnoses:
- AKI
- Medication effect

### Plan
1. Low potassium diet counseling
2. Hold losartan and recheck BMP in 48 hours
3. Nephrology follow-up`},{id:"Internal Medicine-28",description:"61yo m c/o elevated blood sugars and fatigue repor...",input:"61yo m c/o elevated blood sugars and fatigue reports 3 months of polyuria, polydipsia, and fatigue. diet inconsisten and missed medications. pmh hypertension, hyperlipidemia on metformin 1000 mg bid, lisinopril 10 mg daily vs bp 130/84 hr 88 t 36.7 rr 20 spo2 95 pe general: alert, no acute distress, cardiac: regular rhythm, no murmur, extremities: no edema, intact pulses labs a1c 9.6%, glucose 268mg/dl imaging none dx type 2 diabetes mellitus, uncontrolled",output:`### Subjective
61-year-old male with elevated blood sugars and fatigue. Reports 3 months of polyuria, polydipsia, and fatigue. Diet inconsistent and missed medications. ROS: Denies chest pain or dyspnea. Notes blurry vision at times.
Past Medical History: Hypertension, Hyperlipidemia
Medications: Metformin 1000 mg BID, Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- General: alert, no acute distress
- Cardiac: regular rhythm, no murmur
- Extremities: no edema, intact pulses

Laboratory Results:
- A1c: 9.6 % (Ref: 4.0-5.6)
- Glucose: 268 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Type 2 Diabetes Mellitus, uncontrolled (ICD-10: E11.9)

Differential Diagnoses:
- Medication nonadherence
- Cushing syndrome

### Plan
1. Reinforce diet and exercise counseling
2. Increase metformin to 1000 mg BID and add basal insulin glargine 10 units nightly
3. Repeat A1c in 3 months`},{id:"Internal Medicine-29",description:"22yo f c/o progressive shortness of breath and leg...",input:"22yo f c/o progressive shortness of breath and leg swelling worsening dyspne on exertion for 1 week w/ orthopnea and 2+ leg edema. pmh chf, cad on furosemide 40 mg daily, metoprolol succinate 50 mg daily vs bp 130/84 hr 72 t 36.7 rr 20 spo2 97 pe lungs: bibasilar crackles, cardiac: s3 present, extremities: 2+ pitting edema labs bnp 980pg/ml, creatinine 1.6mg/dl imaging cxr shows pulmonary vascular congestion dx acute decompensated heart failure",output:`### Subjective
22-year-old female with progressive shortness of breath and leg swelling. Worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. ROS: No fever or chest pain. Notes weight gain.
Past Medical History: CHF, CAD
Medications: Furosemide 40 mg daily, Metoprolol succinate 50 mg daily
Allergies: Penicillin (rash)

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Lungs: bibasilar crackles
- Cardiac: S3 present
- Extremities: 2+ pitting edema

Laboratory Results:
- BNP: 980 pg/mL (Ref: <100)
- Creatinine: 1.6 mg/dL (Ref: 0.6-1.2)

Imaging/Diagnostics:
- CXR shows pulmonary vascular congestion

### Assessment
Primary Diagnosis: Acute decompensated heart failure (ICD-10: I50.9)

Differential Diagnoses:
- Pneumonia
- Pulmonary embolism

### Plan
1. IV furosemide 40 mg now, then 20 mg IV BID
2. Daily weights and strict I/O
3. Low-sodium diet`},{id:"Internal Medicine-30",description:"20yo m c/o fatigue and abnormal labs found on rout...",input:"20yo m c/o fatigue and abnormal labs found on routine labs to have elevated creatinine and potassium; mild fatigue. pmh ckd, diabetes on losartan 50 mg daily vs bp 130/84 hr 88 t 38.1 rr 16 spo2 97 pe general: no acute distress, cardiac: regular rhythm, lungs clear labs creatinine 2.0mg/dl, potassium 5.8mmol/l imaging renal ultrasound: small echogeni kidneys dx chronic kidney disease stage 3 with hyperkalemia",output:`### Subjective
20-year-old male with fatigue and abnormal labs. Found on routine labs to have elevated creatinine and potassium; mild fatigue. ROS: Denies chest pain, palpitations, or weakness.
Past Medical History: CKD, Diabetes
Medications: Losartan 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- General: no acute distress
- Cardiac: regular rhythm
- Lungs: clear

Laboratory Results:
- Creatinine: 2.0 mg/dL (Ref: 0.6-1.2)
- Potassium: 5.8 mmol/L (Ref: 3.5-5.1)

Imaging/Diagnostics:
- Renal ultrasound: small echogenic kidneys

### Assessment
Primary Diagnosis: Chronic kidney disease stage 3 with hyperkalemia (ICD-10: N18.30)

Differential Diagnoses:
- AKI
- Medication effect

### Plan
1. Low potassium diet counseling
2. Hold losartan and recheck BMP in 48 hours
3. Nephrology follow-up`},{id:"Internal Medicine-31",description:"31yo f c/o elevated blood sugars and fatigue repor...",input:"31yo f c/o elevated blood sugars and fatigue reports 3 months of polyuria, polydipsia, and fatigue. diet inconsistent and missed medications. pmh hypertension, hyperlipidemia on metformin 1000 mg bid, lisinopri 10 mg daily vs bp 118/76 hr 96 t 37.4 rr 20 spo2 97 pe general: alert, no acute distress, cardiac: regular rhythm, no murmur, extremities: no edema intact pulses labs a1c 9.6%, glucose 268mg/dl imaging none dx type 2 diabetes mellitus, uncontrolled",output:`### Subjective
31-year-old female with elevated blood sugars and fatigue. Reports 3 months of polyuria, polydipsia, and fatigue. Diet inconsistent and missed medications. ROS: Denies chest pain or dyspnea. Notes blurry vision at times.
Past Medical History: Hypertension, Hyperlipidemia
Medications: Metformin 1000 mg BID, Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- General: alert, no acute distress
- Cardiac: regular rhythm, no murmur
- Extremities: no edema, intact pulses

Laboratory Results:
- A1c: 9.6 % (Ref: 4.0-5.6)
- Glucose: 268 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Type 2 Diabetes Mellitus, uncontrolled (ICD-10: E11.9)

Differential Diagnoses:
- Medication nonadherence
- Cushing syndrome

### Plan
1. Reinforce diet and exercise counseling
2. Increase metformin to 1000 mg BID and add basal insulin glargine 10 units nightly
3. Repeat A1c in 3 months`},{id:"Internal Medicine-32",description:"76yo f c/o progressive SOB and leg swelling worsen...",input:"76yo f c/o progressive SOB and leg swelling worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. pmh chf, cad on furosemide 40 mg daily metoprolol succinate 50 mg daily vs bp 130/84 hr 96 t 37.4 rr 18 spo2 95 pe lungs: bibasilar crackles, cardiac: s3 present, extremities: 2+ pitting edema labs bnp 980pg/ml, creatinine 1.6mg/dl imagin cxr shows pulmonary vascular congestion dx acute decompensated heart failure",output:`### Subjective
76-year-old female with progressive shortness of breath and leg swelling. Worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. ROS: No fever or chest pain. Notes weight gain.
Past Medical History: CHF, CAD
Medications: Furosemide 40 mg daily, Metoprolol succinate 50 mg daily
Allergies: Penicillin (rash)

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Lungs: bibasilar crackles
- Cardiac: S3 present
- Extremities: 2+ pitting edema

Laboratory Results:
- BNP: 980 pg/mL (Ref: <100)
- Creatinine: 1.6 mg/dL (Ref: 0.6-1.2)

Imaging/Diagnostics:
- CXR shows pulmonary vascular congestion

### Assessment
Primary Diagnosis: Acute decompensated heart failure (ICD-10: I50.9)

Differential Diagnoses:
- Pneumonia
- Pulmonary embolism

### Plan
1. IV furosemide 40 mg now, then 20 mg IV BID
2. Daily weights and strict I/O
3. Low-sodium diet`},{id:"Internal Medicine-33",description:"62yo f c/o fatigue and abnormal labs found on rout...",input:"62yo f c/o fatigue and abnormal labs found on routine labs to have elevated creatinine and potassium; mild fatigue. pmh ckd, diabetes on losartan 50 mg daily vs bp 136/86 hr 88 t 37.4 rr 20 spo2 95 pe general: no acute distress, cardiac: regular rhythm, lungs: clear labs creatinine 2.0mg/dl, potassium 5.8mmol/l imaging renal ultrasound: small echogenic kidneys dx chronic kidney disease stage 3 with hyperkalemia",output:`### Subjective
62-year-old female with fatigue and abnormal labs. Found on routine labs to have elevated creatinine and potassium; mild fatigue. ROS: Denies chest pain, palpitations, or weakness.
Past Medical History: CKD, Diabetes
Medications: Losartan 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- General: no acute distress
- Cardiac: regular rhythm
- Lungs: clear

Laboratory Results:
- Creatinine: 2.0 mg/dL (Ref: 0.6-1.2)
- Potassium: 5.8 mmol/L (Ref: 3.5-5.1)

Imaging/Diagnostics:
- Renal ultrasound: small echogenic kidneys

### Assessment
Primary Diagnosis: Chronic kidney disease stage 3 with hyperkalemia (ICD-10: N18.30)

Differential Diagnoses:
- AKI
- Medication effect

### Plan
1. Low potassium diet counseling
2. Hold losartan and recheck BMP in 48 hours
3. Nephrology follow-up`},{id:"Internal Medicine-34",description:"24yo m c/o elevated blood sugars and fatigue repor...",input:"24yo m c/o elevated blood sugars and fatigue reports 3 months of polyuria, polydipsia, and fatigue. diet inconsistent and missed medications. pmh hypertension, hyperlipidemia on metformin 1000 mg bid, lisinopril 10 mg daily vs bp 148/92 hr 110 t 37.4 rr 20 spo2 98 pe general alert, no acute distress, cardiac: regular rhythm, no murmur, extremities: no edema, intact pulses labs a1c 9.6%, glucose 268mg/dl imaging none dx type 2 diabetes mellitus, uncontrolled",output:`### Subjective
24-year-old male with elevated blood sugars and fatigue. Reports 3 months of polyuria, polydipsia, and fatigue. Diet inconsistent and missed medications. ROS: Denies chest pain or dyspnea. Notes blurry vision at times.
Past Medical History: Hypertension, Hyperlipidemia
Medications: Metformin 1000 mg BID, Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: alert, no acute distress
- Cardiac: regular rhythm, no murmur
- Extremities: no edema, intact pulses

Laboratory Results:
- A1c: 9.6 % (Ref: 4.0-5.6)
- Glucose: 268 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Type 2 Diabetes Mellitus, uncontrolled (ICD-10: E11.9)

Differential Diagnoses:
- Medication nonadherence
- Cushing syndrome

### Plan
1. Reinforce diet and exercise counseling
2. Increase metformin to 1000 mg BID and add basal insulin glargine 10 units nightly
3. Repeat A1c in 3 months`},{id:"Internal Medicine-35",description:"23yo f c/o progressive SOB and leg swelling worsen...",input:"23yo f c/o progressive SOB and leg swelling worsening dyspnea on exertion for 1 week w/ orthopnea and 2+ leg edema. pmh chf, cad on furosemide 40 mg daily, metoprolol succinat 50 mg daily vs bp 136/86 hr 72 t 37.4 rr 20 spo2 98 pe lungs: bibasilar crackles, cardiac: s3 present, extremities: 2+ pitting edema labs bnp 980pg/ml, creatinine 1.6mg/dl imaging cxr shows pulmonary vascular congestion dx acute decompensated heart failure",output:`### Subjective
23-year-old female with progressive shortness of breath and leg swelling. Worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. ROS: No fever or chest pain. Notes weight gain.
Past Medical History: CHF, CAD
Medications: Furosemide 40 mg daily, Metoprolol succinate 50 mg daily
Allergies: Penicillin (rash)

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Lungs: bibasilar crackles
- Cardiac: S3 present
- Extremities: 2+ pitting edema

Laboratory Results:
- BNP: 980 pg/mL (Ref: <100)
- Creatinine: 1.6 mg/dL (Ref: 0.6-1.2)

Imaging/Diagnostics:
- CXR shows pulmonary vascular congestion

### Assessment
Primary Diagnosis: Acute decompensated heart failure (ICD-10: I50.9)

Differential Diagnoses:
- Pneumonia
- Pulmonary embolism

### Plan
1. IV furosemide 40 mg now, then 20 mg IV BID
2. Daily weights and strict I/O
3. Low-sodium diet`},{id:"Internal Medicine-36",description:"50yo m c/o fatigue and abnormal labs found on rout...",input:"50yo m c/o fatigue and abnormal labs found on routine labs to have elevated creatinine and potassium; mild fatigue. pmh ckd, diabetes on losartan 50 mg daily vs bp 118/76 hr 72 t 36.7 rr 20 spo2 98 pe general: no acute distress, cardiac: regular rhythm, lungs: clear labs creatinin 2.0mg/dl, potassium 5.8mmol/l imaging renal ultrasound: small echogenic kidneys dx chronic kidney disease stage 3 with hyperkalemia",output:`### Subjective
50-year-old male with fatigue and abnormal labs. Found on routine labs to have elevated creatinine and potassium; mild fatigue. ROS: Denies chest pain, palpitations, or weakness.
Past Medical History: CKD, Diabetes
Medications: Losartan 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: no acute distress
- Cardiac: regular rhythm
- Lungs: clear

Laboratory Results:
- Creatinine: 2.0 mg/dL (Ref: 0.6-1.2)
- Potassium: 5.8 mmol/L (Ref: 3.5-5.1)

Imaging/Diagnostics:
- Renal ultrasound: small echogenic kidneys

### Assessment
Primary Diagnosis: Chronic kidney disease stage 3 with hyperkalemia (ICD-10: N18.30)

Differential Diagnoses:
- AKI
- Medication effect

### Plan
1. Low potassium diet counseling
2. Hold losartan and recheck BMP in 48 hours
3. Nephrology follow-up`},{id:"Internal Medicine-37",description:"23yo f c/o elevated blood sugars and fatigue repor...",input:"23yo f c/o elevated blood sugars and fatigue reports 3 months of polyuria, polydipsia, and fatigue. diet inconsistent and misse medications. pmh hypertension, hyperlipidemia on metformin 1000 mg bid, lisinopril 10 mg daily vs bp 136/86 hr 110 t 38.1 rr 16 spo2 97 pe general: alert, no acute distress, cardiac: regular rhythm, no murmur, extremities: no edema, intact pulses labs a1c 9.6%, glucose 268mg/dl imaging none dx type 2 diabetes mellitus, uncontrolled",output:`### Subjective
23-year-old female with elevated blood sugars and fatigue. Reports 3 months of polyuria, polydipsia, and fatigue. Diet inconsistent and missed medications. ROS: Denies chest pain or dyspnea. Notes blurry vision at times.
Past Medical History: Hypertension, Hyperlipidemia
Medications: Metformin 1000 mg BID, Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- General: alert, no acute distress
- Cardiac: regular rhythm, no murmur
- Extremities: no edema, intact pulses

Laboratory Results:
- A1c: 9.6 % (Ref: 4.0-5.6)
- Glucose: 268 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Type 2 Diabetes Mellitus, uncontrolled (ICD-10: E11.9)

Differential Diagnoses:
- Medication nonadherence
- Cushing syndrome

### Plan
1. Reinforce diet and exercise counseling
2. Increase metformin to 1000 mg BID and add basal insulin glargine 10 units nightly
3. Repeat A1c in 3 months`},{id:"Internal Medicine-38",description:"36yo f c/o progressive shortnes of breath and leg ...",input:"36yo f c/o progressive shortnes of breath and leg swelling worsening dyspnea on exertion for 1 week w/ orthopnea and 2+ leg edema. pmh chf, cad on furosemide 40 mg daily, metoprolol succinate 50 mg daily vs bp 148/92 hr 88 t 38.1 rr 20 spo2 97 pe lungs: bibasilar crackles, cardiac: s3 present, extremities: 2+ pitting edema labs bnp 980pg/ml, creatinine 1.6mg/dl imaging cxr shows pulmonary vascular congestion dx acute decompensated heart failure",output:`### Subjective
36-year-old female with progressive shortness of breath and leg swelling. Worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. ROS: No fever or chest pain. Notes weight gain.
Past Medical History: CHF, CAD
Medications: Furosemide 40 mg daily, Metoprolol succinate 50 mg daily
Allergies: Penicillin (rash)

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Lungs: bibasilar crackles
- Cardiac: S3 present
- Extremities: 2+ pitting edema

Laboratory Results:
- BNP: 980 pg/mL (Ref: <100)
- Creatinine: 1.6 mg/dL (Ref: 0.6-1.2)

Imaging/Diagnostics:
- CXR shows pulmonary vascular congestion

### Assessment
Primary Diagnosis: Acute decompensated heart failure (ICD-10: I50.9)

Differential Diagnoses:
- Pneumonia
- Pulmonary embolism

### Plan
1. IV furosemide 40 mg now, then 20 mg IV BID
2. Daily weights and strict I/O
3. Low-sodium diet`},{id:"Internal Medicine-39",description:"34yo f c/o fatigue and abnormal labs found on rout...",input:"34yo f c/o fatigue and abnormal labs found on routine labs to have elevated creatinine and potassium; mild fatigue. pmh ckd, diabetes on losartan 50 mg daily vs bp 118/76 hr 88 t 38.1 rr 20 spo2 97 pe general: no acute distress, cardiac: regular rhythm, lungs: clear labs creatinine 2.0mg/dl, potassium 5.8mmol/l imaging renal ultrasound: small echogenic kidneys dx chronic kidne disease stage 3 with hyperkalemia",output:`### Subjective
34-year-old female with fatigue and abnormal labs. Found on routine labs to have elevated creatinine and potassium; mild fatigue. ROS: Denies chest pain, palpitations, or weakness.
Past Medical History: CKD, Diabetes
Medications: Losartan 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- General: no acute distress
- Cardiac: regular rhythm
- Lungs: clear

Laboratory Results:
- Creatinine: 2.0 mg/dL (Ref: 0.6-1.2)
- Potassium: 5.8 mmol/L (Ref: 3.5-5.1)

Imaging/Diagnostics:
- Renal ultrasound: small echogenic kidneys

### Assessment
Primary Diagnosis: Chronic kidney disease stage 3 with hyperkalemia (ICD-10: N18.30)

Differential Diagnoses:
- AKI
- Medication effect

### Plan
1. Low potassium diet counseling
2. Hold losartan and recheck BMP in 48 hours
3. Nephrology follow-up`},{id:"Internal Medicine-40",description:"31yo m c/o elevated blood sugars and fatigue repor...",input:"31yo m c/o elevated blood sugars and fatigue reports 3 month of polyuria, polydipsia, and fatigue. diet inconsistent and missed medications. pmh hypertension, hyperlipidemia on metformin 1000 mg bid, lisinopril 10 mg daily vs bp 130/84 hr 88 t 37.4 rr 18 spo2 95 pe general: alert, no acute distress, cardiac: regular rhythm, no murmur, extremities: no edema, intact pulses labs a1c 9.6%, glucose 268mg/dl imaging none dx type 2 diabetes mellitus, uncontrolled",output:`### Subjective
31-year-old male with elevated blood sugars and fatigue. Reports 3 months of polyuria, polydipsia, and fatigue. Diet inconsistent and missed medications. ROS: Denies chest pain or dyspnea. Notes blurry vision at times.
Past Medical History: Hypertension, Hyperlipidemia
Medications: Metformin 1000 mg BID, Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- General: alert, no acute distress
- Cardiac: regular rhythm, no murmur
- Extremities: no edema, intact pulses

Laboratory Results:
- A1c: 9.6 % (Ref: 4.0-5.6)
- Glucose: 268 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Type 2 Diabetes Mellitus, uncontrolled (ICD-10: E11.9)

Differential Diagnoses:
- Medication nonadherence
- Cushing syndrome

### Plan
1. Reinforce diet and exercise counseling
2. Increase metformin to 1000 mg BID and add basal insulin glargine 10 units nightly
3. Repeat A1c in 3 months`},{id:"Internal Medicine-41",description:"37yo f c/o progressive shortness of breath and leg...",input:"37yo f c/o progressive shortness of breath and leg swelling worsening dyspnea on exertion for 1 week w/ orthopnea and 2+ leg edema. pmh chf, cad on furosemide 40 mg daily, metoprolol succinate 50 mg daily vs bp 136/86 hr 88 t 37.4 rr 16 spo2 97 pe lungs: bibasila crackles, cardiac: s3 present, extremities: 2+ pitting edema labs bnp 980pg/ml, creatinine 1.6mg/dl imaging cxr shows pulmonary vascular congestion dx acute decompensated heart failure",output:`### Subjective
37-year-old female with progressive shortness of breath and leg swelling. Worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. ROS: No fever or chest pain. Notes weight gain.
Past Medical History: CHF, CAD
Medications: Furosemide 40 mg daily, Metoprolol succinate 50 mg daily
Allergies: Penicillin (rash)

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Lungs: bibasilar crackles
- Cardiac: S3 present
- Extremities: 2+ pitting edema

Laboratory Results:
- BNP: 980 pg/mL (Ref: <100)
- Creatinine: 1.6 mg/dL (Ref: 0.6-1.2)

Imaging/Diagnostics:
- CXR shows pulmonary vascular congestion

### Assessment
Primary Diagnosis: Acute decompensated heart failure (ICD-10: I50.9)

Differential Diagnoses:
- Pneumonia
- Pulmonary embolism

### Plan
1. IV furosemide 40 mg now, then 20 mg IV BID
2. Daily weights and strict I/O
3. Low-sodium diet`},{id:"Internal Medicine-42",description:"20yo f c/o fatigue and abnormal labs found on rout...",input:"20yo f c/o fatigue and abnormal labs found on routine labs to have elevated creatinine and potassium; mild fatigue. pmh ckd, diabetes on losartan 50 mg daily vs bp 136/86 hr 88 t 38.1 rr 20 spo2 95 pe general: no acute distress, cardiac: regular rhythm, lungs: clear labs creatinine 2.0mg/dl, potassium 5.8mmol/l imaging renal ultrasound: small echogenic kidneys dx chronic kidney disease stage 3 w/ hyperkalemia",output:`### Subjective
20-year-old female with fatigue and abnormal labs. Found on routine labs to have elevated creatinine and potassium; mild fatigue. ROS: Denies chest pain, palpitations, or weakness.
Past Medical History: CKD, Diabetes
Medications: Losartan 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- General: no acute distress
- Cardiac: regular rhythm
- Lungs: clear

Laboratory Results:
- Creatinine: 2.0 mg/dL (Ref: 0.6-1.2)
- Potassium: 5.8 mmol/L (Ref: 3.5-5.1)

Imaging/Diagnostics:
- Renal ultrasound: small echogenic kidneys

### Assessment
Primary Diagnosis: Chronic kidney disease stage 3 with hyperkalemia (ICD-10: N18.30)

Differential Diagnoses:
- AKI
- Medication effect

### Plan
1. Low potassium diet counseling
2. Hold losartan and recheck BMP in 48 hours
3. Nephrology follow-up`},{id:"Internal Medicine-43",description:"24yo f c/o elevated blood sugars and fatigue repor...",input:"24yo f c/o elevated blood sugars and fatigue reports 3 months of polyuria, polydipsia, and fatigue. diet inconsistent and missed medications. pmh hypertension, hyperlipidemia on metformin 1000 mg bid, lisinopril 10 mg daily vs bp 130/8 hr 96 t 37.4 rr 18 spo2 95 pe general: alert, no acute distress, cardiac: regular rhythm, no murmur, extremities no edema, intact pulses labs a1c 9.6%, glucose 268mg/dl imaging none dx type 2 diabetes mellitus, uncontrolled",output:`### Subjective
24-year-old female with elevated blood sugars and fatigue. Reports 3 months of polyuria, polydipsia, and fatigue. Diet inconsistent and missed medications. ROS: Denies chest pain or dyspnea. Notes blurry vision at times.
Past Medical History: Hypertension, Hyperlipidemia
Medications: Metformin 1000 mg BID, Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- General: alert, no acute distress
- Cardiac: regular rhythm, no murmur
- Extremities: no edema, intact pulses

Laboratory Results:
- A1c: 9.6 % (Ref: 4.0-5.6)
- Glucose: 268 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Type 2 Diabetes Mellitus, uncontrolled (ICD-10: E11.9)

Differential Diagnoses:
- Medication nonadherence
- Cushing syndrome

### Plan
1. Reinforce diet and exercise counseling
2. Increase metformin to 1000 mg BID and add basal insulin glargine 10 units nightly
3. Repeat A1c in 3 months`},{id:"Internal Medicine-44",description:"25yo m c/o progressive shortness of breath and leg...",input:"25yo m c/o progressive shortness of breath and leg swelling worsening dyspnea on exertion for 1 week w/ orthopnea and 2+ leg edema. pmh chf, cad on furosemid 40 mg daily, metoprolol succinate 50 mg daily vs bp 148/92 hr 88 t 36.7 rr 16 spo2 95 pe lungs: bibasilar crackles, cardiac: s3 present, extremities: 2+ pitting edema labs bnp 980pg/ml, creatinine 1.6mg/dl imaging cxr shows pulmonary vascular congestion dx acute decompensated heart failure",output:`### Subjective
25-year-old male with progressive shortness of breath and leg swelling. Worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. ROS: No fever or chest pain. Notes weight gain.
Past Medical History: CHF, CAD
Medications: Furosemide 40 mg daily, Metoprolol succinate 50 mg daily
Allergies: Penicillin (rash)

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Lungs: bibasilar crackles
- Cardiac: S3 present
- Extremities: 2+ pitting edema

Laboratory Results:
- BNP: 980 pg/mL (Ref: <100)
- Creatinine: 1.6 mg/dL (Ref: 0.6-1.2)

Imaging/Diagnostics:
- CXR shows pulmonary vascular congestion

### Assessment
Primary Diagnosis: Acute decompensated heart failure (ICD-10: I50.9)

Differential Diagnoses:
- Pneumonia
- Pulmonary embolism

### Plan
1. IV furosemide 40 mg now, then 20 mg IV BID
2. Daily weights and strict I/O
3. Low-sodium diet`},{id:"Internal Medicine-45",description:"80yo m c/o fatigue and abnormal labs found on rout...",input:"80yo m c/o fatigue and abnormal labs found on routine labs to have elevated creatinine and potassium; mild fatigue. pmh ckd, diabetes on losartan 50 mg daily vs bp 118/76 hr 72 t 37.4 rr 16 spo2 95 pe general: no acute distress, cardiac: regular rhythm, lungs: clear labs creatinine 2.0mg/dl, potassium 5.8mmol/l imaging renal ultrasound: small echogenic kidneys dx chronic kidney disease stage 3 with hyperkalemia",output:`### Subjective
80-year-old male with fatigue and abnormal labs. Found on routine labs to have elevated creatinine and potassium; mild fatigue. ROS: Denies chest pain, palpitations, or weakness.
Past Medical History: CKD, Diabetes
Medications: Losartan 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- General: no acute distress
- Cardiac: regular rhythm
- Lungs: clear

Laboratory Results:
- Creatinine: 2.0 mg/dL (Ref: 0.6-1.2)
- Potassium: 5.8 mmol/L (Ref: 3.5-5.1)

Imaging/Diagnostics:
- Renal ultrasound: small echogenic kidneys

### Assessment
Primary Diagnosis: Chronic kidney disease stage 3 with hyperkalemia (ICD-10: N18.30)

Differential Diagnoses:
- AKI
- Medication effect

### Plan
1. Low potassium diet counseling
2. Hold losartan and recheck BMP in 48 hours
3. Nephrology follow-up`},{id:"Internal Medicine-46",description:"79yo f c/o elevated blood sugars and fatigue repor...",input:"79yo f c/o elevated blood sugars and fatigue reports 3 months of polyuria, polydipsia, and fatigue. diet inconsistent and missed medications. pmh hypertension, hyperlipidemia on metformin 1000 mg bid, lisinopril 10 mg daily vs bp 130/84 hr 88 t 37.4 rr 20 spo2 97 pe general: alert, no acute distress, cardiac: regular rhythm, no murmur, extremities: no edema, intact pulses labs a1c 9.6%, glucose 268mg/dl imaging none dx type 2 diabetes mellitus, uncontrolled",output:`### Subjective
79-year-old female with elevated blood sugars and fatigue. Reports 3 months of polyuria, polydipsia, and fatigue. Diet inconsistent and missed medications. ROS: Denies chest pain or dyspnea. Notes blurry vision at times.
Past Medical History: Hypertension, Hyperlipidemia
Medications: Metformin 1000 mg BID, Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- General: alert, no acute distress
- Cardiac: regular rhythm, no murmur
- Extremities: no edema, intact pulses

Laboratory Results:
- A1c: 9.6 % (Ref: 4.0-5.6)
- Glucose: 268 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Type 2 Diabetes Mellitus, uncontrolled (ICD-10: E11.9)

Differential Diagnoses:
- Medication nonadherence
- Cushing syndrome

### Plan
1. Reinforce diet and exercise counseling
2. Increase metformin to 1000 mg BID and add basal insulin glargine 10 units nightly
3. Repeat A1c in 3 months`},{id:"Internal Medicine-47",description:"39yo m c/o progressive shortness of breath and leg...",input:"39yo m c/o progressive shortness of breath and leg swelling worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. pmh chf, cad on furosemide 40 mg daily, metoprolol succinate 50 mg daily vs bp 136/86 hr 72 t 36.7 rr 16 spo2 97 pe lungs: bibasilar crackles, cardiac s3 present, extremities: 2+ pitting edema labs bnp 980pg/ml, creatinine 1.6mg/dl imaging cxr shows pulmonary vascular congestion dx acute decompensated heart failure",output:`### Subjective
39-year-old male with progressive shortness of breath and leg swelling. Worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. ROS: No fever or chest pain. Notes weight gain.
Past Medical History: CHF, CAD
Medications: Furosemide 40 mg daily, Metoprolol succinate 50 mg daily
Allergies: Penicillin (rash)

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Lungs: bibasilar crackles
- Cardiac: S3 present
- Extremities: 2+ pitting edema

Laboratory Results:
- BNP: 980 pg/mL (Ref: <100)
- Creatinine: 1.6 mg/dL (Ref: 0.6-1.2)

Imaging/Diagnostics:
- CXR shows pulmonary vascular congestion

### Assessment
Primary Diagnosis: Acute decompensated heart failure (ICD-10: I50.9)

Differential Diagnoses:
- Pneumonia
- Pulmonary embolism

### Plan
1. IV furosemide 40 mg now, then 20 mg IV BID
2. Daily weights and strict I/O
3. Low-sodium diet`},{id:"Internal Medicine-48",description:"83yo m c/o fatigue and abnormal labs found on rout...",input:"83yo m c/o fatigue and abnormal labs found on routine labs to have elevated creatinine and potassium; mild fatigue. pmh ckd, diabetes on losartan 50 mg daily vs bp 130/84 hr 110 t 36.7 rr 18 spo2 98 pe general: no acute distress, cardiac: regular rhythm, lungs: clear labs creatinine 2.0mg/dl, potassium 5.8mmol/l imaging renal ultrasound: small echogenic kidneys dx chroni kidney disease stage 3 with hyperkalemia",output:`### Subjective
83-year-old male with fatigue and abnormal labs. Found on routine labs to have elevated creatinine and potassium; mild fatigue. ROS: Denies chest pain, palpitations, or weakness.
Past Medical History: CKD, Diabetes
Medications: Losartan 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: no acute distress
- Cardiac: regular rhythm
- Lungs: clear

Laboratory Results:
- Creatinine: 2.0 mg/dL (Ref: 0.6-1.2)
- Potassium: 5.8 mmol/L (Ref: 3.5-5.1)

Imaging/Diagnostics:
- Renal ultrasound: small echogenic kidneys

### Assessment
Primary Diagnosis: Chronic kidney disease stage 3 with hyperkalemia (ICD-10: N18.30)

Differential Diagnoses:
- AKI
- Medication effect

### Plan
1. Low potassium diet counseling
2. Hold losartan and recheck BMP in 48 hours
3. Nephrology follow-up`},{id:"Internal Medicine-49",description:"31yo f c/o elevated blood sugars and fatigue repor...",input:"31yo f c/o elevated blood sugars and fatigue reports 3 months of polyuria, polydipsia, and fatigue. diet inconsisten and missed medications. pmh hypertension, hyperlipidemia on metformin 1000 mg bid, lisinopril 10 mg daily vs bp 136/86 hr 96 t 37.4 rr 18 spo2 97 pe general: alert, no acute distress, cardiac: regular rhythm, no murmur, extremities: no edema, intact pulses labs a1c 9.6%, glucose 268mg/dl imagin none dx type 2 diabetes mellitus, uncontrolled",output:`### Subjective
31-year-old female with elevated blood sugars and fatigue. Reports 3 months of polyuria, polydipsia, and fatigue. Diet inconsistent and missed medications. ROS: Denies chest pain or dyspnea. Notes blurry vision at times.
Past Medical History: Hypertension, Hyperlipidemia
Medications: Metformin 1000 mg BID, Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- General: alert, no acute distress
- Cardiac: regular rhythm, no murmur
- Extremities: no edema, intact pulses

Laboratory Results:
- A1c: 9.6 % (Ref: 4.0-5.6)
- Glucose: 268 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Type 2 Diabetes Mellitus, uncontrolled (ICD-10: E11.9)

Differential Diagnoses:
- Medication nonadherence
- Cushing syndrome

### Plan
1. Reinforce diet and exercise counseling
2. Increase metformin to 1000 mg BID and add basal insulin glargine 10 units nightly
3. Repeat A1c in 3 months`},{id:"Internal Medicine-50",description:"58yo f c/o pain patient reports pain but location,...",input:"58yo f c/o pain patient reports pain but location, duration, and severity are unclear pmh none on no meds vs bp 136/86 hr 88 t 37.4 rr 20 spo2 95 pe limited exam documented labs none imaging none dx underspecified pain",output:`### Subjective
Patient reports pain but documentation is insufficient to determine location, duration, or severity.

### Objective
Limited exam documented; no vitals or labs provided.

### Assessment
Underspecified pain syndrome (ICD-10: R69). Insufficient data for definitive diagnosis.

### Plan
1. Obtain complete history and focused physical exam.
2. Document vitals and relevant labs/imaging.`},{id:"Internal Medicine-51",description:"80yo f c/o fatigue and abnormal labs found on rout...",input:"80yo f c/o fatigue and abnormal labs found on routine labs to have elevated creatinine and potassium; mild fatigue. pmh ckd, diabetes on losartan 50 mg daily vs bp 148/92 hr 96 t 37.4 rr 16 spo2 95 pe general: no acute distress cardiac: regular rhythm, lungs: clear labs creatinine 2.0mg/dl, potassium 5.8mmol/ imaging renal ultrasound: small echogenic kidneys dx chronic kidney disease stage 3 with hyperkalemia",output:`### Subjective
80-year-old female with fatigue and abnormal labs. Found on routine labs to have elevated creatinine and potassium; mild fatigue. ROS: Denies chest pain, palpitations, or weakness.
Past Medical History: CKD, Diabetes
Medications: Losartan 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- General: no acute distress
- Cardiac: regular rhythm
- Lungs: clear

Laboratory Results:
- Creatinine: 2.0 mg/dL (Ref: 0.6-1.2)
- Potassium: 5.8 mmol/L (Ref: 3.5-5.1)

Imaging/Diagnostics:
- Renal ultrasound: small echogenic kidneys

### Assessment
Primary Diagnosis: Chronic kidney disease stage 3 with hyperkalemia (ICD-10: N18.30)

Differential Diagnoses:
- AKI
- Medication effect

### Plan
1. Low potassium diet counseling
2. Hold losartan and recheck BMP in 48 hours
3. Nephrology follow-up`},{id:"Internal Medicine-52",description:"30yo m c/o elevated blood sugars and fatigue repor...",input:"30yo m c/o elevated blood sugars and fatigue reports 3 months of polyuria, polydipsia, and fatigue. diet inconsistent and missed medications. pmh hypertension, hyperlipidemia on metformin 1000 mg bid, lisinopril 10 mg daily vs bp 118/76 hr 110 t 38.1 rr 18 spo2 98 pe general: alert, no acute distress, cardiac: regular rhythm, no murmur, extremities: no edema, intact pulses labs a1c 9.6%, glucose 268mg/dl imaging none dx type 2 diabetes mellitus, uncontrolled",output:`### Subjective
30-year-old male with elevated blood sugars and fatigue. Reports 3 months of polyuria, polydipsia, and fatigue. Diet inconsistent and missed medications. ROS: Denies chest pain or dyspnea. Notes blurry vision at times.
Past Medical History: Hypertension, Hyperlipidemia
Medications: Metformin 1000 mg BID, Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: alert, no acute distress
- Cardiac: regular rhythm, no murmur
- Extremities: no edema, intact pulses

Laboratory Results:
- A1c: 9.6 % (Ref: 4.0-5.6)
- Glucose: 268 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Type 2 Diabetes Mellitus, uncontrolled (ICD-10: E11.9)

Differential Diagnoses:
- Medication nonadherence
- Cushing syndrome

### Plan
1. Reinforce diet and exercise counseling
2. Increase metformin to 1000 mg BID and add basal insulin glargine 10 units nightly
3. Repeat A1c in 3 months`},{id:"Internal Medicine-53",description:"85yo f c/o progressive shortness of breath and leg...",input:"85yo f c/o progressive shortness of breath and leg swelling worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. pmh chf, cad on furosemide 40 mg daily, metoprolol succinate 50 mg daily vs bp 136/86 hr 96 t 36.7 rr 16 spo2 98 pe lungs: bibasilar crackles, cardiac: s3 present, extremities: 2+ pitting edema labs bnp 980pg/ml, creatinine 1.6mg/dl imaging cxr shows pulmonary vascular congestion dx acute decompensated heart failure",output:`### Subjective
85-year-old female with progressive shortness of breath and leg swelling. Worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. ROS: No fever or chest pain. Notes weight gain.
Past Medical History: CHF, CAD
Medications: Furosemide 40 mg daily, Metoprolol succinate 50 mg daily
Allergies: Penicillin (rash)

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Lungs: bibasilar crackles
- Cardiac: S3 present
- Extremities: 2+ pitting edema

Laboratory Results:
- BNP: 980 pg/mL (Ref: <100)
- Creatinine: 1.6 mg/dL (Ref: 0.6-1.2)

Imaging/Diagnostics:
- CXR shows pulmonary vascular congestion

### Assessment
Primary Diagnosis: Acute decompensated heart failure (ICD-10: I50.9)

Differential Diagnoses:
- Pneumonia
- Pulmonary embolism

### Plan
1. IV furosemide 40 mg now, then 20 mg IV BID
2. Daily weights and strict I/O
3. Low-sodium diet`},{id:"Internal Medicine-54",description:"48yo m c/o fatigue and abnormal labs found on rout...",input:"48yo m c/o fatigue and abnormal labs found on routin labs to have elevated creatinin and potassium; mild fatigue. pmh ckd, diabetes on losartan 50 mg daily vs bp 136/86 hr 96 t 36.7 rr 18 spo2 95 pe general: no acute distress, cardiac: regular rhythm, lungs: clear labs creatinine 2.0mg/dl, potassium 5.8mmol/l imaging renal ultrasound: small echogenic kidneys dx chronic kidney disease stage 3 with hyperkalemia",output:`### Subjective
48-year-old male with fatigue and abnormal labs. Found on routine labs to have elevated creatinine and potassium; mild fatigue. ROS: Denies chest pain, palpitations, or weakness.
Past Medical History: CKD, Diabetes
Medications: Losartan 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- General: no acute distress
- Cardiac: regular rhythm
- Lungs: clear

Laboratory Results:
- Creatinine: 2.0 mg/dL (Ref: 0.6-1.2)
- Potassium: 5.8 mmol/L (Ref: 3.5-5.1)

Imaging/Diagnostics:
- Renal ultrasound: small echogenic kidneys

### Assessment
Primary Diagnosis: Chronic kidney disease stage 3 with hyperkalemia (ICD-10: N18.30)

Differential Diagnoses:
- AKI
- Medication effect

### Plan
1. Low potassium diet counseling
2. Hold losartan and recheck BMP in 48 hours
3. Nephrology follow-up`},{id:"Internal Medicine-55",description:"82yo m c/o elevated blood sugars and fatigue repor...",input:"82yo m c/o elevated blood sugars and fatigue reports 3 months of polyuria, polydipsia, and fatigue. diet inconsisten and missed medications. pmh hypertension, hyperlipidemi on metformin 1000 mg bid, lisinopril 10 mg daily vs bp 118/76 hr 96 t 38.1 rr 18 spo2 97 pe general: alert, no acute distress, cardiac: regular rhythm, no murmur, extremities: no edema, intact pulses labs a1c 9.6%, glucose 268mg/dl imaging none dx type 2 diabetes mellitus, uncontrolled",output:`### Subjective
82-year-old male with elevated blood sugars and fatigue. Reports 3 months of polyuria, polydipsia, and fatigue. Diet inconsistent and missed medications. ROS: Denies chest pain or dyspnea. Notes blurry vision at times.
Past Medical History: Hypertension, Hyperlipidemia
Medications: Metformin 1000 mg BID, Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- General: alert, no acute distress
- Cardiac: regular rhythm, no murmur
- Extremities: no edema, intact pulses

Laboratory Results:
- A1c: 9.6 % (Ref: 4.0-5.6)
- Glucose: 268 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Type 2 Diabetes Mellitus, uncontrolled (ICD-10: E11.9)

Differential Diagnoses:
- Medication nonadherence
- Cushing syndrome

### Plan
1. Reinforce diet and exercise counseling
2. Increase metformin to 1000 mg BID and add basal insulin glargine 10 units nightly
3. Repeat A1c in 3 months`},{id:"Internal Medicine-56",description:"71yo f c/o progressive SOB and leg swelling worsen...",input:"71yo f c/o progressive SOB and leg swelling worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. pmh chf, cad on furosemide 40 mg daily, metoprolol succinat 50 mg daily vs bp 148/92 hr 110 t 37.4 rr 16 spo2 95 pe lungs: bibasilar crackles, cardiac: s3 present, extremities: 2+ pitting edema labs bnp 980pg/ml, creatinine 1.6mg/dl imaging cxr shows pulmonary vascular congestion dx acute decompensated heart failure",output:`### Subjective
71-year-old female with progressive shortness of breath and leg swelling. Worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. ROS: No fever or chest pain. Notes weight gain.
Past Medical History: CHF, CAD
Medications: Furosemide 40 mg daily, Metoprolol succinate 50 mg daily
Allergies: Penicillin (rash)

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Lungs: bibasilar crackles
- Cardiac: S3 present
- Extremities: 2+ pitting edema

Laboratory Results:
- BNP: 980 pg/mL (Ref: <100)
- Creatinine: 1.6 mg/dL (Ref: 0.6-1.2)

Imaging/Diagnostics:
- CXR shows pulmonary vascular congestion

### Assessment
Primary Diagnosis: Acute decompensated heart failure (ICD-10: I50.9)

Differential Diagnoses:
- Pneumonia
- Pulmonary embolism

### Plan
1. IV furosemide 40 mg now, then 20 mg IV BID
2. Daily weights and strict I/O
3. Low-sodium diet`},{id:"Internal Medicine-57",description:"30yo m c/o fatigue and abnormal labs found on rout...",input:"30yo m c/o fatigue and abnormal labs found on routine labs to have elevated creatinine and potassium; mild fatigue. pmh ckd, diabetes on losartan 50 mg daily vs bp 130/84 hr 88 t 38.1 rr 16 spo2 98 pe general: no acute distress, cardiac: regula rhythm, lungs: clear labs creatinine 2.0mg/dl, potassium 5.8mmol/l imaging renal ultrasound: small echogenic kidneys dx chronic kidney disease stage 3 w/ hyperkalemia",output:`### Subjective
30-year-old male with fatigue and abnormal labs. Found on routine labs to have elevated creatinine and potassium; mild fatigue. ROS: Denies chest pain, palpitations, or weakness.
Past Medical History: CKD, Diabetes
Medications: Losartan 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: no acute distress
- Cardiac: regular rhythm
- Lungs: clear

Laboratory Results:
- Creatinine: 2.0 mg/dL (Ref: 0.6-1.2)
- Potassium: 5.8 mmol/L (Ref: 3.5-5.1)

Imaging/Diagnostics:
- Renal ultrasound: small echogenic kidneys

### Assessment
Primary Diagnosis: Chronic kidney disease stage 3 with hyperkalemia (ICD-10: N18.30)

Differential Diagnoses:
- AKI
- Medication effect

### Plan
1. Low potassium diet counseling
2. Hold losartan and recheck BMP in 48 hours
3. Nephrology follow-up`},{id:"Internal Medicine-58",description:"58yo f c/o elevated blood sugars and fatigue repor...",input:"58yo f c/o elevated blood sugars and fatigue reports 3 months of polyuria, polydipsia, and fatigue. diet inconsistent and missed medications. pmh hypertension, hyperlipidemia on metformin 1000 mg bid, lisinopril 10 mg daily vs bp 130/84 hr 96 t 37.4 rr 16 spo2 95 pe general: alert, no acute distress, cardiac: regular rhythm, no murmur, extremities: no edema, intact pulses labs a1c 9.6%, glucose 268mg/dl imaging none dx type 2 diabetes mellitus uncontrolled",output:`### Subjective
58-year-old female with elevated blood sugars and fatigue. Reports 3 months of polyuria, polydipsia, and fatigue. Diet inconsistent and missed medications. ROS: Denies chest pain or dyspnea. Notes blurry vision at times.
Past Medical History: Hypertension, Hyperlipidemia
Medications: Metformin 1000 mg BID, Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- General: alert, no acute distress
- Cardiac: regular rhythm, no murmur
- Extremities: no edema, intact pulses

Laboratory Results:
- A1c: 9.6 % (Ref: 4.0-5.6)
- Glucose: 268 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Type 2 Diabetes Mellitus, uncontrolled (ICD-10: E11.9)

Differential Diagnoses:
- Medication nonadherence
- Cushing syndrome

### Plan
1. Reinforce diet and exercise counseling
2. Increase metformin to 1000 mg BID and add basal insulin glargine 10 units nightly
3. Repeat A1c in 3 months`},{id:"Internal Medicine-59",description:"60yo f c/o progressive SOB and leg swelling worsen...",input:"60yo f c/o progressive SOB and leg swelling worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. pmh chf, cad on furosemide 40 mg daily, metoprolol succinate 50 mg daily vs bp 118/76 hr 88 t 38.1 rr 16 spo2 95 pe lungs: bibasilar crackles, cardiac: s3 present, extremities: 2+ pitting edema labs bnp 980pg/ml, creatinine 1.6mg/dl imaging cxr shows pulmonary vascular congestion dx acute decompensated heart failure",output:`### Subjective
60-year-old female with progressive shortness of breath and leg swelling. Worsening dyspnea on exertion for 1 week with orthopnea and 2+ leg edema. ROS: No fever or chest pain. Notes weight gain.
Past Medical History: CHF, CAD
Medications: Furosemide 40 mg daily, Metoprolol succinate 50 mg daily
Allergies: Penicillin (rash)

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Lungs: bibasilar crackles
- Cardiac: S3 present
- Extremities: 2+ pitting edema

Laboratory Results:
- BNP: 980 pg/mL (Ref: <100)
- Creatinine: 1.6 mg/dL (Ref: 0.6-1.2)

Imaging/Diagnostics:
- CXR shows pulmonary vascular congestion

### Assessment
Primary Diagnosis: Acute decompensated heart failure (ICD-10: I50.9)

Differential Diagnoses:
- Pneumonia
- Pulmonary embolism

### Plan
1. IV furosemide 40 mg now, then 20 mg IV BID
2. Daily weights and strict I/O
3. Low-sodium diet`},{id:"Internal Medicine-60",description:"60yo m c/o fatigue and abnormal labs found on rout...",input:"60yo m c/o fatigue and abnormal labs found on routine labs to have elevated creatinine and potassium; mild fatigue. pmh ckd, diabetes on losartan 50 mg daily vs bp 130/84 hr 110 t 38.1 rr 20 spo2 95 pe general: no acute distress, cardiac: regular rhythm, lungs: clea labs creatinine 2.0mg/dl, potassium 5.8mmol/l imaging renal ultrasound: small echogenic kidney dx chronic kidney disease stage 3 with hyperkalemia",output:`### Subjective
60-year-old male with fatigue and abnormal labs. Found on routine labs to have elevated creatinine and potassium; mild fatigue. ROS: Denies chest pain, palpitations, or weakness.
Past Medical History: CKD, Diabetes
Medications: Losartan 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- General: no acute distress
- Cardiac: regular rhythm
- Lungs: clear

Laboratory Results:
- Creatinine: 2.0 mg/dL (Ref: 0.6-1.2)
- Potassium: 5.8 mmol/L (Ref: 3.5-5.1)

Imaging/Diagnostics:
- Renal ultrasound: small echogenic kidneys

### Assessment
Primary Diagnosis: Chronic kidney disease stage 3 with hyperkalemia (ICD-10: N18.30)

Differential Diagnoses:
- AKI
- Medication effect

### Plan
1. Low potassium diet counseling
2. Hold losartan and recheck BMP in 48 hours
3. Nephrology follow-up`}]},{name:"Nephrology",cases:[{id:"Nephrology-1",description:"20yo f c/o low urine output decreased urine output...",input:"20yo f c/o low urine output decreased urine output after gastroenteritis pmh htn on lisinopril 10 mg dail vs bp 136/86 hr 72 t 381 rr 20 spo2 98 pe general: dehydrated labs creatinine 24mg/dl imaging renal us: no obstruction dx acute kidney injury",output:`### Subjective
20-year-old female with low urine output. Decreased urine output after gastroenteritis. ROS: No flank pain.
Past Medical History: HTN
Medications: Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: dehydrated

Laboratory Results:
- Creatinine: 2.4 mg/dL (Ref: 0.6-1.2)

Imaging/Diagnostics:
- Renal US: no obstruction

### Assessment
Primary Diagnosis: Acute kidney injury (ICD-10: N17.9)

Differential Diagnoses:
- Pre-renal azotemia

### Plan
1. IV fluids
2. Hold ACE inhibitor`},{id:"Nephrology-2",description:"72yo f c/o dialysis follow-up routine hd visit rep...",input:"72yo f c/o dialysis follow-up routine hd visit reports fatigue after sessions pmh esrd on epoetin alfa weekly vs bp 148/92 hr 110 t 374 rr 16 spo2 97 pe av fistula: bruit present labs potassium 52mmol/l imaging none dx end-stage renal disease on hemodialysis",output:`### Subjective
72-year-old female with dialysis follow-up. Routine HD visit, reports fatigue after sessions. ROS: No chest pain.
Past Medical History: ESRD
Medications: Epoetin alfa weekly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- AV fistula: bruit present

Laboratory Results:
- Potassium: 5.2 mmol/L (Ref: 3.5-5.1)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: End-stage renal disease on hemodialysis (ICD-10: N18.6)

Differential Diagnoses:
- Anemia of CKD

### Plan
1. Continue HD schedule
2. Check iron studies`},{id:"Nephrology-3",description:"58yo f c/o low urine output decreased urine output...",input:"58yo f c/o low urine output decreased urine output after gastroenteritis pmh htn on lisinopril 10 mg daily vs bp 118/76 hr 88 t 381 rr 20 spo2 98 pe general: dehydrated labs creatinine 24mg/dl imagin renal us: no obstruction dx acute kidney injury",output:`### Subjective
58-year-old female with low urine output. Decreased urine output after gastroenteritis. ROS: No flank pain.
Past Medical History: HTN
Medications: Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: dehydrated

Laboratory Results:
- Creatinine: 2.4 mg/dL (Ref: 0.6-1.2)

Imaging/Diagnostics:
- Renal US: no obstruction

### Assessment
Primary Diagnosis: Acute kidney injury (ICD-10: N17.9)

Differential Diagnoses:
- Pre-renal azotemia

### Plan
1. IV fluids
2. Hold ACE inhibitor`},{id:"Nephrology-4",description:"25yo m c/o dialysi follow-up routine hd visit repo...",input:"25yo m c/o dialysi follow-up routine hd visit reports fatigue after sessions pmh esrd on epoetin alfa weekly vs bp 118/76 hr 88 t 367 rr 20 spo2 98 pe av fistula: bruit present labs potassium 52mmol/l imaging none dx end-stage renal disease on hemodialysis",output:`### Subjective
25-year-old male with dialysis follow-up. Routine HD visit, reports fatigue after sessions. ROS: No chest pain.
Past Medical History: ESRD
Medications: Epoetin alfa weekly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- AV fistula: bruit present

Laboratory Results:
- Potassium: 5.2 mmol/L (Ref: 3.5-5.1)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: End-stage renal disease on hemodialysis (ICD-10: N18.6)

Differential Diagnoses:
- Anemia of CKD

### Plan
1. Continue HD schedule
2. Check iron studies`},{id:"Nephrology-5",description:"64yo f c/o low urine outpu decreased urine output ...",input:"64yo f c/o low urine outpu decreased urine output after gastroenteritis pmh htn on lisinopril 10 mg daily vs bp 148/92 hr 88 t 374 rr 16 spo2 97 pe general: dehydrated labs creatinine 24mg/dl imaging renal us: no obstruction dx acute kidney injury",output:`### Subjective
64-year-old female with low urine output. Decreased urine output after gastroenteritis. ROS: No flank pain.
Past Medical History: HTN
Medications: Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- General: dehydrated

Laboratory Results:
- Creatinine: 2.4 mg/dL (Ref: 0.6-1.2)

Imaging/Diagnostics:
- Renal US: no obstruction

### Assessment
Primary Diagnosis: Acute kidney injury (ICD-10: N17.9)

Differential Diagnoses:
- Pre-renal azotemia

### Plan
1. IV fluids
2. Hold ACE inhibitor`},{id:"Nephrology-6",description:"26yo m c/o dialysis follow-u routine hd visit repo...",input:"26yo m c/o dialysis follow-u routine hd visit reports fatigue after sessions pmh esrd on epoetin alfa weekly vs bp 136/8 hr 72 t 367 rr 16 spo2 98 pe av fistula: bruit present labs potassium 52mmol/l imaging none dx end-stage renal disease on hemodialysis",output:`### Subjective
26-year-old male with dialysis follow-up. Routine HD visit, reports fatigue after sessions. ROS: No chest pain.
Past Medical History: ESRD
Medications: Epoetin alfa weekly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- AV fistula: bruit present

Laboratory Results:
- Potassium: 5.2 mmol/L (Ref: 3.5-5.1)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: End-stage renal disease on hemodialysis (ICD-10: N18.6)

Differential Diagnoses:
- Anemia of CKD

### Plan
1. Continue HD schedule
2. Check iron studies`},{id:"Nephrology-7",description:"40yo m c/o low urine output decreased urine output...",input:"40yo m c/o low urine output decreased urine output after gastroenteritis pmh htn on lisinopril 10 mg daily vs bp 130/84 hr 96 t 381 rr 20 spo2 98 pe general: dehydrated labs creatinine 24mg/dl imaging renal us: no obstruction dx acute kidne injury",output:`### Subjective
40-year-old male with low urine output. Decreased urine output after gastroenteritis. ROS: No flank pain.
Past Medical History: HTN
Medications: Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: dehydrated

Laboratory Results:
- Creatinine: 2.4 mg/dL (Ref: 0.6-1.2)

Imaging/Diagnostics:
- Renal US: no obstruction

### Assessment
Primary Diagnosis: Acute kidney injury (ICD-10: N17.9)

Differential Diagnoses:
- Pre-renal azotemia

### Plan
1. IV fluids
2. Hold ACE inhibitor`},{id:"Nephrology-8",description:"55yo m c/o dialysis follow-up routine hd visit rep...",input:"55yo m c/o dialysis follow-up routine hd visit reports fatigue after sessions pmh esrd on epoetin alfa weekly vs bp 130/84 hr 72 t 381 rr 18 spo2 97 pe av fistula: brui present labs potassium 52mmol/l imaging none dx end-stage renal disease on hemodialysis",output:`### Subjective
55-year-old male with dialysis follow-up. Routine HD visit, reports fatigue after sessions. ROS: No chest pain.
Past Medical History: ESRD
Medications: Epoetin alfa weekly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- AV fistula: bruit present

Laboratory Results:
- Potassium: 5.2 mmol/L (Ref: 3.5-5.1)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: End-stage renal disease on hemodialysis (ICD-10: N18.6)

Differential Diagnoses:
- Anemia of CKD

### Plan
1. Continue HD schedule
2. Check iron studies`},{id:"Nephrology-9",description:"82yo f c/o low urine output decreased urine output...",input:"82yo f c/o low urine output decreased urine output after gastroenteritis pmh htn on lisinopril 10 mg daily vs bp 118/76 hr 72 t 374 rr 16 spo2 95 pe general: dehydrated labs creatinine 24mg/dl imaging renal us: no obstruction dx acute kidney injury",output:`### Subjective
82-year-old female with low urine output. Decreased urine output after gastroenteritis. ROS: No flank pain.
Past Medical History: HTN
Medications: Lisinopril 10 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- General: dehydrated

Laboratory Results:
- Creatinine: 2.4 mg/dL (Ref: 0.6-1.2)

Imaging/Diagnostics:
- Renal US: no obstruction

### Assessment
Primary Diagnosis: Acute kidney injury (ICD-10: N17.9)

Differential Diagnoses:
- Pre-renal azotemia

### Plan
1. IV fluids
2. Hold ACE inhibitor`},{id:"Nephrology-10",description:"23yo f c/o dialysis follow-up routine hd visi repo...",input:"23yo f c/o dialysis follow-up routine hd visi reports fatigue after sessions pmh esrd on epoetin alfa weekly vs bp 148/92 hr 110 t 381 rr 16 spo2 97 pe av fistula: bruit present labs potassium 52mmol/l imaging none dx end-stage renal disease on hemodialysis",output:`### Subjective
23-year-old female with dialysis follow-up. Routine HD visit, reports fatigue after sessions. ROS: No chest pain.
Past Medical History: ESRD
Medications: Epoetin alfa weekly
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- AV fistula: bruit present

Laboratory Results:
- Potassium: 5.2 mmol/L (Ref: 3.5-5.1)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: End-stage renal disease on hemodialysis (ICD-10: N18.6)

Differential Diagnoses:
- Anemia of CKD

### Plan
1. Continue HD schedule
2. Check iron studies`}]},{name:"Neurology",cases:[{id:"Neurology-1",description:"33yo f c/o lt-sided weakness sudde onset lt arm an...",input:"33yo f c/o lt-sided weakness sudde onset lt arm and leg weakness 1 hour ago. pmh htn, afib on apixaban 5 mg bid vs bp 148/92 hr 96 t 36.7 rr 16 spo2 98 pe neuro: 3/5 strength lue/lle, facial droop labs inr 1.1 imaging ct head: no acute bleed dx ischemic stroke",output:`### Subjective
33-year-old female with left-sided weakness. Sudden onset left arm and leg weakness 1 hour ago. ROS: No headache.
Past Medical History: HTN, Afib
Medications: Apixaban 5 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Neuro: 3/5 strength LUE/LLE, facial droop

Laboratory Results:
- INR: 1.1  (Ref: )

Imaging/Diagnostics:
- CT head: no acute bleed

### Assessment
Primary Diagnosis: Ischemic stroke (ICD-10: I63.9)

Differential Diagnoses:
- ICH
- Seizure

### Plan
1. Stroke protocol and MRI brain
2. Admit to stroke unit`},{id:"Neurology-2",description:"43yo f c/o seizure witnessed tonic-clonic seizure ...",input:"43yo f c/o seizure witnessed tonic-clonic seizure lasting 2 minutes. pmh epilepsy on levetiracetam 500 mg bid vs bp 136/86 hr 88 t 36.7 rr 18 spo2 98 pe neuro: alert, oriented after 30 min labs glucose 98mg/dl imaging ct head: no acute findings dx seizure disorder",output:`### Subjective
43-year-old female with seizure. Witnessed tonic-clonic seizure lasting 2 minutes. ROS: Post-ictal confusion.
Past Medical History: Epilepsy
Medications: Levetiracetam 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Neuro: alert, oriented after 30 min

Laboratory Results:
- Glucose: 98 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- CT head: no acute findings

### Assessment
Primary Diagnosis: Seizure disorder (ICD-10: G40.909)

Differential Diagnoses:
- Syncope

### Plan
1. Check levetiracetam level
2. Continue current dose`},{id:"Neurology-3",description:"82yo f c/o left-sided weakness sudden onse left ar...",input:"82yo f c/o left-sided weakness sudden onse left arm and leg weakness 1 hour ago. pmh htn, afib on apixaban 5 mg bid vs bp 148/92 hr 110 t 37.4 rr 18 spo2 98 pe neuro: 3/5 strength lue/lle facial droop labs inr 1.1 imaging ct head: no acute bleed dx ischemic stroke",output:`### Subjective
82-year-old female with left-sided weakness. Sudden onset left arm and leg weakness 1 hour ago. ROS: No headache.
Past Medical History: HTN, Afib
Medications: Apixaban 5 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Neuro: 3/5 strength LUE/LLE, facial droop

Laboratory Results:
- INR: 1.1  (Ref: )

Imaging/Diagnostics:
- CT head: no acute bleed

### Assessment
Primary Diagnosis: Ischemic stroke (ICD-10: I63.9)

Differential Diagnoses:
- ICH
- Seizure

### Plan
1. Stroke protocol and MRI brain
2. Admit to stroke unit`},{id:"Neurology-4",description:"79yo f c/o seizure witnessed tonic-clonic seizure ...",input:"79yo f c/o seizure witnessed tonic-clonic seizure lasting 2 minutes. pmh epilepsy on levetiracetam 500 mg bid vs bp 118/76 hr 72 t 38.1 rr 16 spo2 95 pe neuro: alert, oriented after 30 min labs glucose 98mg/dl imaging ct head: no acute findings dx seizure disorder",output:`### Subjective
79-year-old female with seizure. Witnessed tonic-clonic seizure lasting 2 minutes. ROS: Post-ictal confusion.
Past Medical History: Epilepsy
Medications: Levetiracetam 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Neuro: alert, oriented after 30 min

Laboratory Results:
- Glucose: 98 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- CT head: no acute findings

### Assessment
Primary Diagnosis: Seizure disorder (ICD-10: G40.909)

Differential Diagnoses:
- Syncope

### Plan
1. Check levetiracetam level
2. Continue current dose`},{id:"Neurology-5",description:"74yo m c/o left-sided weakness sudden onset left a...",input:"74yo m c/o left-sided weakness sudden onset left arm and leg weakness 1 hour ago. pmh htn, afib on apixaban 5 mg bid vs bp 130/84 hr 72 t 36.7 rr 16 spo2 95 pe neuro: 3/5 strength lue/lle, facial droop labs inr 1.1 imaging ct head: no acute bleed dx ischemic stroke",output:`### Subjective
74-year-old male with left-sided weakness. Sudden onset left arm and leg weakness 1 hour ago. ROS: No headache.
Past Medical History: HTN, Afib
Medications: Apixaban 5 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Neuro: 3/5 strength LUE/LLE, facial droop

Laboratory Results:
- INR: 1.1  (Ref: )

Imaging/Diagnostics:
- CT head: no acute bleed

### Assessment
Primary Diagnosis: Ischemic stroke (ICD-10: I63.9)

Differential Diagnoses:
- ICH
- Seizure

### Plan
1. Stroke protocol and MRI brain
2. Admit to stroke unit`},{id:"Neurology-6",description:"76yo f c/o seizure witnessed tonic-clonic seizure ...",input:"76yo f c/o seizure witnessed tonic-clonic seizure lasting 2 minutes. pmh epilepsy on levetiracetam 500 mg bid vs bp 118/76 hr 96 t 38.1 rr 20 spo2 97 pe neuro: alert, oriented after 30 min labs glucose 98mg/d imaging ct head: no acute findings dx seizure disorder",output:`### Subjective
76-year-old female with seizure. Witnessed tonic-clonic seizure lasting 2 minutes. ROS: Post-ictal confusion.
Past Medical History: Epilepsy
Medications: Levetiracetam 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Neuro: alert, oriented after 30 min

Laboratory Results:
- Glucose: 98 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- CT head: no acute findings

### Assessment
Primary Diagnosis: Seizure disorder (ICD-10: G40.909)

Differential Diagnoses:
- Syncope

### Plan
1. Check levetiracetam level
2. Continue current dose`},{id:"Neurology-7",description:"69yo m c/o left-sided weakness sudden onset left a...",input:"69yo m c/o left-sided weakness sudden onset left arm and leg weakness 1 hour ago. pmh htn, afib on apixaban 5 mg bid vs bp 118/76 hr 88 t 36.7 rr 16 spo2 95 pe neuro: 3/5 strength lue/lle, facial droo labs inr 1.1 imaging ct head: no acute bleed dx ischemic stroke",output:`### Subjective
69-year-old male with left-sided weakness. Sudden onset left arm and leg weakness 1 hour ago. ROS: No headache.
Past Medical History: HTN, Afib
Medications: Apixaban 5 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Neuro: 3/5 strength LUE/LLE, facial droop

Laboratory Results:
- INR: 1.1  (Ref: )

Imaging/Diagnostics:
- CT head: no acute bleed

### Assessment
Primary Diagnosis: Ischemic stroke (ICD-10: I63.9)

Differential Diagnoses:
- ICH
- Seizure

### Plan
1. Stroke protocol and MRI brain
2. Admit to stroke unit`},{id:"Neurology-8",description:"43yo f c/o seizure witnesse tonic-clonic seizure l...",input:"43yo f c/o seizure witnesse tonic-clonic seizure lasting 2 minutes. pmh epilepsy on levetiracetam 500 mg bid vs bp 148/92 hr 96 t 36.7 rr 16 spo2 95 pe neuro: alert, oriented after 30 min labs glucose 98mg/dl imaging ct head: no acute findings dx seizure disorder",output:`### Subjective
43-year-old female with seizure. Witnessed tonic-clonic seizure lasting 2 minutes. ROS: Post-ictal confusion.
Past Medical History: Epilepsy
Medications: Levetiracetam 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Neuro: alert, oriented after 30 min

Laboratory Results:
- Glucose: 98 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- CT head: no acute findings

### Assessment
Primary Diagnosis: Seizure disorder (ICD-10: G40.909)

Differential Diagnoses:
- Syncope

### Plan
1. Check levetiracetam level
2. Continue current dose`},{id:"Neurology-9",description:"66yo m c/o lt-sided weakness sudden onset lt arm a...",input:"66yo m c/o lt-sided weakness sudden onset lt arm and leg weakness 1 hour ago. pmh htn, afib on apixaban 5 mg bid vs bp 118/76 hr 96 t 36.7 rr 16 spo2 98 pe neuro: 3/5 strength lue/lle, facial droop labs inr 1.1 imaging ct head: no acute bleed dx ischemic stroke",output:`### Subjective
66-year-old male with left-sided weakness. Sudden onset left arm and leg weakness 1 hour ago. ROS: No headache.
Past Medical History: HTN, Afib
Medications: Apixaban 5 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Neuro: 3/5 strength LUE/LLE, facial droop

Laboratory Results:
- INR: 1.1  (Ref: )

Imaging/Diagnostics:
- CT head: no acute bleed

### Assessment
Primary Diagnosis: Ischemic stroke (ICD-10: I63.9)

Differential Diagnoses:
- ICH
- Seizure

### Plan
1. Stroke protocol and MRI brain
2. Admit to stroke unit`},{id:"Neurology-10",description:"25yo m c/o seizure witnessed tonic-clonic seizure ...",input:"25yo m c/o seizure witnessed tonic-clonic seizure lasting 2 minutes. pmh epilepsy on levetiracetam 500 mg bid vs bp 136/86 hr 72 t 36.7 rr 18 spo2 97 pe neuro: alert, oriented after 30 min labs glucose 98mg/dl imaging ct head: no acute findings dx seizure disorder",output:`### Subjective
25-year-old male with seizure. Witnessed tonic-clonic seizure lasting 2 minutes. ROS: Post-ictal confusion.
Past Medical History: Epilepsy
Medications: Levetiracetam 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Neuro: alert, oriented after 30 min

Laboratory Results:
- Glucose: 98 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- CT head: no acute findings

### Assessment
Primary Diagnosis: Seizure disorder (ICD-10: G40.909)

Differential Diagnoses:
- Syncope

### Plan
1. Check levetiracetam level
2. Continue current dose`},{id:"Neurology-11",description:"66yo m c/o left-sided weakness sudden onset left a...",input:"66yo m c/o left-sided weakness sudden onset left arm and leg weakness 1 hour ago. pmh htn, afib on apixaban 5 mg bid vs bp 130/84 hr 110 t 37.4 rr 20 spo2 97 pe neuro: 3/5 strength lue/lle facial droop labs inr 1.1 imaging ct head: no acute bleed dx ischemic stroke",output:`### Subjective
66-year-old male with left-sided weakness. Sudden onset left arm and leg weakness 1 hour ago. ROS: No headache.
Past Medical History: HTN, Afib
Medications: Apixaban 5 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Neuro: 3/5 strength LUE/LLE, facial droop

Laboratory Results:
- INR: 1.1  (Ref: )

Imaging/Diagnostics:
- CT head: no acute bleed

### Assessment
Primary Diagnosis: Ischemic stroke (ICD-10: I63.9)

Differential Diagnoses:
- ICH
- Seizure

### Plan
1. Stroke protocol and MRI brain
2. Admit to stroke unit`},{id:"Neurology-12",description:"49yo f c/o seizure witnessed tonic-clonic seizure ...",input:"49yo f c/o seizure witnessed tonic-clonic seizure lasting 2 minutes. pmh epilepsy on levetiracetam 500 mg bid vs bp 136/8 hr 110 t 38.1 rr 16 spo2 95 pe neuro: alert, oriented after 30 min labs glucose 98mg/dl imaging ct head: no acute findings dx seizure disorder",output:`### Subjective
49-year-old female with seizure. Witnessed tonic-clonic seizure lasting 2 minutes. ROS: Post-ictal confusion.
Past Medical History: Epilepsy
Medications: Levetiracetam 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Neuro: alert, oriented after 30 min

Laboratory Results:
- Glucose: 98 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- CT head: no acute findings

### Assessment
Primary Diagnosis: Seizure disorder (ICD-10: G40.909)

Differential Diagnoses:
- Syncope

### Plan
1. Check levetiracetam level
2. Continue current dose`},{id:"Neurology-13",description:"44yo m c/o lt-sided weakness sudden onset lt arm a...",input:"44yo m c/o lt-sided weakness sudden onset lt arm and leg weakness 1 hour ago. pmh htn, afib on apixaban 5 mg bid vs bp 130/84 hr 72 t 36.7 rr 20 spo2 98 pe neuro: 3/5 strength lue/lle, facial droop labs inr 1.1 imaging ct head: no acute bleed dx ischemi stroke",output:`### Subjective
44-year-old male with left-sided weakness. Sudden onset left arm and leg weakness 1 hour ago. ROS: No headache.
Past Medical History: HTN, Afib
Medications: Apixaban 5 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Neuro: 3/5 strength LUE/LLE, facial droop

Laboratory Results:
- INR: 1.1  (Ref: )

Imaging/Diagnostics:
- CT head: no acute bleed

### Assessment
Primary Diagnosis: Ischemic stroke (ICD-10: I63.9)

Differential Diagnoses:
- ICH
- Seizure

### Plan
1. Stroke protocol and MRI brain
2. Admit to stroke unit`},{id:"Neurology-14",description:"45yo m c/o seizure witnessed tonic-clonic seizure ...",input:"45yo m c/o seizure witnessed tonic-clonic seizure lasting 2 minutes. pmh epilepsy on levetiracetam 500 mg bid vs bp 148/92 hr 110 t 38.1 rr 20 spo2 97 pe neuro: alert, oriented after 30 min labs glucose 98mg/dl imaging ct head: no acut findings dx seizure disorder",output:`### Subjective
45-year-old male with seizure. Witnessed tonic-clonic seizure lasting 2 minutes. ROS: Post-ictal confusion.
Past Medical History: Epilepsy
Medications: Levetiracetam 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Neuro: alert, oriented after 30 min

Laboratory Results:
- Glucose: 98 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- CT head: no acute findings

### Assessment
Primary Diagnosis: Seizure disorder (ICD-10: G40.909)

Differential Diagnoses:
- Syncope

### Plan
1. Check levetiracetam level
2. Continue current dose`},{id:"Neurology-15",description:"19yo m c/o left-sided weakness sudden onset left a...",input:"19yo m c/o left-sided weakness sudden onset left arm and leg weakness 1 hour ago. pmh htn, afib on apixaban 5 mg bid vs bp 148/92 hr 96 t 36.7 rr 18 spo2 98 pe neuro: 3/5 strengt lue/lle, facial droop labs inr 1.1 imaging ct head: no acute bleed dx ischemic stroke",output:`### Subjective
19-year-old male with left-sided weakness. Sudden onset left arm and leg weakness 1 hour ago. ROS: No headache.
Past Medical History: HTN, Afib
Medications: Apixaban 5 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Neuro: 3/5 strength LUE/LLE, facial droop

Laboratory Results:
- INR: 1.1  (Ref: )

Imaging/Diagnostics:
- CT head: no acute bleed

### Assessment
Primary Diagnosis: Ischemic stroke (ICD-10: I63.9)

Differential Diagnoses:
- ICH
- Seizure

### Plan
1. Stroke protocol and MRI brain
2. Admit to stroke unit`},{id:"Neurology-16",description:"47yo m c/o seizure witnessed tonic-clonic seizure ...",input:"47yo m c/o seizure witnessed tonic-clonic seizure lasting 2 minutes. pmh epilepsy on levetiracetam 500 mg bid vs bp 148/92 hr 72 t 38.1 rr 18 spo2 95 pe neuro: alert, oriented after 30 min labs glucose 98mg/d imaging ct head: no acute findings dx seizure disorder",output:`### Subjective
47-year-old male with seizure. Witnessed tonic-clonic seizure lasting 2 minutes. ROS: Post-ictal confusion.
Past Medical History: Epilepsy
Medications: Levetiracetam 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Neuro: alert, oriented after 30 min

Laboratory Results:
- Glucose: 98 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- CT head: no acute findings

### Assessment
Primary Diagnosis: Seizure disorder (ICD-10: G40.909)

Differential Diagnoses:
- Syncope

### Plan
1. Check levetiracetam level
2. Continue current dose`},{id:"Neurology-17",description:"45yo f c/o left-sided weakness sudden onset left a...",input:"45yo f c/o left-sided weakness sudden onset left arm and leg weakness 1 hour ago. pmh htn, afib on apixaban 5 mg bid vs bp 130/84 hr 110 t 38.1 rr 16 spo2 95 pe neuro: 3/5 strength lue/lle, facial droop labs inr 1.1 imaging ct head: no acute bleed dx ischemic stroke",output:`### Subjective
45-year-old female with left-sided weakness. Sudden onset left arm and leg weakness 1 hour ago. ROS: No headache.
Past Medical History: HTN, Afib
Medications: Apixaban 5 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Neuro: 3/5 strength LUE/LLE, facial droop

Laboratory Results:
- INR: 1.1  (Ref: )

Imaging/Diagnostics:
- CT head: no acute bleed

### Assessment
Primary Diagnosis: Ischemic stroke (ICD-10: I63.9)

Differential Diagnoses:
- ICH
- Seizure

### Plan
1. Stroke protocol and MRI brain
2. Admit to stroke unit`},{id:"Neurology-18",description:"32yo m c/o seizure witnessed tonic-clonic seizure ...",input:"32yo m c/o seizure witnessed tonic-clonic seizure lasting 2 minutes. pmh epilepsy on levetiracetam 500 mg bid vs bp 148/92 hr 96 t 36.7 rr 18 spo2 95 pe neuro: alert, oriented after 30 min labs glucose 98mg/dl imaging ct head: no acute findings dx seizure disorder",output:`### Subjective
32-year-old male with seizure. Witnessed tonic-clonic seizure lasting 2 minutes. ROS: Post-ictal confusion.
Past Medical History: Epilepsy
Medications: Levetiracetam 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Neuro: alert, oriented after 30 min

Laboratory Results:
- Glucose: 98 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- CT head: no acute findings

### Assessment
Primary Diagnosis: Seizure disorder (ICD-10: G40.909)

Differential Diagnoses:
- Syncope

### Plan
1. Check levetiracetam level
2. Continue current dose`},{id:"Neurology-19",description:"51yo f c/o left-sided weakness sudden onset left a...",input:"51yo f c/o left-sided weakness sudden onset left arm and leg weaknes 1 hour ago. pmh htn, afib on apixaban 5 mg bid vs bp 118/76 hr 72 t 37.4 rr 16 spo2 95 pe neuro: 3/5 strength lue/lle, facial droop labs inr 1.1 imaging ct head no acute bleed dx ischemic stroke",output:`### Subjective
51-year-old female with left-sided weakness. Sudden onset left arm and leg weakness 1 hour ago. ROS: No headache.
Past Medical History: HTN, Afib
Medications: Apixaban 5 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Neuro: 3/5 strength LUE/LLE, facial droop

Laboratory Results:
- INR: 1.1  (Ref: )

Imaging/Diagnostics:
- CT head: no acute bleed

### Assessment
Primary Diagnosis: Ischemic stroke (ICD-10: I63.9)

Differential Diagnoses:
- ICH
- Seizure

### Plan
1. Stroke protocol and MRI brain
2. Admit to stroke unit`},{id:"Neurology-20",description:"83yo m c/o seizure witnessed tonic-clonic seizure ...",input:"83yo m c/o seizure witnessed tonic-clonic seizure lasting 2 minutes. pmh epilepsy on levetiracetam 500 mg bid vs bp 118/76 hr 96 t 38.1 rr 20 spo2 98 pe neuro: alert, oriented after 30 min labs glucose 98mg/dl imaging ct head: no acute findings dx seizure disorder",output:`### Subjective
83-year-old male with seizure. Witnessed tonic-clonic seizure lasting 2 minutes. ROS: Post-ictal confusion.
Past Medical History: Epilepsy
Medications: Levetiracetam 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Neuro: alert, oriented after 30 min

Laboratory Results:
- Glucose: 98 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- CT head: no acute findings

### Assessment
Primary Diagnosis: Seizure disorder (ICD-10: G40.909)

Differential Diagnoses:
- Syncope

### Plan
1. Check levetiracetam level
2. Continue current dose`},{id:"Neurology-21",description:"53yo f c/o left-sided weakness sudden onset left a...",input:"53yo f c/o left-sided weakness sudden onset left arm and leg weakness 1 hour ago. pmh htn, afib on apixaban 5 mg bid vs bp 130/84 hr 88 t 37.4 rr 18 spo2 95 pe neuro: 3/5 strength lue/lle, facial droop labs inr 1.1 imaging ct head: no acute bleed dx ischemic stroke",output:`### Subjective
53-year-old female with left-sided weakness. Sudden onset left arm and leg weakness 1 hour ago. ROS: No headache.
Past Medical History: HTN, Afib
Medications: Apixaban 5 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Neuro: 3/5 strength LUE/LLE, facial droop

Laboratory Results:
- INR: 1.1  (Ref: )

Imaging/Diagnostics:
- CT head: no acute bleed

### Assessment
Primary Diagnosis: Ischemic stroke (ICD-10: I63.9)

Differential Diagnoses:
- ICH
- Seizure

### Plan
1. Stroke protocol and MRI brain
2. Admit to stroke unit`},{id:"Neurology-22",description:"29yo m c/o seizure witnessed tonic-clonic seizure ...",input:"29yo m c/o seizure witnessed tonic-clonic seizure lasting 2 minutes pmh epilepsy on levetiracetam 500 mg bid vs bp 130/84 hr 96 t 36.7 rr 20 spo2 97 pe neuro: alert, oriente after 30 min labs glucose 98mg/dl imaging ct head: no acute findings dx seizure disorder",output:`### Subjective
29-year-old male with seizure. Witnessed tonic-clonic seizure lasting 2 minutes. ROS: Post-ictal confusion.
Past Medical History: Epilepsy
Medications: Levetiracetam 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Neuro: alert, oriented after 30 min

Laboratory Results:
- Glucose: 98 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- CT head: no acute findings

### Assessment
Primary Diagnosis: Seizure disorder (ICD-10: G40.909)

Differential Diagnoses:
- Syncope

### Plan
1. Check levetiracetam level
2. Continue current dose`},{id:"Neurology-23",description:"81yo f c/o lt-sided weakness sudden onset lt arm a...",input:"81yo f c/o lt-sided weakness sudden onset lt arm and leg weakness 1 hour ago. pmh htn, afib on apixaban 5 mg bid vs bp 118/76 hr 72 t 38.1 rr 20 spo2 95 pe neuro: 3/5 strength lue/lle, facial droop labs inr 1.1 imaging ct head: no acut bleed dx ischemic stroke",output:`### Subjective
81-year-old female with left-sided weakness. Sudden onset left arm and leg weakness 1 hour ago. ROS: No headache.
Past Medical History: HTN, Afib
Medications: Apixaban 5 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Neuro: 3/5 strength LUE/LLE, facial droop

Laboratory Results:
- INR: 1.1  (Ref: )

Imaging/Diagnostics:
- CT head: no acute bleed

### Assessment
Primary Diagnosis: Ischemic stroke (ICD-10: I63.9)

Differential Diagnoses:
- ICH
- Seizure

### Plan
1. Stroke protocol and MRI brain
2. Admit to stroke unit`},{id:"Neurology-24",description:"75yo f c/o seizure witnessed tonic-clonic seizure ...",input:"75yo f c/o seizure witnessed tonic-clonic seizure lasting 2 minutes. pmh epilepsy on levetiracetam 500 mg bid vs bp 136/8 hr 72 t 36.7 rr 18 spo2 98 pe neuro: alert, oriented after 30 min labs glucose 98mg/dl imaging ct head: no acute findings dx seizure disorder",output:`### Subjective
75-year-old female with seizure. Witnessed tonic-clonic seizure lasting 2 minutes. ROS: Post-ictal confusion.
Past Medical History: Epilepsy
Medications: Levetiracetam 500 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Neuro: alert, oriented after 30 min

Laboratory Results:
- Glucose: 98 mg/dL (Ref: 70-99)

Imaging/Diagnostics:
- CT head: no acute findings

### Assessment
Primary Diagnosis: Seizure disorder (ICD-10: G40.909)

Differential Diagnoses:
- Syncope

### Plan
1. Check levetiracetam level
2. Continue current dose`},{id:"Neurology-25",description:"46yo m c/o lt-sided weakness sudden onse lt arm an...",input:"46yo m c/o lt-sided weakness sudden onse lt arm and leg weakness 1 hour ago. pmh htn, afib on apixaban 5 mg bid vs bp 118/76 hr 96 t 36.7 rr 20 spo2 95 pe neuro: 3/5 strength lue/lle, facial droop labs inr 1.1 imaging ct head: no acute bleed dx ischemic stroke",output:`### Subjective
46-year-old male with left-sided weakness. Sudden onset left arm and leg weakness 1 hour ago. ROS: No headache.
Past Medical History: HTN, Afib
Medications: Apixaban 5 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Neuro: 3/5 strength LUE/LLE, facial droop

Laboratory Results:
- INR: 1.1  (Ref: )

Imaging/Diagnostics:
- CT head: no acute bleed

### Assessment
Primary Diagnosis: Ischemic stroke (ICD-10: I63.9)

Differential Diagnoses:
- ICH
- Seizure

### Plan
1. Stroke protocol and MRI brain
2. Admit to stroke unit`}]},{name:"OB-GYN",cases:[{id:"OB-GYN-1",description:"30yo f c/o labor contractions g2p1 at 39w w/ regul...",input:"30yo f c/o labor contractions g2p1 at 39w w/ regular contractions q3-4 min pmh prior svd on prenatal vitamins vs bp 148/92 hr 88 t 374 rr 16 spo2 95 pe cervix 5 cm/80%/0 station fht 145 labs gbs - imaging none dx normal spontaneous vaginal deliver",output:`### Subjective
30-year-old female with labor contractions. G2P1 at 39w with regular contractions q3-4 min. ROS: No vaginal bleeding.
Past Medical History: Prior SVD
Medications: Prenatal vitamins
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Cervix 5 cm/80%/0 station
- FHT 145

Laboratory Results:
- GBS: Negative  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Normal spontaneous vaginal delivery (ICD-10: O80)

Differential Diagnoses:
- False labor

### Plan
1. Admit to L&D
2. Continuous fetal monitoring
3. Expectant management`},{id:"OB-GYN-2",description:"74yo f c/o pelvic pain lowe abd pain with fever an...",input:"74yo f c/o pelvic pain lowe abd pain with fever and purulen discharge pmh chlamydia in past on none vs bp 130/84 hr 96 t 374 rr 20 spo2 97 pe cervical motion tenderness labs wbc 124k/µl imaging pelvic us: no abscess dx pelvic inflammatory disease",output:`### Subjective
74-year-old female with pelvic pain. Lower abdominal pain with fever and purulent discharge. ROS: No pregnancy.
Past Medical History: Chlamydia in past
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Cervical motion tenderness

Laboratory Results:
- WBC: 12.4 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- Pelvic US: no abscess

### Assessment
Primary Diagnosis: Pelvic inflammatory disease (ICD-10: N73.9)

Differential Diagnoses:
- Ectopic pregnancy

### Plan
1. Ceftriaxone 500 mg IM x1
2. Doxycycline 100 mg BID x14 days
3. Metronidazole 500 mg BID x14 days`},{id:"OB-GYN-3",description:"44yo f c/o pelvic pain and spotting 6 weeks by lmp...",input:"44yo f c/o pelvic pain and spotting 6 weeks by lmp w/ right pelvic pain and light vaginal bleeding pmh none on none vs bp 118/76 hr 110 t 381 rr 18 spo2 98 pe adnexal tenderness on right labs β-hcg 2200miu/ml imaging transvaginal us: no intrauterine pregnancy right adnexal mass dx ectopic pregnancy",output:`### Subjective
44-year-old female with pelvic pain and spotting. 6 weeks by LMP with right pelvic pain and light vaginal bleeding. ROS: No syncope.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Adnexal tenderness on right

Laboratory Results:
- β-hCG: 2200 mIU/mL (Ref: )

Imaging/Diagnostics:
- Transvaginal US: no intrauterine pregnancy, right adnexal mass

### Assessment
Primary Diagnosis: Ectopic pregnancy (ICD-10: O00.9)

Differential Diagnoses:
- Threatened abortion

### Plan
1. OB consult
2. Consider methotrexate if stable
3. NPO`},{id:"OB-GYN-4",description:"40yo f c/o labor contractions g2p1 at 39w with reg...",input:"40yo f c/o labor contractions g2p1 at 39w with regular contractions q3-4 min pmh prior svd on prenatal vitamins vs bp 148/92 hr 110 t 374 rr 18 spo2 98 pe cervix 5 cm/80%/0 station fht 145 labs gbs - imaging none dx normal spontaneous vaginal deliver",output:`### Subjective
40-year-old female with labor contractions. G2P1 at 39w with regular contractions q3-4 min. ROS: No vaginal bleeding.
Past Medical History: Prior SVD
Medications: Prenatal vitamins
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Cervix 5 cm/80%/0 station
- FHT 145

Laboratory Results:
- GBS: Negative  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Normal spontaneous vaginal delivery (ICD-10: O80)

Differential Diagnoses:
- False labor

### Plan
1. Admit to L&D
2. Continuous fetal monitoring
3. Expectant management`},{id:"OB-GYN-5",description:"80yo f c/o pelvic pain lower abd pain with fever a...",input:"80yo f c/o pelvic pain lower abd pain with fever and purulent discharge pmh chlamydia in past on none vs bp 130/84 hr 110 t 374 rr 20 spo2 97 pe cervical motion tenderness labs wbc 124k/µl imaging pelvic us: no abscess dx pelvic inflammator disease",output:`### Subjective
80-year-old female with pelvic pain. Lower abdominal pain with fever and purulent discharge. ROS: No pregnancy.
Past Medical History: Chlamydia in past
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Cervical motion tenderness

Laboratory Results:
- WBC: 12.4 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- Pelvic US: no abscess

### Assessment
Primary Diagnosis: Pelvic inflammatory disease (ICD-10: N73.9)

Differential Diagnoses:
- Ectopic pregnancy

### Plan
1. Ceftriaxone 500 mg IM x1
2. Doxycycline 100 mg BID x14 days
3. Metronidazole 500 mg BID x14 days`},{id:"OB-GYN-6",description:"66yo f c/o pelvic pain and spotting 6 weeks by lmp...",input:"66yo f c/o pelvic pain and spotting 6 weeks by lmp w/ rt pelvic pain and light vaginal bleeding pmh none on none vs bp 148/92 hr 72 t 367 rr 20 spo2 95 pe adnexal tenderness on rt labs β-hcg 2200miu/ml imaging transvaginal us: no intrauterine pregnancy rt adnexal mass dx ectopic pregnancy",output:`### Subjective
66-year-old female with pelvic pain and spotting. 6 weeks by LMP with right pelvic pain and light vaginal bleeding. ROS: No syncope.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Adnexal tenderness on right

Laboratory Results:
- β-hCG: 2200 mIU/mL (Ref: )

Imaging/Diagnostics:
- Transvaginal US: no intrauterine pregnancy, right adnexal mass

### Assessment
Primary Diagnosis: Ectopic pregnancy (ICD-10: O00.9)

Differential Diagnoses:
- Threatened abortion

### Plan
1. OB consult
2. Consider methotrexate if stable
3. NPO`},{id:"OB-GYN-7",description:"51yo f c/o labor contractions g2p1 at 39w with reg...",input:"51yo f c/o labor contractions g2p1 at 39w with regular contractions q3-4 min pmh prior svd on prenatal vitamins vs bp 148/92 hr 72 t 381 rr 16 spo2 97 pe cervix 5 cm/80%/0 station fht 145 labs gbs negative imaging none dx normal spontaneous vaginal delivery",output:`### Subjective
51-year-old female with labor contractions. G2P1 at 39w with regular contractions q3-4 min. ROS: No vaginal bleeding.
Past Medical History: Prior SVD
Medications: Prenatal vitamins
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Cervix 5 cm/80%/0 station
- FHT 145

Laboratory Results:
- GBS: Negative  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Normal spontaneous vaginal delivery (ICD-10: O80)

Differential Diagnoses:
- False labor

### Plan
1. Admit to L&D
2. Continuous fetal monitoring
3. Expectant management`},{id:"OB-GYN-8",description:"69yo f c/o pelvic pain lower abdominal pain with f...",input:"69yo f c/o pelvic pain lower abdominal pain with fever and purulent discharge pmh chlamydia in past on none vs bp 130/84 hr 96 t 374 rr 16 spo2 97 pe cervica motion tenderness labs wbc 124k/µl imaging pelvi us: no abscess dx pelvic inflammatory disease",output:`### Subjective
69-year-old female with pelvic pain. Lower abdominal pain with fever and purulent discharge. ROS: No pregnancy.
Past Medical History: Chlamydia in past
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Cervical motion tenderness

Laboratory Results:
- WBC: 12.4 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- Pelvic US: no abscess

### Assessment
Primary Diagnosis: Pelvic inflammatory disease (ICD-10: N73.9)

Differential Diagnoses:
- Ectopic pregnancy

### Plan
1. Ceftriaxone 500 mg IM x1
2. Doxycycline 100 mg BID x14 days
3. Metronidazole 500 mg BID x14 days`},{id:"OB-GYN-9",description:"28yo f c/o pelvic pain and spotting 6 weeks by lmp...",input:"28yo f c/o pelvic pain and spotting 6 weeks by lmp w/ rt pelvic pain and light vaginal bleeding pmh none on none vs bp 148/92 hr 110 t 381 rr 20 spo2 97 pe adnexal tenderness on rt labs β-hcg 2200miu/ml imaging transvaginal us: no intrauterine pregnancy rt adnexal mass dx ectopic pregnancy",output:`### Subjective
28-year-old female with pelvic pain and spotting. 6 weeks by LMP with right pelvic pain and light vaginal bleeding. ROS: No syncope.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Adnexal tenderness on right

Laboratory Results:
- β-hCG: 2200 mIU/mL (Ref: )

Imaging/Diagnostics:
- Transvaginal US: no intrauterine pregnancy, right adnexal mass

### Assessment
Primary Diagnosis: Ectopic pregnancy (ICD-10: O00.9)

Differential Diagnoses:
- Threatened abortion

### Plan
1. OB consult
2. Consider methotrexate if stable
3. NPO`},{id:"OB-GYN-10",description:"53yo f c/o labor contractions g2p1 at 39w with reg...",input:"53yo f c/o labor contractions g2p1 at 39w with regular contractions q3-4 min pmh prior svd on prenatal vitamins vs bp 136/86 hr 110 t 381 rr 16 spo2 95 pe cervix 5 cm/80%/0 station fht 145 labs gbs negative imaging none dx normal spontaneous vaginal delivery",output:`### Subjective
53-year-old female with labor contractions. G2P1 at 39w with regular contractions q3-4 min. ROS: No vaginal bleeding.
Past Medical History: Prior SVD
Medications: Prenatal vitamins
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Cervix 5 cm/80%/0 station
- FHT 145

Laboratory Results:
- GBS: Negative  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Normal spontaneous vaginal delivery (ICD-10: O80)

Differential Diagnoses:
- False labor

### Plan
1. Admit to L&D
2. Continuous fetal monitoring
3. Expectant management`},{id:"OB-GYN-11",description:"58yo f c/o pelvic pain lower abd pain w/ fever and...",input:"58yo f c/o pelvic pain lower abd pain w/ fever and purulent discharge pmh chlamydia in past on none vs bp 130/84 hr 96 t 367 rr 20 spo2 95 pe cervical motion tenderness labs wbc 124k/µl imaging pelvic us: no abscess dx pelvic inflammator disease",output:`### Subjective
58-year-old female with pelvic pain. Lower abdominal pain with fever and purulent discharge. ROS: No pregnancy.
Past Medical History: Chlamydia in past
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Cervical motion tenderness

Laboratory Results:
- WBC: 12.4 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- Pelvic US: no abscess

### Assessment
Primary Diagnosis: Pelvic inflammatory disease (ICD-10: N73.9)

Differential Diagnoses:
- Ectopic pregnancy

### Plan
1. Ceftriaxone 500 mg IM x1
2. Doxycycline 100 mg BID x14 days
3. Metronidazole 500 mg BID x14 days`},{id:"OB-GYN-12",description:"79yo f c/o pelvic pain and spotting 6 weeks by lmp...",input:"79yo f c/o pelvic pain and spotting 6 weeks by lmp with rt pelvic pain and light vaginal bleeding pmh none on none vs bp 136/86 hr 96 t 381 rr 18 spo2 97 pe adnexal tenderness on rt labs β-hcg 2200miu/ml imaging transvaginal us: no intrauterine pregnancy rt adnexal mass dx ectopic pregnancy",output:`### Subjective
79-year-old female with pelvic pain and spotting. 6 weeks by LMP with right pelvic pain and light vaginal bleeding. ROS: No syncope.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Adnexal tenderness on right

Laboratory Results:
- β-hCG: 2200 mIU/mL (Ref: )

Imaging/Diagnostics:
- Transvaginal US: no intrauterine pregnancy, right adnexal mass

### Assessment
Primary Diagnosis: Ectopic pregnancy (ICD-10: O00.9)

Differential Diagnoses:
- Threatened abortion

### Plan
1. OB consult
2. Consider methotrexate if stable
3. NPO`},{id:"OB-GYN-13",description:"68yo f c/o labor contractions g2p1 at 39w w/ regul...",input:"68yo f c/o labor contractions g2p1 at 39w w/ regular contractions q3-4 min pmh prior svd on prenatal vitamins vs bp 118/7 hr 96 t 381 rr 16 spo2 95 pe cervix 5 cm/80%/0 station fht 145 labs gbs negative imaging none dx normal spontaneous vaginal delivery",output:`### Subjective
68-year-old female with labor contractions. G2P1 at 39w with regular contractions q3-4 min. ROS: No vaginal bleeding.
Past Medical History: Prior SVD
Medications: Prenatal vitamins
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Cervix 5 cm/80%/0 station
- FHT 145

Laboratory Results:
- GBS: Negative  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Normal spontaneous vaginal delivery (ICD-10: O80)

Differential Diagnoses:
- False labor

### Plan
1. Admit to L&D
2. Continuous fetal monitoring
3. Expectant management`},{id:"OB-GYN-14",description:"37yo f c/o pelvic pain lower abd pain with fever a...",input:"37yo f c/o pelvic pain lower abd pain with fever and purulen discharge pmh chlamydia in past on none vs bp 130/84 hr 72 t 367 rr 16 spo2 98 pe cervical motion tenderness labs wbc 124k/µl imaging pelvic us: no abscess dx pelvic inflammatory disease",output:`### Subjective
37-year-old female with pelvic pain. Lower abdominal pain with fever and purulent discharge. ROS: No pregnancy.
Past Medical History: Chlamydia in past
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Cervical motion tenderness

Laboratory Results:
- WBC: 12.4 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- Pelvic US: no abscess

### Assessment
Primary Diagnosis: Pelvic inflammatory disease (ICD-10: N73.9)

Differential Diagnoses:
- Ectopic pregnancy

### Plan
1. Ceftriaxone 500 mg IM x1
2. Doxycycline 100 mg BID x14 days
3. Metronidazole 500 mg BID x14 days`},{id:"OB-GYN-15",description:"73yo f c/o pelvic pain and spotting 6 weeks by lmp...",input:"73yo f c/o pelvic pain and spotting 6 weeks by lmp with rt pelvic pain and light vaginal bleeding pmh none on none vs bp 130/84 hr 72 t 374 rr 16 spo2 95 pe adnexal tenderness on rt labs β-hcg 2200miu/ml imaging transvaginal us: no intrauterine pregnancy rt adnexal mass dx ectopic pregnancy",output:`### Subjective
73-year-old female with pelvic pain and spotting. 6 weeks by LMP with right pelvic pain and light vaginal bleeding. ROS: No syncope.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Adnexal tenderness on right

Laboratory Results:
- β-hCG: 2200 mIU/mL (Ref: )

Imaging/Diagnostics:
- Transvaginal US: no intrauterine pregnancy, right adnexal mass

### Assessment
Primary Diagnosis: Ectopic pregnancy (ICD-10: O00.9)

Differential Diagnoses:
- Threatened abortion

### Plan
1. OB consult
2. Consider methotrexate if stable
3. NPO`},{id:"OB-GYN-16",description:"22yo f c/o labor contractions g2p1 at 39w with reg...",input:"22yo f c/o labor contractions g2p1 at 39w with regular contractions q3-4 min pmh prior svd on prenata vitamins vs bp 118/76 hr 96 t 374 rr 20 spo2 97 pe cervix 5 cm/80%/0 station fht 145 labs gbs negative imaging none dx normal spontaneous vaginal delivery",output:`### Subjective
22-year-old female with labor contractions. G2P1 at 39w with regular contractions q3-4 min. ROS: No vaginal bleeding.
Past Medical History: Prior SVD
Medications: Prenatal vitamins
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Cervix 5 cm/80%/0 station
- FHT 145

Laboratory Results:
- GBS: Negative  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Normal spontaneous vaginal delivery (ICD-10: O80)

Differential Diagnoses:
- False labor

### Plan
1. Admit to L&D
2. Continuous fetal monitoring
3. Expectant management`},{id:"OB-GYN-17",description:"72yo f c/o pelvic pain lower abd pain with fever a...",input:"72yo f c/o pelvic pain lower abd pain with fever and purulent discharge pmh chlamydia in past on none vs bp 136/8 hr 96 t 374 rr 20 spo2 97 pe cervical motion tenderness labs wbc 124k/µl imaging pelvic us: no abscess dx pelvic inflammatory disease",output:`### Subjective
72-year-old female with pelvic pain. Lower abdominal pain with fever and purulent discharge. ROS: No pregnancy.
Past Medical History: Chlamydia in past
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Cervical motion tenderness

Laboratory Results:
- WBC: 12.4 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- Pelvic US: no abscess

### Assessment
Primary Diagnosis: Pelvic inflammatory disease (ICD-10: N73.9)

Differential Diagnoses:
- Ectopic pregnancy

### Plan
1. Ceftriaxone 500 mg IM x1
2. Doxycycline 100 mg BID x14 days
3. Metronidazole 500 mg BID x14 days`},{id:"OB-GYN-18",description:"64yo f c/o pelvic pain and spotting 6 weeks by lmp...",input:"64yo f c/o pelvic pain and spotting 6 weeks by lmp w/ rt pelvic pain and light vaginal bleeding pmh none on none vs bp 148/9 hr 88 t 367 rr 18 spo2 97 pe adnexal tenderness on rt labs β-hcg 2200miu/ml imaging transvaginal us: no intrauterine pregnancy rt adnexal mass dx ectopic pregnancy",output:`### Subjective
64-year-old female with pelvic pain and spotting. 6 weeks by LMP with right pelvic pain and light vaginal bleeding. ROS: No syncope.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Adnexal tenderness on right

Laboratory Results:
- β-hCG: 2200 mIU/mL (Ref: )

Imaging/Diagnostics:
- Transvaginal US: no intrauterine pregnancy, right adnexal mass

### Assessment
Primary Diagnosis: Ectopic pregnancy (ICD-10: O00.9)

Differential Diagnoses:
- Threatened abortion

### Plan
1. OB consult
2. Consider methotrexate if stable
3. NPO`},{id:"OB-GYN-19",description:"51yo f c/o labor contractions g2p1 at 39w w/ regul...",input:"51yo f c/o labor contractions g2p1 at 39w w/ regular contraction q3-4 min pmh prior svd on prenatal vitamins vs bp 118/76 hr 88 t 367 rr 18 spo2 95 pe cervix 5 cm/80%/0 station fht 145 labs gbs - imaging none dx normal spontaneous vaginal delivery",output:`### Subjective
51-year-old female with labor contractions. G2P1 at 39w with regular contractions q3-4 min. ROS: No vaginal bleeding.
Past Medical History: Prior SVD
Medications: Prenatal vitamins
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Cervix 5 cm/80%/0 station
- FHT 145

Laboratory Results:
- GBS: Negative  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Normal spontaneous vaginal delivery (ICD-10: O80)

Differential Diagnoses:
- False labor

### Plan
1. Admit to L&D
2. Continuous fetal monitoring
3. Expectant management`},{id:"OB-GYN-20",description:"28yo f c/o pelvic pain lower abdominal pain w/ fev...",input:"28yo f c/o pelvic pain lower abdominal pain w/ fever and purulen discharge pmh chlamydi in past on none vs bp 148/92 hr 72 t 374 rr 20 spo2 95 pe cervical motion tenderness labs wbc 124k/µl imaging pelvic us: no abscess dx pelvic inflammatory disease",output:`### Subjective
28-year-old female with pelvic pain. Lower abdominal pain with fever and purulent discharge. ROS: No pregnancy.
Past Medical History: Chlamydia in past
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Cervical motion tenderness

Laboratory Results:
- WBC: 12.4 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- Pelvic US: no abscess

### Assessment
Primary Diagnosis: Pelvic inflammatory disease (ICD-10: N73.9)

Differential Diagnoses:
- Ectopic pregnancy

### Plan
1. Ceftriaxone 500 mg IM x1
2. Doxycycline 100 mg BID x14 days
3. Metronidazole 500 mg BID x14 days`},{id:"OB-GYN-21",description:"35yo f c/o pelvic pain and spotting 6 weeks by lmp...",input:"35yo f c/o pelvic pain and spotting 6 weeks by lmp w/ right pelvic pain and light vaginal bleeding pmh none on none vs bp 130/84 hr 110 t 374 rr 18 spo2 97 pe adnexal tenderness on right labs β-hcg 2200miu/ml imaging transvaginal us: no intrauterine pregnancy right adnexal mass dx ectopic pregnancy",output:`### Subjective
35-year-old female with pelvic pain and spotting. 6 weeks by LMP with right pelvic pain and light vaginal bleeding. ROS: No syncope.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Adnexal tenderness on right

Laboratory Results:
- β-hCG: 2200 mIU/mL (Ref: )

Imaging/Diagnostics:
- Transvaginal US: no intrauterine pregnancy, right adnexal mass

### Assessment
Primary Diagnosis: Ectopic pregnancy (ICD-10: O00.9)

Differential Diagnoses:
- Threatened abortion

### Plan
1. OB consult
2. Consider methotrexate if stable
3. NPO`},{id:"OB-GYN-22",description:"41yo f c/o labor contractions g2p1 at 39w w/ regul...",input:"41yo f c/o labor contractions g2p1 at 39w w/ regular contractions q3-4 min pmh prior svd on prenatal vitamins vs bp 148/9 hr 72 t 367 rr 18 spo2 98 pe cervix 5 cm/80%/0 station fht 145 labs gbs - imaging none dx normal spontaneous vaginal delivery",output:`### Subjective
41-year-old female with labor contractions. G2P1 at 39w with regular contractions q3-4 min. ROS: No vaginal bleeding.
Past Medical History: Prior SVD
Medications: Prenatal vitamins
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Cervix 5 cm/80%/0 station
- FHT 145

Laboratory Results:
- GBS: Negative  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Normal spontaneous vaginal delivery (ICD-10: O80)

Differential Diagnoses:
- False labor

### Plan
1. Admit to L&D
2. Continuous fetal monitoring
3. Expectant management`},{id:"OB-GYN-23",description:"38yo f c/o pelvic pain lower abd pain w/ fever and...",input:"38yo f c/o pelvic pain lower abd pain w/ fever and purulent discharge pmh chlamydia in past on none vs bp 136/86 hr 96 t 367 rr 18 spo2 98 pe cervical motion tenderness labs wbc 124k/µl imaging pelvic us: no abscess dx pelvic inflammatory disease",output:`### Subjective
38-year-old female with pelvic pain. Lower abdominal pain with fever and purulent discharge. ROS: No pregnancy.
Past Medical History: Chlamydia in past
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Cervical motion tenderness

Laboratory Results:
- WBC: 12.4 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- Pelvic US: no abscess

### Assessment
Primary Diagnosis: Pelvic inflammatory disease (ICD-10: N73.9)

Differential Diagnoses:
- Ectopic pregnancy

### Plan
1. Ceftriaxone 500 mg IM x1
2. Doxycycline 100 mg BID x14 days
3. Metronidazole 500 mg BID x14 days`},{id:"OB-GYN-24",description:"83yo f c/o pelvi pain and spotting 6 weeks by lmp ...",input:"83yo f c/o pelvi pain and spotting 6 weeks by lmp w/ rt pelvic pain and light vaginal bleeding pmh none on none vs bp 118/76 hr 96 t 367 rr 18 spo2 95 pe adnexal tenderness on rt labs β-hcg 2200miu/ml imaging transvaginal us: no intrauterine pregnancy rt adnexal mass dx ectopic pregnancy",output:`### Subjective
83-year-old female with pelvic pain and spotting. 6 weeks by LMP with right pelvic pain and light vaginal bleeding. ROS: No syncope.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Adnexal tenderness on right

Laboratory Results:
- β-hCG: 2200 mIU/mL (Ref: )

Imaging/Diagnostics:
- Transvaginal US: no intrauterine pregnancy, right adnexal mass

### Assessment
Primary Diagnosis: Ectopic pregnancy (ICD-10: O00.9)

Differential Diagnoses:
- Threatened abortion

### Plan
1. OB consult
2. Consider methotrexate if stable
3. NPO`},{id:"OB-GYN-25",description:"24yo f c/o labor contractions g2p1 at 39w w/ regul...",input:"24yo f c/o labor contractions g2p1 at 39w w/ regular contractions q3-4 min pmh prior svd on prenata vitamins vs bp 130/84 hr 96 t 374 rr 18 spo2 98 pe cervix 5 cm/80%/0 station fht 145 labs gbs negative imaging none dx normal spontaneous vaginal delivery",output:`### Subjective
24-year-old female with labor contractions. G2P1 at 39w with regular contractions q3-4 min. ROS: No vaginal bleeding.
Past Medical History: Prior SVD
Medications: Prenatal vitamins
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Cervix 5 cm/80%/0 station
- FHT 145

Laboratory Results:
- GBS: Negative  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Normal spontaneous vaginal delivery (ICD-10: O80)

Differential Diagnoses:
- False labor

### Plan
1. Admit to L&D
2. Continuous fetal monitoring
3. Expectant management`},{id:"OB-GYN-26",description:"29yo f c/o pelvic pain lower abd pain w/ fever and...",input:"29yo f c/o pelvic pain lower abd pain w/ fever and purulent discharge pmh chlamydia in past on none vs bp 118/76 hr 72 t 367 rr 20 spo2 95 pe cervical motio tenderness labs wbc 124k/µl imaging pelvic us: no abscess dx pelvic inflammatory disease",output:`### Subjective
29-year-old female with pelvic pain. Lower abdominal pain with fever and purulent discharge. ROS: No pregnancy.
Past Medical History: Chlamydia in past
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Cervical motion tenderness

Laboratory Results:
- WBC: 12.4 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- Pelvic US: no abscess

### Assessment
Primary Diagnosis: Pelvic inflammatory disease (ICD-10: N73.9)

Differential Diagnoses:
- Ectopic pregnancy

### Plan
1. Ceftriaxone 500 mg IM x1
2. Doxycycline 100 mg BID x14 days
3. Metronidazole 500 mg BID x14 days`},{id:"OB-GYN-27",description:"53yo f c/o pelvic pain and spotting 6 weeks by lmp...",input:"53yo f c/o pelvic pain and spotting 6 weeks by lmp w/ rt pelvic pain and light vaginal bleeding pmh none on none vs bp 136/86 hr 72 t 381 rr 16 spo2 95 pe adnexal tenderness on rt labs β-hcg 2200miu/ml imaging transvaginal us: no intrauterine pregnancy rt adnexal mass dx ectopic pregnancy",output:`### Subjective
53-year-old female with pelvic pain and spotting. 6 weeks by LMP with right pelvic pain and light vaginal bleeding. ROS: No syncope.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Adnexal tenderness on right

Laboratory Results:
- β-hCG: 2200 mIU/mL (Ref: )

Imaging/Diagnostics:
- Transvaginal US: no intrauterine pregnancy, right adnexal mass

### Assessment
Primary Diagnosis: Ectopic pregnancy (ICD-10: O00.9)

Differential Diagnoses:
- Threatened abortion

### Plan
1. OB consult
2. Consider methotrexate if stable
3. NPO`},{id:"OB-GYN-28",description:"55yo f c/o labor contractions g2p1 at 39w w/ regul...",input:"55yo f c/o labor contractions g2p1 at 39w w/ regular contractions q3-4 min pmh prior svd on prenatal vitamins vs bp 118/76 hr 96 t 367 rr 18 spo2 97 pe cervix 5 cm/80%/0 station fht 145 labs gbs negative imaging none dx normal spontaneous vaginal delivery",output:`### Subjective
55-year-old female with labor contractions. G2P1 at 39w with regular contractions q3-4 min. ROS: No vaginal bleeding.
Past Medical History: Prior SVD
Medications: Prenatal vitamins
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Cervix 5 cm/80%/0 station
- FHT 145

Laboratory Results:
- GBS: Negative  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Normal spontaneous vaginal delivery (ICD-10: O80)

Differential Diagnoses:
- False labor

### Plan
1. Admit to L&D
2. Continuous fetal monitoring
3. Expectant management`},{id:"OB-GYN-29",description:"66yo f c/o pelvic pain lower abdominal pain w/ fev...",input:"66yo f c/o pelvic pain lower abdominal pain w/ fever and purulent discharge pmh chlamydia in past on none vs bp 130/84 hr 110 t 367 rr 18 spo2 98 pe cervical motion tenderness labs wbc 124k/µl imaging pelvic us: no absces dx pelvic inflammatory disease",output:`### Subjective
66-year-old female with pelvic pain. Lower abdominal pain with fever and purulent discharge. ROS: No pregnancy.
Past Medical History: Chlamydia in past
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Cervical motion tenderness

Laboratory Results:
- WBC: 12.4 K/µL (Ref: 4-11)

Imaging/Diagnostics:
- Pelvic US: no abscess

### Assessment
Primary Diagnosis: Pelvic inflammatory disease (ICD-10: N73.9)

Differential Diagnoses:
- Ectopic pregnancy

### Plan
1. Ceftriaxone 500 mg IM x1
2. Doxycycline 100 mg BID x14 days
3. Metronidazole 500 mg BID x14 days`},{id:"OB-GYN-30",description:"23yo f c/o pain patient reports pain but location ...",input:"23yo f c/o pain patient reports pain but location duration and severit are unclear pmh none on no meds vs bp 136/86 hr 72 t 381 rr 18 spo2 97 pe limited exam documented labs none imaging none dx underspecified pain",output:`### Subjective
Patient reports pain but documentation is insufficient to determine location, duration, or severity.

### Objective
Limited exam documented; no vitals or labs provided.

### Assessment
Underspecified pain syndrome (ICD-10: R69). Insufficient data for definitive diagnosis.

### Plan
1. Obtain complete history and focused physical exam.
2. Document vitals and relevant labs/imaging.`}]},{name:"Oncology",cases:[{id:"Oncology-1",description:"27yo m c/o chemo follow-up here for cycle 4 of fol...",input:"27yo m c/o chemo follow-up here for cycle 4 of folfox; mild n/v controlled pmh colon cancer on ondansetron 8 mg prn vs bp 148/92 hr 96 t 381 rr 20 spo2 98 pe general: well-appearing labs anc 21k/µl imaging ct: stable disease dx colon cancer on folfox",output:`### Subjective
27-year-old male with chemo follow-up. Here for cycle 4 of FOLFOX; mild nausea controlled. ROS: No fever.
Past Medical History: Colon cancer
Medications: Ondansetron 8 mg PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: well-appearing

Laboratory Results:
- ANC: 2.1 K/µL (Ref: >1.5)

Imaging/Diagnostics:
- CT: stable disease

### Assessment
Primary Diagnosis: Colon cancer on FOLFOX (ICD-10: C18.9)

Differential Diagnoses:
- Chemo-related nausea

### Plan
1. Proceed with FOLFOX
2. Continue antiemetics`},{id:"Oncology-2",description:"63yo m c/o oncology follow-up post-lumpectomy on a...",input:"63yo m c/o oncology follow-up post-lumpectomy on adjuvant therapy; reports fatigue pmh breast cancer on anastrozole 1 mg daily vs bp 148/92 hr 110 t 374 rr 20 spo2 98 pe breast: surgical scar well-healed labs cbc wnl imaging mammogram no recurrence dx breast cancer on adjuvant therapy",output:`### Subjective
63-year-old male with oncology follow-up. Post-lumpectomy, on adjuvant therapy; reports fatigue. ROS: No new masses.
Past Medical History: Breast cancer
Medications: Anastrozole 1 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Breast: surgical scar well-healed

Laboratory Results:
- CBC: WNL  (Ref: )

Imaging/Diagnostics:
- Mammogram: no recurrence

### Assessment
Primary Diagnosis: Breast cancer on adjuvant therapy (ICD-10: C50.919)

Differential Diagnoses:
- Medication side effects

### Plan
1. Continue anastrozole
2. Follow-up in 3 months`},{id:"Oncology-3",description:"45yo f c/o chem follow-up here for cycle 4 of folf...",input:"45yo f c/o chem follow-up here for cycle 4 of folfox; mild n/v controlled pmh colon cancer on ondansetron 8 mg prn vs bp 136/86 hr 110 t 367 rr 18 spo2 97 pe general: well-appearing labs anc 21k/µl imaging ct: stable disease dx colon cancer on folfox",output:`### Subjective
45-year-old female with chemo follow-up. Here for cycle 4 of FOLFOX; mild nausea controlled. ROS: No fever.
Past Medical History: Colon cancer
Medications: Ondansetron 8 mg PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- General: well-appearing

Laboratory Results:
- ANC: 2.1 K/µL (Ref: >1.5)

Imaging/Diagnostics:
- CT: stable disease

### Assessment
Primary Diagnosis: Colon cancer on FOLFOX (ICD-10: C18.9)

Differential Diagnoses:
- Chemo-related nausea

### Plan
1. Proceed with FOLFOX
2. Continue antiemetics`},{id:"Oncology-4",description:"58yo f c/o oncology follow-up post-lumpectomy on a...",input:"58yo f c/o oncology follow-up post-lumpectomy on adjuvant therapy; reports fatigue pmh breast cancer on anastrozole 1 mg daily vs bp 118/76 hr 88 t 374 rr 16 spo2 98 pe breast: surgical scar well-healed labs cbc wnl imaging mammogram: no recurrence dx breast cancer on adjuvant therapy",output:`### Subjective
58-year-old female with oncology follow-up. Post-lumpectomy, on adjuvant therapy; reports fatigue. ROS: No new masses.
Past Medical History: Breast cancer
Medications: Anastrozole 1 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Breast: surgical scar well-healed

Laboratory Results:
- CBC: WNL  (Ref: )

Imaging/Diagnostics:
- Mammogram: no recurrence

### Assessment
Primary Diagnosis: Breast cancer on adjuvant therapy (ICD-10: C50.919)

Differential Diagnoses:
- Medication side effects

### Plan
1. Continue anastrozole
2. Follow-up in 3 months`},{id:"Oncology-5",description:"39yo m c/o chemo follow-up here for cycle 4 of fol...",input:"39yo m c/o chemo follow-up here for cycle 4 of folfox; mild nause controlled pmh colon cancer on ondansetron 8 mg prn vs bp 148/92 hr 88 t 374 rr 16 spo2 98 pe general: well-appearing labs anc 21k/µl imaging ct: stable disease dx colon cancer on folfox",output:`### Subjective
39-year-old male with chemo follow-up. Here for cycle 4 of FOLFOX; mild nausea controlled. ROS: No fever.
Past Medical History: Colon cancer
Medications: Ondansetron 8 mg PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: well-appearing

Laboratory Results:
- ANC: 2.1 K/µL (Ref: >1.5)

Imaging/Diagnostics:
- CT: stable disease

### Assessment
Primary Diagnosis: Colon cancer on FOLFOX (ICD-10: C18.9)

Differential Diagnoses:
- Chemo-related nausea

### Plan
1. Proceed with FOLFOX
2. Continue antiemetics`},{id:"Oncology-6",description:"84yo m c/o oncology follow-up post-lumpectomy on a...",input:"84yo m c/o oncology follow-up post-lumpectomy on adjuvant therapy; reports fatigue pmh breast cancer on anastrozole 1 mg daily vs bp 148/9 hr 88 t 367 rr 20 spo2 97 pe breast: surgical scar well-healed labs cbc wnl imaging mammogram: no recurrence dx breast cancer on adjuvant therapy",output:`### Subjective
84-year-old male with oncology follow-up. Post-lumpectomy, on adjuvant therapy; reports fatigue. ROS: No new masses.
Past Medical History: Breast cancer
Medications: Anastrozole 1 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Breast: surgical scar well-healed

Laboratory Results:
- CBC: WNL  (Ref: )

Imaging/Diagnostics:
- Mammogram: no recurrence

### Assessment
Primary Diagnosis: Breast cancer on adjuvant therapy (ICD-10: C50.919)

Differential Diagnoses:
- Medication side effects

### Plan
1. Continue anastrozole
2. Follow-up in 3 months`},{id:"Oncology-7",description:"62yo f c/o chemo follow-up here for cycle 4 of fol...",input:"62yo f c/o chemo follow-up here for cycle 4 of folfox; mild n/v controlled pmh colon cancer on ondansetron 8 mg prn vs bp 136/86 hr 96 t 374 rr 16 spo2 98 pe general: well-appearing labs anc 21k/µl imaging ct: stable diseas dx colon cancer on folfox",output:`### Subjective
62-year-old female with chemo follow-up. Here for cycle 4 of FOLFOX; mild nausea controlled. ROS: No fever.
Past Medical History: Colon cancer
Medications: Ondansetron 8 mg PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: well-appearing

Laboratory Results:
- ANC: 2.1 K/µL (Ref: >1.5)

Imaging/Diagnostics:
- CT: stable disease

### Assessment
Primary Diagnosis: Colon cancer on FOLFOX (ICD-10: C18.9)

Differential Diagnoses:
- Chemo-related nausea

### Plan
1. Proceed with FOLFOX
2. Continue antiemetics`},{id:"Oncology-8",description:"25yo m c/o oncology follow-u post-lumpectomy on ad...",input:"25yo m c/o oncology follow-u post-lumpectomy on adjuvant therapy; reports fatigue pmh breas cancer on anastrozole 1 mg daily vs bp 118/76 hr 88 t 367 rr 20 spo2 97 pe breast: surgical scar well-healed labs cbc wnl imaging mammogram: no recurrence dx breast cancer on adjuvant therapy",output:`### Subjective
25-year-old male with oncology follow-up. Post-lumpectomy, on adjuvant therapy; reports fatigue. ROS: No new masses.
Past Medical History: Breast cancer
Medications: Anastrozole 1 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Breast: surgical scar well-healed

Laboratory Results:
- CBC: WNL  (Ref: )

Imaging/Diagnostics:
- Mammogram: no recurrence

### Assessment
Primary Diagnosis: Breast cancer on adjuvant therapy (ICD-10: C50.919)

Differential Diagnoses:
- Medication side effects

### Plan
1. Continue anastrozole
2. Follow-up in 3 months`},{id:"Oncology-9",description:"59yo m c/o chemo follow-up here for cycle 4 of fol...",input:"59yo m c/o chemo follow-up here for cycle 4 of folfox; mild n/v controlled pmh colon cancer on ondansetron 8 mg prn vs bp 136/86 hr 96 t 381 rr 18 spo2 95 pe general: well-appearing labs anc 21k/µ imaging ct: stable disease dx colon cancer on folfox",output:`### Subjective
59-year-old male with chemo follow-up. Here for cycle 4 of FOLFOX; mild nausea controlled. ROS: No fever.
Past Medical History: Colon cancer
Medications: Ondansetron 8 mg PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- General: well-appearing

Laboratory Results:
- ANC: 2.1 K/µL (Ref: >1.5)

Imaging/Diagnostics:
- CT: stable disease

### Assessment
Primary Diagnosis: Colon cancer on FOLFOX (ICD-10: C18.9)

Differential Diagnoses:
- Chemo-related nausea

### Plan
1. Proceed with FOLFOX
2. Continue antiemetics`},{id:"Oncology-10",description:"51yo f c/o oncology follow-up post-lumpectomy on a...",input:"51yo f c/o oncology follow-up post-lumpectomy on adjuvant therapy; reports fatigue pmh breast cancer on anastrozole 1 mg daily vs bp 148/92 hr 110 t 374 rr 18 spo2 98 pe breast: surgical scar well-healed labs cbc wnl imaging mammogram: no recurrence dx breast cancer on adjuvant therapy",output:`### Subjective
51-year-old female with oncology follow-up. Post-lumpectomy, on adjuvant therapy; reports fatigue. ROS: No new masses.
Past Medical History: Breast cancer
Medications: Anastrozole 1 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Breast: surgical scar well-healed

Laboratory Results:
- CBC: WNL  (Ref: )

Imaging/Diagnostics:
- Mammogram: no recurrence

### Assessment
Primary Diagnosis: Breast cancer on adjuvant therapy (ICD-10: C50.919)

Differential Diagnoses:
- Medication side effects

### Plan
1. Continue anastrozole
2. Follow-up in 3 months`},{id:"Oncology-11",description:"41yo m c/o chemo follow-up here for cycle 4 of fol...",input:"41yo m c/o chemo follow-up here for cycle 4 of folfox mild n/v controlled pmh colon cancer on ondansetron 8 mg prn vs bp 118/76 hr 110 t 374 rr 16 spo2 98 pe general: well-appearing labs anc 21k/µl imaging ct: stable disease dx colon cancer on folfox",output:`### Subjective
41-year-old male with chemo follow-up. Here for cycle 4 of FOLFOX; mild nausea controlled. ROS: No fever.
Past Medical History: Colon cancer
Medications: Ondansetron 8 mg PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: well-appearing

Laboratory Results:
- ANC: 2.1 K/µL (Ref: >1.5)

Imaging/Diagnostics:
- CT: stable disease

### Assessment
Primary Diagnosis: Colon cancer on FOLFOX (ICD-10: C18.9)

Differential Diagnoses:
- Chemo-related nausea

### Plan
1. Proceed with FOLFOX
2. Continue antiemetics`},{id:"Oncology-12",description:"72yo m c/o oncology follow-up post-lumpectomy on a...",input:"72yo m c/o oncology follow-up post-lumpectomy on adjuvant therapy; reports fatigue pmh breast cancer on anastrozol 1 mg daily vs bp 136/86 hr 96 t 381 rr 18 spo2 95 pe breast surgical scar well-healed labs cbc wnl imaging mammogram: no recurrence dx breast cancer on adjuvant therapy",output:`### Subjective
72-year-old male with oncology follow-up. Post-lumpectomy, on adjuvant therapy; reports fatigue. ROS: No new masses.
Past Medical History: Breast cancer
Medications: Anastrozole 1 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Breast: surgical scar well-healed

Laboratory Results:
- CBC: WNL  (Ref: )

Imaging/Diagnostics:
- Mammogram: no recurrence

### Assessment
Primary Diagnosis: Breast cancer on adjuvant therapy (ICD-10: C50.919)

Differential Diagnoses:
- Medication side effects

### Plan
1. Continue anastrozole
2. Follow-up in 3 months`},{id:"Oncology-13",description:"20yo f c/o chemo follow-up here for cycle 4 of fol...",input:"20yo f c/o chemo follow-up here for cycle 4 of folfox; mild nause controlled pmh colon cancer on ondansetron 8 mg prn vs bp 136/86 hr 88 t 381 rr 18 spo2 97 pe general: well-appearing labs anc 21k/µ imaging ct: stable disease dx colon cancer on folfox",output:`### Subjective
20-year-old female with chemo follow-up. Here for cycle 4 of FOLFOX; mild nausea controlled. ROS: No fever.
Past Medical History: Colon cancer
Medications: Ondansetron 8 mg PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- General: well-appearing

Laboratory Results:
- ANC: 2.1 K/µL (Ref: >1.5)

Imaging/Diagnostics:
- CT: stable disease

### Assessment
Primary Diagnosis: Colon cancer on FOLFOX (ICD-10: C18.9)

Differential Diagnoses:
- Chemo-related nausea

### Plan
1. Proceed with FOLFOX
2. Continue antiemetics`},{id:"Oncology-14",description:"55yo m c/o oncology follow-up post-lumpectomy on a...",input:"55yo m c/o oncology follow-up post-lumpectomy on adjuvant therapy; reports fatigue pmh breast cancer on anastrozole 1 mg daily vs bp 136/86 hr 88 t 374 rr 18 spo2 95 pe breast: surgical scar well-healed labs cbc wnl imaging mammogram: no recurrence dx breast cancer on adjuvant therapy",output:`### Subjective
55-year-old male with oncology follow-up. Post-lumpectomy, on adjuvant therapy; reports fatigue. ROS: No new masses.
Past Medical History: Breast cancer
Medications: Anastrozole 1 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Breast: surgical scar well-healed

Laboratory Results:
- CBC: WNL  (Ref: )

Imaging/Diagnostics:
- Mammogram: no recurrence

### Assessment
Primary Diagnosis: Breast cancer on adjuvant therapy (ICD-10: C50.919)

Differential Diagnoses:
- Medication side effects

### Plan
1. Continue anastrozole
2. Follow-up in 3 months`},{id:"Oncology-15",description:"58yo f c/o chemo follow-up here for cycle 4 of fol...",input:"58yo f c/o chemo follow-up here for cycle 4 of folfox; mild n/v controlled pmh colon cancer on ondansetron 8 mg prn vs bp 136/86 hr 96 t 374 rr 16 spo2 98 pe general: well-appearing labs anc 21k/µl imaging ct: stable disease dx colo cancer on folfox",output:`### Subjective
58-year-old female with chemo follow-up. Here for cycle 4 of FOLFOX; mild nausea controlled. ROS: No fever.
Past Medical History: Colon cancer
Medications: Ondansetron 8 mg PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- General: well-appearing

Laboratory Results:
- ANC: 2.1 K/µL (Ref: >1.5)

Imaging/Diagnostics:
- CT: stable disease

### Assessment
Primary Diagnosis: Colon cancer on FOLFOX (ICD-10: C18.9)

Differential Diagnoses:
- Chemo-related nausea

### Plan
1. Proceed with FOLFOX
2. Continue antiemetics`}]},{name:"Orthopedics",cases:[{id:"Orthopedics-1",description:"56yo f c/o wrist pain after fall foosh injury with...",input:"56yo f c/o wrist pain after fall foosh injury with swelling & deformity pmh none on none vs bp 148/92 hr 96 t 374 rr 16 spo2 97 pe wrist: deformity tender neuro intact distally labs none imaging x-ray: displaced distal radius fx dx dista radius fx",output:`### Subjective
56-year-old female with wrist pain after fall. FOOSH injury with swelling and deformity. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Wrist: deformity, tender, neuro intact distally

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: displaced distal radius fracture

### Assessment
Primary Diagnosis: Distal radius fracture (ICD-10: S52.501A)

Differential Diagnoses:
- Scaphoid fracture

### Plan
1. Closed reduction and splint
2. Ortho follow-up in 1 week
3. NWB to affected arm`},{id:"Orthopedics-2",description:"21yo m c/o ankle pain inversion injury during bask...",input:"21yo m c/o ankle pain inversion injury during basketball w/ swelling pmh none on none vs bp 130/84 hr 88 t 374 rr 20 spo2 95 pe ankle: lateral tenderness rom limite labs none imaging x-ray: no fracture dx ankle sprain right",output:`### Subjective
21-year-old male with ankle pain. Inversion injury during basketball with swelling. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Ankle: lateral tenderness, ROM limited

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: no fracture

### Assessment
Primary Diagnosis: Ankle sprain, right (ICD-10: S93.401A)

Differential Diagnoses:
- Occult fracture

### Plan
1. RICE and ibuprofen 400 mg q6h PRN
2. PWB with brace`},{id:"Orthopedics-3",description:"80yo m c/o wrist pain after fall foosh injury w/ s...",input:"80yo m c/o wrist pain after fall foosh injury w/ swelling & deformity pmh none on none vs bp 118/76 hr 110 t 381 rr 18 spo2 95 pe wrist: deformit tender neuro intact distally labs none imaging x-ray: displaced distal radius fx dx distal radius fx",output:`### Subjective
80-year-old male with wrist pain after fall. FOOSH injury with swelling and deformity. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Wrist: deformity, tender, neuro intact distally

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: displaced distal radius fracture

### Assessment
Primary Diagnosis: Distal radius fracture (ICD-10: S52.501A)

Differential Diagnoses:
- Scaphoid fracture

### Plan
1. Closed reduction and splint
2. Ortho follow-up in 1 week
3. NWB to affected arm`},{id:"Orthopedics-4",description:"38yo m c/o ankle pain inversion injury during bask...",input:"38yo m c/o ankle pain inversion injury during basketball with swelling pmh none on none vs bp 130/84 hr 110 t 367 rr 16 spo2 97 pe ankle: lateral tenderness rom limited labs none imaging x-ray: no fracture dx ankle sprain rt",output:`### Subjective
38-year-old male with ankle pain. Inversion injury during basketball with swelling. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Ankle: lateral tenderness, ROM limited

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: no fracture

### Assessment
Primary Diagnosis: Ankle sprain, right (ICD-10: S93.401A)

Differential Diagnoses:
- Occult fracture

### Plan
1. RICE and ibuprofen 400 mg q6h PRN
2. PWB with brace`},{id:"Orthopedics-5",description:"31yo m c/o wrist pain afte fall foosh injury w/ sw...",input:"31yo m c/o wrist pain afte fall foosh injury w/ swelling & deformity pmh none on none vs bp 148/92 hr 72 t 367 rr 20 spo2 95 pe wrist: deformity tender neuro intact distally labs none imaging x-ray: displaced distal radius fracture dx distal radius fracture",output:`### Subjective
31-year-old male with wrist pain after fall. FOOSH injury with swelling and deformity. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Wrist: deformity, tender, neuro intact distally

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: displaced distal radius fracture

### Assessment
Primary Diagnosis: Distal radius fracture (ICD-10: S52.501A)

Differential Diagnoses:
- Scaphoid fracture

### Plan
1. Closed reduction and splint
2. Ortho follow-up in 1 week
3. NWB to affected arm`},{id:"Orthopedics-6",description:"71yo f c/o ankle pain inversion injury during bask...",input:"71yo f c/o ankle pain inversion injury during basketball w/ swelling pmh none on none vs bp 118/76 hr 110 t 367 rr 16 spo2 98 pe ankle: lateral tenderness rom limited labs none imaging x-ray: no fx dx ankle sprain right",output:`### Subjective
71-year-old female with ankle pain. Inversion injury during basketball with swelling. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Ankle: lateral tenderness, ROM limited

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: no fracture

### Assessment
Primary Diagnosis: Ankle sprain, right (ICD-10: S93.401A)

Differential Diagnoses:
- Occult fracture

### Plan
1. RICE and ibuprofen 400 mg q6h PRN
2. PWB with brace`},{id:"Orthopedics-7",description:"56yo f c/o wrist pain after fall foosh injury w/ s...",input:"56yo f c/o wrist pain after fall foosh injury w/ swelling & deformity pmh none on none vs bp 130/84 hr 96 t 381 rr 20 spo2 97 pe wrist: deformity tender neuro intact distall labs none imagin x-ray: displaced distal radius fx dx distal radius fx",output:`### Subjective
56-year-old female with wrist pain after fall. FOOSH injury with swelling and deformity. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Wrist: deformity, tender, neuro intact distally

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: displaced distal radius fracture

### Assessment
Primary Diagnosis: Distal radius fracture (ICD-10: S52.501A)

Differential Diagnoses:
- Scaphoid fracture

### Plan
1. Closed reduction and splint
2. Ortho follow-up in 1 week
3. NWB to affected arm`},{id:"Orthopedics-8",description:"56yo f c/o ankle pain inversion injury during bask...",input:"56yo f c/o ankle pain inversion injury during basketball w/ swelling pmh none on none vs bp 118/76 hr 96 t 374 rr 20 spo2 95 pe ankle: lateral tendernes rom limited labs none imaging x-ray: no fx dx ankle sprain rt",output:`### Subjective
56-year-old female with ankle pain. Inversion injury during basketball with swelling. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Ankle: lateral tenderness, ROM limited

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: no fracture

### Assessment
Primary Diagnosis: Ankle sprain, right (ICD-10: S93.401A)

Differential Diagnoses:
- Occult fracture

### Plan
1. RICE and ibuprofen 400 mg q6h PRN
2. PWB with brace`},{id:"Orthopedics-9",description:"72yo f c/o wrist pain after fall foosh injury w/ s...",input:"72yo f c/o wrist pain after fall foosh injury w/ swelling & deformity pmh none on none vs bp 118/76 hr 72 t 374 rr 16 spo2 98 pe wrist: deformity tender neuro intact distally labs none imaging x-ray: displaced distal radius fx dx distal radius fx",output:`### Subjective
72-year-old female with wrist pain after fall. FOOSH injury with swelling and deformity. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Wrist: deformity, tender, neuro intact distally

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: displaced distal radius fracture

### Assessment
Primary Diagnosis: Distal radius fracture (ICD-10: S52.501A)

Differential Diagnoses:
- Scaphoid fracture

### Plan
1. Closed reduction and splint
2. Ortho follow-up in 1 week
3. NWB to affected arm`},{id:"Orthopedics-10",description:"33yo f c/o ankle pain inversion injury during bask...",input:"33yo f c/o ankle pain inversion injury during basketba w/ swelling pmh none on none vs bp 118/76 hr 96 t 381 rr 18 spo2 97 pe ankle: lateral tenderness rom limited labs none imaging x-ray: no fx dx ankle sprain rt",output:`### Subjective
33-year-old female with ankle pain. Inversion injury during basketball with swelling. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Ankle: lateral tenderness, ROM limited

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: no fracture

### Assessment
Primary Diagnosis: Ankle sprain, right (ICD-10: S93.401A)

Differential Diagnoses:
- Occult fracture

### Plan
1. RICE and ibuprofen 400 mg q6h PRN
2. PWB with brace`},{id:"Orthopedics-11",description:"76yo f c/o wrist pain after fall foosh injury with...",input:"76yo f c/o wrist pain after fall foosh injury with swelling & deformity pmh none on none vs bp 130/84 hr 96 t 367 rr 20 spo2 95 pe wrist: deformity tender neuro intact distall labs none imaging x-ray: displaced distal radius fractur dx distal radius fracture",output:`### Subjective
76-year-old female with wrist pain after fall. FOOSH injury with swelling and deformity. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Wrist: deformity, tender, neuro intact distally

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: displaced distal radius fracture

### Assessment
Primary Diagnosis: Distal radius fracture (ICD-10: S52.501A)

Differential Diagnoses:
- Scaphoid fracture

### Plan
1. Closed reduction and splint
2. Ortho follow-up in 1 week
3. NWB to affected arm`},{id:"Orthopedics-12",description:"20yo f c/o ankle pain inversion injury during bask...",input:"20yo f c/o ankle pain inversion injury during basketball w/ swelling pmh none on none vs bp 118/76 hr 110 t 367 rr 20 spo2 95 pe ankle: lateral tenderness rom limited labs none imaging x-ray: no fx dx ankle sprain right",output:`### Subjective
20-year-old female with ankle pain. Inversion injury during basketball with swelling. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Ankle: lateral tenderness, ROM limited

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: no fracture

### Assessment
Primary Diagnosis: Ankle sprain, right (ICD-10: S93.401A)

Differential Diagnoses:
- Occult fracture

### Plan
1. RICE and ibuprofen 400 mg q6h PRN
2. PWB with brace`},{id:"Orthopedics-13",description:"33yo m c/o wrist pain after fall foosh injury w/ s...",input:"33yo m c/o wrist pain after fall foosh injury w/ swelling & deformity pmh none on none vs bp 118/76 hr 88 t 374 rr 20 spo2 95 pe wrist: deformity tender neuro intact distally labs none imaging x-ray: displaced distal radius fracture dx distal radius fracture",output:`### Subjective
33-year-old male with wrist pain after fall. FOOSH injury with swelling and deformity. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Wrist: deformity, tender, neuro intact distally

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: displaced distal radius fracture

### Assessment
Primary Diagnosis: Distal radius fracture (ICD-10: S52.501A)

Differential Diagnoses:
- Scaphoid fracture

### Plan
1. Closed reduction and splint
2. Ortho follow-up in 1 week
3. NWB to affected arm`},{id:"Orthopedics-14",description:"18yo f c/o ankle pain inversion injury during bask...",input:"18yo f c/o ankle pain inversion injury during basketball w/ swelling pmh none on none vs bp 130/84 hr 72 t 367 rr 18 spo2 98 pe ankle: lateral tenderness rom limited labs none imaging x-ray: no fx dx ankle sprain rt",output:`### Subjective
18-year-old female with ankle pain. Inversion injury during basketball with swelling. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Ankle: lateral tenderness, ROM limited

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: no fracture

### Assessment
Primary Diagnosis: Ankle sprain, right (ICD-10: S93.401A)

Differential Diagnoses:
- Occult fracture

### Plan
1. RICE and ibuprofen 400 mg q6h PRN
2. PWB with brace`},{id:"Orthopedics-15",description:"76yo f c/o wrist pain after fall foosh injury w/ s...",input:"76yo f c/o wrist pain after fall foosh injury w/ swelling & deformity pmh none on none vs bp 118/76 hr 72 t 381 rr 18 spo2 97 pe wrist: deformity tender neuro intact distally labs none imaging x-ray: displaced distal radius fx dx distal radius fx",output:`### Subjective
76-year-old female with wrist pain after fall. FOOSH injury with swelling and deformity. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Wrist: deformity, tender, neuro intact distally

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: displaced distal radius fracture

### Assessment
Primary Diagnosis: Distal radius fracture (ICD-10: S52.501A)

Differential Diagnoses:
- Scaphoid fracture

### Plan
1. Closed reduction and splint
2. Ortho follow-up in 1 week
3. NWB to affected arm`},{id:"Orthopedics-16",description:"63yo m c/o ankle pain inversion injury during bask...",input:"63yo m c/o ankle pain inversion injury during basketball w/ swelling pmh none on none vs bp 136/86 hr 88 t 367 rr 18 spo2 98 pe ankle: lateral tenderness rom limited labs none imagin x-ray: no fracture dx ankle sprain rt",output:`### Subjective
63-year-old male with ankle pain. Inversion injury during basketball with swelling. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Ankle: lateral tenderness, ROM limited

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: no fracture

### Assessment
Primary Diagnosis: Ankle sprain, right (ICD-10: S93.401A)

Differential Diagnoses:
- Occult fracture

### Plan
1. RICE and ibuprofen 400 mg q6h PRN
2. PWB with brace`},{id:"Orthopedics-17",description:"76yo m c/o wrist pain after fall foosh injury with...",input:"76yo m c/o wrist pain after fall foosh injury with swelling & deformity pmh none on none vs bp 130/84 hr 96 t 374 rr 18 spo2 98 pe wrist: deformity tender neuro intact distally labs none imagin x-ray: displaced distal radius fx dx distal radius fx",output:`### Subjective
76-year-old male with wrist pain after fall. FOOSH injury with swelling and deformity. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Wrist: deformity, tender, neuro intact distally

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: displaced distal radius fracture

### Assessment
Primary Diagnosis: Distal radius fracture (ICD-10: S52.501A)

Differential Diagnoses:
- Scaphoid fracture

### Plan
1. Closed reduction and splint
2. Ortho follow-up in 1 week
3. NWB to affected arm`},{id:"Orthopedics-18",description:"60yo f c/o ankle pain inversion injury during bask...",input:"60yo f c/o ankle pain inversion injury during basketball with swelling pmh none on none vs bp 118/76 hr 110 t 367 rr 18 spo2 97 pe ankle: lateral tenderness rom limited labs none imaging x-ray: no fx dx ankl sprain right",output:`### Subjective
60-year-old female with ankle pain. Inversion injury during basketball with swelling. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Ankle: lateral tenderness, ROM limited

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: no fracture

### Assessment
Primary Diagnosis: Ankle sprain, right (ICD-10: S93.401A)

Differential Diagnoses:
- Occult fracture

### Plan
1. RICE and ibuprofen 400 mg q6h PRN
2. PWB with brace`},{id:"Orthopedics-19",description:"19yo f c/o wrist pain after fall foosh injury w/ s...",input:"19yo f c/o wrist pain after fall foosh injury w/ swelling & deformity pmh none on none vs bp 148/92 hr 110 t 381 rr 20 spo2 97 pe wrist: deformity tender neuro intact distall labs none imaging x-ray: displaced distal radius fx dx distal radius fx",output:`### Subjective
19-year-old female with wrist pain after fall. FOOSH injury with swelling and deformity. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Wrist: deformity, tender, neuro intact distally

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: displaced distal radius fracture

### Assessment
Primary Diagnosis: Distal radius fracture (ICD-10: S52.501A)

Differential Diagnoses:
- Scaphoid fracture

### Plan
1. Closed reduction and splint
2. Ortho follow-up in 1 week
3. NWB to affected arm`},{id:"Orthopedics-20",description:"57yo f c/o ankle pain inversion injury during bask...",input:"57yo f c/o ankle pain inversion injury during basketball w/ swelling pmh none on none vs bp 148/92 hr 72 t 381 rr 20 spo2 95 pe ankle: lateral tenderness rom limited labs none imaging x-ray: no fx dx ankle sprai rt",output:`### Subjective
57-year-old female with ankle pain. Inversion injury during basketball with swelling. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Ankle: lateral tenderness, ROM limited

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: no fracture

### Assessment
Primary Diagnosis: Ankle sprain, right (ICD-10: S93.401A)

Differential Diagnoses:
- Occult fracture

### Plan
1. RICE and ibuprofen 400 mg q6h PRN
2. PWB with brace`},{id:"Orthopedics-21",description:"47yo f c/o wrist pain after fall foosh injur with ...",input:"47yo f c/o wrist pain after fall foosh injur with swelling & deformity pmh none on none vs bp 118/76 hr 110 t 381 rr 18 spo2 95 pe wrist: deformity tender neuro intact distally labs none imaging x-ray: displaced distal radius fx dx distal radius fx",output:`### Subjective
47-year-old female with wrist pain after fall. FOOSH injury with swelling and deformity. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Wrist: deformity, tender, neuro intact distally

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: displaced distal radius fracture

### Assessment
Primary Diagnosis: Distal radius fracture (ICD-10: S52.501A)

Differential Diagnoses:
- Scaphoid fracture

### Plan
1. Closed reduction and splint
2. Ortho follow-up in 1 week
3. NWB to affected arm`},{id:"Orthopedics-22",description:"32yo f c/o ankle pain inversion injury during bask...",input:"32yo f c/o ankle pain inversion injury during basketball w/ swelling pmh none on none vs bp 136/86 hr 110 t 367 rr 18 spo2 98 pe ankle: lateral tenderness rom limited labs none imaging x-ray: no fractur dx ankle sprain rt",output:`### Subjective
32-year-old female with ankle pain. Inversion injury during basketball with swelling. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Ankle: lateral tenderness, ROM limited

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: no fracture

### Assessment
Primary Diagnosis: Ankle sprain, right (ICD-10: S93.401A)

Differential Diagnoses:
- Occult fracture

### Plan
1. RICE and ibuprofen 400 mg q6h PRN
2. PWB with brace`},{id:"Orthopedics-23",description:"44yo m c/o wrist pain after fall foosh injury w/ s...",input:"44yo m c/o wrist pain after fall foosh injury w/ swelling & deformity pmh none on none vs bp 130/84 hr 88 t 381 rr 18 spo2 95 pe wrist: deformity tender neuro intact distally labs none imaging x-ray: displaced distal radius fx dx distal radius fx",output:`### Subjective
44-year-old male with wrist pain after fall. FOOSH injury with swelling and deformity. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Wrist: deformity, tender, neuro intact distally

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: displaced distal radius fracture

### Assessment
Primary Diagnosis: Distal radius fracture (ICD-10: S52.501A)

Differential Diagnoses:
- Scaphoid fracture

### Plan
1. Closed reduction and splint
2. Ortho follow-up in 1 week
3. NWB to affected arm`},{id:"Orthopedics-24",description:"47yo m c/o ankle pain inversion injury during bask...",input:"47yo m c/o ankle pain inversion injury during basketbal with swelling pmh none on none vs bp 148/92 hr 110 t 374 rr 18 spo2 98 pe ankle: lateral tenderness rom limited labs none imagin x-ray: no fx dx ankle sprain rt",output:`### Subjective
47-year-old male with ankle pain. Inversion injury during basketball with swelling. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Ankle: lateral tenderness, ROM limited

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: no fracture

### Assessment
Primary Diagnosis: Ankle sprain, right (ICD-10: S93.401A)

Differential Diagnoses:
- Occult fracture

### Plan
1. RICE and ibuprofen 400 mg q6h PRN
2. PWB with brace`},{id:"Orthopedics-25",description:"19yo f c/o wrist pain after fall foosh injury with...",input:"19yo f c/o wrist pain after fall foosh injury with swelling & deformity pmh none on none vs bp 148/92 hr 110 t 374 rr 20 spo2 95 pe wrist: deformity tende neuro intact distally labs none imaging x-ray: displaced distal radius fracture dx distal radius fracture",output:`### Subjective
19-year-old female with wrist pain after fall. FOOSH injury with swelling and deformity. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Wrist: deformity, tender, neuro intact distally

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: displaced distal radius fracture

### Assessment
Primary Diagnosis: Distal radius fracture (ICD-10: S52.501A)

Differential Diagnoses:
- Scaphoid fracture

### Plan
1. Closed reduction and splint
2. Ortho follow-up in 1 week
3. NWB to affected arm`},{id:"Orthopedics-26",description:"43yo m c/o pain patient reports pain but location ...",input:"43yo m c/o pain patient reports pain but location duratio & severity are unclear pmh none on no meds vs bp 148/92 hr 88 t 367 rr 18 spo2 95 pe limited exam documented labs none imaging none dx underspecified pain",output:`### Subjective
Patient reports pain but documentation is insufficient to determine location, duration, or severity.

### Objective
Limited exam documented; no vitals or labs provided.

### Assessment
Underspecified pain syndrome (ICD-10: R69). Insufficient data for definitive diagnosis.

### Plan
1. Obtain complete history and focused physical exam.
2. Document vitals and relevant labs/imaging.`},{id:"Orthopedics-27",description:"26yo f c/o wrist pain after fall foosh injury w/ s...",input:"26yo f c/o wrist pain after fall foosh injury w/ swelling & deformity pmh none on none vs bp 136/86 hr 110 t 374 rr 18 spo2 95 pe wrist: deformity tender neuro intact distally labs none imaging x-ray: displaced distal radius fracture dx dista radius fracture",output:`### Subjective
26-year-old female with wrist pain after fall. FOOSH injury with swelling and deformity. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Wrist: deformity, tender, neuro intact distally

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: displaced distal radius fracture

### Assessment
Primary Diagnosis: Distal radius fracture (ICD-10: S52.501A)

Differential Diagnoses:
- Scaphoid fracture

### Plan
1. Closed reduction and splint
2. Ortho follow-up in 1 week
3. NWB to affected arm`},{id:"Orthopedics-28",description:"45yo f c/o ankle pain inversion injury during bask...",input:"45yo f c/o ankle pain inversion injury during basketball w/ swelli pmh none on none vs bp 130/84 hr 96 t 367 rr 16 spo2 95 pe ankle: lateral tenderness rom limited labs none imaging x-ray: no fx dx ankle sprain rt",output:`### Subjective
45-year-old female with ankle pain. Inversion injury during basketball with swelling. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Ankle: lateral tenderness, ROM limited

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: no fracture

### Assessment
Primary Diagnosis: Ankle sprain, right (ICD-10: S93.401A)

Differential Diagnoses:
- Occult fracture

### Plan
1. RICE and ibuprofen 400 mg q6h PRN
2. PWB with brace`},{id:"Orthopedics-29",description:"30yo m c/o wrist pain after fall foosh injury w/ s...",input:"30yo m c/o wrist pain after fall foosh injury w/ swelling & deformity pmh none on none vs bp 130/84 hr 110 t 367 rr 16 spo2 95 pe wrist: deformity tender neuro intact distally labs none imaging x-ray: displaced distal radius fracture dx distal radius fracture",output:`### Subjective
30-year-old male with wrist pain after fall. FOOSH injury with swelling and deformity. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Wrist: deformity, tender, neuro intact distally

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: displaced distal radius fracture

### Assessment
Primary Diagnosis: Distal radius fracture (ICD-10: S52.501A)

Differential Diagnoses:
- Scaphoid fracture

### Plan
1. Closed reduction and splint
2. Ortho follow-up in 1 week
3. NWB to affected arm`},{id:"Orthopedics-30",description:"26yo m c/o ankle pain inversion injury during bask...",input:"26yo m c/o ankle pain inversion injury during basketball w/ swelling pmh none on none vs bp 118/76 hr 88 t 367 rr 18 spo2 95 pe ankle: lateral tenderness rom limited labs none imagin x-ray: no fx dx ankle sprain rt",output:`### Subjective
26-year-old male with ankle pain. Inversion injury during basketball with swelling. ROS: No numbness.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Ankle: lateral tenderness, ROM limited

Laboratory Results:
- None

Imaging/Diagnostics:
- X-ray: no fracture

### Assessment
Primary Diagnosis: Ankle sprain, right (ICD-10: S93.401A)

Differential Diagnoses:
- Occult fracture

### Plan
1. RICE and ibuprofen 400 mg q6h PRN
2. PWB with brace`}]},{name:"Pediatrics",cases:[{id:"Pediatrics-1",description:"8yo f c/o ear pain 3-year-old with 2 days of ear p...",input:"8yo f c/o ear pain 3-year-old with 2 days of ear pain and fever. pmh none on none vs bp 130/84 hr 96 t 37.4 rr 16 spo2 98 pe ears: bulging erythematous tm labs none imaging none dx otitis media",output:`### Subjective
8-year-old female with ear pain. 3-year-old with 2 days of ear pain and fever. ROS: No vomiting.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Ears: bulging erythematous TM

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Otitis media (ICD-10: H66.90)

Differential Diagnoses:
- Viral URI

### Plan
1. Amoxicillin 45 mg/kg/day divided BID
2. Acetaminophen PRN`},{id:"Pediatrics-2",description:"1yo f c/o wheezing 6-year-old w/ cough and wheeze ...",input:"1yo f c/o wheezing 6-year-old w/ cough and wheeze after viral illness. pmh asthma on albuterol inhaler prn vs bp 136/86 hr 88 t 38.1 rr 20 spo2 95 pe lungs: wheezing labs none imagin none dx asthma, pediatric",output:`### Subjective
1-year-old female with wheezing. 6-year-old with cough and wheeze after viral illness. ROS: No cyanosis.
Past Medical History: Asthma
Medications: Albuterol inhaler PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Lungs: wheezing

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Asthma, pediatric (ICD-10: J45.909)

Differential Diagnoses:
- Bronchiolitis

### Plan
1. Albuterol q4h PRN
2. Short course oral steroids if worsening`},{id:"Pediatrics-3",description:"3yo m c/o ear pain 3-year-old with 2 days of ear p...",input:"3yo m c/o ear pain 3-year-old with 2 days of ear pain and fever. pmh none on none vs bp 118/76 hr 72 t 37.4 rr 16 spo2 97 pe ears bulging erythematous tm labs none imaging none dx otitis medi",output:`### Subjective
3-year-old male with ear pain. 3-year-old with 2 days of ear pain and fever. ROS: No vomiting.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Ears: bulging erythematous TM

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Otitis media (ICD-10: H66.90)

Differential Diagnoses:
- Viral URI

### Plan
1. Amoxicillin 45 mg/kg/day divided BID
2. Acetaminophen PRN`},{id:"Pediatrics-4",description:"7yo f c/o wheezing 6-year-old w/ coug and wheeze a...",input:"7yo f c/o wheezing 6-year-old w/ coug and wheeze after viral illness. pmh asthma on albuterol inhaler prn vs bp 136/86 hr 88 t 36.7 rr 16 spo2 95 pe lungs: wheezing labs none imaging none dx asthma, pediatri",output:`### Subjective
7-year-old female with wheezing. 6-year-old with cough and wheeze after viral illness. ROS: No cyanosis.
Past Medical History: Asthma
Medications: Albuterol inhaler PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Lungs: wheezing

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Asthma, pediatric (ICD-10: J45.909)

Differential Diagnoses:
- Bronchiolitis

### Plan
1. Albuterol q4h PRN
2. Short course oral steroids if worsening`},{id:"Pediatrics-5",description:"10yo m c/o ear pain 3-year-old with 2 days of ear ...",input:"10yo m c/o ear pain 3-year-old with 2 days of ear pain and fever. pmh none on none vs bp 148/92 hr 96 t 36.7 rr 20 spo2 97 pe ears: bulging erythematous tm labs none imaging none dx otitis media",output:`### Subjective
10-year-old male with ear pain. 3-year-old with 2 days of ear pain and fever. ROS: No vomiting.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Ears: bulging erythematous TM

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Otitis media (ICD-10: H66.90)

Differential Diagnoses:
- Viral URI

### Plan
1. Amoxicillin 45 mg/kg/day divided BID
2. Acetaminophen PRN`},{id:"Pediatrics-6",description:"6yo m c/o wheezing 6-year-old with cough and wheez...",input:"6yo m c/o wheezing 6-year-old with cough and wheeze after viral illness. pmh asthma on albuterol inhaler prn vs bp 136/86 hr 96 t 37.4 rr 16 spo2 97 pe lungs: wheezing labs none imaging none dx asthma pediatric",output:`### Subjective
6-year-old male with wheezing. 6-year-old with cough and wheeze after viral illness. ROS: No cyanosis.
Past Medical History: Asthma
Medications: Albuterol inhaler PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Lungs: wheezing

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Asthma, pediatric (ICD-10: J45.909)

Differential Diagnoses:
- Bronchiolitis

### Plan
1. Albuterol q4h PRN
2. Short course oral steroids if worsening`},{id:"Pediatrics-7",description:"1yo f c/o ear pain 3-year-old with 2 days of ear p...",input:"1yo f c/o ear pain 3-year-old with 2 days of ear pain and fever. pmh none on none vs bp 148/92 hr 72 t 37.4 rr 16 spo2 95 pe ears: bulging erythematous tm labs none imaging none dx otiti media",output:`### Subjective
1-year-old female with ear pain. 3-year-old with 2 days of ear pain and fever. ROS: No vomiting.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Ears: bulging erythematous TM

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Otitis media (ICD-10: H66.90)

Differential Diagnoses:
- Viral URI

### Plan
1. Amoxicillin 45 mg/kg/day divided BID
2. Acetaminophen PRN`},{id:"Pediatrics-8",description:"5yo f c/o wheezing 6-year-old with cough and wheez...",input:"5yo f c/o wheezing 6-year-old with cough and wheeze after viral illness. pmh asthm on albuterol inhaler prn vs bp 136/86 hr 110 t 38.1 rr 18 spo2 98 pe lungs: wheezing labs none imaging none dx asthma, pediatric",output:`### Subjective
5-year-old female with wheezing. 6-year-old with cough and wheeze after viral illness. ROS: No cyanosis.
Past Medical History: Asthma
Medications: Albuterol inhaler PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Lungs: wheezing

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Asthma, pediatric (ICD-10: J45.909)

Differential Diagnoses:
- Bronchiolitis

### Plan
1. Albuterol q4h PRN
2. Short course oral steroids if worsening`},{id:"Pediatrics-9",description:"7yo m c/o ear pain 3-year-old with 2 days of ear p...",input:"7yo m c/o ear pain 3-year-old with 2 days of ear pain and fever. pmh none on none vs bp 130/84 hr 110 t 36.7 rr 16 spo2 95 pe ears: bulging erythematous tm labs none imaging none dx otitis media",output:`### Subjective
7-year-old male with ear pain. 3-year-old with 2 days of ear pain and fever. ROS: No vomiting.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Ears: bulging erythematous TM

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Otitis media (ICD-10: H66.90)

Differential Diagnoses:
- Viral URI

### Plan
1. Amoxicillin 45 mg/kg/day divided BID
2. Acetaminophen PRN`},{id:"Pediatrics-10",description:"5yo f c/o wheezing 6-year-old w/ cough and wheeze ...",input:"5yo f c/o wheezing 6-year-old w/ cough and wheeze after viral illness. pmh asthma on albuterol inhaler prn vs bp 136/86 hr 72 t 37.4 rr 20 spo2 97 pe lungs: wheezing labs none imaging none dx asthma, pediatric",output:`### Subjective
5-year-old female with wheezing. 6-year-old with cough and wheeze after viral illness. ROS: No cyanosis.
Past Medical History: Asthma
Medications: Albuterol inhaler PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Lungs: wheezing

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Asthma, pediatric (ICD-10: J45.909)

Differential Diagnoses:
- Bronchiolitis

### Plan
1. Albuterol q4h PRN
2. Short course oral steroids if worsening`},{id:"Pediatrics-11",description:"4yo f c/o ear pain 3-year-old with 2 days of ear p...",input:"4yo f c/o ear pain 3-year-old with 2 days of ear pain and fever. pmh none on none vs bp 130/84 hr 88 t 38.1 rr 18 spo2 95 pe ears: bulging erythematous tm labs none imaging none dx otitis media",output:`### Subjective
4-year-old female with ear pain. 3-year-old with 2 days of ear pain and fever. ROS: No vomiting.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Ears: bulging erythematous TM

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Otitis media (ICD-10: H66.90)

Differential Diagnoses:
- Viral URI

### Plan
1. Amoxicillin 45 mg/kg/day divided BID
2. Acetaminophen PRN`},{id:"Pediatrics-12",description:"7yo m c/o wheezing 6-year-old with cough and wheez...",input:"7yo m c/o wheezing 6-year-old with cough and wheeze after viral illness. pmh asthma on albutero inhaler prn vs bp 118/76 hr 88 t 36.7 rr 18 spo2 97 pe lungs: wheezing labs none imaging none dx asthma, pediatric",output:`### Subjective
7-year-old male with wheezing. 6-year-old with cough and wheeze after viral illness. ROS: No cyanosis.
Past Medical History: Asthma
Medications: Albuterol inhaler PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Lungs: wheezing

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Asthma, pediatric (ICD-10: J45.909)

Differential Diagnoses:
- Bronchiolitis

### Plan
1. Albuterol q4h PRN
2. Short course oral steroids if worsening`},{id:"Pediatrics-13",description:"9yo m c/o ear pain 3-year-old w/ 2 days of ear pai...",input:"9yo m c/o ear pain 3-year-old w/ 2 days of ear pain and fever pmh none on none vs bp 136/86 hr 88 t 37.4 rr 18 spo2 97 pe ears: bulging erythematous tm labs none imaging none dx otitis media",output:`### Subjective
9-year-old male with ear pain. 3-year-old with 2 days of ear pain and fever. ROS: No vomiting.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Ears: bulging erythematous TM

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Otitis media (ICD-10: H66.90)

Differential Diagnoses:
- Viral URI

### Plan
1. Amoxicillin 45 mg/kg/day divided BID
2. Acetaminophen PRN`},{id:"Pediatrics-14",description:"11yo f c/o wheezing 6-year-old with cough and whee...",input:"11yo f c/o wheezing 6-year-old with cough and wheeze after viral illness. pmh asthm on albuterol inhaler prn vs bp 118/76 hr 88 t 37.4 rr 18 spo2 97 pe lungs: wheezing labs none imaging none dx asthma, pediatric",output:`### Subjective
11-year-old female with wheezing. 6-year-old with cough and wheeze after viral illness. ROS: No cyanosis.
Past Medical History: Asthma
Medications: Albuterol inhaler PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Lungs: wheezing

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Asthma, pediatric (ICD-10: J45.909)

Differential Diagnoses:
- Bronchiolitis

### Plan
1. Albuterol q4h PRN
2. Short course oral steroids if worsening`},{id:"Pediatrics-15",description:"5yo f c/o ear pain 3-year-ol with 2 days of ear pa...",input:"5yo f c/o ear pain 3-year-ol with 2 days of ear pain and fever. pmh none on none vs bp 130/84 hr 72 t 36.7 rr 18 spo2 98 pe ears: bulging erythematous tm labs none imaging none dx otitis media",output:`### Subjective
5-year-old female with ear pain. 3-year-old with 2 days of ear pain and fever. ROS: No vomiting.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Ears: bulging erythematous TM

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Otitis media (ICD-10: H66.90)

Differential Diagnoses:
- Viral URI

### Plan
1. Amoxicillin 45 mg/kg/day divided BID
2. Acetaminophen PRN`},{id:"Pediatrics-16",description:"5yo f c/o wheezing 6-year-old w/ cough and wheeze ...",input:"5yo f c/o wheezing 6-year-old w/ cough and wheeze after viral illness. pmh asthma on albuterol inhaler prn vs bp 130/84 hr 88 t 36.7 rr 18 spo2 98 pe lungs: wheezing labs none imaging none dx asthma pediatric",output:`### Subjective
5-year-old female with wheezing. 6-year-old with cough and wheeze after viral illness. ROS: No cyanosis.
Past Medical History: Asthma
Medications: Albuterol inhaler PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Lungs: wheezing

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Asthma, pediatric (ICD-10: J45.909)

Differential Diagnoses:
- Bronchiolitis

### Plan
1. Albuterol q4h PRN
2. Short course oral steroids if worsening`},{id:"Pediatrics-17",description:"8yo m c/o ear pain 3-year-old with 2 days of ear p...",input:"8yo m c/o ear pain 3-year-old with 2 days of ear pain and fever. pmh none on none vs bp 148/92 hr 72 t 38.1 rr 20 spo2 95 pe ears: bulging erythematous tm labs none imaging none dx otitis media",output:`### Subjective
8-year-old male with ear pain. 3-year-old with 2 days of ear pain and fever. ROS: No vomiting.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Ears: bulging erythematous TM

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Otitis media (ICD-10: H66.90)

Differential Diagnoses:
- Viral URI

### Plan
1. Amoxicillin 45 mg/kg/day divided BID
2. Acetaminophen PRN`},{id:"Pediatrics-18",description:"4yo f c/o wheezing 6-year-old with cough and wheez...",input:"4yo f c/o wheezing 6-year-old with cough and wheeze after viral illness pmh asthma on albuterol inhaler prn vs bp 148/92 hr 72 t 37.4 rr 20 spo2 95 pe lungs: wheezing labs none imaging none dx asthma, pediatric",output:`### Subjective
4-year-old female with wheezing. 6-year-old with cough and wheeze after viral illness. ROS: No cyanosis.
Past Medical History: Asthma
Medications: Albuterol inhaler PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Lungs: wheezing

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Asthma, pediatric (ICD-10: J45.909)

Differential Diagnoses:
- Bronchiolitis

### Plan
1. Albuterol q4h PRN
2. Short course oral steroids if worsening`},{id:"Pediatrics-19",description:"12yo m c/o pain patient reports pain but location,...",input:"12yo m c/o pain patient reports pain but location, duration, and severity are unclear. pmh none on no meds vs bp 148/92 hr 88 t 36.7 rr 18 spo2 98 pe limited exam documente labs none imagin none dx underspecified pain",output:`### Subjective
Patient reports pain but documentation is insufficient to determine location, duration, or severity.

### Objective
Limited exam documented; no vitals or labs provided.

### Assessment
Underspecified pain syndrome (ICD-10: R69). Insufficient data for definitive diagnosis.

### Plan
1. Obtain complete history and focused physical exam.
2. Document vitals and relevant labs/imaging.`},{id:"Pediatrics-20",description:"1yo m c/o wheezing 6-year-old w/ coug and wheeze a...",input:"1yo m c/o wheezing 6-year-old w/ coug and wheeze after viral illness. pmh asthma on albuterol inhaler prn vs bp 136/86 hr 88 t 38.1 rr 20 spo2 95 pe lungs: wheezing labs none imaging none dx asthma, pediatric",output:`### Subjective
1-year-old male with wheezing. 6-year-old with cough and wheeze after viral illness. ROS: No cyanosis.
Past Medical History: Asthma
Medications: Albuterol inhaler PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Lungs: wheezing

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Asthma, pediatric (ICD-10: J45.909)

Differential Diagnoses:
- Bronchiolitis

### Plan
1. Albuterol q4h PRN
2. Short course oral steroids if worsening`},{id:"Pediatrics-21",description:"9yo f c/o ear pain 3-year-old with 2 days of ear p...",input:"9yo f c/o ear pain 3-year-old with 2 days of ear pain and fever. pmh none on none vs bp 118/76 hr 88 t 36.7 rr 20 spo2 97 pe ears: bulging erythematous tm labs none imaging none dx otitis media",output:`### Subjective
9-year-old female with ear pain. 3-year-old with 2 days of ear pain and fever. ROS: No vomiting.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Ears: bulging erythematous TM

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Otitis media (ICD-10: H66.90)

Differential Diagnoses:
- Viral URI

### Plan
1. Amoxicillin 45 mg/kg/day divided BID
2. Acetaminophen PRN`},{id:"Pediatrics-22",description:"6yo f c/o wheezing 6-year-old with cough and wheez...",input:"6yo f c/o wheezing 6-year-old with cough and wheeze after viral illness. pmh asthma on albuterol inhaler prn vs bp 118/76 hr 72 t 36.7 rr 20 spo2 98 pe lungs: wheezing labs none imaging none dx asthma, pediatric",output:`### Subjective
6-year-old female with wheezing. 6-year-old with cough and wheeze after viral illness. ROS: No cyanosis.
Past Medical History: Asthma
Medications: Albuterol inhaler PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Lungs: wheezing

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Asthma, pediatric (ICD-10: J45.909)

Differential Diagnoses:
- Bronchiolitis

### Plan
1. Albuterol q4h PRN
2. Short course oral steroids if worsening`},{id:"Pediatrics-23",description:"7yo m c/o ear pain 3-year-old w/ 2 days of ear pai...",input:"7yo m c/o ear pain 3-year-old w/ 2 days of ear pain and fever. pmh none on none vs bp 118/76 hr 88 t 38.1 rr 20 spo2 95 pe ears: bulging erythematous tm labs none imaging none dx otitis media",output:`### Subjective
7-year-old male with ear pain. 3-year-old with 2 days of ear pain and fever. ROS: No vomiting.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Ears: bulging erythematous TM

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Otitis media (ICD-10: H66.90)

Differential Diagnoses:
- Viral URI

### Plan
1. Amoxicillin 45 mg/kg/day divided BID
2. Acetaminophen PRN`},{id:"Pediatrics-24",description:"1yo m c/o wheezing 6-year-old w/ cough and wheeze ...",input:"1yo m c/o wheezing 6-year-old w/ cough and wheeze after viral illness. pmh asthma on albuterol inhaler prn vs bp 148/92 hr 110 t 38.1 rr 16 spo2 97 pe lungs: wheezing labs none imaging none dx asthma, pediatric",output:`### Subjective
1-year-old male with wheezing. 6-year-old with cough and wheeze after viral illness. ROS: No cyanosis.
Past Medical History: Asthma
Medications: Albuterol inhaler PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Lungs: wheezing

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Asthma, pediatric (ICD-10: J45.909)

Differential Diagnoses:
- Bronchiolitis

### Plan
1. Albuterol q4h PRN
2. Short course oral steroids if worsening`},{id:"Pediatrics-25",description:"8yo m c/o ear pain 3-year-old with 2 days of ear p...",input:"8yo m c/o ear pain 3-year-old with 2 days of ear pain and fever. pmh none on none vs bp 148/92 hr 88 t 37.4 rr 20 spo2 95 pe ears: bulging erythematous tm labs none imagin none dx otiti media",output:`### Subjective
8-year-old male with ear pain. 3-year-old with 2 days of ear pain and fever. ROS: No vomiting.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Ears: bulging erythematous TM

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Otitis media (ICD-10: H66.90)

Differential Diagnoses:
- Viral URI

### Plan
1. Amoxicillin 45 mg/kg/day divided BID
2. Acetaminophen PRN`},{id:"Pediatrics-26",description:"10yo f c/o wheezing 6-year-old w/ cough and wheeze...",input:"10yo f c/o wheezing 6-year-old w/ cough and wheeze after viral illness. pmh asthma on albuterol inhaler prn vs bp 148/92 hr 72 t 38.1 rr 18 spo2 97 pe lungs: wheezing labs none imaging none dx asthma, pediatric",output:`### Subjective
10-year-old female with wheezing. 6-year-old with cough and wheeze after viral illness. ROS: No cyanosis.
Past Medical History: Asthma
Medications: Albuterol inhaler PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Lungs: wheezing

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Asthma, pediatric (ICD-10: J45.909)

Differential Diagnoses:
- Bronchiolitis

### Plan
1. Albuterol q4h PRN
2. Short course oral steroids if worsening`},{id:"Pediatrics-27",description:"3yo f c/o ear pain 3-year-old with 2 days of ear p...",input:"3yo f c/o ear pain 3-year-old with 2 days of ear pain and fever. pmh none on none vs bp 136/86 hr 110 t 36.7 rr 20 spo2 98 pe ears: bulging erythematous tm labs none imaging none dx otitis media",output:`### Subjective
3-year-old female with ear pain. 3-year-old with 2 days of ear pain and fever. ROS: No vomiting.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Ears: bulging erythematous TM

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Otitis media (ICD-10: H66.90)

Differential Diagnoses:
- Viral URI

### Plan
1. Amoxicillin 45 mg/kg/day divided BID
2. Acetaminophen PRN`},{id:"Pediatrics-28",description:"7yo f c/o wheezing 6-year-old w/ cough and wheeze ...",input:"7yo f c/o wheezing 6-year-old w/ cough and wheeze after vira illness. pmh asthma on albuterol inhaler prn vs bp 136/86 hr 96 t 36.7 rr 20 spo2 98 pe lungs: wheezing labs none imaging none dx asthma, pediatric",output:`### Subjective
7-year-old female with wheezing. 6-year-old with cough and wheeze after viral illness. ROS: No cyanosis.
Past Medical History: Asthma
Medications: Albuterol inhaler PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Lungs: wheezing

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Asthma, pediatric (ICD-10: J45.909)

Differential Diagnoses:
- Bronchiolitis

### Plan
1. Albuterol q4h PRN
2. Short course oral steroids if worsening`},{id:"Pediatrics-29",description:"4yo m c/o ear pain 3-year-old w/ 2 days of ear pai...",input:"4yo m c/o ear pain 3-year-old w/ 2 days of ear pain and fever. pmh none on none vs bp 136/86 hr 110 t 37.4 rr 16 spo2 97 pe ears: bulging erythematous tm labs none imaging none dx otitis medi",output:`### Subjective
4-year-old male with ear pain. 3-year-old with 2 days of ear pain and fever. ROS: No vomiting.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Ears: bulging erythematous TM

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Otitis media (ICD-10: H66.90)

Differential Diagnoses:
- Viral URI

### Plan
1. Amoxicillin 45 mg/kg/day divided BID
2. Acetaminophen PRN`},{id:"Pediatrics-30",description:"1yo f c/o wheezing 6-year-old w/ cough and wheeze ...",input:"1yo f c/o wheezing 6-year-old w/ cough and wheeze after viral illness. pmh asthma on albuterol inhale prn vs bp 136/86 hr 96 t 36.7 rr 18 spo2 98 pe lungs: wheezing labs none imagin none dx asthma, pediatric",output:`### Subjective
1-year-old female with wheezing. 6-year-old with cough and wheeze after viral illness. ROS: No cyanosis.
Past Medical History: Asthma
Medications: Albuterol inhaler PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Lungs: wheezing

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Asthma, pediatric (ICD-10: J45.909)

Differential Diagnoses:
- Bronchiolitis

### Plan
1. Albuterol q4h PRN
2. Short course oral steroids if worsening`}]},{name:"Physical Rehab",cases:[{id:"Physical Rehab-1",description:"39yo f c/o weakness after stroke 3 week post ische...",input:"39yo f c/o weakness after stroke 3 week post ischemic stroke w/ residual rt-sided weakness. pmh stroke on aspirin 81 mg daily vs bp 118/76 hr 88 t 37.4 rr 20 spo2 97 pe strength: rue/rle 4/5 labs none imaging none dx post-stroke rehabilitation",output:`### Subjective
39-year-old female with weakness after stroke. 3 weeks post ischemic stroke with residual right-sided weakness. ROS: No new deficits.
Past Medical History: Stroke
Medications: Aspirin 81 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Strength: RUE/RLE 4/5

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Post-stroke rehabilitation (ICD-10: I69.398)

Differential Diagnoses:
- Depression

### Plan
1. PT/OT 5x weekly
2. Goal: independent transfers`},{id:"Physical Rehab-2",description:"84yo f c/o rehab after hip arthroplasty 2 weeks po...",input:"84yo f c/o rehab after hip arthroplasty 2 weeks post total hip arthroplasty, needs gait training. pmh oa on acetaminophen 650 mg q6h prn vs bp 136/86 hr 72 t 37.4 rr 16 spo2 97 pe gait: require walker labs none imaging none dx post-tha rehabilitation",output:`### Subjective
84-year-old female with rehab after hip arthroplasty. 2 weeks post total hip arthroplasty, needs gait training. ROS: No wound issues.
Past Medical History: OA
Medications: Acetaminophen 650 mg q6h PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Gait: requires walker

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Post-THA rehabilitation (ICD-10: Z47.1)

Differential Diagnoses:
- Prosthetic complications

### Plan
1. PT for gait and balance
2. Continue DVT prophylaxis`},{id:"Physical Rehab-3",description:"79yo m c/o weakness after stroke 3 weeks post isch...",input:"79yo m c/o weakness after stroke 3 weeks post ischemic stroke with residual right-sided weakness. pmh stroke on aspirin 81 mg daily vs bp 148/92 hr 96 t 36.7 rr 20 spo2 97 pe strength: rue/rle 4/5 labs none imaging none dx post-stroke rehabilitation",output:`### Subjective
79-year-old male with weakness after stroke. 3 weeks post ischemic stroke with residual right-sided weakness. ROS: No new deficits.
Past Medical History: Stroke
Medications: Aspirin 81 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Strength: RUE/RLE 4/5

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Post-stroke rehabilitation (ICD-10: I69.398)

Differential Diagnoses:
- Depression

### Plan
1. PT/OT 5x weekly
2. Goal: independent transfers`},{id:"Physical Rehab-4",description:"43yo m c/o rehab after hip arthroplasty 2 weeks po...",input:"43yo m c/o rehab after hip arthroplasty 2 weeks post total hip arthroplasty, needs gait training. pmh oa on acetaminophen 650 mg q6h prn vs bp 118/76 hr 88 t 36.7 rr 20 spo2 97 pe gait: requires walker labs none imaging none dx post-tha rehabilitation",output:`### Subjective
43-year-old male with rehab after hip arthroplasty. 2 weeks post total hip arthroplasty, needs gait training. ROS: No wound issues.
Past Medical History: OA
Medications: Acetaminophen 650 mg q6h PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Gait: requires walker

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Post-THA rehabilitation (ICD-10: Z47.1)

Differential Diagnoses:
- Prosthetic complications

### Plan
1. PT for gait and balance
2. Continue DVT prophylaxis`},{id:"Physical Rehab-5",description:"76yo f c/o weakness after stroke 3 week post ische...",input:"76yo f c/o weakness after stroke 3 week post ischemic stroke with residua right-sided weakness. pmh stroke on aspirin 81 mg daily vs bp 130/84 hr 88 t 36.7 rr 16 spo2 95 pe strength: rue/rle 4/5 labs none imaging none dx post-stroke rehabilitation",output:`### Subjective
76-year-old female with weakness after stroke. 3 weeks post ischemic stroke with residual right-sided weakness. ROS: No new deficits.
Past Medical History: Stroke
Medications: Aspirin 81 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Strength: RUE/RLE 4/5

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Post-stroke rehabilitation (ICD-10: I69.398)

Differential Diagnoses:
- Depression

### Plan
1. PT/OT 5x weekly
2. Goal: independent transfers`},{id:"Physical Rehab-6",description:"71yo f c/o rehab after hip arthroplasty 2 weeks po...",input:"71yo f c/o rehab after hip arthroplasty 2 weeks post total hip arthroplasty, needs gait training. pmh oa on acetaminophen 650 mg q6h prn vs bp 118/7 hr 96 t 37.4 rr 20 spo2 98 pe gait requires walker labs none imaging none dx post-tha rehabilitation",output:`### Subjective
71-year-old female with rehab after hip arthroplasty. 2 weeks post total hip arthroplasty, needs gait training. ROS: No wound issues.
Past Medical History: OA
Medications: Acetaminophen 650 mg q6h PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Gait: requires walker

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Post-THA rehabilitation (ICD-10: Z47.1)

Differential Diagnoses:
- Prosthetic complications

### Plan
1. PT for gait and balance
2. Continue DVT prophylaxis`},{id:"Physical Rehab-7",description:"62yo m c/o weakness after stroke 3 weeks post isch...",input:"62yo m c/o weakness after stroke 3 weeks post ischemic stroke with residual right-sided weakness. pmh stroke on aspirin 81 mg daily vs bp 148/92 hr 88 t 37.4 rr 16 spo2 97 pe strength: rue/rle 4/5 labs none imagin none dx post-stroke rehabilitation",output:`### Subjective
62-year-old male with weakness after stroke. 3 weeks post ischemic stroke with residual right-sided weakness. ROS: No new deficits.
Past Medical History: Stroke
Medications: Aspirin 81 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Strength: RUE/RLE 4/5

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Post-stroke rehabilitation (ICD-10: I69.398)

Differential Diagnoses:
- Depression

### Plan
1. PT/OT 5x weekly
2. Goal: independent transfers`},{id:"Physical Rehab-8",description:"36yo m c/o rehab after hip arthroplasty 2 weeks po...",input:"36yo m c/o rehab after hip arthroplasty 2 weeks post total hip arthroplasty, needs gait training. pmh oa on acetaminophen 650 mg q6h prn vs bp 130/84 hr 110 t 37.4 rr 16 spo2 97 pe gait: requires walker labs none imaging none dx post-tha rehabilitation",output:`### Subjective
36-year-old male with rehab after hip arthroplasty. 2 weeks post total hip arthroplasty, needs gait training. ROS: No wound issues.
Past Medical History: OA
Medications: Acetaminophen 650 mg q6h PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Gait: requires walker

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Post-THA rehabilitation (ICD-10: Z47.1)

Differential Diagnoses:
- Prosthetic complications

### Plan
1. PT for gait and balance
2. Continue DVT prophylaxis`},{id:"Physical Rehab-9",description:"52yo f c/o weakness after stroke 3 weeks post isch...",input:"52yo f c/o weakness after stroke 3 weeks post ischemic stroke with residual right-sided weakness. pmh stroke on aspirin 81 mg daily vs bp 148/92 hr 110 t 38.1 rr 20 spo2 95 pe strength: rue/rle 4/5 labs none imagin none dx post-stroke rehabilitation",output:`### Subjective
52-year-old female with weakness after stroke. 3 weeks post ischemic stroke with residual right-sided weakness. ROS: No new deficits.
Past Medical History: Stroke
Medications: Aspirin 81 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Strength: RUE/RLE 4/5

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Post-stroke rehabilitation (ICD-10: I69.398)

Differential Diagnoses:
- Depression

### Plan
1. PT/OT 5x weekly
2. Goal: independent transfers`},{id:"Physical Rehab-10",description:"83yo m c/o rehab after hip arthroplasty 2 weeks po...",input:"83yo m c/o rehab after hip arthroplasty 2 weeks post total hip arthroplasty, needs gait training. pmh oa on acetaminophe 650 mg q6h prn vs bp 130/84 hr 110 t 38.1 rr 16 spo2 98 pe gait: requires walker labs none imaging none dx post-tha rehabilitation",output:`### Subjective
83-year-old male with rehab after hip arthroplasty. 2 weeks post total hip arthroplasty, needs gait training. ROS: No wound issues.
Past Medical History: OA
Medications: Acetaminophen 650 mg q6h PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Gait: requires walker

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Post-THA rehabilitation (ICD-10: Z47.1)

Differential Diagnoses:
- Prosthetic complications

### Plan
1. PT for gait and balance
2. Continue DVT prophylaxis`}]},{name:"Psychiatry",cases:[{id:"Psychiatry-1",description:"29yo m c/o depressed mood low mood, anhedonia, poo...",input:"29yo m c/o depressed mood low mood, anhedonia, poor sleep for 2 months. pmh depression on sertraline 50 mg daily vs bp 130/8 hr 72 t 37.4 rr 16 spo2 97 pe mse: flat affect, slow speech labs none imaging none dx major depressive disorder moderate",output:`### Subjective
29-year-old male with depressed mood. Low mood, anhedonia, poor sleep for 2 months. ROS: Denies SI/HI.
Past Medical History: Depression
Medications: Sertraline 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- MSE: flat affect, slow speech

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Major depressive disorder, moderate (ICD-10: F32.1)

Differential Diagnoses:
- Hypothyroidism

### Plan
1. Increase sertraline to 100 mg daily
2. Start CBT referral`},{id:"Psychiatry-2",description:"65yo m c/o insomnia and racing thoughts decreased ...",input:"65yo m c/o insomnia and racing thoughts decreased sleep, pressured speech, impulsive spending. pmh bipolar disorder on lithium 300 mg bid vs bp 130/84 hr 88 t 38.1 rr 16 spo2 95 pe mse: elevated mood, flight of ideas labs lithium level 0.5mmol/l imagin none dx bipolar disorder, current manic episode",output:`### Subjective
65-year-old male with insomnia and racing thoughts. Decreased sleep, pressured speech, impulsive spending. ROS: No SI/HI.
Past Medical History: Bipolar disorder
Medications: Lithium 300 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- MSE: elevated mood, flight of ideas

Laboratory Results:
- Lithium level: 0.5 mmol/L (Ref: 0.6-1.2)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Bipolar disorder, current manic episode (ICD-10: F31.2)

Differential Diagnoses:
- Substance-induced mania

### Plan
1. Increase lithium to 300 mg TID
2. Check level in 5 days`},{id:"Psychiatry-3",description:"56yo f c/o depressed mood low mood, anhedonia, poo...",input:"56yo f c/o depressed mood low mood, anhedonia, poor sleep for 2 months. pmh depression on sertraline 50 mg daily vs bp 130/84 hr 88 t 38.1 rr 18 spo2 97 pe mse: flat affect, slow speech labs none imaging none dx major depressive disorder, moderate",output:`### Subjective
56-year-old female with depressed mood. Low mood, anhedonia, poor sleep for 2 months. ROS: Denies SI/HI.
Past Medical History: Depression
Medications: Sertraline 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- MSE: flat affect, slow speech

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Major depressive disorder, moderate (ICD-10: F32.1)

Differential Diagnoses:
- Hypothyroidism

### Plan
1. Increase sertraline to 100 mg daily
2. Start CBT referral`},{id:"Psychiatry-4",description:"38yo m c/o insomnia and racing thoughts decreased ...",input:"38yo m c/o insomnia and racing thoughts decreased sleep, pressured speech, impulsive spending. pmh bipolar disorder on lithium 300 mg bid vs bp 136/86 hr 88 t 38.1 rr 16 spo2 98 pe mse: elevated mood, flight of ideas labs lithium level 0.5mmol/l imaging none dx bipolar disorder, current manic episode",output:`### Subjective
38-year-old male with insomnia and racing thoughts. Decreased sleep, pressured speech, impulsive spending. ROS: No SI/HI.
Past Medical History: Bipolar disorder
Medications: Lithium 300 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- MSE: elevated mood, flight of ideas

Laboratory Results:
- Lithium level: 0.5 mmol/L (Ref: 0.6-1.2)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Bipolar disorder, current manic episode (ICD-10: F31.2)

Differential Diagnoses:
- Substance-induced mania

### Plan
1. Increase lithium to 300 mg TID
2. Check level in 5 days`},{id:"Psychiatry-5",description:"26yo m c/o depresse mood low mood, anhedonia, poor...",input:"26yo m c/o depresse mood low mood, anhedonia, poor sleep for 2 months. pmh depression on sertraline 50 mg daily vs bp 118/76 hr 110 t 38.1 rr 18 spo2 97 pe mse: flat affect, slow speech labs none imaging none dx major depressive disorder, moderat",output:`### Subjective
26-year-old male with depressed mood. Low mood, anhedonia, poor sleep for 2 months. ROS: Denies SI/HI.
Past Medical History: Depression
Medications: Sertraline 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- MSE: flat affect, slow speech

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Major depressive disorder, moderate (ICD-10: F32.1)

Differential Diagnoses:
- Hypothyroidism

### Plan
1. Increase sertraline to 100 mg daily
2. Start CBT referral`},{id:"Psychiatry-6",description:"29yo f c/o insomnia and racing thoughts decreased ...",input:"29yo f c/o insomnia and racing thoughts decreased sleep, pressure speech, impulsive spending. pmh bipolar disorder on lithium 300 mg bid vs bp 148/92 hr 88 t 37.4 rr 20 spo2 98 pe mse: elevated mood, flight of ideas labs lithiu level 0.5mmol/l imaging none dx bipolar disorder, current manic episode",output:`### Subjective
29-year-old female with insomnia and racing thoughts. Decreased sleep, pressured speech, impulsive spending. ROS: No SI/HI.
Past Medical History: Bipolar disorder
Medications: Lithium 300 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- MSE: elevated mood, flight of ideas

Laboratory Results:
- Lithium level: 0.5 mmol/L (Ref: 0.6-1.2)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Bipolar disorder, current manic episode (ICD-10: F31.2)

Differential Diagnoses:
- Substance-induced mania

### Plan
1. Increase lithium to 300 mg TID
2. Check level in 5 days`},{id:"Psychiatry-7",description:"82yo m c/o pain patient reports pain but location,...",input:"82yo m c/o pain patient reports pain but location, duration, and severity are unclear. pmh none on no meds vs bp 130/84 hr 72 t 38.1 rr 18 spo2 97 pe limite exam documented labs none imaging none dx underspecified pain",output:`### Subjective
Patient reports pain but documentation is insufficient to determine location, duration, or severity.

### Objective
Limited exam documented; no vitals or labs provided.

### Assessment
Underspecified pain syndrome (ICD-10: R69). Insufficient data for definitive diagnosis.

### Plan
1. Obtain complete history and focused physical exam.
2. Document vitals and relevant labs/imaging.`},{id:"Psychiatry-8",description:"81yo f c/o insomnia and racing thoughts decreased ...",input:"81yo f c/o insomnia and racing thoughts decreased sleep, pressured speech, impulsive spending. pmh bipolar disorder on lithium 300 mg bid vs bp 130/84 hr 96 t 38.1 rr 18 spo2 98 pe mse: elevated mood, flight of ideas labs lithium level 0.5mmol/l imaging none dx bipolar disorder, current manic episode",output:`### Subjective
81-year-old female with insomnia and racing thoughts. Decreased sleep, pressured speech, impulsive spending. ROS: No SI/HI.
Past Medical History: Bipolar disorder
Medications: Lithium 300 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- MSE: elevated mood, flight of ideas

Laboratory Results:
- Lithium level: 0.5 mmol/L (Ref: 0.6-1.2)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Bipolar disorder, current manic episode (ICD-10: F31.2)

Differential Diagnoses:
- Substance-induced mania

### Plan
1. Increase lithium to 300 mg TID
2. Check level in 5 days`},{id:"Psychiatry-9",description:"30yo m c/o depressed mood low mood, anhedonia, poo...",input:"30yo m c/o depressed mood low mood, anhedonia, poor sleep for 2 months. pmh depressio on sertraline 50 mg daily vs bp 118/76 hr 110 t 36.7 rr 20 spo2 97 pe mse: flat affect, slow speech labs none imaging none dx major depressive disorder, moderate",output:`### Subjective
30-year-old male with depressed mood. Low mood, anhedonia, poor sleep for 2 months. ROS: Denies SI/HI.
Past Medical History: Depression
Medications: Sertraline 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- MSE: flat affect, slow speech

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Major depressive disorder, moderate (ICD-10: F32.1)

Differential Diagnoses:
- Hypothyroidism

### Plan
1. Increase sertraline to 100 mg daily
2. Start CBT referral`},{id:"Psychiatry-10",description:"81yo m c/o insomnia and racing thoughts decreased ...",input:"81yo m c/o insomnia and racing thoughts decreased sleep, pressured speech, impulsiv spending. pmh bipolar disorder on lithium 300 mg bid vs bp 130/84 hr 72 t 36.7 rr 16 spo2 97 pe mse: elevated mood, fligh of ideas labs lithium level 0.5mmol/l imaging none dx bipolar disorder, current manic episode",output:`### Subjective
81-year-old male with insomnia and racing thoughts. Decreased sleep, pressured speech, impulsive spending. ROS: No SI/HI.
Past Medical History: Bipolar disorder
Medications: Lithium 300 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- MSE: elevated mood, flight of ideas

Laboratory Results:
- Lithium level: 0.5 mmol/L (Ref: 0.6-1.2)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Bipolar disorder, current manic episode (ICD-10: F31.2)

Differential Diagnoses:
- Substance-induced mania

### Plan
1. Increase lithium to 300 mg TID
2. Check level in 5 days`},{id:"Psychiatry-11",description:"75yo f c/o depressed mood low mood, anhedonia, poo...",input:"75yo f c/o depressed mood low mood, anhedonia, poor slee for 2 months. pmh depression on sertraline 50 mg daily vs bp 148/92 hr 72 t 38.1 rr 16 spo2 95 pe mse: flat affect, slow speech labs none imaging none dx major depressive disorder, moderate",output:`### Subjective
75-year-old female with depressed mood. Low mood, anhedonia, poor sleep for 2 months. ROS: Denies SI/HI.
Past Medical History: Depression
Medications: Sertraline 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- MSE: flat affect, slow speech

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Major depressive disorder, moderate (ICD-10: F32.1)

Differential Diagnoses:
- Hypothyroidism

### Plan
1. Increase sertraline to 100 mg daily
2. Start CBT referral`},{id:"Psychiatry-12",description:"83yo m c/o insomnia and racing thoughts decreased ...",input:"83yo m c/o insomnia and racing thoughts decreased sleep, pressured speech, impulsive spending. pmh bipolar disorder on lithium 300 mg bid vs bp 136/86 hr 72 t 38.1 rr 16 spo2 97 pe mse: elevated mood, flight of ideas labs lithium level 0.5mmol/l imaging none dx bipolar disorder, current mani episode",output:`### Subjective
83-year-old male with insomnia and racing thoughts. Decreased sleep, pressured speech, impulsive spending. ROS: No SI/HI.
Past Medical History: Bipolar disorder
Medications: Lithium 300 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- MSE: elevated mood, flight of ideas

Laboratory Results:
- Lithium level: 0.5 mmol/L (Ref: 0.6-1.2)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Bipolar disorder, current manic episode (ICD-10: F31.2)

Differential Diagnoses:
- Substance-induced mania

### Plan
1. Increase lithium to 300 mg TID
2. Check level in 5 days`},{id:"Psychiatry-13",description:"21yo f c/o depressed mood low mood, anhedonia, poo...",input:"21yo f c/o depressed mood low mood, anhedonia, poor sleep for 2 months. pmh depression on sertraline 50 mg daily vs bp 118/76 hr 88 t 38.1 rr 16 spo2 98 pe mse: flat affect, slow speech labs none imaging none dx major depressive disorder, moderate",output:`### Subjective
21-year-old female with depressed mood. Low mood, anhedonia, poor sleep for 2 months. ROS: Denies SI/HI.
Past Medical History: Depression
Medications: Sertraline 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- MSE: flat affect, slow speech

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Major depressive disorder, moderate (ICD-10: F32.1)

Differential Diagnoses:
- Hypothyroidism

### Plan
1. Increase sertraline to 100 mg daily
2. Start CBT referral`},{id:"Psychiatry-14",description:"54yo m c/o insomnia and racing thoughts decreased ...",input:"54yo m c/o insomnia and racing thoughts decreased sleep, pressured speech, impulsiv spending. pmh bipolar disorder on lithium 300 mg bid vs bp 148/92 hr 88 t 38.1 rr 16 spo2 98 pe mse: elevated mood, flight of ideas labs lithium level 0.5mmol/l imaging none dx bipolar disorder, current manic episode",output:`### Subjective
54-year-old male with insomnia and racing thoughts. Decreased sleep, pressured speech, impulsive spending. ROS: No SI/HI.
Past Medical History: Bipolar disorder
Medications: Lithium 300 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- MSE: elevated mood, flight of ideas

Laboratory Results:
- Lithium level: 0.5 mmol/L (Ref: 0.6-1.2)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Bipolar disorder, current manic episode (ICD-10: F31.2)

Differential Diagnoses:
- Substance-induced mania

### Plan
1. Increase lithium to 300 mg TID
2. Check level in 5 days`},{id:"Psychiatry-15",description:"81yo f c/o depressed mood low mood, anhedonia poor...",input:"81yo f c/o depressed mood low mood, anhedonia poor sleep for 2 months. pmh depression on sertraline 50 mg daily vs bp 136/86 hr 110 t 38.1 rr 18 spo2 95 pe mse: flat affect, slow speech labs none imaging none dx major depressive disorder, moderate",output:`### Subjective
81-year-old female with depressed mood. Low mood, anhedonia, poor sleep for 2 months. ROS: Denies SI/HI.
Past Medical History: Depression
Medications: Sertraline 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- MSE: flat affect, slow speech

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Major depressive disorder, moderate (ICD-10: F32.1)

Differential Diagnoses:
- Hypothyroidism

### Plan
1. Increase sertraline to 100 mg daily
2. Start CBT referral`},{id:"Psychiatry-16",description:"24yo m c/o insomnia and racing thoughts decreased ...",input:"24yo m c/o insomnia and racing thoughts decreased sleep, pressured speech impulsive spending. pmh bipolar disorder on lithium 300 mg bid vs bp 136/86 hr 72 t 38.1 rr 20 spo2 98 pe mse: elevated mood, flight of ideas labs lithium level 0.5mmol/l imaging none dx bipolar disorder, current manic episode",output:`### Subjective
24-year-old male with insomnia and racing thoughts. Decreased sleep, pressured speech, impulsive spending. ROS: No SI/HI.
Past Medical History: Bipolar disorder
Medications: Lithium 300 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- MSE: elevated mood, flight of ideas

Laboratory Results:
- Lithium level: 0.5 mmol/L (Ref: 0.6-1.2)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Bipolar disorder, current manic episode (ICD-10: F31.2)

Differential Diagnoses:
- Substance-induced mania

### Plan
1. Increase lithium to 300 mg TID
2. Check level in 5 days`},{id:"Psychiatry-17",description:"52yo f c/o depressed mood low mood, anhedonia, poo...",input:"52yo f c/o depressed mood low mood, anhedonia, poor sleep for 2 months. pmh depression on sertraline 50 mg daily vs bp 118/76 hr 88 t 37.4 rr 16 spo2 97 pe mse: flat affect, slow speech labs none imaging none dx major depressive disorder, moderate",output:`### Subjective
52-year-old female with depressed mood. Low mood, anhedonia, poor sleep for 2 months. ROS: Denies SI/HI.
Past Medical History: Depression
Medications: Sertraline 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 37.4°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- MSE: flat affect, slow speech

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Major depressive disorder, moderate (ICD-10: F32.1)

Differential Diagnoses:
- Hypothyroidism

### Plan
1. Increase sertraline to 100 mg daily
2. Start CBT referral`},{id:"Psychiatry-18",description:"67yo f c/o insomnia and racing thoughts decreased ...",input:"67yo f c/o insomnia and racing thoughts decreased sleep, pressured speech, impulsive spending. pmh bipola disorder on lithium 300 mg bid vs bp 136/86 hr 88 t 38.1 rr 16 spo2 95 pe mse: elevated mood, flight of ideas labs lithium level 0.5mmol/l imaging none dx bipolar disorder, current manic episode",output:`### Subjective
67-year-old female with insomnia and racing thoughts. Decreased sleep, pressured speech, impulsive spending. ROS: No SI/HI.
Past Medical History: Bipolar disorder
Medications: Lithium 300 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- MSE: elevated mood, flight of ideas

Laboratory Results:
- Lithium level: 0.5 mmol/L (Ref: 0.6-1.2)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Bipolar disorder, current manic episode (ICD-10: F31.2)

Differential Diagnoses:
- Substance-induced mania

### Plan
1. Increase lithium to 300 mg TID
2. Check level in 5 days`},{id:"Psychiatry-19",description:"51yo f c/o depressed mood low mood, anhedonia, poo...",input:"51yo f c/o depressed mood low mood, anhedonia, poor sleep for 2 months. pmh depression on sertraline 50 mg daily vs bp 118/76 hr 88 t 38.1 rr 20 spo2 95 pe mse: flat affect, slow speech labs none imaging none dx major depressive disorder, moderate",output:`### Subjective
51-year-old female with depressed mood. Low mood, anhedonia, poor sleep for 2 months. ROS: Denies SI/HI.
Past Medical History: Depression
Medications: Sertraline 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- MSE: flat affect, slow speech

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Major depressive disorder, moderate (ICD-10: F32.1)

Differential Diagnoses:
- Hypothyroidism

### Plan
1. Increase sertraline to 100 mg daily
2. Start CBT referral`},{id:"Psychiatry-20",description:"72yo m c/o insomnia and racing thoughts decreased ...",input:"72yo m c/o insomnia and racing thoughts decreased sleep, pressured speech, impulsive spending. pmh bipolar disorder on lithiu 300 mg bid vs bp 118/76 hr 88 t 38.1 rr 20 spo2 97 pe mse: elevated mood, flight of ideas labs lithium level 0.5mmol/l imaging none dx bipolar disorder, current manic episode",output:`### Subjective
72-year-old male with insomnia and racing thoughts. Decreased sleep, pressured speech, impulsive spending. ROS: No SI/HI.
Past Medical History: Bipolar disorder
Medications: Lithium 300 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- MSE: elevated mood, flight of ideas

Laboratory Results:
- Lithium level: 0.5 mmol/L (Ref: 0.6-1.2)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Bipolar disorder, current manic episode (ICD-10: F31.2)

Differential Diagnoses:
- Substance-induced mania

### Plan
1. Increase lithium to 300 mg TID
2. Check level in 5 days`},{id:"Psychiatry-21",description:"40yo m c/o depressed mood low mood, anhedonia, poo...",input:"40yo m c/o depressed mood low mood, anhedonia, poor sleep for 2 months. pmh depression on sertraline 50 mg daily vs bp 118/76 hr 72 t 36.7 rr 18 spo2 97 pe mse: flat affect, slow speech labs none imaging none dx major depressive disorder, moderate",output:`### Subjective
40-year-old male with depressed mood. Low mood, anhedonia, poor sleep for 2 months. ROS: Denies SI/HI.
Past Medical History: Depression
Medications: Sertraline 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- MSE: flat affect, slow speech

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Major depressive disorder, moderate (ICD-10: F32.1)

Differential Diagnoses:
- Hypothyroidism

### Plan
1. Increase sertraline to 100 mg daily
2. Start CBT referral`},{id:"Psychiatry-22",description:"65yo m c/o insomnia and racing thoughts decreased ...",input:"65yo m c/o insomnia and racing thoughts decreased sleep, pressured speech, impulsive spending. pmh bipolar disorder on lithium 300 mg bid vs bp 148/92 hr 88 t 36.7 rr 16 spo2 98 pe mse: elevated mood, flight of ideas labs lithium leve 0.5mmol/l imaging none dx bipolar disorder, current manic episode",output:`### Subjective
65-year-old male with insomnia and racing thoughts. Decreased sleep, pressured speech, impulsive spending. ROS: No SI/HI.
Past Medical History: Bipolar disorder
Medications: Lithium 300 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- MSE: elevated mood, flight of ideas

Laboratory Results:
- Lithium level: 0.5 mmol/L (Ref: 0.6-1.2)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Bipolar disorder, current manic episode (ICD-10: F31.2)

Differential Diagnoses:
- Substance-induced mania

### Plan
1. Increase lithium to 300 mg TID
2. Check level in 5 days`},{id:"Psychiatry-23",description:"55yo f c/o depressed mood low mood, anhedonia, poo...",input:"55yo f c/o depressed mood low mood, anhedonia, poor sleep for 2 months. pmh depression on sertraline 50 mg daily vs bp 130/84 hr 110 t 36.7 rr 18 spo2 98 pe mse: flat affect, slow speec labs none imaging none dx major depressive disorder, moderate",output:`### Subjective
55-year-old female with depressed mood. Low mood, anhedonia, poor sleep for 2 months. ROS: Denies SI/HI.
Past Medical History: Depression
Medications: Sertraline 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- MSE: flat affect, slow speech

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Major depressive disorder, moderate (ICD-10: F32.1)

Differential Diagnoses:
- Hypothyroidism

### Plan
1. Increase sertraline to 100 mg daily
2. Start CBT referral`},{id:"Psychiatry-24",description:"37yo f c/o insomnia and racing thoughts decreased ...",input:"37yo f c/o insomnia and racing thoughts decreased sleep, pressured speech, impulsive spending. pmh bipolar disorder on lithium 300 mg bid vs bp 148/92 hr 96 t 36.7 rr 16 spo2 97 pe mse: elevated mood, flight of ideas labs lithium level 0.5mmol/l imaging none dx bipolar disorder, current manic episode",output:`### Subjective
37-year-old female with insomnia and racing thoughts. Decreased sleep, pressured speech, impulsive spending. ROS: No SI/HI.
Past Medical History: Bipolar disorder
Medications: Lithium 300 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- MSE: elevated mood, flight of ideas

Laboratory Results:
- Lithium level: 0.5 mmol/L (Ref: 0.6-1.2)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Bipolar disorder, current manic episode (ICD-10: F31.2)

Differential Diagnoses:
- Substance-induced mania

### Plan
1. Increase lithium to 300 mg TID
2. Check level in 5 days`},{id:"Psychiatry-25",description:"65yo f c/o depressed mood low mood, anhedonia, poo...",input:"65yo f c/o depressed mood low mood, anhedonia, poor sleep for 2 months. pmh depression on sertraline 50 mg daily vs bp 148/92 hr 96 t 38.1 rr 16 spo2 95 pe mse: flat affect slow speech labs none imaging none dx major depressive disorder moderate",output:`### Subjective
65-year-old female with depressed mood. Low mood, anhedonia, poor sleep for 2 months. ROS: Denies SI/HI.
Past Medical History: Depression
Medications: Sertraline 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- MSE: flat affect, slow speech

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Major depressive disorder, moderate (ICD-10: F32.1)

Differential Diagnoses:
- Hypothyroidism

### Plan
1. Increase sertraline to 100 mg daily
2. Start CBT referral`},{id:"Psychiatry-26",description:"70yo f c/o insomnia and racin thought decreased sl...",input:"70yo f c/o insomnia and racin thought decreased sleep, pressured speech, impulsive spending. pmh bipolar disorder on lithium 300 mg bid vs bp 148/92 hr 96 t 36.7 rr 16 spo2 97 pe mse: elevated mood, flight of ideas labs lithium level 0.5mmol/l imaging none dx bipolar disorder, current manic episode",output:`### Subjective
70-year-old female with insomnia and racing thoughts. Decreased sleep, pressured speech, impulsive spending. ROS: No SI/HI.
Past Medical History: Bipolar disorder
Medications: Lithium 300 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- MSE: elevated mood, flight of ideas

Laboratory Results:
- Lithium level: 0.5 mmol/L (Ref: 0.6-1.2)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Bipolar disorder, current manic episode (ICD-10: F31.2)

Differential Diagnoses:
- Substance-induced mania

### Plan
1. Increase lithium to 300 mg TID
2. Check level in 5 days`},{id:"Psychiatry-27",description:"19yo m c/o depressed mood low mood, anhedonia, poo...",input:"19yo m c/o depressed mood low mood, anhedonia, poor sleep for 2 months. pmh depression on sertraline 50 mg daily vs bp 148/92 hr 72 t 38.1 rr 20 spo2 97 pe mse: flat affect, slow speech labs none imaging none dx major depressive disorder, moderate",output:`### Subjective
19-year-old male with depressed mood. Low mood, anhedonia, poor sleep for 2 months. ROS: Denies SI/HI.
Past Medical History: Depression
Medications: Sertraline 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- MSE: flat affect, slow speech

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Major depressive disorder, moderate (ICD-10: F32.1)

Differential Diagnoses:
- Hypothyroidism

### Plan
1. Increase sertraline to 100 mg daily
2. Start CBT referral`},{id:"Psychiatry-28",description:"54yo m c/o insomnia and racing thoughts decreased ...",input:"54yo m c/o insomnia and racing thoughts decreased sleep pressured speech, impulsive spending. pmh bipolar disorder on lithium 300 mg bid vs bp 136/86 hr 96 t 36.7 rr 20 spo2 95 pe mse: elevated mood, flight of ideas labs lithium level 0.5mmol/l imaging none dx bipolar disorder, current manic episode",output:`### Subjective
54-year-old male with insomnia and racing thoughts. Decreased sleep, pressured speech, impulsive spending. ROS: No SI/HI.
Past Medical History: Bipolar disorder
Medications: Lithium 300 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- MSE: elevated mood, flight of ideas

Laboratory Results:
- Lithium level: 0.5 mmol/L (Ref: 0.6-1.2)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Bipolar disorder, current manic episode (ICD-10: F31.2)

Differential Diagnoses:
- Substance-induced mania

### Plan
1. Increase lithium to 300 mg TID
2. Check level in 5 days`},{id:"Psychiatry-29",description:"27yo f c/o depressed mood low mood, anhedonia, poo...",input:"27yo f c/o depressed mood low mood, anhedonia, poor sleep for 2 months. pmh depression on sertraline 50 mg daily vs bp 148/92 hr 88 t 38.1 rr 18 spo2 98 pe mse: flat affect, slow speech labs none imaging none dx majo depressive disorder, moderate",output:`### Subjective
27-year-old female with depressed mood. Low mood, anhedonia, poor sleep for 2 months. ROS: Denies SI/HI.
Past Medical History: Depression
Medications: Sertraline 50 mg daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- MSE: flat affect, slow speech

Laboratory Results:
- None

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Major depressive disorder, moderate (ICD-10: F32.1)

Differential Diagnoses:
- Hypothyroidism

### Plan
1. Increase sertraline to 100 mg daily
2. Start CBT referral`},{id:"Psychiatry-30",description:"41yo m c/o insomnia and racing thoughts decreased ...",input:"41yo m c/o insomnia and racing thoughts decreased sleep, pressured speech, impulsive spending. pmh bipolar disorder on lithium 300 mg bid vs bp 136/86 hr 110 t 36.7 rr 18 spo2 98 pe mse: elevated mood, flight of ideas labs lithium level 0.5mmol/l imaging none dx bipolar disorder, current manic episode",output:`### Subjective
41-year-old male with insomnia and racing thoughts. Decreased sleep, pressured speech, impulsive spending. ROS: No SI/HI.
Past Medical History: Bipolar disorder
Medications: Lithium 300 mg BID
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 110 bpm
- Temperature: 36.7°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- MSE: elevated mood, flight of ideas

Laboratory Results:
- Lithium level: 0.5 mmol/L (Ref: 0.6-1.2)

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Bipolar disorder, current manic episode (ICD-10: F31.2)

Differential Diagnoses:
- Substance-induced mania

### Plan
1. Increase lithium to 300 mg TID
2. Check level in 5 days`}]},{name:"Pulmonology",cases:[{id:"Pulmonology-1",description:"28yo f c/o worsening sob increased dyspnea and spu...",input:"28yo f c/o worsening sob increased dyspnea and sputum for 3 days pmh copd on tiotropium daily vs bp 136/86 hr 88 t 367 rr 20 spo2 95 pe lungs: wheezes and prolonge expiratory phase labs abg ph 732 co2 52 imagin cxr: hyperinflation dx copd exacerbation",output:`### Subjective
28-year-old female with worsening SOB. Increased dyspnea and sputum for 3 days. ROS: No chest pain.
Past Medical History: COPD
Medications: Tiotropium daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Lungs: wheezes and prolonged expiratory phase

Laboratory Results:
- ABG: pH 7.32, CO2 52  (Ref: )

Imaging/Diagnostics:
- CXR: hyperinflation

### Assessment
Primary Diagnosis: COPD exacerbation (ICD-10: J44.1)

Differential Diagnoses:
- Pneumonia

### Plan
1. Duonebs q4h
2. Prednisone 40 mg daily x5 days
3. Azithromycin 500 mg day 1 then 250 mg x4 days`},{id:"Pulmonology-2",description:"60yo m c/o wheezing wheezing and ches tightness af...",input:"60yo m c/o wheezing wheezing and ches tightness after exposur to dust pmh asthma on albuterol inhaler prn vs bp 136/86 hr 72 t 367 rr 20 spo2 97 pe lungs: diffuse wheezes labs none imaging cxr: no acute disease dx asthma exacerbation",output:`### Subjective
60-year-old male with wheezing. Wheezing and chest tightness after exposure to dust. ROS: No fever.
Past Medical History: Asthma
Medications: Albuterol inhaler PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Lungs: diffuse wheezes

Laboratory Results:
- None

Imaging/Diagnostics:
- CXR: no acute disease

### Assessment
Primary Diagnosis: Asthma exacerbation (ICD-10: J45.901)

Differential Diagnoses:
- COPD

### Plan
1. Albuterol nebulizer
2. Prednisone 40 mg daily x5 days`},{id:"Pulmonology-3",description:"32yo m c/o worsening sob increased dyspnea and spu...",input:"32yo m c/o worsening sob increased dyspnea and sputum for 3 days pmh copd on tiotropium daily vs bp 148/92 hr 96 t 367 rr 16 spo2 98 pe lungs: wheezes and prolonged expiratory phase labs abg ph 732 co2 52 imaging cxr: hyperinflatio dx copd exacerbation",output:`### Subjective
32-year-old male with worsening SOB. Increased dyspnea and sputum for 3 days. ROS: No chest pain.
Past Medical History: COPD
Medications: Tiotropium daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Lungs: wheezes and prolonged expiratory phase

Laboratory Results:
- ABG: pH 7.32, CO2 52  (Ref: )

Imaging/Diagnostics:
- CXR: hyperinflation

### Assessment
Primary Diagnosis: COPD exacerbation (ICD-10: J44.1)

Differential Diagnoses:
- Pneumonia

### Plan
1. Duonebs q4h
2. Prednisone 40 mg daily x5 days
3. Azithromycin 500 mg day 1 then 250 mg x4 days`},{id:"Pulmonology-4",description:"34yo m c/o wheezing wheezing and chest tightness a...",input:"34yo m c/o wheezing wheezing and chest tightness after exposure to dust pmh asthm on albuterol inhaler prn vs bp 148/92 hr 96 t 381 rr 16 spo2 97 pe lungs: diffuse wheezes labs none imaging cxr: no acute disease dx asthma exacerbation",output:`### Subjective
34-year-old male with wheezing. Wheezing and chest tightness after exposure to dust. ROS: No fever.
Past Medical History: Asthma
Medications: Albuterol inhaler PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Lungs: diffuse wheezes

Laboratory Results:
- None

Imaging/Diagnostics:
- CXR: no acute disease

### Assessment
Primary Diagnosis: Asthma exacerbation (ICD-10: J45.901)

Differential Diagnoses:
- COPD

### Plan
1. Albuterol nebulizer
2. Prednisone 40 mg daily x5 days`},{id:"Pulmonology-5",description:"33yo m c/o worsening sob increased dyspnea and spu...",input:"33yo m c/o worsening sob increased dyspnea and sputum for 3 days pmh copd on tiotropium daily vs bp 148/92 hr 110 t 381 rr 20 spo2 97 pe lungs wheezes and prolonged expiratory phase labs abg ph 732 co2 52 imaging cxr: hyperinflation dx copd exacerbation",output:`### Subjective
33-year-old male with worsening SOB. Increased dyspnea and sputum for 3 days. ROS: No chest pain.
Past Medical History: COPD
Medications: Tiotropium daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Lungs: wheezes and prolonged expiratory phase

Laboratory Results:
- ABG: pH 7.32, CO2 52  (Ref: )

Imaging/Diagnostics:
- CXR: hyperinflation

### Assessment
Primary Diagnosis: COPD exacerbation (ICD-10: J44.1)

Differential Diagnoses:
- Pneumonia

### Plan
1. Duonebs q4h
2. Prednisone 40 mg daily x5 days
3. Azithromycin 500 mg day 1 then 250 mg x4 days`},{id:"Pulmonology-6",description:"52yo f c/o wheezing wheezing and chest tightness a...",input:"52yo f c/o wheezing wheezing and chest tightness after exposure to dust pmh asthma on albuterol inhaler prn vs bp 118/76 hr 72 t 367 rr 20 spo2 98 pe lungs: diffuse wheezes labs none imaging cxr: no acute disease dx asthma exacerbation",output:`### Subjective
52-year-old female with wheezing. Wheezing and chest tightness after exposure to dust. ROS: No fever.
Past Medical History: Asthma
Medications: Albuterol inhaler PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Lungs: diffuse wheezes

Laboratory Results:
- None

Imaging/Diagnostics:
- CXR: no acute disease

### Assessment
Primary Diagnosis: Asthma exacerbation (ICD-10: J45.901)

Differential Diagnoses:
- COPD

### Plan
1. Albuterol nebulizer
2. Prednisone 40 mg daily x5 days`},{id:"Pulmonology-7",description:"70yo f c/o worsening sob increased dyspnea and spu...",input:"70yo f c/o worsening sob increased dyspnea and sputum for 3 days pmh copd on tiotropium daily vs bp 130/84 hr 96 t 381 rr 18 spo2 95 pe lungs: wheezes and prolonged expiratory phase labs abg ph 732 co2 52 imaging cxr: hyperinflation dx copd exacerbation",output:`### Subjective
70-year-old female with worsening SOB. Increased dyspnea and sputum for 3 days. ROS: No chest pain.
Past Medical History: COPD
Medications: Tiotropium daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Lungs: wheezes and prolonged expiratory phase

Laboratory Results:
- ABG: pH 7.32, CO2 52  (Ref: )

Imaging/Diagnostics:
- CXR: hyperinflation

### Assessment
Primary Diagnosis: COPD exacerbation (ICD-10: J44.1)

Differential Diagnoses:
- Pneumonia

### Plan
1. Duonebs q4h
2. Prednisone 40 mg daily x5 days
3. Azithromycin 500 mg day 1 then 250 mg x4 days`},{id:"Pulmonology-8",description:"57yo f c/o wheezing wheezing and chest tightness a...",input:"57yo f c/o wheezing wheezing and chest tightness after exposure to dust pmh asthma on albuterol inhaler prn vs bp 130/84 hr 96 t 381 rr 16 spo2 95 pe lungs: diffuse wheezes labs none imaging cxr: no acute disease dx asthma exacerbation",output:`### Subjective
57-year-old female with wheezing. Wheezing and chest tightness after exposure to dust. ROS: No fever.
Past Medical History: Asthma
Medications: Albuterol inhaler PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Lungs: diffuse wheezes

Laboratory Results:
- None

Imaging/Diagnostics:
- CXR: no acute disease

### Assessment
Primary Diagnosis: Asthma exacerbation (ICD-10: J45.901)

Differential Diagnoses:
- COPD

### Plan
1. Albuterol nebulizer
2. Prednisone 40 mg daily x5 days`},{id:"Pulmonology-9",description:"70yo f c/o worsening sob increased dyspnea and spu...",input:"70yo f c/o worsening sob increased dyspnea and sputum for 3 days pmh copd on tiotropium daily vs bp 136/86 hr 96 t 367 rr 20 spo2 97 pe lungs: wheezes and prolonged expiratory phase labs abg ph 732 co2 52 imaging cxr: hyperinflation dx copd exacerbation",output:`### Subjective
70-year-old female with worsening SOB. Increased dyspnea and sputum for 3 days. ROS: No chest pain.
Past Medical History: COPD
Medications: Tiotropium daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Lungs: wheezes and prolonged expiratory phase

Laboratory Results:
- ABG: pH 7.32, CO2 52  (Ref: )

Imaging/Diagnostics:
- CXR: hyperinflation

### Assessment
Primary Diagnosis: COPD exacerbation (ICD-10: J44.1)

Differential Diagnoses:
- Pneumonia

### Plan
1. Duonebs q4h
2. Prednisone 40 mg daily x5 days
3. Azithromycin 500 mg day 1 then 250 mg x4 days`},{id:"Pulmonology-10",description:"30yo m c/o wheezing wheezing and chest tightness a...",input:"30yo m c/o wheezing wheezing and chest tightness after exposure to dust pmh asthm on albuterol inhaler prn vs bp 148/92 hr 96 t 374 rr 18 spo2 97 pe lungs: diffuse wheezes labs none imaging cxr: no acute disease dx asthma exacerbation",output:`### Subjective
30-year-old male with wheezing. Wheezing and chest tightness after exposure to dust. ROS: No fever.
Past Medical History: Asthma
Medications: Albuterol inhaler PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Lungs: diffuse wheezes

Laboratory Results:
- None

Imaging/Diagnostics:
- CXR: no acute disease

### Assessment
Primary Diagnosis: Asthma exacerbation (ICD-10: J45.901)

Differential Diagnoses:
- COPD

### Plan
1. Albuterol nebulizer
2. Prednisone 40 mg daily x5 days`},{id:"Pulmonology-11",description:"47yo f c/o worsening sob increase dyspnea and sput...",input:"47yo f c/o worsening sob increase dyspnea and sputum for 3 days pmh copd on tiotropium daily vs bp 148/92 hr 88 t 381 rr 20 spo2 98 pe lungs: wheezes and prolonge expiratory phase labs abg ph 732 co2 52 imaging cxr: hyperinflation dx copd exacerbation",output:`### Subjective
47-year-old female with worsening SOB. Increased dyspnea and sputum for 3 days. ROS: No chest pain.
Past Medical History: COPD
Medications: Tiotropium daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Lungs: wheezes and prolonged expiratory phase

Laboratory Results:
- ABG: pH 7.32, CO2 52  (Ref: )

Imaging/Diagnostics:
- CXR: hyperinflation

### Assessment
Primary Diagnosis: COPD exacerbation (ICD-10: J44.1)

Differential Diagnoses:
- Pneumonia

### Plan
1. Duonebs q4h
2. Prednisone 40 mg daily x5 days
3. Azithromycin 500 mg day 1 then 250 mg x4 days`},{id:"Pulmonology-12",description:"77yo m c/o wheezing wheezing and chest tightness a...",input:"77yo m c/o wheezing wheezing and chest tightness after exposur to dust pmh asthma on albuterol inhaler prn vs bp 136/86 hr 96 t 374 rr 18 spo2 95 pe lungs: diffuse wheezes labs none imaging cxr: no acute disease dx asthma exacerbation",output:`### Subjective
77-year-old male with wheezing. Wheezing and chest tightness after exposure to dust. ROS: No fever.
Past Medical History: Asthma
Medications: Albuterol inhaler PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Lungs: diffuse wheezes

Laboratory Results:
- None

Imaging/Diagnostics:
- CXR: no acute disease

### Assessment
Primary Diagnosis: Asthma exacerbation (ICD-10: J45.901)

Differential Diagnoses:
- COPD

### Plan
1. Albuterol nebulizer
2. Prednisone 40 mg daily x5 days`},{id:"Pulmonology-13",description:"36yo m c/o worsening sob increased dyspnea and spu...",input:"36yo m c/o worsening sob increased dyspnea and sputum for 3 days pmh copd on tiotropium daily vs bp 130/84 hr 72 t 367 rr 20 spo2 95 pe lungs: wheezes and prolonged expiratory phase labs abg ph 732 co2 52 imaging cxr: hyperinflation dx copd exacerbation",output:`### Subjective
36-year-old male with worsening SOB. Increased dyspnea and sputum for 3 days. ROS: No chest pain.
Past Medical History: COPD
Medications: Tiotropium daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 72 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Lungs: wheezes and prolonged expiratory phase

Laboratory Results:
- ABG: pH 7.32, CO2 52  (Ref: )

Imaging/Diagnostics:
- CXR: hyperinflation

### Assessment
Primary Diagnosis: COPD exacerbation (ICD-10: J44.1)

Differential Diagnoses:
- Pneumonia

### Plan
1. Duonebs q4h
2. Prednisone 40 mg daily x5 days
3. Azithromycin 500 mg day 1 then 250 mg x4 days`},{id:"Pulmonology-14",description:"33yo m c/o wheezing wheezing and chest tightness a...",input:"33yo m c/o wheezing wheezing and chest tightness after exposure to dust pmh asthma on albuterol inhaler prn vs bp 118/76 hr 88 t 367 rr 16 spo2 98 pe lungs: diffuse wheezes labs none imaging cxr: no acute disease dx asthma exacerbation",output:`### Subjective
33-year-old male with wheezing. Wheezing and chest tightness after exposure to dust. ROS: No fever.
Past Medical History: Asthma
Medications: Albuterol inhaler PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Lungs: diffuse wheezes

Laboratory Results:
- None

Imaging/Diagnostics:
- CXR: no acute disease

### Assessment
Primary Diagnosis: Asthma exacerbation (ICD-10: J45.901)

Differential Diagnoses:
- COPD

### Plan
1. Albuterol nebulizer
2. Prednisone 40 mg daily x5 days`},{id:"Pulmonology-15",description:"59yo m c/o worsening sob increased dyspnea and spu...",input:"59yo m c/o worsening sob increased dyspnea and sputum for 3 days pmh copd on tiotropium daily vs bp 118/76 hr 88 t 381 rr 16 spo2 97 pe lungs: wheezes and prolonged expiratory phase labs abg ph 732 co2 52 imaging cxr: hyperinflation dx copd exacerbation",output:`### Subjective
59-year-old male with worsening SOB. Increased dyspnea and sputum for 3 days. ROS: No chest pain.
Past Medical History: COPD
Medications: Tiotropium daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Lungs: wheezes and prolonged expiratory phase

Laboratory Results:
- ABG: pH 7.32, CO2 52  (Ref: )

Imaging/Diagnostics:
- CXR: hyperinflation

### Assessment
Primary Diagnosis: COPD exacerbation (ICD-10: J44.1)

Differential Diagnoses:
- Pneumonia

### Plan
1. Duonebs q4h
2. Prednisone 40 mg daily x5 days
3. Azithromycin 500 mg day 1 then 250 mg x4 days`},{id:"Pulmonology-16",description:"78yo m c/o wheezing wheezing and chest tightness a...",input:"78yo m c/o wheezing wheezing and chest tightness after exposure to dust pmh asthma on albuterol inhaler prn vs bp 136/86 hr 72 t 381 rr 18 spo2 95 pe lungs: diffuse wheezes labs none imaging cxr: no acute disease dx asthma exacerbation",output:`### Subjective
78-year-old male with wheezing. Wheezing and chest tightness after exposure to dust. ROS: No fever.
Past Medical History: Asthma
Medications: Albuterol inhaler PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Lungs: diffuse wheezes

Laboratory Results:
- None

Imaging/Diagnostics:
- CXR: no acute disease

### Assessment
Primary Diagnosis: Asthma exacerbation (ICD-10: J45.901)

Differential Diagnoses:
- COPD

### Plan
1. Albuterol nebulizer
2. Prednisone 40 mg daily x5 days`},{id:"Pulmonology-17",description:"83yo m c/o worsening sob increased dyspnea and spu...",input:"83yo m c/o worsening sob increased dyspnea and sputum for 3 days pmh copd on tiotropiu daily vs bp 118/76 hr 72 t 381 rr 16 spo2 95 pe lungs: wheezes and prolonged expiratory phase labs abg ph 732 co2 52 imaging cxr: hyperinflation dx copd exacerbation",output:`### Subjective
83-year-old male with worsening SOB. Increased dyspnea and sputum for 3 days. ROS: No chest pain.
Past Medical History: COPD
Medications: Tiotropium daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 72 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Lungs: wheezes and prolonged expiratory phase

Laboratory Results:
- ABG: pH 7.32, CO2 52  (Ref: )

Imaging/Diagnostics:
- CXR: hyperinflation

### Assessment
Primary Diagnosis: COPD exacerbation (ICD-10: J44.1)

Differential Diagnoses:
- Pneumonia

### Plan
1. Duonebs q4h
2. Prednisone 40 mg daily x5 days
3. Azithromycin 500 mg day 1 then 250 mg x4 days`},{id:"Pulmonology-18",description:"59yo m c/o wheezing wheezing and chest tightne aft...",input:"59yo m c/o wheezing wheezing and chest tightne after exposure to dust pmh asthma on albuterol inhaler prn vs bp 148/92 hr 96 t 367 rr 20 spo2 95 pe lungs: diffuse wheezes labs none imaging cxr: no acute disease dx asthma exacerbation",output:`### Subjective
59-year-old male with wheezing. Wheezing and chest tightness after exposure to dust. ROS: No fever.
Past Medical History: Asthma
Medications: Albuterol inhaler PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Lungs: diffuse wheezes

Laboratory Results:
- None

Imaging/Diagnostics:
- CXR: no acute disease

### Assessment
Primary Diagnosis: Asthma exacerbation (ICD-10: J45.901)

Differential Diagnoses:
- COPD

### Plan
1. Albuterol nebulizer
2. Prednisone 40 mg daily x5 days`},{id:"Pulmonology-19",description:"55yo m c/o worsening sob increased dyspnea and spu...",input:"55yo m c/o worsening sob increased dyspnea and sputum for 3 days pmh copd on tiotropium daily vs bp 148/92 hr 110 t 374 rr 20 spo2 97 pe lungs: wheezes and prolonged expiratory phase labs abg ph 732 co2 52 imaging cxr: hyperinflation dx copd exacerbation",output:`### Subjective
55-year-old male with worsening SOB. Increased dyspnea and sputum for 3 days. ROS: No chest pain.
Past Medical History: COPD
Medications: Tiotropium daily
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 148/92 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Lungs: wheezes and prolonged expiratory phase

Laboratory Results:
- ABG: pH 7.32, CO2 52  (Ref: )

Imaging/Diagnostics:
- CXR: hyperinflation

### Assessment
Primary Diagnosis: COPD exacerbation (ICD-10: J44.1)

Differential Diagnoses:
- Pneumonia

### Plan
1. Duonebs q4h
2. Prednisone 40 mg daily x5 days
3. Azithromycin 500 mg day 1 then 250 mg x4 days`},{id:"Pulmonology-20",description:"72yo m c/o wheezing wheezin and chest tightness af...",input:"72yo m c/o wheezing wheezin and chest tightness after exposure to dust pmh asthma on albuterol inhaler prn vs bp 130/84 hr 110 t 374 rr 18 spo2 95 pe lungs: diffuse wheezes labs none imaging cxr: no acute disease dx asthma exacerbation",output:`### Subjective
72-year-old male with wheezing. Wheezing and chest tightness after exposure to dust. ROS: No fever.
Past Medical History: Asthma
Medications: Albuterol inhaler PRN
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Lungs: diffuse wheezes

Laboratory Results:
- None

Imaging/Diagnostics:
- CXR: no acute disease

### Assessment
Primary Diagnosis: Asthma exacerbation (ICD-10: J45.901)

Differential Diagnoses:
- COPD

### Plan
1. Albuterol nebulizer
2. Prednisone 40 mg daily x5 days`}]},{name:"Rheumatology",cases:[{id:"Rheumatology-1",description:"25yo m c/o joint pain and stiffness morning stiffn...",input:"25yo m c/o joint pain and stiffness morning stiffness >1 hour and symmetric hand pain pmh none on none vs bp 130/84 hr 88 t 381 rr 18 spo2 95 pe msk: swollen mcp joints labs rf + imaging hand x-ray: erosions dx rheumatoid arthritis",output:`### Subjective
25-year-old male with joint pain and stiffness. Morning stiffness >1 hour and symmetric hand pain. ROS: No fevers.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- MSK: swollen MCP joints

Laboratory Results:
- RF: Positive  (Ref: )

Imaging/Diagnostics:
- Hand X-ray: erosions

### Assessment
Primary Diagnosis: Rheumatoid arthritis (ICD-10: M06.9)

Differential Diagnoses:
- OA

### Plan
1. Start methotrexate 15 mg weekly
2. Folic acid 1 mg daily`},{id:"Rheumatology-2",description:"47yo f c/o rash and joint pain mala rash and arthr...",input:"47yo f c/o rash and joint pain mala rash and arthralgias for 3 months pmh none on none vs bp 118/76 hr 88 t 367 rr 16 spo2 98 pe skin: malar rash labs ana + imaging none dx systemic lupus erythematosus",output:`### Subjective
47-year-old female with rash and joint pain. Malar rash and arthralgias for 3 months. ROS: Photosensitivity.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Skin: malar rash

Laboratory Results:
- ANA: Positive  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Systemic lupus erythematosus (ICD-10: M32.9)

Differential Diagnoses:
- Dermatomyositis

### Plan
1. Start hydroxychloroquine 200 mg BID
2. Sun protection counseling`},{id:"Rheumatology-3",description:"29yo m c/o joint pain and stiffness morning stiffn...",input:"29yo m c/o joint pain and stiffness morning stiffness >1 hour and symmetric hand pain pmh none on none vs bp 130/84 hr 96 t 381 rr 16 spo2 97 pe msk: swollen mcp joints labs rf + imaging hand x-ray: erosions dx rheumatoid arthritis",output:`### Subjective
29-year-old male with joint pain and stiffness. Morning stiffness >1 hour and symmetric hand pain. ROS: No fevers.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- MSK: swollen MCP joints

Laboratory Results:
- RF: Positive  (Ref: )

Imaging/Diagnostics:
- Hand X-ray: erosions

### Assessment
Primary Diagnosis: Rheumatoid arthritis (ICD-10: M06.9)

Differential Diagnoses:
- OA

### Plan
1. Start methotrexate 15 mg weekly
2. Folic acid 1 mg daily`},{id:"Rheumatology-4",description:"75yo m c/o rash and joint pain malar rash and arth...",input:"75yo m c/o rash and joint pain malar rash and arthralgias for 3 months pmh none on none vs bp 136/86 hr 96 t 381 rr 20 spo2 97 pe skin: malar rash labs ana + imaging none dx systemic lupus erythematosus",output:`### Subjective
75-year-old male with rash and joint pain. Malar rash and arthralgias for 3 months. ROS: Photosensitivity.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- Skin: malar rash

Laboratory Results:
- ANA: Positive  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Systemic lupus erythematosus (ICD-10: M32.9)

Differential Diagnoses:
- Dermatomyositis

### Plan
1. Start hydroxychloroquine 200 mg BID
2. Sun protection counseling`},{id:"Rheumatology-5",description:"59yo m c/o joint pain and stiffness morning stiffn...",input:"59yo m c/o joint pain and stiffness morning stiffness >1 hour and symmetric hand pain pmh none on none vs bp 136/86 hr 96 t 381 rr 16 spo2 95 pe msk: swollen mcp joints labs rf + imaging hand x-ray: erosions dx rheumatoi arthritis",output:`### Subjective
59-year-old male with joint pain and stiffness. Morning stiffness >1 hour and symmetric hand pain. ROS: No fevers.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- MSK: swollen MCP joints

Laboratory Results:
- RF: Positive  (Ref: )

Imaging/Diagnostics:
- Hand X-ray: erosions

### Assessment
Primary Diagnosis: Rheumatoid arthritis (ICD-10: M06.9)

Differential Diagnoses:
- OA

### Plan
1. Start methotrexate 15 mg weekly
2. Folic acid 1 mg daily`},{id:"Rheumatology-6",description:"18yo m c/o rash and joint pain malar rash and arth...",input:"18yo m c/o rash and joint pain malar rash and arthralgias for 3 months pmh none on none vs bp 118/76 hr 110 t 374 rr 20 spo2 98 pe skin: malar rash labs ana + imaging none dx systemic lupus erythematosus",output:`### Subjective
18-year-old male with rash and joint pain. Malar rash and arthralgias for 3 months. ROS: Photosensitivity.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Skin: malar rash

Laboratory Results:
- ANA: Positive  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Systemic lupus erythematosus (ICD-10: M32.9)

Differential Diagnoses:
- Dermatomyositis

### Plan
1. Start hydroxychloroquine 200 mg BID
2. Sun protection counseling`},{id:"Rheumatology-7",description:"24yo f c/o joint pain and stiffness morning stiffn...",input:"24yo f c/o joint pain and stiffness morning stiffness >1 hour and symmetric hand pain pmh none on none vs bp 130/84 hr 88 t 381 rr 16 spo2 97 pe msk: swollen mcp joint labs rf positive imaging hand x-ray: erosions dx rheumatoid arthritis",output:`### Subjective
24-year-old female with joint pain and stiffness. Morning stiffness >1 hour and symmetric hand pain. ROS: No fevers.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 130/84 mmHg
- Heart Rate: 88 bpm
- Temperature: 38.1°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 97% on room air

Physical Examination:
- MSK: swollen MCP joints

Laboratory Results:
- RF: Positive  (Ref: )

Imaging/Diagnostics:
- Hand X-ray: erosions

### Assessment
Primary Diagnosis: Rheumatoid arthritis (ICD-10: M06.9)

Differential Diagnoses:
- OA

### Plan
1. Start methotrexate 15 mg weekly
2. Folic acid 1 mg daily`},{id:"Rheumatology-8",description:"63yo f c/o rash and joint pain malar rash and arth...",input:"63yo f c/o rash and joint pain malar rash and arthralgias for 3 months pmh none on none vs bp 136/86 hr 96 t 367 rr 16 spo2 98 pe skin: malar rash labs ana positive imaging none dx systemic lupus erythematosus",output:`### Subjective
63-year-old female with rash and joint pain. Malar rash and arthralgias for 3 months. ROS: Photosensitivity.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 96 bpm
- Temperature: 36.7°C
- Respiratory Rate: 16 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- Skin: malar rash

Laboratory Results:
- ANA: Positive  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Systemic lupus erythematosus (ICD-10: M32.9)

Differential Diagnoses:
- Dermatomyositis

### Plan
1. Start hydroxychloroquine 200 mg BID
2. Sun protection counseling`},{id:"Rheumatology-9",description:"65yo m c/o joint pain and stiffness morning stiffn...",input:"65yo m c/o joint pain and stiffness morning stiffness >1 hour and symmetric hand pain pmh none on none vs bp 118/76 hr 110 t 374 rr 18 spo2 98 pe msk: swollen mcp joints labs rf + imaging hand x-ray: erosions dx rheumatoid arthritis",output:`### Subjective
65-year-old male with joint pain and stiffness. Morning stiffness >1 hour and symmetric hand pain. ROS: No fevers.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 118/76 mmHg
- Heart Rate: 110 bpm
- Temperature: 37.4°C
- Respiratory Rate: 18 /min
- Oxygen Saturation: 98% on room air

Physical Examination:
- MSK: swollen MCP joints

Laboratory Results:
- RF: Positive  (Ref: )

Imaging/Diagnostics:
- Hand X-ray: erosions

### Assessment
Primary Diagnosis: Rheumatoid arthritis (ICD-10: M06.9)

Differential Diagnoses:
- OA

### Plan
1. Start methotrexate 15 mg weekly
2. Folic acid 1 mg daily`},{id:"Rheumatology-10",description:"23yo f c/o rash and joint pain malar rash and arth...",input:"23yo f c/o rash and joint pain malar rash and arthralgias for 3 months pmh none on none vs bp 136/86 hr 88 t 367 rr 20 spo2 95 pe skin: malar rash labs ana positive imaging none dx systemic lupus erythematosus",output:`### Subjective
23-year-old female with rash and joint pain. Malar rash and arthralgias for 3 months. ROS: Photosensitivity.
Past Medical History: None
Medications: None
Allergies: NKDA

### Objective
Vital Signs:
- Blood Pressure: 136/86 mmHg
- Heart Rate: 88 bpm
- Temperature: 36.7°C
- Respiratory Rate: 20 /min
- Oxygen Saturation: 95% on room air

Physical Examination:
- Skin: malar rash

Laboratory Results:
- ANA: Positive  (Ref: )

Imaging/Diagnostics:
- None

### Assessment
Primary Diagnosis: Systemic lupus erythematosus (ICD-10: M32.9)

Differential Diagnoses:
- Dermatomyositis

### Plan
1. Start hydroxychloroquine 200 mg BID
2. Sun protection counseling`}]}];class y{state={selectedDeptId:null,selectedCaseId:null,viewMode:"grid",mobileTab:"original",isSidebarOpen:!1};listeners=new Set;getState(){return this.state}getDepartment(n){return d.find(i=>i.name===n)}getCase(n,i){return this.getDepartment(n)?.cases.find(a=>a.id===i)}setDepartment(n){this.state.selectedDeptId=n,this.state.selectedCaseId=null,this.state.isSidebarOpen=!1,this.notify()}setCase(n){this.state.selectedCaseId=n,this.state.mobileTab="original",this.notify()}setViewMode(n){this.state.viewMode=n,this.notify()}setMobileTab(n){this.state.mobileTab=n,this.notify()}toggleSidebar(n){this.state.isSidebarOpen=n??!this.state.isSidebarOpen,this.notify()}subscribe(n){return this.listeners.add(n),n(this.state),()=>this.listeners.delete(n)}notify(){this.listeners.forEach(n=>n(this.state))}}const o=new y;function p(e){const n=o.getState();e.className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-4 sticky top-0 z-20",e.innerHTML=`
    <div class="flex items-center gap-3">
      <!-- Mobile Menu Button -->
      <button id="menu-btn" class="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
      
      <!-- Logo / Title -->
      <!-- Logo / Title -->
      <button id="home-btn" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <div class="hidden sm:flex w-8 h-8 bg-indigo-600 rounded-lg items-center justify-center text-white font-bold shadow-lg shadow-indigo-200">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        </div>
        <h1 class="font-bold text-slate-800 text-lg tracking-tight block">AlloyRX</h1>
      </button>

      <!-- Breadcrumbs (Desktop) -->
      <div class="hidden md:flex items-center text-sm text-slate-500 ml-4 border-l border-slate-200 pl-4 h-8">
        <span>Departments</span>
        ${n.selectedDeptId?`
          <svg class="w-4 h-4 mx-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          <span class="font-medium text-slate-900">${n.selectedDeptId}</span>
        `:""}
        ${n.selectedCaseId?`
          <svg class="w-4 h-4 mx-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          <span class="font-medium text-slate-900">Case ${n.selectedCaseId}</span>
        `:""}
      </div>
    </div>

    <!-- Actions -->
    <div class="flex items-center gap-2">
      <a href="https://github.com" target="_blank" class="p-2 text-slate-400 hover:text-slate-600 transition-colors">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      </a>
      <div class="w-8 h-8 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sara" alt="Dr. Sara" />
      </div>
    </div>
  `,e.querySelector("#menu-btn")?.addEventListener("click",()=>{const i=o.getState();o.toggleSidebar(!i.isSidebarOpen)}),e.querySelector("#home-btn")?.addEventListener("click",()=>{o.setDepartment(null)})}function g(e){const n=o.getState(),i=`fixed inset-y-0 left-0 z-30 w-64 bg-slate-900 text-slate-300 transform transition-transform duration-300 ease-in-out ${n.isSidebarOpen?"translate-x-0":"-translate-x-full"}`,s="hidden md:flex w-64 bg-slate-900 text-slate-300 flex-col h-full border-r border-slate-800 shrink-0";e.className=`${s} ${i}`,e.className=`
    fixed md:relative z-30 inset-y-0 left-0 w-64 bg-slate-950 text-slate-400 flex flex-col transition-transform duration-300 ease-in-out border-r border-indigo-500/10
    ${n.isSidebarOpen?"translate-x-0":"-translate-x-full md:translate-x-0"}
  `,e.innerHTML=`
    <div class="h-16 flex items-center px-6 border-b border-white/5 md:hidden">
       <span class="font-bold text-white tracking-wide">Menu</span>
       <button id="close-sidebar" class="ml-auto text-slate-500 hover:text-white">
         <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
       </button>
    </div>

    <div class="flex-1 overflow-y-auto p-4 custom-scrollbar">
      <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-2">Departments</div>
      <nav class="space-y-1">
        ${d.map(a=>{const t=n.selectedDeptId===a.name;return`
            <button 
              data-dept="${a.name}"
              class="w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all group flex items-center justify-between
              ${t?"bg-indigo-600/10 text-indigo-400":"hover:bg-white/5 hover:text-white"}"
            >
              <span>${a.name}</span>
              ${t?'<div class="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>':""}
            </button>
          `}).join("")}
      </nav>
    </div>
    
    <div class="mt-auto p-4 border-t border-white/5">
       <div class="bg-indigo-500/20 rounded-xl p-4 border border-indigo-500/20">
         <h3 class="text-white text-xs font-bold mb-1">AI Powered</h3>
         <p class="text-xs text-indigo-200/70">Notes are structured automatically.</p>
       </div>
    </div>
  `,e.querySelectorAll("button[data-dept]").forEach(a=>{a.addEventListener("click",()=>{const t=a.getAttribute("data-dept");o.setDepartment(t)})}),e.querySelector("#close-sidebar")?.addEventListener("click",()=>{o.toggleSidebar(!1)})}function h(e,n){e.classList.add("p-6","md:p-8","animate-fade-in"),e.innerHTML=`
    <div class="mb-8">
      <h2 class="text-3xl font-bold text-slate-800 tracking-tight">${n.name}</h2>
      <p class="text-slate-500 mt-2 text-lg">Select a case to view structured notes.</p>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      ${n.cases.map((i,s)=>`
        <button 
          data-case="${i.id}"
          class="group relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 text-left flex flex-col h-56 overflow-hidden"
        >
          <div class="absolute top-0 right-0 p-4 opacity-50 text-slate-200 group-hover:text-indigo-50 transition-colors">
            <svg class="w-24 h-24 transform translate-x-8 -translate-y-8" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          </div>
          
          <div class="relative z-10 flex flex-col h-full">
            <div class="flex items-center justify-between mb-4">
              <span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-bold">
                ${s+1}
              </span>
              <span class="text-xs font-semibold text-slate-400 group-hover:text-indigo-500 transition-colors">View Note &rarr;</span>
            </div>
            
            <h3 class="font-medium text-slate-700 group-hover:text-slate-900 line-clamp-3 leading-relaxed">
              ${i.description}
            </h3>
            
            <div class="mt-auto pt-4 flex items-center gap-2 text-xs text-slate-400">
               <span class="bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full">Processed</span>
               <span>•</span>
               <span>${i.input.length} chars</span>
            </div>
          </div>
          
          <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </button>
      `).join("")}
    </div>
  `,e.querySelectorAll("button[data-case]").forEach(i=>{i.addEventListener("click",()=>{o.setCase(i.getAttribute("data-case"))})})}function f(e,n){const i=o.getState();e.classList.add("flex","flex-col","h-full","bg-slate-50","relative","overflow-hidden"),e.innerHTML=`
    <!-- Top Bar Navigation (Context) -->
    <div class="bg-white border-b border-slate-200 px-4 py-3 flex items-center gap-4 shrink-0 shadow-sm z-10">
      <button id="back-grid" class="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
      </button>
      <div class="overflow-hidden">
        <div class="text-xs font-bold text-indigo-500 uppercase tracking-wider">Case ${n.id}</div>
        <div class="text-sm font-medium text-slate-700 truncate">${n.description}</div>
      </div>
      
      <!-- Mobile Tabs Switcher -->
      <div class="ml-auto flex md:hidden bg-slate-100 rounded-lg p-1 gap-1">
        <button data-tab="original" class="px-3 py-1.5 text-xs font-medium rounded-md transition-all ${i.mobileTab==="original"?"bg-white shadow text-slate-800":"text-slate-500"}">Original</button>
        <button data-tab="structured" class="px-3 py-1.5 text-xs font-medium rounded-md transition-all ${i.mobileTab==="structured"?"bg-white shadow text-indigo-600":"text-slate-500"}">structured</button>
      </div>
    </div>
    
    <!-- Content Area -->
    <div class="flex-1 relative overflow-hidden">
      <div class="absolute inset-0 flex flex-col md:flex-row">
        
        <!-- Original Note Pane -->
        <div class="
          w-full md:w-1/2 h-full flex flex-col border-r border-slate-200 bg-[#fffdf5] 
          transition-transform duration-300 absolute md:relative
          ${i.mobileTab==="original"?"translate-x-0 z-10":"-translate-x-full md:translate-x-0 z-0"}
        ">
           <div class="px-6 py-3 border-b border-amber-200/50 bg-amber-50 flex items-center justify-between shadow-sm">
             <span class="text-xs font-bold text-amber-800 flex items-center gap-2">
               <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
               RAW INPUT
             </span>
           </div>
           <div class="flex-1 overflow-y-auto p-6 font-mono text-sm leading-relaxed text-slate-700 whitespace-pre-wrap">
${n.input}
           </div>
        </div>
        
        <!-- Structured Note Pane -->
        <div class="
          w-full md:w-1/2 h-full flex flex-col bg-white
          transition-transform duration-300 absolute md:relative
          ${i.mobileTab==="structured"?"translate-x-0 z-10":"translate-x-full md:translate-x-0 z-0"}
        ">
           <div class="px-6 py-3 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between shadow-sm">
             <span class="text-xs font-bold text-indigo-600 flex items-center gap-2">
               <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
               AI STRUCTURED
             </span>
           </div>
           <div class="flex-1 overflow-y-auto p-8 prose prose-slate prose-sm max-w-none">
             ${b(n.output)}
           </div>
        </div>
        
      </div>
    </div>
  `,e.querySelector("#back-grid")?.addEventListener("click",()=>{o.setCase(null)}),e.querySelectorAll("button[data-tab]").forEach(s=>{s.addEventListener("click",()=>{const a=s.getAttribute("data-tab");o.setMobileTab(a)})})}function b(e){return e.replace(/^### (.*$)/gm,'<h3 class="text-lg font-bold text-slate-800 mt-6 mb-3 flex items-center gap-2"><div class="w-1 h-4 bg-indigo-500 rounded-full"></div>$1</h3>').replace(/^## (.*$)/gm,'<h2 class="text-xl font-bold text-slate-900 mt-8 mb-4 border-b border-slate-100 pb-2">$1</h2>').replace(/\n/g,"<br />").replace(/([A-Z][a-zA-Z\s]+):/g,'<strong class="text-slate-900">$1:</strong>')}const D=document.querySelector("#app");D.innerHTML=`
  <div class="flex h-[100dvh] w-full bg-slate-50 text-slate-900 font-sans overflow-hidden">
    <!-- Sidebar Container -->
    <aside id="sidebar-container"></aside>
    
    <!-- Main Area -->
    <div class="flex-1 flex flex-col h-full min-w-0 relative">
      <header id="header-container"></header>
      <main id="main-content" class="flex-1 relative"></main>
      
      <!-- Mobile Overlay -->
      <div id="mobile-overlay" class="fixed inset-0 bg-slate-900/50 z-20 transition-opacity duration-300 pointer-events-none opacity-0 md:hidden"></div>
    </div>
  </div>
`;const c=document.getElementById("sidebar-container"),u=document.getElementById("header-container"),r=document.getElementById("main-content"),l=document.getElementById("mobile-overlay");g(c);p(u);o.subscribe(e=>{if(p(u),c.firstElementChild&&g(c),e.isSidebarOpen?(l.classList.remove("pointer-events-none","opacity-0"),l.classList.add("opacity-100","pointer-events-auto")):(l.classList.remove("opacity-100","pointer-events-auto"),l.classList.add("pointer-events-none","opacity-0")),r.innerHTML="",r.className="flex-1 relative bg-slate-50",e.selectedDeptId){const i=o.getDepartment(e.selectedDeptId);if(!i)return;if(e.selectedCaseId){const s=o.getCase(e.selectedDeptId,e.selectedCaseId);s&&(r.classList.add("overflow-hidden","flex","flex-col"),f(r,s))}else r.classList.add("overflow-y-auto","scroll-smooth"),h(r,i)}else r.classList.add("overflow-y-auto","scroll-smooth"),v(r)});function v(e){const n=d.reduce((i,s)=>i+s.cases.length,0);e.classList.add("p-8","animate-fade-in","max-w-5xl","mx-auto"),e.innerHTML=`
      <div class="mb-12 text-center md:text-left">
        <h1 class="text-4xl font-bold text-slate-900 tracking-tight mb-4">Welcome back, Dr. Sara</h1>
        <p class="text-slate-500 text-lg max-w-2xl">
          Select a department from the sidebar to view automated clinical note restructuring.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div class="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
          </div>
          <div>
            <div class="text-2xl font-bold text-slate-900">${d.length}</div>
            <div class="text-sm font-medium text-slate-500">Departments</div>
          </div>
        </div>
        
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div class="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div>
            <div class="text-2xl font-bold text-slate-900">${n}</div>
            <div class="text-sm font-medium text-slate-500">Processed Cases</div>
          </div>
        </div>
        
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div class="p-3 bg-amber-50 text-amber-600 rounded-xl">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div>
            <div class="text-2xl font-bold text-slate-900">100%</div>
            <div class="text-sm font-medium text-slate-500">Uptime</div>
          </div>
        </div>
      </div>
      
      <div>
        <h2 class="text-xl font-bold text-slate-800 mb-6">Quick Navigation</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
           ${d.slice(0,10).map(i=>`
             <button data-dept="${i.name}" class="p-4 bg-white border border-slate-200 rounded-xl hover:border-indigo-300 hover:shadow-md transition-all text-center group">
               <div class="font-medium text-slate-700 group-hover:text-indigo-600 truncate">${i.name}</div>
               <div class="text-xs text-slate-400 mt-1">${i.cases.length} cases</div>
             </button>
           `).join("")}
        </div>
      </div>
    `,e.querySelectorAll("button[data-dept]").forEach(i=>{i.addEventListener("click",()=>{o.setDepartment(i.getAttribute("data-dept"))})})}l.addEventListener("click",()=>o.toggleSidebar(!1));

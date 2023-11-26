import { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';

export default function EducationalHistoryComponent() {
    const [educationalData, setEducationalData] = useState({});
    const [selectedLevel, setSelectedLevel] = useState("0");
    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
    const [levelOptions, setLevelOptions] = useState([]);
    const [selectedAchievements, setSelectedAchievements] = useState(null);
    const [dniLogin , setDniLogin] = useState(localStorage.getItem("dniLogin")  ? localStorage.getItem("dniLogin")  : ''); 

    useEffect(() => {
        const fetchEducationalData = async (selectedLevel) => {
            try {
                const response = await fetch('https://api-goverment-agency.onrender.com/agencies/educational-agencies', {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0NTc1NTE0NSIsInR5cGUiOiJMZWdhbCBFbnRpdHkiLCJzdWJ0eXBlIjoiRWR1Y2F0aW9uYWwgQWdlbmN5Iiwia2V5IjoiJDJiJDEyJGZOZU9JV2hwQVlZTEVKZWRHYUhkSmVmU3RmeXlMemJoVGpINkd3NXdIL1FOcTRKQWJxVTJLIiwiZXhwIjoxNzMxODA3ODE1fQ.NwJN5d38Y5VP9lGLA6I2OuEJXm4aWH_zEeh34DKr2RM',
                    },
                });
                const data = await response.json();
                console.log('Data: ', data)
        
                if ('Educational Agencies' in data && Array.isArray(data['Educational Agencies'])) {
                    const selectedAgency = data['Educational Agencies'].find((agencyData) => {
                        const agencyKey = Object.keys(agencyData)[0];
                        const agencyInfo = agencyData[agencyKey];
        
                        if (agencyInfo && agencyInfo.education_histories) {
                            const selectedLevelItem = agencyInfo.education_histories.find(educationData => {
                                const educationKey = Object.keys(educationData)[0];
                                const education = educationData[educationKey];
                                return education.education === selectedLevel;
                            });
        
                            if (selectedLevelItem) {
                                const key = Object.keys(selectedLevelItem)[0];
                                setEducationalData(selectedLevelItem[key]);
                                setShowAdditionalInfo(true);
                                return true;
                            } else {
                                console.error('Education not found for level:', selectedLevel);
                            }
                        }
        
                        return false;
                    });
        
                    console.log('Selected Agency: ', selectedAgency);
        
                    if (!selectedAgency) {
                        console.error('Agency not found for level:', selectedLevel);
                    }
                } else {
                    console.error('Invalid data format for educational data:', data);
                }
            } catch (error) {
                console.error('Error fetching educational data:', error);
            }
        };  

        const fetchLevelOptions = async () => {
            try {
                const response = await fetch('https://api-goverment-agency.onrender.com/agencies/educational-agencies', {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0NTc1NTE0NSIsInR5cGUiOiJMZWdhbCBFbnRpdHkiLCJzdWJ0eXBlIjoiRWR1Y2F0aW9uYWwgQWdlbmN5Iiwia2V5IjoiJDJiJDEyJGZOZU9JV2hwQVlZTEVKZWRHYUhkSmVmU3RmeXlMemJoVGpINkd3NXdIL1FOcTRKQWJxVTJLIiwiZXhwIjoxNzMxODA3ODE1fQ.NwJN5d38Y5VP9lGLA6I2OuEJXm4aWH_zEeh34DKr2RM',
                    },
                });
                const responseData = await response.json();
                console.log('Response Data: ', responseData)

                if ('Educational Agencies' in responseData && Array.isArray(responseData['Educational Agencies'])) {
                    const options = responseData['Educational Agencies']
                        .flatMap(agency => {
                            const key = Object.keys(agency)[0];
                            return agency[key].education_histories.map(education => {
                                return {
                                    label: `Level Education: ${education[dniLogin].education}`,
                                    value: education[dniLogin].education
                                };
                            });
                        });

                    setLevelOptions(options);
                } else {
                    console.error('Invalid data format for educational options:', responseData);
                }
            } catch (error) {
                console.error('Error fetching educational options:', error);
            }
        };

        if (selectedLevel !== "0") {
            fetchEducationalData(selectedLevel);
        } else {
            setShowAdditionalInfo(false);
        }

        fetchLevelOptions();
    }, [selectedLevel]);

    const handleChangeLevel = (event) => {
        setSelectedLevel(event.target.value);
    };
    
    const handleChangeAchievements = (event) => {
        setSelectedAchievements(event.target.value);
    };
    
    return (
        <div>
            <FormControl style={{ width: '750px', border: '5px solid black', marginLeft: '100px ', backgroundColor: '#696969' }}>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedLevel}
                    label="Education"
                    onChange={handleChangeLevel}
                >
                    <MenuItem value="0">Select an educational level</MenuItem>
                    {levelOptions.map((option, index) => (
                        <MenuItem key={index} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            {showAdditionalInfo && selectedLevel !== "0" && (
                <> 
                    <div className="rectangle-container">
                        <div className="rectangule-left"> Name Institution </div>
                        <div className="rectangule-right">{educationalData.name_institution}</div>
                    </div>
                    <div className="rectangle-container">
                        <div className="rectangule-left"> Title Obtained </div>
                        <div className="rectangule-right">{educationalData.title_obtained}</div>
                    </div>
                    <div className="rectangle-container">
                        <div className="rectangule-left"> Location </div>
                        <div className="rectangule-right">{educationalData.location.street}, {educationalData.location.number}, {educationalData.location.apartment}, {educationalData.location.postal_code}, {educationalData.location.locality}, {educationalData.location.department}, {educationalData.location.country}</div>
                    </div>
                    <FormControl style={{ width: '750px', border: '5px solid black', marginTop: '30px', marginLeft: '100px', backgroundColor: '#808080' }}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedAchievements}
                            label="Academic Achievements"
                            onChange={handleChangeAchievements}
                        >
                            <MenuItem value={0}>
                                Academic Achievements
                            </MenuItem>
                            {educationalData.academic_achievements && educationalData.academic_achievements.map((academic_achievement, index) => (
                                <MenuItem key={index} value={index + 1} disabled={academic_achievement === "None"}>
                                    {academic_achievement === "None" ? "You have no academic achievements." : academic_achievement}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <div className="rectangle-container-bottom" style={{marginBottom: '20px'}}>
                        <div className="rectangule-left-bottom"> Date Graduation </div>
                        <div className="rectangule-right-bottom">{educationalData.date_graduation}</div>
                    </div>
                </>
            )}
        </div>
    );
}

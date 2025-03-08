import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { VolunteerRegistration } from "./VolunteerRegistration";
import { EducationalDetails } from "./EducationalDetails";
import { CommunicationDetails } from "./CommunicationDetails";
import { EmergencyDetails } from "./EmergencyDetails";

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}>
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const RegistrationTabs = () => {
  const [value, setValue] = useState(0);
  const labels = [
    "Volunteer Registration",
    "Educational Details",
    "Communication Details",
    "Emergency Details",
  ];

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box>
        <Tabs
          onChange={handleTabChange}
          value={value}
          style={{ backgroundColor: "lightblue" }}>
          {labels.map((item: any) => (
            <Tab
              key={item}
              label={
                <div style={{ display: "flex", alignItems: "center" }}>
                  {item}
                </div>
              }
            />
          ))}
        </Tabs>
        <TabPanel value={value} index={0}>
          <VolunteerRegistration />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <EducationalDetails />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CommunicationDetails />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <EmergencyDetails />
        </TabPanel>
      </Box>
    </>
  );
};
export default RegistrationTabs;

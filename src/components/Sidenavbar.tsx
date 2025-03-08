import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import "./Sidenavbar.css";
import { useNavigate } from "react-router-dom";

export const Sidenavbar = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const navigete = useNavigate();
  const onToggle = (key: string) => {
    setExpanded(expanded === key ? null : key);
  };
  const Navigatte = (name: string) => {
    if (name === "VolunteerList") {
      navigete("/VolunteerList");
    }
  };
  return (
    <div>
      <p>VMS</p>

      <Accordion activeKey={expanded}>
        <Accordion.Item eventKey="0">
          <Accordion.Header onClick={() => onToggle("0")}>
            <span style={{ marginRight: "90px" }}>Masters</span>
            <span>{expanded === "0" ? <FaAngleDown /> : <FaAngleUp />}</span>
          </Accordion.Header>
          <Accordion.Body>
            <span>
              <li onClick={() => Navigatte("Project")}>Project</li>
            </span>
            <span>
              <li>Form</li>
            </span>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion activeKey={expanded}>
        <Accordion.Item eventKey="1">
          <Accordion.Header onClick={() => onToggle("1")}>
            <span style={{ marginRight: "68px" }}>Transaction</span>
            <span>{expanded === "0" ? <FaAngleDown /> : <FaAngleUp />}</span>
          </Accordion.Header>
          <Accordion.Body>
            <span>
              <li onClick={() => Navigatte("VolunteerList")}>Volunteer List</li>
            </span>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

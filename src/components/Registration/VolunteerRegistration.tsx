import { Col, Container, Row } from "react-bootstrap";
import TextField from "../UI/TextField";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SelectField from "../UI/SelectField";
import DateField from "../UI/DateField";

export const VolunteerRegistration = () => {
  const RegistrationInitialValues = {
    firstname: "",
    lastname: "",
    dateofregistration: "",
    volunteerinitials: "",
    gender: "",
    relationtype: "",
    fathername: "",
    dateofbirth: "",
    age: "",
    diet: "",
    race: "",
    weight: "",
    height: "",
    bmi: "",
  };
  const RegistrationSchema = z.object({});
  const RegistrationForm = useForm<any>({
    mode: "onChange",
    defaultValues: RegistrationInitialValues,
    resolver: zodResolver(RegistrationSchema),
  });

  return (
    <>
      <Container>
        <Row>
          <Col xl={4} lg={4} md={4} sm={4}>
            <TextField
              name={"firstname"}
              label={"First Name"}
              control={RegistrationForm.control}
              required={true}
            />
          </Col>
          <Col xl={4} lg={4} md={4} sm={4}>
            <TextField
              name={"lastname"}
              label={"Last Name"}
              control={RegistrationForm.control}
              required={true}
            />
          </Col>

          <Col xl={4} lg={4} md={4} sm={4}>
            <TextField
              name={"volunteerinitials"}
              label={"Volunteer Initials"}
              control={RegistrationForm.control}
              required={true}
            />
          </Col>

          <Col xl={4} lg={4} md={4} sm={4}>
            <DateField
              name={"dateofregistration"}
              label={"Date of Registration"}
              control={RegistrationForm.control}
              required={true}
            />
          </Col>
          <Col xl={4} lg={4} md={4} sm={4}>
            <SelectField
              name={"gender"}
              label={"Gender"}
              options={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
              ]}
              control={RegistrationForm.control}
              required={true}
            />
          </Col>
          <Col xl={4} lg={4} md={4} sm={4}>
            <TextField
              name={"relationtype"}
              label={"Relation Type"}
              control={RegistrationForm.control}
              required={true}
            />
          </Col>
          <Col xl={4} lg={4} md={4} sm={4}>
            <TextField
              name={"fathername"}
              label={"Father Name"}
              control={RegistrationForm.control}
              required={true}
            />
          </Col>
          <Col xl={4} lg={4} md={4} sm={4}>
            <TextField
              name={"age"}
              label={"Age"}
              control={RegistrationForm.control}
              type={"number"}
              required={true}
            />
          </Col>
          <Col xl={4} lg={4} md={4} sm={4}>
            <TextField
              name={"height"}
              label={"Height"}
              control={RegistrationForm.control}
              type={"number"}
              required={true}
            />
          </Col>
          <Col xl={4} lg={4} md={4} sm={4}>
            <TextField
              name={"weight"}
              label={"Weight"}
              control={RegistrationForm.control}
              type={"number"}
              required={true}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

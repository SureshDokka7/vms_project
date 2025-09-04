import { Col, Container, Row } from "react-bootstrap";
import TextField from "../UI/TextField";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SelectField from "../UI/SelectField";
import DateField from "../UI/DateField";
import useVMSMutation from "../../Hooks/useVMSMutation";
import { ToastContainer } from "react-toastify";

interface RegistrationFormValues {
  firstname: string;
  lastname: string;
  dateofregistration: string;
  dateofbirth: string;
  volunteerinitials: string;
  gender: string;
  relationtype: string;
  fathername: string;
  age: string;
  diet: string;
  race: string;
  weight: string;
  height: string;
  bmi: string;
}

export const VolunteerRegistration = () => {
  const RegistrationInitialValues: RegistrationFormValues = {
    firstname: "",
    lastname: "",
    dateofregistration: "",
    dateofbirth: "",
    volunteerinitials: "",
    gender: "",
    relationtype: "",
    fathername: "",
    age: "",
    diet: "",
    race: "",
    weight: "",
    height: "",
    bmi: "",
  };

  const RegistrationSchema = z.object({
    firstname: z.string({ required_error: "First Name is required" }),
    lastname: z.string(),
    dateofregistration: z.string(),
    volunteerinitials: z.string(),
    dateofbirth: z.string(),
    gender: z.string(),
    relationtype: z.string(),
    fathername: z.string(),
    age: z.string(),
    diet: z.string(),
    race: z.string(),
    weight: z.string(),
    height: z.string(),
    bmi: z.string(),
  });

  const RegistrationForm = useForm<RegistrationFormValues>({
    mode: "onChange",
    defaultValues: RegistrationInitialValues,
    resolver: zodResolver(RegistrationSchema),
  });

  const formSubmit = () => {
    const valuesform = RegistrationForm.getValues();
    console.log(valuesform, "valuesform");

    const postParams = {
      registrationNo : 1,
      dateofRegistration : valuesform.dateofregistration,
      volunteerIntials : valuesform.volunteerinitials,
      firstName : valuesform.firstname,
      surName : valuesform.lastname,
      gender : valuesform.gender,
      fatherorHusbandName : valuesform.fathername,
      dateofBirth : valuesform.dateofbirth,
      age : valuesform.age,
      diet : valuesform.diet,
      race : valuesform.race,
      weight : valuesform.weight,
      bmi : valuesform.bmi,
      // identificationMarks : "NA",
      // addfingerprints : "NA",
      // takePhoto : "NA",
      // files : "NA",
      height : valuesform.height,
    }
    insertRegistration.mutateAsync({postParams: postParams})
  }

  const insertRegistration = useVMSMutation({
    endPointUrl: "registration/userRegistrationStep1",
    onSuccess: (response : any) => {
      if(response.status === 201){
        const message = response.data.message;
        alert(message);
      }
      console.log("Registration Success");
    },
    key: "registration",
  })

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
            <DateField
              name={"dateofbirth"}
              label={"Date of Birth"}
              control={RegistrationForm.control}
              required={true}
            />
          </Col>
          <Col xl={4} lg={4} md={4} sm={4}>
            <TextField
              name={"race"}
              label={"Race"}
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
          <div>
            <button style={{ borderRadius: "5px" }} onClick={RegistrationForm.handleSubmit(formSubmit)}>
              Submit
            </button>
          </div>
        </Row>
        <ToastContainer />
      </Container>
    </>
  );
};

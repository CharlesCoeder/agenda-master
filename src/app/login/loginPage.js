import {
    Card,
    Input,
    Button,
    Typography,
  } from "../components/materialTailwind";

import { ActiveUserContext } from "../components/ActiveUserContext";
import { useContext } from "react";
   
  export default function LoginPage() {

    const { activeUser, setActiveUser } = useContext(ActiveUserContext);

    const handleSubmit = async (e) => {
      e.preventDefault();


    }



    return (
       <Card className="p-8" color="white" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Welcome to Agenda Master
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Sign in to continue.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              id="email"
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="***********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              id="password"
            />
          </div>
          <Button className="mt-6 bg-indigo-500" fullWidth onSubmit={handleSubmit}>
            Sign In
          </Button>
        </form>
      </Card>
    );
  }
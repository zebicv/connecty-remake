import { Form } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useState } from "react";

function SingupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [bio, setBio] = useState("bio");

  function handleUsername(username: string) {
    setUsername(username);
  }

  function handleEmail(email: string) {
    setEmail(email);
  }

  function handlePassword(password: string) {
    setPassword(password);
  }

  function handleConfirmPassword(password: string) {
    setConfirmPassword(password);
  }

  const navigate = useNavigate();

  function handleSwitch() {
    navigate("/");
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "test@example.com",
          username: "testuser",
          password: "password123",
          confirmPassword: "password123",
          bio: "This is a test bio.",
        }),
      });

      if (!response.ok) {
        console.log(response.status);
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log(result); // Handle the response from the server
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className="flex h-lvh items-center justify-center border">
      <form
        method="POST"
        className="rounded-lg bg-white p-10 shadow-lg sm:w-[440px]"
        onSubmit={handleOnSubmit}
      >
        <div className="mb-6 flex items-center justify-between gap-10 max-[350px]:gap-6">
          <h1 className="text-lg font-semibold">Sign up</h1>
          <button
            type="button"
            className="text-sm text-yellow-600 underline underline-offset-4"
            onClick={handleSwitch}
          >
            I have an account
          </button>
        </div>

        <Input
          fieldName="username"
          placeholder="John Doe"
          type="text"
          onChange={handleUsername}
        />
        <Input
          fieldName="email"
          placeholder="me@example.com"
          type="email"
          onChange={handleEmail}
        />
        <Input
          fieldName="create_password"
          placeholder="*********"
          type="password"
          onChange={handlePassword}
        />
        <Input
          fieldName="confirm_password"
          placeholder="*********"
          type="password"
          onChange={handleConfirmPassword}
        />

        <div className="flex justify-between gap-4">
          {/* <Button type="button" onClick={handleSwitch}>
        Switch to login
      </Button> */}
          <Button type="submit">Sign up</Button>
        </div>
      </form>
    </main>
    // <main className="flex h-lvh items-center justify-center">
    //   <Form method="post">
    //     <Input
    //       fieldName="username"
    //       placeholder="John Doe"
    //       type="text"
    //       onChange={handleUsername}
    //     />
    //     <Input
    //       fieldName="email"
    //       placeholder="me@example.com"
    //       type="email"
    //       onChange={handleEmail}
    //     />
    //     <Input
    //       fieldName="create_password"
    //       placeholder="*********"
    //       type="password"
    //       onChange={handlePassword}
    //     />
    //     <Input
    //       fieldName="confirm_password"
    //       placeholder="*********"
    //       type="password"
    //       onChange={handleConfirmPassword}
    //     />

    //     <div className="flex justify-between gap-4">
    //       <Button type="button" onClick={handleSwitch}>
    //         Switch to login
    //       </Button>
    //       <Button type="submit">Sign up</Button>
    //     </div>
    //   </Form>
    // </main>
  );
}

export default SingupForm;

import Avatar from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const CreateChatbot = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:space-x-10 bg-white p-10 rounded-md m-10">
      <Avatar seed={"Clo"} />
      <div className="">
        <h1 className="text-xl lg:text-3xl font-semibold">Create</h1>
        <h2 className="font-light">
          Create your first chatbot with Clodron. It would be increase your
          customer experience.
        </h2>
        <form className="flex flex-col md:flex-row gap-2 mt-5" action="">
          <Input
            placeholder="Enter Your Chatbot's Name"
            className="max-w-lg"
            type="text required"
          />
          <Button>Create Chatbot</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateChatbot;

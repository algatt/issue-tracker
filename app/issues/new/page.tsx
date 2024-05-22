"use client";

import { Button, TextField } from "@radix-ui/themes";
import SimpleMde from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Title"></TextField.Root>
      <SimpleMde placeholder="Description"></SimpleMde>
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;

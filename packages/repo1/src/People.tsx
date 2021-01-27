import React, { useState } from "react";
import { PeopleInfo } from "./PeopleType";

type People = {
  working: boolean;
} & PeopleInfo;

export default function People() {
  const [people] = useState<People>({
    working: false,
    name: "Tom",
    gender: "male",
  });

  return <div>{people.name}</div>;
}

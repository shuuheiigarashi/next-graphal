"use client";
import WithApollo from "../components/functional/WithApollo";
import { User } from "@/components/templates/User";

export default function Home() {
  return (
    <WithApollo>
      <User />
    </WithApollo>
  );
}

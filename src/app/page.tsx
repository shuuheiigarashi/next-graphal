"use client";
import styles from "./page.module.css";
import WithApollo from "../components/functional/WithApollo";
import { User } from "@/components/templates/User";

export default function Home() {
  return (
    <main className={styles.main}>
      <WithApollo>
        <User />
      </WithApollo>
    </main>
  );
}

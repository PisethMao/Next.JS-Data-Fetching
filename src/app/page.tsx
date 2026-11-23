import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jenkins CI/CD Pipeline",
  description: "Testing automatic deployment using GitHub Webhook",
};

export default function Home() {
  return (
    <main style={{ padding: "50px", textAlign: "center" }}>
      <h1>Jenkins CI/CD Pipeline</h1>
      <h2>Deployment Version 2.0</h2>
      <p>Successfully deployed using GitHub Webhook!</p>
      <p>This is a test deployment.</p>
      <p>Happy coding!</p>
      <p>Welcome to the Jenkins CI/CD Pipeline!</p>
    </main>
  );
}
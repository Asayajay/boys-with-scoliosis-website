import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bracing & Treatment — Boys with Scoliosis",
};

export default function BracingAndTreatmentPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl mb-4">Bracing &amp; Treatment</h1>
      <p>
        [Content: overview of bracing, physical therapy, and surgical
        treatment options goes here]
      </p>
    </main>
  );
}

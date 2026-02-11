
"use client";

import { useState } from "react";

export default function Home() {
  const [exercise, setExercise] = useState<File | null>(null);
  const [solution, setSolution] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);

  async function submit() {
    if (!exercise || !solution) return alert("Upload both files");

    const form = new FormData();
    form.append("exercise", exercise);
    form.append("solution", solution);

    const res = await fetch("/api/review", {
      method: "POST",
      body: form
    });

    const data = await res.json();
    setResult(data);
  }

  return (
    <main style={{ maxWidth: 900, margin: "auto", padding: 20 }}>
      <h1>Math Critic</h1>

      <input type="file" onChange={e => setExercise(e.target.files?.[0] || null)} />
      <input type="file" onChange={e => setSolution(e.target.files?.[0] || null)} />

      <br /><br />
      <button onClick={submit}>Analyze</button>

      {result && (
        <pre style={{ marginTop: 20, background: "#fff", padding: 15 }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </main>
  );
}

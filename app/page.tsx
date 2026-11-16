
"use client";

import dynamic from "next/dynamic";

const Pole3D = dynamic(() => import("./Pole3D"), {
  ssr: false,
});

import { useState } from "react";

const colors = [
  { name: "Black", hex: "#171717" },
  { name: "Gold", hex: "#C9A45C" },
  { name: "Silver", hex: "#A7ADB4" },
  { name: "White", hex: "#F5F5F5" },
  { name: "Bronze", hex: "#895B42" },
];

export default function Home() {
  const [pole, setPole] = useState("decorative");
  const [poleColor, setPoleColor] = useState(colors[0]);
  const [accentColor, setAccentColor] = useState(colors[1]);
  const [projectName, setProjectName] = useState("HAY AL WAFAA");

  return (
    <main className="min-h-screen bg-slate-100 p-5 text-slate-900 md:p-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-center justify-between border-b border-slate-300 pb-5">
          
<div className="flex items-center">
  <img
    src="/solas-logo.png?v=2"
    alt="SOLAS Energy"
    className="h-16 w-auto object-contain"
  />
</div>

          <span className="text-sm font-medium">Pole Configurator</span>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">
              Customize Your Pole
            </h2>

            <label className="mb-2 block font-medium">Pole Type</label>
            <select
              value={pole}
              onChange={(e) => setPole(e.target.value)}
              className="mb-6 w-full rounded-lg border p-3"
            >
              <option value="decorative">Decorative Solar Pole</option>
              <option value="standard">Standard Solar Pole</option>
              <option value="double">Double Arm Solar Pole</option>
            </select>

            <p className="mb-3 font-medium">Pole Color</p>
            <div className="mb-6 flex flex-wrap gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  title={color.name}
                  aria-label={`Pole color ${color.name}`}
                  aria-pressed={poleColor.name === color.name}
                  onClick={() => setPoleColor(color)}
                  className={`h-11 w-11 rounded-full border-4 ${
                    poleColor.name === color.name
                      ? "border-blue-500"
                      : "border-slate-200"
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>

            <p className="mb-3 font-medium">Decorative Accent Color</p>
            <div className="mb-6 flex flex-wrap gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  title={color.name}
                  aria-label={`Accent color ${color.name}`}
                  aria-pressed={accentColor.name === color.name}
                  onClick={() => setAccentColor(color)}
                  className={`h-11 w-11 rounded-full border-4 ${
                    accentColor.name === color.name
                      ? "border-blue-500"
                      : "border-slate-200"
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>

            <label className="mb-2 block font-medium">
              Engraved Project Name
            </label>
            <input
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              maxLength={35}
              placeholder="Enter project name"
              className="w-full rounded-lg border p-3"
            />
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Live Preview</h2>

            <div className="relative flex h-[440px] items-end justify-center overflow-hidden rounded-xl bg-gradient-to-b from-sky-100 to-slate-200">
              
<Pole3D
  poleColor={poleColor.hex}
  accentColor={accentColor.hex}
  projectName={projectName}
/>

            </div>

            <p className="mt-4 text-center text-sm text-slate-500">
              Initial concept preview — not a manufacturing drawing
            </p>
            <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm">
              <p><strong>Type:</strong> {pole}</p>
              <p><strong>Pole:</strong> {poleColor.name}</p>
              <p><strong>Accent:</strong> {accentColor.name}</p>
              <p><strong>Engraving:</strong> {projectName || "None"}</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

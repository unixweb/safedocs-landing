"use client";

import { useState, useCallback } from "react";

interface FileItem {
  name: string;
  size: string;
  date: string;
  type: "pdf" | "docx" | "xlsx" | "img";
}

interface Folder {
  name: string;
  icon: string;
  files: FileItem[];
}

const folders: Folder[] = [
  {
    name: "Verträge",
    icon: "📁",
    files: [
      { name: "Mietvertrag_2026.pdf", size: "2.4 MB", date: "03.02.2026", type: "pdf" },
      { name: "Lizenzvertrag_SAP.pdf", size: "1.1 MB", date: "28.01.2026", type: "pdf" },
      { name: "NDA_Partner_AG.pdf", size: "340 KB", date: "15.01.2026", type: "pdf" },
      { name: "Arbeitsvertrag_Vorlage.docx", size: "89 KB", date: "10.01.2026", type: "docx" },
    ],
  },
  {
    name: "Rechnungen",
    icon: "📄",
    files: [
      { name: "Rechnung_2026-001.pdf", size: "156 KB", date: "01.02.2026", type: "pdf" },
      { name: "Rechnung_2026-002.pdf", size: "198 KB", date: "05.02.2026", type: "pdf" },
      { name: "Ausgaben_Q1.xlsx", size: "1.8 MB", date: "31.01.2026", type: "xlsx" },
    ],
  },
  {
    name: "Personal",
    icon: "👥",
    files: [
      { name: "Gehaltsabrechnung_Jan.pdf", size: "245 KB", date: "31.01.2026", type: "pdf" },
      { name: "Urlaubsplanung_2026.xlsx", size: "67 KB", date: "05.01.2026", type: "xlsx" },
      { name: "Organigramm.pdf", size: "890 KB", date: "20.12.2025", type: "pdf" },
    ],
  },
  {
    name: "Projekte",
    icon: "🗂️",
    files: [
      { name: "Projektplan_SafeDocs.pdf", size: "3.2 MB", date: "08.02.2026", type: "pdf" },
      { name: "Wireframes_v3.pdf", size: "5.7 MB", date: "02.02.2026", type: "pdf" },
      { name: "Meeting_Notes.docx", size: "42 KB", date: "07.02.2026", type: "docx" },
      { name: "Screenshot_Dashboard.png", size: "1.4 MB", date: "06.02.2026", type: "img" },
    ],
  },
];

type UploadPhase = "idle" | "scanning" | "encrypting" | "done";

const typeIcons: Record<FileItem["type"], { color: string; label: string }> = {
  pdf: { color: "text-red-500", label: "PDF" },
  docx: { color: "text-blue-500", label: "DOC" },
  xlsx: { color: "text-green-600", label: "XLS" },
  img: { color: "text-purple-500", label: "IMG" },
};

function FileIcon({ type }: { type: FileItem["type"] }) {
  const { color } = typeIcons[type];
  return (
    <svg className={`h-5 w-5 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  );
}

export default function LiveDemo() {
  const [activeFolder, setActiveFolder] = useState(0);
  const [uploadPhase, setUploadPhase] = useState<UploadPhase>("idle");
  const [uploadProgress, setUploadProgress] = useState(0);

  const currentFiles = folders[activeFolder].files;

  const startUpload = useCallback(() => {
    if (uploadPhase !== "idle") return;

    // Phase 1: ClamAV scanning
    setUploadPhase("scanning");
    setUploadProgress(0);

    const scanInterval = setInterval(() => {
      setUploadProgress((p) => {
        if (p >= 40) {
          clearInterval(scanInterval);
          // Phase 2: Encryption
          setUploadPhase("encrypting");
          const encryptInterval = setInterval(() => {
            setUploadProgress((p2) => {
              if (p2 >= 90) {
                clearInterval(encryptInterval);
                // Phase 3: Done
                setTimeout(() => {
                  setUploadPhase("done");
                  setUploadProgress(100);
                  // Reset after 3s
                  setTimeout(() => {
                    setUploadPhase("idle");
                    setUploadProgress(0);
                  }, 3000);
                }, 300);
                return 90;
              }
              return p2 + 5;
            });
          }, 80);
          return 40;
        }
        return p + 4;
      });
    }, 80);
  }, [uploadPhase]);

  const phaseLabel = {
    idle: "",
    scanning: "ClamAV-Scan läuft…",
    encrypting: "Verschlüsselung…",
    done: "Sicher gespeichert!",
  };

  return (
    <section id="live-demo" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Erleben Sie SafeDocs in Aktion
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Klicken Sie durch die Ordner und testen Sie den sicheren Upload-Prozess
          </p>
        </div>

        {/* macOS Window */}
        <div className="mx-auto max-w-4xl">
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
            {/* Title bar */}
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-3 text-sm text-gray-500 font-medium">
                SafeDocs Portal — Dokumentenverwaltung
              </span>
            </div>

            {/* Body */}
            <div className="flex min-h-[400px]">
              {/* Sidebar */}
              <nav className="w-48 shrink-0 bg-gray-50 border-r border-gray-200 p-3" aria-label="Ordner">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 px-2">
                  Ordner
                </p>
                {folders.map((folder, idx) => (
                  <button
                    key={folder.name}
                    onClick={() => setActiveFolder(idx)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition cursor-pointer ${
                      idx === activeFolder
                        ? "bg-primary-light/10 text-primary font-semibold"
                        : "text-text-dark hover:bg-gray-100"
                    }`}
                  >
                    <span>{folder.icon}</span>
                    <span>{folder.name}</span>
                    <span className="ml-auto text-xs text-text-muted">{folder.files.length}</span>
                  </button>
                ))}
              </nav>

              {/* Main content */}
              <div className="flex-1 bg-white">
                {/* Toolbar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                  <h3 className="font-semibold text-text-dark">
                    {folders[activeFolder].icon} {folders[activeFolder].name}
                  </h3>
                  <button
                    onClick={startUpload}
                    disabled={uploadPhase !== "idle"}
                    className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition cursor-pointer ${
                      uploadPhase !== "idle"
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-primary-light text-white hover:bg-primary"
                    }`}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                    Demo-Upload
                  </button>
                </div>

                {/* Upload progress bar */}
                {uploadPhase !== "idle" && (
                  <div className="px-4 py-3 border-b border-gray-100 bg-gray-50" aria-live="polite">
                    <div className="flex items-center gap-3 mb-2">
                      {uploadPhase === "scanning" && (
                        <svg className="h-5 w-5 text-amber-500 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                      )}
                      {uploadPhase === "encrypting" && (
                        <svg className="h-5 w-5 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                      )}
                      {uploadPhase === "done" && (
                        <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                      )}
                      <span className="text-sm font-medium text-text-dark">
                        {phaseLabel[uploadPhase]}
                      </span>
                      <span className="ml-auto text-xs text-text-muted tabular-nums">
                        {uploadProgress}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-200 ${
                          uploadPhase === "scanning"
                            ? "bg-amber-500"
                            : uploadPhase === "encrypting"
                            ? "bg-primary-light"
                            : "bg-accent"
                        }`}
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* File list */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100 text-left text-xs text-text-muted uppercase tracking-wider">
                        <th className="px-4 py-3 font-medium">Name</th>
                        <th className="px-4 py-3 font-medium hidden sm:table-cell">Typ</th>
                        <th className="px-4 py-3 font-medium hidden sm:table-cell">Größe</th>
                        <th className="px-4 py-3 font-medium">Datum</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentFiles.map((file) => (
                        <tr
                          key={file.name}
                          className="border-b border-gray-50 hover:bg-gray-50 transition"
                        >
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <FileIcon type={file.type} />
                              <span className="text-text-dark font-medium truncate max-w-[200px]">
                                {file.name}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-text-muted hidden sm:table-cell">
                            {typeIcons[file.type].label}
                          </td>
                          <td className="px-4 py-3 text-text-muted hidden sm:table-cell tabular-nums">
                            {file.size}
                          </td>
                          <td className="px-4 py-3 text-text-muted tabular-nums">
                            {file.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* File count footer */}
                <div className="px-4 py-3 text-xs text-text-muted border-t border-gray-100">
                  {currentFiles.length} Dokument{currentFiles.length !== 1 ? "e" : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

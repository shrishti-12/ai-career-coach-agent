"use client";
import { useState } from "react";

interface FormProps {
  onResult: (text: string) => void;
}

export default function Form({ onResult }: FormProps) {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/ai-cover-letter-agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeText: resume, jobDescription }),
      });

      const data = await res.json();

      if (data.coverLetter) {
        onResult(data.coverLetter);
      } else {
        onResult("❌ Failed to generate cover letter.");
      }
    } catch (err) {
      console.error("Error:", err);
      onResult("❌ Error generating cover letter.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-bold">Paste Your Resume Text</label>
        <textarea
          value={resume}
          onChange={(e) => setResume(e.target.value)}
          rows={4}
          className="w-full border p-2 rounded"
        />
      </div>
      <div>
        <label className="block font-bold">Job Description</label>
        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          rows={4}
          className="w-full border p-2 rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Cover Letter"}
      </button>
    </form>
  );
}

// "use client"; STARTING
// import { useState } from "react";

// interface FormProps {
//   onResult: (text: string) => void;
// }

// export default function Form({ onResult }: FormProps) {
//   const [resume, setResume] = useState("");
//   const [jobDescription, setJobDescription] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("/api/ai-cover-letter-agent", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ resumeText: resume, jobDescription }),
//       });

//       const data = await res.json();

//       if (data.coverLetter) {
//         onResult(data.coverLetter);
//       } else {
//         onResult("❌ Failed to generate cover letter.");
//       }
//     } catch (err) {
//       console.error("Error:", err);
//       onResult("❌ Error generating cover letter.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label className="block font-bold">Paste Your Resume Text</label>
//         <textarea
//           value={resume}
//           onChange={(e) => setResume(e.target.value)}
//           rows={4}
//           className="w-full border p-2 rounded"
//         />
//       </div>
//       <div>
//         <label className="block font-bold">Job Description</label>
//         <textarea
//           value={jobDescription}
//           onChange={(e) => setJobDescription(e.target.value)}
//           rows={4}
//           className="w-full border p-2 rounded"
//         />
//       </div>
//       <button
//         type="submit"
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//         disabled={loading}
//       >
//         {loading ? "Generating..." : "Generate Cover Letter"}
//       </button>
//     </form>
//   );
// }










// "use client";
// import { useState } from "react";

// export default function Form({ onResult }: { onResult: (r: string) => void }) {
//   const [resumeText, setResumeText] = useState("");
//   const [jobDesc, setJobDesc] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     const res = await fetch("/api/ai-cover-letter-agent", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ resumeText, jobDescription: jobDesc }),
//     });

//     const data = await res.json();
//     setLoading(false);

//     if (data.coverLetter) onResult(data.coverLetter);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <textarea
//         placeholder="Paste your resume text..."
//         value={resumeText}
//         onChange={(e) => setResumeText(e.target.value)}
//         className="w-full border p-2 rounded"
//         required
//       />
//       <textarea
//         placeholder="Paste the job description..."
//         value={jobDesc}
//         onChange={(e) => setJobDesc(e.target.value)}
//         className="w-full border p-2 rounded"
//         required
//       />
//       <button
//         type="submit"
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//         disabled={loading}
//       >
//         {loading ? "Generating..." : "Generate Cover Letter"}
//       </button>
//     </form>
//   );
// }
// "use client";
// import { useState } from "react";

// interface FormProps {
//   onResult: (text: string) => void;
// }

// export default function Form({ onResult }: FormProps) {
//   const [resume, setResume] = useState("");
//   const [jobDescription, setJobDescription] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Call your AI API (replace with your actual endpoint)
//     const res = await fetch("/api/generate-cover-letter", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ resume, jobDescription }),
//     });

//     const data = await res.json();
//     onResult(data.coverLetter);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label className="block font-bold">Paste Your Resume Text</label>
//         <textarea
//           value={resume}
//           onChange={(e) => setResume(e.target.value)}
//           rows={6}
//           className="w-full border p-2 rounded"
//         />
//       </div>
//       <div>
//         <label className="block font-bold">Job Description</label>
//         <textarea
//           value={jobDescription}
//           onChange={(e) => setJobDescription(e.target.value)}
//           rows={4}
//           className="w-full border p-2 rounded"
//         />
//       </div>
//       <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
//         Generate Cover Letter
//       </button>
//     </form>
//   );
// }


// import { NextRequest, NextResponse } from "next/server";
// import { db } from "@/configs/db"; // make sure this points to your drizzle client
// import { historyTable } from "@/configs/schema";
// import { currentUser } from "@clerk/nextjs/server";

// export async function POST(req: NextRequest) {
//   try {
//     // 1. Check auth
//     const user = await currentUser();
//     if (!user) {
//       return NextResponse.json(
//         { error: "Unauthorized" },
//         { status: 401 }
//       );
//     }

//     // 2. Extract body
//     const { letter } = await req.json();

//     // 3. Insert into historyTable
//     const saved = await db.insert(historyTable).values({
//       recordId: crypto.randomUUID(), // unique recordId
//       userEmail: user?.emailAddresses?.[0]?.emailAddress ?? "",
//       aiAgentType: "ai-tools/ai-cover-letter-agent",
//       content: { content: letter }, // stored as JSONB
//       createdAt: new Date(),
//       metaData: "ai-cover-letter",
//     }).returning();

//     // 4. Respond
//     return NextResponse.json({
//       message: "Saved successfully",
//       saved,
//     });
//   } catch (error) {
//     console.error("Error in POST /ai-cover-letter-agent:", error);
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }


// "use client";
// import Form from "../_components/Form";
// import Result from "../_components/Result";
// import { useState } from "react";

// export default function CoverLetterPage() {
//   const [result, setResult] = useState<string | null>(null);

//   const handleGenerate = async (text: string) => {
//     setResult(text);

//     // Save to Neon DB via API
//     try {
//       const res = await fetch("/api/ai-cover-letter-agent", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ letter: text }),
//       });

//       const data = await res.json();
//       if (data.success) {
//         console.log("Cover letter saved ✅", data.data);
//       } else {
//         console.error("Save failed ❌", data.error);
//       }
//     } catch (err) {
//       console.error("Error saving cover letter:", err);
//     }
//   };

//   return (
//     <div className="p-6 space-y-4">
//       <h1 className="text-2xl font-bold">AI Cover Letter Generator</h1>
//       <Form onResult={handleGenerate} />
//       {result && <Result text={result} />}
//     </div>
//   );
// }






























// "use client";
// import Form from "../_components/Form";
// import Result from "../_components/Result";
// import { useState } from "react";

// export default function CoverLetterPage() {
//   const [result, setResult] = useState<string | null>(null);

//   const handleGenerate = (text: string) => {
//     setResult(text);
//   };

//   return (
//     <div className="p-6 space-y-4">
//       <h1 className="text-2xl font-bold">AI Cover Letter Generator</h1>
//       <Form onResult={handleGenerate} />
//       {result && <Result text={result} />}
//     </div>
//   );
// }










// import Form from "./_components/Form";
// import Result from "./_components/Result";
// "use client"
// import Form from "../_components/Form";
// import Result from "../_components/Result";
// import { useState } from "react";

// export default function CoverLetterPage() {
//   const [result, setResult] = useState<string | null>(null);

//   return (
//     <div className="p-6 space-y-4">
//       <h1 className="text-2xl font-bold">AI Cover Letter Generator</h1>
//       <Form onResult={setResult} />
//       {result && <Result text={result} />}
//     </div>
//   );
// }
// "use client";
// import Form from "../_components/Form";
// import Result from "../_components/Result";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { v4 as uuidv4 } from "uuid";
// export default function CoverLetterPage() {
//   const [result, setResult] = useState<string | null>(null);
//   const router = useRouter();

//   const handleGenerate = (text: string) => {
//     setResult(text);

//     // Generate new unique ID and push to route
//     const newId = uuidv4();
//     router.push(`/ai-tools/ai-cover-letter-agent/${newId}`);
//   };

//   return (
//     <div className="p-6 space-y-4">
//       <h1 className="text-2xl font-bold">AI Cover Letter Generator</h1>
//       <Form onResult={handleGenerate} />
//       {result && <Result text={result} />}
//     </div>
//   );
// }

// routes/ai-tools/ai-cover-letter-agent/[id]/page.tsx
// "use client";///STATING

// import { useParams } from "next/navigation";
// import Form from "../_components/Form";
// import Result from "../_components/Result";
// import { useState } from "react";

// export default function CoverLetterPage() {
//   const [result, setResult] = useState<string | null>(null);
//   const params = useParams(); // 🔥 this gives you { id: "123" } from the URL

//   const handleGenerate = (text: string) => {
//     setResult(text);
//   };

//   return (
//     <div className="p-6 space-y-4">
//       <h1 className="text-2xl font-bold">AI Cover Letter Generator</h1>
//       <p className="text-gray-600">Session ID: {params.id}</p>
//       <Form onResult={handleGenerate} />
//       {result && <Result text={result} />}
//     </div>
//   );
// }
"use client";
import Form from "../_components/Form";
import Result from "../_components/Result";
import { useState } from "react";

export default function CoverLetterPage() {
  const [result, setResult] = useState<string | null>(null);

  const handleGenerate = (text: string) => {
    setResult(text);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">AI Cover Letter Generator</h1>
      <Form onResult={handleGenerate} />
      {result && <Result text={result} />}
    </div>
  );
}

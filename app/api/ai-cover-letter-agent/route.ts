//TRY 1

// import { NextRequest, NextResponse } from "next/server";  

// // 👇 agar aap Gemini, OpenAI ya koi aur AI API use kar rahe ho
// // yaha import aur client setup karna hoga.
// // Filhal mai placeholder logic de raha hoon jisme AI call ki jagah
// // ek dummy response hai. Aap apna AI integration yaha laga doge.

// // Example: import OpenAI from "openai";
// // const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// export async function POST(req: NextRequest) {
//   try {
//     const { resumeText, jobDescription } = await req.json();

//     if (!resumeText || !jobDescription) {
//       return NextResponse.json(
//         { error: "Missing resumeText or jobDescription" },
//         { status: 400 }
//       );
//     }

//     // 📝 Yeh prompt AI ko diya jayega
//     const prompt = `
// Write a professional, tailored cover letter for the given job. 
// Important rules:
// - Do NOT copy the job description word-for-word. Reframe it naturally.  
// - Highlight the candidate’s education, projects, skills, achievements, and experience from the resume.  
// - Maintain a polite, confident, and formal tone.  
// - End with a strong closing about contribution and eagerness to learn.  

// Resume:
// ${resumeText}

// Job Description:
// ${jobDescription}
// `;

//     // ------------------------------
//     // 👇 AI se call (replace with your API)
//     // const completion = await client.chat.completions.create({
//     //   model: "gpt-4o-mini",
//     //   messages: [{ role: "user", content: prompt }],
//     // });
//     // const coverLetter = completion.choices[0].message.content;
//     // ------------------------------

//     // Filhal placeholder output (AI ko integrate karne ke pehle)
//     const coverLetter = `
// Dear Hiring Manager,

// I am writing to express my interest in the Systems Engineer role at Infosys. With a strong foundation in Java, HTML, CSS, JavaScript, and React, I am confident in my ability to contribute to developing and maintaining scalable web applications that align with Infosys’s high standards of innovation and quality.

// During my B.Tech in Electronics and Communication Engineering (CGPA 8.01), I honed both my technical and analytical skills. I have built projects such as a Portfolio Website (HTML, CSS, JavaScript) and a Tic Tac Toe Game in Java with Swing, which showcase my problem-solving ability and enthusiasm for creating user-focused software solutions. In addition, completing Striver’s A2Z DSA sheet has strengthened my coding efficiency and logical reasoning.

// I admire Infosys’s commitment to delivering cutting-edge technology solutions, and I am eager to collaborate with your team to design and implement impactful software systems. My adaptability, teamwork skills, and dedication to continuous learning make me a strong fit for this opportunity.

// Thank you for considering my application. I would welcome the chance to discuss how my skills and projects align with Infosys’s goals.

// Sincerely,  
// Shrishti Kumari
// `;

//     return NextResponse.json({ coverLetter });
//   } catch (error: any) {
//     console.error("Error generating cover letter:", error);
//     return NextResponse.json(
//       { error: error.message || "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }












//IF NOthing then i use this??
//TRY 2 


// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   try {
//     const { resumeText, jobDescription } = await req.json();

//     if (!resumeText || !jobDescription) {
//       return NextResponse.json(
//         { error: "Missing resumeText or jobDescription" },
//         { status: 400 }
//       );
//     }

//     // Extract name from resume (assuming "Name: XYZ" format)
//     const nameMatch = resumeText.match(/Name:\s*(.*)/i);
//     const candidateName = nameMatch ? nameMatch[1].trim() : "Your Name";

//     // --- AI logic / API call can go here ---
//     const coverLetter = `
// Dear Hiring Manager,

// I am excited to apply for the position based on your job description: "${jobDescription}". 
// With my experience and skills as described in my resume, I believe I can contribute effectively to your team.

// Sincerely,
// ${candidateName}
// `;

//     return NextResponse.json({ coverLetter });
//   } catch (error: any) {
//     console.error("Error generating cover letter:", error);
//     return NextResponse.json(
//       { error: error.message || "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }




// 2nd CHOICE


import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { resumeText, jobDescription } = await req.json();

    if (!resumeText || !jobDescription) {
      return NextResponse.json(
        { error: "Missing resumeText or jobDescription" },
        { status: 400 }
      );
    }

    // Extract candidate name from resume (very basic parsing)
    let candidateName = "Candidate";
    const nameMatch = resumeText.match(/Name[:\-]?\s*(.+)/i);
    if (nameMatch) {
      candidateName = nameMatch[1].trim();
    }

    // 📝 Enhanced placeholder cover letter
    const coverLetter = `
Dear Hiring Manager,

I am excited to apply for this opportunity. Based on my background:

${resumeText}

and considering the job requirements:

${jobDescription}

I believe I am a strong fit for this role. My skills, projects, and experiences will allow me to contribute effectively to your team while continuing to grow and learn.

Sincerely,
${candidateName}
    `;

    return NextResponse.json({ coverLetter });
  } catch (error: any) {
    console.error("Error generating cover letter:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}









































// ///////////////////////////////////////////////will use this
// // app/api/cover-letter-agent/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// export async function POST(req: Request) {
//   try {
//     const { resumeText, jobDescription } = await req.json();

//     if (!resumeText || !jobDescription) {
//       return NextResponse.json(
//         { error: "Please provide resumeText and jobDescription." },
//         { status: 400 }
//       );
//     }

//     const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

//     const prompt = `
// You are a professional cover letter writer.
// Write a personalized, polished cover letter that highlights the candidate's most relevant skills and achievements.
// Do NOT copy the job description text directly. Instead, use the resume details to show alignment with the job.

// Resume:
// ${resumeText}

// Job Description:
// ${jobDescription}
//     `;

//     const result = await model.generateContent(prompt);
//     const coverLetter = result.response.text();

//     return NextResponse.json({ coverLetter });
//   } catch (error: any) {
//     console.error("Cover Letter API Error:", error);
//     return NextResponse.json(
//       { error: "Something went wrong while generating the cover letter." },
//       { status: 500 }
//     );
//   }
// }



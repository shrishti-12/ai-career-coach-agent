import React from 'react'
import AiToolCard from './AiToolCard';

export const aiToolsList = [
    {
        name:'AI Career Q&A Chat',
        desc:'Chat with the AI Agent',
        icon:'/chatbot.png',
        button:'Lets Chat',
        path:'/ai-tools/ai-chat'
    },
    {
        name:'AI Resume Analyzer',
        desc:'Improve Your Resume',
        icon:'/resume.png',
        button:'Analyze Now',
        path:'/ai-tools/ai-resume-analyzer'
    },
    {
        name:'Career Generator',
        desc:'Build your roadmap',
        icon:'/roadmap.png',
        button:'Generate Now',
        path:'/ai-tools/ai-roadmap-agent'
    },
    {
        name:'Cover Letter Generator',
        desc:'Write a Cover Letter',
        icon:'/cover.png',
        button:'Create Now',
        path:'/ai-tools/ai-cover-letter-agent'
    }
];
function AiToolsList() {
  return (
    <div className='mt-7 p-5 bg-white border rounded-lg'>
      <h2 className='font-bold text-lg'>Available AI Tools</h2>
       <p>Start Building and Shape Your Career with this exclusive AI Tools</p> 
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-4'>
            {aiToolsList.map((tool:any,index)=>(
                <AiToolCard tool={tool} key={tool.path}/>
            ))}
        </div>
    </div>
  )
}
 
export default AiToolsList

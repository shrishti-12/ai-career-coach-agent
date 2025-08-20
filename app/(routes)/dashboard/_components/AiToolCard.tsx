"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import ResumeUploadDialogue from './ResumeUploadDialogue'
import RoadmapGeneratorDialog from './RoadmapGeneratorDialog'


export interface TOOL{
    name:string,
    desc:string,
    icon:string,
    button:string,
    path:string
}

type AIToolProps ={
    readonly tool:TOOL
}

function AiToolCard({tool}: AIToolProps) {
  const id=uuidv4();
  const router=useRouter();
  const [openResumeUpload, setOpenResumeUpload]=useState(false);
  const [openRoadmapDialog,setOpenRoadmapDialog]=useState(false);
  
  const onClickButton =async()=>{
    //Create a new record to the History table 
    
    if(tool.name=='AI Resume Analyzer'){
      setOpenResumeUpload(true);
      return; 
    }
    if(tool.path=='/ai-tools/ai-roadmap-agent'){
      setOpenRoadmapDialog(true);
      return;
    }
    
    const result=await axios.post('api/history',{
      recordId:id,
      content:[],
      aiAgentType:tool.path,
    });
    console.log(result);
    router.push(tool.path+"/"+id);
  }

  return (
    <div className='p-3 border rounded-lg'>
        <Image src = {tool.icon} width={50} height={50} alt={tool.name}/>
        <h2 className='font-bold mt-2'>{tool.name}</h2>
        <p className='text-gray-400'>{tool.desc}</p>
        {/* <Button className="w-full mt-3" onClick={onClickButton}>
            {tool.button}
        </Button> */}
        <Link href={tool.path +"/"+id}>
        <Button className="w-full mt-3"  onClick={onClickButton}>{tool.button}</Button>
        </Link>

        <ResumeUploadDialogue openResumeUpload={openResumeUpload}
        setOpenResumeDialog={setOpenResumeUpload}/>
        <RoadmapGeneratorDialog
        openRoadmapDialog={openRoadmapDialog} //1st openRoadmapDialog refers to the params created in RoadmapGeneratorDialog.tsx
        setOpenRoadmapDialog={() => setOpenRoadmapDialog(false)}/>
    </div>
    
  )
}

export default AiToolCard

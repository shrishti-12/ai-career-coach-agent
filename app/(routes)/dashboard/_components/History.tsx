"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { aiToolsList } from "./AiToolsList";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { index } from "drizzle-orm/pg-core";
import path from "path";
import Link from "next/link";
import { generateKey } from "crypto";




// function History() 
// {
//   const[loading, setLoading] = useState(false)

//   useEffect(()=>{
//     GetHistory();
//   }, [])


//   const GetHistory = async()=>{
//     setLoading(true)
//     const result = await axios.get('/api/history');
//     console.log(result.data);
//     setUserHistory(result.data);
//     setLoading(false);
//   }

//   const GetAgentName=(path:string)=>{
//     const agent = aiToolsList.find(item=>item.path==path);
//     return agent;
//   }


//   const [userHistory, setUserHistory] = useState([]);
//   return(
//     <div className="mt-5 p-5 border rounded-xl">
//       <h2 className="font-bold text-lg">Previous History</h2>
//       <p>What you previously work on, You can find here</p>

//     {loading&& 
//     <div>
//       {[1, 2, 3, 4, 5].map((item, index)=>(
//         <div key={index}>
//           <Skeleton className="h-[50px] mt-4 w-full rounded-md" />
//         </div>
//       ))}
//     </div>
//       }




//       {userHistory?.length == 0 && !loading ?
//       <div className="flex items-center justify-center mt-5 flex-col mt-6">
//         <Image src={'/idea.png'} alt = 'blub'
//         width={50}
//         height={50}
//         />
//         <h2>You do Not Have any History</h2>
//         <Button className="mt-5">Explore AI Tools</Button>
//       </div>
//      :
//         <div>
//             {userHistory?.map((history:any, index:number) => (
//               <Link href={history?.aiAgentType + "/" + history?.recordId} className="flex justify-between items-center my-3 border p-3 rounded-lg">
//               <div key={index} className="flex gap-5">
//                 <Image src={GetAgentName(history?.aiAgentType)?.icon} alt={'image'}
//                 width={20}
//                 height={20}
//                 />
//                 <h2>{GetAgentName(history?.aiAgentType)?.name}</h2>
//               </div>
//                 <h2>{history.createdAt}</h2>
//               </Link>
//             ))}
//         </div>
//       }
//     </div>
//   )
// }
// export default History;

















 type HistoryRecord = {
  createdAt: string;
  aiAgentType: string;
  recordId: string;
};

const History = () => {
  const [userHistory, setUserHistory] = useState<HistoryRecord[]>([]);
  const [loading, setLoading] = useState(false);

  const GetHistory = async () => {
    try {
      setLoading(true);
      const result = await axios.get("/api/history");
      console.log("Fetched History:", result.data);
      setUserHistory(result.data);
    } catch (err) {
      console.error("Failed to fetch history", err);
    } finally {
      setLoading(false);  // ✅ Always stop loading even if error occurs
    }
  };

  const GetAgentName = (path: string) => {
    return aiToolsList.find((item) => item.path === path);
  };

  useEffect(() => {
    GetHistory();
  }, []);

  return (
    <div className="mt-5 p-5 border rounded-xl">
      <h2 className="font-bold text-lg">Previous History</h2>
      <p>What you previously work on, You can find here</p>

      {loading && (
        <div>
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="my-2">
              <Skeleton className="h-[20px] w-[100px] rounded-md" />
            </div>
          ))}
        </div>
      )}

      {!loading && userHistory.length === 0 && (
        <p className="text-sm text-gray-500 mt-2">No history available.</p>
      )}

      {!loading &&
        userHistory
          .slice(0, 10) // No need to sort, API provides sorted data
          .map((history, index) => {
            const agent = GetAgentName(history.aiAgentType);
            return (
              <a
                key={index}
                href={`${history.aiAgentType}/${history.recordId}`}
                className="block border border-gray-300 rounded p-2 hover:bg-gray-50 my-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {agent?.icon ? (
                      <Image
                        src={agent.icon}
                        alt={agent.name}
                        width={16}
                        height={16}
                      />
                    ) : (
                      <div className="w-4 h-4 bg-gray-300 rounded" />
                    )}
                    <span className="text-sm">
                      {agent?.name || "Unknown Tool"}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">
                    {new Date(history.createdAt).toLocaleString()}
                  </span>
                </div>
              </a>
            );
          })}
    </div>
  );
};

 export default History; 

import Navbar from "@/components/Navbar";
import React from "react";

function Documentation() {
  const codeStringAsync = `
  
    const sendEmail = async () => {

        let endpoint = "https://onemail.vercel.app/api/send";
    
        let params = {
            to: "",
            subject: "",
            text: "",
            html: "",
            secret: ""
        }
    
        let response = await fetch(endpoint, {
            method: "POST",
            body: JSON.stringify(params)
        });
        
        let data = await response.json();
        console.log(data);
    }
    `;

  const codeStringServerLess = `
     const sendEmail = () => {

        let endpoint = "https://onemail.vercel.app/api/send";
    
        let params = {
            to: "",
            subject: "",
            text: "",
            html: "",
            secret: ""
        }
    
        await fetch(endpoint, {
            method: "POST",
            body: JSON.stringify(params)
        });
        
       // email will be delivered in the background
    }
    `;
  return (
    <div className="lg:px-28 lg:py-16 font-jost">
      <h1 className="text-2xl">Documentation</h1>
      <p className="text-sm mt-2 text-zinc-600">
        make sure you have a onemail account & atleast 1 active credential
      </p>

      <h1 className="text-xl mt-28">
        Send email & wait for response using{" "}
        <span className="font-mono text-base bg-red-100 px-4 py-1">
          async & await
        </span>
      </h1>

      <pre className="bg-zinc-200 pb-4 mt-7">
        <code className="text-sm">{codeStringAsync}</code>
      </pre>

      <h1 className="text-xl mt-28">
        Send email in the background using our{" "}
        <span className="font-mono text-base bg-red-100 px-4 py-1">
          serverless function
        </span>
      </h1>

      <pre className="bg-zinc-200 pb-4 mt-7">
        <code className="text-sm">{codeStringServerLess}</code>
      </pre>
    </div>
  );
}

export default Documentation;
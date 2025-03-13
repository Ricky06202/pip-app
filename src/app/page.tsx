"use client";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files?.[0] as File | null);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(event.target.files?.[0] as File);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile as File);
    const response = await axios.post(
      "/api/blob?name=" + selectedFile?.name,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    setFileUrl(response.data);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4 border-2 p-2"
      />
      {previewUrl && (
        <img src={previewUrl} alt="preview" className="mb-4 max-w-[300px]" />
      )}
      <button
        onClick={handleUpload}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Subir archivo
      </button>
      {fileUrl && (
        <p className="mt-4 text-green-500">
          La url del archivo es: <a href={fileUrl}>{fileUrl}</a>
        </p>
      )}
    </div>
  );
}

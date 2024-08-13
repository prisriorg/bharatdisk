"use client"
import React, { useState } from "react";

type File = {
  id: string;
  name: string;
  size: number;
  type: "file" | "folder";
  createdAt: Date;
  updatedAt: Date;
  parentId: string | null;
};

const initialFiles: File[] = [
  {
    id: "1",
    name: "My Documents",
    size: 0,
    type: "folder",
    createdAt: new Date(),
    updatedAt: new Date(),
    parentId: null,
  },
  {
    id: "2",
    name: "image.jpg",
    size: 150000,
    type: "file",
    createdAt: new Date(),
    updatedAt: new Date(),
    parentId: "1",
  },
  {
    id: "3",
    name: "image.jpg",
    size: 150000,
    type: "file",
    createdAt: new Date(),
    updatedAt: new Date(),
    parentId: "1",
  },
  {
    id: "4",
    name: "image.jpg",
    size: 150000,
    type: "file",
    createdAt: new Date(),
    updatedAt: new Date(),
    parentId: "1",
  },
  {
    id: "5",
    name: "image.jpg",
    size: 150000,
    type: "file",
    createdAt: new Date(),
    updatedAt: new Date(),
    parentId: "1",
  },
];

const FileManager = () => {
  const [files, setFiles] = useState<File[]>(initialFiles);
  const [viewOption, setViewOption] = useState<string>("files");
  const [editingFileId, setEditingFileId] = useState<string | null>(null);
  const [newName, setNewName] = useState<string>("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFile = event.target.files?.[0];
    if (newFile) {
      const fileData: File = {
        id: `${files.length + 1}`,
        name: newFile.name,
        size: newFile.size,
        type: "file",
        createdAt: new Date(),
        updatedAt: new Date(),
        parentId: null, // Change this if uploading into a specific folder
      };
      setFiles([...files, fileData]);
    }
  };

  const deleteItem = (itemId: string) => {
    setFiles(files.filter(file => file.id !== itemId && file.parentId !== itemId));
  };

  const startRename = (file: File) => {
    setEditingFileId(file.id);
    setNewName(file.name);
  };

  const handleRename = (fileId: string) => {
    setFiles(
      files.map(file =>
        file.id === fileId ? { ...file, name: newName, updatedAt: new Date() } : file
      )
    );
    setEditingFileId(null);
    setNewName("");
  };

  const filteredFiles = files.filter(file => file.type === viewOption.slice(0, -1));

  return (
      <div className=" rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="pt-2 px-4 text-2xl font-bold">File Manager</h2>
        {/* <input
          type="file"
          onChange={handleFileUpload}
          className="px-4 py-2 border rounded-lg cursor-pointer"
        /> */}
      </div>

      {/* <div className="mb-4">
        <button
          className={`px-4 py-2 mr-2 rounded-lg ${viewOption === "files" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
          onClick={() => setViewOption("files")}
        >
          File List
        </button>
        <button
          className={`px-4 py-2 mr-2 rounded-lg ${viewOption === "folders" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
          onClick={() => setViewOption("folders")}
        >
          Folder List
        </button>
      </div> */}

      <ul className=" p-2 space-y-3">
        {filteredFiles.map(file => (
          <li
            key={file.id}
            className={`flex justify-between items-center p-4 border rounded-lg ${
              file.type === "folder" ? "bg-gray-700" : "bg-gray-800"
            }`}
          >
            {editingFileId === file.id ? (
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={newName}
                  onChange={e => setNewName(e.target.value)}
                  className="p-2 border rounded-lg"
                />
                <button
                  onClick={() => handleRename(file.id)}
                  className="px-3 py-1 text-white bg-blue-500 rounded-lg"
                >
                  Save
                </button>
              </div>
            ) : (
              <>
                <span className="font-medium">
                  {file.type === "folder" ? "📁" : "📄"} {file.name}
                </span>
                <div className="flex space-x-4">
                  <button
                    onClick={() => startRename(file)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Rename
                  </button>
                  <button
                    onClick={() => deleteItem(file.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default FileManager;

// src/tools/deleteFolder.tool.ts
export const deleteFolderTool = {
    name: "delete_folder",
    description: "Elimina archivos o carpetas dentro del Escritorio de Windows",
    inputSchema: {
        type: "object",
        properties: {
            path: {
                type: "string",
                description: "Ruta relativa dentro del Escritorio"
            }
        },
        required: ["path"]
    }
};

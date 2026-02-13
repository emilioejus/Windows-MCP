import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { ListToolsRequestSchema, CallToolRequestSchema } from "@modelcontextprotocol/sdk/types.js";
// import { deleteFolderTool } from "./tools/deleteFolder.tool.js";
import { deleteFolderTool } from "./tools/deleteFolder.tool.js";
import { deleteFolderHandler } from "./handlers/deleteFolder.handler.js";
export function createServer() {
    const server = new Server({
        name: "windows-mcp",
        version: "1.0.0"
    }, {
        capabilities: {
            tools: {}
        }
    });
    // 1️⃣ LISTADO DE TOOLS
    server.setRequestHandler(ListToolsRequestSchema, async () => {
        return {
            tools: [deleteFolderTool]
        };
    });
    // 2️⃣ EJECUCIÓN DE TOOLS
    server.setRequestHandler(CallToolRequestSchema, async (request) => {
        const { name, arguments: args } = request.params;
        if (name === deleteFolderTool.name) {
            return await deleteFolderHandler(args);
        }
        throw new Error(`Tool no soportada: ${name}`);
    });
    return server;
}

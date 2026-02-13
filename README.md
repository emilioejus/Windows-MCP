windows-mcp

MCP server for Windows desktop file/folder management via the Model Context Protocol.


📋 Table of Contents

Overview
Requirements
Installation
Usage
Available Tools
Project Structure
Development
Security
License


Overview
windows-mcp is a Model Context Protocol (MCP) server that exposes tools to manage files and folders on the Windows Desktop. It communicates via stdio transport and is designed to be connected to any MCP-compatible client (e.g., Claude Desktop).

Requirements

Node.js >= 18
Windows OS (relies on USERPROFILE and Desktop path conventions)
npm >= 8


Installation
bash# Clone the repository
git clone [https://github.com/your-username/windows-mcp.git](https://github.com/emilioejus/Windows-MCP.git)
cd windows-mcp

# Install dependencies
npm install

# Build the project
npm run build

Usage
Start the MCP server
bashnpm start
The server communicates over stdio and is ready to be connected to an MCP client.
Connecting with Claude Desktop
Add the following to your claude_desktop_config.json:
json{
  "mcpServers": {
    "windows-mcp": {
      "command": "node",
      "args": ["C:/path/to/windows-mcp/dist/index.js"]
    }
  }
}

Available Tools
delete_folder
Deletes a file or folder located on the Windows Desktop.
ParameterTypeRequiredDescriptionpathstring✅Relative path within the Desktop
Example input:
json{
  "path": "old-project"
}
Example response:
json{
  "success": true,
  "deleted": "old-project"
}

⚠️ Deletion is permanent and recursive. Use with caution.


Project Structure
windows-mcp/
├── src/
│   ├── index.ts                    # Entry point
│   ├── server.ts                   # MCP server setup & request handlers
│   ├── config/
│   │   └── paths.ts                # Desktop path resolution
│   ├── handlers/
│   │   └── deleteFolder.handler.ts # Business logic for delete tool
│   ├── tools/
│   │   └── deleteFolder.tool.ts    # Tool schema definition
│   └── utils/
│       └── pathValidator.ts        # Path safety validation
├── dist/                           # Compiled output (generated)
├── tsconfig.json
├── package.json
└── README.md

Development
Scripts
CommandDescriptionnpm run buildCompile TypeScript to dist/npm startRun the compiled servernpm testRun tests (not yet configured)
Build
bashnpm run build
TypeScript sources in src/ are compiled to dist/ using the config in tsconfig.json (target: ES2022, module: NodeNext).

Security
All file operations are restricted to the Windows Desktop directory. The server enforces:

Path traversal prevention — any path resolving outside the Desktop is rejected.
Existence check — operations on non-existent paths return a descriptive error.

Paths like ../../Windows/System32 will be blocked with an error:
Solo se permite borrar dentro del Escritorio

License
MIT © 2026 Emilio José Ugeda Sanoja — see LICENSE for details.

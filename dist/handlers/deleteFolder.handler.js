import fs from "fs";
import path from "path";
import os from "os";
export async function deleteFolderHandler(input) {
    const desktopPath = path.join(os.homedir(), "Desktop");
    const targetPath = path.resolve(desktopPath, input.path);
    // 🔒 Seguridad anti path traversal
    if (!targetPath.startsWith(desktopPath)) {
        throw new Error("Solo se permite borrar dentro del Escritorio");
    }
    if (!fs.existsSync(targetPath)) {
        throw new Error("La ruta no existe");
    }
    fs.rmSync(targetPath, { recursive: true, force: true });
    return {
        success: true,
        deleted: input.path
    };
}

import path from "path";
import fs from "fs";
import { DESKTOP_PATH } from "../config/paths.js";
export function validateDesktopPath(targetPath) {
    const resolved = path.resolve(targetPath);
    if (!resolved.startsWith(DESKTOP_PATH)) {
        throw new Error("Ruta fuera del Escritorio de Windows");
    }
    if (!fs.existsSync(resolved)) {
        throw new Error("El archivo o carpeta no existe");
    }
    return resolved;
}

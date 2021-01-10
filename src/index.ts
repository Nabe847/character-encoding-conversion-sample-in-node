import fs from "fs";
import iconv from "iconv-lite";

const text = fs.readFileSync(__dirname + "/hoo.txt", { encoding: "utf8" });

fs.writeFileSync(__dirname + "/utf8.txt", text, "utf8");
fs.writeFileSync(__dirname + "/shift-jis.txt", iconv.encode(text, "Shift_JIS"));

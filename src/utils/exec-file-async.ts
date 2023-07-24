import { execFile } from "child_process";
import util from "util";

const execFileAsync = util.promisify(execFile);
//const execFileAsync: (command: string) => Promise<any> = util.promisify(execFile);

export default execFileAsync;